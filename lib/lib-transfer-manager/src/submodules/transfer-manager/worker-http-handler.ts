/**
 * HTTP handler that delegates signed HTTP requests to a pool of worker threads.
 *
 * For UploadPart requests with a file source, the handler forwards the signed
 * headers (including aws-chunked encoding headers) and file offset info to a
 * worker. The worker reads the file slice, computes CRC32, and sends the data
 * in aws-chunked format with a trailing checksum — fulfilling the contract
 * that the checksum middleware set up on the main thread.
 *
 * @internal
 */
import { HttpResponse } from "@smithy/core/protocols";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import type { HttpHandlerOptions, HttpRequest, HttpResponse as HttpResponseShape } from "@smithy/types";
import type { ChecksumAlgorithm } from "@aws-sdk/client-s3";
import { existsSync } from "node:fs";
import { cpus } from "node:os";
import * as path from "node:path";
import { Readable } from "node:stream";
import { Worker } from "node:worker_threads";

/**
 * Build an Error from a worker download-error message. For non-2xx responses
 * (statusCode present), attach `$response`/`$metadata`/`$fault` so the SDK's
 * retry middleware can classify and retry it.
 * @internal
 */
function buildDownloadError(msg: HttpWorkerDownloadErrorMessage): Error {
  const error = new Error(msg.error) as Error & Record<string, unknown>;
  if (msg.name) error.name = msg.name;
  if (msg.code) error.code = msg.code;
  if (typeof msg.statusCode === "number") {
    error.$response = { statusCode: msg.statusCode };
    error.$metadata = { httpStatusCode: msg.statusCode };
    error.$fault = msg.statusCode >= 500 ? "server" : "client";
  }
  return error;
}

/**
 * Creates an empty Readable stream that immediately ends.
 * Used as a placeholder body for UploadPart in threaded uploads.
 * @internal
 */
export function createEmptyReadable(): Readable {
  return new Readable({
    read() {
      this.push(null);
    },
  });
}

/**
 * Serializable subset of HttpRequest.
 * @internal
 */
export interface WorkerHttpRequest extends Omit<HttpRequest, "body"> {
  body?: Uint8Array;
}

/**
 * Serializable subset of HttpResponse.
 * @internal
 */
export interface WorkerHttpResponse extends Omit<HttpResponseShape, "body"> {
  body?: Uint8Array;
}

interface BaseHttpWorkerRequestMessage {
  id: number;
  request: WorkerHttpRequest;
}

export interface HttpWorkerFileRequestMessage extends BaseHttpWorkerRequestMessage {
  type: "httpRequestFromFile";
  filePath: string;
  offset: number;
  length: number;
  checksumAlgorithm?: ChecksumAlgorithm;
  checksumHeader?: string;
}

export interface HttpWorkerRAMRequestMessage extends BaseHttpWorkerRequestMessage {
  type: "httpRequestFromRAM";
  sharedBuffer: SharedArrayBuffer;
  offset: number;
  length: number;
  checksumAlgorithm?: ChecksumAlgorithm;
  checksumHeader?: string;
}

export type HttpWorkerRequestMessage = HttpWorkerFileRequestMessage | HttpWorkerRAMRequestMessage;

/**
 * Main thread → Worker: download a part and write directly to a file offset.
 * @internal
 */
export interface HttpWorkerDownloadToFileMessage extends BaseHttpWorkerRequestMessage {
  type: "httpDownloadToFile";
  filePath: string;
  offset: number;
  expectedLength: number;
  checksumAlgorithm?: ChecksumAlgorithm;
}

/**
 * Main thread → Worker: download a part and stream the response back.
 * @internal
 */
export interface HttpWorkerDownloadStreamMessage extends BaseHttpWorkerRequestMessage {
  type: "httpDownloadStream";
  /**
   * Expected byte length of the part (used for buffer pre-allocation).
   */
  expectedSize: number;
  /**
   * Part/range index for in-order delivery on the main thread.
   */
  rangeIndex: number;
  /**
   * Optional CRC algorithm for inline checksum validation against S3 response headers.
   */
  checksumAlgorithm?: ChecksumAlgorithm;
}

/**
 * Main thread → Worker: return a consumed ArrayBuffer for reuse.
 * Sent after the main-thread consumer has finished reading a transferred buffer.
 * @internal
 */
export interface HttpWorkerReturnBufferMessage {
  type: "returnBuffer";
  /**
   * The ArrayBuffer being returned (transferred back to the worker).
   */
  buffer: ArrayBuffer;
}

export interface HttpWorkerConfigMessage {
  type: "config";
  maxSockets: number;
}

export interface HttpWorkerDoneMessage {
  type: "done";
}

export type HttpWorkerInboundMessage =
  | HttpWorkerRequestMessage
  | HttpWorkerDownloadToFileMessage
  | HttpWorkerDownloadStreamMessage
  | HttpWorkerReturnBufferMessage
  | HttpWorkerConfigMessage
  | HttpWorkerDoneMessage;

export interface HttpWorkerResponseMessage {
  type: "httpResponse";
  id: number;
  response: WorkerHttpResponse;
}

export interface HttpWorkerErrorMessage {
  type: "httpError";
  id: number;
  error: string;
  code?: string;
  name?: string;
}

export interface HttpWorkerReadyMessage {
  type: "ready";
}

/**
 * Worker → Main thread: download part completed successfully.
 * @internal
 */
export interface HttpWorkerDownloadResultMessage {
  type: "httpDownloadResult";
  id: number;
  statusCode: number;
  headers: Record<string, string>;
  bytesWritten: number;
  checksum?: string;
}

/**
 * Worker → Main thread: download part failed.
 * @internal
 */
export interface HttpWorkerDownloadErrorMessage {
  type: "httpDownloadError";
  id: number;
  error: string;
  code?: string;
  name?: string;
  statusCode?: number;
}

/**
 * Worker → Main thread: stream-mode download completed.
 * The ArrayBuffer is transferred (zero-copy) via the postMessage transfer list.
 * @internal
 */
export interface HttpWorkerDownloadStreamResultMessage {
  type: "httpDownloadStreamResult";
  id: number;
  rangeIndex: number;
  /**
   * The ArrayBuffer containing the downloaded part data (transferred, not copied).
   */
  buffer: ArrayBuffer;
  byteLength: number;
  statusCode: number;
  headers: Record<string, string>;
  checksum?: string;
}

export type HttpWorkerOutboundMessage =
  | HttpWorkerResponseMessage
  | HttpWorkerErrorMessage
  | HttpWorkerReadyMessage
  | HttpWorkerDownloadResultMessage
  | HttpWorkerDownloadErrorMessage
  | HttpWorkerDownloadStreamResultMessage;

/** @internal */
export function defaultWorkerCount(): number {
  return cpus().length;
}

/** @internal */
export interface FileSource {
  type: "file";
  filePath: string;
  partSize: number;
  totalFileSize: number;
  checksumAlgorithm?: ChecksumAlgorithm;
  checksumHeader?: string;
}

/** @internal */
export interface SharedBufferSource {
  type: "sharedBuffer";
  sharedBuffer: SharedArrayBuffer;
  partSize: number;
  totalSize: number;
  checksumAlgorithm?: ChecksumAlgorithm;
  checksumHeader?: string;
}

/**
 * Data source passed per-request to handle().
 * Tells the worker where to read the body from.
 * @internal
 */
export type DataSource = FileSource | SharedBufferSource;

/**
 * Options for WorkerHttpHandler.handle() that extend standard HttpHandlerOptions
 * with an optional data source for UploadPart requests.
 * @internal
 */
export interface WorkerHttpHandlerOptions extends HttpHandlerOptions {
  dataSource?: DataSource;
}

/**
 * Metadata passed to the worker instructing it to write the HTTP response body
 * to a specific file offset rather than returning it over the message channel.
 * @internal
 */
export interface DownloadDataToFile {
  /**
   * Absolute path to the temp file where the part body should be written.
   */
  filePath: string;
  /**
   * Absolute byte offset in the file where writing should begin. Used only as a
   * fallback: the worker prefers the start byte from the response's ContentRange
   * header, since part sizes are not guaranteed to be uniform.
   */
  offset: number;
  /**
   * Expected byte length of the part body. Used only as a fallback, for the same
   * reason as {@link DownloadDataToFile.offset}.
   */
  expectedLength: number;
  /**
   * Optional algorithm for inline checksum validation against S3 response headers.
   */
  checksumAlgorithm?: ChecksumAlgorithm;
  /**
   * Unique token for correlating the download result with the caller.
   */
  resultToken?: string;
}

/**
 * Metadata passed to the worker instructing it to download a part into a
 * worker-owned ArrayBuffer and transfer ownership to main (zero-copy).
 * @internal
 */
export interface DownloadStreamOptions {
  /**
   * Expected byte length of the part (used for buffer pre-allocation).
   */
  expectedSize: number;
  /**
   * Part/range index for in-order delivery on the main thread.
   */
  rangeIndex: number;
  /**
   * Optional algorithm for inline checksum validation against S3 response headers.
   */
  checksumAlgorithm?: ChecksumAlgorithm;
  /**
   * Unique token for correlating the download result with the caller.
   */
  resultToken?: string;
}

/**
 * Options for WorkerHttpHandler.handle() that extend standard HttpHandlerOptions
 * with download-to-file metadata for Part GET requests.
 * @internal
 */
export interface WorkerHttpHandlerDownloadOptions extends HttpHandlerOptions {
  downloadDataToFile?: DownloadDataToFile;
  downloadStream?: DownloadStreamOptions;
}

/**
 * Result returned when a download-to-file request completes successfully.
 * @internal
 */
export interface DownloadToFileResult {
  statusCode: number;
  headers: Record<string, string>;
  bytesWritten: number;
  checksum?: string;
}

/**
 * Result returned when a transfer-mode download completes successfully.
 * Contains the transferred ArrayBuffer (zero-copy from worker).
 * @internal
 */
export interface DownloadStreamResult {
  rangeIndex: number;
  /**
   * The ArrayBuffer transferred from the worker (zero-copy).
   */
  buffer: ArrayBuffer;
  byteLength: number;
  statusCode: number;
  headers: Record<string, string>;
  checksum?: string;
}

export class WorkerHttpHandler {
  private workers: Worker[] = [];
  private inflightRequests = new Map<
    number,
    { resolve: (value: { response: HttpResponse }) => void; reject: (error: unknown) => void; workerIndex: number }
  >();
  private inflightDownloads = new Map<
    number,
    { resolve: (value: DownloadToFileResult) => void; reject: (error: unknown) => void; workerIndex: number }
  >();
  private inflightStreamDownloads = new Map<
    number,
    { resolve: (value: DownloadStreamResult) => void; reject: (error: unknown) => void; workerIndex: number }
  >();
  private nextRequestId = 0;
  private workerInflightCounts: number[] = [];
  private workerThreadCount: number;
  private maxConcurrentUploads: number;
  private initialized = false;
  private initPromise: Promise<void> | undefined;
  private fallbackHandler: NodeHttpHandler;

  /**
   * Stores completed download results keyed by a caller-provided token.
   * The TM passes a unique token in the downloadDataToFile options and
   * retrieves the result after this.s3.send() completes.
   * @internal
   */
  private completedDownloads = new Map<string, { bytesWritten: number; checksum?: string }>();

  /**
   * Stores completed stream-mode download results keyed by a caller-provided token.
   * Unlike completedDownloads, this includes the ArrayBuffer with the response body.
   * @internal
   */
  private completedTransfers = new Map<string, DownloadStreamResult>();

  readonly metadata = { handlerProtocol: "http/1.1" };

  constructor(options?: { workerThreadCount?: number; maxConcurrentUploads?: number }) {
    this.workerThreadCount = options?.workerThreadCount ?? defaultWorkerCount();
    this.maxConcurrentUploads = options?.maxConcurrentUploads ?? 32;
    this.fallbackHandler = new NodeHttpHandler();
  }

  /**
   * Retrieves and removes the completed download result for a given token.
   * Returns undefined if no result is stored for that token.
   * @internal
   */
  public getDownloadResult(token: string): { bytesWritten: number; checksum?: string } | undefined {
    const result = this.completedDownloads.get(token);
    if (result) {
      this.completedDownloads.delete(token);
    }
    return result;
  }

  /**
   * Retrieves and removes the completed stream-mode download result for a given token.
   * Includes the ArrayBuffer with the response body (zero-copy from worker).
   * @internal
   */
  public getStreamDownloadResult(token: string): DownloadStreamResult | undefined {
    const result = this.completedTransfers.get(token);
    if (result) {
      this.completedTransfers.delete(token);
    }
    return result;
  }

  /**
   * Returns the worker script file path.
   */
  private resolveWorkerConfig(): { workerPath: string; workerOptions?: { execArgv: string[] } } {
    // Submodule path (dist-cjs/submodules/worker/index.js).
    const submodulePath = path.join(__dirname, "..", "worker", "index.js");
    if (existsSync(submodulePath)) {
      return { workerPath: submodulePath };
    }
    const tsPath = path.join(__dirname, "..", "worker", "index.ts");
    if (existsSync(tsPath)) {
      return { workerPath: tsPath, workerOptions: { execArgv: ["--require", "tsx/cjs"] } };
    }
    return { workerPath: submodulePath };
  }

  private ensureInitialized(): Promise<void> {
    if (this.initialized) return Promise.resolve();
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise<void>((resolve, reject) => {
      const { workerPath, workerOptions } = this.resolveWorkerConfig();
      let readyCount = 0;
      let errorCount = 0;
      let settled = false;
      this.workerInflightCounts = new Array(this.workerThreadCount).fill(0);

      for (let i = 0; i < this.workerThreadCount; i++) {
        const worker = new Worker(workerPath, workerOptions);
        this.workers.push(worker);
        const workerIndex = i;

        worker.on("message", (msg: HttpWorkerOutboundMessage) => {
          if (msg.type === "ready") {
            worker.postMessage({
              type: "config",
              maxSockets: Math.max(50, Math.ceil(this.maxConcurrentUploads / this.workerThreadCount)),
            } satisfies HttpWorkerConfigMessage);
            readyCount++;
            if (!settled && readyCount === this.workerThreadCount) {
              settled = true;
              this.initialized = true;
              resolve();
            }
            return;
          }

          if (msg.type === "httpResponse") {
            const pending = this.inflightRequests.get(msg.id);
            this.inflightRequests.delete(msg.id);
            if (pending) {
              this.workerInflightCounts[pending.workerIndex]--;
              pending.resolve({
                response: new HttpResponse({
                  statusCode: msg.response.statusCode,
                  headers: msg.response.headers,
                  body: msg.response.body,
                }),
              });
            }
            return;
          }

          if (msg.type === "httpError") {
            const pending = this.inflightRequests.get(msg.id);
            this.inflightRequests.delete(msg.id);
            if (pending) {
              this.workerInflightCounts[pending.workerIndex]--;
              const error = Object.assign(new Error(msg.error), {
                ...(msg.code && { code: msg.code }),
                ...(msg.name && { name: msg.name }),
              });
              pending.reject(error);
            }
            return;
          }

          if (msg.type === "httpDownloadResult") {
            const pending = this.inflightDownloads.get(msg.id);
            this.inflightDownloads.delete(msg.id);
            if (pending) {
              this.workerInflightCounts[pending.workerIndex]--;
              pending.resolve({
                statusCode: msg.statusCode,
                headers: msg.headers,
                bytesWritten: msg.bytesWritten,
                checksum: msg.checksum,
              });
            }
            return;
          }

          if (msg.type === "httpDownloadError") {
            // First, check if it's a file-mode download that failed
            const pending = this.inflightDownloads.get(msg.id);
            this.inflightDownloads.delete(msg.id);
            if (pending) {
              this.workerInflightCounts[pending.workerIndex]--;
              pending.reject(buildDownloadError(msg));
              return;
            }
            // Check stream downloads if not found in file downloads.
            const pendingTransfer = this.inflightStreamDownloads.get(msg.id);
            this.inflightStreamDownloads.delete(msg.id);
            if (pendingTransfer) {
              this.workerInflightCounts[pendingTransfer.workerIndex]--;
              pendingTransfer.reject(buildDownloadError(msg));
            }
            return;
          }

          if (msg.type === "httpDownloadStreamResult") {
            const pending = this.inflightStreamDownloads.get(msg.id);
            this.inflightStreamDownloads.delete(msg.id);
            if (pending) {
              this.workerInflightCounts[pending.workerIndex]--;
              pending.resolve({
                rangeIndex: msg.rangeIndex,
                buffer: msg.buffer,
                byteLength: msg.byteLength,
                statusCode: msg.statusCode,
                headers: msg.headers,
                checksum: msg.checksum,
              });
            }
            return;
          }
        });

        worker.on("error", (err) => {
          if (!settled) {
            errorCount++;
            if (errorCount + readyCount === this.workerThreadCount) {
              settled = true;
              this.initPromise = undefined;
              reject(new Error(`Failed to initialize worker threads: ${err.message}`));
            }
          }
          // Only reject requests that were dispatched to this specific worker.
          for (const [id, pending] of this.inflightRequests) {
            if (pending.workerIndex === workerIndex) {
              pending.reject(err);
              this.inflightRequests.delete(id);
            }
          }
          for (const [id, pending] of this.inflightDownloads) {
            if (pending.workerIndex === workerIndex) {
              pending.reject(err);
              this.inflightDownloads.delete(id);
            }
          }
          for (const [id, pending] of this.inflightStreamDownloads) {
            if (pending.workerIndex === workerIndex) {
              pending.reject(err);
              this.inflightStreamDownloads.delete(id);
            }
          }
          // Mark this worker as dead so pickWorkerIndex() never routes to it.
          this.workerInflightCounts[workerIndex] = Infinity;
        });
      }
    });

    return this.initPromise;
  }

  /**
   * Returns the index of the worker with the fewest in-flight requests.
   */
  private pickWorkerIndex(): number {
    let minIndex = 0;
    for (let i = 1; i < this.workerInflightCounts.length; i++) {
      if (this.workerInflightCounts[i] < this.workerInflightCounts[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }

  /**
   * Dispatches a message to the least-busy worker and tracks the in-flight count.
   */
  private dispatchToWorker(id: number, message: HttpWorkerRequestMessage): Promise<{ response: HttpResponse }> {
    const workerIndex = this.pickWorkerIndex();
    this.workerInflightCounts[workerIndex]++;
    return new Promise((resolve, reject) => {
      this.inflightRequests.set(id, { resolve, reject, workerIndex });
      this.workers[workerIndex].postMessage(message);
    });
  }

  /**
   * Dispatches a download-to-file message to the least-busy worker and tracks the in-flight count.
   */
  private dispatchDownloadToWorker(
    id: number,
    message: HttpWorkerDownloadToFileMessage
  ): Promise<DownloadToFileResult> {
    const workerIndex = this.pickWorkerIndex();
    this.workerInflightCounts[workerIndex]++;
    return new Promise((resolve, reject) => {
      this.inflightDownloads.set(id, { resolve, reject, workerIndex });
      this.workers[workerIndex].postMessage(message);
    });
  }

  private extractPartNumber(request: HttpRequest): number | undefined {
    const partNumber = request.query?.partNumber;
    if (partNumber) {
      return Number(Array.isArray(partNumber) ? partNumber[0] : partNumber);
    }
    return undefined;
  }

  /**
   * Returns a consumed ArrayBuffer to the worker that originally sent it,
   * so it can be reused for future downloads.
   * @internal
   */
  public returnBuffer(buffer: ArrayBuffer, workerIndex?: number): void {
    // Round-robin or send to any available worker if index not specified
    const targetIndex = workerIndex ?? this.nextRequestId % this.workers.length;
    const message: HttpWorkerReturnBufferMessage = { type: "returnBuffer", buffer };
    this.workers[targetIndex]?.postMessage(message, [buffer]);
  }

  async handle(
    request: HttpRequest,
    options?: WorkerHttpHandlerOptions | WorkerHttpHandlerDownloadOptions
  ): Promise<{ response: HttpResponse }> {
    // Download-to-file path: dispatch as httpDownloadToFile message.
    // The worker handles the HTTP request and writes the body to file.
    // We return a proper { response: HttpResponse } so the SDK middleware
    // pipeline (checksums, deserialization, etc.) can process the response
    // normally. The body is omitted since it was written directly to disk.
    const downloadDataToFile = (options as WorkerHttpHandlerDownloadOptions | undefined)?.downloadDataToFile;
    if (downloadDataToFile) {
      await this.ensureInitialized();

      const id = this.nextRequestId++;
      const serializedRequest: WorkerHttpRequest = {
        method: request.method,
        protocol: request.protocol,
        hostname: request.hostname,
        port: request.port,
        path: request.path,
        query: request.query,
        headers: request.headers,
      };

      const message: HttpWorkerDownloadToFileMessage = {
        type: "httpDownloadToFile",
        id,
        request: serializedRequest,
        filePath: downloadDataToFile.filePath,
        offset: downloadDataToFile.offset,
        expectedLength: downloadDataToFile.expectedLength,
        checksumAlgorithm: downloadDataToFile.checksumAlgorithm,
      };

      const result = await this.dispatchDownloadToWorker(id, message);

      // Store the download-specific result (bytesWritten, checksum) in the
      // side-channel map so the TM can retrieve it after s3.send() returns.
      if (downloadDataToFile.resultToken) {
        this.completedDownloads.set(downloadDataToFile.resultToken, {
          bytesWritten: result.bytesWritten,
          checksum: result.checksum,
        });
      }

      // Wrap the DownloadToFileResult in a proper HttpResponse so the SDK
      // middleware pipeline can process it (flexible-checksums, deserialization, etc.).
      //
      // IMPORTANT: We strip per-part checksum headers (x-amz-checksum-*)
      // because the flexible-checksums middleware would try to validate the
      // body checksum against these headers — but there's no body to validate
      // (it was written to file by the worker). The worker already validated
      // the per-part CRC inline and stored the result in completedDownloads.
      const responseHeaders: Record<string, string> = {};
      for (const [key, value] of Object.entries(result.headers)) {
        if (!key.startsWith("x-amz-checksum-")) {
          responseHeaders[key] = value;
        }
      }

      return {
        response: new HttpResponse({
          statusCode: result.statusCode,
          headers: responseHeaders,
          body: createEmptyReadable(),
        }),
      };
    }

    // Download-to-stream path: send the request to a worker thread.
    // The worker assembles the response body into its own ArrayBuffer and transfers
    // ownership to main. The transferred buffer is stored in the
    // map for the caller to retrieve, not returned in the HttpResponse.
    const downloadStream = (options as WorkerHttpHandlerDownloadOptions | undefined)?.downloadStream;
    if (downloadStream) {
      await this.ensureInitialized();

      const id = this.nextRequestId++;
      const serializedRequest: WorkerHttpRequest = {
        method: request.method,
        protocol: request.protocol,
        hostname: request.hostname,
        port: request.port,
        path: request.path,
        query: request.query,
        headers: request.headers,
      };

      const message: HttpWorkerDownloadStreamMessage = {
        type: "httpDownloadStream",
        id,
        request: serializedRequest,
        expectedSize: downloadStream.expectedSize,
        rangeIndex: downloadStream.rangeIndex,
        checksumAlgorithm: downloadStream.checksumAlgorithm,
      };

      const workerIndex = this.pickWorkerIndex();
      this.workerInflightCounts[workerIndex]++;
      const result = await new Promise<DownloadStreamResult>((resolve, reject) => {
        this.inflightStreamDownloads.set(id, { resolve, reject, workerIndex });
        this.workers[workerIndex].postMessage(message);
      });

      // Strip per-part checksum headers (validated inline by the worker)
      const responseHeaders: Record<string, string> = {};
      for (const [key, value] of Object.entries(result.headers)) {
        if (!key.startsWith("x-amz-checksum-")) {
          responseHeaders[key] = value;
        }
      }

      // For error responses (4xx/5xx), pass the body through so the SDK can
      // deserialize the proper error type (e.g. PreconditionFailed).
      let body: Readable | undefined;
      if (result.statusCode >= 400) {
        const bodyBuf = Buffer.from(result.buffer, 0, result.byteLength);
        body = Readable.from([bodyBuf]);
      }

      // Store the transfer result only for successful responses.
      if (result.statusCode < 400 && downloadStream.resultToken) {
        this.completedTransfers.set(downloadStream.resultToken, result);
      }

      return {
        response: new HttpResponse({
          statusCode: result.statusCode,
          headers: responseHeaders,
          body: body ?? createEmptyReadable(),
        }),
      };
    }

    const dataSource = (options as WorkerHttpHandlerOptions | undefined)?.dataSource;
    const partNumber = this.extractPartNumber(request);

    // Fall back to default Node HTTP handler for non-upload-part requests
    // (CreateMPU, CompleteMPU, GetObject, HeadObject, etc.).
    if (!dataSource || !partNumber) {
      return this.fallbackHandler.handle(request as any, options as HttpHandlerOptions);
    }

    await this.ensureInitialized();

    const id = this.nextRequestId++;

    const serializedRequest: WorkerHttpRequest = {
      method: request.method,
      protocol: request.protocol,
      hostname: request.hostname,
      port: request.port,
      path: request.path,
      query: request.query,
      headers: request.headers,
    };

    if (dataSource.type === "file") {
      const { filePath, partSize, totalFileSize, checksumAlgorithm, checksumHeader } = dataSource;
      const offset = (partNumber - 1) * partSize;
      const length = Math.min(partSize, totalFileSize - offset);

      const message: HttpWorkerFileRequestMessage = {
        type: "httpRequestFromFile",
        id,
        request: serializedRequest,
        filePath,
        offset,
        length,
        checksumAlgorithm,
        checksumHeader,
      };

      return this.dispatchToWorker(id, message);
    }

    const { sharedBuffer, partSize, totalSize, checksumAlgorithm, checksumHeader } = dataSource;
    const offset = (partNumber - 1) * partSize;
    const length = Math.min(partSize, totalSize - offset);

    const message: HttpWorkerRAMRequestMessage = {
      type: "httpRequestFromRAM",
      id,
      request: serializedRequest,
      sharedBuffer,
      offset,
      length,
      checksumAlgorithm,
      checksumHeader,
    };

    return this.dispatchToWorker(id, message);
  }

  updateHttpClientConfig(_key: string, _value: unknown): void {}

  httpHandlerConfigs(): Record<string, unknown> {
    return {};
  }

  destroy(): void {
    for (const worker of this.workers) {
      worker.postMessage({ type: "done" } satisfies HttpWorkerDoneMessage);
    }
    this.workers = [];
    this.workerInflightCounts = [];
    this.initialized = false;
    this.initPromise = undefined;
    this.fallbackHandler.destroy();
  }
}

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
import { existsSync } from "node:fs";
import { cpus } from "node:os";
import * as path from "node:path";
import { Readable } from "node:stream";
import { Worker } from "node:worker_threads";

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
  checksumAlgorithm?: string;
  checksumHeader?: string;
}

export interface HttpWorkerRAMRequestMessage extends BaseHttpWorkerRequestMessage {
  type: "httpRequestFromRAM";
  sharedBuffer: SharedArrayBuffer;
  offset: number;
  length: number;
  checksumAlgorithm?: string;
  checksumHeader?: string;
}

export type HttpWorkerRequestMessage = HttpWorkerFileRequestMessage | HttpWorkerRAMRequestMessage;

export interface HttpWorkerConfigMessage {
  type: "config";
  maxSockets: number;
}

export interface HttpWorkerDoneMessage {
  type: "done";
}

export type HttpWorkerInboundMessage = HttpWorkerRequestMessage | HttpWorkerConfigMessage | HttpWorkerDoneMessage;

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

export type HttpWorkerOutboundMessage = HttpWorkerResponseMessage | HttpWorkerErrorMessage | HttpWorkerReadyMessage;

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
  checksumAlgorithm?: string;
  checksumHeader?: string;
}

/** @internal */
export interface SharedBufferSource {
  type: "sharedBuffer";
  sharedBuffer: SharedArrayBuffer;
  partSize: number;
  totalSize: number;
  checksumAlgorithm?: string;
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

export class WorkerHttpHandler {
  private workers: Worker[] = [];
  private inflightRequests = new Map<
    number,
    { resolve: (value: { response: HttpResponse }) => void; reject: (error: unknown) => void; workerIndex: number }
  >();
  private nextRequestId = 0;
  private workerInflightCounts: number[] = [];
  private workerThreadCount: number;
  private maxConcurrentUploads: number;
  private initialized = false;
  private initPromise: Promise<void> | undefined;
  private fallbackHandler: NodeHttpHandler;

  readonly metadata = { handlerProtocol: "http/1.1" };

  constructor(options?: { workerThreadCount?: number; maxConcurrentUploads?: number }) {
    this.workerThreadCount = options?.workerThreadCount ?? defaultWorkerCount();
    this.maxConcurrentUploads = options?.maxConcurrentUploads ?? 32;
    this.fallbackHandler = new NodeHttpHandler();
  }

  /**
   * Returns the worker script file path.
   */
  private resolveWorkerConfig(): { workerPath: string; workerOptions?: { execArgv: string[] } } {
    const jsPath = path.join(__dirname, "http-request-worker.js");
    if (existsSync(jsPath)) {
      return { workerPath: jsPath };
    }
    // Subdirectory path (inlined CJS bundle: __dirname = dist-cjs/).
    const subDirJsPath = path.join(__dirname, "s3-transfer-manager", "http-request-worker.js");
    if (existsSync(subDirJsPath)) {
      return { workerPath: subDirJsPath };
    }
    const tsPath = path.join(__dirname, "http-request-worker.ts");
    if (existsSync(tsPath)) {
      return { workerPath: tsPath, workerOptions: { execArgv: ["--require", "tsx/cjs"] } };
    }
    return { workerPath: jsPath };
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

  private extractPartNumber(request: HttpRequest): number | undefined {
    const partNumber = request.query?.partNumber;
    if (partNumber) {
      return Number(Array.isArray(partNumber) ? partNumber[0] : partNumber);
    }
    return undefined;
  }

  async handle(request: HttpRequest, options?: WorkerHttpHandlerOptions): Promise<{ response: HttpResponse }> {
    const dataSource = options?.dataSource;
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

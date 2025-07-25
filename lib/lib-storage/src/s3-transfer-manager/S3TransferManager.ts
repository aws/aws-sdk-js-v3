import type {
  _Object as S3Object,
  ChecksumAlgorithm,
  GetObjectCommandInput,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { CONFIG_RESPONSE_CHECKSUM_VALIDATION } from "@aws-sdk/middleware-flexible-checksums/dist-types";
import { getChecksum } from "@aws-sdk/middleware-flexible-checksums/dist-types/getChecksum";
import { type StreamingBlobPayloadOutputTypes, Checksum, ChecksumConstructor } from "@smithy/types";

import type { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";
import { joinStreams } from "./join-streams";
import type {
  DownloadRequest,
  DownloadResponse,
  IS3TransferManager,
  S3TransferManagerConfig,
  TransferCompleteEvent,
  TransferEvent,
  TransferEventListeners,
  TransferOptions,
  UploadRequest,
  UploadResponse,
} from "./types";

/**
 * Describe what this is
 * TODO: Switch all @public to @alpha
 * TODO: tag internal for itneral functions
 * @alpha
 */
export class S3TransferManager implements IS3TransferManager {
  private static MIN_PART_SIZE = 5 * 1024 * 1024; // 5MB
  private static DEFAULT_PART_SIZE = 8 * 1024 * 1024; // 8MB
  private static MIN_UPLOAD_THRESHOLD = 16 * 1024 * 1024; // 16MB

  private readonly s3ClientInstance: S3Client;
  private readonly targetPartSizeBytes: number;
  private readonly multipartUploadThresholdBytes: number;
  private readonly checksumValidationEnabled: boolean;
  private readonly checksumAlgorithm: ChecksumAlgorithm;
  private readonly multipartDownloadType: "PART" | "RANGE";
  private readonly eventListeners: TransferEventListeners;
  private readonly abortCleanupFunctions = new WeakMap<AbortSignal, () => void>();

  public constructor(config: S3TransferManagerConfig = {}) {
    this.checksumValidationEnabled = config.checksumValidationEnabled ?? true;

    const checksumMode = this.checksumValidationEnabled ? "WHEN_SUPPORTED" : "WHEN_REQUIRED";

    this.s3ClientInstance =
      config.s3ClientInstance ??
      new S3Client({
        requestChecksumCalculation: checksumMode,
        responseChecksumValidation: checksumMode,
      });

    this.targetPartSizeBytes = config.targetPartSizeBytes ?? S3TransferManager.DEFAULT_PART_SIZE;
    this.multipartUploadThresholdBytes = config.multipartUploadThresholdBytes ?? S3TransferManager.MIN_UPLOAD_THRESHOLD;

    this.checksumAlgorithm = config.checksumAlgorithm ?? "CRC32";
    this.multipartDownloadType = config.multipartDownloadType ?? "PART";
    this.eventListeners = {
      transferInitiated: config.eventListeners?.transferInitiated ?? [],
      bytesTransferred: config.eventListeners?.bytesTransferred ?? [],
      transferComplete: config.eventListeners?.transferComplete ?? [],
      transferFailed: config.eventListeners?.transferFailed ?? [],
    };

    this.validateConfig();
  }

  public addEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void;
  public addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (!listeners) {
      throw new Error(`Unknown event type: ${eventType}`);
    }

    const once = typeof options !== "boolean" && options?.once;
    const signal = typeof options !== "boolean" ? options?.signal : undefined;
    let updatedCallback = callback;

    if (signal?.aborted) {
      return;
    }

    if (signal) {
      const removeListenerAfterAbort = () => {
        this.removeEventListener(eventType, updatedCallback);
        this.abortCleanupFunctions.delete(signal);
      };

      this.abortCleanupFunctions.set(signal, () => signal.removeEventListener("abort", removeListenerAfterAbort));
      signal.addEventListener("abort", removeListenerAfterAbort, { once: true });
    }

    if (once) {
      updatedCallback = (event: Event) => {
        if (typeof callback === "function") {
          callback(event);
        } else {
          callback.handleEvent(event);
        }
        this.removeEventListener(eventType, updatedCallback);
      };
    }
    listeners.push(updatedCallback);
  }

  /**
   * todo: what does the return boolean mean?
   *
   * it returns false if the event is cancellable, and at least oneo the handlers which received event called
   * Event.preventDefault(). Otherwise true.
   * The use cases of preventDefault() does not apply to transfermanager but we should still keep  the boolean
   * and continue to return true to stay consistent with EventTarget.
   *
   */
  public dispatchEvent(event: Event & TransferEvent): boolean;
  public dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  public dispatchEvent(event: Event): boolean;
  public dispatchEvent(event: Event): boolean {
    const eventType = event.type;
    const listeners = this.eventListeners[eventType as keyof TransferEventListeners] as EventListener[];

    if (listeners) {
      for (const listener of listeners) {
        if (typeof listener === "function") {
          listener(event);
        } else {
          listener.handleEvent(event);
        }
      }
    }
    return true;
  }

  public removeEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: string,
    callback: EventListener,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: string,
    callback: EventListener,
    options?: RemoveEventListenerOptions | boolean
  ): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (listeners) {
      if (
        eventType === "transferInitiated" ||
        eventType === "bytesTransferred" ||
        eventType === "transferFailed" ||
        eventType === "transferComplete"
      ) {
        const eventListener = callback as EventListener<TransferEvent>;
        let index = listeners.indexOf(eventListener);
        while (index !== -1) {
          listeners.splice(index, 1);
          index = listeners.indexOf(eventListener);
        }
      } else {
        throw new Error(`Unknown event type: ${type}`);
      }
    }
  }

  public upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse> {
    throw new Error("Method not implemented.");
  }

  public async download(request: DownloadRequest, transferOptions?: TransferOptions): Promise<DownloadResponse> {
    const partNumber = request.PartNumber;
    if (typeof partNumber === "number") {
      throw new Error(
        "partNumber included: S3 Transfer Manager does not support downloads for specific parts. Use GetObjectCommand instead"
      );
    }

    const metadata = {} as Omit<DownloadResponse, "Body">;
    const streams = [] as Promise<StreamingBlobPayloadOutputTypes>[];
    const requests = [] as GetObjectCommandInput[];

    let totalSize: number | undefined;

    this.checkAborted(transferOptions);
    this.addEventListeners(transferOptions?.eventListeners);

    if (this.multipartDownloadType === "PART") {
      const responseMetadata = await this.downloadByPart(request, transferOptions ?? {}, streams, requests, metadata);
      totalSize = responseMetadata.totalSize;
    } else if (this.multipartDownloadType === "RANGE") {
      const responseMetadata = await this.downloadByRange(request, transferOptions ?? {}, streams, requests, metadata);
      totalSize = responseMetadata.totalSize;
    }

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);

      // remove any local abort() listeners after request completes.
      if (transferOptions?.abortSignal) {
        this.abortCleanupFunctions.get(transferOptions.abortSignal as AbortSignal)?.();
        this.abortCleanupFunctions.delete(transferOptions.abortSignal as AbortSignal);
      }
    };

    // TODO:
    // after completing SEP requirements:
    // - acquire lock on webstreams in the same
    // - synchronous frame as they are opened or else
    // - the connection might be closed too early.

    const response = {
      ...metadata,
      Body: await joinStreams(streams, {
        onBytes: (byteLength: number, index) => {
          this.dispatchEvent(
            Object.assign(new Event("bytesTransferred"), {
              request: requests[index],
              snapshot: {
                transferredBytes: byteLength,
                totalBytes: totalSize,
              },
            })
          );
        },
        onCompletion: (byteLength: number, index) => {
          this.dispatchEvent(
            Object.assign(new Event("transferComplete"), {
              request: requests[index],
              response,
              snapshot: {
                transferredBytes: byteLength,
                totalBytes: totalSize,
              },
            })
          );
          removeLocalEventListeners();
        },
        onFailure: (error: unknown, index) => {
          this.dispatchEvent(
            Object.assign(new Event("transferFailed"), {
              request: requests[index],
              snapshot: {
                transferredBytes: error,
                totalBytes: totalSize,
              },
            })
          );
          removeLocalEventListeners();
        },
      }),
    };

    return response;
  }

  public uploadAll(options: {
    bucket: string;
    source: string;
    followSymbolicLinks?: boolean;
    recursive?: boolean;
    s3Prefix?: string;
    filter?: (filepath: string) => boolean;
    s3Delimiter?: string;
    putObjectRequestCallback?: (putObjectRequest: PutObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{ objectsUploaded: number; objectsFailed: number }> {
    throw new Error("Method not implemented.");
  }

  public downloadAll(options: {
    bucket: string;
    destination: string;
    s3Prefix?: string;
    s3Delimiter?: string;
    recursive?: boolean;
    filter?: (object?: S3Object) => boolean;
    getObjectRequestCallback?: (getObjectRequest: GetObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{ objectsDownloaded: number; objectsFailed: number }> {
    throw new Error("Method not implemented.");
  }

  protected async downloadByPart(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">
  ): Promise<{ totalSize: number | undefined }> {
    let totalSize: number | undefined;
    this.checkAborted(transferOptions);

    if (request.Range == null) {
      const initialPartRequest = {
        ...request,
        PartNumber: 1,
      };
      try {
        const initialPart = await this.s3ClientInstance.send(new GetObjectCommand(initialPartRequest), transferOptions);
        const initialETag = initialPart.ETag ?? undefined;
        const partSize = initialPart.ContentLength;
        totalSize = initialPart.ContentRange ? Number.parseInt(initialPart.ContentRange.split("/")[1]) : undefined;
        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (initialPart.Body) {
          if (initialPart.Body && typeof (initialPart.Body as any).getReader === "function") {
            const reader = (initialPart.Body as any).getReader();
            (initialPart.Body as any).getReader = function () {
              return reader;
            };
          }
          streams.push(Promise.resolve(initialPart.Body));
          requests.push(initialPartRequest);
        }

        this.updateResponseLengthAndRange(initialPart, totalSize);
        this.assignMetadata(metadata, initialPart);
        this.updateChecksumValues(initialPart, metadata);

        let partCount = 1;
        if (initialPart.PartsCount! > 1) {
          for (let part = 2; part <= initialPart.PartsCount!; part++) {
            this.checkAborted(transferOptions);
            const getObjectRequest = {
              ...request,
              PartNumber: part,
              IfMatch: initialETag,
            };
            const getObject = this.s3ClientInstance
              .send(new GetObjectCommand(getObjectRequest), transferOptions)
              .then((response) => {
                this.validatePartDownload(response.ContentRange, part, partSize ?? 0);
                if (response.Body && typeof (response.Body as any).getReader === "function") {
                  const reader = (response.Body as any).getReader();
                  (response.Body as any).getReader = function () {
                    return reader;
                  };
                }
                return response.Body!;
              })
              .catch((error) => {
                this.dispatchTransferFailedEvent(getObjectRequest, totalSize, error as Error);
                throw error;
              });
            streams.push(getObject);
            requests.push(getObjectRequest);
            partCount++;
          }
          if (partCount !== initialPart.PartsCount) {
            throw new Error(
              `The number of parts downloaded (${partCount}) does not match the expected number (${initialPart.PartsCount})`
            );
          }
        }
      } catch (error) {
        this.dispatchTransferFailedEvent(request, totalSize, error);
        throw error;
      }
    } else {
      this.checkAborted(transferOptions);

      try {
        const getObjectRequest = {
          ...request,
        };

        const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
        totalSize = getObject.ContentRange ? Number.parseInt(getObject.ContentRange.split("/")[1]) : undefined;

        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (getObject.Body) {
          streams.push(Promise.resolve(getObject.Body));
          requests.push(getObjectRequest);
        }
        this.updateResponseLengthAndRange(getObject, totalSize);
        this.assignMetadata(metadata, getObject);
        this.updateChecksumValues(getObject, metadata);
      } catch (error) {
        this.dispatchTransferFailedEvent(request, undefined, error);
        throw error;
      }
    }

    return {
      totalSize,
    };
  }

  protected async downloadByRange(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">
  ): Promise<{ totalSize: number | undefined }> {
    this.checkAborted(transferOptions);

    let left = 0;
    let right = this.targetPartSizeBytes - 1;
    let maxRange = Number.POSITIVE_INFINITY;
    let remainingLength = 1;

    if (request.Range != null) {
      const [userRangeLeft, userRangeRight] = request.Range.replace("bytes=", "").split("-").map(Number);

      maxRange = userRangeRight;
      left = userRangeLeft;
      right = Math.min(userRangeRight, left + S3TransferManager.MIN_PART_SIZE - 1);
    }

    let totalSize: number | undefined;
    let initialETag: string | undefined;

    try {
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: `bytes=${left}-${right}`,
      };
      const initialRangeGet = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
      this.validateRangeDownload(`bytes=${left}-${right}`, initialRangeGet.ContentRange);
      initialETag = initialRangeGet.ETag ?? undefined;
      totalSize = initialRangeGet.ContentRange
        ? Number.parseInt(initialRangeGet.ContentRange.split("/")[1])
        : undefined;

      if (initialRangeGet.Body && typeof (initialRangeGet.Body as any).getReader === "function") {
        const reader = (initialRangeGet.Body as any).getReader();
        (initialRangeGet.Body as any).getReader = function () {
          return reader;
        };
      }

      this.dispatchTransferInitiatedEvent(request, totalSize);
      streams.push(Promise.resolve(initialRangeGet.Body!));
      requests.push(getObjectRequest);

      this.updateResponseLengthAndRange(initialRangeGet, totalSize);
      this.assignMetadata(metadata, initialRangeGet);
      this.updateChecksumValues(initialRangeGet, metadata);
    } catch (error) {
      this.dispatchTransferFailedEvent(request, totalSize, error as Error);
      throw error;
    }

    let expectedRequestCount = 1;
    if (totalSize) {
      const contentLength = totalSize;
      const remainingBytes = Math.max(0, contentLength - (right - left + 1));
      const additionalRequests = Math.ceil(remainingBytes / S3TransferManager.MIN_PART_SIZE);
      expectedRequestCount += additionalRequests;
    }

    left = right + 1;
    right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
    remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
    let actualRequestCount = 1;

    while (remainingLength > 0) {
      this.checkAborted(transferOptions);

      const range = `bytes=${left}-${right}`;
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: range,
        IfMatch: initialETag,
      };
      const getObject = this.s3ClientInstance
        .send(new GetObjectCommand(getObjectRequest), transferOptions)
        .then((response) => {
          this.validateRangeDownload(range, response.ContentRange);
          if (response.Body && typeof (response.Body as any).getReader === "function") {
            const reader = (response.Body as any).getReader();
            (response.Body as any).getReader = function () {
              return reader;
            };
          }
          return response.Body!;
        })
        .catch((error) => {
          this.dispatchTransferFailedEvent(getObjectRequest, totalSize, error);
          throw error;
        });

      streams.push(getObject);
      requests.push(getObjectRequest);
      actualRequestCount++;

      left = right + 1;
      right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
      remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
    }

    if (expectedRequestCount !== actualRequestCount) {
      throw new Error(
        `The number of ranged GET requests sent (${actualRequestCount}) does not match the expected number (${expectedRequestCount})`
      );
    }

    return {
      totalSize,
    };
  }

  private addEventListeners(eventListeners?: TransferEventListeners): void {
    for (const listeners of this.iterateListeners(eventListeners)) {
      for (const listener of listeners) {
        this.addEventListener(listener.eventType, listener.callback as EventListener);
      }
    }
  }

  private removeEventListeners(eventListeners?: TransferEventListeners): void {
    for (const listeners of this.iterateListeners(eventListeners)) {
      for (const listener of listeners) {
        this.removeEventListener(listener.eventType, listener.callback as EventListener);
      }
    }
  }

  private updateResponseLengthAndRange(response: DownloadResponse, totalSize: number | undefined): void {
    if (totalSize !== undefined) {
      response.ContentLength = totalSize;
      response.ContentRange = `bytes 0-${totalSize - 1}/${totalSize}`;
    }
  }

  private updateChecksumValues(initialPart: DownloadResponse, metadata: Omit<DownloadResponse, "Body">) {
    if (initialPart.ChecksumType === "COMPOSITE") {
      metadata.ChecksumCRC32 = undefined;
      metadata.ChecksumCRC32C = undefined;
      metadata.ChecksumSHA1 = undefined;
      metadata.ChecksumSHA256 = undefined;
    }
  }

  private checkAborted(transferOptions?: TransferOptions): void {
    if (transferOptions?.abortSignal?.aborted) {
      throw Object.assign(new Error("Download aborted."), { name: "AbortError" });
    }
  }

  private assignMetadata(container: any, response: any) {
    for (const key in response) {
      if (key === "Body") {
        continue;
      }
      container[key] = response[key];
    }
  }

  private validateConfig(): void {
    if (this.targetPartSizeBytes < S3TransferManager.MIN_PART_SIZE) {
      throw new Error(`targetPartSizeBytes must be at least ${S3TransferManager.MIN_PART_SIZE} bytes`);
    }
  }

  private dispatchTransferInitiatedEvent(request: DownloadRequest | UploadRequest, totalSize?: number): boolean {
    this.dispatchEvent(
      Object.assign(new Event("transferInitiated"), {
        request,
        snapshot: {
          transferredBytes: 0,
          totalBytes: totalSize,
        },
      })
    );
    return true;
  }

  private dispatchTransferFailedEvent(
    request: DownloadRequest | UploadRequest,
    totalSize?: number,
    error?: Error
  ): boolean {
    this.dispatchEvent(
      Object.assign(new Event("transferFailed"), {
        request,
        error,
        snapshot: {
          transferredBytes: 0,
          totalBytes: totalSize,
        },
      })
    );
    return true;
  }

  private *iterateListeners(eventListeners: TransferEventListeners = {}) {
    for (const key in eventListeners) {
      const eventType = key as keyof TransferEventListeners;
      const listeners = eventListeners[eventType as keyof TransferEventListeners];
      if (Array.isArray(listeners)) {
        for (const callback of listeners) {
          yield [
            {
              eventType: eventType,
              callback: callback,
            },
          ];
        }
      }
    }
  }

  private validatePartDownload(contentRange: string | undefined, partNumber: number, partSize: number) {
    if (!contentRange) {
      throw new Error(`Missing ContentRange for part ${partNumber}.`);
    }

    const match = contentRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error(`Invalid ContentRange format: ${contentRange}`);

    const start = Number.parseInt(match[1]);
    const end = Number.parseInt(match[2]);
    const total = Number.parseInt(match[3]) - 1;

    const expectedStart = (partNumber - 1) * partSize;
    const expectedEnd = Math.min(expectedStart + partSize - 1, total);

    if (start !== expectedStart) {
      throw new Error(`Expected part ${partNumber} to start at ${expectedStart} but got ${start}`);
    }

    if (end !== expectedEnd) {
      throw new Error(`Expected part ${partNumber} to end at ${expectedEnd} but got ${end}`);
    }
  }

  private validateRangeDownload(requestRange: string, responseRange: string | undefined) {
    if (!responseRange) {
      throw new Error(`Missing ContentRange for range ${requestRange}.`);
    }

    const match = responseRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error(`Invalid ContentRange format: ${responseRange}`);

    const start = Number.parseInt(match[1]);
    const end = Number.parseInt(match[2]);
    const total = Number.parseInt(match[3]) - 1;

    const rangeMatch = requestRange.match(/bytes=(\d+)-(\d+)/);
    if (!rangeMatch) throw new Error(`Invalid Range format: ${requestRange}`);

    const expectedStart = Number.parseInt(rangeMatch[1]);
    const expectedEnd = Number.parseInt(rangeMatch[2]);

    if (start !== expectedStart) {
      throw new Error(`Expected range to start at ${expectedStart} but got ${start}`);
    }

    if (end === expectedEnd) {
      return;
    }

    if (end === total) {
      return;
    }

    throw new Error(`Expected range to end at ${expectedEnd} but got ${end}`);
  }
}

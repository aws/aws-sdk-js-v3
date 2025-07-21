import type {
  _Object as S3Object,
  ChecksumAlgorithm,
  GetObjectCommandInput,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
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

  /**
   * What is missing from the revised SEP and this implementation currently?
   * PART mode:
   * - Step 5: validate GetObject response for each part
   *  - If validation fails at any point, cancel all ongoing requests and error out
   * - Step 6: after all requests have been sent, validate that the total number of part GET requests sent matches with the
   *   expected `PartsCount`
   * - Step 7: when creating DownloadResponse, set accordingly:
   *  - (DONE) `ContentLength` : total length of the object saved from Step 3
   *  - (DONE) `ContentRange`: based on `bytes 0-(ContentLength -1)/ContentLength`
   *  - If ChecksumType is `COMPOSITE`, set all checksum value members to null as
   *    the checksum value returned from a part GET request is not the composite
   *    checksum for the entire object
   * RANGE mode:
   * - Step 7: validate GetObject response for each part. If validation fails or a
   *   request fails at any point, cancel all ongoing requests and return an error to
   *   the user.
   * - Step 8: after all requests have sent, validate that the total number of ranged
   *   GET requests sent matches with the expected number saved from Step 5.
   * - Step 9: create DownloadResponse. Copy the fields in GetObject response from
   *   Step 3 and set the following fields accordingly:
   *  - (DONE) `ContentLength` : total length of the object saved from Step 3
   *  - (DONE) `ContentRange`: based on `bytes 0-(ContentLength -1)/ContentLength`
   *  - If ChecksumType is `COMPOSITE`, set all checksum value members to null as
   *    the checksum value returned from a part GET request is not the composite
   *    checksum for the entire object
   * Checksum validation notes:
   * -
   *
   */
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
      const initialPart = await this.s3ClientInstance.send(new GetObjectCommand(initialPartRequest), transferOptions);
      const initialETag = initialPart.ETag ?? undefined;
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

      if (initialPart.PartsCount! > 1) {
        for (let part = 2; part <= initialPart.PartsCount!; part++) {
          this.checkAborted(transferOptions);

          const getObjectRequest = {
            ...request,
            PartNumber: part,
            IfMatch: !request.VersionId ? initialETag : undefined,
          };
          const getObject = this.s3ClientInstance
            .send(new GetObjectCommand(getObjectRequest), transferOptions)
            .then((response) => {
              // this.validatePartRange(part, response.ContentRange, this.targetPartSizeBytes);
              if (response.Body && typeof (response.Body as any).getReader === "function") {
                const reader = (response.Body as any).getReader();
                (response.Body as any).getReader = function () {
                  return reader;
                };
              }
              return response.Body!;
            });

          streams.push(getObject);
          requests.push(getObjectRequest);
        }
      }
    } else {
      this.checkAborted(transferOptions);

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

    if (request.Range != null) {
      const [userRangeLeft, userRangeRight] = request.Range.replace("bytes=", "").split("-").map(Number);

      maxRange = userRangeRight;
      left = userRangeLeft;
      right = Math.min(userRangeRight, left + S3TransferManager.MIN_PART_SIZE - 1);
    }

    let remainingLength = 1;
    const getObjectRequest: GetObjectCommandInput = {
      ...request,
      Range: `bytes=${left}-${right}`,
    };
    const initialRangeGet = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
    const initialETag = initialRangeGet.ETag ?? undefined;
    const totalSize = initialRangeGet.ContentRange
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

    left = right + 1;
    right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
    remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;

    while (remainingLength > 0) {
      this.checkAborted(transferOptions);

      const range = `bytes=${left}-${right}`;
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: range,
        IfMatch: !request.VersionId ? initialETag : undefined,
      };
      const getObject = this.s3ClientInstance
        .send(new GetObjectCommand(getObjectRequest), transferOptions)
        .then((response) => {
          if (response.Body && typeof (response.Body as any).getReader === "function") {
            const reader = (response.Body as any).getReader();
            (response.Body as any).getReader = function () {
              return reader;
            };
          }
          return response.Body!;
        });

      streams.push(getObject);
      requests.push(getObjectRequest);

      left = right + 1;
      right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
      remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
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

  private validatePartRange(partNumber: number, contentRange: string | undefined, partSize: number) {
    if (!contentRange) return;

    const match = contentRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error(`Invalid ContentRange format: ${contentRange}`);

    const start = Number.parseInt(match[1]);
    const end = Number.parseInt(match[2]);
    const total = Number.parseInt(match[3]);

    const expectedStart = (partNumber - 1) * partSize;
    const expectedEnd = Math.min(expectedStart + partSize - 1, total - 1);

    // console.log({
    //   partNumber,
    //   start,
    //   end,
    //   total,
    //   expectedStart,
    //   expectedEnd
    // });

    if (start !== expectedStart) {
      throw new Error(`Expected part ${partNumber} to start at ${expectedStart} but got ${start}`);
    }

    if (end !== expectedEnd) {
      throw new Error(`Expected part ${partNumber} to end at ${expectedEnd} but got ${end}`);
    }
  }
}

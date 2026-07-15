import type {
  _Object as S3Object,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommandInput,
  GetObjectCommandInput,
  GetObjectCommandOutput,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import type { HttpHandlerOptions, Logger } from "@smithy/types";

import type { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";

/**
 * Constructor parameters for the S3 Transfer Manager configuration.
 *
 * @alpha
 */
export interface S3TransferManagerConfig {
  /**
   * The low level S3 client that will be used to send requests to S3.
   */
  s3?: S3Client;
  /**
   * The desired part size to use in a multipart transfer. Defaults to 8 MB.
   * Does not apply to the last part. The actual part size may be larger than
   * the configured value if it would require more than 10,000 parts, which
   * is the maximum number of parts S3 allows for multipart upload.
   * Does not apply to downloads if multipartDownloadType is PART.
   */
  targetPartSizeBytes?: number;
  /**
   * The size threshold, in bytes, for when to use multipart upload.
   */
  multipartUploadThresholdBytes?: number;
  /**
   * Specifies when a checksum will be calculated for request payloads.
   * Takes precedence over the config on the S3 client.
   */
  requestChecksumCalculation?: "WHEN_SUPPORTED" | "WHEN_REQUIRED";
  /**
   * Specifies when checksum validation will be performed on response payloads.
   * Takes precedence over the config on the S3 client.
   */
  responseChecksumValidation?: "WHEN_SUPPORTED" | "WHEN_REQUIRED";
  /**
   * How the SDK should perform multipart download, either RANGE or PART.
   */
  multipartDownloadType?: "RANGE" | "PART";
  /**
   * Collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses of all transfers from the client.
   */
  eventListeners?: TransferEventListeners;
  /**
   * Maximum number of concurrent HTTP requests for multipart download operations.
   */
  maxConcurrentDownloads?: number;
  /**
   * Maximum number of concurrent HTTP requests for multipart upload operations.
   */
  maxConcurrentUploads?: number;
  /**
   * Number of worker threads for multipart upload HTTP request dispatch.
   * When set to 1, all operations run on the main thread itself using S3 client's default handler.
   * When >1, spawns N worker threads
   * Defaults to os.cpus().length (in node.js)
   */
  workerThreadCount?: number;
  /**
   * Logger for S3 Transfer Manager operations.
   */
  logger?: Logger;
}

/**
 * Uses intersection because requests includes all the required parameters from
 * both PutObjectCommandInput and CreateMultipartUploadCommandInput to support both single object
 * and multipart upload requests.
 *
 * @alpha
 */
export type UploadRequest = PutObjectCommandInput & CreateMultipartUploadCommandInput;

/**
 * Uses union because the responses can vary from single object upload response to multipart upload
 * response depending on the request.
 *
 * @alpha
 */
export type UploadResponse = PutObjectCommandOutput | CompleteMultipartUploadCommandOutput;

/**
 * Features the same properties as SDK JS S3 Command GetObjectCommandInput.
 * Created to standardize naming convention for TM APIs.
 *
 * @alpha
 */
export type DownloadRequest = GetObjectCommandInput;

/**
 * Features the same properties as SDK JS S3 Command GetObjectCommandOutput.
 * Created to standardize naming convention for TM APIs.
 *
 * @alpha
 */
export type DownloadResponse = GetObjectCommandOutput;

/**
 * Options for transfer operations that combine HTTP handler options with transfer event listeners.
 *
 * @property eventListeners - Collection of callbacks for monitoring transfer lifecycle events
 *
 * @alpha
 */
export type TransferOptions = HttpHandlerOptions & { eventListeners?: TransferEventListeners };

/**
 * Client for efficient transfer of objects to and from Amazon S3.
 * Provides methods to optimize uploading and downloading individual objects
 * as well as entire directories, with support for multipart operations,
 * concurrency control, and request cancellation.
 * Implements an event-based progress tracking system with methods to register,
 * dispatch, and remove listeners for transfer lifecycle events.
 *
 * @alpha
 */
export interface IS3TransferManager {
  /**
   * Lets users upload single objects from a given directory to a given bucket.
   * Supports multipart upload, single object upload, and transfer progress listeners.
   *
   * @param request - All properties of a single or multipart upload request.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses per request.
   *
   * @returns The response from the S3 API for the upload request.
   */
  upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse>;

  /**
   * Lets users download single objects from a given bucket to a given directory.
   * Supports multipart download, single object download, and transfer progress listeners.
   *
   * @param request - All properties of a single or multipart upload request.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses per request.
   *
   * @returns the response from the S3 API for the download request.
   */
  download(request: DownloadRequest, transferOptions?: TransferOptions): Promise<DownloadResponse>;

  /**
   * Uploads files in a directory to the provided S3 bucket.
   * By default, it does not recurse into subdirectories. To upload recursively, set recursive: true.
   *
   * @param request - Configuration for the directory upload operation.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events.
   *
   * @returns the number of objects that have been uploaded and the number of objects that have failed
   */
  uploadDirectory(request: UploadDirectoryRequest, transferOptions?: TransferOptions): Promise<UploadDirectoryResponse>;

  /**
   * Downloads objects under a bucket to the provided local directory.
   *
   * @param request - Configuration for the directory download operation.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events.
   *
   * @returns the number of objects that have been downloaded and the number of objects that have failed
   */
  downloadDirectory(
    request: DownloadDirectoryRequest,
    transferOptions?: TransferOptions
  ): Promise<DownloadDirectoryResponse>;

  /**
   * Registers a callback function to be executed when a specific transfer event occurs.
   * Supports monitoring the full lifecycle of transfers.
   *
   * @param type - The type of event to listen for.
   * @param callback - Function to execute when the specified event occurs.
   * @param options - Optional configuration for event listener behavior.
   *
   * @alpha
   */
  addEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void;

  /**
   * Dispatches an event to the registered event listeners.
   * Triggers callbacks registered via addEventListener with matching event types.
   *
   * @param event - The event object to dispatch.
   * @returns whether the event ran to completion
   *
   * @alpha
   */
  dispatchEvent(event: Event & TransferEvent): boolean;
  dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  dispatchEvent(event: Event): boolean;

  /**
   * Removes a previously registered event listener from the specified event type.
   * Stops the callback from being invoked when the event occurs.
   *
   * @param type - The type of event to stop listening for.
   * @param callback - The function that was previously registered.
   * @param options - Optional configuration for the event listener.
   *
   * @alpha
   */
  removeEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(type: string, callback: EventListener, options?: RemoveEventListenerOptions | boolean): void;
}

/**
 * Provides a snapshot of the progress during a single object transfer.
 *
 * @alpha
 */
export interface SingleObjectProgressSnapshot {
  transferredBytes: number;
  totalBytes?: number;
  response?: UploadResponse | DownloadResponse;
}

/**
 * Provides a snapshot of the progress during a directory transfer.
 *
 * @alpha
 */
export interface DirectoryProgressSnapshot {
  transferredBytes: number;
  totalBytes?: number;
  transferredFiles: number;
  totalFiles?: number;
}

/**
 * Progress snapshot for either single object transfers or directory transfers.
 *
 * @alpha
 */
export type TransferProgressSnapshot = SingleObjectProgressSnapshot | DirectoryProgressSnapshot;

/**
 * Event interface for transfer progress events.
 * Used for tracking ongoing transfers with the original request and progress snapshot.
 *
 * @alpha
 */
export interface TransferEvent extends Event {
  request: UploadRequest | DownloadRequest;
  snapshot: TransferProgressSnapshot;
}

/**
 * Event interface for transfer completion.
 * Extends TransferEvent with response data that is received after a completed transfer.
 *
 * @alpha
 */
export interface TransferCompleteEvent extends TransferEvent {
  response: UploadResponse | DownloadResponse;
}

/**
 * Collection of event handlers to monitor transfer lifecycle events.
 * Allows a way to register callbacks for each stage of the transfer process.
 *
 * @alpha
 */
export interface TransferEventListeners {
  transferInitiated?: EventListener<TransferEvent>[];
  bytesTransferred?: EventListener<TransferEvent>[];
  transferComplete?: EventListener<TransferCompleteEvent>[];
  transferFailed?: EventListener<TransferEvent>[];
}

/**
 * Event listener type.
 *
 * @alpha
 */
export interface JoinStreamIterationEvents {
  onBytes?: (byteLength: number, index: number) => void;
  onCompletion?: (byteLength: number, index: number) => void;
  onFailure?: (error: unknown, index: number) => void;
  onStreamConsumed?: (index: number) => void;
}

/**
 * Canned failure policies for directory transfers.
 * Used to control behavior when an individual object fails during a multi-object transfer.
 *
 * "terminate" - Cancel all ongoing requests, terminate the directory transfer, and throw the error. (Default)
 * "continue" - Ignore the failure, increment failed count, and continue transferring remaining objects.
 *
 * @alpha
 */
export type CannedFailurePolicy = "terminate" | "continue";

/**
 * Context provided to a custom failure policy callback when an individual object transfer fails.
 * Contains the directory transfer request, the specific failed object request, and the error.
 *
 * @alpha
 */
export interface DirectoryTransferFailureContext {
  /**
   * The original directory transfer request.
   */
  request: UploadDirectoryRequest | DownloadDirectoryRequest;
  /**
   * The individual object request that failed.
   */
  objectRequest: PutObjectCommandInput | GetObjectCommandInput;
  /**
   * The error that caused the failure.
   */
  error: unknown;
}

/**
 * Failure policy for directory transfers.
 * Either a canned policy enum value, or a custom callback invoked per failure.
 * Custom callbacks return "continue" to skip the failure, or "terminate" to abort.
 *
 * @alpha
 */
export type FailurePolicy =
  | CannedFailurePolicy
  | ((context: DirectoryTransferFailureContext) => Promise<CannedFailurePolicy>);

/**
 * Request parameters for uploadDirectory operation.
 *
 * @alpha
 */
export interface UploadDirectoryRequest {
  /**
   * The name of the bucket to upload objects to.
   */
  bucket: string;
  /**
   * The source directory to upload.
   */
  source: string;
  /**
   * Whether to follow symbolic links when traversing.
   * Default: false.
   */
  followSymbolicLinks?: boolean;
  /**
   * Whether to upload directories recursively.
   * Default: false.
   */
  recursive?: boolean;
  /**
   * S3 key prefix prepended to each object key.
   * By default, if no prefix is specified, objects are uploaded to the root of the bucket.
   */
  s3Prefix?: string;
  /**
   * Filter to control which files are uploaded.
   * Can be a callback (return true to include, false to skip) or a RegExp (matches are included).
   * By default, if no filter is specified, all files will be uploaded.
   */
  filter?: ((filePath: string) => boolean) | RegExp;
  /**
   * Modifier invoked per upload request.
   * MUST return a new copy.
   * By default, if no modifier is specified, requests are passed as-is.
   */
  uploadObjectRequestModifier?: (request: PutObjectCommandInput) => PutObjectCommandInput;
  /**
   * Failure policy for handling individual upload failures.
   * Default: Terminate.
   */
  failurePolicy?: FailurePolicy;
  /**
   * Max concurrent file uploads for this directory operation.
   * Default: 100.
   */
  maxConcurrency?: number;
}

/**
 * Response from uploadDirectory operation.
 *
 * @alpha
 */
export interface UploadDirectoryResponse {
  /**
   * Number of objects successfully uploaded.
   */
  objectsUploaded: number;
  /**
   * Number of objects that failed to upload.
   */
  objectsFailed: number;
}

/**
 * Request parameters for downloadDirectory operation.
 *
 * @alpha
 */
export interface DownloadDirectoryRequest {
  /**
   * The name of the bucket.
   */
  bucket: string;
  /**
   * The destination local directory.
   */
  destination: string;
  /**
   * S3 prefix to filter listed objects.
   */
  s3Prefix?: string;
  /**
   * A callback to allow users to filter out unwanted S3 objects.
   * Return true to include the object for download, false to skip.
   * By default, if no filter is specified, all objects will be downloaded.
   */
  filter?: (object: S3Object) => boolean;
  /**
   * Modifier invoked per download request.
   * MUST return a new copy.
   * By default, if no modifier is specified, requests are passed through as-is.
   */
  downloadObjectRequestModifier?: (request: GetObjectCommandInput) => GetObjectCommandInput;
  /**
   * Failure policy for handling individual download failures.
   * Default: Terminate.
   */
  failurePolicy?: FailurePolicy;
  /**
   * Max concurrent file downloads for this directory operation.
   * Default: 100.
   */
  maxConcurrency?: number;
}

/**
 * Response from downloadDirectory operation.
 *
 * @alpha
 */
export interface DownloadDirectoryResponse {
  /**
   * Number of objects successfully downloaded.
   */
  objectsDownloaded: number;
  /**
   * Number of objects that failed to download.
   */
  objectsFailed: number;
}

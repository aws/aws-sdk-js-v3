// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import { BackupStorageServiceException as __BaseException } from "./BackupStorageServiceException";

/**
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const SummaryChecksumAlgorithm = {
  SUMMARY: "SUMMARY",
} as const;

/**
 * @public
 */
export type SummaryChecksumAlgorithm = (typeof SummaryChecksumAlgorithm)[keyof typeof SummaryChecksumAlgorithm];

/**
 * Object
 * @public
 */
export interface BackupObject {
  /**
   * Object name
   * @public
   */
  Name: string | undefined;

  /**
   * Number of chunks in object
   * @public
   */
  ChunksCount?: number;

  /**
   * Metadata string associated with the Object
   * @public
   */
  MetadataString?: string;

  /**
   * Object checksum
   * @public
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;

  /**
   * Object token
   * @public
   */
  ObjectToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataChecksumAlgorithm = {
  SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type DataChecksumAlgorithm = (typeof DataChecksumAlgorithm)[keyof typeof DataChecksumAlgorithm];

/**
 * Chunk
 * @public
 */
export interface Chunk {
  /**
   * Chunk index
   * @public
   */
  Index: number | undefined;

  /**
   * Chunk length
   * @public
   */
  Length: number | undefined;

  /**
   * Chunk checksum
   * @public
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;

  /**
   * Chunk token
   * @public
   */
  ChunkToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectInput {
  /**
   * Backup job Id for the in-progress backup.
   * @public
   */
  BackupJobId: string | undefined;

  /**
   * The name of the Object.
   * @public
   */
  ObjectName: string | undefined;
}

/**
 * Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  readonly name: "IllegalArgumentException" = "IllegalArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalArgumentException, __BaseException>) {
    super({
      name: "IllegalArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Non-retryable exception. Attempted to make an operation on non-existing or expired resource.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Retryable exception. In general indicates internal failure that can be fixed by retry.
 * @public
 */
export class RetryableException extends __BaseException {
  readonly name: "RetryableException" = "RetryableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryableException, __BaseException>) {
    super({
      name: "RetryableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Deprecated. To be removed from the model.
 * @public
 */
export class ServiceInternalException extends __BaseException {
  readonly name: "ServiceInternalException" = "ServiceInternalException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceInternalException, __BaseException>) {
    super({
      name: "ServiceInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceInternalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Retryable exception, indicates internal server error.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Increased rate over throttling limits. Can be retried with exponential backoff.
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetChunkInput {
  /**
   * Storage job id
   * @public
   */
  StorageJobId: string | undefined;

  /**
   * Chunk token
   * @public
   */
  ChunkToken: string | undefined;
}

/**
 * @public
 */
export interface GetChunkOutput {
  /**
   * Chunk data
   * @public
   */
  Data: StreamingBlobTypes | undefined;

  /**
   * Data length
   * @public
   */
  Length: number | undefined;

  /**
   * Data checksum
   * @public
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
 * @public
 */
export class KMSInvalidKeyUsageException extends __BaseException {
  readonly name: "KMSInvalidKeyUsageException" = "KMSInvalidKeyUsageException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidKeyUsageException, __BaseException>) {
    super({
      name: "KMSInvalidKeyUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidKeyUsageException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetObjectMetadataInput {
  /**
   * Backup job id for the in-progress backup.
   * @public
   */
  StorageJobId: string | undefined;

  /**
   * Object token.
   * @public
   */
  ObjectToken: string | undefined;
}

/**
 * @public
 */
export interface GetObjectMetadataOutput {
  /**
   * Metadata string.
   * @public
   */
  MetadataString?: string;

  /**
   * Metadata blob.
   * @public
   */
  MetadataBlob?: StreamingBlobTypes;

  /**
   * The size of MetadataBlob.
   * @public
   */
  MetadataBlobLength?: number;

  /**
   * MetadataBlob checksum.
   * @public
   */
  MetadataBlobChecksum?: string;

  /**
   * Checksum algorithm.
   * @public
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm;
}

/**
 * @public
 */
export interface ListChunksInput {
  /**
   * Storage job id
   * @public
   */
  StorageJobId: string | undefined;

  /**
   * Object token
   * @public
   */
  ObjectToken: string | undefined;

  /**
   * Maximum number of chunks
   * @public
   */
  MaxResults?: number;

  /**
   * Pagination token
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChunksOutput {
  /**
   * List of chunks
   * @public
   */
  ChunkList: Chunk[] | undefined;

  /**
   * Pagination token
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObjectsInput {
  /**
   * Storage job id
   * @public
   */
  StorageJobId: string | undefined;

  /**
   * Optional, specifies the starting Object name to list from. Ignored if NextToken is not NULL
   * @public
   */
  StartingObjectName?: string;

  /**
   * Optional, specifies the starting Object prefix to list from. Ignored if NextToken is not NULL
   * @public
   */
  StartingObjectPrefix?: string;

  /**
   * Maximum objects count
   * @public
   */
  MaxResults?: number;

  /**
   * Pagination token
   * @public
   */
  NextToken?: string;

  /**
   * (Optional) Created before filter
   * @public
   */
  CreatedBefore?: Date;

  /**
   * (Optional) Created after filter
   * @public
   */
  CreatedAfter?: Date;
}

/**
 * @public
 */
export interface ListObjectsOutput {
  /**
   * Object list
   * @public
   */
  ObjectList: BackupObject[] | undefined;

  /**
   * Pagination token
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface NotifyObjectCompleteInput {
  /**
   * Backup job Id for the in-progress backup
   * @public
   */
  BackupJobId: string | undefined;

  /**
   * Upload Id for the in-progress upload
   * @public
   */
  UploadId: string | undefined;

  /**
   * Object checksum
   * @public
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;

  /**
   * Optional metadata associated with an Object. Maximum string length is 256 bytes.
   * @public
   */
  MetadataString?: string;

  /**
   * Optional metadata associated with an Object. Maximum length is 4MB.
   * @public
   */
  MetadataBlob?: StreamingBlobTypes;

  /**
   * The size of MetadataBlob.
   * @public
   */
  MetadataBlobLength?: number;

  /**
   * Checksum of MetadataBlob.
   * @public
   */
  MetadataBlobChecksum?: string;

  /**
   * Checksum algorithm.
   * @public
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm;
}

/**
 * @public
 */
export interface NotifyObjectCompleteOutput {
  /**
   * Object checksum
   * @public
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;
}

/**
 * Retryalble exception. Indicated issues while reading an input stream due to the networking issues or connection drop on the client side.
 * @public
 */
export class NotReadableInputStreamException extends __BaseException {
  readonly name: "NotReadableInputStreamException" = "NotReadableInputStreamException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotReadableInputStreamException, __BaseException>) {
    super({
      name: "NotReadableInputStreamException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotReadableInputStreamException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutChunkInput {
  /**
   * Backup job Id for the in-progress backup.
   * @public
   */
  BackupJobId: string | undefined;

  /**
   * Upload Id for the in-progress upload.
   * @public
   */
  UploadId: string | undefined;

  /**
   * Describes this chunk's position relative to the other chunks
   * @public
   */
  ChunkIndex: number | undefined;

  /**
   * Data to be uploaded
   * @public
   */
  Data: StreamingBlobTypes | undefined;

  /**
   * Data length
   * @public
   */
  Length: number | undefined;

  /**
   * Data checksum
   * @public
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutChunkOutput {
  /**
   * Chunk checksum
   * @public
   */
  ChunkChecksum: string | undefined;

  /**
   * Checksum algorithm
   * @public
   */
  ChunkChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutObjectInput {
  /**
   * Backup job Id for the in-progress backup.
   * @public
   */
  BackupJobId: string | undefined;

  /**
   * The name of the Object to be uploaded.
   * @public
   */
  ObjectName: string | undefined;

  /**
   * Store user defined metadata like backup checksum, disk ids, restore metadata etc.
   * @public
   */
  MetadataString?: string;

  /**
   * Inline chunk data to be uploaded.
   * @public
   */
  InlineChunk?: StreamingBlobTypes;

  /**
   * Length of the inline chunk data.
   * @public
   */
  InlineChunkLength?: number;

  /**
   * Inline chunk checksum
   * @public
   */
  InlineChunkChecksum?: string;

  /**
   * Inline chunk checksum algorithm
   * @public
   */
  InlineChunkChecksumAlgorithm?: string;

  /**
   * object checksum
   * @public
   */
  ObjectChecksum?: string;

  /**
   * object checksum algorithm
   * @public
   */
  ObjectChecksumAlgorithm?: SummaryChecksumAlgorithm;

  /**
   * Throw an exception if Object name is already exist.
   * @public
   */
  ThrowOnDuplicate?: boolean;
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * Inline chunk checksum
   * @public
   */
  InlineChunkChecksum: string | undefined;

  /**
   * Inline chunk checksum algorithm
   * @public
   */
  InlineChunkChecksumAlgorithm: DataChecksumAlgorithm | undefined;

  /**
   * object checksum
   * @public
   */
  ObjectChecksum: string | undefined;

  /**
   * object checksum algorithm
   * @public
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;
}

/**
 * Non-retryable exception. Attempted to create already existing object or chunk.
 *     This message contains a checksum of already presented data.
 * @public
 */
export class DataAlreadyExistsException extends __BaseException {
  readonly name: "DataAlreadyExistsException" = "DataAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * Data checksum used
   * @public
   */
  Checksum?: string;

  /**
   * Checksum algorithm used
   * @public
   */
  ChecksumAlgorithm?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataAlreadyExistsException, __BaseException>) {
    super({
      name: "DataAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.Checksum = opts.Checksum;
    this.ChecksumAlgorithm = opts.ChecksumAlgorithm;
  }
}

/**
 * @public
 */
export interface StartObjectInput {
  /**
   * Backup job Id for the in-progress backup
   * @public
   */
  BackupJobId: string | undefined;

  /**
   * Name for the object.
   * @public
   */
  ObjectName: string | undefined;

  /**
   * Throw an exception if Object name is already exist.
   * @public
   */
  ThrowOnDuplicate?: boolean;
}

/**
 * @public
 */
export interface StartObjectOutput {
  /**
   * Upload Id for a given upload.
   * @public
   */
  UploadId: string | undefined;
}

/**
 * @internal
 */
export const GetChunkOutputFilterSensitiveLog = (obj: GetChunkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetObjectMetadataOutputFilterSensitiveLog = (obj: GetObjectMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyObjectCompleteInputFilterSensitiveLog = (obj: NotifyObjectCompleteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutChunkInputFilterSensitiveLog = (obj: PutChunkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutObjectInputFilterSensitiveLog = (obj: PutObjectInput): any => ({
  ...obj,
});

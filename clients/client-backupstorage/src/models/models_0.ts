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
 * @public
 * Object
 */
export interface BackupObject {
  /**
   * @public
   * Object name
   */
  Name: string | undefined;

  /**
   * @public
   * Number of chunks in object
   */
  ChunksCount?: number;

  /**
   * @public
   * Metadata string associated with the Object
   */
  MetadataString?: string;

  /**
   * @public
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;

  /**
   * @public
   * Object token
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
 * @public
 * Chunk
 */
export interface Chunk {
  /**
   * @public
   * Chunk index
   */
  Index: number | undefined;

  /**
   * @public
   * Chunk length
   */
  Length: number | undefined;

  /**
   * @public
   * Chunk checksum
   */
  Checksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;

  /**
   * @public
   * Chunk token
   */
  ChunkToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectInput {
  /**
   * @public
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * @public
   * The name of the Object.
   */
  ObjectName: string | undefined;
}

/**
 * @public
 * Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
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
 * @public
 * Non-retryable exception. Attempted to make an operation on non-existing or expired resource.
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
 * @public
 * Retryable exception. In general indicates internal failure that can be fixed by retry.
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
 * @public
 * Deprecated. To be removed from the model.
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
 * @public
 * Retryable exception, indicates internal server error.
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
 * @public
 * Increased rate over throttling limits. Can be retried with exponential backoff.
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
   * @public
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * @public
   * Chunk token
   */
  ChunkToken: string | undefined;
}

/**
 * @public
 */
export interface GetChunkOutput {
  /**
   * @public
   * Chunk data
   */
  Data: StreamingBlobTypes | undefined;

  /**
   * @public
   * Data length
   */
  Length: number | undefined;

  /**
   * @public
   * Data checksum
   */
  Checksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * @public
 * Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
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
   * @public
   * Backup job id for the in-progress backup.
   */
  StorageJobId: string | undefined;

  /**
   * @public
   * Object token.
   */
  ObjectToken: string | undefined;
}

/**
 * @public
 */
export interface GetObjectMetadataOutput {
  /**
   * @public
   * Metadata string.
   */
  MetadataString?: string;

  /**
   * @public
   * Metadata blob.
   */
  MetadataBlob?: StreamingBlobTypes;

  /**
   * @public
   * The size of MetadataBlob.
   */
  MetadataBlobLength?: number;

  /**
   * @public
   * MetadataBlob checksum.
   */
  MetadataBlobChecksum?: string;

  /**
   * @public
   * Checksum algorithm.
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm;
}

/**
 * @public
 */
export interface ListChunksInput {
  /**
   * @public
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * @public
   * Object token
   */
  ObjectToken: string | undefined;

  /**
   * @public
   * Maximum number of chunks
   */
  MaxResults?: number;

  /**
   * @public
   * Pagination token
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChunksOutput {
  /**
   * @public
   * List of chunks
   */
  ChunkList: Chunk[] | undefined;

  /**
   * @public
   * Pagination token
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObjectsInput {
  /**
   * @public
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * @public
   * Optional, specifies the starting Object name to list from. Ignored if NextToken is not NULL
   */
  StartingObjectName?: string;

  /**
   * @public
   * Optional, specifies the starting Object prefix to list from. Ignored if NextToken is not NULL
   */
  StartingObjectPrefix?: string;

  /**
   * @public
   * Maximum objects count
   */
  MaxResults?: number;

  /**
   * @public
   * Pagination token
   */
  NextToken?: string;

  /**
   * @public
   * (Optional) Created before filter
   */
  CreatedBefore?: Date;

  /**
   * @public
   * (Optional) Created after filter
   */
  CreatedAfter?: Date;
}

/**
 * @public
 */
export interface ListObjectsOutput {
  /**
   * @public
   * Object list
   */
  ObjectList: BackupObject[] | undefined;

  /**
   * @public
   * Pagination token
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface NotifyObjectCompleteInput {
  /**
   * @public
   * Backup job Id for the in-progress backup
   */
  BackupJobId: string | undefined;

  /**
   * @public
   * Upload Id for the in-progress upload
   */
  UploadId: string | undefined;

  /**
   * @public
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;

  /**
   * @public
   * Optional metadata associated with an Object. Maximum string length is 256 bytes.
   */
  MetadataString?: string;

  /**
   * @public
   * Optional metadata associated with an Object. Maximum length is 4MB.
   */
  MetadataBlob?: StreamingBlobTypes;

  /**
   * @public
   * The size of MetadataBlob.
   */
  MetadataBlobLength?: number;

  /**
   * @public
   * Checksum of MetadataBlob.
   */
  MetadataBlobChecksum?: string;

  /**
   * @public
   * Checksum algorithm.
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm;
}

/**
 * @public
 */
export interface NotifyObjectCompleteOutput {
  /**
   * @public
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;
}

/**
 * @public
 * Retryalble exception. Indicated issues while reading an input stream due to the networking issues or connection drop on the client side.
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
   * @public
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * @public
   * Upload Id for the in-progress upload.
   */
  UploadId: string | undefined;

  /**
   * @public
   * Describes this chunk's position relative to the other chunks
   */
  ChunkIndex: number | undefined;

  /**
   * @public
   * Data to be uploaded
   */
  Data: StreamingBlobTypes | undefined;

  /**
   * @public
   * Data length
   */
  Length: number | undefined;

  /**
   * @public
   * Data checksum
   */
  Checksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutChunkOutput {
  /**
   * @public
   * Chunk checksum
   */
  ChunkChecksum: string | undefined;

  /**
   * @public
   * Checksum algorithm
   */
  ChunkChecksumAlgorithm: DataChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutObjectInput {
  /**
   * @public
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * @public
   * The name of the Object to be uploaded.
   */
  ObjectName: string | undefined;

  /**
   * @public
   * Store user defined metadata like backup checksum, disk ids, restore metadata etc.
   */
  MetadataString?: string;

  /**
   * @public
   * Inline chunk data to be uploaded.
   */
  InlineChunk?: StreamingBlobTypes;

  /**
   * @public
   * Length of the inline chunk data.
   */
  InlineChunkLength?: number;

  /**
   * @public
   * Inline chunk checksum
   */
  InlineChunkChecksum?: string;

  /**
   * @public
   * Inline chunk checksum algorithm
   */
  InlineChunkChecksumAlgorithm?: string;

  /**
   * @public
   * object checksum
   */
  ObjectChecksum?: string;

  /**
   * @public
   * object checksum algorithm
   */
  ObjectChecksumAlgorithm?: SummaryChecksumAlgorithm;

  /**
   * @public
   * Throw an exception if Object name is already exist.
   */
  ThrowOnDuplicate?: boolean;
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * @public
   * Inline chunk checksum
   */
  InlineChunkChecksum: string | undefined;

  /**
   * @public
   * Inline chunk checksum algorithm
   */
  InlineChunkChecksumAlgorithm: DataChecksumAlgorithm | undefined;

  /**
   * @public
   * object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * @public
   * object checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | undefined;
}

/**
 * @public
 * Non-retryable exception. Attempted to create already existing object or chunk.
 *     This message contains a checksum of already presented data.
 */
export class DataAlreadyExistsException extends __BaseException {
  readonly name: "DataAlreadyExistsException" = "DataAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * Data checksum used
   */
  Checksum?: string;

  /**
   * @public
   * Checksum algorithm used
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
   * @public
   * Backup job Id for the in-progress backup
   */
  BackupJobId: string | undefined;

  /**
   * @public
   * Name for the object.
   */
  ObjectName: string | undefined;

  /**
   * @public
   * Throw an exception if Object name is already exist.
   */
  ThrowOnDuplicate?: boolean;
}

/**
 * @public
 */
export interface StartObjectOutput {
  /**
   * @public
   * Upload Id for a given upload.
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

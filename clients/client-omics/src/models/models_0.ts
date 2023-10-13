// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { OmicsServiceException as __BaseException } from "./OmicsServiceException";

/**
 * @public
 */
export interface AbortMultipartReadSetUploadRequest {
  /**
   * @public
   * <p>
   *       The sequence store ID for the store involved in the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID for the multipart upload.
   *     </p>
   */
  uploadId: string | undefined;
}

/**
 * @public
 */
export interface AbortMultipartReadSetUploadResponse {}

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>An unexpected error occurred. Try the request again.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
 */
export class NotSupportedOperationException extends __BaseException {
  readonly name: "NotSupportedOperationException" = "NotSupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotSupportedOperationException, __BaseException>) {
    super({
      name: "NotSupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotSupportedOperationException.prototype);
  }
}

/**
 * @public
 * <p>The request timed out.</p>
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * @public
 * <p>The target resource was not found in the current Region.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Accelerators = {
  GPU: "GPU",
} as const;

/**
 * @public
 */
export type Accelerators = (typeof Accelerators)[keyof typeof Accelerators];

/**
 * @public
 */
export interface AcceptShareRequest {
  /**
   * @public
   * <p>
   * The ID for a share offer for analytics store data.
   * </p>
   */
  shareId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  /**
   * The share is activated
   */
  ACTIVATING: "ACTIVATING",
  /**
   * The share is active and can be used
   */
  ACTIVE: "ACTIVE",
  /**
   * The share has been deleted
   */
  DELETED: "DELETED",
  /**
   * The share is being deleted
   */
  DELETING: "DELETING",
  /**
   * The share has failed to activate or delete
   */
  FAILED: "FAILED",
  /**
   * The share has been created but is not yet active
   */
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 */
export interface AcceptShareResponse {
  /**
   * @public
   * <p>
   * The status of an analytics store share.
   * </p>
   */
  status?: ShareStatus;
}

/**
 * @public
 * <p>The request cannot be applied to the target resource in its current state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ReadSetActivationJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type ReadSetActivationJobStatus = (typeof ReadSetActivationJobStatus)[keyof typeof ReadSetActivationJobStatus];

/**
 * @public
 * <p>A read set activation job filter.</p>
 */
export interface ActivateReadSetFilter {
  /**
   * @public
   * <p>The filter's status.</p>
   */
  status?: ReadSetActivationJobStatus;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 * <p>A read set activation job.</p>
 */
export interface ActivateReadSetJobItem {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ReadSetActivationJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ReadSetActivationJobItemStatus =
  (typeof ReadSetActivationJobItemStatus)[keyof typeof ReadSetActivationJobItemStatus];

/**
 * @public
 * <p>A source for a read set activation job.</p>
 */
export interface ActivateReadSetSourceItem {
  /**
   * @public
   * <p>The source's read set ID.</p>
   */
  readSetId: string | undefined;

  /**
   * @public
   * <p>The source's status.</p>
   */
  status: ReadSetActivationJobItemStatus | undefined;

  /**
   * @public
   * <p>The source's status message.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * The Job was cancelled
   */
  CANCELLED: "CANCELLED",
  /**
   * The Job has completed
   */
  COMPLETED: "COMPLETED",
  /**
   * The Job completed with failed runs
   */
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  /**
   * The Job failed
   */
  FAILED: "FAILED",
  /**
   * The Job is executing
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * The Job has been submitted to run
   */
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>Details about an imported annotation item.</p>
 */
export interface AnnotationImportItemDetail {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>The item's job status.</p>
   */
  jobStatus: JobStatus | undefined;
}

/**
 * @public
 * <p>A source for an annotation import job.</p>
 */
export interface AnnotationImportItemSource {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface CancelAnnotationImportRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelAnnotationImportResponse {}

/**
 * @public
 */
export interface GetAnnotationImportRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Read options for an annotation import job.</p>
 */
export interface ReadOptions {
  /**
   * @public
   * <p>The file's field separator.</p>
   */
  sep?: string;

  /**
   * @public
   * <p>The file's encoding.</p>
   */
  encoding?: string;

  /**
   * @public
   * <p>The file's quote character.</p>
   */
  quote?: string;

  /**
   * @public
   * <p>Whether all values need to be quoted, or just those that contain quotes.</p>
   */
  quoteAll?: boolean;

  /**
   * @public
   * <p>A character for escaping quotes in the file.</p>
   */
  escape?: string;

  /**
   * @public
   * <p>Whether quotes need to be escaped in the file.</p>
   */
  escapeQuotes?: boolean;

  /**
   * @public
   * <p>The file's comment character.</p>
   */
  comment?: string;

  /**
   * @public
   * <p>Whether the file has a header row.</p>
   */
  header?: boolean;

  /**
   * @public
   * <p>A line separator for the file.</p>
   */
  lineSep?: string;
}

/**
 * @public
 * <p>Formatting options for a TSV file.</p>
 */
export interface TsvOptions {
  /**
   * @public
   * <p>The file's read options.</p>
   */
  readOptions?: ReadOptions;
}

/**
 * @public
 * <p>Formatting options for a VCF file.</p>
 */
export interface VcfOptions {
  /**
   * @public
   * <p>The file's ignore qual field setting.</p>
   */
  ignoreQualField?: boolean;

  /**
   * @public
   * <p>The file's ignore filter field setting.</p>
   */
  ignoreFilterField?: boolean;
}

/**
 * @public
 * <p>Formatting options for a file.</p>
 */
export type FormatOptions =
  | FormatOptions.TsvOptionsMember
  | FormatOptions.VcfOptionsMember
  | FormatOptions.$UnknownMember;

/**
 * @public
 */
export namespace FormatOptions {
  /**
   * @public
   * <p>Options for a TSV file.</p>
   */
  export interface TsvOptionsMember {
    tsvOptions: TsvOptions;
    vcfOptions?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Options for a VCF file.</p>
   */
  export interface VcfOptionsMember {
    tsvOptions?: never;
    vcfOptions: VcfOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tsvOptions?: never;
    vcfOptions?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tsvOptions: (value: TsvOptions) => T;
    vcfOptions: (value: VcfOptions) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FormatOptions, visitor: Visitor<T>): T => {
    if (value.tsvOptions !== undefined) return visitor.tsvOptions(value.tsvOptions);
    if (value.vcfOptions !== undefined) return visitor.vcfOptions(value.vcfOptions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetAnnotationImportResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's destination annotation store.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>
   * The name of the annotation store version.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime: Date | undefined;

  /**
   * @public
   * <p>The job's imported items.</p>
   */
  items: AnnotationImportItemDetail[] | undefined;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization: boolean | undefined;

  /**
   * @public
   * <p>Formatting options for a file.</p>
   */
  formatOptions: FormatOptions | undefined;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 * <p>A filter for annotation import jobs.</p>
 */
export interface ListAnnotationImportJobsFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: JobStatus;

  /**
   * @public
   * <p>A store name to filter on.</p>
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsRequest {
  /**
   * @public
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>IDs of annotation import jobs to retrieve.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ListAnnotationImportJobsFilter;
}

/**
 * @public
 * <p>An annotation import job.</p>
 */
export interface AnnotationImportJobItem {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's destination annotation store.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>
   * The name of the annotation store version.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsResponse {
  /**
   * @public
   * <p>A list of jobs.</p>
   */
  annotationImportJobs?: AnnotationImportJobItem[];

  /**
   * @public
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartAnnotationImportRequest {
  /**
   * @public
   * <p>A destination annotation store for the job.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Items to import.</p>
   */
  items: AnnotationImportItemSource[] | undefined;

  /**
   * @public
   * <p>
   * The name of the annotation store version.
   * </p>
   */
  versionName?: string;

  /**
   * @public
   * <p>Formatting options for the annotation file.</p>
   */
  formatOptions?: FormatOptions;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAnnotationImportResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>A genome reference.</p>
 */
export type ReferenceItem = ReferenceItem.ReferenceArnMember | ReferenceItem.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceItem {
  /**
   * @public
   * <p>The reference's ARN.</p>
   */
  export interface ReferenceArnMember {
    referenceArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    referenceArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    referenceArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReferenceItem, visitor: Visitor<T>): T => {
    if (value.referenceArn !== undefined) return visitor.referenceArn(value.referenceArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  /**
   * KMS
   */
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * <p>Server-side encryption (SSE) settings for a store.</p>
 */
export interface SseConfig {
  /**
   * @public
   * <p>The encryption type.</p>
   */
  type: EncryptionType | undefined;

  /**
   * @public
   * <p>An encryption key ARN.</p>
   */
  keyArn?: string;
}

/**
 * @public
 * @enum
 */
export const StoreFormat = {
  /**
   * GFF3 Format
   */
  GFF: "GFF",
  /**
   * TSV Format
   */
  TSV: "TSV",
  /**
   * VCF Format
   */
  VCF: "VCF",
} as const;

/**
 * @public
 */
export type StoreFormat = (typeof StoreFormat)[keyof typeof StoreFormat];

/**
 * @public
 * @enum
 */
export const AnnotationType = {
  /**
   * Contains contig and 1-base position
   */
  CHR_POS: "CHR_POS",
  /**
   * Contains contig, 1-base position, ref and alt allele information
   */
  CHR_POS_REF_ALT: "CHR_POS_REF_ALT",
  /**
   * Contains contig, start, and end positions. Coordinates are 1-based
   */
  CHR_START_END_ONE_BASE: "CHR_START_END_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 1-based
   */
  CHR_START_END_REF_ALT_ONE_BASE: "CHR_START_END_REF_ALT_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 0-based
   */
  CHR_START_END_REF_ALT_ZERO_BASE: "CHR_START_END_REF_ALT_ZERO_BASE",
  /**
   * Contains contig, start, and end positions. Coordinates are 0-based
   */
  CHR_START_END_ZERO_BASE: "CHR_START_END_ZERO_BASE",
  /**
   * Generic text file. No genomic information
   */
  GENERIC: "GENERIC",
} as const;

/**
 * @public
 */
export type AnnotationType = (typeof AnnotationType)[keyof typeof AnnotationType];

/**
 * @public
 * @enum
 */
export const FormatToHeaderKey = {
  ALT: "ALT",
  CHR: "CHR",
  END: "END",
  POS: "POS",
  REF: "REF",
  START: "START",
} as const;

/**
 * @public
 */
export type FormatToHeaderKey = (typeof FormatToHeaderKey)[keyof typeof FormatToHeaderKey];

/**
 * @public
 * @enum
 */
export const SchemaValueType = {
  /**
   * BOOLEAN type
   */
  BOOLEAN: "BOOLEAN",
  /**
   * DOUBLE type
   */
  DOUBLE: "DOUBLE",
  /**
   * FLOAT type
   */
  FLOAT: "FLOAT",
  /**
   * INT type
   */
  INT: "INT",
  /**
   * LONG type
   */
  LONG: "LONG",
  /**
   * STRING type
   */
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type SchemaValueType = (typeof SchemaValueType)[keyof typeof SchemaValueType];

/**
 * @public
 * <p>File settings for a TSV store.</p>
 */
export interface TsvStoreOptions {
  /**
   * @public
   * <p>The store's annotation type.</p>
   */
  annotationType?: AnnotationType;

  /**
   * @public
   * <p>The store's header key to column name mapping.</p>
   */
  formatToHeader?: Record<FormatToHeaderKey, string>;

  /**
   * @public
   * <p>The store's schema.</p>
   */
  schema?: Record<string, SchemaValueType>[];
}

/**
 * @public
 * <p>Settings for a store.</p>
 */
export type StoreOptions = StoreOptions.TsvStoreOptionsMember | StoreOptions.$UnknownMember;

/**
 * @public
 */
export namespace StoreOptions {
  /**
   * @public
   * <p>File settings for a TSV store.</p>
   */
  export interface TsvStoreOptionsMember {
    tsvStoreOptions: TsvStoreOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tsvStoreOptions?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tsvStoreOptions: (value: TsvStoreOptions) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StoreOptions, visitor: Visitor<T>): T => {
    if (value.tsvStoreOptions !== undefined) return visitor.tsvStoreOptions(value.tsvStoreOptions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateAnnotationStoreRequest {
  /**
   * @public
   * <p>The genome reference for the store's annotations.</p>
   */
  reference?: ReferenceItem;

  /**
   * @public
   * <p>A name for the store.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   */
  versionName?: string;

  /**
   * @public
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>The annotation file format of the store.</p>
   */
  storeFormat: StoreFormat | undefined;

  /**
   * @public
   * <p>File parsing options for the annotation store.</p>
   */
  storeOptions?: StoreOptions;
}

/**
 * @public
 * @enum
 */
export const StoreStatus = {
  /**
   * The Store is active
   */
  ACTIVE: "ACTIVE",
  /**
   * The Store is being created
   */
  CREATING: "CREATING",
  /**
   * The Store is deleting
   */
  DELETING: "DELETING",
  /**
   * The Store creation failed
   */
  FAILED: "FAILED",
  /**
   * The Store is updating
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type StoreStatus = (typeof StoreStatus)[keyof typeof StoreStatus];

/**
 * @public
 */
export interface CreateAnnotationStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference. Required for all stores except TSV format with generic annotations.</p>
   */
  reference?: ReferenceItem;

  /**
   * @public
   * <p>The annotation file format of the store.</p>
   */
  storeFormat?: StoreFormat;

  /**
   * @public
   * <p>The store's file parsing options.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreRequest {
  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Whether to force deletion.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreResponse {
  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreRequest {
  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The store's tags.</p>
   */
  tags: Record<string, string> | undefined;

  /**
   * @public
   * <p>The store's parsing options.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * @public
   * <p>The store's annotation file format.</p>
   */
  storeFormat?: StoreFormat;

  /**
   * @public
   * <p>A status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;

  /**
   * @public
   * <p>
   * An integer indicating how many versions of an annotation store exist.
   * </p>
   */
  numVersions: number | undefined;
}

/**
 * @public
 * <p>A filter for annotation stores.</p>
 */
export interface ListAnnotationStoresFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus;
}

/**
 * @public
 */
export interface ListAnnotationStoresRequest {
  /**
   * @public
   * <p>IDs of stores to list.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ListAnnotationStoresFilter;
}

/**
 * @public
 * <p>An annotation store.</p>
 */
export interface AnnotationStoreItem {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's file format.</p>
   */
  storeFormat: StoreFormat | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * @public
   * <p>The store's creation time.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresResponse {
  /**
   * @public
   * <p>A list of stores.</p>
   */
  annotationStores?: AnnotationStoreItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreRequest {
  /**
   * @public
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>Parsing options for the store.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * @public
   * <p>The annotation file format of the store.</p>
   */
  storeFormat?: StoreFormat;
}

/**
 * @public
 * <p>
 * The options for a TSV file.
 * </p>
 */
export interface TsvVersionOptions {
  /**
   * @public
   * <p>
   * The store version's annotation type.
   * </p>
   */
  annotationType?: AnnotationType;

  /**
   * @public
   * <p>
   * The annotation store version's header key to column name mapping.
   * </p>
   */
  formatToHeader?: Record<FormatToHeaderKey, string>;

  /**
   * @public
   * <p>
   * The TSV schema for an annotation store version.
   * </p>
   */
  schema?: Record<string, SchemaValueType>[];
}

/**
 * @public
 * <p>
 * The  options for an annotation store version.
 * </p>
 */
export type VersionOptions = VersionOptions.TsvVersionOptionsMember | VersionOptions.$UnknownMember;

/**
 * @public
 */
export namespace VersionOptions {
  /**
   * @public
   * <p>
   * File settings for a version of a TSV store.
   * </p>
   */
  export interface TsvVersionOptionsMember {
    tsvVersionOptions: TsvVersionOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tsvVersionOptions?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tsvVersionOptions: (value: TsvVersionOptions) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VersionOptions, visitor: Visitor<T>): T => {
    if (value.tsvVersionOptions !== undefined) return visitor.tsvVersionOptions(value.tsvVersionOptions);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateAnnotationStoreVersionRequest {
  /**
   * @public
   * <p>
   * The name of an annotation store version from which versions are being created.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The description of an annotation store version.
   * </p>
   */
  description?: string;

  /**
   * @public
   * <p>
   * The options for an annotation store version.
   * </p>
   */
  versionOptions?: VersionOptions;

  /**
   * @public
   * <p>
   * Any tags added to annotation store version.
   * </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  /**
   * The Version is active
   */
  ACTIVE: "ACTIVE",
  /**
   * The Version is being created
   */
  CREATING: "CREATING",
  /**
   * The Version is deleting
   */
  DELETING: "DELETING",
  /**
   * The Version creation failed
   */
  FAILED: "FAILED",
  /**
   * The Version is updating
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * @public
 */
export interface CreateAnnotationStoreVersionResponse {
  /**
   * @public
   * <p>
   * A generated ID for the annotation store
   * </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The ID for the annotation store from which new versions are being created.
   * </p>
   */
  storeId: string | undefined;

  /**
   * @public
   * <p>
   * The options for an annotation store version.
   * </p>
   */
  versionOptions?: VersionOptions;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The status of a annotation store version.
   * </p>
   */
  status: VersionStatus | undefined;

  /**
   * @public
   * <p>
   * The time stamp for the creation of an annotation store version.
   * </p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsRequest {
  /**
   * @public
   * <p>
   * The name of the annotation store from which versions are being deleted.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The versions of an annotation store to be deleted.
   * </p>
   */
  versions: string[] | undefined;

  /**
   * @public
   * <p>
   * Forces the deletion of an annotation store version when imports are in-progress..
   * </p>
   */
  force?: boolean;
}

/**
 * @public
 * <p>
 * The error preventing deletion of the annotation store version.
 * </p>
 */
export interface VersionDeleteError {
  /**
   * @public
   * <p>
   * The name given to an annotation store version.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The message explaining the error in annotation store deletion.
   * </p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsResponse {
  /**
   * @public
   * <p>
   * Any errors that occur when attempting to delete an annotation store version.
   * </p>
   */
  errors?: VersionDeleteError[];
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionRequest {
  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionResponse {
  /**
   * @public
   * <p>
   * The store ID for annotation store version.
   * </p>
   */
  storeId: string | undefined;

  /**
   * @public
   * <p>
   * The annotation store version ID.
   * </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  status: VersionStatus | undefined;

  /**
   * @public
   * <p>
   * The Arn for the annotation store.
   * </p>
   */
  versionArn: string | undefined;

  /**
   * @public
   * <p>
   * The name of the annotation store.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The description for an annotation store version.
   * </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>
   * Any tags associated with an annotation store version.
   * </p>
   */
  tags: Record<string, string> | undefined;

  /**
   * @public
   * <p>
   * The options for an annotation store version.
   * </p>
   */
  versionOptions?: VersionOptions;

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>
   * The size of the annotation store version in Bytes.
   * </p>
   */
  versionSizeBytes: number | undefined;
}

/**
 * @public
 * <p>
 * Use filters to focus the returned annotation store versions on a specific parameter, such as the status of the annotation store.
 * </p>
 */
export interface ListAnnotationStoreVersionsFilter {
  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  status?: VersionStatus;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsRequest {
  /**
   * @public
   * <p>
   * The name of an annotation store.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The maximum number of annotation store versions to return in one page of results.
   * </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   * </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   * A filter to apply to the list of annotation store versions.
   * </p>
   */
  filter?: ListAnnotationStoreVersionsFilter;
}

/**
 * @public
 * <p>
 * Annotation store versions.
 * </p>
 */
export interface AnnotationStoreVersionItem {
  /**
   * @public
   * <p>
   * The store ID for an annotation store version.
   * </p>
   */
  storeId: string | undefined;

  /**
   * @public
   * <p>
   * The annotation store version ID.
   * </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  status: VersionStatus | undefined;

  /**
   * @public
   * <p>
   * The Arn for an annotation store version.
   * </p>
   */
  versionArn: string | undefined;

  /**
   * @public
   * <p>
   * A name given to an annotation store version to distinguish it from others.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name of an annotation store version.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The description of an annotation store version.
   * </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>
   * The size of an annotation store version in Bytes.
   * </p>
   */
  versionSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsResponse {
  /**
   * @public
   * <p>
   * Lists all versions of an annotation store.
   * </p>
   */
  annotationStoreVersions?: AnnotationStoreVersionItem[];

  /**
   * @public
   * <p>
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   * </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionRequest {
  /**
   * @public
   * <p>
   * The name of an annotation store.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name of an annotation store version.
   * </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The description of an annotation store.
   * </p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionResponse {
  /**
   * @public
   * <p>
   * The annotation store ID.
   * </p>
   */
  storeId: string | undefined;

  /**
   * @public
   * <p>
   * The annotation store version ID.
   * </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  status: VersionStatus | undefined;

  /**
   * @public
   * <p>
   * The name of an annotation store.
   * </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   * The name of an annotation store version. </p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>
   * The description of an annotation store version.
   * </p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetRequest {
  /**
   * @public
   * <p>The read sets' IDs.</p>
   */
  ids: string[] | undefined;

  /**
   * @public
   * <p>The read sets' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 * <p>An error from a batch read set operation.</p>
 */
export interface ReadSetBatchError {
  /**
   * @public
   * <p>The error's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The error's code.</p>
   */
  code: string | undefined;

  /**
   * @public
   * <p>The error's message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetResponse {
  /**
   * @public
   * <p>Errors returned by individual delete operations.</p>
   */
  errors?: ReadSetBatchError[];
}

/**
 * @public
 */
export interface CancelRunRequest {
  /**
   * @public
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface CancelVariantImportRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelVariantImportResponse {}

/**
 * @public
 * @enum
 */
export const ReadSetPartSource = {
  SOURCE1: "SOURCE1",
  SOURCE2: "SOURCE2",
} as const;

/**
 * @public
 */
export type ReadSetPartSource = (typeof ReadSetPartSource)[keyof typeof ReadSetPartSource];

/**
 * @public
 * <p>
 *       Part of the response to the CompleteReadSetUpload API, including metadata.
 *     </p>
 */
export interface CompleteReadSetUploadPartListItem {
  /**
   * @public
   * <p>
   *       A number identifying the part in a read set upload.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * @public
   * <p>
   *       The source file of the part being uploaded.
   *     </p>
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * @public
   * <p>
   *       A unique identifier used to confirm that parts are being added to the correct upload.
   *     </p>
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadRequest {
  /**
   * @public
   * <p>
   *       The sequence store ID for the store involved in the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID for the multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>
   *       The individual uploads or parts of a multipart upload.
   *     </p>
   */
  parts: CompleteReadSetUploadPartListItem[] | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadResponse {
  /**
   * @public
   * <p>
   *       The read set ID created for an uploaded read set.
   *     </p>
   */
  readSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FileType = {
  BAM: "BAM",
  CRAM: "CRAM",
  FASTQ: "FASTQ",
} as const;

/**
 * @public
 */
export type FileType = (typeof FileType)[keyof typeof FileType];

/**
 * @public
 */
export interface CreateMultipartReadSetUploadRequest {
  /**
   * @public
   * <p>
   *       The sequence store ID for the store that is the destination of the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       An idempotency token that can be used to avoid triggering multiple multipart uploads.
   *     </p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>
   *       The type of file being uploaded.
   *     </p>
   */
  sourceFileType: FileType | undefined;

  /**
   * @public
   * <p>
   *       The source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * @public
   * <p>
   *       The source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * @public
   * <p>
   *       Where the source originated.
   *     </p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>
   *       The ARN of the reference.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The name of the read set.
   *     </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   *       The description of the read set.
   *     </p>
   */
  description?: string;

  /**
   * @public
   * <p>
   *       Any tags to add to the read set.
   *     </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMultipartReadSetUploadResponse {
  /**
   * @public
   * <p>
   *       The sequence store ID for the store that the read set will be created in.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       he ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>
   *       The file type of the read set source.
   *     </p>
   */
  sourceFileType: FileType | undefined;

  /**
   * @public
   * <p>
   *       The source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * @public
   * <p>
   *       The source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * @public
   * <p>
   *       The source of the read set.
   *     </p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>
   *       The read set source's reference ARN.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The name of the read set.
   *     </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *       The description of the read set.
   *     </p>
   */
  description?: string;

  /**
   * @public
   * <p>
   *       The tags to add to the read set.
   *     </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The creation time of the multipart upload.
   *     </p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateReferenceStoreRequest {
  /**
   * @public
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateReferenceStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's SSE settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupRequest {
  /**
   * @public
   * <p>A name for the group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The maximum number of CPUs to use in the group.</p>
   */
  maxCpus?: number;

  /**
   * @public
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * @public
   * <p>A maximum run time for the group in minutes.</p>
   */
  maxDuration?: number;

  /**
   * @public
   * <p>Tags for the group.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>
   *       The maximum GPUs that can be used by a run group.
   *     </p>
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface CreateRunGroupResponse {
  /**
   * @public
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Tags for the run group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSequenceStoreRequest {
  /**
   * @public
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface CreateSequenceStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's SSE settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface CreateShareRequest {
  /**
   * @public
   * <p>
   *       The resource ARN for the analytics store to be shared.
   *     </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The principal subscriber is the account being given access to the analytics store data through the share offer.
   *     </p>
   */
  principalSubscriber: string | undefined;

  /**
   * @public
   * <p>
   *       A name given to the share.
   *     </p>
   */
  shareName?: string;
}

/**
 * @public
 */
export interface CreateShareResponse {
  /**
   * @public
   * <p>
   *       An ID generated for the share.
   *     </p>
   */
  shareId?: string;

  /**
   * @public
   * <p>
   *       The status of a share.
   *     </p>
   */
  status?: ShareStatus;

  /**
   * @public
   * <p>
   *       A name given to the share.
   *     </p>
   */
  shareName?: string;
}

/**
 * @public
 */
export interface CreateVariantStoreRequest {
  /**
   * @public
   * <p>The genome reference for the store's variants.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>A name for the store.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;
}

/**
 * @public
 */
export interface CreateVariantStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference?: ReferenceItem;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowEngine = {
  CWL: "CWL",
  NEXTFLOW: "NEXTFLOW",
  WDL: "WDL",
} as const;

/**
 * @public
 */
export type WorkflowEngine = (typeof WorkflowEngine)[keyof typeof WorkflowEngine];

/**
 * @public
 * <p>A workflow parameter.</p>
 */
export interface WorkflowParameter {
  /**
   * @public
   * <p>The parameter's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Whether the parameter is optional.</p>
   */
  optional?: boolean;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * @public
   * <p>A name for the workflow.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description for the workflow.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An engine for the workflow.</p>
   */
  engine?: WorkflowEngine;

  /**
   * @public
   * <p>A ZIP archive for the workflow.</p>
   */
  definitionZip?: Uint8Array;

  /**
   * @public
   * <p>The URI of a definition for the workflow.</p>
   */
  definitionUri?: string;

  /**
   * @public
   * <p>The path of the main definition file for the workflow.</p>
   */
  main?: string;

  /**
   * @public
   * <p>A parameter template for the workflow.</p>
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * @public
   * <p>A storage capacity for the workflow in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * @public
   * <p>Tags for the workflow.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>
   *       The computational accelerator specified to run the workflow.
   *     </p>
   */
  accelerators?: Accelerators;
}

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * @public
   * <p>The workflow's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus;

  /**
   * @public
   * <p>The workflow's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const CreationType = {
  IMPORT: "IMPORT",
  UPLOAD: "UPLOAD",
} as const;

/**
 * @public
 */
export type CreationType = (typeof CreationType)[keyof typeof CreationType];

/**
 * @public
 */
export interface DeleteReferenceRequest {
  /**
   * @public
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reference's store ID.</p>
   */
  referenceStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReferenceResponse {}

/**
 * @public
 */
export interface DeleteReferenceStoreRequest {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteReferenceStoreResponse {}

/**
 * @public
 */
export interface DeleteRunRequest {
  /**
   * @public
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunGroupRequest {
  /**
   * @public
   * <p>The run group's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSequenceStoreRequest {
  /**
   * @public
   * <p>The sequence store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSequenceStoreResponse {}

/**
 * @public
 */
export interface DeleteShareRequest {
  /**
   * @public
   * <p>
   *       The ID for the share request to be deleted.
   *     </p>
   */
  shareId: string | undefined;
}

/**
 * @public
 */
export interface DeleteShareResponse {
  /**
   * @public
   * <p>
   *       The status of the share being deleted.
   *     </p>
   */
  status?: ShareStatus;
}

/**
 * @public
 */
export interface DeleteVariantStoreRequest {
  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Whether to force deletion.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteVariantStoreResponse {
  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ETagAlgorithm = {
  BAM_MD5UP: "BAM_MD5up",
  CRAM_MD5UP: "CRAM_MD5up",
  FASTQ_MD5UP: "FASTQ_MD5up",
} as const;

/**
 * @public
 */
export type ETagAlgorithm = (typeof ETagAlgorithm)[keyof typeof ETagAlgorithm];

/**
 * @public
 * <p>
 *       The entity tag (ETag) is a hash of the object representing its semantic content.
 *     </p>
 */
export interface ETag {
  /**
   * @public
   * <p>
   *       The algorithm used to calculate the read set’s ETag(s). </p>
   */
  algorithm?: ETagAlgorithm;

  /**
   * @public
   * <p>
   *       The ETag hash calculated on Source1 of the read set.
   *     </p>
   */
  source1?: string;

  /**
   * @public
   * <p>
   *       The ETag hash calculated on Source2 of the read set.
   *     </p>
   */
  source2?: string;
}

/**
 * @public
 * <p>A read set.</p>
 */
export interface ExportReadSet {
  /**
   * @public
   * <p>The set's ID.</p>
   */
  readSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReadSetExportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ReadSetExportJobItemStatus = (typeof ReadSetExportJobItemStatus)[keyof typeof ReadSetExportJobItemStatus];

/**
 * @public
 * <p>Details about a read set.</p>
 */
export interface ExportReadSetDetail {
  /**
   * @public
   * <p>The set's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The set's status.</p>
   */
  status: ReadSetExportJobItemStatus | undefined;

  /**
   * @public
   * <p>The set's status message.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const ReadSetExportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type ReadSetExportJobStatus = (typeof ReadSetExportJobStatus)[keyof typeof ReadSetExportJobStatus];

/**
 * @public
 * <p>An read set export job filter.</p>
 */
export interface ExportReadSetFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: ReadSetExportJobStatus;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 * <p>Details about a read set export job.</p>
 */
export interface ExportReadSetJobDetail {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's destination in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;
}

/**
 * @public
 * <p>Details about a file.</p>
 */
export interface FileInformation {
  /**
   * @public
   * <p>The file's total parts.</p>
   */
  totalParts?: number;

  /**
   * @public
   * <p>The file's part size.</p>
   */
  partSize?: number;

  /**
   * @public
   * <p>The file's content length.</p>
   */
  contentLength?: number;
}

/**
 * @public
 * <p>
 * Use filters to focus the returned annotation store versions on a specific parameter, such as the status of the annotation store.
 * </p>
 */
export interface Filter {
  /**
   * @public
   * <p>
   * The Amazon Resource Number (Arn) for an analytics store.
   * </p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>
   * The status of an annotation store version.
   * </p>
   */
  status?: ShareStatus[];
}

/**
 * @public
 * @enum
 */
export const ReadSetFile = {
  INDEX: "INDEX",
  SOURCE1: "SOURCE1",
  SOURCE2: "SOURCE2",
} as const;

/**
 * @public
 */
export type ReadSetFile = (typeof ReadSetFile)[keyof typeof ReadSetFile];

/**
 * @public
 */
export interface GetReadSetRequest {
  /**
   * @public
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The file to retrieve.</p>
   */
  file?: ReadSetFile;

  /**
   * @public
   * <p>The part number to retrieve.</p>
   */
  partNumber: number | undefined;
}

/**
 * @public
 */
export interface GetReadSetResponse {
  /**
   * @public
   * <p>The read set file payload.</p>
   */
  payload?: StreamingBlobTypes;
}

/**
 * @public
 * <p>The ranges specified in the request are not valid.</p>
 */
export class RangeNotSatisfiableException extends __BaseException {
  readonly name: "RangeNotSatisfiableException" = "RangeNotSatisfiableException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RangeNotSatisfiableException, __BaseException>) {
    super({
      name: "RangeNotSatisfiableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RangeNotSatisfiableException.prototype);
  }
}

/**
 * @public
 */
export interface GetReadSetActivationJobRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetActivationJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources?: ActivateReadSetSourceItem[];
}

/**
 * @public
 */
export interface GetReadSetExportJobRequest {
  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetExportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's destination in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's read sets.</p>
   */
  readSets?: ExportReadSetDetail[];
}

/**
 * @public
 */
export interface GetReadSetImportJobRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 * <p>Source files for a sequence.</p>
 */
export interface SourceFiles {
  /**
   * @public
   * <p>The location of the first file in Amazon S3.</p>
   */
  source1: string | undefined;

  /**
   * @public
   * <p>The location of the second file in Amazon S3.</p>
   */
  source2?: string;
}

/**
 * @public
 * @enum
 */
export const ReadSetImportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ReadSetImportJobItemStatus = (typeof ReadSetImportJobItemStatus)[keyof typeof ReadSetImportJobItemStatus];

/**
 * @public
 * <p>A source for an import read set job.</p>
 */
export interface ImportReadSetSourceItem {
  /**
   * @public
   * <p>The source files' location in Amazon S3.</p>
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * @public
   * <p>The source's file type.</p>
   */
  sourceFileType: FileType | undefined;

  /**
   * @public
   * <p>The source's status.</p>
   */
  status: ReadSetImportJobItemStatus | undefined;

  /**
   * @public
   * <p>The source's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The source's subject ID.</p>
   */
  subjectId: string | undefined;

  /**
   * @public
   * <p>The source's sample ID.</p>
   */
  sampleId: string | undefined;

  /**
   * @public
   * <p>Where the source originated.</p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>The source's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * @public
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ReadSetImportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type ReadSetImportJobStatus = (typeof ReadSetImportJobStatus)[keyof typeof ReadSetImportJobStatus];

/**
 * @public
 */
export interface GetReadSetImportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: ImportReadSetSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetMetadataRequest {
  /**
   * @public
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 * <p>Files in a read set.</p>
 */
export interface ReadSetFiles {
  /**
   * @public
   * <p>The location of the first file in Amazon S3.</p>
   */
  source1?: FileInformation;

  /**
   * @public
   * <p>The location of the second file in Amazon S3.</p>
   */
  source2?: FileInformation;

  /**
   * @public
   * <p>The files' index.</p>
   */
  index?: FileInformation;
}

/**
 * @public
 * <p>Details about a sequence.</p>
 */
export interface SequenceInformation {
  /**
   * @public
   * <p>The sequence's total read count.</p>
   */
  totalReadCount?: number;

  /**
   * @public
   * <p>The sequence's total base count.</p>
   */
  totalBaseCount?: number;

  /**
   * @public
   * <p>Where the sequence originated.</p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>The sequence's alignment setting.</p>
   */
  alignment?: string;
}

/**
 * @public
 * @enum
 */
export const ReadSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PROCESSING_UPLOAD: "PROCESSING_UPLOAD",
  UPLOAD_FAILED: "UPLOAD_FAILED",
} as const;

/**
 * @public
 */
export type ReadSetStatus = (typeof ReadSetStatus)[keyof typeof ReadSetStatus];

/**
 * @public
 */
export interface GetReadSetMetadataResponse {
  /**
   * @public
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The read set's subject ID.</p>
   */
  subjectId?: string;

  /**
   * @public
   * <p>The read set's sample ID.</p>
   */
  sampleId?: string;

  /**
   * @public
   * <p>The read set's status.</p>
   */
  status: ReadSetStatus | undefined;

  /**
   * @public
   * <p>The read set's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The read set's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The read set's file type.</p>
   */
  fileType: FileType | undefined;

  /**
   * @public
   * <p>When the read set was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The read set's sequence information.</p>
   */
  sequenceInformation?: SequenceInformation;

  /**
   * @public
   * <p>The read set's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * @public
   * <p>The read set's files.</p>
   */
  files?: ReadSetFiles;

  /**
   * @public
   * <p>
   *       The status message for a read set. It provides more detail as to why the read set has a status.
   *     </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>
   *       The creation type of the read set.
   *     </p>
   */
  creationType?: CreationType;

  /**
   * @public
   * <p>
   *       The entity tag (ETag) is a hash of the object meant to represent its semantic content.
   *     </p>
   */
  etag?: ETag;
}

/**
 * @public
 * @enum
 */
export const ReferenceFile = {
  INDEX: "INDEX",
  SOURCE: "SOURCE",
} as const;

/**
 * @public
 */
export type ReferenceFile = (typeof ReferenceFile)[keyof typeof ReferenceFile];

/**
 * @public
 */
export interface GetReferenceRequest {
  /**
   * @public
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reference's store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The range to retrieve.</p>
   */
  range?: string;

  /**
   * @public
   * <p>The part number to retrieve.</p>
   */
  partNumber: number | undefined;

  /**
   * @public
   * <p>The file to retrieve.</p>
   */
  file?: ReferenceFile;
}

/**
 * @public
 */
export interface GetReferenceResponse {
  /**
   * @public
   * <p>The reference file payload.</p>
   */
  payload?: StreamingBlobTypes;
}

/**
 * @public
 */
export interface GetReferenceImportJobRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReferenceImportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ReferenceImportJobItemStatus =
  (typeof ReferenceImportJobItemStatus)[keyof typeof ReferenceImportJobItemStatus];

/**
 * @public
 * <p>An genome reference source.</p>
 */
export interface ImportReferenceSourceItem {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  sourceFile?: string;

  /**
   * @public
   * <p>The source's status.</p>
   */
  status: ReferenceImportJobItemStatus | undefined;

  /**
   * @public
   * <p>The source's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ReferenceImportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type ReferenceImportJobStatus = (typeof ReferenceImportJobStatus)[keyof typeof ReferenceImportJobStatus];

/**
 * @public
 */
export interface GetReferenceImportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: ImportReferenceSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReferenceMetadataRequest {
  /**
   * @public
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reference's reference store ID.</p>
   */
  referenceStoreId: string | undefined;
}

/**
 * @public
 * <p>A set of genome reference files.</p>
 */
export interface ReferenceFiles {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  source?: FileInformation;

  /**
   * @public
   * <p>The files' index.</p>
   */
  index?: FileInformation;
}

/**
 * @public
 * @enum
 */
export const ReferenceStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ReferenceStatus = (typeof ReferenceStatus)[keyof typeof ReferenceStatus];

/**
 * @public
 */
export interface GetReferenceMetadataResponse {
  /**
   * @public
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reference's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The reference's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The reference's MD5 checksum.</p>
   */
  md5: string | undefined;

  /**
   * @public
   * <p>The reference's status.</p>
   */
  status?: ReferenceStatus;

  /**
   * @public
   * <p>The reference's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The reference's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>When the reference was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the reference was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The reference's files.</p>
   */
  files?: ReferenceFiles;
}

/**
 * @public
 */
export interface GetReferenceStoreRequest {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RunExport = {
  DEFINITION: "DEFINITION",
} as const;

/**
 * @public
 */
export type RunExport = (typeof RunExport)[keyof typeof RunExport];

/**
 * @public
 */
export interface GetRunRequest {
  /**
   * @public
   * <p>The run's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The run's export format.</p>
   */
  export?: RunExport[];
}

/**
 * @public
 * @enum
 */
export const RunLogLevel = {
  ALL: "ALL",
  ERROR: "ERROR",
  FATAL: "FATAL",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type RunLogLevel = (typeof RunLogLevel)[keyof typeof RunLogLevel];

/**
 * @public
 * @enum
 */
export const RunRetentionMode = {
  REMOVE: "REMOVE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type RunRetentionMode = (typeof RunRetentionMode)[keyof typeof RunRetentionMode];

/**
 * @public
 * @enum
 */
export const RunStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus];

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  PRIVATE: "PRIVATE",
  READY2RUN: "READY2RUN",
} as const;

/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 */
export interface GetRunResponse {
  /**
   * @public
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The run's status.</p>
   */
  status?: RunStatus;

  /**
   * @public
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * @public
   * <p>The run's workflow type.</p>
   */
  workflowType?: WorkflowType;

  /**
   * @public
   * <p>The run's ID.</p>
   */
  runId?: string;

  /**
   * @public
   * <p>The run's service role ARN.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The run's group ID.</p>
   */
  runGroupId?: string;

  /**
   * @public
   * <p>The run's priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The run's definition.</p>
   */
  definition?: string;

  /**
   * @public
   * <p>The run's digest.</p>
   */
  digest?: string;

  /**
   * @public
   * <p>The run's parameters.</p>
   */
  parameters?: __DocumentType;

  /**
   * @public
   * <p>The run's storage capacity in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * @public
   * <p>The run's output URI.</p>
   */
  outputUri?: string;

  /**
   * @public
   * <p>The run's log level.</p>
   */
  logLevel?: RunLogLevel;

  /**
   * @public
   * <p>The run's resource digests.</p>
   */
  resourceDigests?: Record<string, string>;

  /**
   * @public
   * <p>Who started the run.</p>
   */
  startedBy?: string;

  /**
   * @public
   * <p>When the run was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>When the run started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The run's stop time.</p>
   */
  stopTime?: Date;

  /**
   * @public
   * <p>The run's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The run's tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The computational accelerator used to run the workflow.
   *     </p>
   */
  accelerators?: Accelerators;

  /**
   * @public
   * <p>The run's retention mode.</p>
   */
  retentionMode?: RunRetentionMode;
}

/**
 * @public
 */
export interface GetRunGroupRequest {
  /**
   * @public
   * <p>The group's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunGroupResponse {
  /**
   * @public
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The group's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The group's maximum number of CPUs to use.</p>
   */
  maxCpus?: number;

  /**
   * @public
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * @public
   * <p>The group's maximum run time in minutes.</p>
   */
  maxDuration?: number;

  /**
   * @public
   * <p>When the group was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The group's tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The maximum GPUs that can be used by a run group.
   *     </p>
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface GetRunTaskRequest {
  /**
   * @public
   * <p>The task's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The task's ID.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 */
export interface GetRunTaskResponse {
  /**
   * @public
   * <p>The task's ID.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The task's status.</p>
   */
  status?: TaskStatus;

  /**
   * @public
   * <p>The task's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The task's CPU usage.</p>
   */
  cpus?: number;

  /**
   * @public
   * <p>The task's memory use in gigabytes.</p>
   */
  memory?: number;

  /**
   * @public
   * <p>When the task was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The task's start time.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The task's stop time.</p>
   */
  stopTime?: Date;

  /**
   * @public
   * <p>The task's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The task's log stream.</p>
   */
  logStream?: string;

  /**
   * @public
   * <p>
   *       The number of Graphics Processing Units (GPU) specified in the task.
   *     </p>
   */
  gpus?: number;

  /**
   * @public
   * <p>
   *       The instance type for a task.
   *     </p>
   */
  instanceType?: string;
}

/**
 * @public
 */
export interface GetSequenceStoreRequest {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSequenceStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface GetShareRequest {
  /**
   * @public
   * <p>
   *       The generated ID for a share.
   *     </p>
   */
  shareId: string | undefined;
}

/**
 * @public
 * <p>
 *       The details of a share.
 *     </p>
 */
export interface ShareDetails {
  /**
   * @public
   * <p>
   *       The ID for a share offer for an analytics store .
   *     </p>
   */
  shareId?: string;

  /**
   * @public
   * <p>
   *       The resource Arn of the analytics store being shared.
   *     </p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>
   *       The principal subscriber is the account the analytics store data is being shared with.
   *     </p>
   */
  principalSubscriber?: string;

  /**
   * @public
   * <p>
   *       The account ID for the data owner. The owner creates the share offer.
   *     </p>
   */
  ownerId?: string;

  /**
   * @public
   * <p>
   *       The status of a share.
   *     </p>
   */
  status?: ShareStatus;

  /**
   * @public
   * <p>
   *       The status message for a share. It provides more details on the status of the share.
   *     </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>
   *       The name of the share.
   *     </p>
   */
  shareName?: string;

  /**
   * @public
   * <p>
   *       The timestamp for when the share was created.
   *     </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>
   *       The timestamp of the share update.
   *     </p>
   */
  updateTime?: Date;
}

/**
 * @public
 */
export interface GetShareResponse {
  /**
   * @public
   * <p>
   *       An analytic store share details object. contains status, resourceArn, ownerId, etc.
   *     </p>
   */
  share?: ShareDetails;
}

/**
 * @public
 */
export interface GetVariantImportRequest {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Details about an imported variant item.</p>
 */
export interface VariantImportItemDetail {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>The item's job status.</p>
   */
  jobStatus: JobStatus | undefined;

  /**
   * @public
   * <p> A message that provides additional context about a job </p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetVariantImportResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's destination variant store.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>The job's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's items.</p>
   */
  items: VariantImportItemDetail[] | undefined;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization: boolean | undefined;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface GetVariantStoreRequest {
  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetVariantStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The store's tags.</p>
   */
  tags: Record<string, string> | undefined;

  /**
   * @public
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowExport = {
  DEFINITION: "DEFINITION",
} as const;

/**
 * @public
 */
export type WorkflowExport = (typeof WorkflowExport)[keyof typeof WorkflowExport];

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType;

  /**
   * @public
   * <p>The export format for the workflow.</p>
   */
  export?: WorkflowExport[];
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * @public
   * <p>The workflow's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus;

  /**
   * @public
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType;

  /**
   * @public
   * <p>The workflow's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The workflow's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The workflow's engine.</p>
   */
  engine?: WorkflowEngine;

  /**
   * @public
   * <p>The workflow's definition.</p>
   */
  definition?: string;

  /**
   * @public
   * <p>The path of the main definition file for the workflow.</p>
   */
  main?: string;

  /**
   * @public
   * <p>The workflow's digest.</p>
   */
  digest?: string;

  /**
   * @public
   * <p>The workflow's parameter template.</p>
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * @public
   * <p>The workflow's storage capacity in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * @public
   * <p>When the workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The workflow's status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The workflow's tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       Gets metadata for workflow.
   *     </p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The computational accelerator specified to run the workflow. </p>
   */
  accelerators?: Accelerators;
}

/**
 * @public
 * <p>A filter for import read set jobs.</p>
 */
export interface ImportReadSetFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: ReadSetImportJobStatus;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 * <p>An import read set job.</p>
 */
export interface ImportReadSetJobItem {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;
}

/**
 * @public
 * <p>A filter for import references.</p>
 */
export interface ImportReferenceFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: ReferenceImportJobStatus;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 * <p>An import reference job.</p>
 */
export interface ImportReferenceJobItem {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsRequest {
  /**
   * @public
   * <p>
   *       The Sequence Store ID used for the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The maximum number of multipart uploads returned in a page.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *       Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads.
 *     </p>
 */
export interface MultipartReadSetUploadListItem {
  /**
   * @public
   * <p>
   *       The sequence store ID used for the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>
   *       The type of file the read set originated from.
   *     </p>
   */
  sourceFileType: FileType | undefined;

  /**
   * @public
   * <p>
   *       The read set source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * @public
   * <p>
   *       The read set source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * @public
   * <p>
   *       The source of an uploaded part.
   *     </p>
   */
  generatedFrom: string | undefined;

  /**
   * @public
   * <p>
   *       The source's reference ARN.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The name of a read set.
   *     </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *       The description of a read set.
   *     </p>
   */
  description?: string;

  /**
   * @public
   * <p>
   *       Any tags you wish to add to a read set.
   *     </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The time stamp for when a direct upload was created.
   *     </p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsResponse {
  /**
   * @public
   * <p>
   *       Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       An array of multipart uploads.
   *     </p>
   */
  uploads?: MultipartReadSetUploadListItem[];
}

/**
 * @public
 */
export interface ListReadSetActivationJobsRequest {
  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The maximum number of read set activation jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ActivateReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of jobs.</p>
   */
  activationJobs?: ActivateReadSetJobItem[];
}

/**
 * @public
 */
export interface ListReadSetExportJobsRequest {
  /**
   * @public
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ExportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetExportJobsResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of jobs.</p>
   */
  exportJobs?: ExportReadSetJobDetail[];
}

/**
 * @public
 */
export interface ListReadSetImportJobsRequest {
  /**
   * @public
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ImportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetImportJobsResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of jobs.</p>
   */
  importJobs?: ImportReadSetJobItem[];
}

/**
 * @public
 * <p>A filter for read sets.</p>
 */
export interface ReadSetFilter {
  /**
   * @public
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: ReadSetStatus;

  /**
   * @public
   * <p>A genome reference ARN to filter on.</p>
   */
  referenceArn?: string;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;

  /**
   * @public
   * <p>
   *       The read set source's sample ID.
   *     </p>
   */
  sampleId?: string;

  /**
   * @public
   * <p>
   *       The read set source's subject ID.
   *     </p>
   */
  subjectId?: string;

  /**
   * @public
   * <p>
   *       Where the source originated.
   *     </p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>
   *       The creation type of the read set.
   *     </p>
   */
  creationType?: CreationType;
}

/**
 * @public
 */
export interface ListReadSetsRequest {
  /**
   * @public
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The maximum number of read sets to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ReadSetFilter;
}

/**
 * @public
 * <p>A read set.</p>
 */
export interface ReadSetListItem {
  /**
   * @public
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The read set's subject ID.</p>
   */
  subjectId?: string;

  /**
   * @public
   * <p>The read set's sample ID.</p>
   */
  sampleId?: string;

  /**
   * @public
   * <p>The read set's status.</p>
   */
  status: ReadSetStatus | undefined;

  /**
   * @public
   * <p>The read set's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The read set's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The read set's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * @public
   * <p>The read set's file type.</p>
   */
  fileType: FileType | undefined;

  /**
   * @public
   * <p>Details about a sequence.</p>
   */
  sequenceInformation?: SequenceInformation;

  /**
   * @public
   * <p>When the read set was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   *       The status for a read set. It provides more detail as to why the read set has a status.
   *     </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>
   *       The creation type of the read set.
   *     </p>
   */
  creationType?: CreationType;

  /**
   * @public
   * <p>
   *       The entity tag (ETag) is a hash of the object representing  its semantic content.
   *     </p>
   */
  etag?: ETag;
}

/**
 * @public
 */
export interface ListReadSetsResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of read sets.</p>
   */
  readSets: ReadSetListItem[] | undefined;
}

/**
 * @public
 * <p>
 *       Filter settings that select for read set upload parts of interest.
 *     </p>
 */
export interface ReadSetUploadPartListFilter {
  /**
   * @public
   * <p>
   *       Filters for read set uploads after a specified time.
   *     </p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>
   *       Filters for read set part uploads before a specified time.
   *     </p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsRequest {
  /**
   * @public
   * <p>
   *       The Sequence Store ID used for the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>
   *       The source file for the upload part.
   *     </p>
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * @public
   * <p>
   *       The maximum number of read set upload parts returned in a page.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       Attributes used to filter for a specific subset of read set part uploads.
   *     </p>
   */
  filter?: ReadSetUploadPartListFilter;
}

/**
 * @public
 * <p>
 *       The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API.
 *     </p>
 */
export interface ReadSetUploadPartListItem {
  /**
   * @public
   * <p>
   *       The number identifying the part in an upload.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * @public
   * <p>
   *       The size of the the part in an upload.
   *     </p>
   */
  partSize: number | undefined;

  /**
   * @public
   * <p>
   *       The origin of the part being direct uploaded.
   *     </p>
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * @public
   * <p>
   *       A unique identifier used to confirm that parts are being added to the correct upload.
   *     </p>
   */
  checksum: string | undefined;

  /**
   * @public
   * <p>
   *       The time stamp for when a direct upload was created.
   *     </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>
   *       The time stamp for the most recent update to an uploaded part.
   *     </p>
   */
  lastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsResponse {
  /**
   * @public
   * <p>
   *       Next token returned in the response of a previous ListReadSetUploadParts call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       An array of upload parts.
   *     </p>
   */
  parts?: ReadSetUploadPartListItem[];
}

/**
 * @public
 */
export interface ListReferenceImportJobsRequest {
  /**
   * @public
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ImportReferenceFilter;
}

/**
 * @public
 */
export interface ListReferenceImportJobsResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A lis of jobs.</p>
   */
  importJobs?: ImportReferenceJobItem[];
}

/**
 * @public
 * <p>A filter for references.</p>
 */
export interface ReferenceFilter {
  /**
   * @public
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An MD5 checksum to filter on.</p>
   */
  md5?: string;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferencesRequest {
  /**
   * @public
   * <p>The references' reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The maximum number of references to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ReferenceFilter;
}

/**
 * @public
 * <p>A genome reference.</p>
 */
export interface ReferenceListItem {
  /**
   * @public
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reference's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The reference's store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The reference's MD5 checksum.</p>
   */
  md5: string | undefined;

  /**
   * @public
   * <p>The reference's status.</p>
   */
  status?: ReferenceStatus;

  /**
   * @public
   * <p>The reference's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The reference's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>When the reference was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the reference was updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferencesResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of references.</p>
   */
  references: ReferenceListItem[] | undefined;
}

/**
 * @public
 * <p>A filter for reference stores.</p>
 */
export interface ReferenceStoreFilter {
  /**
   * @public
   * <p>The name to filter on.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferenceStoresRequest {
  /**
   * @public
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ReferenceStoreFilter;
}

/**
 * @public
 * <p>Details about a reference store.</p>
 */
export interface ReferenceStoreDetail {
  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of reference stores.</p>
   */
  referenceStores: ReferenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsRequest {
  /**
   * @public
   * <p>The run groups' name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
   * @public
   * <p>The maximum number of run groups to return in one page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A run group.</p>
 */
export interface RunGroupListItem {
  /**
   * @public
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The group's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The group's maximum CPU count setting.</p>
   */
  maxCpus?: number;

  /**
   * @public
   * <p>The group's maximum concurrent run setting.</p>
   */
  maxRuns?: number;

  /**
   * @public
   * <p>The group's maximum duration setting in minutes.</p>
   */
  maxDuration?: number;

  /**
   * @public
   * <p>When the group was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>
   *       The maximum GPUs that can be used by a run group.
   *     </p>
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface ListRunGroupsResponse {
  /**
   * @public
   * <p>A list of groups.</p>
   */
  items?: RunGroupListItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunsRequest {
  /**
   * @public
   * <p>Filter the list by run name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Filter the list by run group ID.</p>
   */
  runGroupId?: string;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
   * @public
   * <p>The maximum number of runs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       The status of a run.
   *     </p>
   */
  status?: RunStatus;
}

/**
 * @public
 * <p>A workflow run.</p>
 */
export interface RunListItem {
  /**
   * @public
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The run's status.</p>
   */
  status?: RunStatus;

  /**
   * @public
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * @public
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The run's priority.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>The run's storage capacity.</p>
   */
  storageCapacity?: number;

  /**
   * @public
   * <p>When the run was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>When the run started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>When the run stopped.</p>
   */
  stopTime?: Date;
}

/**
 * @public
 */
export interface ListRunsResponse {
  /**
   * @public
   * <p>A list of runs.</p>
   */
  items?: RunListItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunTasksRequest {
  /**
   * @public
   * <p>The run's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Filter the list by status.</p>
   */
  status?: TaskStatus;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
   * @public
   * <p>The maximum number of run tasks to return in one page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A workflow run task.</p>
 */
export interface TaskListItem {
  /**
   * @public
   * <p>The task's ID.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The task's status.</p>
   */
  status?: TaskStatus;

  /**
   * @public
   * <p>The task's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The task's CPU count.</p>
   */
  cpus?: number;

  /**
   * @public
   * <p>The task's memory use in gigabyes.</p>
   */
  memory?: number;

  /**
   * @public
   * <p>When the task was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>When the task started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>When the task stopped.</p>
   */
  stopTime?: Date;

  /**
   * @public
   * <p>
   *       The number of Graphics Processing Units (GPU) specified for the task.
   *     </p>
   */
  gpus?: number;

  /**
   * @public
   * <p>
   *       The instance type for a task.
   *     </p>
   */
  instanceType?: string;
}

/**
 * @public
 */
export interface ListRunTasksResponse {
  /**
   * @public
   * <p>A list of tasks.</p>
   */
  items?: TaskListItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A filter for a sequence store.</p>
 */
export interface SequenceStoreFilter {
  /**
   * @public
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * @public
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListSequenceStoresRequest {
  /**
   * @public
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: SequenceStoreFilter;
}

/**
 * @public
 * <p>Details about a sequence store.</p>
 */
export interface SequenceStoreDetail {
  /**
   * @public
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface ListSequenceStoresResponse {
  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of sequence stores.</p>
   */
  sequenceStores: SequenceStoreDetail[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  /**
   * The resource owner is an account other than the caller
   */
  OTHER: "OTHER",
  /**
   * The resource owner is the calling account
   */
  SELF: "SELF",
} as const;

/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 */
export interface ListSharesRequest {
  /**
   * @public
   * <p>
   *       The account that owns the analytics store shared.
   *     </p>
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * @public
   * <p>
   *       Attributes used to filter for a specific subset of shares.
   *     </p>
   */
  filter?: Filter;

  /**
   * @public
   * <p>
   *       Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The maximum number of shares to return in one page of results.
   *     </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSharesResponse {
  /**
   * @public
   * <p>
   *       The shares available and their meta details.
   *     </p>
   */
  shares: ShareDetails[] | undefined;

  /**
   * @public
   * <p>
   * Next token returned in the response of a previous ListSharesResponse call. Used to get the next page of results.
   * </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p>A filter for variant import jobs.</p>
 */
export interface ListVariantImportJobsFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: JobStatus;

  /**
   * @public
   * <p>A store name to filter on.</p>
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListVariantImportJobsRequest {
  /**
   * @public
   * <p>The maximum number of import jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A list of job IDs.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ListVariantImportJobsFilter;
}

/**
 * @public
 * <p>A variant import job.</p>
 */
export interface VariantImportJobItem {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's destination variant store.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVariantImportJobsResponse {
  /**
   * @public
   * <p>A list of jobs.</p>
   */
  variantImportJobs?: VariantImportJobItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A filter for variant stores.</p>
 */
export interface ListVariantStoresFilter {
  /**
   * @public
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus;
}

/**
 * @public
 */
export interface ListVariantStoresRequest {
  /**
   * @public
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A list of store IDs.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A filter to apply to the list.</p>
   */
  filter?: ListVariantStoresFilter;
}

/**
 * @public
 * <p>A variant store.</p>
 */
export interface VariantStoreItem {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * @public
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresResponse {
  /**
   * @public
   * <p>A list of variant stores.</p>
   */
  variantStores?: VariantStoreItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * @public
   * <p>The workflows' type.</p>
   */
  type?: WorkflowType;

  /**
   * @public
   * <p>The workflows' name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
   * @public
   * <p>The maximum number of workflows to return in one page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A workflow.</p>
 */
export interface WorkflowListItem {
  /**
   * @public
   * <p>The workflow's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The workflow's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus;

  /**
   * @public
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType;

  /**
   * @public
   * <p>The workflow's digest.</p>
   */
  digest?: string;

  /**
   * @public
   * <p>When the workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>
   *       Any metadata available for workflow. The information listed may vary depending on the workflow, and there may also be no metadata to return.
   *     </p>
   */
  metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * @public
   * <p>The workflows' items.</p>
   */
  items?: WorkflowListItem[];

  /**
   * @public
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A source for a reference import job.</p>
 */
export interface StartReferenceImportJobSourceItem {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  sourceFile: string | undefined;

  /**
   * @public
   * <p>The source's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReferenceImportJobRequest {
  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: StartReferenceImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReferenceImportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRunGroupRequest {
  /**
   * @public
   * <p>The group's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A name for the group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The maximum number of CPUs to use.</p>
   */
  maxCpus?: number;

  /**
   * @public
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * @public
   * <p>A maximum run time for the group in minutes.</p>
   */
  maxDuration?: number;

  /**
   * @public
   * <p>
   *       The maximum GPUs that can be used by a run group.
   *     </p>
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface StartRunRequest {
  /**
   * @public
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * @public
   * <p>The run's workflow type.</p>
   */
  workflowType?: WorkflowType;

  /**
   * @public
   * <p>The ID of a run to duplicate.</p>
   */
  runId?: string;

  /**
   * @public
   * <p>A service role for the run.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A name for the run.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The run's group ID.</p>
   */
  runGroupId?: string;

  /**
   * @public
   * <p>A priority for the run.</p>
   */
  priority?: number;

  /**
   * @public
   * <p>Parameters for the run.</p>
   */
  parameters?: __DocumentType;

  /**
   * @public
   * <p>A storage capacity for the run in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * @public
   * <p>An output URI for the run.</p>
   */
  outputUri?: string;

  /**
   * @public
   * <p>A log level for the run.</p>
   */
  logLevel?: RunLogLevel;

  /**
   * @public
   * <p>Tags for the run.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The retention mode for the run.</p>
   */
  retentionMode?: RunRetentionMode;
}

/**
 * @public
 */
export interface StartRunResponse {
  /**
   * @public
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The run's status.</p>
   */
  status?: RunStatus;

  /**
   * @public
   * <p>The run's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A source for a read set activation job.</p>
 */
export interface StartReadSetActivationJobSourceItem {
  /**
   * @public
   * <p>The source's read set ID.</p>
   */
  readSetId: string | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobRequest {
  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: StartReadSetActivationJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobRequest {
  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>A location for exported files in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: ExportReadSet[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's output location.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 * <p>A source for a read set import job.</p>
 */
export interface StartReadSetImportJobSourceItem {
  /**
   * @public
   * <p>The source files' location in Amazon S3.</p>
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * @public
   * <p>The source's file type.</p>
   */
  sourceFileType: FileType | undefined;

  /**
   * @public
   * <p>The source's subject ID.</p>
   */
  subjectId: string | undefined;

  /**
   * @public
   * <p>The source's sample ID.</p>
   */
  sampleId: string | undefined;

  /**
   * @public
   * <p>Where the source originated.</p>
   */
  generatedFrom?: string;

  /**
   * @public
   * <p>The source's reference ARN.</p>
   */
  referenceArn: string | undefined;

  /**
   * @public
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReadSetImportJobRequest {
  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The job's source files.</p>
   */
  sources: StartReadSetImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetImportJobResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * @public
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartRequest {
  /**
   * @public
   * <p>
   *       The Sequence Store ID used for the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>
   *       The source file for an upload part.
   *     </p>
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * @public
   * <p>
   *       The number of the part being uploaded.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * @public
   * <p>
   *       The read set data to upload for a part.
   *     </p>
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartResponse {
  /**
   * @public
   * <p>
   *       An identifier used to confirm that parts are being added to the intended upload.
   *     </p>
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Tags for the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Keys of tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>A imported variant item's source.</p>
 */
export interface VariantImportItemSource {
  /**
   * @public
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface StartVariantImportRequest {
  /**
   * @public
   * <p>The destination variant store for the job.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Items to import.</p>
   */
  items: VariantImportItemSource[] | undefined;

  /**
   * @public
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
   * @public
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface StartVariantImportResponse {
  /**
   * @public
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariantStoreRequest {
  /**
   * @public
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the store.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateVariantStoreResponse {
  /**
   * @public
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * @public
   * <p>The store's status.</p>
   */
  status: StoreStatus | undefined;

  /**
   * @public
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * @public
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A name for the workflow.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description for the workflow.</p>
   */
  description?: string;
}

/**
 * @internal
 */
export const GetReadSetResponseFilterSensitiveLog = (obj: GetReadSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceResponseFilterSensitiveLog = (obj: GetReferenceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadReadSetPartRequestFilterSensitiveLog = (obj: UploadReadSetPartRequest): any => ({
  ...obj,
});

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { OmicsServiceException as __BaseException } from "./OmicsServiceException";

/**
 * @public
 */
export interface AbortMultipartReadSetUploadRequest {
  /**
   * <p>The sequence store ID for the store involved in the multipart upload.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The ID for the multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;
}

/**
 * @public
 */
export interface AbortMultipartReadSetUploadResponse {}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * <p>An unexpected error occurred. Try the request again.</p>
 * @public
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
 * <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
 * @public
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
 * <p>The request timed out.</p>
 * @public
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
 * <p>The target resource was not found in the current Region.</p>
 * @public
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
 * <p>The request exceeds a service quota.</p>
 * @public
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
 * <p>The request was denied due to request throttling.</p>
 * @public
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
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
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
   * <p>The ID of the resource share.</p>
   * @public
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
   * <p>The status of the resource share.</p>
   * @public
   */
  status?: ShareStatus;
}

/**
 * <p>The request cannot be applied to the target resource in its current state.</p>
 * @public
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
 * <p>A read set activation job filter.</p>
 * @public
 */
export interface ActivateReadSetFilter {
  /**
   * <p>The filter's status.</p>
   * @public
   */
  status?: ReadSetActivationJobStatus;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * <p>A read set activation job.</p>
 * @public
 */
export interface ActivateReadSetJobItem {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
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
 * <p>A source for a read set activation job.</p>
 * @public
 */
export interface ActivateReadSetSourceItem {
  /**
   * <p>The source's read set ID.</p>
   * @public
   */
  readSetId: string | undefined;

  /**
   * <p>The source's status.</p>
   * @public
   */
  status: ReadSetActivationJobItemStatus | undefined;

  /**
   * <p>The source's status message.</p>
   * @public
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
 * <p>Details about an imported annotation item.</p>
 * @public
 */
export interface AnnotationImportItemDetail {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The item's job status.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * <p>A source for an annotation import job.</p>
 * @public
 */
export interface AnnotationImportItemSource {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface CancelAnnotationImportRequest {
  /**
   * <p>The job's ID.</p>
   * @public
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
   * <p>The job's ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Read options for an annotation import job.</p>
 * @public
 */
export interface ReadOptions {
  /**
   * <p>The file's field separator.</p>
   * @public
   */
  sep?: string;

  /**
   * <p>The file's encoding.</p>
   * @public
   */
  encoding?: string;

  /**
   * <p>The file's quote character.</p>
   * @public
   */
  quote?: string;

  /**
   * <p>Whether all values need to be quoted, or just those that contain quotes.</p>
   * @public
   */
  quoteAll?: boolean;

  /**
   * <p>A character for escaping quotes in the file.</p>
   * @public
   */
  escape?: string;

  /**
   * <p>Whether quotes need to be escaped in the file.</p>
   * @public
   */
  escapeQuotes?: boolean;

  /**
   * <p>The file's comment character.</p>
   * @public
   */
  comment?: string;

  /**
   * <p>Whether the file has a header row.</p>
   * @public
   */
  header?: boolean;

  /**
   * <p>A line separator for the file.</p>
   * @public
   */
  lineSep?: string;
}

/**
 * <p>Formatting options for a TSV file.</p>
 * @public
 */
export interface TsvOptions {
  /**
   * <p>The file's read options.</p>
   * @public
   */
  readOptions?: ReadOptions;
}

/**
 * <p>Formatting options for a VCF file.</p>
 * @public
 */
export interface VcfOptions {
  /**
   * <p>The file's ignore qual field setting.</p>
   * @public
   */
  ignoreQualField?: boolean;

  /**
   * <p>The file's ignore filter field setting.</p>
   * @public
   */
  ignoreFilterField?: boolean;
}

/**
 * <p>Formatting options for a file.</p>
 * @public
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
   * <p>Options for a TSV file.</p>
   * @public
   */
  export interface TsvOptionsMember {
    tsvOptions: TsvOptions;
    vcfOptions?: never;
    $unknown?: never;
  }

  /**
   * <p>Options for a VCF file.</p>
   * @public
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
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's destination annotation store.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>
   * The name of the annotation store version.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime: Date | undefined;

  /**
   * <p>The job's imported items.</p>
   * @public
   */
  items: AnnotationImportItemDetail[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization: boolean | undefined;

  /**
   * <p>Formatting options for a file.</p>
   * @public
   */
  formatOptions: FormatOptions | undefined;

  /**
   * <p>The annotation schema generated by the parsed annotation data.</p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * <p>A filter for annotation import jobs.</p>
 * @public
 */
export interface ListAnnotationImportJobsFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: JobStatus;

  /**
   * <p>A store name to filter on.</p>
   * @public
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>IDs of annotation import jobs to retrieve.</p>
   * @public
   */
  ids?: string[];

  /**
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListAnnotationImportJobsFilter;
}

/**
 * <p>An annotation import job.</p>
 * @public
 */
export interface AnnotationImportJobItem {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's destination annotation store.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>
   * The name of the annotation store version.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean;

  /**
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  annotationImportJobs?: AnnotationImportJobItem[];

  /**
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartAnnotationImportRequest {
  /**
   * <p>A destination annotation store for the job.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>A service role for the job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Items to import.</p>
   * @public
   */
  items: AnnotationImportItemSource[] | undefined;

  /**
   * <p>
   * The name of the annotation store version.
   * </p>
   * @public
   */
  versionName?: string;

  /**
   * <p>Formatting options for the annotation file.</p>
   * @public
   */
  formatOptions?: FormatOptions;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean;

  /**
   * <p>The annotation schema generated by the parsed annotation data.</p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAnnotationImportResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>A genome reference.</p>
 * @public
 */
export type ReferenceItem = ReferenceItem.ReferenceArnMember | ReferenceItem.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceItem {
  /**
   * <p>The reference's ARN.</p>
   * @public
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
 * <p>Server-side encryption (SSE) settings for a store.</p>
 * @public
 */
export interface SseConfig {
  /**
   * <p>The encryption type.</p>
   * @public
   */
  type: EncryptionType | undefined;

  /**
   * <p>An encryption key ARN.</p>
   * @public
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
 * <p>File settings for a TSV store.</p>
 * @public
 */
export interface TsvStoreOptions {
  /**
   * <p>The store's annotation type.</p>
   * @public
   */
  annotationType?: AnnotationType;

  /**
   * <p>The store's header key to column name mapping.</p>
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>>;

  /**
   * <p>The store's schema.</p>
   * @public
   */
  schema?: Record<string, SchemaValueType>[];
}

/**
 * <p>Settings for a store.</p>
 * @public
 */
export type StoreOptions = StoreOptions.TsvStoreOptionsMember | StoreOptions.$UnknownMember;

/**
 * @public
 */
export namespace StoreOptions {
  /**
   * <p>File settings for a TSV store.</p>
   * @public
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
   * <p>The genome reference for the store's annotations.</p>
   * @public
   */
  reference?: ReferenceItem;

  /**
   * <p>A name for the store.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   * @public
   */
  versionName?: string;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat: StoreFormat | undefined;

  /**
   * <p>File parsing options for the annotation store.</p>
   * @public
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
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference. Required for all stores except TSV format with generic annotations.</p>
   * @public
   */
  reference?: ReferenceItem;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat?: StoreFormat;

  /**
   * <p>The store's file parsing options.</p>
   * @public
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreRequest {
  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether to force deletion.</p>
   * @public
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreResponse {
  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreRequest {
  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * <p>The store's parsing options.</p>
   * @public
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The store's annotation file format.</p>
   * @public
   */
  storeFormat?: StoreFormat;

  /**
   * <p>A status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   * @public
   */
  storeSizeBytes: number | undefined;

  /**
   * <p>
   * An integer indicating how many versions of an annotation store exist.
   * </p>
   * @public
   */
  numVersions: number | undefined;
}

/**
 * <p>A filter for annotation stores.</p>
 * @public
 */
export interface ListAnnotationStoresFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: StoreStatus;
}

/**
 * @public
 */
export interface ListAnnotationStoresRequest {
  /**
   * <p>IDs of stores to list.</p>
   * @public
   */
  ids?: string[];

  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListAnnotationStoresFilter;
}

/**
 * <p>An annotation store.</p>
 * @public
 */
export interface AnnotationStoreItem {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's file format.</p>
   * @public
   */
  storeFormat: StoreFormat | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>The store's creation time.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   * @public
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresResponse {
  /**
   * <p>A list of stores.</p>
   * @public
   */
  annotationStores?: AnnotationStoreItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreRequest {
  /**
   * <p>A name for the store.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>Parsing options for the store.</p>
   * @public
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat?: StoreFormat;
}

/**
 * <p>
 * The options for a TSV file.
 * </p>
 * @public
 */
export interface TsvVersionOptions {
  /**
   * <p>
   * The store version's annotation type.
   * </p>
   * @public
   */
  annotationType?: AnnotationType;

  /**
   * <p>
   * The annotation store version's header key to column name mapping.
   * </p>
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>>;

  /**
   * <p>
   * The TSV schema for an annotation store version.
   * </p>
   * @public
   */
  schema?: Record<string, SchemaValueType>[];
}

/**
 * <p>
 * The  options for an annotation store version.
 * </p>
 * @public
 */
export type VersionOptions = VersionOptions.TsvVersionOptionsMember | VersionOptions.$UnknownMember;

/**
 * @public
 */
export namespace VersionOptions {
  /**
   * <p>
   * File settings for a version of a TSV store.
   * </p>
   * @public
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
   * <p>
   * The name of an annotation store version from which versions are being created.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The description of an annotation store version.
   * </p>
   * @public
   */
  description?: string;

  /**
   * <p>
   * The options for an annotation store version.
   * </p>
   * @public
   */
  versionOptions?: VersionOptions;

  /**
   * <p>
   * Any tags added to annotation store version.
   * </p>
   * @public
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
   * <p>
   * A generated ID for the annotation store
   * </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The ID for the annotation store from which new versions are being created.
   * </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p>
   * The options for an annotation store version.
   * </p>
   * @public
   */
  versionOptions?: VersionOptions;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from other versions.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The status of a annotation store version.
   * </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p>
   * The time stamp for the creation of an annotation store version.
   * </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsRequest {
  /**
   * <p>
   * The name of the annotation store from which versions are being deleted.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The versions of an annotation store to be deleted.
   * </p>
   * @public
   */
  versions: string[] | undefined;

  /**
   * <p>
   * Forces the deletion of an annotation store version when imports are in-progress..
   * </p>
   * @public
   */
  force?: boolean;
}

/**
 * <p>
 * The error preventing deletion of the annotation store version.
 * </p>
 * @public
 */
export interface VersionDeleteError {
  /**
   * <p>
   * The name given to an annotation store version.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The message explaining the error in annotation store deletion.
   * </p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsResponse {
  /**
   * <p>
   * Any errors that occur when attempting to delete an annotation store version.
   * </p>
   * @public
   */
  errors?: VersionDeleteError[];
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionRequest {
  /**
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   * @public
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionResponse {
  /**
   * <p>
   * The store ID for annotation store version.
   * </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p>
   * The annotation store version ID.
   * </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   * The status of an annotation store version.
   * </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p>
   * The Arn for the annotation store.
   * </p>
   * @public
   */
  versionArn: string | undefined;

  /**
   * <p>
   * The name of the annotation store.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name given to an annotation store version to distinguish it from others.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The description for an annotation store version.
   * </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>
   * Any tags associated with an annotation store version.
   * </p>
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * <p>
   * The options for an annotation store version.
   * </p>
   * @public
   */
  versionOptions?: VersionOptions;

  /**
   * <p>
   * The status of an annotation store version.
   * </p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>
   * The size of the annotation store version in Bytes.
   * </p>
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * <p>Use filters to focus the returned annotation store versions on a specific parameter,
 *           such as the status of the annotation store.</p>
 * @public
 */
export interface ListAnnotationStoreVersionsFilter {
  /**
   * <p>The status of an annotation store version.</p>
   * @public
   */
  status?: VersionStatus;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsRequest {
  /**
   * <p>
   * The name of an annotation store.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The maximum number of annotation store versions to return in one page of results.
   * </p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   * </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>
   * A filter to apply to the list of annotation store versions.
   * </p>
   * @public
   */
  filter?: ListAnnotationStoreVersionsFilter;
}

/**
 * <p>
 * Annotation store versions.
 * </p>
 * @public
 */
export interface AnnotationStoreVersionItem {
  /**
   * <p>
   * The store ID for an annotation store version.
   * </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p>
   * The annotation store version ID.
   * </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   * The status of an annotation store version.
   * </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p>
   * The Arn for an annotation store version.
   * </p>
   * @public
   */
  versionArn: string | undefined;

  /**
   * <p>
   * A name given to an annotation store version to distinguish it from others.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name of an annotation store version.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The description of an annotation store version.
   * </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>
   * The status of an annotation store version.
   * </p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>
   * The size of an annotation store version in Bytes.
   * </p>
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsResponse {
  /**
   * <p>
   * Lists all versions of an annotation store.
   * </p>
   * @public
   */
  annotationStoreVersions?: AnnotationStoreVersionItem[];

  /**
   * <p>
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   * </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionRequest {
  /**
   * <p>
   * The name of an annotation store.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name of an annotation store version.
   * </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The description of an annotation store.
   * </p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionResponse {
  /**
   * <p>
   * The annotation store ID.
   * </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p>
   * The annotation store version ID.
   * </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   * The status of an annotation store version.
   * </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p>
   * The name of an annotation store.
   * </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   * The name of an annotation store version. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>
   * The description of an annotation store version.
   * </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was created.
   * </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>
   * The time stamp for when an annotation store version was updated.
   * </p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetRequest {
  /**
   * <p>The read sets' IDs.</p>
   * @public
   */
  ids: string[] | undefined;

  /**
   * <p>The read sets' sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * <p>An error from a batch read set operation.</p>
 * @public
 */
export interface ReadSetBatchError {
  /**
   * <p>The error's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The error's code.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The error's message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetResponse {
  /**
   * <p>Errors returned by individual delete operations.</p>
   * @public
   */
  errors?: ReadSetBatchError[];
}

/**
 * @public
 */
export interface CancelRunRequest {
  /**
   * <p>The run's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface CancelVariantImportRequest {
  /**
   * <p>The job's ID.</p>
   * @public
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
 * <p>
 *       Part of the response to the CompleteReadSetUpload API, including metadata.
 *     </p>
 * @public
 */
export interface CompleteReadSetUploadPartListItem {
  /**
   * <p>
   *       A number identifying the part in a read set upload.
   *     </p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p>
   *       The source file of the part being uploaded.
   *     </p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p>
   *       A unique identifier used to confirm that parts are being added to the correct upload.
   *     </p>
   * @public
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadRequest {
  /**
   * <p>The sequence store ID for the store involved in the multipart upload.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The ID for the multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The individual uploads or parts of a multipart upload.</p>
   * @public
   */
  parts: CompleteReadSetUploadPartListItem[] | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadResponse {
  /**
   * <p>The read set ID created for an uploaded read set.</p>
   * @public
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
  UBAM: "UBAM",
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
   * <p>The sequence store ID for the store that is the destination of the multipart uploads.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>An idempotency token that can be used to avoid triggering multiple multipart uploads.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The type of file being uploaded.</p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p>The source's subject ID.</p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p>Where the source originated.</p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>The ARN of the reference.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The name of the read set.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the read set.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Any tags to add to the read set.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMultipartReadSetUploadResponse {
  /**
   * <p>The sequence store ID for the store that the read set will be created in.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The ID for the initiated multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The file type of the read set source.</p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p>The source's subject ID.</p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p>The source of the read set.</p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>The read set source's reference ARN.</p>
   * @public
   */
  referenceArn: string | undefined;

  /**
   * <p>The name of the read set.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the read set.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The tags to add to the read set.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The creation time of the multipart upload.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateReferenceStoreRequest {
  /**
   * <p>A name for the store.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateReferenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's SSE settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupRequest {
  /**
   * <p>A name for the group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The maximum number of CPUs to use in the group.</p>
   * @public
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   * @public
   */
  maxRuns?: number;

  /**
   * <p>A maximum run time for the group in minutes.</p>
   * @public
   */
  maxDuration?: number;

  /**
   * <p>Tags for the group.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   * @public
   */
  requestId?: string;

  /**
   * <p>The maximum GPUs that can be used by a run group.</p>
   * @public
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface CreateRunGroupResponse {
  /**
   * <p>The group's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>Tags for the run group.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ETagAlgorithmFamily = {
  MD5UP: "MD5up",
  SHA256UP: "SHA256up",
  SHA512UP: "SHA512up",
} as const;

/**
 * @public
 */
export type ETagAlgorithmFamily = (typeof ETagAlgorithmFamily)[keyof typeof ETagAlgorithmFamily];

/**
 * @public
 */
export interface CreateSequenceStoreRequest {
  /**
   * <p>A name for the store.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload.</p>
   * @public
   */
  fallbackLocation?: string;

  /**
   * <p>The ETag algorithm family to use for ingested read sets.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily;
}

/**
 * @public
 */
export interface CreateSequenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's SSE settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload.</p>
   * @public
   */
  fallbackLocation?: string;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily;
}

/**
 * @public
 */
export interface CreateShareRequest {
  /**
   * <p>The ARN of the resource to be shared.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The principal subscriber is the account being offered shared access to the resource. </p>
   * @public
   */
  principalSubscriber: string | undefined;

  /**
   * <p>A name that the owner defines for the share.</p>
   * @public
   */
  shareName?: string;
}

/**
 * @public
 */
export interface CreateShareResponse {
  /**
   * <p>The ID that HealthOmics generates for the share.</p>
   * @public
   */
  shareId?: string;

  /**
   * <p>The status of the share.</p>
   * @public
   */
  status?: ShareStatus;

  /**
   * <p>The name of the share.</p>
   * @public
   */
  shareName?: string;
}

/**
 * @public
 */
export interface CreateVariantStoreRequest {
  /**
   * <p>The genome reference for the store's variants.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>A name for the store.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig;
}

/**
 * @public
 */
export interface CreateVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference?: ReferenceItem;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
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
 * <p>A workflow parameter.</p>
 * @public
 */
export interface WorkflowParameter {
  /**
   * <p>The parameter's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Whether the parameter is optional.</p>
   * @public
   */
  optional?: boolean;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>A name for the workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description for the workflow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>An engine for the workflow.</p>
   * @public
   */
  engine?: WorkflowEngine;

  /**
   * <p>A ZIP archive for the workflow.</p>
   * @public
   */
  definitionZip?: Uint8Array;

  /**
   * <p>The URI of a definition for the workflow.</p>
   * @public
   */
  definitionUri?: string;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   * @public
   */
  main?: string;

  /**
   * <p>A parameter template for the workflow.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * <p>The storage capacity for the workflow in gibibytes.</p>
   * @public
   */
  storageCapacity?: number;

  /**
   * <p>Tags for the workflow.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   * @public
   */
  requestId?: string;

  /**
   * <p>The computational accelerator specified to run the workflow.</p>
   * @public
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
   * <p>The workflow's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus;

  /**
   * <p>The workflow's tags.</p>
   * @public
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
   * <p>The reference's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reference's store ID.</p>
   * @public
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
   * <p>The store's ID.</p>
   * @public
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
   * <p>The run's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunGroupRequest {
  /**
   * <p>The run group's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSequenceStoreRequest {
  /**
   * <p>The sequence store's ID.</p>
   * @public
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
   * <p>The ID for the resource share to be deleted.</p>
   * @public
   */
  shareId: string | undefined;
}

/**
 * @public
 */
export interface DeleteShareResponse {
  /**
   * <p>The status of the share being deleted.</p>
   * @public
   */
  status?: ShareStatus;
}

/**
 * @public
 */
export interface DeleteVariantStoreRequest {
  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether to force deletion.</p>
   * @public
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteVariantStoreResponse {
  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ETagAlgorithm = {
  BAM_MD5UP: "BAM_MD5up",
  BAM_SHA256UP: "BAM_SHA256up",
  BAM_SHA512UP: "BAM_SHA512up",
  CRAM_MD5UP: "CRAM_MD5up",
  CRAM_SHA256UP: "CRAM_SHA256up",
  CRAM_SHA512UP: "CRAM_SHA512up",
  FASTQ_MD5UP: "FASTQ_MD5up",
  FASTQ_SHA256UP: "FASTQ_SHA256up",
  FASTQ_SHA512UP: "FASTQ_SHA512up",
} as const;

/**
 * @public
 */
export type ETagAlgorithm = (typeof ETagAlgorithm)[keyof typeof ETagAlgorithm];

/**
 * <p>The entity tag (ETag) is a hash of the object representing its semantic content.</p>
 * @public
 */
export interface ETag {
  /**
   * <p>The algorithm used to calculate the read set’s ETag(s).</p>
   * @public
   */
  algorithm?: ETagAlgorithm;

  /**
   * <p>The ETag hash calculated on Source1 of the read set.</p>
   * @public
   */
  source1?: string;

  /**
   * <p>The ETag hash calculated on Source2 of the read set.</p>
   * @public
   */
  source2?: string;
}

/**
 * <p>A read set.</p>
 * @public
 */
export interface ExportReadSet {
  /**
   * <p>The set's ID.</p>
   * @public
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
 * <p>Details about a read set.</p>
 * @public
 */
export interface ExportReadSetDetail {
  /**
   * <p>The set's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The set's status.</p>
   * @public
   */
  status: ReadSetExportJobItemStatus | undefined;

  /**
   * <p>The set's status message.</p>
   * @public
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
 * <p>An read set export job filter.</p>
 * @public
 */
export interface ExportReadSetFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: ReadSetExportJobStatus;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * <p>Details about a read set export job.</p>
 * @public
 */
export interface ExportReadSetJobDetail {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's destination in Amazon S3.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;
}

/**
 * <p>The S3 URI for each read set file.</p>
 * @public
 */
export interface ReadSetS3Access {
  /**
   * <p>The S3 URI for each read set file.</p>
   * @public
   */
  s3Uri?: string;
}

/**
 * <p>Details about a file.</p>
 * @public
 */
export interface FileInformation {
  /**
   * <p>The file's total parts.</p>
   * @public
   */
  totalParts?: number;

  /**
   * <p>The file's part size.</p>
   * @public
   */
  partSize?: number;

  /**
   * <p>The file's content length.</p>
   * @public
   */
  contentLength?: number;

  /**
   * <p>The S3 URI metadata of a sequence store.</p>
   * @public
   */
  s3Access?: ReadSetS3Access;
}

/**
 * @public
 * @enum
 */
export const ShareResourceType = {
  /**
   * The share is on an annotation store
   */
  ANNOTATION_STORE: "ANNOTATION_STORE",
  /**
   * The share is on a variant store
   */
  VARIANT_STORE: "VARIANT_STORE",
  /**
   * The share is on a workflow
   */
  WORKFLOW: "WORKFLOW",
} as const;

/**
 * @public
 */
export type ShareResourceType = (typeof ShareResourceType)[keyof typeof ShareResourceType];

/**
 * <p>Use filters to return a subset of resources.  You can define filters for specific parameters,
 *           such as the resource status.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Filter based on the Amazon Resource Number (ARN) of the resource. You can specify up to 10 values.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>Filter based on the resource status. You can specify up to 10 values.</p>
   * @public
   */
  status?: ShareStatus[];

  /**
   * <p>The type of resources to be filtered. You can specify one or more of the resource types.</p>
   * @public
   */
  type?: ShareResourceType[];
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
   * <p>The read set's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The file to retrieve.</p>
   * @public
   */
  file?: ReadSetFile;

  /**
   * <p>The part number to retrieve.</p>
   * @public
   */
  partNumber: number | undefined;
}

/**
 * @public
 */
export interface GetReadSetResponse {
  /**
   * <p>The read set file payload.</p>
   * @public
   */
  payload?: StreamingBlobTypes;
}

/**
 * <p>The ranges specified in the request are not valid.</p>
 * @public
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
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetActivationJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources?: ActivateReadSetSourceItem[];
}

/**
 * @public
 */
export interface GetReadSetExportJobRequest {
  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetExportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's destination in Amazon S3.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's read sets.</p>
   * @public
   */
  readSets?: ExportReadSetDetail[];
}

/**
 * @public
 */
export interface GetReadSetImportJobRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * <p>Source files for a sequence.</p>
 * @public
 */
export interface SourceFiles {
  /**
   * <p>The location of the first file in Amazon S3.</p>
   * @public
   */
  source1: string | undefined;

  /**
   * <p>The location of the second file in Amazon S3.</p>
   * @public
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
 * <p>A source for an import read set job.</p>
 * @public
 */
export interface ImportReadSetSourceItem {
  /**
   * <p>The source files' location in Amazon S3.</p>
   * @public
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * <p>The source's file type.</p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p>The source's status.</p>
   * @public
   */
  status: ReadSetImportJobItemStatus | undefined;

  /**
   * <p>The source's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The source's subject ID.</p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p>Where the source originated.</p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>The source's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   * @public
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
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: ImportReadSetSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetMetadataRequest {
  /**
   * <p>The read set's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * <p>Files in a read set.</p>
 * @public
 */
export interface ReadSetFiles {
  /**
   * <p>The location of the first file in Amazon S3.</p>
   * @public
   */
  source1?: FileInformation;

  /**
   * <p>The location of the second file in Amazon S3.</p>
   * @public
   */
  source2?: FileInformation;

  /**
   * <p>The files' index.</p>
   * @public
   */
  index?: FileInformation;
}

/**
 * <p>Details about a sequence.</p>
 * @public
 */
export interface SequenceInformation {
  /**
   * <p>The sequence's total read count.</p>
   * @public
   */
  totalReadCount?: number;

  /**
   * <p>The sequence's total base count.</p>
   * @public
   */
  totalBaseCount?: number;

  /**
   * <p>Where the sequence originated.</p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>The sequence's alignment setting.</p>
   * @public
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
   * <p>The read set's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The read set's subject ID.</p>
   * @public
   */
  subjectId?: string;

  /**
   * <p>The read set's sample ID.</p>
   * @public
   */
  sampleId?: string;

  /**
   * <p>The read set's status.</p>
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * <p>The read set's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The read set's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The read set's file type.</p>
   * @public
   */
  fileType: FileType | undefined;

  /**
   * <p>When the read set was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The read set's sequence information.</p>
   * @public
   */
  sequenceInformation?: SequenceInformation;

  /**
   * <p>The read set's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The read set's files.</p>
   * @public
   */
  files?: ReadSetFiles;

  /**
   * <p>The status message for a read set. It provides more detail as to why the read set has a status. </p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>
   *       The creation type of the read set.
   *     </p>
   * @public
   */
  creationType?: CreationType;

  /**
   * <p>The entity tag (ETag) is a hash of the object meant to represent its semantic content.</p>
   * @public
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
   * <p>The reference's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reference's store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The range to retrieve.</p>
   * @public
   */
  range?: string;

  /**
   * <p>The part number to retrieve.</p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p>The file to retrieve.</p>
   * @public
   */
  file?: ReferenceFile;
}

/**
 * @public
 */
export interface GetReferenceResponse {
  /**
   * <p>The reference file payload.</p>
   * @public
   */
  payload?: StreamingBlobTypes;
}

/**
 * @public
 */
export interface GetReferenceImportJobRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   * @public
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
 * <p>An genome reference source.</p>
 * @public
 */
export interface ImportReferenceSourceItem {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  sourceFile?: string;

  /**
   * <p>The source's status.</p>
   * @public
   */
  status: ReferenceImportJobItemStatus | undefined;

  /**
   * <p>The source's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   * @public
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
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: ImportReferenceSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReferenceMetadataRequest {
  /**
   * <p>The reference's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reference's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;
}

/**
 * <p>A set of genome reference files.</p>
 * @public
 */
export interface ReferenceFiles {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source?: FileInformation;

  /**
   * <p>The files' index.</p>
   * @public
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
   * <p>The reference's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reference's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The reference's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The reference's MD5 checksum.</p>
   * @public
   */
  md5: string | undefined;

  /**
   * <p>The reference's status.</p>
   * @public
   */
  status?: ReferenceStatus;

  /**
   * <p>The reference's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The reference's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>When the reference was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the reference was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The reference's files.</p>
   * @public
   */
  files?: ReferenceFiles;
}

/**
 * @public
 */
export interface GetReferenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
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
   * <p>The run's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The run's export format.</p>
   * @public
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
 * <p>The URI for the run log.</p>
 * @public
 */
export interface RunLogLocation {
  /**
   * <p>The log stream ARN for the engine log.</p>
   * @public
   */
  engineLogStream?: string;

  /**
   * <p>The log stream ARN for the run log.</p>
   * @public
   */
  runLogStream?: string;
}

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
export const StorageType = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

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
   * <p>The run's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus;

  /**
   * <p>The run's workflow ID.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The run's workflow type.</p>
   * @public
   */
  workflowType?: WorkflowType;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>The run's service role ARN.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The run's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The run's group ID.</p>
   * @public
   */
  runGroupId?: string;

  /**
   * <p>The run's priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The run's definition.</p>
   * @public
   */
  definition?: string;

  /**
   * <p>The run's digest.</p>
   * @public
   */
  digest?: string;

  /**
   * <p>The run's parameters.</p>
   * @public
   */
  parameters?: __DocumentType;

  /**
   * <p>The run's storage capacity in gibibytes. For dynamic storage,
   *       after the run has completed, this value is the maximum amount of storage
   *       used during the run.</p>
   * @public
   */
  storageCapacity?: number;

  /**
   * <p>The run's output URI.</p>
   * @public
   */
  outputUri?: string;

  /**
   * <p>The run's log level.</p>
   * @public
   */
  logLevel?: RunLogLevel;

  /**
   * <p>The run's resource digests.</p>
   * @public
   */
  resourceDigests?: Record<string, string>;

  /**
   * <p>Who started the run.</p>
   * @public
   */
  startedBy?: string;

  /**
   * <p>When the run was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>When the run started.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The run's stop time.</p>
   * @public
   */
  stopTime?: Date;

  /**
   * <p>The run's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The run's tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The computational accelerator used to run the workflow.</p>
   * @public
   */
  accelerators?: Accelerators;

  /**
   * <p>The run's retention mode.</p>
   * @public
   */
  retentionMode?: RunRetentionMode;

  /**
   * <p>The reason a run has failed.</p>
   * @public
   */
  failureReason?: string;

  /**
   * <p>The location of the run log.</p>
   * @public
   */
  logLocation?: RunLogLocation;

  /**
   * <p>The universally unique identifier for a run.</p>
   * @public
   */
  uuid?: string;

  /**
   * <p>The destination for workflow outputs.</p>
   * @public
   */
  runOutputUri?: string;

  /**
   * <p>The run's storage type.</p>
   * @public
   */
  storageType?: StorageType;

  /**
   * <p>The ID of the workflow owner.</p>
   * @public
   */
  workflowOwnerId?: string;
}

/**
 * @public
 */
export interface GetRunGroupRequest {
  /**
   * <p>The group's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunGroupResponse {
  /**
   * <p>The group's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The group's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The group's maximum number of CPUs to use.</p>
   * @public
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   * @public
   */
  maxRuns?: number;

  /**
   * <p>The group's maximum run time in minutes.</p>
   * @public
   */
  maxDuration?: number;

  /**
   * <p>When the group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The group's tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The maximum GPUs that can be used by a run group.</p>
   * @public
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface GetRunTaskRequest {
  /**
   * <p>The workflow run ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The task's ID.</p>
   * @public
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
   * <p>The task's ID.</p>
   * @public
   */
  taskId?: string;

  /**
   * <p>The task's status.</p>
   * @public
   */
  status?: TaskStatus;

  /**
   * <p>The task's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The task's CPU usage.</p>
   * @public
   */
  cpus?: number;

  /**
   * <p>The task's memory use in gigabytes.</p>
   * @public
   */
  memory?: number;

  /**
   * <p>When the task was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The task's start time.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The task's stop time.</p>
   * @public
   */
  stopTime?: Date;

  /**
   * <p>The task's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The task's log stream.</p>
   * @public
   */
  logStream?: string;

  /**
   * <p>The number of Graphics Processing Units (GPU) specified in the task.</p>
   * @public
   */
  gpus?: number;

  /**
   * <p>The instance type for a task.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The reason a task has failed.</p>
   * @public
   */
  failureReason?: string;
}

/**
 * @public
 */
export interface GetSequenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>The S3 access metadata of the sequence store.</p>
 * @public
 */
export interface SequenceStoreS3Access {
  /**
   * <p>The S3 URI of the sequence store.</p>
   * @public
   */
  s3Uri?: string;

  /**
   * <p>This is ARN of the access point associated with the S3 bucket storing read sets.</p>
   * @public
   */
  s3AccessPointArn?: string;
}

/**
 * @public
 */
export interface GetSequenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload.</p>
   * @public
   */
  fallbackLocation?: string;

  /**
   * <p>The S3 metadata of a sequence store, including the ARN and S3 URI of the S3 bucket.</p>
   * @public
   */
  s3Access?: SequenceStoreS3Access;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily;
}

/**
 * @public
 */
export interface GetShareRequest {
  /**
   * <p>The ID of the share.</p>
   * @public
   */
  shareId: string | undefined;
}

/**
 * <p>The details of a resource share.</p>
 * @public
 */
export interface ShareDetails {
  /**
   * <p>The ID of the resource share.</p>
   * @public
   */
  shareId?: string;

  /**
   * <p>The Arn of the shared resource. </p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The ID of the shared resource. </p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The principal subscriber is the account that is sharing the resource.</p>
   * @public
   */
  principalSubscriber?: string;

  /**
   * <p>The account ID for the data owner. The owner creates the resource share.</p>
   * @public
   */
  ownerId?: string;

  /**
   * <p>The status of the share.</p>
   * @public
   */
  status?: ShareStatus;

  /**
   * <p>The status message for a resource share. It provides additional details about the share status.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  shareName?: string;

  /**
   * <p>The timestamp of when the resource share was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The timestamp of the resource share update.</p>
   * @public
   */
  updateTime?: Date;
}

/**
 * @public
 */
export interface GetShareResponse {
  /**
   * <p>A resource share details object. The object includes the status, the resourceArn, and ownerId.</p>
   * @public
   */
  share?: ShareDetails;
}

/**
 * @public
 */
export interface GetVariantImportRequest {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Details about an imported variant item.</p>
 * @public
 */
export interface VariantImportItemDetail {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The item's job status.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p> A message that provides additional context about a job </p>
   * @public
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetVariantImportResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's destination variant store.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The job's status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's items.</p>
   * @public
   */
  items: VariantImportItemDetail[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization: boolean | undefined;

  /**
   * <p>The annotation schema generated by the parsed annotation data.</p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface GetVariantStoreRequest {
  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * <p>The store's status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   * @public
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
   * <p>The workflow's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The workflow's type.</p>
   * @public
   */
  type?: WorkflowType;

  /**
   * <p>The export format for the workflow.</p>
   * @public
   */
  export?: WorkflowExport[];

  /**
   * <p>The ID of the workflow owner.</p>
   * @public
   */
  workflowOwnerId?: string;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The workflow's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus;

  /**
   * <p>The workflow's type.</p>
   * @public
   */
  type?: WorkflowType;

  /**
   * <p>The workflow's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The workflow's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The workflow's engine.</p>
   * @public
   */
  engine?: WorkflowEngine;

  /**
   * <p>The workflow's definition.</p>
   * @public
   */
  definition?: string;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   * @public
   */
  main?: string;

  /**
   * <p>The workflow's digest.</p>
   * @public
   */
  digest?: string;

  /**
   * <p>The workflow's parameter template.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * <p>The workflow's storage capacity in gibibytes.</p>
   * @public
   */
  storageCapacity?: number;

  /**
   * <p>When the workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The workflow's status message.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The workflow's tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Gets metadata for workflow.</p>
   * @public
   */
  metadata?: Record<string, string>;

  /**
   * <p>The computational accelerator specified to run the workflow. </p>
   * @public
   */
  accelerators?: Accelerators;
}

/**
 * <p>A filter for import read set jobs.</p>
 * @public
 */
export interface ImportReadSetFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: ReadSetImportJobStatus;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * <p>An import read set job.</p>
 * @public
 */
export interface ImportReadSetJobItem {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;
}

/**
 * <p>A filter for import references.</p>
 * @public
 */
export interface ImportReferenceFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: ReferenceImportJobStatus;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * <p>An import reference job.</p>
 * @public
 */
export interface ImportReferenceJobItem {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsRequest {
  /**
   * <p>The Sequence Store ID used for the multipart uploads.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of multipart uploads returned in a page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the response of a previous ListMultipartReadSetUploads call.
   *       Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>
 *       Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads.
 *     </p>
 * @public
 */
export interface MultipartReadSetUploadListItem {
  /**
   * <p>
   *       The sequence store ID used for the multipart upload.
   *     </p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>
   *       The type of file the read set originated from.
   *     </p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p>
   *       The read set source's subject ID.
   *     </p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p>
   *       The read set source's sample ID.
   *     </p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p>
   *       The source of an uploaded part.
   *     </p>
   * @public
   */
  generatedFrom: string | undefined;

  /**
   * <p>
   *       The source's reference ARN.
   *     </p>
   * @public
   */
  referenceArn: string | undefined;

  /**
   * <p>
   *       The name of a read set.
   *     </p>
   * @public
   */
  name?: string;

  /**
   * <p>
   *       The description of a read set.
   *     </p>
   * @public
   */
  description?: string;

  /**
   * <p>
   *       Any tags you wish to add to a read set.
   *     </p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       The time stamp for when a direct upload was created.
   *     </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsResponse {
  /**
   * <p>Next token returned in the response of a previous ListMultipartReadSetUploads call.
   *       Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array of multipart uploads.</p>
   * @public
   */
  uploads?: MultipartReadSetUploadListItem[];
}

/**
 * @public
 */
export interface ListReadSetActivationJobsRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of read set activation jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ActivateReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  activationJobs?: ActivateReadSetJobItem[];
}

/**
 * @public
 */
export interface ListReadSetExportJobsRequest {
  /**
   * <p>The jobs' sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ExportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetExportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  exportJobs?: ExportReadSetJobDetail[];
}

/**
 * @public
 */
export interface ListReadSetImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The jobs' sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ImportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  importJobs?: ImportReadSetJobItem[];
}

/**
 * <p>A filter for read sets.</p>
 * @public
 */
export interface ReadSetFilter {
  /**
   * <p>A name to filter on.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: ReadSetStatus;

  /**
   * <p>A genome reference ARN to filter on.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;

  /**
   * <p>
   *       The read set source's sample ID.
   *     </p>
   * @public
   */
  sampleId?: string;

  /**
   * <p>
   *       The read set source's subject ID.
   *     </p>
   * @public
   */
  subjectId?: string;

  /**
   * <p>
   *       Where the source originated.
   *     </p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>
   *       The creation type of the read set.
   *     </p>
   * @public
   */
  creationType?: CreationType;
}

/**
 * @public
 */
export interface ListReadSetsRequest {
  /**
   * <p>The jobs' sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of read sets to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReadSetFilter;
}

/**
 * <p>A read set.</p>
 * @public
 */
export interface ReadSetListItem {
  /**
   * <p>The read set's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The read set's subject ID.</p>
   * @public
   */
  subjectId?: string;

  /**
   * <p>The read set's sample ID.</p>
   * @public
   */
  sampleId?: string;

  /**
   * <p>The read set's status.</p>
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * <p>The read set's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The read set's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The read set's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The read set's file type.</p>
   * @public
   */
  fileType: FileType | undefined;

  /**
   * <p>Details about a sequence.</p>
   * @public
   */
  sequenceInformation?: SequenceInformation;

  /**
   * <p>When the read set was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>
   *       The status for a read set. It provides more detail as to why the read set has a status.
   *     </p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>
   *       The creation type of the read set.
   *     </p>
   * @public
   */
  creationType?: CreationType;

  /**
   * <p>The entity tag (ETag) is a hash of the object representing its semantic content.</p>
   * @public
   */
  etag?: ETag;
}

/**
 * @public
 */
export interface ListReadSetsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of read sets.</p>
   * @public
   */
  readSets: ReadSetListItem[] | undefined;
}

/**
 * <p>
 *       Filter settings that select for read set upload parts of interest.
 *     </p>
 * @public
 */
export interface ReadSetUploadPartListFilter {
  /**
   * <p>
   *       Filters for read set uploads after a specified time.
   *     </p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>
   *       Filters for read set part uploads before a specified time.
   *     </p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsRequest {
  /**
   * <p>The Sequence Store ID used for the multipart uploads.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The ID for the initiated multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The source file for the upload part.</p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p>The maximum number of read set upload parts returned in a page.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadPartsRequest call.
   *       Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Attributes used to filter for a specific subset of read set part uploads.</p>
   * @public
   */
  filter?: ReadSetUploadPartListFilter;
}

/**
 * <p>
 *       The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API.
 *     </p>
 * @public
 */
export interface ReadSetUploadPartListItem {
  /**
   * <p>
   *       The number identifying the part in an upload.
   *     </p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p>
   *       The size of the the part in an upload.
   *     </p>
   * @public
   */
  partSize: number | undefined;

  /**
   * <p>
   *       The origin of the part being direct uploaded.
   *     </p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p>
   *       A unique identifier used to confirm that parts are being added to the correct upload.
   *     </p>
   * @public
   */
  checksum: string | undefined;

  /**
   * <p>
   *       The time stamp for when a direct upload was created.
   *     </p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>
   *       The time stamp for the most recent update to an uploaded part.
   *     </p>
   * @public
   */
  lastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsResponse {
  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadParts call.
   *       Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array of upload parts.</p>
   * @public
   */
  parts?: ReadSetUploadPartListItem[];
}

/**
 * @public
 */
export interface ListReferenceImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ImportReferenceFilter;
}

/**
 * @public
 */
export interface ListReferenceImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A lis of jobs.</p>
   * @public
   */
  importJobs?: ImportReferenceJobItem[];
}

/**
 * <p>A filter for references.</p>
 * @public
 */
export interface ReferenceFilter {
  /**
   * <p>A name to filter on.</p>
   * @public
   */
  name?: string;

  /**
   * <p>An MD5 checksum to filter on.</p>
   * @public
   */
  md5?: string;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferencesRequest {
  /**
   * <p>The references' reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The maximum number of references to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReferenceFilter;
}

/**
 * <p>A genome reference.</p>
 * @public
 */
export interface ReferenceListItem {
  /**
   * <p>The reference's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reference's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The reference's store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The reference's MD5 checksum.</p>
   * @public
   */
  md5: string | undefined;

  /**
   * <p>The reference's status.</p>
   * @public
   */
  status?: ReferenceStatus;

  /**
   * <p>The reference's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The reference's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>When the reference was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the reference was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferencesResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of references.</p>
   * @public
   */
  references: ReferenceListItem[] | undefined;
}

/**
 * <p>A filter for reference stores.</p>
 * @public
 */
export interface ReferenceStoreFilter {
  /**
   * <p>The name to filter on.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReferenceStoreFilter;
}

/**
 * <p>Details about a reference store.</p>
 * @public
 */
export interface ReferenceStoreDetail {
  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of reference stores.</p>
   * @public
   */
  referenceStores: ReferenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsRequest {
  /**
   * <p>The run groups' name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string;

  /**
   * <p>The maximum number of run groups to return in one page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A run group.</p>
 * @public
 */
export interface RunGroupListItem {
  /**
   * <p>The group's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The group's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The group's maximum CPU count setting.</p>
   * @public
   */
  maxCpus?: number;

  /**
   * <p>The group's maximum concurrent run setting.</p>
   * @public
   */
  maxRuns?: number;

  /**
   * <p>The group's maximum duration setting in minutes.</p>
   * @public
   */
  maxDuration?: number;

  /**
   * <p>When the group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>
   *       The maximum GPUs that can be used by a run group.
   *     </p>
   * @public
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface ListRunGroupsResponse {
  /**
   * <p>A list of groups.</p>
   * @public
   */
  items?: RunGroupListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunsRequest {
  /**
   * <p>Filter the list by run name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Filter the list by run group ID.</p>
   * @public
   */
  runGroupId?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string;

  /**
   * <p>The maximum number of runs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The status of a run.</p>
   * @public
   */
  status?: RunStatus;
}

/**
 * <p>A workflow run.</p>
 * @public
 */
export interface RunListItem {
  /**
   * <p>The run's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus;

  /**
   * <p>The run's workflow ID.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The run's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The run's priority.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>The run's storage capacity in gibibytes. For dynamic storage,
   *       after the run has completed, this value is the maximum amount of storage
   *       used during the run.</p>
   * @public
   */
  storageCapacity?: number;

  /**
   * <p>When the run was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>When the run started.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>When the run stopped.</p>
   * @public
   */
  stopTime?: Date;

  /**
   * <p>The run's storage type.</p>
   * @public
   */
  storageType?: StorageType;
}

/**
 * @public
 */
export interface ListRunsResponse {
  /**
   * <p>A list of runs.</p>
   * @public
   */
  items?: RunListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunTasksRequest {
  /**
   * <p>The run's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Filter the list by status.</p>
   * @public
   */
  status?: TaskStatus;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string;

  /**
   * <p>The maximum number of run tasks to return in one page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A workflow run task.</p>
 * @public
 */
export interface TaskListItem {
  /**
   * <p>The task's ID.</p>
   * @public
   */
  taskId?: string;

  /**
   * <p>The task's status.</p>
   * @public
   */
  status?: TaskStatus;

  /**
   * <p>The task's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The task's CPU count.</p>
   * @public
   */
  cpus?: number;

  /**
   * <p>The task's memory use in gigabyes.</p>
   * @public
   */
  memory?: number;

  /**
   * <p>When the task was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>When the task started.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>When the task stopped.</p>
   * @public
   */
  stopTime?: Date;

  /**
   * <p>
   *       The number of Graphics Processing Units (GPU) specified for the task.
   *     </p>
   * @public
   */
  gpus?: number;

  /**
   * <p> The instance type for a task.</p>
   * @public
   */
  instanceType?: string;
}

/**
 * @public
 */
export interface ListRunTasksResponse {
  /**
   * <p>A list of tasks.</p>
   * @public
   */
  items?: TaskListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A filter for a sequence store.</p>
 * @public
 */
export interface SequenceStoreFilter {
  /**
   * <p>A name to filter on.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListSequenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: SequenceStoreFilter;
}

/**
 * <p>Details about a sequence store.</p>
 * @public
 */
export interface SequenceStoreDetail {
  /**
   * <p>The store's ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   * @public
   */
  fallbackLocation?: string;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily;
}

/**
 * @public
 */
export interface ListSequenceStoresResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of sequence stores.</p>
   * @public
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
   * <p>The account that owns the resource shares.</p>
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * <p>Attributes that you use to filter for a specific subset of resource shares.</p>
   * @public
   */
  filter?: Filter;

  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadPartsRequest call.
   *       Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of shares to return in one page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSharesResponse {
  /**
   * <p>The shares available and their metadata details.</p>
   * @public
   */
  shares: ShareDetails[] | undefined;

  /**
   * <p>
   * Next token returned in the response of a previous ListSharesResponse call. Used to get the next page of results.
   * </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>A filter for variant import jobs.</p>
 * @public
 */
export interface ListVariantImportJobsFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: JobStatus;

  /**
   * <p>A store name to filter on.</p>
   * @public
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListVariantImportJobsRequest {
  /**
   * <p>The maximum number of import jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A list of job IDs.</p>
   * @public
   */
  ids?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListVariantImportJobsFilter;
}

/**
 * <p>A variant import job.</p>
 * @public
 */
export interface VariantImportJobItem {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's destination variant store.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean;

  /**
   * <p>
   *       The annotation schema generated by the parsed annotation data.
   *     </p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVariantImportJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  variantImportJobs?: VariantImportJobItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A filter for variant stores.</p>
 * @public
 */
export interface ListVariantStoresFilter {
  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: StoreStatus;
}

/**
 * @public
 */
export interface ListVariantStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A list of store IDs.</p>
   * @public
   */
  ids?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListVariantStoresFilter;
}

/**
 * <p>A variant store.</p>
 * @public
 */
export interface VariantStoreItem {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's ARN.</p>
   * @public
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's status message.</p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   * @public
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresResponse {
  /**
   * <p>A list of variant stores.</p>
   * @public
   */
  variantStores?: VariantStoreItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>Filter the list by workflow type.</p>
   * @public
   */
  type?: WorkflowType;

  /**
   * <p>Filter the list by workflow name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string;

  /**
   * <p>The maximum number of workflows to return in one page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A workflow.</p>
 * @public
 */
export interface WorkflowListItem {
  /**
   * <p>The workflow's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The workflow's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus;

  /**
   * <p>The workflow's type.</p>
   * @public
   */
  type?: WorkflowType;

  /**
   * <p>The workflow's digest.</p>
   * @public
   */
  digest?: string;

  /**
   * <p>When the workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>
   *       Any metadata available for workflow. The information listed may vary depending on the workflow, and there may also be no metadata to return.
   *     </p>
   * @public
   */
  metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>A list of workflow items.</p>
   * @public
   */
  items?: WorkflowListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A source for a reference import job.</p>
 * @public
 */
export interface StartReferenceImportJobSourceItem {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  sourceFile: string | undefined;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReferenceImportJobRequest {
  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>A service role for the job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: StartReferenceImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReferenceImportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRunGroupRequest {
  /**
   * <p>The group's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A name for the group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The maximum number of CPUs to use.</p>
   * @public
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   * @public
   */
  maxRuns?: number;

  /**
   * <p>A maximum run time for the group in minutes.</p>
   * @public
   */
  maxDuration?: number;

  /**
   * <p>The maximum GPUs that can be used by a run group.</p>
   * @public
   */
  maxGpus?: number;
}

/**
 * @public
 */
export interface StartRunRequest {
  /**
   * <p>The run's workflow ID.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The run's workflow type.</p>
   * @public
   */
  workflowType?: WorkflowType;

  /**
   * <p>The ID of a run to duplicate.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>A service role for the run.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A name for the run.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The run's group ID.</p>
   * @public
   */
  runGroupId?: string;

  /**
   * <p>A priority for the run.</p>
   * @public
   */
  priority?: number;

  /**
   * <p>Parameters for the run.</p>
   * @public
   */
  parameters?: __DocumentType;

  /**
   * <p>A storage capacity for the run in gibibytes. This field is not required if the storage type is dynamic
   *       (the system ignores any value that you enter).</p>
   * @public
   */
  storageCapacity?: number;

  /**
   * <p>An output URI for the run.</p>
   * @public
   */
  outputUri?: string;

  /**
   * <p>A log level for the run.</p>
   * @public
   */
  logLevel?: RunLogLevel;

  /**
   * <p>Tags for the run.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   * @public
   */
  requestId?: string;

  /**
   * <p>The retention mode for the run.</p>
   * @public
   */
  retentionMode?: RunRetentionMode;

  /**
   * <p>The run's storage type. By default, the run uses STATIC storage type, which allocates a fixed amount of storage.
   *     If you set the storage type to DYNAMIC, HealthOmics dynamically scales the storage up
   *     or down, based on file system utilization.</p>
   * @public
   */
  storageType?: StorageType;

  /**
   * <p>The ID of the workflow owner. </p>
   * @public
   */
  workflowOwnerId?: string;
}

/**
 * @public
 */
export interface StartRunResponse {
  /**
   * <p>The run's ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus;

  /**
   * <p>The run's tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The universally unique identifier for a run.</p>
   * @public
   */
  uuid?: string;

  /**
   * <p>The destination for workflow outputs.</p>
   * @public
   */
  runOutputUri?: string;
}

/**
 * <p>A source for a read set activation job.</p>
 * @public
 */
export interface StartReadSetActivationJobSourceItem {
  /**
   * <p>The source's read set ID.</p>
   * @public
   */
  readSetId: string | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: StartReadSetActivationJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A location for exported files in Amazon S3.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>A service role for the job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: ExportReadSet[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's output location.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * <p>A source for a read set import job.</p>
 * @public
 */
export interface StartReadSetImportJobSourceItem {
  /**
   * <p>The source files' location in Amazon S3.</p>
   * @public
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * <p>The source's file type.</p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p>The source's subject ID.</p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p>Where the source originated.</p>
   * @public
   */
  generatedFrom?: string;

  /**
   * <p>The source's reference ARN.</p>
   * @public
   */
  referenceArn?: string;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReadSetImportJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A service role for the job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources: StartReadSetImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetImportJobResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartRequest {
  /**
   * <p>The Sequence Store ID used for the multipart upload.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The ID for the initiated multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The source file for an upload part.</p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p>The number of the part being uploaded.</p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p>The read set data to upload for a part.</p>
   * @public
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartResponse {
  /**
   * <p>An identifier used to confirm that parts are being added to the intended upload.</p>
   * @public
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags for the resource.</p>
   * @public
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
   * <p>The resource's ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys of tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A imported variant item's source.</p>
 * @public
 */
export interface VariantImportItemSource {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface StartVariantImportRequest {
  /**
   * <p>The destination variant store for the job.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>A service role for the job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Items to import.</p>
   * @public
   */
  items: VariantImportItemSource[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean;

  /**
   * <p>The annotation schema generated by the parsed annotation data.</p>
   * @public
   */
  annotationFields?: Record<string, string>;
}

/**
 * @public
 */
export interface StartVariantImportResponse {
  /**
   * <p>The job's ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariantStoreRequest {
  /**
   * <p>A name for the store.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * <p>The store's name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A name for the workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description for the workflow.</p>
   * @public
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

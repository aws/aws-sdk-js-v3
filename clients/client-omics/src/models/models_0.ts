// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

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
 * <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
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
  status?: ShareStatus | undefined;
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
  status?: ReadSetActivationJobStatus | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  completionTime?: Date | undefined;
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
  statusMessage?: string | undefined;
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
  sep?: string | undefined;

  /**
   * <p>The file's encoding.</p>
   * @public
   */
  encoding?: string | undefined;

  /**
   * <p>The file's quote character.</p>
   * @public
   */
  quote?: string | undefined;

  /**
   * <p>Whether all values need to be quoted, or just those that contain quotes.</p>
   * @public
   */
  quoteAll?: boolean | undefined;

  /**
   * <p>A character for escaping quotes in the file.</p>
   * @public
   */
  escape?: string | undefined;

  /**
   * <p>Whether quotes need to be escaped in the file.</p>
   * @public
   */
  escapeQuotes?: boolean | undefined;

  /**
   * <p>The file's comment character.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>Whether the file has a header row.</p>
   * @public
   */
  header?: boolean | undefined;

  /**
   * <p>A line separator for the file.</p>
   * @public
   */
  lineSep?: string | undefined;
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
  readOptions?: ReadOptions | undefined;
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
  ignoreQualField?: boolean | undefined;

  /**
   * <p>The file's ignore filter field setting.</p>
   * @public
   */
  ignoreFilterField?: boolean | undefined;
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
   * <p> The name of the annotation store version. </p>
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
  annotationFields?: Record<string, string> | undefined;
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
  status?: JobStatus | undefined;

  /**
   * <p>A store name to filter on.</p>
   * @public
   */
  storeName?: string | undefined;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>IDs of annotation import jobs to retrieve.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListAnnotationImportJobsFilter | undefined;
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
   * <p> The name of the annotation store version. </p>
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
  completionTime?: Date | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * <p> The annotation schema generated by the parsed annotation data. </p>
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  annotationImportJobs?: AnnotationImportJobItem[] | undefined;

  /**
   * <p>Specifies the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * <p> The name of the annotation store version. </p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>Formatting options for the annotation file.</p>
   * @public
   */
  formatOptions?: FormatOptions | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * <p>The annotation schema generated by the parsed annotation data.</p>
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
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
  keyArn?: string | undefined;
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
  annotationType?: AnnotationType | undefined;

  /**
   * <p>The store's header key to column name mapping.</p>
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>> | undefined;

  /**
   * <p>The store's schema.</p>
   * @public
   */
  schema?: Record<string, SchemaValueType>[] | undefined;
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
  reference?: ReferenceItem | undefined;

  /**
   * <p>A name for the store.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from other versions. </p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat: StoreFormat | undefined;

  /**
   * <p>File parsing options for the annotation store.</p>
   * @public
   */
  storeOptions?: StoreOptions | undefined;
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
  reference?: ReferenceItem | undefined;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat?: StoreFormat | undefined;

  /**
   * <p>The store's file parsing options.</p>
   * @public
   */
  storeOptions?: StoreOptions | undefined;

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
   * <p> The name given to an annotation store version to distinguish it from other versions. </p>
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
  force?: boolean | undefined;
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
  storeOptions?: StoreOptions | undefined;

  /**
   * <p>The store's annotation file format.</p>
   * @public
   */
  storeFormat?: StoreFormat | undefined;

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
   * <p> An integer indicating how many versions of an annotation store exist. </p>
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
  status?: StoreStatus | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresRequest {
  /**
   * <p>IDs of stores to list.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListAnnotationStoresFilter | undefined;
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
  annotationStores?: AnnotationStoreItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  description?: string | undefined;
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
  storeOptions?: StoreOptions | undefined;

  /**
   * <p>The annotation file format of the store.</p>
   * @public
   */
  storeFormat?: StoreFormat | undefined;
}

/**
 * <p> The options for a TSV file. </p>
 * @public
 */
export interface TsvVersionOptions {
  /**
   * <p> The store version's annotation type. </p>
   * @public
   */
  annotationType?: AnnotationType | undefined;

  /**
   * <p> The annotation store version's header key to column name mapping. </p>
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>> | undefined;

  /**
   * <p> The TSV schema for an annotation store version. </p>
   * @public
   */
  schema?: Record<string, SchemaValueType>[] | undefined;
}

/**
 * <p> The options for an annotation store version. </p>
 * @public
 */
export type VersionOptions = VersionOptions.TsvVersionOptionsMember | VersionOptions.$UnknownMember;

/**
 * @public
 */
export namespace VersionOptions {
  /**
   * <p> File settings for a version of a TSV store. </p>
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
   * <p> The name of an annotation store version from which versions are being created. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from other versions. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The description of an annotation store version. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The options for an annotation store version. </p>
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * <p> Any tags added to annotation store version. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * <p> A generated ID for the annotation store </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from other versions. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The ID for the annotation store from which new versions are being created. </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p> The options for an annotation store version. </p>
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from other versions. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The status of a annotation store version. </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p> The time stamp for the creation of an annotation store version. </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsRequest {
  /**
   * <p> The name of the annotation store from which versions are being deleted. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The versions of an annotation store to be deleted. </p>
   * @public
   */
  versions: string[] | undefined;

  /**
   * <p> Forces the deletion of an annotation store version when imports are in-progress.. </p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * <p> The error preventing deletion of the annotation store version. </p>
 * @public
 */
export interface VersionDeleteError {
  /**
   * <p> The name given to an annotation store version. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The message explaining the error in annotation store deletion. </p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsResponse {
  /**
   * <p> Any errors that occur when attempting to delete an annotation store version. </p>
   * @public
   */
  errors?: VersionDeleteError[] | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionRequest {
  /**
   * <p> The name given to an annotation store version to distinguish it from others. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from others. </p>
   * @public
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionResponse {
  /**
   * <p> The store ID for annotation store version. </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p> The annotation store version ID. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The status of an annotation store version. </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p> The Arn for the annotation store. </p>
   * @public
   */
  versionArn: string | undefined;

  /**
   * <p> The name of the annotation store. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name given to an annotation store version to distinguish it from others. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The description for an annotation store version. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The time stamp for when an annotation store version was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time stamp for when an annotation store version was updated. </p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p> Any tags associated with an annotation store version. </p>
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * <p> The options for an annotation store version. </p>
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * <p> The status of an annotation store version. </p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p> The size of the annotation store version in Bytes. </p>
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * <p>Use filters to focus the returned annotation store versions on a specific parameter, such as the status of the annotation store.</p>
 * @public
 */
export interface ListAnnotationStoreVersionsFilter {
  /**
   * <p>The status of an annotation store version.</p>
   * @public
   */
  status?: VersionStatus | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsRequest {
  /**
   * <p> The name of an annotation store. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The maximum number of annotation store versions to return in one page of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Specifies the pagination token from a previous request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> A filter to apply to the list of annotation store versions. </p>
   * @public
   */
  filter?: ListAnnotationStoreVersionsFilter | undefined;
}

/**
 * <p> Annotation store versions. </p>
 * @public
 */
export interface AnnotationStoreVersionItem {
  /**
   * <p> The store ID for an annotation store version. </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p> The annotation store version ID. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The status of an annotation store version. </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p> The Arn for an annotation store version. </p>
   * @public
   */
  versionArn: string | undefined;

  /**
   * <p> A name given to an annotation store version to distinguish it from others. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name of an annotation store version. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The description of an annotation store version. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The time stamp for when an annotation store version was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time stamp for when an annotation store version was updated. </p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p> The status of an annotation store version. </p>
   * @public
   */
  statusMessage: string | undefined;

  /**
   * <p> The size of an annotation store version in Bytes. </p>
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsResponse {
  /**
   * <p> Lists all versions of an annotation store. </p>
   * @public
   */
  annotationStoreVersions?: AnnotationStoreVersionItem[] | undefined;

  /**
   * <p> Specifies the pagination token from a previous request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionRequest {
  /**
   * <p> The name of an annotation store. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name of an annotation store version. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The description of an annotation store. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionResponse {
  /**
   * <p> The annotation store ID. </p>
   * @public
   */
  storeId: string | undefined;

  /**
   * <p> The annotation store version ID. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The status of an annotation store version. </p>
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * <p> The name of an annotation store. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The name of an annotation store version. </p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p> The description of an annotation store version. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The time stamp for when an annotation store version was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time stamp for when an annotation store version was updated. </p>
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
  errors?: ReadSetBatchError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheBehavior = {
  CACHE_ALWAYS: "CACHE_ALWAYS",
  CACHE_ON_FAILURE: "CACHE_ON_FAILURE",
} as const;

/**
 * @public
 */
export type CacheBehavior = (typeof CacheBehavior)[keyof typeof CacheBehavior];

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
 * <p> Part of the response to the CompleteReadSetUpload API, including metadata. </p>
 * @public
 */
export interface CompleteReadSetUploadPartListItem {
  /**
   * <p> A number identifying the part in a read set upload. </p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p> The source file of the part being uploaded. </p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p> A unique identifier used to confirm that parts are being added to the correct upload. </p>
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
 * <p>Specifies image mappings that workflow tasks can use. For example, you can replace all the task references of a public image to use an equivalent image in your private ECR repository. You can use image mappings with upstream registries that don't support pull through cache. You need to manually synchronize the upstream registry with your private repository. </p>
 * @public
 */
export interface ImageMapping {
  /**
   * <p>Specifies the URI of the source image in the upstream registry.</p>
   * @public
   */
  sourceImage?: string | undefined;

  /**
   * <p>Specifies the URI of the corresponding image in the private ECR registry.</p>
   * @public
   */
  destinationImage?: string | undefined;
}

/**
 * <p>If you are using the ECR pull through cache feature, the registry mapping maps between the ECR repository and the upstream registry where container images are pulled and synchronized.</p>
 * @public
 */
export interface RegistryMapping {
  /**
   * <p>The URI of the upstream registry.</p>
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * <p>The repository prefix to use in the ECR private repository.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The repository prefix of the corresponding repository in the upstream registry.</p>
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;

  /**
   * <p>Account ID of the account that owns the upstream container image.</p>
   * @public
   */
  ecrAccountId?: string | undefined;
}

/**
 * <p>Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html">Container images</a> in the <i>Amazon Web Services HealthOmics User Guide</i>. </p>
 * @public
 */
export interface ContainerRegistryMap {
  /**
   * <p>Mapping that provides the ECR repository path where upstream container images are pulled and synchronized.</p>
   * @public
   */
  registryMappings?: RegistryMapping[] | undefined;

  /**
   * <p>Image mappings specify path mappings between the ECR private repository and their corresponding external repositories.</p>
   * @public
   */
  imageMappings?: ImageMapping[] | undefined;
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
  clientToken?: string | undefined;

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
  generatedFrom?: string | undefined;

  /**
   * <p>The ARN of the reference.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The name of the read set.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the read set.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Any tags to add to the read set.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  generatedFrom?: string | undefined;

  /**
   * <p>The read set source's reference ARN.</p>
   * @public
   */
  referenceArn: string | undefined;

  /**
   * <p>The name of the read set.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the read set.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags to add to the read set.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

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
  description?: string | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   * @public
   */
  clientToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The store's SSE settings.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRunCacheRequest {
  /**
   * <p>Default cache behavior for runs that use this cache. Supported values are:</p> <p> <code>CACHE_ON_FAILURE</code>: Caches task outputs from completed tasks for runs that fail. This setting is useful if you're debugging a workflow that fails after several tasks completed successfully. The subsequent run uses the cache outputs for previously-completed tasks if the task definition, inputs, and container in ECR are identical to the prior run.</p> <p> <code>CACHE_ALWAYS</code>: Caches task outputs from completed tasks for all runs. This setting is useful in development mode, but do not use it in a production setting.</p> <p>If you don't specify a value, the default behavior is CACHE_ON_FAILURE. When you start a run that uses this cache, you can override the default cache behavior.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/how-run-cache.html#run-cache-behavior">Run cache behavior</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>Specify the S3 location for storing the cached task outputs. This data must be immediately accessible (not in an archived state).</p>
   * @public
   */
  cacheS3Location: string | undefined;

  /**
   * <p>Enter a description of the run cache.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Enter a user-friendly name for the run cache.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique request token, to ensure idempotency. If you don't specify a token, Amazon Web Services HealthOmics automatically generates a universally unique identifier (UUID) for the request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>Specify one or more tags to associate with this run cache.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID of the expected owner of the S3 bucket for the run cache. If not provided, your account ID is set as the owner of the bucket.</p>
   * @public
   */
  cacheBucketOwnerId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RunCacheStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type RunCacheStatus = (typeof RunCacheStatus)[keyof typeof RunCacheStatus];

/**
 * @public
 */
export interface CreateRunCacheResponse {
  /**
   * <p>Unique resource identifier for the run cache.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Identifier for the run cache.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Run cache status.</p>
   * @public
   */
  status?: RunCacheStatus | undefined;

  /**
   * <p>The tags associated with this run cache.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupRequest {
  /**
   * <p>A name for the group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The maximum number of CPUs that can run concurrently across all active runs in the run group.</p>
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * <p>The maximum number of runs that can be running at the same time.</p>
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * <p>The maximum time for each run (in minutes). If a run exceeds the maximum run time, the run fails automatically.</p>
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * <p>Tags for the group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The maximum number of GPUs that can run concurrently across all active runs in the run group.</p>
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupResponse {
  /**
   * <p>The group's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Tags for the run group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>S3 access configuration parameters.</p>
 * @public
 */
export interface S3AccessConfig {
  /**
   * <p>Location of the access logs.</p>
   * @public
   */
  accessLogLocation?: string | undefined;
}

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
  description?: string | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>Tags for the store. You can configure up to 50 tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An idempotency token used to dedupe retry requests so that duplicate runs are not created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload. You can add or change the <code>fallbackLocation</code> after creating a sequence store. This is not required if you are uploading files from a different S3 bucket.</p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The ETag algorithm family to use for ingested read sets. The default value is MD5up. For more information on ETags, see <a href="https://docs.aws.amazon.com/omics/latest/dev/etags-and-provenance.html">ETags and data provenance</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * <p>The tags keys to propagate to the S3 objects associated with read sets in the sequence store. These tags can be used as input to add metadata to your read sets.</p>
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * <p>S3 access configuration parameters. This specifies the parameters needed to access logs stored in S3 buckets. The S3 bucket must be in the same region and account as the sequence store. </p>
   * @public
   */
  s3AccessConfig?: S3AccessConfig | undefined;
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
  s3Uri?: string | undefined;

  /**
   * <p>This is ARN of the access point associated with the S3 bucket storing read sets.</p>
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * <p>Location of the access logs.</p>
   * @public
   */
  accessLogLocation?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SequenceStoreStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type SequenceStoreStatus = (typeof SequenceStoreStatus)[keyof typeof SequenceStoreStatus];

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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for the store. This contains the KMS key ARN that is used to encrypt read set objects.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload.</p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * <p>The status of the sequence store.</p>
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * <p>The status message of the sequence store.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</p>
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * <p>The S3 access metadata of the sequence store.</p>
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;
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
  shareName?: string | undefined;
}

/**
 * @public
 */
export interface CreateShareResponse {
  /**
   * <p>The ID that HealthOmics generates for the share.</p>
   * @public
   */
  shareId?: string | undefined;

  /**
   * <p>The status of the share.</p>
   * @public
   */
  status?: ShareStatus | undefined;

  /**
   * <p>The name of the share.</p>
   * @public
   */
  shareName?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>A description for the store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags for the store.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;
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
  reference?: ReferenceItem | undefined;

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
export const SourceReferenceType = {
  BRANCH: "BRANCH",
  COMMIT: "COMMIT",
  TAG: "TAG",
} as const;

/**
 * @public
 */
export type SourceReferenceType = (typeof SourceReferenceType)[keyof typeof SourceReferenceType];

/**
 * <p>Contains information about the source reference in a code repository, such as a branch, tag, or commit.</p>
 * @public
 */
export interface SourceReference {
  /**
   * <p>The type of source reference, such as branch, tag, or commit.</p>
   * @public
   */
  type: SourceReferenceType | undefined;

  /**
   * <p>The value of the source reference, such as the branch name, tag name, or commit ID.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains information about a source code repository that hosts the workflow definition files.</p>
 * @public
 */
export interface DefinitionRepository {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to the source code repository.</p>
   * @public
   */
  connectionArn: string | undefined;

  /**
   * <p>The full repository identifier, including the repository owner and name. For example, 'repository-owner/repository-name'.</p>
   * @public
   */
  fullRepositoryId: string | undefined;

  /**
   * <p>The source reference for the repository, such as a branch name, tag, or commit ID.</p>
   * @public
   */
  sourceReference?: SourceReference | undefined;

  /**
   * <p>A list of file patterns to exclude when retrieving the workflow definition from the repository.</p>
   * @public
   */
  excludeFilePatterns?: string[] | undefined;
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
  description?: string | undefined;

  /**
   * <p>Whether the parameter is optional.</p>
   * @public
   */
  optional?: boolean | undefined;
}

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
 */
export interface CreateWorkflowRequest {
  /**
   * <p>Name (optional but highly recommended) for the workflow to locate relevant information in the CloudWatch logs and Amazon Web Services HealthOmics console. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description for the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The workflow engine for the workflow. This is only required if you have workflow definition files from more than one engine in your zip file. Otherwise, the service can detect the engine automatically from your workflow definition.</p>
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * <p>A ZIP archive containing the main workflow definition file and dependencies that it imports for the workflow. You can use a file with a ://fileb prefix instead of the Base64 string. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-defn-requirements.html">Workflow definition requirements</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  definitionZip?: Uint8Array | undefined;

  /**
   * <p>The S3 URI of a definition for the workflow. The S3 bucket must be in the same region as the workflow.</p>
   * @public
   */
  definitionUri?: string | undefined;

  /**
   * <p>The path of the main definition file for the workflow. This parameter is not required if the ZIP archive contains only one workflow definition file, or if the main definition file is named “main”. An example path is: <code>workflow-definition/main-file.wdl</code>. </p>
   * @public
   */
  main?: string | undefined;

  /**
   * <p>A parameter template for the workflow. If this field is blank, Amazon Web Services HealthOmics will automatically parse the parameter template values from your workflow definition file. To override these service generated default values, provide a parameter template. To view an example of a parameter template, see <a href="https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html">Parameter template files</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * <p>The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version. The <code>storageCapacity</code> can be overwritten at run time. The storage capacity is not required for runs with a <code>DYNAMIC</code> storage type.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>Tags for the workflow. You can define up to 50 tags for the workflow. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html">Adding a tag</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An idempotency token to ensure that duplicate workflows are not created when Amazon Web Services HealthOmics submits retry requests.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The computational accelerator specified to run the workflow.</p>
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * <p>The default storage type for runs that use this workflow. The <code>storageType</code> can be overridden at run time. <code>DYNAMIC</code> storage dynamically scales the storage up or down, based on file system utilization. <code>STATIC</code> storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html">Run storage types</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>(Optional) Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html">Container images</a> in the <i>Amazon Web Services HealthOmics User Guide</i>. </p>
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * <p>(Optional) URI of the S3 location for the registry mapping file.</p>
   * @public
   */
  containerRegistryMapUri?: string | undefined;

  /**
   * <p>The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.</p>
   * @public
   */
  readmeMarkdown?: string | undefined;

  /**
   * <p>The path to the workflow parameter template JSON file within the repository. This file defines the input parameters for runs that use this workflow. If not specified, the workflow will be created without a parameter template.</p>
   * @public
   */
  parameterTemplatePath?: string | undefined;

  /**
   * <p>The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the <code>README.md</code> file from the root directory of the repository will be used.</p>
   * @public
   */
  readmePath?: string | undefined;

  /**
   * <p>The repository information for the workflow definition. This allows you to source your workflow definition directly from a code repository.</p>
   * @public
   */
  definitionRepository?: DefinitionRepository | undefined;

  /**
   * <p>The Amazon Web Services account ID of the expected owner of the S3 bucket that contains the workflow definition. If not specified, the service skips the validation.</p>
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * <p>The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. Requirements include:</p> <ul> <li> <p>The S3 URI must begin with <code>s3://USER-OWNED-BUCKET/</code> </p> </li> <li> <p>The requester must have access to the S3 bucket and object.</p> </li> <li> <p>The max README content length is 500 KiB.</p> </li> </ul>
   * @public
   */
  readmeUri?: string | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The workflow's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The universally unique identifier (UUID) value for this workflow.</p>
   * @public
   */
  uuid?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowVersionRequest {
  /**
   * <p>The ID of the workflow where you are creating the new version. The <code>workflowId</code> is not the UUID.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>A name for the workflow version. Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version. </p> <p>The version name must start with a letter or number and it can include upper-case and lower-case letters, numbers, hyphens, periods and underscores. The maximum length is 64 characters. You can use a simple naming scheme, such as version1, version2, version3. You can also match your workflow versions with your own internal versioning conventions, such as 2.7.0, 2.7.1, 2.7.2.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>A ZIP archive containing the main workflow definition file and dependencies that it imports for this workflow version. You can use a file with a ://fileb prefix instead of the Base64 string. For more information, see Workflow definition requirements in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  definitionZip?: Uint8Array | undefined;

  /**
   * <p>The S3 URI of a definition for this workflow version. The S3 bucket must be in the same region as this workflow version.</p>
   * @public
   */
  definitionUri?: string | undefined;

  /**
   * <p>The computational accelerator for this workflow version.</p>
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * <p>A description for this workflow version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The workflow engine for this workflow version. This is only required if you have workflow definition files from more than one engine in your zip file. Otherwise, the service can detect the engine automatically from your workflow definition.</p>
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * <p>The path of the main definition file for this workflow version. This parameter is not required if the ZIP archive contains only one workflow definition file, or if the main definition file is named “main”. An example path is: <code>workflow-definition/main-file.wdl</code>. </p>
   * @public
   */
  main?: string | undefined;

  /**
   * <p>A parameter template for this workflow version. If this field is blank, Amazon Web Services HealthOmics will automatically parse the parameter template values from your workflow definition file. To override these service generated default values, provide a parameter template. To view an example of a parameter template, see <a href="https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html">Parameter template files</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * <p>An idempotency token to ensure that duplicate workflows are not created when Amazon Web Services HealthOmics submits retry requests.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The default storage type for runs that use this workflow version. The <code>storageType</code> can be overridden at run time. <code>DYNAMIC</code> storage dynamically scales the storage up or down, based on file system utilization. STATIC storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html">Run storage types</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The default static storage capacity (in gibibytes) for runs that use this workflow version. The <code>storageCapacity</code> can be overwritten at run time. The storage capacity is not required for runs with a <code>DYNAMIC</code> storage type.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>Tags for this workflow version. You can define up to 50 tags for the workflow. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html">Adding a tag</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Amazon Web Services Id of the owner of the S3 bucket that contains the workflow definition. You need to specify this parameter if your account is not the bucket owner.</p>
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * <p>(Optional) Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html">Container images</a> in the <i>Amazon Web Services HealthOmics User Guide</i>. </p>
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * <p>(Optional) URI of the S3 location for the registry mapping file.</p>
   * @public
   */
  containerRegistryMapUri?: string | undefined;

  /**
   * <p>The markdown content for the workflow version's README file. This provides documentation and usage information for users of this specific workflow version.</p>
   * @public
   */
  readmeMarkdown?: string | undefined;

  /**
   * <p>The path to the workflow version parameter template JSON file within the repository. This file defines the input parameters for runs that use this workflow version. If not specified, the workflow version will be created without a parameter template.</p>
   * @public
   */
  parameterTemplatePath?: string | undefined;

  /**
   * <p>The path to the workflow version README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the <code>README.md</code> file from the root directory of the repository will be used.</p>
   * @public
   */
  readmePath?: string | undefined;

  /**
   * <p>The repository information for the workflow version definition. This allows you to source your workflow version definition directly from a code repository.</p>
   * @public
   */
  definitionRepository?: DefinitionRepository | undefined;

  /**
   * <p>The S3 URI of the README file for the workflow version. This file provides documentation and usage information for the workflow version. Requirements include:</p> <ul> <li> <p>The S3 URI must begin with <code>s3://USER-OWNED-BUCKET/</code> </p> </li> <li> <p>The requester must have access to the S3 bucket and object.</p> </li> <li> <p>The max README content length is 500 KiB.</p> </li> </ul>
   * @public
   */
  readmeUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowVersionResponse {
  /**
   * <p>ARN of the workflow version.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The workflow version name.</p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>The workflow version status.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The workflow version's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The universally unique identifier (UUID) value for this workflow version.</p>
   * @public
   */
  uuid?: string | undefined;
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
 * <p>Contains detailed information about the source code repository that hosts the workflow definition files.</p>
 * @public
 */
export interface DefinitionRepositoryDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to the source code repository.</p>
   * @public
   */
  connectionArn?: string | undefined;

  /**
   * <p>The full repository identifier, including the repository owner and name. For example, 'repository-owner/repository-name'.</p>
   * @public
   */
  fullRepositoryId?: string | undefined;

  /**
   * <p>The source reference for the repository, such as a branch name, tag, or commit ID.</p>
   * @public
   */
  sourceReference?: SourceReference | undefined;

  /**
   * <p>The provider type of the source code repository, such as Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, and GitLabSelfManaged.</p>
   * @public
   */
  providerType?: string | undefined;

  /**
   * <p>The endpoint URL of the source code repository provider.</p>
   * @public
   */
  providerEndpoint?: string | undefined;
}

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
export interface DeleteRunCacheRequest {
  /**
   * <p>Run cache identifier for the cache you want to delete.</p>
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
export interface DeleteS3AccessPolicyRequest {
  /**
   * <p>The S3 access point ARN that has the access policy.</p>
   * @public
   */
  s3AccessPointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteS3AccessPolicyResponse {}

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
  status?: ShareStatus | undefined;
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
  force?: boolean | undefined;
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
 */
export interface DeleteWorkflowVersionRequest {
  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The workflow version name.</p>
   * @public
   */
  versionName: string | undefined;
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
  algorithm?: ETagAlgorithm | undefined;

  /**
   * <p>The ETag hash calculated on Source1 of the read set.</p>
   * @public
   */
  source1?: string | undefined;

  /**
   * <p>The ETag hash calculated on Source2 of the read set.</p>
   * @public
   */
  source2?: string | undefined;
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
  statusMessage?: string | undefined;
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
  status?: ReadSetExportJobStatus | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  completionTime?: Date | undefined;
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
  s3Uri?: string | undefined;
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
  totalParts?: number | undefined;

  /**
   * <p>The file's part size.</p>
   * @public
   */
  partSize?: number | undefined;

  /**
   * <p>The file's content length.</p>
   * @public
   */
  contentLength?: number | undefined;

  /**
   * <p>The S3 URI metadata of a sequence store.</p>
   * @public
   */
  s3Access?: ReadSetS3Access | undefined;
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
 * <p>Use filters to return a subset of resources. You can define filters for specific parameters, such as the resource status.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Filter based on the Amazon Resource Number (ARN) of the resource. You can specify up to 10 values.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>Filter based on the resource status. You can specify up to 10 values.</p>
   * @public
   */
  status?: ShareStatus[] | undefined;

  /**
   * <p>The type of resources to be filtered. You can specify one or more of the resource types.</p>
   * @public
   */
  type?: ShareResourceType[] | undefined;
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
  file?: ReadSetFile | undefined;

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
  payload?: StreamingBlobTypes | undefined;
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
  statusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p>The job's source files.</p>
   * @public
   */
  sources?: ActivateReadSetSourceItem[] | undefined;
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
  statusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p>The job's read sets.</p>
   * @public
   */
  readSets?: ExportReadSetDetail[] | undefined;
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
  source2?: string | undefined;
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
  statusMessage?: string | undefined;

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
  generatedFrom?: string | undefined;

  /**
   * <p>The source's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The source's read set ID.</p>
   * @public
   */
  readSetId?: string | undefined;
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
  statusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date | undefined;

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
  source1?: FileInformation | undefined;

  /**
   * <p>The location of the second file in Amazon S3.</p>
   * @public
   */
  source2?: FileInformation | undefined;

  /**
   * <p>The files' index.</p>
   * @public
   */
  index?: FileInformation | undefined;
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
  totalReadCount?: number | undefined;

  /**
   * <p>The sequence's total base count.</p>
   * @public
   */
  totalBaseCount?: number | undefined;

  /**
   * <p>Where the sequence originated.</p>
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * <p>The sequence's alignment setting.</p>
   * @public
   */
  alignment?: string | undefined;
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
  subjectId?: string | undefined;

  /**
   * <p>The read set's sample ID.</p>
   * @public
   */
  sampleId?: string | undefined;

  /**
   * <p>The read set's status.</p>
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * <p>The read set's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The read set's description.</p>
   * @public
   */
  description?: string | undefined;

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
  sequenceInformation?: SequenceInformation | undefined;

  /**
   * <p>The read set's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The read set's files.</p>
   * @public
   */
  files?: ReadSetFiles | undefined;

  /**
   * <p>The status message for a read set. It provides more detail as to why the read set has a status. </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p> The creation type of the read set. </p>
   * @public
   */
  creationType?: CreationType | undefined;

  /**
   * <p>The entity tag (ETag) is a hash of the object meant to represent its semantic content.</p>
   * @public
   */
  etag?: ETag | undefined;

  /**
   * <p>The read set's creation job ID.</p>
   * @public
   */
  creationJobId?: string | undefined;
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
  range?: string | undefined;

  /**
   * <p>The part number to retrieve.</p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p>The file to retrieve.</p>
   * @public
   */
  file?: ReferenceFile | undefined;
}

/**
 * @public
 */
export interface GetReferenceResponse {
  /**
   * <p>The reference file payload.</p>
   * @public
   */
  payload?: StreamingBlobTypes | undefined;
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
  sourceFile?: string | undefined;

  /**
   * <p>The source's status.</p>
   * @public
   */
  status: ReferenceImportJobItemStatus | undefined;

  /**
   * <p>The source's status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The source's reference ID.</p>
   * @public
   */
  referenceId?: string | undefined;
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
  statusMessage?: string | undefined;

  /**
   * <p>When the job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   * @public
   */
  completionTime?: Date | undefined;

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
 * @public
 * @enum
 */
export const ReferenceCreationType = {
  IMPORT: "IMPORT",
} as const;

/**
 * @public
 */
export type ReferenceCreationType = (typeof ReferenceCreationType)[keyof typeof ReferenceCreationType];

/**
 * <p>A set of genome reference files.</p>
 * @public
 */
export interface ReferenceFiles {
  /**
   * <p>The source file's location in Amazon S3.</p>
   * @public
   */
  source?: FileInformation | undefined;

  /**
   * <p>The files' index.</p>
   * @public
   */
  index?: FileInformation | undefined;
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
  status?: ReferenceStatus | undefined;

  /**
   * <p>The reference's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The reference's description.</p>
   * @public
   */
  description?: string | undefined;

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
  files?: ReferenceFiles | undefined;

  /**
   * <p>The reference's creation type.</p>
   * @public
   */
  creationType?: ReferenceCreationType | undefined;

  /**
   * <p>The reference's creation job ID.</p>
   * @public
   */
  creationJobId?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

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
  export?: RunExport[] | undefined;
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
  engineLogStream?: string | undefined;

  /**
   * <p>The log stream ARN for the run log.</p>
   * @public
   */
  runLogStream?: string | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The run cache associated with the run.</p>
   * @public
   */
  cacheId?: string | undefined;

  /**
   * <p>The run cache behavior for the run.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>The actual Nextflow engine version that Amazon Web Services HealthOmics used for the run. The other workflow definition languages don't provide a value for this field.</p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * <p>The run's workflow ID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The run's workflow type.</p>
   * @public
   */
  workflowType?: WorkflowType | undefined;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  runId?: string | undefined;

  /**
   * <p>The run's service role ARN.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The run's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The run's group ID.</p>
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * <p>The run's priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The run's definition.</p>
   * @public
   */
  definition?: string | undefined;

  /**
   * <p>The run's digest.</p>
   * @public
   */
  digest?: string | undefined;

  /**
   * <p>The run's parameters.</p>
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * <p>The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>The run's output URI.</p>
   * @public
   */
  outputUri?: string | undefined;

  /**
   * <p>The run's log level.</p>
   * @public
   */
  logLevel?: RunLogLevel | undefined;

  /**
   * <p>The run's resource digests.</p>
   * @public
   */
  resourceDigests?: Record<string, string> | undefined;

  /**
   * <p>Who started the run.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>When the run was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>When the run started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The run's stop time.</p>
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * <p>The run's status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The run's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The computational accelerator used to run the workflow.</p>
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * <p>The run's retention mode.</p>
   * @public
   */
  retentionMode?: RunRetentionMode | undefined;

  /**
   * <p>The reason a run has failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The location of the run log.</p>
   * @public
   */
  logLocation?: RunLogLocation | undefined;

  /**
   * <p>The universally unique identifier for a run.</p>
   * @public
   */
  uuid?: string | undefined;

  /**
   * <p>The destination for workflow outputs.</p>
   * @public
   */
  runOutputUri?: string | undefined;

  /**
   * <p>The run's storage type.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The ID of the workflow owner.</p>
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * <p>The workflow version name.</p>
   * @public
   */
  workflowVersionName?: string | undefined;

  /**
   * <p>The universally unique identifier (UUID) value for the workflow.</p>
   * @public
   */
  workflowUuid?: string | undefined;
}

/**
 * @public
 */
export interface GetRunCacheRequest {
  /**
   * <p>The identifier of the run cache to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunCacheResponse {
  /**
   * <p>Unique resource identifier for the run cache.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The default cache behavior for runs using this cache.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>The identifier of the bucket owner.</p>
   * @public
   */
  cacheBucketOwnerId?: string | undefined;

  /**
   * <p>The S3 URI where the cache data is stored.</p>
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * <p>Creation time of the run cache (an ISO 8601 formatted string).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The run cache description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The run cache ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The run cache name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The run cache status.</p>
   * @public
   */
  status?: RunCacheStatus | undefined;

  /**
   * <p>The tags associated with the run cache.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The group's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The group's maximum number of CPUs to use.</p>
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * <p>The group's maximum run time in minutes.</p>
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * <p>When the group was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The group's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The maximum GPUs that can be used by a run group.</p>
   * @public
   */
  maxGpus?: number | undefined;
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
 * <p>Information about the container image used for a task.</p>
 * @public
 */
export interface ImageDetails {
  /**
   * <p>The URI of the container image.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The container image digest. If the image URI was transformed, this will be the digest of the container image referenced by the transformed URI.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>URI of the source registry. If the URI is from a third-party registry, Amazon Web Services HealthOmics transforms the URI to the corresponding ECR path, using the pull-through cache mapping rules.</p>
   * @public
   */
  sourceImage?: string | undefined;
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
  taskId?: string | undefined;

  /**
   * <p>The task's status.</p>
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * <p>The task's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The task's CPU usage.</p>
   * @public
   */
  cpus?: number | undefined;

  /**
   * <p>Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.</p>
   * @public
   */
  cacheHit?: boolean | undefined;

  /**
   * <p>The S3 URI of the cache location.</p>
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * <p>The task's memory use in gigabytes.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>When the task was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The task's start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The task's stop time.</p>
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * <p>The task's status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The task's log stream.</p>
   * @public
   */
  logStream?: string | undefined;

  /**
   * <p>The number of Graphics Processing Units (GPU) specified in the task.</p>
   * @public
   */
  gpus?: number | undefined;

  /**
   * <p>The instance type for a task.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The reason a task has failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Details about the container image that this task uses.</p>
   * @public
   */
  imageDetails?: ImageDetails | undefined;
}

/**
 * @public
 */
export interface GetS3AccessPolicyRequest {
  /**
   * <p>The S3 access point ARN that has the access policy.</p>
   * @public
   */
  s3AccessPointArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StoreType = {
  REFERENCE_STORE: "REFERENCE_STORE",
  SEQUENCE_STORE: "SEQUENCE_STORE",
} as const;

/**
 * @public
 */
export type StoreType = (typeof StoreType)[keyof typeof StoreType];

/**
 * @public
 */
export interface GetS3AccessPolicyResponse {
  /**
   * <p>The S3 access point ARN that has the access policy.</p>
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * <p>The Amazon Web Services-generated Sequence Store or Reference Store ID.</p>
   * @public
   */
  storeId?: string | undefined;

  /**
   * <p>The type of store associated with the access point.</p>
   * @public
   */
  storeType?: StoreType | undefined;

  /**
   * <p>The time when the policy was last updated.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>The current resource policy that controls S3 access on the store.</p>
   * @public
   */
  s3AccessPolicy: __AutomaticJsonStringConversion | string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>An S3 location that is used to store files that have failed a direct upload.</p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The S3 metadata of a sequence store, including the ARN and S3 URI of the S3 bucket.</p>
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * <p>The status of the sequence store.</p>
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * <p>The status message of the sequence store.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</p>
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * <p>The last-updated time of the sequence store.</p>
   * @public
   */
  updateTime?: Date | undefined;
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
  shareId?: string | undefined;

  /**
   * <p>The Arn of the shared resource. </p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The ID of the shared resource. </p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The principal subscriber is the account that is sharing the resource.</p>
   * @public
   */
  principalSubscriber?: string | undefined;

  /**
   * <p>The account ID for the data owner. The owner creates the resource share.</p>
   * @public
   */
  ownerId?: string | undefined;

  /**
   * <p>The status of the share.</p>
   * @public
   */
  status?: ShareStatus | undefined;

  /**
   * <p>The status message for a resource share. It provides additional details about the share status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  shareName?: string | undefined;

  /**
   * <p>The timestamp of when the resource share was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The timestamp of the resource share update.</p>
   * @public
   */
  updateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetShareResponse {
  /**
   * <p>A resource share details object. The object includes the status, the resourceArn, and ownerId.</p>
   * @public
   */
  share?: ShareDetails | undefined;
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
  statusMessage?: string | undefined;
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
  completionTime?: Date | undefined;

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
  annotationFields?: Record<string, string> | undefined;
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
  README: "README",
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
  type?: WorkflowType | undefined;

  /**
   * <p>The export format for the workflow.</p>
   * @public
   */
  export?: WorkflowExport[] | undefined;

  /**
   * <p>The ID of the workflow owner.</p>
   * @public
   */
  workflowOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The workflow's ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The workflow's type.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The workflow's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The workflow's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The workflow's engine.</p>
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * <p>The workflow's definition.</p>
   * @public
   */
  definition?: string | undefined;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   * @public
   */
  main?: string | undefined;

  /**
   * <p>The workflow's digest.</p>
   * @public
   */
  digest?: string | undefined;

  /**
   * <p>The workflow's parameter template.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * <p>The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>When the workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The workflow's status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The workflow's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Gets metadata for the workflow.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The computational accelerator specified to run the workflow. </p>
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * <p>The default storage type for runs using this workflow.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The universally unique identifier (UUID) value for this workflow.</p>
   * @public
   */
  uuid?: string | undefined;

  /**
   * <p>The registry map that this workflow is using.</p>
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * <p>The README content for the workflow, providing documentation and usage information.</p>
   * @public
   */
  readme?: string | undefined;

  /**
   * <p>Details about the source code repository that hosts the workflow definition files.</p>
   * @public
   */
  definitionRepositoryDetails?: DefinitionRepositoryDetails | undefined;

  /**
   * <p>The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the <code>README.md</code> file from the root directory of the repository will be used.</p>
   * @public
   */
  readmePath?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowVersionRequest {
  /**
   * <p>The workflow's ID. The <code>workflowId</code> is not the UUID.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The workflow version name.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>The workflow's type. </p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The export format for the workflow.</p>
   * @public
   */
  export?: WorkflowExport[] | undefined;

  /**
   * <p>The 12-digit account ID of the workflow owner. The workflow owner ID can be retrieved using the <code>GetShare</code> API operation. If you are the workflow owner, you do not need to include this ID.</p>
   * @public
   */
  workflowOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowVersionResponse {
  /**
   * <p>ARN of the workflow version.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The workflow version name.</p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>The accelerator for this workflow version.</p>
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * <p>When the workflow version was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>Description of the workflow version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Definition of the workflow version.</p>
   * @public
   */
  definition?: string | undefined;

  /**
   * <p>The workflow version's digest.</p>
   * @public
   */
  digest?: string | undefined;

  /**
   * <p>The workflow engine for this workflow version.</p>
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   * @public
   */
  main?: string | undefined;

  /**
   * <p>The metadata for the workflow version.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The parameter template for the workflow version.</p>
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * <p>The workflow version status</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The workflow version status message</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The default storage type for the run.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The default run storage capacity for static storage.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>The workflow version type</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The workflow version tags</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The universally unique identifier (UUID) value for this workflow version</p>
   * @public
   */
  uuid?: string | undefined;

  /**
   * <p>Amazon Web Services Id of the owner of the bucket.</p>
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * <p>The registry map that this workflow version uses.</p>
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * <p>The README content for the workflow version, providing documentation and usage information specific to this version.</p>
   * @public
   */
  readme?: string | undefined;

  /**
   * <p>Details about the source code repository that hosts the workflow version definition files.</p>
   * @public
   */
  definitionRepositoryDetails?: DefinitionRepositoryDetails | undefined;

  /**
   * <p>The path to the workflow version README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the <code>README.md</code> file from the root directory of the repository will be used.</p>
   * @public
   */
  readmePath?: string | undefined;
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
  status?: ReadSetImportJobStatus | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  completionTime?: Date | undefined;
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
  status?: ReferenceImportJobStatus | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  completionTime?: Date | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads. </p>
 * @public
 */
export interface MultipartReadSetUploadListItem {
  /**
   * <p> The sequence store ID used for the multipart upload. </p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p> The ID for the initiated multipart upload. </p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p> The type of file the read set originated from. </p>
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * <p> The read set source's subject ID. </p>
   * @public
   */
  subjectId: string | undefined;

  /**
   * <p> The read set source's sample ID. </p>
   * @public
   */
  sampleId: string | undefined;

  /**
   * <p> The source of an uploaded part. </p>
   * @public
   */
  generatedFrom: string | undefined;

  /**
   * <p> The source's reference ARN. </p>
   * @public
   */
  referenceArn: string | undefined;

  /**
   * <p> The name of a read set. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of a read set. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> Any tags you wish to add to a read set. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> The time stamp for when a direct upload was created. </p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsResponse {
  /**
   * <p>Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of multipart uploads.</p>
   * @public
   */
  uploads?: MultipartReadSetUploadListItem[] | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ActivateReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  activationJobs?: ActivateReadSetJobItem[] | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ExportReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetExportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  exportJobs?: ExportReadSetJobDetail[] | undefined;
}

/**
 * @public
 */
export interface ListReadSetImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The jobs' sequence store ID.</p>
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ImportReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of jobs.</p>
   * @public
   */
  importJobs?: ImportReadSetJobItem[] | undefined;
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
  name?: string | undefined;

  /**
   * <p>A status to filter on.</p>
   * @public
   */
  status?: ReadSetStatus | undefined;

  /**
   * <p>A genome reference ARN to filter on.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p> The read set source's sample ID. </p>
   * @public
   */
  sampleId?: string | undefined;

  /**
   * <p> The read set source's subject ID. </p>
   * @public
   */
  subjectId?: string | undefined;

  /**
   * <p> Where the source originated. </p>
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * <p> The creation type of the read set. </p>
   * @public
   */
  creationType?: CreationType | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReadSetFilter | undefined;
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
  subjectId?: string | undefined;

  /**
   * <p>The read set's sample ID.</p>
   * @public
   */
  sampleId?: string | undefined;

  /**
   * <p>The read set's status.</p>
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * <p>The read set's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The read set's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The read set's genome reference ARN.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The read set's file type.</p>
   * @public
   */
  fileType: FileType | undefined;

  /**
   * <p>Details about a sequence.</p>
   * @public
   */
  sequenceInformation?: SequenceInformation | undefined;

  /**
   * <p>When the read set was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The status for a read set. It provides more detail as to why the read set has a status. </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p> The creation type of the read set. </p>
   * @public
   */
  creationType?: CreationType | undefined;

  /**
   * <p>The entity tag (ETag) is a hash of the object representing its semantic content.</p>
   * @public
   */
  etag?: ETag | undefined;
}

/**
 * @public
 */
export interface ListReadSetsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of read sets.</p>
   * @public
   */
  readSets: ReadSetListItem[] | undefined;
}

/**
 * <p> Filter settings that select for read set upload parts of interest. </p>
 * @public
 */
export interface ReadSetUploadPartListFilter {
  /**
   * <p> Filters for read set uploads after a specified time. </p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p> Filters for read set part uploads before a specified time. </p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Attributes used to filter for a specific subset of read set part uploads.</p>
   * @public
   */
  filter?: ReadSetUploadPartListFilter | undefined;
}

/**
 * <p> The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API. </p>
 * @public
 */
export interface ReadSetUploadPartListItem {
  /**
   * <p> The number identifying the part in an upload. </p>
   * @public
   */
  partNumber: number | undefined;

  /**
   * <p> The size of the the part in an upload. </p>
   * @public
   */
  partSize: number | undefined;

  /**
   * <p> The origin of the part being direct uploaded. </p>
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * <p> A unique identifier used to confirm that parts are being added to the correct upload. </p>
   * @public
   */
  checksum: string | undefined;

  /**
   * <p> The time stamp for when a direct upload was created. </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> The time stamp for the most recent update to an uploaded part. </p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsResponse {
  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadParts call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of upload parts.</p>
   * @public
   */
  parts?: ReadSetUploadPartListItem[] | undefined;
}

/**
 * @public
 */
export interface ListReferenceImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ImportReferenceFilter | undefined;
}

/**
 * @public
 */
export interface ListReferenceImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A lis of jobs.</p>
   * @public
   */
  importJobs?: ImportReferenceJobItem[] | undefined;
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
  name?: string | undefined;

  /**
   * <p>An MD5 checksum to filter on.</p>
   * @public
   */
  md5?: string | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReferenceFilter | undefined;
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
  status?: ReferenceStatus | undefined;

  /**
   * <p>The reference's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The reference's description.</p>
   * @public
   */
  description?: string | undefined;

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
  nextToken?: string | undefined;

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
  name?: string | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ReferenceStoreFilter | undefined;
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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

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
  nextToken?: string | undefined;

  /**
   * <p>A list of reference stores.</p>
   * @public
   */
  referenceStores: ReferenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRunCachesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional pagination token returned from a prior call to the <code>ListRunCaches</code> API operation.</p>
   * @public
   */
  startingToken?: string | undefined;
}

/**
 * <p>List entry for one run cache.</p>
 * @public
 */
export interface RunCacheListItem {
  /**
   * <p>Unique resource identifier for the run cache.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Default cache behavior for the run cache.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>The S3 uri for the run cache data.</p>
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * <p>The time that this run cache was created (an ISO 8601 formatted string).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The identifier for this run cache.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the run cache.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The run cache status.</p>
   * @public
   */
  status?: RunCacheStatus | undefined;
}

/**
 * @public
 */
export interface ListRunCachesResponse {
  /**
   * <p>Details about each run cache in the response.</p>
   * @public
   */
  items?: RunCacheListItem[] | undefined;

  /**
   * <p>Pagination token to retrieve additional run caches. If the response does not have a <code>nextToken</code>value, you have reached to the end of the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsRequest {
  /**
   * <p>The run groups' name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string | undefined;

  /**
   * <p>The maximum number of run groups to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The group's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The group's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The group's maximum CPU count setting.</p>
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * <p>The group's maximum concurrent run setting.</p>
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * <p>The group's maximum duration setting in minutes.</p>
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * <p>When the group was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> The maximum GPUs that can be used by a run group. </p>
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsResponse {
  /**
   * <p>A list of groups.</p>
   * @public
   */
  items?: RunGroupListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsRequest {
  /**
   * <p>Filter the list by run name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Filter the list by run group ID.</p>
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string | undefined;

  /**
   * <p>The maximum number of runs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status of a run.</p>
   * @public
   */
  status?: RunStatus | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * <p>The run's workflow ID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The run's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The run's priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>When the run was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>When the run started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the run stopped.</p>
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * <p>The run's storage type.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The name of the workflow version.</p>
   * @public
   */
  workflowVersionName?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsResponse {
  /**
   * <p>A list of runs.</p>
   * @public
   */
  items?: RunListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  status?: TaskStatus | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string | undefined;

  /**
   * <p>The maximum number of run tasks to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  taskId?: string | undefined;

  /**
   * <p>The task's status.</p>
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * <p>The task's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The task's CPU count.</p>
   * @public
   */
  cpus?: number | undefined;

  /**
   * <p>Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.</p>
   * @public
   */
  cacheHit?: boolean | undefined;

  /**
   * <p>The S3 URI of the cache location.</p>
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * <p>The task's memory use in gigabyes.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>When the task was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>When the task started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the task stopped.</p>
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * <p> The number of Graphics Processing Units (GPU) specified for the task. </p>
   * @public
   */
  gpus?: number | undefined;

  /**
   * <p> The instance type for a task.</p>
   * @public
   */
  instanceType?: string | undefined;
}

/**
 * @public
 */
export interface ListRunTasksResponse {
  /**
   * <p>A list of tasks.</p>
   * @public
   */
  items?: TaskListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The filter's start date.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The filter's end date.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>Filter results based on status.</p>
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * <p>Filter results based on stores updated after the specified time.</p>
   * @public
   */
  updatedAfter?: Date | undefined;

  /**
   * <p>Filter results based on stores updated before the specified time.</p>
   * @public
   */
  updatedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListSequenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: SequenceStoreFilter | undefined;
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
  name?: string | undefined;

  /**
   * <p>The store's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> An S3 location that is used to store files that have failed a direct upload. </p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The algorithm family of the ETag.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * <p>Status of the sequence store.</p>
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * <p>The status message of the sequence store.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The last-updated time of the Sequence Store.</p>
   * @public
   */
  updateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSequenceStoresResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

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
  filter?: Filter | undefined;

  /**
   * <p>Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of shares to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
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
   * <p> Next token returned in the response of a previous ListSharesResponse call. Used to get the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
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
  status?: JobStatus | undefined;

  /**
   * <p>A store name to filter on.</p>
   * @public
   */
  storeName?: string | undefined;
}

/**
 * @public
 */
export interface ListVariantImportJobsRequest {
  /**
   * <p>The maximum number of import jobs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A list of job IDs.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListVariantImportJobsFilter | undefined;
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
  completionTime?: Date | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * <p> The annotation schema generated by the parsed annotation data. </p>
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVariantImportJobsResponse {
  /**
   * <p>A list of jobs.</p>
   * @public
   */
  variantImportJobs?: VariantImportJobItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  status?: StoreStatus | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A list of store IDs.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   * @public
   */
  filter?: ListVariantStoresFilter | undefined;
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
  variantStores?: VariantStoreItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>Filter the list by workflow type.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>Filter the list by workflow name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string | undefined;

  /**
   * <p>The maximum number of workflows to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The workflow's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The workflow's status.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The workflow's type.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The workflow's digest.</p>
   * @public
   */
  digest?: string | undefined;

  /**
   * <p>When the workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> Any metadata available for workflow. The information listed may vary depending on the workflow, and there may also be no metadata to return. </p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>A list of workflow items.</p>
   * @public
   */
  items?: WorkflowListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsRequest {
  /**
   * <p>The workflow's ID. The <code>workflowId</code> is not the UUID.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The workflow type.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The 12-digit account ID of the workflow owner. The workflow owner ID can be retrieved using the <code>GetShare</code> API operation. If you are the workflow owner, you do not need to include this ID.</p>
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  startingToken?: string | undefined;

  /**
   * <p>The maximum number of workflows to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A list of workflow version items.</p>
 * @public
 */
export interface WorkflowVersionListItem {
  /**
   * <p>ARN of the workflow version.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The workflow's ID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the workflow version.</p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>The description of the workflow version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the workflow version.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>The type of the workflow version.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The digist of the workflow version.</p>
   * @public
   */
  digest?: string | undefined;

  /**
   * <p>The creation time of the workflow version.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>Metadata for the workflow version.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsResponse {
  /**
   * <p>A list of workflow version items.</p>
   * @public
   */
  items?: WorkflowVersionListItem[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutS3AccessPolicyRequest {
  /**
   * <p>The S3 access point ARN where you want to put the access policy.</p>
   * @public
   */
  s3AccessPointArn: string | undefined;

  /**
   * <p>The resource policy that controls S3 access to the store.</p>
   * @public
   */
  s3AccessPolicy: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface PutS3AccessPolicyResponse {
  /**
   * <p>The S3 access point ARN that now has the access policy.</p>
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * <p>The Amazon Web Services-generated Sequence Store or Reference Store ID.</p>
   * @public
   */
  storeId?: string | undefined;

  /**
   * <p>The type of store associated with the access point.</p>
   * @public
   */
  storeType?: StoreType | undefined;
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
  description?: string | undefined;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  clientToken?: string | undefined;

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
export interface UpdateRunCacheRequest {
  /**
   * <p>Update the default run cache behavior.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>Update the run cache description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the run cache you want to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Update the name of the run cache.</p>
   * @public
   */
  name?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>The maximum number of CPUs to use.</p>
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * <p>A maximum run time for the group in minutes.</p>
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * <p>The maximum GPUs that can be used by a run group.</p>
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface StartRunRequest {
  /**
   * <p>The run's workflow ID. The <code>workflowId</code> is not the UUID.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The run's workflow type. The <code>workflowType</code> must be specified if you are running a <code>READY2RUN</code> workflow. If you are running a <code>PRIVATE</code> workflow (default), you do not need to include the workflow type. </p>
   * @public
   */
  workflowType?: WorkflowType | undefined;

  /**
   * <p>The ID of a run to duplicate.</p>
   * @public
   */
  runId?: string | undefined;

  /**
   * <p>A service role for the run. The <code>roleArn</code> requires access to Amazon Web Services HealthOmics, S3, Cloudwatch logs, and EC2. An example <code>roleArn</code> is <code>arn:aws:iam::123456789012:role/omics-service-role-serviceRole-W8O1XMPL7QZ</code>. In this example, the AWS account ID is <code>123456789012</code> and the role name is <code>omics-service-role-serviceRole-W8O1XMPL7QZ</code>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A name for the run. This is recommended to view and organize runs in the Amazon Web Services HealthOmics console and CloudWatch logs.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Identifier of the cache associated with this run. If you don't specify a cache ID, no task outputs are cached for this run.</p>
   * @public
   */
  cacheId?: string | undefined;

  /**
   * <p>The cache behavior for the run. You specify this value if you want to override the default behavior for the cache. You had set the default value when you created the cache. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/how-run-cache.html#run-cache-behavior">Run cache behavior</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>The run's group ID. Use a run group to cap the compute resources (and number of concurrent runs) for the runs that you add to the run group.</p>
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * <p>Use the run priority (highest: 1) to establish the order of runs in a run group when you start a run. If multiple runs share the same priority, the run that was initiated first will have the higher priority. Runs that do not belong to a run group can be assigned a priority. The priorities of these runs are ranked among other runs that are not in a run group. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/creating-run-groups.html#run-priority">Run priority</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>Parameters for the run. The run needs all required parameters and can include optional parameters. The run cannot include any parameters that are not defined in the parameter template. To retrieve parameters from the run, use the GetRun API operation.</p>
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * <p>The <code>STATIC</code> storage capacity (in gibibytes, GiB) for this run. The default run storage capacity is 1200 GiB. If your requested storage capacity is unavailable, the system rounds up the value to the nearest 1200 GiB multiple. If the requested storage capacity is still unavailable, the system rounds up the value to the nearest 2400 GiB multiple. This field is not required if the storage type is <code>DYNAMIC</code> (the system ignores any value that you enter).</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>An output S3 URI for the run. The S3 bucket must be in the same region as the workflow. The role ARN must have permission to write to this S3 bucket.</p>
   * @public
   */
  outputUri: string | undefined;

  /**
   * <p>A log level for the run.</p>
   * @public
   */
  logLevel?: RunLogLevel | undefined;

  /**
   * <p>Tags for the run. You can add up to 50 tags per run. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html">Adding a tag</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An idempotency token used to dedupe retry requests so that duplicate runs are not created.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The retention mode for the run. The default value is <code>RETAIN</code>. </p> <p>Amazon Web Services HealthOmics stores a fixed number of runs that are available to the console and API. In the default mode (<code>RETAIN</code>), you need to remove runs manually when the number of run exceeds the maximum. If you set the retention mode to <code>REMOVE</code>, Amazon Web Services HealthOmics automatically removes runs (that have mode set to <code>REMOVE</code>) when the number of run exceeds the maximum. All run logs are available in CloudWatch logs, if you need information about a run that is no longer available to the API.</p> <p>For more information about retention mode, see <a href="https://docs.aws.amazon.com/omics/latest/dev/starting-a-run.html">Specifying run retention mode</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  retentionMode?: RunRetentionMode | undefined;

  /**
   * <p>The storage type for the run. If you set the storage type to <code>DYNAMIC</code>, Amazon Web Services HealthOmics dynamically scales the storage up or down, based on file system utilization. By default, the run uses <code>STATIC</code> storage type, which allocates a fixed amount of storage. For more information about <code>DYNAMIC</code> and <code>STATIC</code> storage, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html">Run storage types</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The 12-digit account ID of the workflow owner that is used for running a shared workflow. The workflow owner ID can be retrieved using the <code>GetShare</code> API operation. If you are the workflow owner, you do not need to include this ID.</p>
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * <p>The name of the workflow version. Use workflow versions to track and organize changes to the workflow. If your workflow has multiple versions, the run uses the default version unless you specify a version name. To learn more, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
   * @public
   */
  workflowVersionName?: string | undefined;
}

/**
 * @public
 */
export interface StartRunResponse {
  /**
   * <p>Unique resource identifier for the run.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The run's ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The run's status.</p>
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * <p>The run's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The universally unique identifier for a run.</p>
   * @public
   */
  uuid?: string | undefined;

  /**
   * <p>The destination for workflow outputs.</p>
   * @public
   */
  runOutputUri?: string | undefined;
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
  clientToken?: string | undefined;

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
  clientToken?: string | undefined;

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
  generatedFrom?: string | undefined;

  /**
   * <p>The source's reference ARN.</p>
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * <p>The source's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The source's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The source's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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

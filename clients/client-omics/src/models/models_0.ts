// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";
import { Readable } from "stream";

import { OmicsServiceException as __BaseException } from "./OmicsServiceException";

/**
 * @public
 */
export interface AbortMultipartReadSetUploadRequest {
  /**
   * <p>
   *       The sequence store ID for the store involved in the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
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
   * <p>The filter's status.</p>
   */
  status?: ReadSetActivationJobStatus | string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
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
   * <p>The source's read set ID.</p>
   */
  readSetId: string | undefined;

  /**
   * <p>The source's status.</p>
   */
  status: ReadSetActivationJobItemStatus | string | undefined;

  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;

  /**
   * <p>The item's job status.</p>
   */
  jobStatus: JobStatus | string | undefined;
}

/**
 * @public
 * <p>A source for an annotation import job.</p>
 */
export interface AnnotationImportItemSource {
  /**
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface CancelAnnotationImportRequest {
  /**
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
   * <p>The file's field separator.</p>
   */
  sep?: string;

  /**
   * <p>The file's encoding.</p>
   */
  encoding?: string;

  /**
   * <p>The file's quote character.</p>
   */
  quote?: string;

  /**
   * <p>Whether all values need to be quoted, or just those that contain quotes.</p>
   */
  quoteAll?: boolean;

  /**
   * <p>A character for escaping quotes in the file.</p>
   */
  escape?: string;

  /**
   * <p>Whether quotes need to be escaped in the file.</p>
   */
  escapeQuotes?: boolean;

  /**
   * <p>The file's comment character.</p>
   */
  comment?: string;

  /**
   * <p>Whether the file has a header row.</p>
   */
  header?: boolean;

  /**
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
   * <p>The file's ignore qual field setting.</p>
   */
  ignoreQualField?: boolean;

  /**
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
   * <p>Options for a TSV file.</p>
   */
  export interface TsvOptionsMember {
    tsvOptions: TsvOptions;
    vcfOptions?: never;
    $unknown?: never;
  }

  /**
   * <p>Options for a VCF file.</p>
   */
  export interface VcfOptionsMember {
    tsvOptions?: never;
    vcfOptions: VcfOptions;
    $unknown?: never;
  }

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
   */
  id: string | undefined;

  /**
   * <p>The job's destination annotation store.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime: Date | undefined;

  /**
   * <p>The job's imported items.</p>
   */
  items: AnnotationImportItemDetail[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization: boolean | undefined;

  /**
   * <p>Formatting options for a file.</p>
   */
  formatOptions: FormatOptions | undefined;

  /**
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
   * <p>A status to filter on.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>A store name to filter on.</p>
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>IDs of annotation import jobs to retrieve.</p>
   */
  ids?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's destination annotation store.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
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
   * <p>A list of jobs.</p>
   */
  annotationImportJobs?: AnnotationImportJobItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartAnnotationImportRequest {
  /**
   * <p>A destination annotation store for the job.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Items to import.</p>
   */
  items: AnnotationImportItemSource[] | undefined;

  /**
   * <p>Formatting options for the annotation file.</p>
   */
  formatOptions?: FormatOptions;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
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
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
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
 * <p>A genome reference.</p>
 */
export type ReferenceItem = ReferenceItem.ReferenceArnMember | ReferenceItem.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceItem {
  /**
   * <p>The reference's ARN.</p>
   */
  export interface ReferenceArnMember {
    referenceArn: string;
    $unknown?: never;
  }

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
   * <p>The encryption type.</p>
   */
  type: EncryptionType | string | undefined;

  /**
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
   * <p>The store's annotation type.</p>
   */
  annotationType?: AnnotationType | string;

  /**
   * <p>The store's header key to column name mapping.</p>
   */
  formatToHeader?: Record<string, string>;

  /**
   * <p>The store's schema.</p>
   */
  schema?: Record<string, SchemaValueType | string>[];
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
   * <p>File settings for a TSV store.</p>
   */
  export interface TsvStoreOptionsMember {
    tsvStoreOptions: TsvStoreOptions;
    $unknown?: never;
  }

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
   */
  reference?: ReferenceItem;

  /**
   * <p>A name for the store.</p>
   */
  name?: string;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>The annotation file format of the store.</p>
   */
  storeFormat: StoreFormat | string | undefined;

  /**
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
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference. Required for all stores except TSV format with generic annotations.</p>
   */
  reference?: ReferenceItem;

  /**
   * <p>The annotation file format of the store.</p>
   */
  storeFormat?: StoreFormat | string;

  /**
   * <p>The store's file parsing options.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreRequest {
  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>Whether to force deletion.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreResponse {
  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreRequest {
  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's tags.</p>
   */
  tags: Record<string, string> | undefined;

  /**
   * <p>The store's parsing options.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The store's annotation file format.</p>
   */
  storeFormat?: StoreFormat | string;

  /**
   * <p>A status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 * <p>A filter for annotation stores.</p>
 */
export interface ListAnnotationStoresFilter {
  /**
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus | string;
}

/**
 * @public
 */
export interface ListAnnotationStoresRequest {
  /**
   * <p>IDs of stores to list.</p>
   */
  ids?: string[];

  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's file format.</p>
   */
  storeFormat: StoreFormat | string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>The store's creation time.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresResponse {
  /**
   * <p>A list of stores.</p>
   */
  annotationStores?: AnnotationStoreItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreRequest {
  /**
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>Parsing options for the store.</p>
   */
  storeOptions?: StoreOptions;

  /**
   * <p>The annotation file format of the store.</p>
   */
  storeFormat?: StoreFormat | string;
}

/**
 * @public
 */
export interface BatchDeleteReadSetRequest {
  /**
   * <p>The read sets' IDs.</p>
   */
  ids: string[] | undefined;

  /**
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
   * <p>The error's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The error's code.</p>
   */
  code: string | undefined;

  /**
   * <p>The error's message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetResponse {
  /**
   * <p>Errors returned by individual delete operations.</p>
   */
  errors?: ReadSetBatchError[];
}

/**
 * @public
 */
export interface CancelRunRequest {
  /**
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface CancelVariantImportRequest {
  /**
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
   * <p>
   *       A number identifying the part in a read set upload.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * <p>
   *       The source file of the part being uploaded.
   *     </p>
   */
  partSource: ReadSetPartSource | string | undefined;

  /**
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
   * <p>
   *       The sequence store ID for the store involved in the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The ID for the multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
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
   * <p>
   *       The sequence store ID for the store that is the destination of the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       An idempotency token that can be used to avoid triggering multiple multipart uploads.
   *     </p>
   */
  clientToken?: string;

  /**
   * <p>
   *       The type of file being uploaded.
   *     </p>
   */
  sourceFileType: FileType | string | undefined;

  /**
   * <p>
   *       The source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * <p>
   *       The source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * <p>
   *       Where the source originated.
   *     </p>
   */
  generatedFrom?: string;

  /**
   * <p>
   *       The ARN of the reference.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * <p>
   *       The name of the read set.
   *     </p>
   */
  name: string | undefined;

  /**
   * <p>
   *       The description of the read set.
   *     </p>
   */
  description?: string;

  /**
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
   * <p>
   *       The sequence store ID for the store that the read set will be created in.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       he ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * <p>
   *       The file type of the read set source.
   *     </p>
   */
  sourceFileType: FileType | string | undefined;

  /**
   * <p>
   *       The source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * <p>
   *       The source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * <p>
   *       The source of the read set.
   *     </p>
   */
  generatedFrom?: string;

  /**
   * <p>
   *       The read set source's reference ARN.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * <p>
   *       The name of the read set.
   *     </p>
   */
  name?: string;

  /**
   * <p>
   *       The description of the read set.
   *     </p>
   */
  description?: string;

  /**
   * <p>
   *       The tags to add to the read set.
   *     </p>
   */
  tags?: Record<string, string>;

  /**
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
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateReferenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's SSE settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupRequest {
  /**
   * <p>A name for the group.</p>
   */
  name?: string;

  /**
   * <p>The maximum number of CPUs to use in the group.</p>
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * <p>A maximum run time for the group in minutes.</p>
   */
  maxDuration?: number;

  /**
   * <p>Tags for the group.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;

  /**
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
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * <p>Tags for the run group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSequenceStoreRequest {
  /**
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   */
  clientToken?: string;

  /**
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
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's SSE settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface CreateVariantStoreRequest {
  /**
   * <p>The genome reference for the store's variants.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>A name for the store.</p>
   */
  name?: string;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;

  /**
   * <p>Tags for the store.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Server-side encryption (SSE) settings for the store.</p>
   */
  sseConfig?: SseConfig;
}

/**
 * @public
 */
export interface CreateVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference?: ReferenceItem;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
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
   * <p>The parameter's description.</p>
   */
  description?: string;

  /**
   * <p>Whether the parameter is optional.</p>
   */
  optional?: boolean;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>A name for the workflow.</p>
   */
  name?: string;

  /**
   * <p>A description for the workflow.</p>
   */
  description?: string;

  /**
   * <p>An engine for the workflow.</p>
   */
  engine?: WorkflowEngine | string;

  /**
   * <p>A ZIP archive for the workflow.</p>
   */
  definitionZip?: Uint8Array;

  /**
   * <p>The URI of a definition for the workflow.</p>
   */
  definitionUri?: string;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   */
  main?: string;

  /**
   * <p>A parameter template for the workflow.</p>
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * <p>A storage capacity for the workflow in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * <p>Tags for the workflow.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;

  /**
   * <p>
   *       The computational accelerator specified to run the workflow.
   *     </p>
   */
  accelerators?: Accelerators | string;
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
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus | string;

  /**
   * <p>The workflow's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteReferenceRequest {
  /**
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunGroupRequest {
  /**
   * <p>The run group's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSequenceStoreRequest {
  /**
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
export interface DeleteVariantStoreRequest {
  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>Whether to force deletion.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteVariantStoreResponse {
  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>A read set.</p>
 */
export interface ExportReadSet {
  /**
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
   * <p>The set's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The set's status.</p>
   */
  status: ReadSetExportJobItemStatus | string | undefined;

  /**
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
   * <p>A status to filter on.</p>
   */
  status?: ReadSetExportJobStatus | string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's destination in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
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
   * <p>The file's total parts.</p>
   */
  totalParts?: number;

  /**
   * <p>The file's part size.</p>
   */
  partSize?: number;

  /**
   * <p>The file's content length.</p>
   */
  contentLength?: number;
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
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The file to retrieve.</p>
   */
  file?: ReadSetFile | string;

  /**
   * <p>The part number to retrieve.</p>
   */
  partNumber: number | undefined;
}

/**
 * @public
 */
export interface GetReadSetResponse {
  /**
   * <p>The read set file payload.</p>
   */
  payload?: Readable | ReadableStream | Blob;
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetActivationJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   */
  sources?: ActivateReadSetSourceItem[];
}

/**
 * @public
 */
export interface GetReadSetExportJobRequest {
  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetExportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's destination in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's read sets.</p>
   */
  readSets?: ExportReadSetDetail[];
}

/**
 * @public
 */
export interface GetReadSetImportJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The location of the first file in Amazon S3.</p>
   */
  source1: string | undefined;

  /**
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
   * <p>The source files' location in Amazon S3.</p>
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * <p>The source's file type.</p>
   */
  sourceFileType: FileType | string | undefined;

  /**
   * <p>The source's status.</p>
   */
  status: ReadSetImportJobItemStatus | string | undefined;

  /**
   * <p>The source's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The source's subject ID.</p>
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   */
  sampleId: string | undefined;

  /**
   * <p>Where the source originated.</p>
   */
  generatedFrom?: string;

  /**
   * <p>The source's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   */
  description?: string;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   */
  sources: ImportReadSetSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetMetadataRequest {
  /**
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The location of the first file in Amazon S3.</p>
   */
  source1?: FileInformation;

  /**
   * <p>The location of the second file in Amazon S3.</p>
   */
  source2?: FileInformation;

  /**
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
   * <p>The sequence's total read count.</p>
   */
  totalReadCount?: number;

  /**
   * <p>The sequence's total base count.</p>
   */
  totalBaseCount?: number;

  /**
   * <p>Where the sequence originated.</p>
   */
  generatedFrom?: string;

  /**
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
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The read set's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The read set's subject ID.</p>
   */
  subjectId?: string;

  /**
   * <p>The read set's sample ID.</p>
   */
  sampleId?: string;

  /**
   * <p>The read set's status.</p>
   */
  status: ReadSetStatus | string | undefined;

  /**
   * <p>The read set's name.</p>
   */
  name?: string;

  /**
   * <p>The read set's description.</p>
   */
  description?: string;

  /**
   * <p>The read set's file type.</p>
   */
  fileType: FileType | string | undefined;

  /**
   * <p>When the read set was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The read set's sequence information.</p>
   */
  sequenceInformation?: SequenceInformation;

  /**
   * <p>The read set's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * <p>The read set's files.</p>
   */
  files?: ReadSetFiles;

  /**
   * <p>
   *       The status message for a read set. It provides more detail as to why the read set has a status.
   *     </p>
   */
  statusMessage?: string;
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
   */
  id: string | undefined;

  /**
   * <p>The reference's store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The range to retrieve.</p>
   */
  range?: string;

  /**
   * <p>The part number to retrieve.</p>
   */
  partNumber: number | undefined;

  /**
   * <p>The file to retrieve.</p>
   */
  file?: ReferenceFile | string;
}

/**
 * @public
 */
export interface GetReferenceResponse {
  /**
   * <p>The reference file payload.</p>
   */
  payload?: Readable | ReadableStream | Blob;
}

/**
 * @public
 */
export interface GetReferenceImportJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  sourceFile?: string;

  /**
   * <p>The source's status.</p>
   */
  status: ReferenceImportJobItemStatus | string | undefined;

  /**
   * <p>The source's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   */
  description?: string;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's source files.</p>
   */
  sources: ImportReferenceSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReferenceMetadataRequest {
  /**
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  source?: FileInformation;

  /**
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
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The reference's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The reference's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The reference's MD5 checksum.</p>
   */
  md5: string | undefined;

  /**
   * <p>The reference's status.</p>
   */
  status?: ReferenceStatus | string;

  /**
   * <p>The reference's name.</p>
   */
  name?: string;

  /**
   * <p>The reference's description.</p>
   */
  description?: string;

  /**
   * <p>When the reference was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the reference was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The reference's files.</p>
   */
  files?: ReferenceFiles;
}

/**
 * @public
 */
export interface GetReferenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
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
   * <p>The run's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The run's export format.</p>
   */
  export?: (RunExport | string)[];
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
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   */
  status?: RunStatus | string;

  /**
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * <p>The run's workflow type.</p>
   */
  workflowType?: WorkflowType | string;

  /**
   * <p>The run's ID.</p>
   */
  runId?: string;

  /**
   * <p>The run's service role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * <p>The run's group ID.</p>
   */
  runGroupId?: string;

  /**
   * <p>The run's priority.</p>
   */
  priority?: number;

  /**
   * <p>The run's definition.</p>
   */
  definition?: string;

  /**
   * <p>The run's digest.</p>
   */
  digest?: string;

  /**
   * <p>The run's parameters.</p>
   */
  parameters?: __DocumentType;

  /**
   * <p>The run's storage capacity in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * <p>The run's output URI.</p>
   */
  outputUri?: string;

  /**
   * <p>The run's log level.</p>
   */
  logLevel?: RunLogLevel | string;

  /**
   * <p>The run's resource digests.</p>
   */
  resourceDigests?: Record<string, string>;

  /**
   * <p>Who started the run.</p>
   */
  startedBy?: string;

  /**
   * <p>When the run was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the run started.</p>
   */
  startTime?: Date;

  /**
   * <p>The run's stop time.</p>
   */
  stopTime?: Date;

  /**
   * <p>The run's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The run's tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       The computational accelerator used to run the workflow.
   *     </p>
   */
  accelerators?: Accelerators | string;
}

/**
 * @public
 */
export interface GetRunGroupRequest {
  /**
   * <p>The group's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunGroupResponse {
  /**
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * <p>The group's name.</p>
   */
  name?: string;

  /**
   * <p>The group's maximum number of CPUs to use.</p>
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * <p>The group's maximum run time in minutes.</p>
   */
  maxDuration?: number;

  /**
   * <p>When the group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The group's tags.</p>
   */
  tags?: Record<string, string>;

  /**
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
   * <p>The task's ID.</p>
   */
  id: string | undefined;

  /**
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
   * <p>The task's ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task's status.</p>
   */
  status?: TaskStatus | string;

  /**
   * <p>The task's name.</p>
   */
  name?: string;

  /**
   * <p>The task's CPU usage.</p>
   */
  cpus?: number;

  /**
   * <p>The task's memory use in gigabytes.</p>
   */
  memory?: number;

  /**
   * <p>When the task was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The task's start time.</p>
   */
  startTime?: Date;

  /**
   * <p>The task's stop time.</p>
   */
  stopTime?: Date;

  /**
   * <p>The task's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The task's log stream.</p>
   */
  logStream?: string;

  /**
   * <p>
   *       The number of Graphics Processing Units (GPU) specified in the task.
   *     </p>
   */
  gpus?: number;
}

/**
 * @public
 */
export interface GetSequenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSequenceStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>
   *       An S3 location that is used to store files that have failed a direct upload.
   *     </p>
   */
  fallbackLocation?: string;
}

/**
 * @public
 */
export interface GetVariantImportRequest {
  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;

  /**
   * <p>The item's job status.</p>
   */
  jobStatus: JobStatus | string | undefined;

  /**
   * <p> A message that provides additional context about a job </p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetVariantImportResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's destination variant store.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's items.</p>
   */
  items: VariantImportItemDetail[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization: boolean | undefined;

  /**
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
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's tags.</p>
   */
  tags: Record<string, string> | undefined;

  /**
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
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
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType | string;

  /**
   * <p>The export format for the workflow.</p>
   */
  export?: (WorkflowExport | string)[];
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The workflow's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus | string;

  /**
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType | string;

  /**
   * <p>The workflow's name.</p>
   */
  name?: string;

  /**
   * <p>The workflow's description.</p>
   */
  description?: string;

  /**
   * <p>The workflow's engine.</p>
   */
  engine?: WorkflowEngine | string;

  /**
   * <p>The workflow's definition.</p>
   */
  definition?: string;

  /**
   * <p>The path of the main definition file for the workflow.</p>
   */
  main?: string;

  /**
   * <p>The workflow's digest.</p>
   */
  digest?: string;

  /**
   * <p>The workflow's parameter template.</p>
   */
  parameterTemplate?: Record<string, WorkflowParameter>;

  /**
   * <p>The workflow's storage capacity in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * <p>When the workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The workflow's status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The workflow's tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       Gets metadata for workflow.
   *     </p>
   */
  metadata?: Record<string, string>;

  /**
   * <p>
   *       The computational accelerator specified to run the workflow. </p>
   */
  accelerators?: Accelerators | string;
}

/**
 * @public
 * <p>A filter for import read set jobs.</p>
 */
export interface ImportReadSetFilter {
  /**
   * <p>A status to filter on.</p>
   */
  status?: ReadSetImportJobStatus | string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
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
   * <p>A status to filter on.</p>
   */
  status?: ReferenceImportJobStatus | string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsRequest {
  /**
   * <p>
   *       The Sequence Store ID used for the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The maximum number of multipart uploads returned in a page.
   *     </p>
   */
  maxResults?: number;

  /**
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
   * <p>
   *       The sequence store ID used for the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * <p>
   *       The type of file the read set originated from.
   *     </p>
   */
  sourceFileType: FileType | string | undefined;

  /**
   * <p>
   *       The read set source's subject ID.
   *     </p>
   */
  subjectId: string | undefined;

  /**
   * <p>
   *       The read set source's sample ID.
   *     </p>
   */
  sampleId: string | undefined;

  /**
   * <p>
   *       The source of an uploaded part.
   *     </p>
   */
  generatedFrom: string | undefined;

  /**
   * <p>
   *       The source's reference ARN.
   *     </p>
   */
  referenceArn: string | undefined;

  /**
   * <p>
   *       The name of a read set.
   *     </p>
   */
  name?: string;

  /**
   * <p>
   *       The description of a read set.
   *     </p>
   */
  description?: string;

  /**
   * <p>
   *       Any tags you wish to add to a read set.
   *     </p>
   */
  tags?: Record<string, string>;

  /**
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
   * <p>
   *       Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
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
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of read set activation jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   */
  filter?: ActivateReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of jobs.</p>
   */
  activationJobs?: ActivateReadSetJobItem[];
}

/**
 * @public
 */
export interface ListReadSetExportJobsRequest {
  /**
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to apply to the list.</p>
   */
  filter?: ExportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetExportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of jobs.</p>
   */
  exportJobs?: ExportReadSetJobDetail[];
}

/**
 * @public
 */
export interface ListReadSetImportJobsRequest {
  /**
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   */
  filter?: ImportReadSetFilter;
}

/**
 * @public
 */
export interface ListReadSetImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
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
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * <p>A status to filter on.</p>
   */
  status?: ReadSetStatus | string;

  /**
   * <p>A genome reference ARN to filter on.</p>
   */
  referenceArn?: string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;

  /**
   * <p>
   *       The read set source's sample ID.
   *     </p>
   */
  sampleId?: string;

  /**
   * <p>
   *       The read set source's subject ID.
   *     </p>
   */
  subjectId?: string;

  /**
   * <p>
   *       Where the source originated.
   *     </p>
   */
  generatedFrom?: string;
}

/**
 * @public
 */
export interface ListReadSetsRequest {
  /**
   * <p>The jobs' sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The maximum number of read sets to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The read set's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The read set's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The read set's subject ID.</p>
   */
  subjectId?: string;

  /**
   * <p>The read set's sample ID.</p>
   */
  sampleId?: string;

  /**
   * <p>The read set's status.</p>
   */
  status: ReadSetStatus | string | undefined;

  /**
   * <p>The read set's name.</p>
   */
  name?: string;

  /**
   * <p>The read set's description.</p>
   */
  description?: string;

  /**
   * <p>The read set's genome reference ARN.</p>
   */
  referenceArn?: string;

  /**
   * <p>The read set's file type.</p>
   */
  fileType: FileType | string | undefined;

  /**
   * <p>Details about a sequence.</p>
   */
  sequenceInformation?: SequenceInformation;

  /**
   * <p>When the read set was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>
   *       The status for a read set. It provides more detail as to why the read set has a status.
   *     </p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface ListReadSetsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
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
   * <p>
   *       Filters for read set uploads after a specified time.
   *     </p>
   */
  createdAfter?: Date;

  /**
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
   * <p>
   *       The Sequence Store ID used for the multipart uploads.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * <p>
   *       The source file for the upload part.
   *     </p>
   */
  partSource: ReadSetPartSource | string | undefined;

  /**
   * <p>
   *       The maximum number of read set upload parts returned in a page.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
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
   * <p>
   *       The number identifying the part in an upload.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * <p>
   *       The size of the the part in an upload.
   *     </p>
   */
  partSize: number | undefined;

  /**
   * <p>
   *       The origin of the part being direct uploaded.
   *     </p>
   */
  partSource: ReadSetPartSource | string | undefined;

  /**
   * <p>
   *       A unique identifier used to confirm that parts are being added to the correct upload.
   *     </p>
   */
  checksum: string | undefined;

  /**
   * <p>
   *       The time stamp for when a direct upload was created.
   *     </p>
   */
  creationTime?: Date;

  /**
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
   * <p>
   *       Next token returned in the response of a previous ListReadSetUploadParts call. Used to get the next page of results.
   *     </p>
   */
  nextToken?: string;

  /**
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
   * <p>The maximum number of jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>A filter to apply to the list.</p>
   */
  filter?: ImportReferenceFilter;
}

/**
 * @public
 */
export interface ListReferenceImportJobsResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
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
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * <p>An MD5 checksum to filter on.</p>
   */
  md5?: string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferencesRequest {
  /**
   * <p>The references' reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The maximum number of references to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The reference's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The reference's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The reference's store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The reference's MD5 checksum.</p>
   */
  md5: string | undefined;

  /**
   * <p>The reference's status.</p>
   */
  status?: ReferenceStatus | string;

  /**
   * <p>The reference's name.</p>
   */
  name?: string;

  /**
   * <p>The reference's description.</p>
   */
  description?: string;

  /**
   * <p>When the reference was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the reference was updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferencesResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The name to filter on.</p>
   */
  name?: string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListReferenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresResponse {
  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of reference stores.</p>
   */
  referenceStores: ReferenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsRequest {
  /**
   * <p>The run groups' name.</p>
   */
  name?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
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
   * <p>The group's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The group's ID.</p>
   */
  id?: string;

  /**
   * <p>The group's name.</p>
   */
  name?: string;

  /**
   * <p>The group's maximum CPU count setting.</p>
   */
  maxCpus?: number;

  /**
   * <p>The group's maximum concurrent run setting.</p>
   */
  maxRuns?: number;

  /**
   * <p>The group's maximum duration setting in minutes.</p>
   */
  maxDuration?: number;

  /**
   * <p>When the group was created.</p>
   */
  creationTime?: Date;

  /**
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
   * <p>A list of groups.</p>
   */
  items?: RunGroupListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunsRequest {
  /**
   * <p>Filter the list by run name.</p>
   */
  name?: string;

  /**
   * <p>Filter the list by run group ID.</p>
   */
  runGroupId?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
   * <p>The maximum number of runs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The status of a run.
   *     </p>
   */
  status?: RunStatus | string;
}

/**
 * @public
 * <p>A workflow run.</p>
 */
export interface RunListItem {
  /**
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   */
  status?: RunStatus | string;

  /**
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * <p>The run's priority.</p>
   */
  priority?: number;

  /**
   * <p>The run's storage capacity.</p>
   */
  storageCapacity?: number;

  /**
   * <p>When the run was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the run started.</p>
   */
  startTime?: Date;

  /**
   * <p>When the run stopped.</p>
   */
  stopTime?: Date;
}

/**
 * @public
 */
export interface ListRunsResponse {
  /**
   * <p>A list of runs.</p>
   */
  items?: RunListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRunTasksRequest {
  /**
   * <p>The run's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Filter the list by status.</p>
   */
  status?: TaskStatus | string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
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
   * <p>The task's ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task's status.</p>
   */
  status?: TaskStatus | string;

  /**
   * <p>The task's name.</p>
   */
  name?: string;

  /**
   * <p>The task's CPU count.</p>
   */
  cpus?: number;

  /**
   * <p>The task's memory use in gigabyes.</p>
   */
  memory?: number;

  /**
   * <p>When the task was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the task started.</p>
   */
  startTime?: Date;

  /**
   * <p>When the task stopped.</p>
   */
  stopTime?: Date;

  /**
   * <p>
   *       The number of Graphics Processing Units (GPU) specified for the task.
   *     </p>
   */
  gpus?: number;
}

/**
 * @public
 */
export interface ListRunTasksResponse {
  /**
   * <p>A list of tasks.</p>
   */
  items?: TaskListItem[];

  /**
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
   * <p>A name to filter on.</p>
   */
  name?: string;

  /**
   * <p>The filter's start date.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The filter's end date.</p>
   */
  createdBefore?: Date;
}

/**
 * @public
 */
export interface ListSequenceStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The store's ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name?: string;

  /**
   * <p>The store's description.</p>
   */
  description?: string;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig?: SseConfig;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
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
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of sequence stores.</p>
   */
  sequenceStores: SequenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
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
   * <p>A status to filter on.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>A store name to filter on.</p>
   */
  storeName?: string;
}

/**
 * @public
 */
export interface ListVariantImportJobsRequest {
  /**
   * <p>The maximum number of import jobs to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>A list of job IDs.</p>
   */
  ids?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's destination variant store.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>When the job completed.</p>
   */
  completionTime?: Date;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
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
   * <p>A list of jobs.</p>
   */
  variantImportJobs?: VariantImportJobItem[];

  /**
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
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus | string;
}

/**
 * @public
 */
export interface ListVariantStoresRequest {
  /**
   * <p>The maximum number of stores to return in one page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>A list of store IDs.</p>
   */
  ids?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's ARN.</p>
   */
  storeArn: string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>The store's server-side encryption (SSE) settings.</p>
   */
  sseConfig: SseConfig | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The store's status message.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>The store's size in bytes.</p>
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresResponse {
  /**
   * <p>A list of variant stores.</p>
   */
  variantStores?: VariantStoreItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>The workflows' type.</p>
   */
  type?: WorkflowType | string;

  /**
   * <p>The workflows' name.</p>
   */
  name?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  startingToken?: string;

  /**
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
   * <p>The workflow's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The workflow's ID.</p>
   */
  id?: string;

  /**
   * <p>The workflow's name.</p>
   */
  name?: string;

  /**
   * <p>The workflow's status.</p>
   */
  status?: WorkflowStatus | string;

  /**
   * <p>The workflow's type.</p>
   */
  type?: WorkflowType | string;

  /**
   * <p>The workflow's digest.</p>
   */
  digest?: string;

  /**
   * <p>When the workflow was created.</p>
   */
  creationTime?: Date;

  /**
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
   * <p>The workflows' items.</p>
   */
  items?: WorkflowListItem[];

  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  sourceFile: string | undefined;

  /**
   * <p>The source's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReferenceImportJobRequest {
  /**
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   */
  sources: StartReferenceImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReferenceImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The job's reference store ID.</p>
   */
  referenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReferenceImportJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRunGroupRequest {
  /**
   * <p>The group's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>A name for the group.</p>
   */
  name?: string;

  /**
   * <p>The maximum number of CPUs to use.</p>
   */
  maxCpus?: number;

  /**
   * <p>The maximum number of concurrent runs for the group.</p>
   */
  maxRuns?: number;

  /**
   * <p>A maximum run time for the group in minutes.</p>
   */
  maxDuration?: number;

  /**
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
   * <p>The run's workflow ID.</p>
   */
  workflowId?: string;

  /**
   * <p>The run's workflows type.</p>
   */
  workflowType?: WorkflowType | string;

  /**
   * <p>The run's ID.</p>
   */
  runId?: string;

  /**
   * <p>A service role for the run.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A name for the run.</p>
   */
  name?: string;

  /**
   * <p>The run's group ID.</p>
   */
  runGroupId?: string;

  /**
   * <p>A priority for the run.</p>
   */
  priority?: number;

  /**
   * <p>Parameters for the run.</p>
   */
  parameters?: __DocumentType;

  /**
   * <p>A storage capacity for the run in gigabytes.</p>
   */
  storageCapacity?: number;

  /**
   * <p>An output URI for the run.</p>
   */
  outputUri?: string;

  /**
   * <p>A log level for the run.</p>
   */
  logLevel?: RunLogLevel | string;

  /**
   * <p>Tags for the run.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique ID for each request.</p>
   */
  requestId?: string;
}

/**
 * @public
 */
export interface StartRunResponse {
  /**
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The run's ID.</p>
   */
  id?: string;

  /**
   * <p>The run's status.</p>
   */
  status?: RunStatus | string;

  /**
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
   * <p>The source's read set ID.</p>
   */
  readSetId: string | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   */
  sources: StartReadSetActivationJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetActivationJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A location for exported files in Amazon S3.</p>
   */
  destination: string | undefined;

  /**
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   */
  sources: ExportReadSet[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's output location.</p>
   */
  destination: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetExportJobStatus | string | undefined;

  /**
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
   * <p>The source files' location in Amazon S3.</p>
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * <p>The source's file type.</p>
   */
  sourceFileType: FileType | string | undefined;

  /**
   * <p>The source's subject ID.</p>
   */
  subjectId: string | undefined;

  /**
   * <p>The source's sample ID.</p>
   */
  sampleId: string | undefined;

  /**
   * <p>Where the source originated.</p>
   */
  generatedFrom?: string;

  /**
   * <p>The source's reference ARN.</p>
   */
  referenceArn: string | undefined;

  /**
   * <p>The source's name.</p>
   */
  name?: string;

  /**
   * <p>The source's description.</p>
   */
  description?: string;

  /**
   * <p>The source's tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartReadSetImportJobRequest {
  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>To ensure that jobs don't run multiple times, specify a unique token for each job.</p>
   */
  clientToken?: string;

  /**
   * <p>The job's source files.</p>
   */
  sources: StartReadSetImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The read set's sequence store ID.</p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>The job's service role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  status: ReadSetImportJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartRequest {
  /**
   * <p>
   *       The Sequence Store ID used for the multipart upload.
   *     </p>
   */
  sequenceStoreId: string | undefined;

  /**
   * <p>
   *       The ID for the initiated multipart upload.
   *     </p>
   */
  uploadId: string | undefined;

  /**
   * <p>
   *       The source file for an upload part.
   *     </p>
   */
  partSource: ReadSetPartSource | string | undefined;

  /**
   * <p>
   *       The number of the part being uploaded.
   *     </p>
   */
  partNumber: number | undefined;

  /**
   * <p>
   *       The read set data to upload for a part.
   *     </p>
   */
  payload: Readable | ReadableStream | Blob | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartResponse {
  /**
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
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface StartVariantImportRequest {
  /**
   * <p>The destination variant store for the job.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>A service role for the job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Items to import.</p>
   */
  items: VariantImportItemSource[] | undefined;

  /**
   * <p>The job's left normalization setting.</p>
   */
  runLeftNormalization?: boolean;

  /**
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
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariantStoreRequest {
  /**
   * <p>A name for the store.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the store.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateVariantStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
   */
  reference: ReferenceItem | undefined;

  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;

  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The store's description.</p>
   */
  description: string | undefined;

  /**
   * <p>When the store was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>When the store was updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>A name for the workflow.</p>
   */
  name?: string;

  /**
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

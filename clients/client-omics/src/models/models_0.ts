// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";
import { Readable } from "stream";

import { OmicsServiceException as __BaseException } from "./OmicsServiceException";

/**
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

export enum ReadSetActivationJobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

/**
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

export enum ReadSetActivationJobItemStatus {
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
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

export enum JobStatus {
  /**
   * The Job was cancelled
   */
  CANCELLED = "CANCELLED",
  /**
   * The Job has completed
   */
  COMPLETED = "COMPLETED",
  /**
   * The Job failed
   */
  FAILED = "FAILED",
  /**
   * The Job is executing
   */
  IN_PROGRESS = "IN_PROGRESS",
  /**
   * The Job has been submitted to run
   */
  SUBMITTED = "SUBMITTED",
}

/**
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
 * <p>A source for an annotation import job.</p>
 */
export interface AnnotationImportItemSource {
  /**
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

export interface CancelAnnotationImportRequest {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

export interface CancelAnnotationImportResponse {}

/**
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

export interface GetAnnotationImportRequest {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
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
 * <p>Formatting options for a TSV file.</p>
 */
export interface TsvOptions {
  /**
   * <p>The file's read options.</p>
   */
  readOptions?: ReadOptions;
}

/**
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
 * <p>Formatting options for a file.</p>
 */
export type FormatOptions =
  | FormatOptions.TsvOptionsMember
  | FormatOptions.VcfOptionsMember
  | FormatOptions.$UnknownMember;

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
}

/**
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
}

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
}

export interface StartAnnotationImportResponse {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
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
 * <p>A genome reference.</p>
 */
export type ReferenceItem = ReferenceItem.ReferenceArnMember | ReferenceItem.$UnknownMember;

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

export enum EncryptionType {
  /**
   * KMS
   */
  KMS = "KMS",
}

/**
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

export enum StoreFormat {
  /**
   * GFF3 Format
   */
  GFF = "GFF",
  /**
   * TSV Format
   */
  TSV = "TSV",
  /**
   * VCF Format
   */
  VCF = "VCF",
}

export enum AnnotationType {
  /**
   * Contains contig and 1-base position
   */
  CHR_POS = "CHR_POS",
  /**
   * Contains contig, 1-base position, ref and alt allele information
   */
  CHR_POS_REF_ALT = "CHR_POS_REF_ALT",
  /**
   * Contains contig, start, and end positions. Coordinates are 1-based
   */
  CHR_START_END_ONE_BASE = "CHR_START_END_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 1-based
   */
  CHR_START_END_REF_ALT_ONE_BASE = "CHR_START_END_REF_ALT_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 0-based
   */
  CHR_START_END_REF_ALT_ZERO_BASE = "CHR_START_END_REF_ALT_ZERO_BASE",
  /**
   * Contains contig, start, and end positions. Coordinates are 0-based
   */
  CHR_START_END_ZERO_BASE = "CHR_START_END_ZERO_BASE",
  /**
   * Generic text file. No genomic information
   */
  GENERIC = "GENERIC",
}

export enum FormatToHeaderKey {
  ALT = "ALT",
  CHR = "CHR",
  END = "END",
  POS = "POS",
  REF = "REF",
  START = "START",
}

export enum SchemaValueType {
  /**
   * BOOLEAN type
   */
  BOOLEAN = "BOOLEAN",
  /**
   * DOUBLE type
   */
  DOUBLE = "DOUBLE",
  /**
   * FLOAT type
   */
  FLOAT = "FLOAT",
  /**
   * INT type
   */
  INT = "INT",
  /**
   * LONG type
   */
  LONG = "LONG",
  /**
   * STRING type
   */
  STRING = "STRING",
}

/**
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
 * <p>Settings for a store.</p>
 */
export type StoreOptions = StoreOptions.TsvStoreOptionsMember | StoreOptions.$UnknownMember;

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

export enum StoreStatus {
  /**
   * The Store is active
   */
  ACTIVE = "ACTIVE",
  /**
   * The Store is being created
   */
  CREATING = "CREATING",
  /**
   * The Store is deleting
   */
  DELETING = "DELETING",
  /**
   * The Store creation failed
   */
  FAILED = "FAILED",
  /**
   * The Store is updating
   */
  UPDATING = "UPDATING",
}

export interface CreateAnnotationStoreResponse {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;

  /**
   * <p>The store's genome reference.</p>
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

export interface DeleteAnnotationStoreResponse {
  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;
}

export interface GetAnnotationStoreRequest {
  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

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
 * <p>A filter for annotation stores.</p>
 */
export interface ListAnnotationStoresFilter {
  /**
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus | string;
}

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

export interface BatchDeleteReadSetResponse {
  /**
   * <p>Errors returned by individual delete operations.</p>
   */
  errors?: ReadSetBatchError[];
}

/**
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

export interface CancelRunRequest {
  /**
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

export interface CancelVariantImportRequest {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

export interface CancelVariantImportResponse {}

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
   * <p>A max duration for the group.</p>
   */
  maxDuration?: number;

  /**
   * <p>Tags for the group.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A request ID for the group.</p>
   */
  requestId?: string;
}

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
}

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
}

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

export enum WorkflowEngine {
  NEXTFLOW = "NEXTFLOW",
  WDL = "WDL",
}

/**
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
   * <p>A storage capacity for the workflow.</p>
   */
  storageCapacity?: number;

  /**
   * <p>Tags for the workflow.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A request ID for the workflow.</p>
   */
  requestId?: string;
}

export enum WorkflowStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

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

export interface DeleteReferenceResponse {}

export interface DeleteReferenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

export interface DeleteReferenceStoreResponse {}

export interface DeleteRunRequest {
  /**
   * <p>The run's ID.</p>
   */
  id: string | undefined;
}

export interface DeleteRunGroupRequest {
  /**
   * <p>The run group's ID.</p>
   */
  id: string | undefined;
}

export interface DeleteSequenceStoreRequest {
  /**
   * <p>The sequence store's ID.</p>
   */
  id: string | undefined;
}

export interface DeleteSequenceStoreResponse {}

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

export interface DeleteVariantStoreResponse {
  /**
   * <p>The store's status.</p>
   */
  status: StoreStatus | string | undefined;
}

export interface DeleteWorkflowRequest {
  /**
   * <p>The workflow's ID.</p>
   */
  id: string | undefined;
}

/**
 * <p>A read set.</p>
 */
export interface ExportReadSet {
  /**
   * <p>The set's ID.</p>
   */
  readSetId: string | undefined;
}

export enum ReadSetExportJobItemStatus {
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
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

export enum ReadSetExportJobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

/**
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

export enum FileType {
  BAM = "BAM",
  CRAM = "CRAM",
  FASTQ = "FASTQ",
}

export enum ReadSetFile {
  INDEX = "INDEX",
  SOURCE1 = "SOURCE1",
  SOURCE2 = "SOURCE2",
}

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

export interface GetReadSetResponse {
  /**
   * <p>The read set file payload.</p>
   */
  payload?: Readable | ReadableStream | Blob;
}

/**
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
   * <p>The job's sources.</p>
   */
  sources?: ActivateReadSetSourceItem[];
}

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

export enum ReadSetImportJobItemStatus {
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
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

export enum ReadSetImportJobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

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
   * <p>The job's sources.</p>
   */
  sources: ImportReadSetSourceItem[] | undefined;
}

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

export enum ReadSetStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
}

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
}

export enum ReferenceFile {
  INDEX = "INDEX",
  SOURCE = "SOURCE",
}

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

export interface GetReferenceResponse {
  /**
   * <p>The reference file payload.</p>
   */
  payload?: Readable | ReadableStream | Blob;
}

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

export enum ReferenceImportJobItemStatus {
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
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

export enum ReferenceImportJobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

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
   * <p>The job's sources.</p>
   */
  sources: ImportReferenceSourceItem[] | undefined;
}

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

export enum ReferenceStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETING = "DELETING",
}

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

export interface GetReferenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

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

export enum RunExport {
  DEFINITION = "DEFINITION",
}

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

export enum RunLogLevel {
  ALL = "ALL",
  ERROR = "ERROR",
  FATAL = "FATAL",
  OFF = "OFF",
}

export enum RunStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
}

export enum WorkflowType {
  PRIVATE = "PRIVATE",
}

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
   * <p>The run's storage capacity.</p>
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
}

export interface GetRunGroupRequest {
  /**
   * <p>The group's ID.</p>
   */
  id: string | undefined;
}

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
   * <p>The group's maximum run duration.</p>
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
}

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

export enum TaskStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
}

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
   * <p>The task's memory setting.</p>
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
}

export interface GetSequenceStoreRequest {
  /**
   * <p>The store's ID.</p>
   */
  id: string | undefined;
}

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
}

export interface GetVariantImportRequest {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

/**
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
}

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
}

export interface GetVariantStoreRequest {
  /**
   * <p>The store's name.</p>
   */
  name: string | undefined;
}

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

export enum WorkflowExport {
  DEFINITION = "DEFINITION",
}

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
   * <p>The workflow's storage capacity.</p>
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
}

/**
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
}

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
}

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
   * <p>The group's maximum duration setting.</p>
   */
  maxDuration?: number;

  /**
   * <p>When the group was created.</p>
   */
  creationTime?: Date;
}

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
}

/**
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
   * <p>The task's memory.</p>
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
}

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
}

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

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
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
}

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
 * <p>A filter for variant stores.</p>
 */
export interface ListVariantStoresFilter {
  /**
   * <p>A status to filter on.</p>
   */
  status?: StoreStatus | string;
}

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
}

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
   * <p>Sources for the job.</p>
   */
  sources: StartReferenceImportJobSourceItem[] | undefined;
}

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
   * <p>The maximum amount of time to run.</p>
   */
  maxDuration?: number;
}

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
   * <p>A storage capacity for the run.</p>
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
   * <p>A request ID for the run.</p>
   */
  requestId?: string;
}

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
 * <p>A source for a read set activation job.</p>
 */
export interface StartReadSetActivationJobSourceItem {
  /**
   * <p>The source's read set ID.</p>
   */
  readSetId: string | undefined;
}

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
   * <p>The job's sources.</p>
   */
  sources: StartReadSetActivationJobSourceItem[] | undefined;
}

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
   * <p>Sources for the job.</p>
   */
  sources: ExportReadSet[] | undefined;
}

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
   * <p>Source files to import.</p>
   */
  sources: StartReadSetImportJobSourceItem[] | undefined;
}

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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

/**
 * <p>A imported variant item's source.</p>
 */
export interface VariantImportItemSource {
  /**
   * <p>The source file's location in Amazon S3.</p>
   */
  source: string | undefined;
}

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
}

export interface StartVariantImportResponse {
  /**
   * <p>The job's ID.</p>
   */
  jobId: string | undefined;
}

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
export const ActivateReadSetFilterFilterSensitiveLog = (obj: ActivateReadSetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateReadSetJobItemFilterSensitiveLog = (obj: ActivateReadSetJobItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateReadSetSourceItemFilterSensitiveLog = (obj: ActivateReadSetSourceItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationImportItemDetailFilterSensitiveLog = (obj: AnnotationImportItemDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationImportItemSourceFilterSensitiveLog = (obj: AnnotationImportItemSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAnnotationImportRequestFilterSensitiveLog = (obj: CancelAnnotationImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAnnotationImportResponseFilterSensitiveLog = (obj: CancelAnnotationImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnnotationImportRequestFilterSensitiveLog = (obj: GetAnnotationImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadOptionsFilterSensitiveLog = (obj: ReadOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TsvOptionsFilterSensitiveLog = (obj: TsvOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VcfOptionsFilterSensitiveLog = (obj: VcfOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormatOptionsFilterSensitiveLog = (obj: FormatOptions): any => {
  if (obj.tsvOptions !== undefined) return { tsvOptions: TsvOptionsFilterSensitiveLog(obj.tsvOptions) };
  if (obj.vcfOptions !== undefined) return { vcfOptions: VcfOptionsFilterSensitiveLog(obj.vcfOptions) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetAnnotationImportResponseFilterSensitiveLog = (obj: GetAnnotationImportResponse): any => ({
  ...obj,
  ...(obj.formatOptions && { formatOptions: FormatOptionsFilterSensitiveLog(obj.formatOptions) }),
});

/**
 * @internal
 */
export const ListAnnotationImportJobsFilterFilterSensitiveLog = (obj: ListAnnotationImportJobsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnnotationImportJobsRequestFilterSensitiveLog = (obj: ListAnnotationImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationImportJobItemFilterSensitiveLog = (obj: AnnotationImportJobItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnnotationImportJobsResponseFilterSensitiveLog = (obj: ListAnnotationImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAnnotationImportRequestFilterSensitiveLog = (obj: StartAnnotationImportRequest): any => ({
  ...obj,
  ...(obj.formatOptions && { formatOptions: FormatOptionsFilterSensitiveLog(obj.formatOptions) }),
});

/**
 * @internal
 */
export const StartAnnotationImportResponseFilterSensitiveLog = (obj: StartAnnotationImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceItemFilterSensitiveLog = (obj: ReferenceItem): any => {
  if (obj.referenceArn !== undefined) return { referenceArn: obj.referenceArn };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SseConfigFilterSensitiveLog = (obj: SseConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TsvStoreOptionsFilterSensitiveLog = (obj: TsvStoreOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StoreOptionsFilterSensitiveLog = (obj: StoreOptions): any => {
  if (obj.tsvStoreOptions !== undefined)
    return { tsvStoreOptions: TsvStoreOptionsFilterSensitiveLog(obj.tsvStoreOptions) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateAnnotationStoreRequestFilterSensitiveLog = (obj: CreateAnnotationStoreRequest): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
  ...(obj.storeOptions && { storeOptions: StoreOptionsFilterSensitiveLog(obj.storeOptions) }),
});

/**
 * @internal
 */
export const CreateAnnotationStoreResponseFilterSensitiveLog = (obj: CreateAnnotationStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
  ...(obj.storeOptions && { storeOptions: StoreOptionsFilterSensitiveLog(obj.storeOptions) }),
});

/**
 * @internal
 */
export const DeleteAnnotationStoreRequestFilterSensitiveLog = (obj: DeleteAnnotationStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnnotationStoreResponseFilterSensitiveLog = (obj: DeleteAnnotationStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnnotationStoreRequestFilterSensitiveLog = (obj: GetAnnotationStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnnotationStoreResponseFilterSensitiveLog = (obj: GetAnnotationStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
  ...(obj.storeOptions && { storeOptions: StoreOptionsFilterSensitiveLog(obj.storeOptions) }),
});

/**
 * @internal
 */
export const ListAnnotationStoresFilterFilterSensitiveLog = (obj: ListAnnotationStoresFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnnotationStoresRequestFilterSensitiveLog = (obj: ListAnnotationStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationStoreItemFilterSensitiveLog = (obj: AnnotationStoreItem): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const ListAnnotationStoresResponseFilterSensitiveLog = (obj: ListAnnotationStoresResponse): any => ({
  ...obj,
  ...(obj.annotationStores && {
    annotationStores: obj.annotationStores.map((item) => AnnotationStoreItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateAnnotationStoreRequestFilterSensitiveLog = (obj: UpdateAnnotationStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAnnotationStoreResponseFilterSensitiveLog = (obj: UpdateAnnotationStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
  ...(obj.storeOptions && { storeOptions: StoreOptionsFilterSensitiveLog(obj.storeOptions) }),
});

/**
 * @internal
 */
export const BatchDeleteReadSetRequestFilterSensitiveLog = (obj: BatchDeleteReadSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadSetBatchErrorFilterSensitiveLog = (obj: ReadSetBatchError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteReadSetResponseFilterSensitiveLog = (obj: BatchDeleteReadSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelRunRequestFilterSensitiveLog = (obj: CancelRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelVariantImportRequestFilterSensitiveLog = (obj: CancelVariantImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelVariantImportResponseFilterSensitiveLog = (obj: CancelVariantImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReferenceStoreRequestFilterSensitiveLog = (obj: CreateReferenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReferenceStoreResponseFilterSensitiveLog = (obj: CreateReferenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRunGroupRequestFilterSensitiveLog = (obj: CreateRunGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRunGroupResponseFilterSensitiveLog = (obj: CreateRunGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSequenceStoreRequestFilterSensitiveLog = (obj: CreateSequenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSequenceStoreResponseFilterSensitiveLog = (obj: CreateSequenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVariantStoreRequestFilterSensitiveLog = (obj: CreateVariantStoreRequest): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const CreateVariantStoreResponseFilterSensitiveLog = (obj: CreateVariantStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const WorkflowParameterFilterSensitiveLog = (obj: WorkflowParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowRequestFilterSensitiveLog = (obj: CreateWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowResponseFilterSensitiveLog = (obj: CreateWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReferenceRequestFilterSensitiveLog = (obj: DeleteReferenceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReferenceResponseFilterSensitiveLog = (obj: DeleteReferenceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReferenceStoreRequestFilterSensitiveLog = (obj: DeleteReferenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReferenceStoreResponseFilterSensitiveLog = (obj: DeleteReferenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRunRequestFilterSensitiveLog = (obj: DeleteRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRunGroupRequestFilterSensitiveLog = (obj: DeleteRunGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSequenceStoreRequestFilterSensitiveLog = (obj: DeleteSequenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSequenceStoreResponseFilterSensitiveLog = (obj: DeleteSequenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVariantStoreRequestFilterSensitiveLog = (obj: DeleteVariantStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVariantStoreResponseFilterSensitiveLog = (obj: DeleteVariantStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowRequestFilterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportReadSetFilterSensitiveLog = (obj: ExportReadSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportReadSetDetailFilterSensitiveLog = (obj: ExportReadSetDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportReadSetFilterFilterSensitiveLog = (obj: ExportReadSetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportReadSetJobDetailFilterSensitiveLog = (obj: ExportReadSetJobDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileInformationFilterSensitiveLog = (obj: FileInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetRequestFilterSensitiveLog = (obj: GetReadSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetResponseFilterSensitiveLog = (obj: GetReadSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetActivationJobRequestFilterSensitiveLog = (obj: GetReadSetActivationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetActivationJobResponseFilterSensitiveLog = (obj: GetReadSetActivationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetExportJobRequestFilterSensitiveLog = (obj: GetReadSetExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetExportJobResponseFilterSensitiveLog = (obj: GetReadSetExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetImportJobRequestFilterSensitiveLog = (obj: GetReadSetImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFilesFilterSensitiveLog = (obj: SourceFiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReadSetSourceItemFilterSensitiveLog = (obj: ImportReadSetSourceItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetImportJobResponseFilterSensitiveLog = (obj: GetReadSetImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetMetadataRequestFilterSensitiveLog = (obj: GetReadSetMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadSetFilesFilterSensitiveLog = (obj: ReadSetFiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SequenceInformationFilterSensitiveLog = (obj: SequenceInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReadSetMetadataResponseFilterSensitiveLog = (obj: GetReadSetMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceRequestFilterSensitiveLog = (obj: GetReferenceRequest): any => ({
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
export const GetReferenceImportJobRequestFilterSensitiveLog = (obj: GetReferenceImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReferenceSourceItemFilterSensitiveLog = (obj: ImportReferenceSourceItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceImportJobResponseFilterSensitiveLog = (obj: GetReferenceImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceMetadataRequestFilterSensitiveLog = (obj: GetReferenceMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceFilesFilterSensitiveLog = (obj: ReferenceFiles): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceMetadataResponseFilterSensitiveLog = (obj: GetReferenceMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceStoreRequestFilterSensitiveLog = (obj: GetReferenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReferenceStoreResponseFilterSensitiveLog = (obj: GetReferenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunRequestFilterSensitiveLog = (obj: GetRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunResponseFilterSensitiveLog = (obj: GetRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunGroupRequestFilterSensitiveLog = (obj: GetRunGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunGroupResponseFilterSensitiveLog = (obj: GetRunGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunTaskRequestFilterSensitiveLog = (obj: GetRunTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRunTaskResponseFilterSensitiveLog = (obj: GetRunTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSequenceStoreRequestFilterSensitiveLog = (obj: GetSequenceStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSequenceStoreResponseFilterSensitiveLog = (obj: GetSequenceStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVariantImportRequestFilterSensitiveLog = (obj: GetVariantImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantImportItemDetailFilterSensitiveLog = (obj: VariantImportItemDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVariantImportResponseFilterSensitiveLog = (obj: GetVariantImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVariantStoreRequestFilterSensitiveLog = (obj: GetVariantStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVariantStoreResponseFilterSensitiveLog = (obj: GetVariantStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const GetWorkflowRequestFilterSensitiveLog = (obj: GetWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkflowResponseFilterSensitiveLog = (obj: GetWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReadSetFilterFilterSensitiveLog = (obj: ImportReadSetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReadSetJobItemFilterSensitiveLog = (obj: ImportReadSetJobItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReferenceFilterFilterSensitiveLog = (obj: ImportReferenceFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportReferenceJobItemFilterSensitiveLog = (obj: ImportReferenceJobItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetActivationJobsRequestFilterSensitiveLog = (obj: ListReadSetActivationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetActivationJobsResponseFilterSensitiveLog = (obj: ListReadSetActivationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetExportJobsRequestFilterSensitiveLog = (obj: ListReadSetExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetExportJobsResponseFilterSensitiveLog = (obj: ListReadSetExportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetImportJobsRequestFilterSensitiveLog = (obj: ListReadSetImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetImportJobsResponseFilterSensitiveLog = (obj: ListReadSetImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadSetFilterFilterSensitiveLog = (obj: ReadSetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetsRequestFilterSensitiveLog = (obj: ListReadSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadSetListItemFilterSensitiveLog = (obj: ReadSetListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReadSetsResponseFilterSensitiveLog = (obj: ListReadSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferenceImportJobsRequestFilterSensitiveLog = (obj: ListReferenceImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferenceImportJobsResponseFilterSensitiveLog = (obj: ListReferenceImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceFilterFilterSensitiveLog = (obj: ReferenceFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferencesRequestFilterSensitiveLog = (obj: ListReferencesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceListItemFilterSensitiveLog = (obj: ReferenceListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferencesResponseFilterSensitiveLog = (obj: ListReferencesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceStoreFilterFilterSensitiveLog = (obj: ReferenceStoreFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferenceStoresRequestFilterSensitiveLog = (obj: ListReferenceStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceStoreDetailFilterSensitiveLog = (obj: ReferenceStoreDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReferenceStoresResponseFilterSensitiveLog = (obj: ListReferenceStoresResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunGroupsRequestFilterSensitiveLog = (obj: ListRunGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunGroupListItemFilterSensitiveLog = (obj: RunGroupListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunGroupsResponseFilterSensitiveLog = (obj: ListRunGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunsRequestFilterSensitiveLog = (obj: ListRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunListItemFilterSensitiveLog = (obj: RunListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunsResponseFilterSensitiveLog = (obj: ListRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunTasksRequestFilterSensitiveLog = (obj: ListRunTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskListItemFilterSensitiveLog = (obj: TaskListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRunTasksResponseFilterSensitiveLog = (obj: ListRunTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SequenceStoreFilterFilterSensitiveLog = (obj: SequenceStoreFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSequenceStoresRequestFilterSensitiveLog = (obj: ListSequenceStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SequenceStoreDetailFilterSensitiveLog = (obj: SequenceStoreDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSequenceStoresResponseFilterSensitiveLog = (obj: ListSequenceStoresResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVariantImportJobsFilterFilterSensitiveLog = (obj: ListVariantImportJobsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVariantImportJobsRequestFilterSensitiveLog = (obj: ListVariantImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantImportJobItemFilterSensitiveLog = (obj: VariantImportJobItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVariantImportJobsResponseFilterSensitiveLog = (obj: ListVariantImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVariantStoresFilterFilterSensitiveLog = (obj: ListVariantStoresFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVariantStoresRequestFilterSensitiveLog = (obj: ListVariantStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantStoreItemFilterSensitiveLog = (obj: VariantStoreItem): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const ListVariantStoresResponseFilterSensitiveLog = (obj: ListVariantStoresResponse): any => ({
  ...obj,
  ...(obj.variantStores && {
    variantStores: obj.variantStores.map((item) => VariantStoreItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListWorkflowsRequestFilterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowListItemFilterSensitiveLog = (obj: WorkflowListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowsResponseFilterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReferenceImportJobSourceItemFilterSensitiveLog = (obj: StartReferenceImportJobSourceItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReferenceImportJobRequestFilterSensitiveLog = (obj: StartReferenceImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReferenceImportJobResponseFilterSensitiveLog = (obj: StartReferenceImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRunGroupRequestFilterSensitiveLog = (obj: UpdateRunGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRunRequestFilterSensitiveLog = (obj: StartRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRunResponseFilterSensitiveLog = (obj: StartRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetActivationJobSourceItemFilterSensitiveLog = (
  obj: StartReadSetActivationJobSourceItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetActivationJobRequestFilterSensitiveLog = (obj: StartReadSetActivationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetActivationJobResponseFilterSensitiveLog = (obj: StartReadSetActivationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetExportJobRequestFilterSensitiveLog = (obj: StartReadSetExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetExportJobResponseFilterSensitiveLog = (obj: StartReadSetExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetImportJobSourceItemFilterSensitiveLog = (obj: StartReadSetImportJobSourceItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetImportJobRequestFilterSensitiveLog = (obj: StartReadSetImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReadSetImportJobResponseFilterSensitiveLog = (obj: StartReadSetImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantImportItemSourceFilterSensitiveLog = (obj: VariantImportItemSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVariantImportRequestFilterSensitiveLog = (obj: StartVariantImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVariantImportResponseFilterSensitiveLog = (obj: StartVariantImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVariantStoreRequestFilterSensitiveLog = (obj: UpdateVariantStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVariantStoreResponseFilterSensitiveLog = (obj: UpdateVariantStoreResponse): any => ({
  ...obj,
  ...(obj.reference && { reference: ReferenceItemFilterSensitiveLog(obj.reference) }),
});

/**
 * @internal
 */
export const UpdateWorkflowRequestFilterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
  ...obj,
});

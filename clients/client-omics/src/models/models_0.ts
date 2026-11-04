// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";
import type { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import type {
  Accelerators,
  AnnotationType,
  BatchStatus,
  CacheBehavior,
  ConfigurationStatus,
  CreationType,
  EncryptionType,
  ETagAlgorithm,
  ETagAlgorithmFamily,
  FileType,
  FormatToHeaderKey,
  JobStatus,
  NetworkingMode,
  ReadSetActivationJobItemStatus,
  ReadSetActivationJobStatus,
  ReadSetExportJobItemStatus,
  ReadSetExportJobStatus,
  ReadSetFile,
  ReadSetImportJobItemStatus,
  ReadSetImportJobStatus,
  ReadSetPartSource,
  ReadSetStatus,
  ReferenceCreationType,
  ReferenceFile,
  ReferenceImportJobItemStatus,
  ReferenceImportJobStatus,
  ReferenceStatus,
  ResourceOwner,
  RunCacheStatus,
  RunExport,
  RunLogLevel,
  RunOutputUriPrefixMode,
  RunRetentionMode,
  RunStatus,
  SchemaValueType,
  ScratchStorageMode,
  SequenceStoreStatus,
  ShareResourceType,
  ShareStatus,
  SourceReferenceType,
  StorageType,
  StoreFormat,
  StoreStatus,
  StoreType,
  SubmissionStatus,
  TaskStatus,
  VersionStatus,
  WorkflowEngine,
  WorkflowExport,
  WorkflowStatus,
  WorkflowType,
} from "./enums";

/**
 * @public
 */
export interface AbortMultipartReadSetUploadRequest {
  /**
   * The sequence store ID for the store involved in the multipart upload.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;
}

/**
 * @public
 */
export interface AbortMultipartReadSetUploadResponse {}

/**
 * @public
 */
export interface AcceptShareRequest {
  /**
   * The ID of the resource share.
   *
   * @public
   */
  shareId: string | undefined;
}

/**
 * @public
 */
export interface AcceptShareResponse {
  /**
   * The status of the resource share.
   *
   * @public
   */
  status?: ShareStatus | undefined;
}

/**
 * A read set activation job filter.
 *
 * @public
 */
export interface ActivateReadSetFilter {
  /**
   * The filter's status.
   *
   * @public
   */
  status?: ReadSetActivationJobStatus | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * A read set activation job.
 *
 * @public
 */
export interface ActivateReadSetJobItem {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * A source for a read set activation job.
 *
 * @public
 */
export interface ActivateReadSetSourceItem {
  /**
   * The source's read set ID.
   *
   * @public
   */
  readSetId: string | undefined;

  /**
   * The source's status.
   *
   * @public
   */
  status: ReadSetActivationJobItemStatus | undefined;

  /**
   * The source's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * Details about an imported annotation item.
 *
 * @public
 */
export interface AnnotationImportItemDetail {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The item's job status.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * A source for an annotation import job.
 *
 * @public
 */
export interface AnnotationImportItemSource {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface CancelAnnotationImportRequest {
  /**
   * The job's ID.
   *
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
   * The job's ID.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Read options for an annotation import job.
 *
 * @public
 */
export interface ReadOptions {
  /**
   * The file's field separator.
   *
   * @public
   */
  sep?: string | undefined;

  /**
   * The file's encoding.
   *
   * @public
   */
  encoding?: string | undefined;

  /**
   * The file's quote character.
   *
   * @public
   */
  quote?: string | undefined;

  /**
   * Whether all values need to be quoted, or just those that contain quotes.
   *
   * @public
   */
  quoteAll?: boolean | undefined;

  /**
   * A character for escaping quotes in the file.
   *
   * @public
   */
  escape?: string | undefined;

  /**
   * Whether quotes need to be escaped in the file.
   *
   * @public
   */
  escapeQuotes?: boolean | undefined;

  /**
   * The file's comment character.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * Whether the file has a header row.
   *
   * @public
   */
  header?: boolean | undefined;

  /**
   * A line separator for the file.
   *
   * @public
   */
  lineSep?: string | undefined;
}

/**
 * Formatting options for a TSV file.
 *
 * @public
 */
export interface TsvOptions {
  /**
   * The file's read options.
   *
   * @public
   */
  readOptions?: ReadOptions | undefined;
}

/**
 * Formatting options for a VCF file.
 *
 * @public
 */
export interface VcfOptions {
  /**
   * The file's ignore qual field setting.
   *
   * @public
   */
  ignoreQualField?: boolean | undefined;

  /**
   * The file's ignore filter field setting.
   *
   * @public
   */
  ignoreFilterField?: boolean | undefined;
}

/**
 * Formatting options for a file.
 *
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
   * Options for a TSV file.
   *
   * @public
   */
  export interface TsvOptionsMember {
    tsvOptions: TsvOptions;
    vcfOptions?: never;
    $unknown?: never;
  }

  /**
   * Options for a VCF file.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tsvOptions: (value: TsvOptions) => T;
    vcfOptions: (value: VcfOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetAnnotationImportResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's destination annotation store.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * The name of the annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime: Date | undefined;

  /**
   * The job's imported items.
   *
   * @public
   */
  items: AnnotationImportItemDetail[] | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization: boolean | undefined;

  /**
   * Formatting options for a file.
   *
   * @public
   */
  formatOptions: FormatOptions | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * A filter for annotation import jobs.
 *
 * @public
 */
export interface ListAnnotationImportJobsFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * A store name to filter on.
   *
   * @public
   */
  storeName?: string | undefined;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsRequest {
  /**
   * The maximum number of jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * IDs of annotation import jobs to retrieve.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ListAnnotationImportJobsFilter | undefined;
}

/**
 * An annotation import job.
 *
 * @public
 */
export interface AnnotationImportJobItem {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's destination annotation store.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * The name of the annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAnnotationImportJobsResponse {
  /**
   * A list of jobs.
   *
   * @public
   */
  annotationImportJobs?: AnnotationImportJobItem[] | undefined;

  /**
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAnnotationImportRequest {
  /**
   * A destination annotation store for the job.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * A service role for the job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Items to import.
   *
   * @public
   */
  items: AnnotationImportItemSource[] | undefined;

  /**
   * The name of the annotation store version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * Formatting options for the annotation file.
   *
   * @public
   */
  formatOptions?: FormatOptions | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAnnotationImportResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * A genome reference.
 *
 * @public
 */
export type ReferenceItem =
  | ReferenceItem.ReferenceArnMember
  | ReferenceItem.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceItem {
  /**
   * The reference's ARN.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    referenceArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Server-side encryption (SSE) settings for a store.
 *
 * @public
 */
export interface SseConfig {
  /**
   * The encryption type.
   *
   * @public
   */
  type: EncryptionType | undefined;

  /**
   * An encryption key ARN.
   *
   * @public
   */
  keyArn?: string | undefined;
}

/**
 * File settings for a TSV store.
 *
 * @public
 */
export interface TsvStoreOptions {
  /**
   * The store's annotation type.
   *
   * @public
   */
  annotationType?: AnnotationType | undefined;

  /**
   * The store's header key to column name mapping.
   *
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>> | undefined;

  /**
   * The store's schema.
   *
   * @public
   */
  schema?: Record<string, SchemaValueType>[] | undefined;
}

/**
 * Settings for a store.
 *
 * @public
 */
export type StoreOptions =
  | StoreOptions.TsvStoreOptionsMember
  | StoreOptions.$UnknownMember;

/**
 * @public
 */
export namespace StoreOptions {
  /**
   * File settings for a TSV store.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tsvStoreOptions: (value: TsvStoreOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAnnotationStoreRequest {
  /**
   * The genome reference for the store's annotations.
   *
   * @public
   */
  reference?: ReferenceItem | undefined;

  /**
   * A name for the store.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Tags for the store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The name given to an annotation store version to distinguish it from other versions.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * Server-side encryption (SSE) settings for the store.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * The annotation file format of the store.
   *
   * @public
   */
  storeFormat: StoreFormat | undefined;

  /**
   * File parsing options for the annotation store.
   *
   * @public
   */
  storeOptions?: StoreOptions | undefined;
}

/**
 * @public
 */
export interface CreateAnnotationStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference. Required for all stores except TSV format with generic annotations.
   *
   * @public
   */
  reference?: ReferenceItem | undefined;

  /**
   * The annotation file format of the store.
   *
   * @public
   */
  storeFormat?: StoreFormat | undefined;

  /**
   * The store's file parsing options.
   *
   * @public
   */
  storeOptions?: StoreOptions | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name given to an annotation store version to distinguish it from other versions.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreRequest {
  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether to force deletion.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreResponse {
  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreRequest {
  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  storeArn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The store's tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * The store's parsing options.
   *
   * @public
   */
  storeOptions?: StoreOptions | undefined;

  /**
   * The store's annotation file format.
   *
   * @public
   */
  storeFormat?: StoreFormat | undefined;

  /**
   * A status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The store's size in bytes.
   *
   * @public
   */
  storeSizeBytes: number | undefined;

  /**
   * An integer indicating how many versions of an annotation store exist.
   *
   * @public
   */
  numVersions: number | undefined;
}

/**
 * A filter for annotation stores.
 *
 * @public
 */
export interface ListAnnotationStoresFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: StoreStatus | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresRequest {
  /**
   * IDs of stores to list.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * The maximum number of stores to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ListAnnotationStoresFilter | undefined;
}

/**
 * An annotation store.
 *
 * @public
 */
export interface AnnotationStoreItem {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  storeArn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's file format.
   *
   * @public
   */
  storeFormat: StoreFormat | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * The store's creation time.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The store's status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The store's size in bytes.
   *
   * @public
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoresResponse {
  /**
   * A list of stores.
   *
   * @public
   */
  annotationStores?: AnnotationStoreItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreRequest {
  /**
   * A name for the store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * Parsing options for the store.
   *
   * @public
   */
  storeOptions?: StoreOptions | undefined;

  /**
   * The annotation file format of the store.
   *
   * @public
   */
  storeFormat?: StoreFormat | undefined;
}

/**
 * The options for a TSV file.
 *
 * @public
 */
export interface TsvVersionOptions {
  /**
   * The store version's annotation type.
   *
   * @public
   */
  annotationType?: AnnotationType | undefined;

  /**
   * The annotation store version's header key to column name mapping.
   *
   * @public
   */
  formatToHeader?: Partial<Record<FormatToHeaderKey, string>> | undefined;

  /**
   * The TSV schema for an annotation store version.
   *
   * @public
   */
  schema?: Record<string, SchemaValueType>[] | undefined;
}

/**
 * The options for an annotation store version.
 *
 * @public
 */
export type VersionOptions =
  | VersionOptions.TsvVersionOptionsMember
  | VersionOptions.$UnknownMember;

/**
 * @public
 */
export namespace VersionOptions {
  /**
   * File settings for a version of a TSV store.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tsvVersionOptions: (value: TsvVersionOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAnnotationStoreVersionRequest {
  /**
   * The name of an annotation store version from which versions are being created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name given to an annotation store version to distinguish it from other versions.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The description of an annotation store version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The options for an annotation store version.
   *
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * Any tags added to annotation store version.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAnnotationStoreVersionResponse {
  /**
   * A generated ID for the annotation store
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name given to an annotation store version to distinguish it from other versions.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The ID for the annotation store from which new versions are being created.
   *
   * @public
   */
  storeId: string | undefined;

  /**
   * The options for an annotation store version.
   *
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * The name given to an annotation store version to distinguish it from other versions.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of a annotation store version.
   *
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * The time stamp for the creation of an annotation store version.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsRequest {
  /**
   * The name of the annotation store from which versions are being deleted.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The versions of an annotation store to be deleted.
   *
   * @public
   */
  versions: string[] | undefined;

  /**
   * Forces the deletion of an annotation store version when imports are in-progress..
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * The error preventing deletion of the annotation store version.
 *
 * @public
 */
export interface VersionDeleteError {
  /**
   * The name given to an annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The message explaining the error in annotation store deletion.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnnotationStoreVersionsResponse {
  /**
   * Any errors that occur when attempting to delete an annotation store version.
   *
   * @public
   */
  errors?: VersionDeleteError[] | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionRequest {
  /**
   * The name given to an annotation store version to distinguish it from others.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name given to an annotation store version to distinguish it from others.
   *
   * @public
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetAnnotationStoreVersionResponse {
  /**
   * The store ID for annotation store version.
   *
   * @public
   */
  storeId: string | undefined;

  /**
   * The annotation store version ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of an annotation store version.
   *
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * The Arn for the annotation store.
   *
   * @public
   */
  versionArn: string | undefined;

  /**
   * The name of the annotation store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name given to an annotation store version to distinguish it from others.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The description for an annotation store version.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The time stamp for when an annotation store version was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time stamp for when an annotation store version was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * Any tags associated with an annotation store version.
   *
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * The options for an annotation store version.
   *
   * @public
   */
  versionOptions?: VersionOptions | undefined;

  /**
   * The status of an annotation store version.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The size of the annotation store version in Bytes.
   *
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * Use filters to focus the returned annotation store versions on a specific parameter, such as the status of the annotation store.
 *
 * @public
 */
export interface ListAnnotationStoreVersionsFilter {
  /**
   * The status of an annotation store version.
   *
   * @public
   */
  status?: VersionStatus | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsRequest {
  /**
   * The name of an annotation store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The maximum number of annotation store versions to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list of annotation store versions.
   *
   * @public
   */
  filter?: ListAnnotationStoreVersionsFilter | undefined;
}

/**
 * Annotation store versions.
 *
 * @public
 */
export interface AnnotationStoreVersionItem {
  /**
   * The store ID for an annotation store version.
   *
   * @public
   */
  storeId: string | undefined;

  /**
   * The annotation store version ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of an annotation store version.
   *
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * The Arn for an annotation store version.
   *
   * @public
   */
  versionArn: string | undefined;

  /**
   * A name given to an annotation store version to distinguish it from others.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of an annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The description of an annotation store version.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The time stamp for when an annotation store version was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time stamp for when an annotation store version was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The status of an annotation store version.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The size of an annotation store version in Bytes.
   *
   * @public
   */
  versionSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListAnnotationStoreVersionsResponse {
  /**
   * Lists all versions of an annotation store.
   *
   * @public
   */
  annotationStoreVersions?: AnnotationStoreVersionItem[] | undefined;

  /**
   * Specifies the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionRequest {
  /**
   * The name of an annotation store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of an annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The description of an annotation store.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnnotationStoreVersionResponse {
  /**
   * The annotation store ID.
   *
   * @public
   */
  storeId: string | undefined;

  /**
   * The annotation store version ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of an annotation store version.
   *
   * @public
   */
  status: VersionStatus | undefined;

  /**
   * The name of an annotation store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of an annotation store version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The description of an annotation store version.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The time stamp for when an annotation store version was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time stamp for when an annotation store version was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetRequest {
  /**
   * The read sets' IDs.
   *
   * @public
   */
  ids: string[] | undefined;

  /**
   * The read sets' sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * An error from a batch read set operation.
 *
 * @public
 */
export interface ReadSetBatchError {
  /**
   * The error's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The error's code.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The error's message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteReadSetResponse {
  /**
   * Errors returned by individual delete operations.
   *
   * @public
   */
  errors?: ReadSetBatchError[] | undefined;
}

/**
 * A summary of a batch returned by `ListBatch`.
 *
 * @public
 */
export interface BatchListItem {
  /**
   * The batch identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The batch name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current batch status.
   *
   * @public
   */
  status?: BatchStatus | undefined;

  /**
   * The timestamp when the batch was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The total number of runs in the batch.
   *
   * @public
   */
  totalRuns?: number | undefined;

  /**
   * The identifier of the workflow used for the batch.
   *
   * @public
   */
  workflowId?: string | undefined;
}

/**
 * A per-run configuration that overrides or merges with fields from `DefaultRunSetting` for a specific run.
 *
 * @public
 */
export interface InlineSetting {
  /**
   * A customer-provided unique identifier for this run configuration within the batch. After submission, use `ListRunsInBatch` to map each `runSettingId` to the HealthOmics-generated `runId`.
   *
   * @public
   */
  runSettingId: string | undefined;

  /**
   * An optional user-friendly name for this run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Override the destination S3 URI for this run's outputs.
   *
   * @public
   */
  outputUri?: string | undefined;

  /**
   * Override the priority for this run.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Per-run workflow parameters. Merged with `defaultRunSetting.parameters`; values in this object take precedence when keys overlap.
   *
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * The expected Amazon Web Services account ID of the owner of the output S3 bucket for this run.
   *
   * @public
   */
  outputBucketOwnerId?: string | undefined;

  /**
   * Per-run Amazon Web Services tags. Merged with `defaultRunSetting.runTags`; values in this object take precedence when keys overlap.
   *
   * @public
   */
  runTags?: Record<string, string> | undefined;

  /**
   * Per-run engine-specific settings. Use this field to specify configuration options that are specific to the workflow engine (for example, Nextflow profiles). Overrides `defaultRunSetting.engineSettings` for this run.
   *
   * @public
   */
  engineSettings?: __DocumentType | undefined;
}

/**
 * A union type representing per-run configurations for the batch. Specify exactly one of the following members.
 *
 * @public
 */
export type BatchRunSettings =
  | BatchRunSettings.InlineSettingsMember
  | BatchRunSettings.S3UriSettingsMember
  | BatchRunSettings.$UnknownMember;

/**
 * @public
 */
export namespace BatchRunSettings {
  /**
   * A list of per-run configurations provided inline in the request. Each entry must include a unique `runSettingId`. Supports up to 100 entries. For batches with more than 100 runs, use `s3UriSettings`.
   *
   * @public
   */
  export interface InlineSettingsMember {
    inlineSettings: InlineSetting[];
    s3UriSettings?: never;
    $unknown?: never;
  }

  /**
   * An Amazon S3 URI pointing to a JSON file containing per-run configurations. The file must be a JSON array in the same format as `inlineSettings`. Supports up to 100,000 run configurations. The maximum file size is 6 GB.
   *
   * The IAM service role in `roleArn` must have read access to this S3 object. HealthOmics validates access to the file during the synchronous API call and records the file's ETag. If the file is modified after submission, the batch fails.
   *
   * @public
   */
  export interface S3UriSettingsMember {
    inlineSettings?: never;
    s3UriSettings: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    inlineSettings?: never;
    s3UriSettings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    inlineSettings: (value: InlineSetting[]) => T;
    s3UriSettings: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CancelRunRequest {
  /**
   * The run's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface CancelRunBatchRequest {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  batchId: string | undefined;
}

/**
 * @public
 */
export interface CancelRunBatchResponse {}

/**
 * @public
 */
export interface CancelVariantImportRequest {
  /**
   * The job's ID.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelVariantImportResponse {}

/**
 * Part of the response to the CompleteReadSetUpload API, including metadata.
 *
 * @public
 */
export interface CompleteReadSetUploadPartListItem {
  /**
   * A number identifying the part in a read set upload.
   *
   * @public
   */
  partNumber: number | undefined;

  /**
   * The source file of the part being uploaded.
   *
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * A unique identifier used to confirm that parts are being added to the correct upload.
   *
   * @public
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadRequest {
  /**
   * The sequence store ID for the store involved in the multipart upload.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The individual uploads or parts of a multipart upload.
   *
   * @public
   */
  parts: CompleteReadSetUploadPartListItem[] | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartReadSetUploadResponse {
  /**
   * The read set ID created for an uploaded read set.
   *
   * @public
   */
  readSetId: string | undefined;
}

/**
 * Minimal details for a configuration resource.
 *
 * @public
 */
export interface ConfigurationDetails {
  /**
   * User-friendly name for the configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Unique resource identifier for the configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Unique identifier for the configuration.
   *
   * @public
   */
  uuid?: string | undefined;
}

/**
 * Configuration list item with summary information.
 *
 * @public
 */
export interface ConfigurationListItem {
  /**
   * Unique resource identifier for the configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * User-friendly name for the configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description for the configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Current configuration status.
   *
   * @public
   */
  status?: ConfigurationStatus | undefined;

  /**
   * Configuration creation timestamp.
   *
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * VPC configuration for workflow runs.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * List of security group IDs. Maximum of 5 security groups allowed.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * List of subnet IDs. Maximum of 16 subnets allowed.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The Amazon Web Services account ID of the cross-account VPC owner for RAM-shared VPC configurations.
   *
   * @public
   */
  vpcOwnerAccountId?: string | undefined;
}

/**
 * Run-specific configuration settings.
 *
 * @public
 */
export interface RunConfigurations {
  /**
   * VPC configuration for workflow runs.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * User-friendly name for the configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Optional description for the configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Required run-specific configurations.
   *
   * @public
   */
  runConfigurations: RunConfigurations | undefined;

  /**
   * Optional tags for the configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Optional request idempotency token. If not specified, a universally unique identifier (UUID) will be automatically generated for the request.
   *
   * @public
   */
  requestId?: string | undefined;
}

/**
 * VPC configuration for workflow runs with computed VPC ID.
 *
 * @public
 */
export interface VpcConfigResponse {
  /**
   * List of security group IDs.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * List of subnet IDs.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * VPC ID computed from the provided subnet IDs.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the cross-account VPC owner for RAM-shared VPC configurations.
   *
   * @public
   */
  vpcOwnerAccountId?: string | undefined;
}

/**
 * Run-specific configuration settings with computed values.
 *
 * @public
 */
export interface RunConfigurationsResponse {
  /**
   * VPC configuration for workflow runs with computed VPC ID.
   *
   * @public
   */
  vpcConfig?: VpcConfigResponse | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * Unique resource identifier for the configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Unique identifier for the configuration.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * User-friendly name for the configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description for the configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Run-specific configurations.
   *
   * @public
   */
  runConfigurations?: RunConfigurationsResponse | undefined;

  /**
   * Current configuration status.
   *
   * @public
   */
  status?: ConfigurationStatus | undefined;

  /**
   * Configuration creation timestamp.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Tags for the configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationRequest {
  /**
   * Configuration name to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * Configuration name to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * Unique resource identifier for the configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Unique identifier for the configuration.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * User-friendly name for the configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description for the configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Run-specific configurations.
   *
   * @public
   */
  runConfigurations?: RunConfigurationsResponse | undefined;

  /**
   * Current configuration status.
   *
   * @public
   */
  status?: ConfigurationStatus | undefined;

  /**
   * Configuration creation timestamp.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Tags for the configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token for retrieving next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * List of configuration items.
   *
   * @public
   */
  items?: ConfigurationListItem[] | undefined;

  /**
   * Token for retrieving next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies image mappings that workflow tasks can use. For example, you can replace all the task references of a public image to use an equivalent image in your private ECR repository. You can use image mappings with upstream registries that don't support pull through cache. You need to manually synchronize the upstream registry with your private repository.
 *
 * @public
 */
export interface ImageMapping {
  /**
   * Specifies the URI of the source image in the upstream registry.
   *
   * @public
   */
  sourceImage?: string | undefined;

  /**
   * Specifies the URI of the corresponding image in the private ECR registry.
   *
   * @public
   */
  destinationImage?: string | undefined;
}

/**
 * Maps an upstream container registry to a repository prefix in your Amazon Elastic Container Registry (Amazon ECR) private registry. For registries that Amazon ECR pull through cache supports, you create a pull through cache rule that synchronizes the upstream repositories with your private repositories. You can also use some registries that pull through cache doesn't support. For these registries, specify `credentialArn`, and Amazon Web Services HealthOmics copies each image into a private Amazon ECR repository the first time a task needs it.
 *
 * @public
 */
export interface RegistryMapping {
  /**
   * The URI of the upstream registry.
   *
   * @public
   */
  upstreamRegistryUrl: string | undefined;

  /**
   * The repository prefix to use in the ECR private repository.
   *
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * The repository prefix of the corresponding repository in the upstream registry.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;

  /**
   * Account ID of the account that owns the upstream container image.
   *
   * @public
   */
  ecrAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that holds the credentials for the upstream registry. You must specify this value when Amazon Elastic Container Registry (Amazon ECR) doesn't support pull through cache for the upstream registry. HealthOmics supports only some of these registries. The workflow role must have permission to call the `secretsmanager:GetSecretValue` operation on the secret. For more information about the supported registries, see [Container images](https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  credentialArn?: string | undefined;
}

/**
 * Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see [Container images](https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @public
 */
export interface ContainerRegistryMap {
  /**
   * The mappings between upstream container registries and repository prefixes in your Amazon Elastic Container Registry (Amazon ECR) private registry. The list can include both pull through cache mappings and mappings for registries that Amazon Web Services HealthOmics copies images from.
   *
   * @public
   */
  registryMappings?: RegistryMapping[] | undefined;

  /**
   * Image mappings specify path mappings between the ECR private repository and their corresponding external repositories.
   *
   * @public
   */
  imageMappings?: ImageMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateMultipartReadSetUploadRequest {
  /**
   * The sequence store ID for the store that is the destination of the multipart uploads.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * An idempotency token that can be used to avoid triggering multiple multipart uploads.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The type of file being uploaded.
   *
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * The source's subject ID.
   *
   * @public
   */
  subjectId: string | undefined;

  /**
   * The source's sample ID.
   *
   * @public
   */
  sampleId: string | undefined;

  /**
   * Where the source originated.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The ARN of the reference.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The name of the read set.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the read set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Any tags to add to the read set.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMultipartReadSetUploadResponse {
  /**
   * The sequence store ID for the store that the read set will be created in.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the initiated multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The file type of the read set source.
   *
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * The source's subject ID.
   *
   * @public
   */
  subjectId: string | undefined;

  /**
   * The source's sample ID.
   *
   * @public
   */
  sampleId: string | undefined;

  /**
   * The source of the read set.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The read set source's reference ARN.
   *
   * @public
   */
  referenceArn: string | undefined;

  /**
   * The name of the read set.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the read set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to add to the read set.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The creation time of the multipart upload.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateReferenceStoreRequest {
  /**
   * A name for the store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Server-side encryption (SSE) settings for the store.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * Tags for the store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * To ensure that requests don't run multiple times, specify a unique token for each request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReferenceStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The store's SSE settings.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRunCacheRequest {
  /**
   * Default cache behavior for runs that use this cache. Supported values are:
   *
   * `CACHE_ON_FAILURE`: Caches task outputs from completed tasks for runs that fail. This setting is useful if you're debugging a workflow that fails after several tasks completed successfully. The subsequent run uses the cache outputs for previously-completed tasks if the task definition, inputs, and container in ECR are identical to the prior run.
   *
   * `CACHE_ALWAYS`: Caches task outputs from completed tasks for all runs. This setting is useful in development mode, but do not use it in a production setting.
   *
   * If you don't specify a value, the default behavior is CACHE_ON_FAILURE. When you start a run that uses this cache, you can override the default cache behavior.
   *
   * For more information, see [Run cache behavior](https://docs.aws.amazon.com/omics/latest/dev/how-run-cache.html#run-cache-behavior) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * Specify the S3 location for storing the cached task outputs. This data must be immediately accessible (not in an archived state).
   *
   * @public
   */
  cacheS3Location: string | undefined;

  /**
   * Enter a description of the run cache.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Enter a user-friendly name for the run cache.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A unique request token, to ensure idempotency. If you don't specify a token, Amazon Web Services HealthOmics automatically generates a universally unique identifier (UUID) for the request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * Specify one or more tags to associate with this run cache.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account ID of the expected owner of the S3 bucket for the run cache. If not provided, your account ID is set as the owner of the bucket.
   *
   * @public
   */
  cacheBucketOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRunCacheResponse {
  /**
   * Unique resource identifier for the run cache.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Identifier for the run cache.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Run cache status.
   *
   * @public
   */
  status?: RunCacheStatus | undefined;

  /**
   * The tags associated with this run cache.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupRequest {
  /**
   * A name for the group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The maximum number of CPUs that can run concurrently across all active runs in the run group.
   *
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * The maximum number of runs that can be running at the same time.
   *
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * The maximum time for each run (in minutes). If a run exceeds the maximum run time, the run fails automatically.
   *
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * Tags for the group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * To ensure that requests don't run multiple times, specify a unique ID for each request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The maximum number of GPUs that can run concurrently across all active runs in the run group.
   *
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface CreateRunGroupResponse {
  /**
   * The group's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The group's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Tags for the run group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * S3 access configuration parameters.
 *
 * @public
 */
export interface S3AccessConfig {
  /**
   * Location of the access logs.
   *
   * @public
   */
  accessLogLocation?: string | undefined;
}

/**
 * @public
 */
export interface CreateSequenceStoreRequest {
  /**
   * A name for the store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Server-side encryption (SSE) settings for the store.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * Tags for the store. You can configure up to 50 tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An idempotency token used to dedupe retry requests so that duplicate runs are not created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An S3 location that is used to store files that have failed a direct upload. You can add or change the `fallbackLocation` after creating a sequence store. This is not required if you are uploading files from a different S3 bucket.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The ETag algorithm family to use for ingested read sets. The default value is MD5up. For more information on ETags, see [ETags and data provenance](https://docs.aws.amazon.com/omics/latest/dev/etags-and-provenance.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store. These tags can be used as input to add metadata to your read sets.
   *
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * S3 access configuration parameters. This specifies the parameters needed to access logs stored in S3 buckets. The S3 bucket must be in the same region and account as the sequence store.
   *
   * @public
   */
  s3AccessConfig?: S3AccessConfig | undefined;
}

/**
 * The S3 access metadata of the sequence store.
 *
 * @public
 */
export interface SequenceStoreS3Access {
  /**
   * The S3 URI of the sequence store.
   *
   * @public
   */
  s3Uri?: string | undefined;

  /**
   * This is ARN of the access point associated with the S3 bucket storing read sets.
   *
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * Location of the access logs.
   *
   * @public
   */
  accessLogLocation?: string | undefined;
}

/**
 * @public
 */
export interface CreateSequenceStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Server-side encryption (SSE) settings for the store. This contains the KMS key ARN that is used to encrypt read set objects.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * An S3 location that is used to store files that have failed a direct upload.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The algorithm family of the ETag.
   *
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * The status of the sequence store.
   *
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * The status message of the sequence store.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
   *
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * The S3 access metadata of the sequence store.
   *
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;
}

/**
 * @public
 */
export interface CreateShareRequest {
  /**
   * The ARN of the resource to be shared.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The principal subscriber is the account being offered shared access to the resource.
   *
   * @public
   */
  principalSubscriber: string | undefined;

  /**
   * A name that the owner defines for the share.
   *
   * @public
   */
  shareName?: string | undefined;
}

/**
 * @public
 */
export interface CreateShareResponse {
  /**
   * The ID that HealthOmics generates for the share.
   *
   * @public
   */
  shareId?: string | undefined;

  /**
   * The status of the share.
   *
   * @public
   */
  status?: ShareStatus | undefined;

  /**
   * The name of the share.
   *
   * @public
   */
  shareName?: string | undefined;
}

/**
 * @public
 */
export interface CreateVariantStoreRequest {
  /**
   * The genome reference for the store's variants.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * A name for the store.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Tags for the store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Server-side encryption (SSE) settings for the store.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;
}

/**
 * @public
 */
export interface CreateVariantStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference?: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * Contains information about the source reference in a code repository, such as a branch, tag, or commit.
 *
 * @public
 */
export interface SourceReference {
  /**
   * The type of source reference, such as branch, tag, or commit.
   *
   * @public
   */
  type: SourceReferenceType | undefined;

  /**
   * The value of the source reference, such as the branch name, tag name, or commit ID.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Contains information about a source code repository that hosts the workflow definition files.
 *
 * @public
 */
export interface DefinitionRepository {
  /**
   * The Amazon Resource Name (ARN) of the connection to the source code repository.
   *
   * @public
   */
  connectionArn: string | undefined;

  /**
   * The full repository identifier, including the repository owner and name. For example, 'repository-owner/repository-name'.
   *
   * @public
   */
  fullRepositoryId: string | undefined;

  /**
   * The source reference for the repository, such as a branch name, tag, or commit ID.
   *
   * @public
   */
  sourceReference?: SourceReference | undefined;

  /**
   * A list of file patterns to exclude when retrieving the workflow definition from the repository.
   *
   * @public
   */
  excludeFilePatterns?: string[] | undefined;
}

/**
 * A workflow parameter.
 *
 * @public
 */
export interface WorkflowParameter {
  /**
   * The parameter's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether the parameter is optional.
   *
   * @public
   */
  optional?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * Name (optional but highly recommended) for the workflow to locate relevant information in the CloudWatch logs and Amazon Web Services HealthOmics console.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description for the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The workflow engine for the workflow. By default, Amazon Web Services HealthOmics detects the engine automatically from your workflow definition. Provide a value if you have workflow definition files from more than one engine in your zip file, or to use WDL lenient.
   *
   * WDL lenient is designed to handle workflows migrated from Cromwell. It supports customer Cromwell directives and some non-conformant logic. For details, see [Implicit type conversion in WDL lenient](https://docs.aws.amazon.com/omics/latest/dev/workflow-wdl-type-conversion.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * A ZIP archive containing the main workflow definition file and dependencies that it imports for the workflow. You can use a file with a ://fileb prefix instead of the Base64 string. For more information, see [Workflow definition requirements](https://docs.aws.amazon.com/omics/latest/dev/workflow-defn-requirements.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  definitionZip?: Uint8Array | undefined;

  /**
   * The S3 URI of a definition for the workflow. The S3 bucket must be in the same region as the workflow.
   *
   * @public
   */
  definitionUri?: string | undefined;

  /**
   * The path of the main definition file for the workflow. This parameter is not required if the ZIP archive contains only one workflow definition file, or if the main definition file is named “main”. An example path is: `workflow-definition/main-file.wdl`.
   *
   * @public
   */
  main?: string | undefined;

  /**
   * A parameter template for the workflow. If this field is blank, Amazon Web Services HealthOmics will automatically parse the parameter template values from your workflow definition file. To override these service generated default values, provide a parameter template. To view an example of a parameter template, see [Parameter template files](https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version. The `storageCapacity` can be overwritten at run time. The storage capacity is not required for runs with a `DYNAMIC` storage type.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * Tags for the workflow. You can define up to 50 tags for the workflow. For more information, see [Adding a tag](https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An idempotency token to ensure that duplicate workflows are not created when Amazon Web Services HealthOmics submits retry requests.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The computational accelerator specified to run the workflow.
   *
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * The default storage type for runs that use this workflow. The `storageType` can be overridden at run time. `DYNAMIC` storage dynamically scales the storage up or down, based on file system utilization. `STATIC` storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see [Run storage types](https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * (Optional) Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see [Container images](https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * (Optional) URI of the S3 location for the registry mapping file.
   *
   * @public
   */
  containerRegistryMapUri?: string | undefined;

  /**
   * The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.
   *
   * @public
   */
  readmeMarkdown?: string | undefined;

  /**
   * The path to the workflow parameter template JSON file within the repository. This file defines the input parameters for runs that use this workflow. If not specified, the workflow will be created without a parameter template.
   *
   * @public
   */
  parameterTemplatePath?: string | undefined;

  /**
   * The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the `README.md` file from the root directory of the repository will be used.
   *
   * @public
   */
  readmePath?: string | undefined;

  /**
   * The repository information for the workflow definition. This allows you to source your workflow definition directly from a code repository.
   *
   * @public
   */
  definitionRepository?: DefinitionRepository | undefined;

  /**
   * The Amazon Web Services account ID of the expected owner of the S3 bucket that contains the workflow definition. If not specified, the service skips the validation.
   *
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. Requirements include:
   *
   * - The S3 URI must begin with `s3://USER-OWNED-BUCKET/`
   * - The requester must have access to the S3 bucket and object.
   * - The max README content length is 500 KiB.
   *
   * @public
   */
  readmeUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * The workflow's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The workflow's status.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The workflow's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The universally unique identifier (UUID) value for this workflow.
   *
   * @public
   */
  uuid?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowVersionRequest {
  /**
   * The ID of the workflow where you are creating the new version. The `workflowId` is not the UUID.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * A name for the workflow version. Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version.
   *
   * The version name must start with a letter or number and it can include upper-case and lower-case letters, numbers, hyphens, periods and underscores. The maximum length is 64 characters. You can use a simple naming scheme, such as version1, version2, version3. You can also match your workflow versions with your own internal versioning conventions, such as 2.7.0, 2.7.1, 2.7.2.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * A ZIP archive containing the main workflow definition file and dependencies that it imports for this workflow version. You can use a file with a ://fileb prefix instead of the Base64 string. For more information, see Workflow definition requirements in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  definitionZip?: Uint8Array | undefined;

  /**
   * The S3 URI of a definition for this workflow version. The S3 bucket must be in the same region as this workflow version.
   *
   * @public
   */
  definitionUri?: string | undefined;

  /**
   * The computational accelerator for this workflow version.
   *
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * A description for this workflow version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The workflow engine for this workflow version. This is only required if you have workflow definition files from more than one engine in your zip file. Otherwise, the service can detect the engine automatically from your workflow definition.
   *
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * The path of the main definition file for this workflow version. This parameter is not required if the ZIP archive contains only one workflow definition file, or if the main definition file is named “main”. An example path is: `workflow-definition/main-file.wdl`.
   *
   * @public
   */
  main?: string | undefined;

  /**
   * A parameter template for this workflow version. If this field is blank, Amazon Web Services HealthOmics will automatically parse the parameter template values from your workflow definition file. To override these service generated default values, provide a parameter template. To view an example of a parameter template, see [Parameter template files](https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * An idempotency token to ensure that duplicate workflows are not created when Amazon Web Services HealthOmics submits retry requests.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The default storage type for runs that use this workflow version. The `storageType` can be overridden at run time. `DYNAMIC` storage dynamically scales the storage up or down, based on file system utilization. STATIC storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see [Run storage types](https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The default static storage capacity (in gibibytes) for runs that use this workflow version. The `storageCapacity` can be overwritten at run time. The storage capacity is not required for runs with a `DYNAMIC` storage type.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * Tags for this workflow version. You can define up to 50 tags for the workflow. For more information, see [Adding a tag](https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Amazon Web Services Id of the owner of the S3 bucket that contains the workflow definition. You need to specify this parameter if your account is not the bucket owner.
   *
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * (Optional) Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see [Container images](https://docs.aws.amazon.com/omics/latest/dev/workflows-ecr.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * (Optional) URI of the S3 location for the registry mapping file.
   *
   * @public
   */
  containerRegistryMapUri?: string | undefined;

  /**
   * The markdown content for the workflow version's README file. This provides documentation and usage information for users of this specific workflow version.
   *
   * @public
   */
  readmeMarkdown?: string | undefined;

  /**
   * The path to the workflow version parameter template JSON file within the repository. This file defines the input parameters for runs that use this workflow version. If not specified, the workflow version will be created without a parameter template.
   *
   * @public
   */
  parameterTemplatePath?: string | undefined;

  /**
   * The path to the workflow version README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the `README.md` file from the root directory of the repository will be used.
   *
   * @public
   */
  readmePath?: string | undefined;

  /**
   * The repository information for the workflow version definition. This allows you to source your workflow version definition directly from a code repository.
   *
   * @public
   */
  definitionRepository?: DefinitionRepository | undefined;

  /**
   * The S3 URI of the README file for the workflow version. This file provides documentation and usage information for the workflow version. Requirements include:
   *
   * - The S3 URI must begin with `s3://USER-OWNED-BUCKET/`
   * - The requester must have access to the S3 bucket and object.
   * - The max README content length is 500 KiB.
   *
   * @public
   */
  readmeUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowVersionResponse {
  /**
   * ARN of the workflow version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The workflow version name.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The workflow version status.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The workflow version's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The universally unique identifier (UUID) value for this workflow version.
   *
   * @public
   */
  uuid?: string | undefined;
}

/**
 * Shared configuration applied to all runs in a batch. Fields specified in a per-run `InlineSetting` entry override the corresponding fields in this object for that run. The `parameters` and `runTags` fields are merged rather than replaced — run-specific values take precedence when keys overlap.
 *
 * @public
 */
export interface DefaultRunSetting {
  /**
   * The identifier of the workflow to run.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The type of the originating workflow. Batch runs are not supported with `READY2RUN` workflows.
   *
   * @public
   */
  workflowType?: WorkflowType | undefined;

  /**
   * The IAM role ARN that grants HealthOmics permissions to access required Amazon Web Services resources such as Amazon S3 and CloudWatch. The role must have the same permissions required for individual `StartRun` calls.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An optional user-friendly name applied to each workflow run. Can be overridden per run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The identifier of the run cache to associate with the runs.
   *
   * @public
   */
  cacheId?: string | undefined;

  /**
   * The cache behavior for the runs. Requires `cacheId` to be set.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * The ID of the run group to contain all workflow runs in the batch.
   *
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * An integer priority for the workflow runs. Higher values correspond to higher priority. A value of 0 corresponds to the lowest priority. Can be overridden per run.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Workflow parameter names and values shared across all runs. Merged with per-run parameters; run-specific values take precedence when keys overlap. Can be overridden per run.
   *
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * The filesystem size in gibibytes (GiB) provisioned for each workflow run and shared by all tasks in that run. Defaults to 1200 GiB if not specified.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * The destination S3 URI for workflow outputs. Must begin with `s3://`. The `roleArn` must grant write permissions to this bucket. Can be overridden per run.
   *
   * @public
   */
  outputUri?: string | undefined;

  /**
   * The verbosity level for CloudWatch Logs emitted during each run.
   *
   * @public
   */
  logLevel?: RunLogLevel | undefined;

  /**
   * Amazon Web Services tags to associate with each workflow run. Merged with per-run `runTags`; run-specific values take precedence when keys overlap.
   *
   * @public
   */
  runTags?: Record<string, string> | undefined;

  /**
   * The retention behavior for runs after completion.
   *
   * @public
   */
  retentionMode?: RunRetentionMode | undefined;

  /**
   * The storage type for the workflow runs.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The Amazon Web Services account ID of the workflow owner, used for cross-account workflow sharing.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * The expected Amazon Web Services account ID of the owner of the output S3 bucket. Can be overridden per run.
   *
   * @public
   */
  outputBucketOwnerId?: string | undefined;

  /**
   * The version name of the specified workflow.
   *
   * @public
   */
  workflowVersionName?: string | undefined;

  /**
   * Optional configuration for run networking behavior. If not specified, this will default to RESTRICTED.
   *
   * @public
   */
  networkingMode?: NetworkingMode | undefined;

  /**
   * Optional configuration name to use for the workflow run.
   *
   * @public
   */
  configurationName?: string | undefined;

  /**
   * Optional inline policy json for scoping down permissions via a session policy on the IAM role provided in the roleArn parameter.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * Engine-specific settings for the workflow run. Use this field to specify configuration options that are specific to the workflow engine (for example, Nextflow profiles).
   *
   * @public
   */
  engineSettings?: __DocumentType | undefined;

  /**
   * Optional configuration for enabling scratch ephemeral storage mounted at /tmp. If not specified, this will default to SHARED. This configuration is applicable only for CPU tasks. For tasks using GPUs, scratch storage is always LOCAL.
   *
   * @public
   */
  scratchStorageMode?: ScratchStorageMode | undefined;
}

/**
 * Contains detailed information about the source code repository that hosts the workflow definition files.
 *
 * @public
 */
export interface DefinitionRepositoryDetails {
  /**
   * The Amazon Resource Name (ARN) of the connection to the source code repository.
   *
   * @public
   */
  connectionArn?: string | undefined;

  /**
   * The full repository identifier, including the repository owner and name. For example, 'repository-owner/repository-name'.
   *
   * @public
   */
  fullRepositoryId?: string | undefined;

  /**
   * The source reference for the repository, such as a branch name, tag, or commit ID.
   *
   * @public
   */
  sourceReference?: SourceReference | undefined;

  /**
   * The provider type of the source code repository, such as Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, and GitLabSelfManaged.
   *
   * @public
   */
  providerType?: string | undefined;

  /**
   * The endpoint URL of the source code repository provider.
   *
   * @public
   */
  providerEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchRequest {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  batchId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReferenceRequest {
  /**
   * The reference's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reference's store ID.
   *
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
   * The store's ID.
   *
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
   * The run's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunBatchRequest {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  batchId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunBatchResponse {}

/**
 * @public
 */
export interface DeleteRunCacheRequest {
  /**
   * Run cache identifier for the cache you want to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRunGroupRequest {
  /**
   * The run group's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteS3AccessPolicyRequest {
  /**
   * The S3 access point ARN that has the access policy.
   *
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
   * The sequence store's ID.
   *
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
   * The ID for the resource share to be deleted.
   *
   * @public
   */
  shareId: string | undefined;
}

/**
 * @public
 */
export interface DeleteShareResponse {
  /**
   * The status of the share being deleted.
   *
   * @public
   */
  status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface DeleteVariantStoreRequest {
  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether to force deletion.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVariantStoreResponse {
  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * The workflow's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowVersionRequest {
  /**
   * The workflow's ID.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The workflow version name.
   *
   * @public
   */
  versionName: string | undefined;
}

/**
 * The entity tag (ETag) is a hash of the object representing its semantic content.
 *
 * @public
 */
export interface ETag {
  /**
   * The algorithm used to calculate the read set’s ETag(s).
   *
   * @public
   */
  algorithm?: ETagAlgorithm | undefined;

  /**
   * The ETag hash calculated on Source1 of the read set.
   *
   * @public
   */
  source1?: string | undefined;

  /**
   * The ETag hash calculated on Source2 of the read set.
   *
   * @public
   */
  source2?: string | undefined;
}

/**
 * A read set.
 *
 * @public
 */
export interface ExportReadSet {
  /**
   * The set's ID.
   *
   * @public
   */
  readSetId: string | undefined;
}

/**
 * Details about a read set.
 *
 * @public
 */
export interface ExportReadSetDetail {
  /**
   * The set's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The set's status.
   *
   * @public
   */
  status: ReadSetExportJobItemStatus | undefined;

  /**
   * The set's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * An read set export job filter.
 *
 * @public
 */
export interface ExportReadSetFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: ReadSetExportJobStatus | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * Details about a read set export job.
 *
 * @public
 */
export interface ExportReadSetJobDetail {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's destination in Amazon S3.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * The S3 URI for each read set file.
 *
 * @public
 */
export interface ReadSetS3Access {
  /**
   * The S3 URI for each read set file.
   *
   * @public
   */
  s3Uri?: string | undefined;
}

/**
 * Details about a file.
 *
 * @public
 */
export interface FileInformation {
  /**
   * The file's total parts.
   *
   * @public
   */
  totalParts?: number | undefined;

  /**
   * The file's part size.
   *
   * @public
   */
  partSize?: number | undefined;

  /**
   * The file's content length.
   *
   * @public
   */
  contentLength?: number | undefined;

  /**
   * The S3 URI metadata of a sequence store.
   *
   * @public
   */
  s3Access?: ReadSetS3Access | undefined;
}

/**
 * Use filters to return a subset of resources. You can define filters for specific parameters, such as the resource status.
 *
 * @public
 */
export interface Filter {
  /**
   * Filter based on the Amazon Resource Number (ARN) of the resource. You can specify up to 10 values.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Filter based on the resource status. You can specify up to 10 values.
   *
   * @public
   */
  status?: ShareStatus[] | undefined;

  /**
   * The type of resources to be filtered. You can specify one or more of the resource types.
   *
   * @public
   */
  type?: ShareResourceType[] | undefined;
}

/**
 * @public
 */
export interface GetBatchRequest {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  batchId: string | undefined;
}

/**
 * A summary of the runs in a batch.
 *
 * @public
 */
export interface RunSummary {
  /**
   * The number of pending runs.
   *
   * @public
   */
  pendingRunCount?: number | undefined;

  /**
   * The number of starting runs.
   *
   * @public
   */
  startingRunCount?: number | undefined;

  /**
   * The number of running runs.
   *
   * @public
   */
  runningRunCount?: number | undefined;

  /**
   * The number of stopping runs.
   *
   * @public
   */
  stoppingRunCount?: number | undefined;

  /**
   * The number of completed runs.
   *
   * @public
   */
  completedRunCount?: number | undefined;

  /**
   * The number of deleted runs.
   *
   * @public
   */
  deletedRunCount?: number | undefined;

  /**
   * The number of failed runs.
   *
   * @public
   */
  failedRunCount?: number | undefined;

  /**
   * The number of cancelled runs.
   *
   * @public
   */
  cancelledRunCount?: number | undefined;
}

/**
 * A summary of the submissions in a batch.
 *
 * @public
 */
export interface SubmissionSummary {
  /**
   * The number of successful start submissions.
   *
   * @public
   */
  successfulStartSubmissionCount?: number | undefined;

  /**
   * The number of failed start submissions.
   *
   * @public
   */
  failedStartSubmissionCount?: number | undefined;

  /**
   * The number of pending start submissions.
   *
   * @public
   */
  pendingStartSubmissionCount?: number | undefined;

  /**
   * The number of successful cancel submissions.
   *
   * @public
   */
  successfulCancelSubmissionCount?: number | undefined;

  /**
   * The number of failed cancel submissions.
   *
   * @public
   */
  failedCancelSubmissionCount?: number | undefined;

  /**
   * The number of successful delete submissions.
   *
   * @public
   */
  successfulDeleteSubmissionCount?: number | undefined;

  /**
   * The number of failed delete submissions.
   *
   * @public
   */
  failedDeleteSubmissionCount?: number | undefined;
}

/**
 * @public
 */
export interface GetBatchResponse {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The unique ARN of the run batch.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The universally unique identifier (UUID) for the run batch.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * The optional user-friendly name of the batch.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the run batch. Possible values: `CREATING` (initial setup), `PENDING` (ready to submit runs), `SUBMITTING` (submitting runs), `INPROGRESS` (runs executing), `STOPPING` (cancellation in progress), `PROCESSED` (all runs completed), `CANCELLED` (batch cancelled), `FAILED` (batch failed), `RUNS_DELETING` (deleting runs), `RUNS_DELETE_FAILED` (run deletion failed for some or all runs), `RUNS_DELETED` (runs deleted).
   *
   * @public
   */
  status?: BatchStatus | undefined;

  /**
   * Amazon Web Services tags associated with the run batch.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The total number of runs in the batch.
   *
   * @public
   */
  totalRuns?: number | undefined;

  /**
   * The shared configuration applied to all runs in the batch. See `DefaultRunSetting`.
   *
   * @public
   */
  defaultRunSetting?: DefaultRunSetting | undefined;

  /**
   * A summary of run submission outcomes. See `SubmissionSummary`.
   *
   * @public
   */
  submissionSummary?: SubmissionSummary | undefined;

  /**
   * A summary of run execution states. Run execution counts are eventually consistent and may lag behind actual run states. Final counts are accurate once the batch reaches `PROCESSED` status. See `RunSummary`.
   *
   * @public
   */
  runSummary?: RunSummary | undefined;

  /**
   * The timestamp when the batch was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The timestamp when all run submissions completed.
   *
   * @public
   */
  submittedTime?: Date | undefined;

  /**
   * The timestamp when all run executions completed.
   *
   * @public
   */
  processedTime?: Date | undefined;

  /**
   * The timestamp when the batch transitioned to a `FAILED` status.
   *
   * @public
   */
  failedTime?: Date | undefined;

  /**
   * A description of the batch failure. Present only when status is `FAILED`.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetRequest {
  /**
   * The read set's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The file to retrieve.
   *
   * @public
   */
  file?: ReadSetFile | undefined;

  /**
   * The part number to retrieve.
   *
   * @public
   */
  partNumber: number | undefined;
}

/**
 * @public
 */
export interface GetReadSetResponse {
  /**
   * The read set file payload.
   *
   * @public
   */
  payload?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetReadSetActivationJobRequest {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetActivationJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources?: ActivateReadSetSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetExportJobRequest {
  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetExportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's destination in Amazon S3.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's read sets.
   *
   * @public
   */
  readSets?: ExportReadSetDetail[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetImportJobRequest {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * Source files for a sequence.
 *
 * @public
 */
export interface SourceFiles {
  /**
   * The location of the first file in Amazon S3.
   *
   * @public
   */
  source1: string | undefined;

  /**
   * The location of the second file in Amazon S3.
   *
   * @public
   */
  source2?: string | undefined;
}

/**
 * A source for an import read set job.
 *
 * @public
 */
export interface ImportReadSetSourceItem {
  /**
   * The source files' location in Amazon S3.
   *
   * @public
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * The source's file type.
   *
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * The source's status.
   *
   * @public
   */
  status: ReadSetImportJobItemStatus | undefined;

  /**
   * The source's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The source's subject ID.
   *
   * @public
   */
  subjectId: string | undefined;

  /**
   * The source's sample ID.
   *
   * @public
   */
  sampleId: string | undefined;

  /**
   * Where the source originated.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The source's genome reference ARN.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The source's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The source's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The source's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The source's read set ID.
   *
   * @public
   */
  readSetId?: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetImportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: ImportReadSetSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReadSetMetadataRequest {
  /**
   * The read set's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;
}

/**
 * Files in a read set.
 *
 * @public
 */
export interface ReadSetFiles {
  /**
   * The location of the first file in Amazon S3.
   *
   * @public
   */
  source1?: FileInformation | undefined;

  /**
   * The location of the second file in Amazon S3.
   *
   * @public
   */
  source2?: FileInformation | undefined;

  /**
   * The files' index.
   *
   * @public
   */
  index?: FileInformation | undefined;
}

/**
 * Details about a sequence.
 *
 * @public
 */
export interface SequenceInformation {
  /**
   * The sequence's total read count.
   *
   * @public
   */
  totalReadCount?: number | undefined;

  /**
   * The sequence's total base count.
   *
   * @public
   */
  totalBaseCount?: number | undefined;

  /**
   * Where the sequence originated.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The sequence's alignment setting.
   *
   * @public
   */
  alignment?: string | undefined;
}

/**
 * @public
 */
export interface GetReadSetMetadataResponse {
  /**
   * The read set's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The read set's subject ID.
   *
   * @public
   */
  subjectId?: string | undefined;

  /**
   * The read set's sample ID.
   *
   * @public
   */
  sampleId?: string | undefined;

  /**
   * The read set's status.
   *
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * The read set's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The read set's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The read set's file type.
   *
   * @public
   */
  fileType: FileType | undefined;

  /**
   * When the read set was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The read set's sequence information.
   *
   * @public
   */
  sequenceInformation?: SequenceInformation | undefined;

  /**
   * The read set's genome reference ARN.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The read set's files.
   *
   * @public
   */
  files?: ReadSetFiles | undefined;

  /**
   * The status message for a read set. It provides more detail as to why the read set has a status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The creation type of the read set.
   *
   * @public
   */
  creationType?: CreationType | undefined;

  /**
   * The entity tag (ETag) is a hash of the object meant to represent its semantic content.
   *
   * @public
   */
  etag?: ETag | undefined;

  /**
   * The read set's creation job ID.
   *
   * @public
   */
  creationJobId?: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceRequest {
  /**
   * The reference's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reference's store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The range to retrieve.
   *
   * @public
   */
  range?: string | undefined;

  /**
   * The part number to retrieve.
   *
   * @public
   */
  partNumber: number | undefined;

  /**
   * The file to retrieve.
   *
   * @public
   */
  file?: ReferenceFile | undefined;
}

/**
 * @public
 */
export interface GetReferenceResponse {
  /**
   * The reference file payload.
   *
   * @public
   */
  payload?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetReferenceImportJobRequest {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;
}

/**
 * An genome reference source.
 *
 * @public
 */
export interface ImportReferenceSourceItem {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  sourceFile?: string | undefined;

  /**
   * The source's status.
   *
   * @public
   */
  status: ReferenceImportJobItemStatus | undefined;

  /**
   * The source's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The source's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The source's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The source's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The source's reference ID.
   *
   * @public
   */
  referenceId?: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceImportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: ImportReferenceSourceItem[] | undefined;
}

/**
 * @public
 */
export interface GetReferenceMetadataRequest {
  /**
   * The reference's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reference's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;
}

/**
 * A set of genome reference files.
 *
 * @public
 */
export interface ReferenceFiles {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  source?: FileInformation | undefined;

  /**
   * The files' index.
   *
   * @public
   */
  index?: FileInformation | undefined;
}

/**
 * @public
 */
export interface GetReferenceMetadataResponse {
  /**
   * The reference's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reference's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The reference's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The reference's MD5 checksum.
   *
   * @public
   */
  md5: string | undefined;

  /**
   * The reference's status.
   *
   * @public
   */
  status?: ReferenceStatus | undefined;

  /**
   * The reference's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The reference's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * When the reference was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the reference was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The reference's files.
   *
   * @public
   */
  files?: ReferenceFiles | undefined;

  /**
   * The reference's creation type.
   *
   * @public
   */
  creationType?: ReferenceCreationType | undefined;

  /**
   * The reference's creation job ID.
   *
   * @public
   */
  creationJobId?: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceStoreRequest {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetReferenceStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetRunRequest {
  /**
   * The run's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The run's export format.
   *
   * @public
   */
  export?: RunExport[] | undefined;
}

/**
 * The URI for the run log.
 *
 * @public
 */
export interface RunLogLocation {
  /**
   * The log stream ARN for the engine log.
   *
   * @public
   */
  engineLogStream?: string | undefined;

  /**
   * The log stream ARN for the run log.
   *
   * @public
   */
  runLogStream?: string | undefined;
}

/**
 * @public
 */
export interface GetRunResponse {
  /**
   * The run's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The run's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The run cache associated with the run.
   *
   * @public
   */
  cacheId?: string | undefined;

  /**
   * The run cache behavior for the run.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * The actual Nextflow engine version that Amazon Web Services HealthOmics used for the run. The other workflow definition languages don't provide a value for this field.
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * The run's status.
   *
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * The run's workflow ID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The run's workflow type.
   *
   * @public
   */
  workflowType?: WorkflowType | undefined;

  /**
   * The run's ID.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The run's service role ARN.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The run's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The run's group ID.
   *
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * The run's batch ID.
   *
   * @public
   */
  batchId?: string | undefined;

  /**
   * The run's priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The run's definition.
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The run's digest.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * The run's parameters.
   *
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * The run's output URI.
   *
   * @public
   */
  outputUri?: string | undefined;

  /**
   * The run's log level.
   *
   * @public
   */
  logLevel?: RunLogLevel | undefined;

  /**
   * The run's resource digests.
   *
   * @public
   */
  resourceDigests?: Record<string, string> | undefined;

  /**
   * Who started the run.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * When the run was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * When the run started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The run's stop time.
   *
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * The run's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The run's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The computational accelerator used to run the workflow.
   *
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * The run's retention mode.
   *
   * @public
   */
  retentionMode?: RunRetentionMode | undefined;

  /**
   * The reason a run has failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The location of the run log.
   *
   * @public
   */
  logLocation?: RunLogLocation | undefined;

  /**
   * The universally unique identifier for a run.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * The destination for workflow outputs.
   *
   * @public
   */
  runOutputUri?: string | undefined;

  /**
   * The run's storage type.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The ID of the workflow owner.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * The workflow version name.
   *
   * @public
   */
  workflowVersionName?: string | undefined;

  /**
   * The universally unique identifier (UUID) value for the workflow.
   *
   * @public
   */
  workflowUuid?: string | undefined;

  /**
   * Configuration for run networking behavior. If absent, this will default to RESTRICTED.
   *
   * @public
   */
  networkingMode?: NetworkingMode | undefined;

  /**
   * Optional configuration for enabling scratch ephemeral storage mounted at /tmp. If absent, this will default to SHARED. This configuration is applicable only for CPU tasks. For tasks using GPUs, scratch storage is always LOCAL.
   *
   * @public
   */
  scratchStorageMode?: ScratchStorageMode | undefined;

  /**
   * Configuration details for the workflow run.
   *
   * @public
   */
  configuration?: ConfigurationDetails | undefined;

  /**
   * VPC configuration for the workflow run.
   *
   * @public
   */
  vpcConfig?: VpcConfigResponse | undefined;

  /**
   * The engine-specific settings for the workflow run.
   *
   * @public
   */
  engineSettings?: __DocumentType | undefined;

  /**
   * Inline policy json for scoping down permissions via a session policy on the IAM role.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * The service returns the value that the `StartRun` request specified for `outputUriPrefixMode`. The service returns `SERVICE_DEFINED` if the request did not specify a value.
   *
   * @public
   */
  outputUriPrefixMode?: RunOutputUriPrefixMode | undefined;
}

/**
 * @public
 */
export interface GetRunCacheRequest {
  /**
   * The identifier of the run cache to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunCacheResponse {
  /**
   * Unique resource identifier for the run cache.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The default cache behavior for runs using this cache.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * The identifier of the bucket owner.
   *
   * @public
   */
  cacheBucketOwnerId?: string | undefined;

  /**
   * The S3 URI where the cache data is stored.
   *
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * Creation time of the run cache (an ISO 8601 formatted string).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The run cache description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The run cache ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The run cache name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The run cache status.
   *
   * @public
   */
  status?: RunCacheStatus | undefined;

  /**
   * The tags associated with the run cache.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRunGroupRequest {
  /**
   * The group's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetRunGroupResponse {
  /**
   * The group's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The group's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The group's maximum number of CPUs to use.
   *
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * The maximum number of concurrent runs for the group.
   *
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * The group's maximum run time in minutes.
   *
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * When the group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The group's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The maximum GPUs that can be used by a run group.
   *
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface GetRunTaskRequest {
  /**
   * The workflow run ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The task's ID.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * Information about the container image used for a task.
 *
 * @public
 */
export interface ImageDetails {
  /**
   * The URI of the container image.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The container image digest. If the image URI was transformed, this will be the digest of the container image referenced by the transformed URI.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * URI of the source registry. If the URI is from a third-party registry, Amazon Web Services HealthOmics transforms the URI to the corresponding ECR path, using the pull-through cache mapping rules.
   *
   * @public
   */
  sourceImage?: string | undefined;
}

/**
 * @public
 */
export interface GetRunTaskResponse {
  /**
   * The task's ID.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The task's status.
   *
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * The task's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The task's CPU usage.
   *
   * @public
   */
  cpus?: number | undefined;

  /**
   * Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.
   *
   * @public
   */
  cacheHit?: boolean | undefined;

  /**
   * The S3 URI of the cache location.
   *
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * The task's memory use in gigabytes.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * When the task was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The task's start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The task's stop time.
   *
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * The task's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The task's log stream.
   *
   * @public
   */
  logStream?: string | undefined;

  /**
   * The number of Graphics Processing Units (GPU) specified in the task.
   *
   * @public
   */
  gpus?: number | undefined;

  /**
   * The instance type for a task.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The reason a task has failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Details about the container image that this task uses.
   *
   * @public
   */
  imageDetails?: ImageDetails | undefined;

  /**
   * The universally unique identifier (UUID) for the workflow task.
   *
   * @public
   */
  uuid?: string | undefined;
}

/**
 * @public
 */
export interface GetS3AccessPolicyRequest {
  /**
   * The S3 access point ARN that has the access policy.
   *
   * @public
   */
  s3AccessPointArn: string | undefined;
}

/**
 * @public
 */
export interface GetS3AccessPolicyResponse {
  /**
   * The S3 access point ARN that has the access policy.
   *
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * The Amazon Web Services-generated Sequence Store or Reference Store ID.
   *
   * @public
   */
  storeId?: string | undefined;

  /**
   * The type of store associated with the access point.
   *
   * @public
   */
  storeType?: StoreType | undefined;

  /**
   * The time when the policy was last updated.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * The current resource policy that controls S3 access on the store.
   *
   * @public
   */
  s3AccessPolicy: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface GetSequenceStoreRequest {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetSequenceStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * An S3 location that is used to store files that have failed a direct upload.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The S3 metadata of a sequence store, including the ARN and S3 URI of the S3 bucket.
   *
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;

  /**
   * The algorithm family of the ETag.
   *
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * The status of the sequence store.
   *
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * The status message of the sequence store.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
   *
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * The last-updated time of the sequence store.
   *
   * @public
   */
  updateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetShareRequest {
  /**
   * The ID of the share.
   *
   * @public
   */
  shareId: string | undefined;
}

/**
 * The details of a resource share.
 *
 * @public
 */
export interface ShareDetails {
  /**
   * The ID of the resource share.
   *
   * @public
   */
  shareId?: string | undefined;

  /**
   * The Arn of the shared resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The ID of the shared resource.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The principal subscriber is the account that is sharing the resource.
   *
   * @public
   */
  principalSubscriber?: string | undefined;

  /**
   * The account ID for the data owner. The owner creates the resource share.
   *
   * @public
   */
  ownerId?: string | undefined;

  /**
   * The status of the share.
   *
   * @public
   */
  status?: ShareStatus | undefined;

  /**
   * The status message for a resource share. It provides additional details about the share status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The name of the resource share.
   *
   * @public
   */
  shareName?: string | undefined;

  /**
   * The timestamp of when the resource share was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The timestamp of the resource share update.
   *
   * @public
   */
  updateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetShareResponse {
  /**
   * A resource share details object. The object includes the status, the resourceArn, and ownerId.
   *
   * @public
   */
  share?: ShareDetails | undefined;
}

/**
 * @public
 */
export interface GetVariantImportRequest {
  /**
   * The job's ID.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Details about an imported variant item.
 *
 * @public
 */
export interface VariantImportItemDetail {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The item's job status.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * A message that provides additional context about a job
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetVariantImportResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's destination variant store.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The job's status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's items.
   *
   * @public
   */
  items: VariantImportItemDetail[] | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization: boolean | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetVariantStoreRequest {
  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetVariantStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  storeArn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The store's tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;

  /**
   * The store's status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The store's size in bytes.
   *
   * @public
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The workflow's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The workflow's type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The export format for the workflow.
   *
   * @public
   */
  export?: WorkflowExport[] | undefined;

  /**
   * The ID of the workflow owner.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * The workflow's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The workflow's status.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The workflow's type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The workflow's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The workflow's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The workflow's engine.
   *
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * The workflow's definition.
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The path of the main definition file for the workflow.
   *
   * @public
   */
  main?: string | undefined;

  /**
   * The workflow's digest.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * The workflow's parameter template.
   *
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * When the workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The workflow's status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The workflow's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Gets metadata for the workflow.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The computational accelerator specified to run the workflow.
   *
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * The default storage type for runs using this workflow.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The universally unique identifier (UUID) value for this workflow.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * The registry map that this workflow is using.
   *
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * The README content for the workflow, providing documentation and usage information.
   *
   * @public
   */
  readme?: string | undefined;

  /**
   * Details about the source code repository that hosts the workflow definition files.
   *
   * @public
   */
  definitionRepositoryDetails?: DefinitionRepositoryDetails | undefined;

  /**
   * The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the `README.md` file from the root directory of the repository will be used.
   *
   * @public
   */
  readmePath?: string | undefined;

  /**
   * The list of Nextflow profiles that are available for this workflow. Profiles allow you to select predefined configuration settings at runtime.
   *
   * @public
   */
  profiles?: string[] | undefined;

  /**
   * A mapping of profile names to their parameter templates. Each profile defines its own set of parameters that you can use when starting a run with that profile.
   *
   * @public
   */
  profileParameterTemplates?: Record<string, Record<string, WorkflowParameter>> | undefined;
}

/**
 * @public
 */
export interface GetWorkflowVersionRequest {
  /**
   * The workflow's ID. The `workflowId` is not the UUID.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The workflow version name.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The workflow's type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The export format for the workflow.
   *
   * @public
   */
  export?: WorkflowExport[] | undefined;

  /**
   * The 12-digit account ID of the workflow owner. The workflow owner ID can be retrieved using the `GetShare` API operation. If you are the workflow owner, you do not need to include this ID.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowVersionResponse {
  /**
   * ARN of the workflow version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The workflow version name.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The accelerator for this workflow version.
   *
   * @public
   */
  accelerators?: Accelerators | undefined;

  /**
   * When the workflow version was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Description of the workflow version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Definition of the workflow version.
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The workflow version's digest.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * The workflow engine for this workflow version.
   *
   * @public
   */
  engine?: WorkflowEngine | undefined;

  /**
   * The path of the main definition file for the workflow.
   *
   * @public
   */
  main?: string | undefined;

  /**
   * The metadata for the workflow version.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The parameter template for the workflow version.
   *
   * @public
   */
  parameterTemplate?: Record<string, WorkflowParameter> | undefined;

  /**
   * The workflow version status
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The workflow version status message
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The default storage type for the run.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The default run storage capacity for static storage.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * The workflow version type
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The workflow version tags
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The universally unique identifier (UUID) value for this workflow version
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * Amazon Web Services Id of the owner of the bucket.
   *
   * @public
   */
  workflowBucketOwnerId?: string | undefined;

  /**
   * The registry map that this workflow version uses.
   *
   * @public
   */
  containerRegistryMap?: ContainerRegistryMap | undefined;

  /**
   * The README content for the workflow version, providing documentation and usage information specific to this version.
   *
   * @public
   */
  readme?: string | undefined;

  /**
   * Details about the source code repository that hosts the workflow version definition files.
   *
   * @public
   */
  definitionRepositoryDetails?: DefinitionRepositoryDetails | undefined;

  /**
   * The path to the workflow version README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the `README.md` file from the root directory of the repository will be used.
   *
   * @public
   */
  readmePath?: string | undefined;

  /**
   * The list of Nextflow profiles that are available for this workflow version. Profiles allow you to select predefined configuration settings at runtime.
   *
   * @public
   */
  profiles?: string[] | undefined;

  /**
   * A mapping of profile names to their parameter templates. Each profile defines its own set of parameters that you can use when starting a run with that profile.
   *
   * @public
   */
  profileParameterTemplates?: Record<string, Record<string, WorkflowParameter>> | undefined;
}

/**
 * A filter for import read set jobs.
 *
 * @public
 */
export interface ImportReadSetFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: ReadSetImportJobStatus | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * An import read set job.
 *
 * @public
 */
export interface ImportReadSetJobItem {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * A filter for import references.
 *
 * @public
 */
export interface ImportReferenceFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: ReferenceImportJobStatus | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * An import reference job.
 *
 * @public
 */
export interface ImportReferenceJobItem {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListBatchRequest {
  /**
   * The maximum number of batches to return. If not specified, defaults to 100.
   *
   * @public
   */
  maxItems?: number | undefined;

  /**
   * A pagination token returned from a prior `ListBatch` call.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * Filter batches by status.
   *
   * @public
   */
  status?: BatchStatus | undefined;

  /**
   * Filter batches by name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Filter batches by run group ID.
   *
   * @public
   */
  runGroupId?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchResponse {
  /**
   * A list of batch summary objects. See `BatchListItem`.
   *
   * @public
   */
  items?: BatchListItem[] | undefined;

  /**
   * A pagination token to retrieve the next page of results. Absent when no further results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsRequest {
  /**
   * The Sequence Store ID used for the multipart uploads.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The maximum number of multipart uploads returned in a page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads.
 *
 * @public
 */
export interface MultipartReadSetUploadListItem {
  /**
   * The sequence store ID used for the multipart upload.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the initiated multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The type of file the read set originated from.
   *
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * The read set source's subject ID.
   *
   * @public
   */
  subjectId: string | undefined;

  /**
   * The read set source's sample ID.
   *
   * @public
   */
  sampleId: string | undefined;

  /**
   * The source of an uploaded part.
   *
   * @public
   */
  generatedFrom: string | undefined;

  /**
   * The source's reference ARN.
   *
   * @public
   */
  referenceArn: string | undefined;

  /**
   * The name of a read set.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of a read set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Any tags you wish to add to a read set.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The time stamp for when a direct upload was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMultipartReadSetUploadsResponse {
  /**
   * Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of multipart uploads.
   *
   * @public
   */
  uploads?: MultipartReadSetUploadListItem[] | undefined;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsRequest {
  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The maximum number of read set activation jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ActivateReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetActivationJobsResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of jobs.
   *
   * @public
   */
  activationJobs?: ActivateReadSetJobItem[] | undefined;
}

/**
 * @public
 */
export interface ListReadSetExportJobsRequest {
  /**
   * The jobs' sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The maximum number of jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ExportReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetExportJobsResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of jobs.
   *
   * @public
   */
  exportJobs?: ExportReadSetJobDetail[] | undefined;
}

/**
 * @public
 */
export interface ListReadSetImportJobsRequest {
  /**
   * The maximum number of jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The jobs' sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ImportReadSetFilter | undefined;
}

/**
 * @public
 */
export interface ListReadSetImportJobsResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of jobs.
   *
   * @public
   */
  importJobs?: ImportReadSetJobItem[] | undefined;
}

/**
 * A filter for read sets.
 *
 * @public
 */
export interface ReadSetFilter {
  /**
   * A name to filter on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A status to filter on.
   *
   * @public
   */
  status?: ReadSetStatus | undefined;

  /**
   * A genome reference ARN to filter on.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The read set source's sample ID.
   *
   * @public
   */
  sampleId?: string | undefined;

  /**
   * The read set source's subject ID.
   *
   * @public
   */
  subjectId?: string | undefined;

  /**
   * Where the source originated.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The creation type of the read set.
   *
   * @public
   */
  creationType?: CreationType | undefined;
}

/**
 * @public
 */
export interface ListReadSetsRequest {
  /**
   * The jobs' sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The maximum number of read sets to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ReadSetFilter | undefined;
}

/**
 * A read set.
 *
 * @public
 */
export interface ReadSetListItem {
  /**
   * The read set's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The read set's subject ID.
   *
   * @public
   */
  subjectId?: string | undefined;

  /**
   * The read set's sample ID.
   *
   * @public
   */
  sampleId?: string | undefined;

  /**
   * The read set's status.
   *
   * @public
   */
  status: ReadSetStatus | undefined;

  /**
   * The read set's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The read set's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The read set's genome reference ARN.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The read set's file type.
   *
   * @public
   */
  fileType: FileType | undefined;

  /**
   * Details about a sequence.
   *
   * @public
   */
  sequenceInformation?: SequenceInformation | undefined;

  /**
   * When the read set was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The status for a read set. It provides more detail as to why the read set has a status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The creation type of the read set.
   *
   * @public
   */
  creationType?: CreationType | undefined;

  /**
   * The entity tag (ETag) is a hash of the object representing its semantic content.
   *
   * @public
   */
  etag?: ETag | undefined;
}

/**
 * @public
 */
export interface ListReadSetsResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of read sets.
   *
   * @public
   */
  readSets: ReadSetListItem[] | undefined;
}

/**
 * Filter settings that select for read set upload parts of interest.
 *
 * @public
 */
export interface ReadSetUploadPartListFilter {
  /**
   * Filters for read set uploads after a specified time.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * Filters for read set part uploads before a specified time.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsRequest {
  /**
   * The Sequence Store ID used for the multipart uploads.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the initiated multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The source file for the upload part.
   *
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * The maximum number of read set upload parts returned in a page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Attributes used to filter for a specific subset of read set part uploads.
   *
   * @public
   */
  filter?: ReadSetUploadPartListFilter | undefined;
}

/**
 * The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API.
 *
 * @public
 */
export interface ReadSetUploadPartListItem {
  /**
   * The number identifying the part in an upload.
   *
   * @public
   */
  partNumber: number | undefined;

  /**
   * The size of the the part in an upload.
   *
   * @public
   */
  partSize: number | undefined;

  /**
   * The origin of the part being direct uploaded.
   *
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * A unique identifier used to confirm that parts are being added to the correct upload.
   *
   * @public
   */
  checksum: string | undefined;

  /**
   * The time stamp for when a direct upload was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time stamp for the most recent update to an uploaded part.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListReadSetUploadPartsResponse {
  /**
   * Next token returned in the response of a previous ListReadSetUploadParts call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of upload parts.
   *
   * @public
   */
  parts?: ReadSetUploadPartListItem[] | undefined;
}

/**
 * @public
 */
export interface ListReferenceImportJobsRequest {
  /**
   * The maximum number of jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ImportReferenceFilter | undefined;
}

/**
 * @public
 */
export interface ListReferenceImportJobsResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A lis of jobs.
   *
   * @public
   */
  importJobs?: ImportReferenceJobItem[] | undefined;
}

/**
 * A filter for references.
 *
 * @public
 */
export interface ReferenceFilter {
  /**
   * A name to filter on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An MD5 checksum to filter on.
   *
   * @public
   */
  md5?: string | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListReferencesRequest {
  /**
   * The references' reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The maximum number of references to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ReferenceFilter | undefined;
}

/**
 * A genome reference.
 *
 * @public
 */
export interface ReferenceListItem {
  /**
   * The reference's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reference's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The reference's store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The reference's MD5 checksum.
   *
   * @public
   */
  md5: string | undefined;

  /**
   * The reference's status.
   *
   * @public
   */
  status?: ReferenceStatus | undefined;

  /**
   * The reference's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The reference's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * When the reference was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the reference was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferencesResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of references.
   *
   * @public
   */
  references: ReferenceListItem[] | undefined;
}

/**
 * A filter for reference stores.
 *
 * @public
 */
export interface ReferenceStoreFilter {
  /**
   * The name to filter on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresRequest {
  /**
   * The maximum number of stores to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ReferenceStoreFilter | undefined;
}

/**
 * Details about a reference store.
 *
 * @public
 */
export interface ReferenceStoreDetail {
  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListReferenceStoresResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of reference stores.
   *
   * @public
   */
  referenceStores: ReferenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRunCachesRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Optional pagination token returned from a prior call to the `ListRunCaches` API operation.
   *
   * @public
   */
  startingToken?: string | undefined;
}

/**
 * List entry for one run cache.
 *
 * @public
 */
export interface RunCacheListItem {
  /**
   * Unique resource identifier for the run cache.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Default cache behavior for the run cache.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * The S3 uri for the run cache data.
   *
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * The time that this run cache was created (an ISO 8601 formatted string).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The identifier for this run cache.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the run cache.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The run cache status.
   *
   * @public
   */
  status?: RunCacheStatus | undefined;
}

/**
 * @public
 */
export interface ListRunCachesResponse {
  /**
   * Details about each run cache in the response.
   *
   * @public
   */
  items?: RunCacheListItem[] | undefined;

  /**
   * Pagination token to retrieve additional run caches. If the response does not have a `nextToken`value, you have reached to the end of the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsRequest {
  /**
   * The run groups' name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * The maximum number of run groups to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A run group.
 *
 * @public
 */
export interface RunGroupListItem {
  /**
   * The group's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The group's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The group's maximum CPU count setting.
   *
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * The group's maximum concurrent run setting.
   *
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * The group's maximum duration setting in minutes.
   *
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * When the group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The maximum GPUs that can be used by a run group.
   *
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface ListRunGroupsResponse {
  /**
   * A list of groups.
   *
   * @public
   */
  items?: RunGroupListItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsRequest {
  /**
   * Filter the list by run name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Filter the list by run group ID.
   *
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * Filter by batch ID.
   *
   * @public
   */
  batchId?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * The maximum number of runs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of a run.
   *
   * @public
   */
  status?: RunStatus | undefined;
}

/**
 * A workflow run.
 *
 * @public
 */
export interface RunListItem {
  /**
   * The run's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The run's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The run's status.
   *
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * The run's workflow ID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The run's batch ID.
   *
   * @public
   */
  batchId?: string | undefined;

  /**
   * The run's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The run's priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * When the run was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * When the run started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the run stopped.
   *
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * The run's storage type.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The name of the workflow version.
   *
   * @public
   */
  workflowVersionName?: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsResponse {
  /**
   * A list of runs.
   *
   * @public
   */
  items?: RunListItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsInBatchRequest {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  batchId: string | undefined;

  /**
   * The maximum number of runs to return.
   *
   * @public
   */
  maxItems?: number | undefined;

  /**
   * A pagination token returned from a prior `ListRunsInBatch` call.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * Filter runs by submission status.
   *
   * @public
   */
  submissionStatus?: SubmissionStatus | undefined;

  /**
   * Filter runs by the customer-provided run setting ID.
   *
   * @public
   */
  runSettingId?: string | undefined;

  /**
   * Filter runs by the HealthOmics-generated run ID.
   *
   * @public
   */
  runId?: string | undefined;
}

/**
 * A single run entry returned by `ListRunsInBatch`.
 *
 * @public
 */
export interface RunBatchListItem {
  /**
   * The customer-provided identifier for the run configuration. Use this to correlate results back to the input configuration provided in `inlineSettings` or `s3UriSettings`.
   *
   * @public
   */
  runSettingId?: string | undefined;

  /**
   * The HealthOmics-generated identifier for the workflow run. Empty if submission failed.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * The universally unique identifier (UUID) for the run.
   *
   * @public
   */
  runInternalUuid?: string | undefined;

  /**
   * The unique ARN of the workflow run.
   *
   * @public
   */
  runArn?: string | undefined;

  /**
   * The submission outcome for this run.
   *
   * @public
   */
  submissionStatus?: SubmissionStatus | undefined;

  /**
   * The error category for a failed submission. See the run-level failure table in the HealthOmics User Guide for details on each value.
   *
   * @public
   */
  submissionFailureReason?: string | undefined;

  /**
   * A detailed message describing the submission failure.
   *
   * @public
   */
  submissionFailureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListRunsInBatchResponse {
  /**
   * A list of run entries in the batch. See `RunBatchListItem`.
   *
   * @public
   */
  runs?: RunBatchListItem[] | undefined;

  /**
   * A pagination token to retrieve the next page of results. Absent when the last run has been returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRunTasksRequest {
  /**
   * The run's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Filter the list by status.
   *
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * The maximum number of run tasks to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A workflow run task.
 *
 * @public
 */
export interface TaskListItem {
  /**
   * The task's ID.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The task's status.
   *
   * @public
   */
  status?: TaskStatus | undefined;

  /**
   * The task's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The task's CPU count.
   *
   * @public
   */
  cpus?: number | undefined;

  /**
   * Set to true if Amazon Web Services HealthOmics found a matching entry in the run cache for this task.
   *
   * @public
   */
  cacheHit?: boolean | undefined;

  /**
   * The S3 URI of the cache location.
   *
   * @public
   */
  cacheS3Uri?: string | undefined;

  /**
   * The task's memory use in gigabyes.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * When the task was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * When the task started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the task stopped.
   *
   * @public
   */
  stopTime?: Date | undefined;

  /**
   * The number of Graphics Processing Units (GPU) specified for the task.
   *
   * @public
   */
  gpus?: number | undefined;

  /**
   * The instance type for a task.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The universally unique identifier (UUID) for the workflow task.
   *
   * @public
   */
  uuid?: string | undefined;
}

/**
 * @public
 */
export interface ListRunTasksResponse {
  /**
   * A list of tasks.
   *
   * @public
   */
  items?: TaskListItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter for a sequence store.
 *
 * @public
 */
export interface SequenceStoreFilter {
  /**
   * A name to filter on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter's start date.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The filter's end date.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * Filter results based on status.
   *
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * Filter results based on stores updated after the specified time.
   *
   * @public
   */
  updatedAfter?: Date | undefined;

  /**
   * Filter results based on stores updated before the specified time.
   *
   * @public
   */
  updatedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListSequenceStoresRequest {
  /**
   * The maximum number of stores to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: SequenceStoreFilter | undefined;
}

/**
 * Details about a sequence store.
 *
 * @public
 */
export interface SequenceStoreDetail {
  /**
   * The store's ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * An S3 location that is used to store files that have failed a direct upload.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The algorithm family of the ETag.
   *
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;

  /**
   * Status of the sequence store.
   *
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * The status message of the sequence store.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The last-updated time of the Sequence Store.
   *
   * @public
   */
  updateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSequenceStoresResponse {
  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of sequence stores.
   *
   * @public
   */
  sequenceStores: SequenceStoreDetail[] | undefined;
}

/**
 * @public
 */
export interface ListSharesRequest {
  /**
   * The account that owns the resource shares.
   *
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * Attributes that you use to filter for a specific subset of resource shares.
   *
   * @public
   */
  filter?: Filter | undefined;

  /**
   * Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of shares to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSharesResponse {
  /**
   * The shares available and their metadata details.
   *
   * @public
   */
  shares: ShareDetails[] | undefined;

  /**
   * Next token returned in the response of a previous ListSharesResponse call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource's ARN.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * A filter for variant import jobs.
 *
 * @public
 */
export interface ListVariantImportJobsFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * A store name to filter on.
   *
   * @public
   */
  storeName?: string | undefined;
}

/**
 * @public
 */
export interface ListVariantImportJobsRequest {
  /**
   * The maximum number of import jobs to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A list of job IDs.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ListVariantImportJobsFilter | undefined;
}

/**
 * A variant import job.
 *
 * @public
 */
export interface VariantImportJobItem {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's destination variant store.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * When the job completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVariantImportJobsResponse {
  /**
   * A list of jobs.
   *
   * @public
   */
  variantImportJobs?: VariantImportJobItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter for variant stores.
 *
 * @public
 */
export interface ListVariantStoresFilter {
  /**
   * A status to filter on.
   *
   * @public
   */
  status?: StoreStatus | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresRequest {
  /**
   * The maximum number of stores to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A list of store IDs.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to apply to the list.
   *
   * @public
   */
  filter?: ListVariantStoresFilter | undefined;
}

/**
 * A variant store.
 *
 * @public
 */
export interface VariantStoreItem {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's ARN.
   *
   * @public
   */
  storeArn: string | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The store's server-side encryption (SSE) settings.
   *
   * @public
   */
  sseConfig: SseConfig | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The store's status message.
   *
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The store's size in bytes.
   *
   * @public
   */
  storeSizeBytes: number | undefined;
}

/**
 * @public
 */
export interface ListVariantStoresResponse {
  /**
   * A list of variant stores.
   *
   * @public
   */
  variantStores?: VariantStoreItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * Filter the list by workflow type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * Filter the list by workflow name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * The maximum number of workflows to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A workflow.
 *
 * @public
 */
export interface WorkflowListItem {
  /**
   * The workflow's ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The workflow's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The workflow's status.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The workflow's type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The workflow's digest.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * When the workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Any metadata available for workflow. The information listed may vary depending on the workflow, and there may also be no metadata to return.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * A list of workflow items.
   *
   * @public
   */
  items?: WorkflowListItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsRequest {
  /**
   * The workflow's ID. The `workflowId` is not the UUID.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The workflow type.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The 12-digit account ID of the workflow owner. The workflow owner ID can be retrieved using the `GetShare` API operation. If you are the workflow owner, you do not need to include this ID.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  startingToken?: string | undefined;

  /**
   * The maximum number of workflows to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A list of workflow version items.
 *
 * @public
 */
export interface WorkflowVersionListItem {
  /**
   * ARN of the workflow version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The workflow's ID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the workflow version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The description of the workflow version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the workflow version.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * The type of the workflow version.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The digist of the workflow version.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * The creation time of the workflow version.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Metadata for the workflow version.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsResponse {
  /**
   * A list of workflow version items.
   *
   * @public
   */
  items?: WorkflowVersionListItem[] | undefined;

  /**
   * A pagination token that's included if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutS3AccessPolicyRequest {
  /**
   * The S3 access point ARN where you want to put the access policy.
   *
   * @public
   */
  s3AccessPointArn: string | undefined;

  /**
   * The resource policy that controls S3 access to the store.
   *
   * @public
   */
  s3AccessPolicy: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface PutS3AccessPolicyResponse {
  /**
   * The S3 access point ARN that now has the access policy.
   *
   * @public
   */
  s3AccessPointArn?: string | undefined;

  /**
   * The Amazon Web Services-generated Sequence Store or Reference Store ID.
   *
   * @public
   */
  storeId?: string | undefined;

  /**
   * The type of store associated with the access point.
   *
   * @public
   */
  storeType?: StoreType | undefined;
}

/**
 * A source for a reference import job.
 *
 * @public
 */
export interface StartReferenceImportJobSourceItem {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  sourceFile: string | undefined;

  /**
   * The source's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The source's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The source's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartReferenceImportJobRequest {
  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * A service role for the job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * To ensure that jobs don't run multiple times, specify a unique token for each job.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: StartReferenceImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReferenceImportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The job's reference store ID.
   *
   * @public
   */
  referenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReferenceImportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface StartRunBatchRequest {
  /**
   * An optional user-friendly name for the run batch.
   *
   * @public
   */
  batchName?: string | undefined;

  /**
   * A client token used to deduplicate retry requests and prevent duplicate batches from being created.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * Amazon Web Services tags to associate with the batch resource. These tags are not inherited by individual runs. To tag individual runs, use `defaultRunSetting.runTags`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Shared configuration applied to all runs in the batch. See `DefaultRunSetting`.
   *
   * @public
   */
  defaultRunSetting: DefaultRunSetting | undefined;

  /**
   * The individual run configurations. Specify exactly one of `inlineSettings` or `s3UriSettings`. See `BatchRunSettings`.
   *
   * @public
   */
  batchRunSettings: BatchRunSettings | undefined;
}

/**
 * @public
 */
export interface StartRunBatchResponse {
  /**
   * The identifier portion of the run batch ARN.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The unique ARN of the run batch.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The initial status of the run batch. Returns `CREATING` while the batch is being initialized.
   *
   * @public
   */
  status?: BatchStatus | undefined;

  /**
   * The universally unique identifier (UUID) for the run batch.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * Amazon Web Services tags associated with the run batch.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRunCacheRequest {
  /**
   * Update the default run cache behavior.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * Update the run cache description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the run cache you want to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Update the name of the run cache.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRunGroupRequest {
  /**
   * The group's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A name for the group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The maximum number of CPUs to use.
   *
   * @public
   */
  maxCpus?: number | undefined;

  /**
   * The maximum number of concurrent runs for the group.
   *
   * @public
   */
  maxRuns?: number | undefined;

  /**
   * A maximum run time for the group in minutes.
   *
   * @public
   */
  maxDuration?: number | undefined;

  /**
   * The maximum GPUs that can be used by a run group.
   *
   * @public
   */
  maxGpus?: number | undefined;
}

/**
 * @public
 */
export interface StartRunRequest {
  /**
   * The run's workflow ID. The `workflowId` is not the UUID.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The run's workflow type. The `workflowType` must be specified if you are running a `READY2RUN` workflow. If you are running a `PRIVATE` workflow (default), you do not need to include the workflow type.
   *
   * @public
   */
  workflowType?: WorkflowType | undefined;

  /**
   * The ID of a run to duplicate.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * A service role for the run. The `roleArn` requires access to Amazon Web Services HealthOmics, S3, Cloudwatch logs, and EC2. An example `roleArn` is `arn:aws:iam::123456789012:role/omics-service-role-serviceRole-W8O1XMPL7QZ`. In this example, the Amazon Web Services account ID is `123456789012` and the role name is `omics-service-role-serviceRole-W8O1XMPL7QZ`.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A name for the run. This is recommended to view and organize runs in the Amazon Web Services HealthOmics console and CloudWatch logs.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Identifier of the cache associated with this run. If you don't specify a cache ID, no task outputs are cached for this run.
   *
   * @public
   */
  cacheId?: string | undefined;

  /**
   * The cache behavior for the run. You specify this value if you want to override the default behavior for the cache. You had set the default value when you created the cache. For more information, see [Run cache behavior](https://docs.aws.amazon.com/omics/latest/dev/how-run-cache.html#run-cache-behavior) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  cacheBehavior?: CacheBehavior | undefined;

  /**
   * The run's group ID. Use a run group to cap the compute resources (and number of concurrent runs) for the runs that you add to the run group.
   *
   * @public
   */
  runGroupId?: string | undefined;

  /**
   * Use the run priority (highest: 1) to establish the order of runs in a run group when you start a run. If multiple runs share the same priority, the run that was initiated first will have the higher priority. Runs that do not belong to a run group can be assigned a priority. The priorities of these runs are ranked among other runs that are not in a run group. For more information, see [Run priority](https://docs.aws.amazon.com/omics/latest/dev/creating-run-groups.html#run-priority) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Parameters for the run. The run needs all required parameters and can include optional parameters. The run cannot include any parameters that are not defined in the parameter template. To retrieve parameters from the run, use the GetRun API operation.
   *
   * @public
   */
  parameters?: __DocumentType | undefined;

  /**
   * The `STATIC` storage capacity (in gibibytes, GiB) for this run. The default run storage capacity is 1200 GiB. If your requested storage capacity is unavailable, the system rounds up the value to the nearest 1200 GiB multiple. If the requested storage capacity is still unavailable, the system rounds up the value to the nearest 2400 GiB multiple. This field is not required if the storage type is `DYNAMIC` (the system ignores any value that you enter).
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * An output S3 URI for the run. The S3 bucket must be in the same region as the workflow. The role ARN must have permission to write to this S3 bucket.
   *
   * @public
   */
  outputUri: string | undefined;

  /**
   * A log level for the run.
   *
   * @public
   */
  logLevel?: RunLogLevel | undefined;

  /**
   * Tags for the run. You can add up to 50 tags per run. For more information, see [Adding a tag](https://docs.aws.amazon.com/omics/latest/dev/add-a-tag.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An idempotency token used to dedupe retry requests so that duplicate runs are not created.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The retention mode for the run. The default value is `RETAIN`.
   *
   * Amazon Web Services HealthOmics stores a fixed number of runs that are available to the console and API. In the default mode (`RETAIN`), you need to remove runs manually when the number of run exceeds the maximum. If you set the retention mode to `REMOVE`, Amazon Web Services HealthOmics automatically removes runs (that have mode set to `REMOVE`) when the number of run exceeds the maximum. All run logs are available in CloudWatch logs, if you need information about a run that is no longer available to the API.
   *
   * For more information about retention mode, see [Specifying run retention mode](https://docs.aws.amazon.com/omics/latest/dev/starting-a-run.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  retentionMode?: RunRetentionMode | undefined;

  /**
   * The storage type for the run. If you set the storage type to `DYNAMIC`, Amazon Web Services HealthOmics dynamically scales the storage up or down, based on file system utilization. By default, the run uses `STATIC` storage type, which allocates a fixed amount of storage. For more information about `DYNAMIC` and `STATIC` storage, see [Run storage types](https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The 12-digit account ID of the workflow owner that is used for running a shared workflow. The workflow owner ID can be retrieved using the `GetShare` API operation. If you are the workflow owner, you do not need to include this ID.
   *
   * @public
   */
  workflowOwnerId?: string | undefined;

  /**
   * The name of the workflow version. Use workflow versions to track and organize changes to the workflow. If your workflow has multiple versions, the run uses the default version unless you specify a version name. To learn more, see [Workflow versioning](https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  workflowVersionName?: string | undefined;

  /**
   * Optional configuration for run networking behavior. If not specified, this will default to RESTRICTED.
   *
   * @public
   */
  networkingMode?: NetworkingMode | undefined;

  /**
   * Optional configuration for enabling scratch ephemeral storage mounted at /tmp. If not specified, this will default to SHARED. This configuration is applicable only for CPU tasks. For tasks using GPUs, scratch storage is always LOCAL.
   *
   * @public
   */
  scratchStorageMode?: ScratchStorageMode | undefined;

  /**
   * Optional configuration name to use for the workflow run.
   *
   * @public
   */
  configurationName?: string | undefined;

  /**
   * Optional inline policy json for scoping down permissions via a session policy on the IAM role provided in the roleArn parameter.
   *
   * @public
   */
  sessionPolicy?: string | undefined;

  /**
   * Engine-specific settings for the workflow run. Use this field to specify configuration options that are specific to the workflow engine (for example, Nextflow profiles).
   *
   * @public
   */
  engineSettings?: __DocumentType | undefined;

  /**
   * You can control the path prefixes that the service adds beneath `outputUri`. If you don't specify a value, the service uses `SERVICE_DEFINED`, which adds a run-specific prefix.
   *
   * @public
   */
  outputUriPrefixMode?: RunOutputUriPrefixMode | undefined;
}

/**
 * @public
 */
export interface StartRunResponse {
  /**
   * Unique resource identifier for the run.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The run's ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The run's status.
   *
   * @public
   */
  status?: RunStatus | undefined;

  /**
   * The run's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The universally unique identifier for a run.
   *
   * @public
   */
  uuid?: string | undefined;

  /**
   * The destination for workflow outputs.
   *
   * @public
   */
  runOutputUri?: string | undefined;

  /**
   * Configuration details for the workflow run.
   *
   * @public
   */
  configuration?: ConfigurationDetails | undefined;

  /**
   * Networking mode for the workflow run.
   *
   * @public
   */
  networkingMode?: string | undefined;
}

/**
 * A source for a read set activation job.
 *
 * @public
 */
export interface StartReadSetActivationJobSourceItem {
  /**
   * The source's read set ID.
   *
   * @public
   */
  readSetId: string | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobRequest {
  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * To ensure that jobs don't run multiple times, specify a unique token for each job.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: StartReadSetActivationJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetActivationJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetActivationJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobRequest {
  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * A location for exported files in Amazon S3.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * A service role for the job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * To ensure that jobs don't run multiple times, specify a unique token for each job.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: ExportReadSet[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetExportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's output location.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetExportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * A source for a read set import job.
 *
 * @public
 */
export interface StartReadSetImportJobSourceItem {
  /**
   * The source files' location in Amazon S3.
   *
   * @public
   */
  sourceFiles: SourceFiles | undefined;

  /**
   * The source's file type.
   *
   * @public
   */
  sourceFileType: FileType | undefined;

  /**
   * The source's subject ID.
   *
   * @public
   */
  subjectId: string | undefined;

  /**
   * The source's sample ID.
   *
   * @public
   */
  sampleId: string | undefined;

  /**
   * Where the source originated.
   *
   * @public
   */
  generatedFrom?: string | undefined;

  /**
   * The source's reference ARN.
   *
   * @public
   */
  referenceArn?: string | undefined;

  /**
   * The source's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The source's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The source's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartReadSetImportJobRequest {
  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * A service role for the job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * To ensure that jobs don't run multiple times, specify a unique token for each job.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job's source files.
   *
   * @public
   */
  sources: StartReadSetImportJobSourceItem[] | undefined;
}

/**
 * @public
 */
export interface StartReadSetImportJobResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The read set's sequence store ID.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The job's service role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The job's status.
   *
   * @public
   */
  status: ReadSetImportJobStatus | undefined;

  /**
   * When the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateSequenceStoreRequest {
  /**
   * The ID of the sequence store.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A name for the sequence store.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description for the sequence store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * To ensure that requests don't run multiple times, specify a unique token for each request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The S3 URI of a bucket and folder to store Read Sets that fail to upload.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
   *
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * S3 access configuration parameters.
   *
   * @public
   */
  s3AccessConfig?: S3AccessConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSequenceStoreResponse {
  /**
   * The ID of the sequence store.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the sequence store.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the sequence store.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description of the sequence store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Server-side encryption (SSE) settings for a store.
   *
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * The time when the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The last-updated time of the Sequence Store.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
   *
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * The status of the sequence store.
   *
   * @public
   */
  status?: SequenceStoreStatus | undefined;

  /**
   * The status message of the sequence store.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The S3 URI of a bucket and folder to store Read Sets that fail to upload.
   *
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * The S3 access metadata of the sequence store.
   *
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;

  /**
   * The ETag algorithm family to use on ingested read sets.
   *
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartRequest {
  /**
   * The Sequence Store ID used for the multipart upload.
   *
   * @public
   */
  sequenceStoreId: string | undefined;

  /**
   * The ID for the initiated multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The source file for an upload part.
   *
   * @public
   */
  partSource: ReadSetPartSource | undefined;

  /**
   * The number of the part being uploaded.
   *
   * @public
   */
  partNumber: number | undefined;

  /**
   * The read set data to upload for a part.
   *
   * @public
   */
  payload: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface UploadReadSetPartResponse {
  /**
   * An identifier used to confirm that parts are being added to the intended upload.
   *
   * @public
   */
  checksum: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource's ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags for the resource.
   *
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
   * The resource's ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Keys of tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A imported variant item's source.
 *
 * @public
 */
export interface VariantImportItemSource {
  /**
   * The source file's location in Amazon S3.
   *
   * @public
   */
  source: string | undefined;
}

/**
 * @public
 */
export interface StartVariantImportRequest {
  /**
   * The destination variant store for the job.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * A service role for the job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Items to import.
   *
   * @public
   */
  items: VariantImportItemSource[] | undefined;

  /**
   * The job's left normalization setting.
   *
   * @public
   */
  runLeftNormalization?: boolean | undefined;

  /**
   * The annotation schema generated by the parsed annotation data.
   *
   * @public
   */
  annotationFields?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartVariantImportResponse {
  /**
   * The job's ID.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariantStoreRequest {
  /**
   * A name for the store.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description for the store.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariantStoreResponse {
  /**
   * The store's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The store's genome reference.
   *
   * @public
   */
  reference: ReferenceItem | undefined;

  /**
   * The store's status.
   *
   * @public
   */
  status: StoreStatus | undefined;

  /**
   * The store's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The store's description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * When the store was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * When the store was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * The workflow's ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A name for the workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description for the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The default storage type for runs that use this workflow. STATIC storage allocates a fixed amount of storage. DYNAMIC storage dynamically scales the storage up or down, based on file system utilization. For more information about static and dynamic storage, see [Running workflows](https://docs.aws.amazon.com/omics/latest/dev/Using-workflows.html) in the *Amazon Web Services HealthOmics User Guide*.
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.
   *
   * @public
   */
  readmeMarkdown?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowVersionRequest {
  /**
   * The workflow's ID. The `workflowId` is not the UUID.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The name of the workflow version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * Description of the workflow version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The default storage type for runs that use this workflow version. The `storageType` can be overridden at run time. `DYNAMIC` storage dynamically scales the storage up or down, based on file system utilization. STATIC storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see [Run storage types](https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html) in the *in the *Amazon Web Services HealthOmics User Guide** .
   *
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * The default static storage capacity (in gibibytes) for runs that use this workflow version. The `storageCapacity` can be overwritten at run time. The storage capacity is not required for runs with a `DYNAMIC` storage type.
   *
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * The markdown content for the workflow version's README file. This provides documentation and usage information for users of this specific workflow version.
   *
   * @public
   */
  readmeMarkdown?: string | undefined;
}

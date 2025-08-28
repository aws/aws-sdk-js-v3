// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  ETagAlgorithmFamily,
  ReadSetImportJobStatus,
  ReadSetPartSource,
  ReferenceItem,
  S3AccessConfig,
  SequenceStoreS3Access,
  SequenceStoreStatus,
  SseConfig,
  StartReadSetImportJobSourceItem,
  StorageType,
  StoreStatus,
} from "./models_0";

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
  clientToken?: string | undefined;

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
export interface UpdateSequenceStoreRequest {
  /**
   * <p>The ID of the sequence store.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A name for the sequence store.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description for the sequence store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>To ensure that requests don't run multiple times, specify a unique token for each request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The S3 URI of a bucket and folder to store Read Sets that fail to upload.</p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</p>
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

  /**
   * <p>S3 access configuration parameters.</p>
   * @public
   */
  s3AccessConfig?: S3AccessConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSequenceStoreResponse {
  /**
   * <p>The ID of the sequence store.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the sequence store.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the sequence store.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Description of the sequence store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Server-side encryption (SSE) settings for a store.</p>
   * @public
   */
  sseConfig?: SseConfig | undefined;

  /**
   * <p>The time when the store was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last-updated time of the Sequence Store.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</p>
   * @public
   */
  propagatedSetLevelTags?: string[] | undefined;

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
   * <p>The S3 URI of a bucket and folder to store Read Sets that fail to upload.</p>
   * @public
   */
  fallbackLocation?: string | undefined;

  /**
   * <p>The S3 access metadata of the sequence store.</p>
   * @public
   */
  s3Access?: SequenceStoreS3Access | undefined;

  /**
   * <p>The ETag algorithm family to use on ingested read sets.</p>
   * @public
   */
  eTagAlgorithmFamily?: ETagAlgorithmFamily | undefined;
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
  description?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>A description for the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The default storage type for runs that use this workflow. STATIC storage allocates a fixed amount of storage. DYNAMIC storage dynamically scales the storage up or down, based on file system utilization. For more information about static and dynamic storage, see <a href="https://docs.aws.amazon.com/omics/latest/dev/Using-workflows.html">Running workflows</a> in the <i>Amazon Web Services HealthOmics User Guide</i>. </p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version. </p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.</p>
   * @public
   */
  readmeMarkdown?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowVersionRequest {
  /**
   * <p>The workflow's ID. The <code>workflowId</code> is not the UUID.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the workflow version.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>Description of the workflow version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The default storage type for runs that use this workflow version. The <code>storageType</code> can be overridden at run time. <code>DYNAMIC</code> storage dynamically scales the storage up or down, based on file system utilization. STATIC storage allocates a fixed amount of storage. For more information about dynamic and static storage types, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-run-types.html">Run storage types</a> in the <i>in the <i>Amazon Web Services HealthOmics User Guide</i> </i>.</p>
   * @public
   */
  storageType?: StorageType | undefined;

  /**
   * <p>The default static storage capacity (in gibibytes) for runs that use this workflow version. The <code>storageCapacity</code> can be overwritten at run time. The storage capacity is not required for runs with a <code>DYNAMIC</code> storage type.</p>
   * @public
   */
  storageCapacity?: number | undefined;

  /**
   * <p>The markdown content for the workflow version's README file. This provides documentation and usage information for users of this specific workflow version.</p>
   * @public
   */
  readmeMarkdown?: string | undefined;
}

/**
 * @internal
 */
export const UploadReadSetPartRequestFilterSensitiveLog = (obj: UploadReadSetPartRequest): any => ({
  ...obj,
});

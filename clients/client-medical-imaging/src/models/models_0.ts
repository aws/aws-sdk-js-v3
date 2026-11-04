// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  DatastoreStatus,
  ImageSetState,
  ImageSetWorkflowStatus,
  JobStatus,
  LosslessStorageFormat,
  Operator,
  SortField,
  SortOrder,
  StorageTier,
} from "./enums";

/**
 * Copy the destination image set.
 *
 * @public
 */
export interface CopyDestinationImageSet {
  /**
   * The image set identifier for the destination image set.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The latest version identifier for the destination image set.
   *
   * @public
   */
  latestVersionId: string | undefined;
}

/**
 * Contains copiable `Attributes` structure and wraps information related to specific copy use cases. For example, when copying subsets.
 *
 * @public
 */
export interface MetadataCopies {
  /**
   * The JSON string used to specify a subset of SOP Instances to copy from source to destination image set.
   *
   * @public
   */
  copiableAttributes: string | undefined;
}

/**
 * Copy source image set information.
 *
 * @public
 */
export interface CopySourceImageSetInformation {
  /**
   * The latest version identifier for the source image set.
   *
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * Contains `MetadataCopies` structure and wraps information related to specific copy use cases. For example, when copying subsets.
   *
   * @public
   */
  DICOMCopies?: MetadataCopies | undefined;
}

/**
 * Copy image set information.
 *
 * @public
 */
export interface CopyImageSetInformation {
  /**
   * The source image set.
   *
   * @public
   */
  sourceImageSet: CopySourceImageSetInformation | undefined;

  /**
   * The destination image set.
   *
   * @public
   */
  destinationImageSet?: CopyDestinationImageSet | undefined;
}

/**
 * @public
 */
export interface CopyImageSetRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The source image set identifier.
   *
   * @public
   */
  sourceImageSetId: string | undefined;

  /**
   * Copy image set information.
   *
   * @public
   */
  copyImageSetInformation: CopyImageSetInformation | undefined;

  /**
   * Providing this parameter will force completion of the `CopyImageSet` operation, even if there are inconsistent Patient, Study, and/or Series level metadata elements between the `sourceImageSet` and `destinationImageSet`.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * Providing this parameter will configure the `CopyImageSet` operation to promote the given image set to the primary DICOM hierarchy. If successful, a new primary image set ID will be returned as the destination image set.
   *
   * @public
   */
  promoteToPrimary?: boolean | undefined;
}

/**
 * Copy the image set properties of the destination image set.
 *
 * @public
 */
export interface CopyDestinationImageSetProperties {
  /**
   * The image set identifier of the copied image set properties.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The latest version identifier for the destination image set properties.
   *
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * The image set state of the destination image set properties.
   *
   * @public
   */
  imageSetState?: ImageSetState | undefined;

  /**
   * The image set workflow status of the destination image set properties.
   *
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * The timestamp when the destination image set properties were created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the destination image set properties were last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the destination image set.
   *
   * @public
   */
  imageSetArn?: string | undefined;
}

/**
 * Copy source image set properties.
 *
 * @public
 */
export interface CopySourceImageSetProperties {
  /**
   * The image set identifier for the copied source image set.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The latest version identifier for the copied source image set.
   *
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * The image set state of the copied source image set.
   *
   * @public
   */
  imageSetState?: ImageSetState | undefined;

  /**
   * The workflow status of the copied source image set.
   *
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * The timestamp when the source image set properties were created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the source image set properties were updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the source image set.
   *
   * @public
   */
  imageSetArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyImageSetResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The properties of the source image set.
   *
   * @public
   */
  sourceImageSetProperties: CopySourceImageSetProperties | undefined;

  /**
   * The properties of the destination image set.
   *
   * @public
   */
  destinationImageSetProperties: CopyDestinationImageSetProperties | undefined;
}

/**
 * @public
 */
export interface CreateDatastoreRequest {
  /**
   * The data store name.
   *
   * @public
   */
  datastoreName?: string | undefined;

  /**
   * A unique identifier for API idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags provided when creating a data store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The ARN of the authorizer's Lambda function.
   *
   * @public
   */
  lambdaAuthorizerArn?: string | undefined;

  /**
   * The lossless storage format for the datastore.
   *
   * @public
   */
  losslessStorageFormat?: LosslessStorageFormat | undefined;
}

/**
 * @public
 */
export interface CreateDatastoreResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface GetDatastoreRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;
}

/**
 * The properties associated with the data store.
 *
 * @public
 */
export interface DatastoreProperties {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The data store name.
   *
   * @public
   */
  datastoreName: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The ARN of the authorizer's Lambda function.
   *
   * @public
   */
  lambdaAuthorizerArn?: string | undefined;

  /**
   * The datastore's lossless storage format.
   *
   * @public
   */
  losslessStorageFormat?: LosslessStorageFormat | undefined;

  /**
   * The Amazon Resource Name (ARN) for the data store.
   *
   * @public
   */
  datastoreArn?: string | undefined;

  /**
   * The timestamp when the data store was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the data store was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDatastoreResponse {
  /**
   * The data store properties.
   *
   * @public
   */
  datastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface ListDatastoresRequest {
  /**
   * The data store status.
   *
   * @public
   */
  datastoreStatus?: DatastoreStatus | undefined;

  /**
   * The pagination token used to request the list of data stores on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Valid Range: Minimum value of 1. Maximum value of 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * List of summaries of data stores.
 *
 * @public
 */
export interface DatastoreSummary {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The data store name.
   *
   * @public
   */
  datastoreName: string | undefined;

  /**
   * The data store status.
   *
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) for the data store.
   *
   * @public
   */
  datastoreArn?: string | undefined;

  /**
   * The timestamp when the data store was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the data store was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatastoresResponse {
  /**
   * The list of summaries of data stores.
   *
   * @public
   */
  datastoreSummaries?: DatastoreSummary[] | undefined;

  /**
   * The pagination token used to retrieve the list of data stores on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageSetRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageSetResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set state.
   *
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * The image set workflow status.
   *
   * @public
   */
  imageSetWorkflowStatus: ImageSetWorkflowStatus | undefined;
}

/**
 * @public
 */
export interface GetDICOMImportJobRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The import job identifier.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Maps DCM files to their metadata.
 *
 * @public
 */
export interface DicomMetadataMapping {
  /**
   * The Study Instance UID that identifies the study.
   *
   * @public
   */
  studyInstanceUID: string | undefined;

  /**
   * The Series Instance UID that identifies the series. This parameter is optional because the mapping might be at the study level.
   *
   * @public
   */
  seriesInstanceUID?: string | undefined;

  /**
   * The path to the JSON metadata file relative to inputS3Uri.
   *
   * @public
   */
  metadataFilePath: string | undefined;
}

/**
 * The configuration parameters that are specific to DICOM JSON metadata import operations.
 *
 * @public
 */
export interface DicomJsonMetadataImportConfiguration {
  /**
   * Maps DCM files to their metadata.
   *
   * @public
   */
  dicomMetadataMappings: DicomMetadataMapping[] | undefined;
}

/**
 * The configuration options for different types of import operations.
 *
 * @public
 */
export type ImportConfiguration =
  | ImportConfiguration.DicomJsonMetadataImportConfigurationMember
  | ImportConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ImportConfiguration {
  /**
   * The configuration parameters that are specific to DICOM JSON metadata import operations.
   *
   * @public
   */
  export interface DicomJsonMetadataImportConfigurationMember {
    dicomJsonMetadataImportConfiguration: DicomJsonMetadataImportConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dicomJsonMetadataImportConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dicomJsonMetadataImportConfiguration: (value: DicomJsonMetadataImportConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Properties of the import job.
 *
 * @public
 */
export interface DICOMImportJobProperties {
  /**
   * The import job identifier.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The import job name.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The filters for listing import jobs based on status.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.
   *
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * The timestamp for when the import job was ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The timestamp for when the import job was submitted.
   *
   * @public
   */
  submittedAt?: Date | undefined;

  /**
   * The input prefix path for the S3 bucket that contains the DICOM P10 files to be imported.
   *
   * @public
   */
  inputS3Uri: string | undefined;

  /**
   * The output prefix of the S3 bucket to upload the results of the DICOM import job.
   *
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * The error message thrown if an import job fails.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The object containing `DicomJsonMetadataImportConfiguration`.
   *
   * @public
   */
  importConfiguration?: ImportConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDICOMImportJobResponse {
  /**
   * The properties of the import job.
   *
   * @public
   */
  jobProperties: DICOMImportJobProperties | undefined;
}

/**
 * Information about the image frame (pixel data) identifier.
 *
 * @public
 */
export interface ImageFrameInformation {
  /**
   * The image frame (pixel data) identifier.
   *
   * @public
   */
  imageFrameId: string | undefined;
}

/**
 * @public
 */
export interface GetImageFrameRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * Information about the image frame (pixel data) identifier.
   *
   * @public
   */
  imageFrameInformation: ImageFrameInformation | undefined;
}

/**
 * @public
 */
export interface GetImageFrameResponse {
  /**
   * The blob containing the aggregated image frame information.
   *
   * @public
   */
  imageFrameBlob: StreamingBlobTypes | undefined;

  /**
   * The format in which the image frame information is returned to the customer. Default is `application/octet-stream`.
   *
   * > **Note:**
   * >
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.1`, the returned `contentType` is `application/octet-stream`.
   * >
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.4.50`, the returned `contentType` is `image/jpeg`.
   * >
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.4.91`, the returned `contentType` is `image/j2c`.
   * >
   * > - If the stored transfer syntax is MPEG2, `1.2.840.10008.1.2.4.100`, `1.2.840.10008.1.2.4.100.1`, `1.2.840.10008.1.2.4.101`, or `1.2.840.10008.1.2.4.101.1`, the returned `contentType` is `video/mpeg`.
   * >
   * > - If the stored transfer syntax is MPEG-4 AVC/H.264, UID `1.2.840.10008.1.2.4.102`, `1.2.840.10008.1.2.4.102.1`, `1.2.840.10008.1.2.4.103`, `1.2.840.10008.1.2.4.103.1`, `1.2.840.10008.1.2.4.104`, `1.2.840.10008.1.2.4.104.1`, `1.2.840.10008.1.2.4.105`, `1.2.840.10008.1.2.4.105.1`, `1.2.840.10008.1.2.4.106`, or `1.2.840.10008.1.2.4.106.1`, the returned `contentType` is `video/mp4`.
   * >
   * > - If the stored transfer syntax is HEVC/H.265, UID `1.2.840.10008.1.2.4.107` or `1.2.840.10008.1.2.4.108`, the returned `contentType` is `video/H256`.
   * >
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.4.202` or if the stored transfer syntax is *missing*, the returned `contentType` is `image/jph`.
   * >
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.4.203`, the returned contentType is `image/jphc`.
   * > - If the stored transfer syntax is `1.2.840.10008.1.2.4.112` the returned `contentType` is `image/jxl`.
   *
   * @public
   */
  contentType?: string | undefined;
}

/**
 * @public
 */
export interface GetImageSetRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set version identifier.
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * Specifies the overrides used in image set modification calls to `CopyImageSet` and `UpdateImageSetMetadata`.
 *
 * @public
 */
export interface Overrides {
  /**
   * Providing this parameter will force completion of the `CopyImageSet` and `UpdateImageSetMetadata` actions, even if metadata is inconsistent at the Patient, Study, and/or Series levels.
   *
   * @public
   */
  forced?: boolean | undefined;
}

/**
 * @public
 */
export interface GetImageSetResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set version identifier.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The image set state.
   *
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * The image set workflow status.
   *
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * The timestamp when image set properties were created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when image set properties were updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The timestamp when the image set properties were deleted.
   *
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * The error message thrown if an image set action fails.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the image set.
   *
   * @public
   */
  imageSetArn?: string | undefined;

  /**
   * This object contains the details of any overrides used while creating a specific image set version. If an image set was copied or updated using the `force` flag, this object will contain the `forced` flag.
   *
   * @public
   */
  overrides?: Overrides | undefined;

  /**
   * The flag to determine whether the image set is primary or not.
   *
   * @public
   */
  isPrimary?: boolean | undefined;

  /**
   * When the image set was last accessed.
   *
   * @public
   */
  lastAccessedAt?: Date | undefined;

  /**
   * The storage tier of the image set.
   *
   * @public
   */
  storageTier?: StorageTier | undefined;
}

/**
 * @public
 */
export interface GetImageSetMetadataRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set version identifier.
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * @public
 */
export interface GetImageSetMetadataResponse {
  /**
   * The blob containing the aggregated metadata information for the image set.
   *
   * @public
   */
  imageSetMetadataBlob: StreamingBlobTypes | undefined;

  /**
   * The format in which the study metadata is returned to the customer. Default is `text/plain`.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The compression format in which image set metadata attributes are returned.
   *
   * @public
   */
  contentEncoding?: string | undefined;
}

/**
 * @public
 */
export interface ListDICOMImportJobsRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The filters for listing import jobs based on status.
   *
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * The pagination token used to request the list of import jobs on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The max results count. The upper bound is determined by load testing.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of import job.
 *
 * @public
 */
export interface DICOMImportJobSummary {
  /**
   * The import job identifier.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The import job name.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The filters for listing import jobs based on status.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.
   *
   * @public
   */
  dataAccessRoleArn?: string | undefined;

  /**
   * The timestamp when an import job ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The timestamp when an import job was submitted.
   *
   * @public
   */
  submittedAt?: Date | undefined;

  /**
   * The error message thrown if an import job fails.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDICOMImportJobsResponse {
  /**
   * A list of job summaries.
   *
   * @public
   */
  jobSummaries: DICOMImportJobSummary[] | undefined;

  /**
   * The pagination token used to retrieve the list of import jobs on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageSetVersionsRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The pagination token used to request the list of image set versions on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The max results count.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The image set properties.
 *
 * @public
 */
export interface ImageSetProperties {
  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set version identifier.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The image set state.
   *
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * The image set workflow status.
   *
   * @public
   */
  ImageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * The timestamp when the image set properties were created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the image set properties were updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The timestamp when the image set properties were deleted.
   *
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * The error message thrown if an image set action fails.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Contains details on overrides used when creating the returned version of an image set. For example, if `forced` exists, the `forced` flag was used when creating the image set.
   *
   * @public
   */
  overrides?: Overrides | undefined;

  /**
   * The flag to determine whether the image set is primary or not.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface ListImageSetVersionsResponse {
  /**
   * Lists all properties associated with an image set.
   *
   * @public
   */
  imageSetPropertiesList: ImageSetProperties[] | undefined;

  /**
   * The pagination token used to retrieve the list of image set versions on the next page.
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
   * The Amazon Resource Name (ARN) of the medical imaging resource to list tags for.
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
   * A list of all tags associated with a medical imaging resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The aggregated structure to store DICOM study date and study time for search capabilities.
 *
 * @public
 */
export interface DICOMStudyDateAndTime {
  /**
   * The DICOM study date provided in `yyMMdd` format.
   *
   * @public
   */
  DICOMStudyDate: string | undefined;

  /**
   * The DICOM study time provided in `HHmmss.FFFFFF` format.
   *
   * @public
   */
  DICOMStudyTime?: string | undefined;
}

/**
 * The search input attribute value.
 *
 * @public
 */
export type SearchByAttributeValue =
  | SearchByAttributeValue.DICOMAccessionNumberMember
  | SearchByAttributeValue.DICOMPatientIdMember
  | SearchByAttributeValue.DICOMSeriesInstanceUIDMember
  | SearchByAttributeValue.DICOMStudyDateAndTimeMember
  | SearchByAttributeValue.DICOMStudyIdMember
  | SearchByAttributeValue.DICOMStudyInstanceUIDMember
  | SearchByAttributeValue.CreatedAtMember
  | SearchByAttributeValue.IsPrimaryMember
  | SearchByAttributeValue.UpdatedAtMember
  | SearchByAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchByAttributeValue {
  /**
   * The patient ID input for search.
   *
   * @public
   */
  export interface DICOMPatientIdMember {
    DICOMPatientId: string;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The DICOM accession number for search.
   *
   * @public
   */
  export interface DICOMAccessionNumberMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber: string;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The DICOM study ID for search.
   *
   * @public
   */
  export interface DICOMStudyIdMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId: string;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The DICOM study instance UID for search.
   *
   * @public
   */
  export interface DICOMStudyInstanceUIDMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID: string;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The Series Instance UID input for search.
   *
   * @public
   */
  export interface DICOMSeriesInstanceUIDMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID: string;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The created at time of the image set provided for search.
   *
   * @public
   */
  export interface CreatedAtMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt: Date;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The timestamp input for search.
   *
   * @public
   */
  export interface UpdatedAtMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt: Date;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The aggregated structure containing DICOM study date and study time for search.
   *
   * @public
   */
  export interface DICOMStudyDateAndTimeMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime: DICOMStudyDateAndTime;
    isPrimary?: never;
    $unknown?: never;
  }

  /**
   * The primary image set flag provided for search.
   *
   * @public
   */
  export interface IsPrimaryMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    DICOMSeriesInstanceUID?: never;
    createdAt?: never;
    updatedAt?: never;
    DICOMStudyDateAndTime?: never;
    isPrimary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DICOMPatientId: (value: string) => T;
    DICOMAccessionNumber: (value: string) => T;
    DICOMStudyId: (value: string) => T;
    DICOMStudyInstanceUID: (value: string) => T;
    DICOMSeriesInstanceUID: (value: string) => T;
    createdAt: (value: Date) => T;
    updatedAt: (value: Date) => T;
    DICOMStudyDateAndTime: (value: DICOMStudyDateAndTime) => T;
    isPrimary: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The search filter.
 *
 * @public
 */
export interface SearchFilter {
  /**
   * The search filter values.
   *
   * @public
   */
  values: SearchByAttributeValue[] | undefined;

  /**
   * The search filter operator for `imageSetDateTime`.
   *
   * @public
   */
  operator: Operator | undefined;
}

/**
 * Sort search results.
 *
 * @public
 */
export interface Sort {
  /**
   * The sort order for search criteria.
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The sort field for search criteria.
   *
   * @public
   */
  sortField: SortField | undefined;
}

/**
 * The search criteria.
 *
 * @public
 */
export interface SearchCriteria {
  /**
   * The filters for the search criteria.
   *
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * The sort input for search criteria.
   *
   * @public
   */
  sort?: Sort | undefined;
}

/**
 * @public
 */
export interface SearchImageSetsRequest {
  /**
   * The identifier of the data store where the image sets reside.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The search criteria that filters by applying a maximum of 1 item to `SearchByAttribute`.
   *
   * @public
   */
  searchCriteria?: SearchCriteria | undefined;

  /**
   * The maximum number of results that can be returned in a search.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The DICOM attributes returned as a part of a response. Each image set has these properties as part of a search result.
 *
 * @public
 */
export interface DICOMTags {
  /**
   * The unique identifier for a patient in a DICOM Study.
   *
   * @public
   */
  DICOMPatientId?: string | undefined;

  /**
   * The patient name.
   *
   * @public
   */
  DICOMPatientName?: string | undefined;

  /**
   * The patient birth date.
   *
   * @public
   */
  DICOMPatientBirthDate?: string | undefined;

  /**
   * The patient sex.
   *
   * @public
   */
  DICOMPatientSex?: string | undefined;

  /**
   * The DICOM provided identifier for the Study Instance UID.
   *
   * @public
   */
  DICOMStudyInstanceUID?: string | undefined;

  /**
   * The DICOM provided identifier for the Study ID.
   *
   * @public
   */
  DICOMStudyId?: string | undefined;

  /**
   * The DICOM provided Study Description.
   *
   * @public
   */
  DICOMStudyDescription?: string | undefined;

  /**
   * The total number of series in the DICOM study.
   *
   * @public
   */
  DICOMNumberOfStudyRelatedSeries?: number | undefined;

  /**
   * The total number of instances in the DICOM study.
   *
   * @public
   */
  DICOMNumberOfStudyRelatedInstances?: number | undefined;

  /**
   * The accession number for the DICOM study.
   *
   * @public
   */
  DICOMAccessionNumber?: string | undefined;

  /**
   * The DICOM provided identifier for the Series Instance UID.
   *
   * @public
   */
  DICOMSeriesInstanceUID?: string | undefined;

  /**
   * The DICOM provided identifier for the series Modality.
   *
   * @public
   */
  DICOMSeriesModality?: string | undefined;

  /**
   * The DICOM provided identifier for the series Body Part Examined.
   *
   * @public
   */
  DICOMSeriesBodyPart?: string | undefined;

  /**
   * The DICOM provided identifier for the Series Number.
   *
   * @public
   */
  DICOMSeriesNumber?: number | undefined;

  /**
   * The study date.
   *
   * @public
   */
  DICOMStudyDate?: string | undefined;

  /**
   * The study time.
   *
   * @public
   */
  DICOMStudyTime?: string | undefined;
}

/**
 * Summary of the image set metadata.
 *
 * @public
 */
export interface ImageSetsMetadataSummary {
  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The image set version.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The time an image set is created. Sample creation date is provided in `1985-04-12T23:20:50.52Z` format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time an image set was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * When the image set was last accessed.
   *
   * @public
   */
  lastAccessedAt?: Date | undefined;

  /**
   * The image set's storage tier.
   *
   * @public
   */
  storageTier?: StorageTier | undefined;

  /**
   * The DICOM tags associated with the image set.
   *
   * @public
   */
  DICOMTags?: DICOMTags | undefined;

  /**
   * The flag to determine whether the image set is primary or not.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchImageSetsResponse {
  /**
   * The model containing the image set results.
   *
   * @public
   */
  imageSetsMetadataSummaries: ImageSetsMetadataSummary[] | undefined;

  /**
   * The sort order for image set search results.
   *
   * @public
   */
  sort?: Sort | undefined;

  /**
   * The token for pagination results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDICOMImportJobRequest {
  /**
   * The import job name.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants permission to access medical imaging resources.
   *
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * A unique identifier for API idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The input prefix path for the S3 bucket that contains the DICOM files to be imported.
   *
   * @public
   */
  inputS3Uri: string | undefined;

  /**
   * The output prefix of the S3 bucket to upload the results of the DICOM import job.
   *
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * The account ID of the source S3 bucket owner.
   *
   * @public
   */
  inputOwnerAccountId?: string | undefined;

  /**
   * The import configuration for the import job.
   *
   * @public
   */
  importConfiguration?: ImportConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDICOMImportJobResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The import job identifier.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The import job status.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * The timestamp when the import job was submitted.
   *
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the medical imaging resource that tags are being added to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The user-specified key and value tag pairs added to a medical imaging resource.
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
   * The Amazon Resource Name (ARN) of the medical imaging resource that tags are being removed from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys for the tags to be removed from the medical imaging resource.
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
 * The object containing `removableAttributes` and `updatableAttributes`.
 *
 * @public
 */
export interface DICOMUpdates {
  /**
   * The DICOM tags to be removed from `ImageSetMetadata`.
   *
   * @public
   */
  removableAttributes?: Uint8Array | undefined;

  /**
   * The DICOM tags that need to be updated in `ImageSetMetadata`.
   *
   * @public
   */
  updatableAttributes?: Uint8Array | undefined;
}

/**
 * Contains DICOMUpdates.
 *
 * @public
 */
export type MetadataUpdates =
  | MetadataUpdates.DICOMUpdatesMember
  | MetadataUpdates.RevertToVersionIdMember
  | MetadataUpdates.$UnknownMember;

/**
 * @public
 */
export namespace MetadataUpdates {
  /**
   * The object containing `removableAttributes` and `updatableAttributes`.
   *
   * @public
   */
  export interface DICOMUpdatesMember {
    DICOMUpdates: DICOMUpdates;
    revertToVersionId?: never;
    $unknown?: never;
  }

  /**
   * Specifies the previous image set version ID to revert the current image set back to.
   *
   * > **Note:** You must provide either `revertToVersionId` or `DICOMUpdates` in your request. A `ValidationException` error is thrown if both parameters are provided at the same time.
   *
   * @public
   */
  export interface RevertToVersionIdMember {
    DICOMUpdates?: never;
    revertToVersionId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DICOMUpdates?: never;
    revertToVersionId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DICOMUpdates: (value: DICOMUpdates) => T;
    revertToVersionId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateImageSetMetadataRequest {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The latest image set version identifier.
   *
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * Setting this flag will force the `UpdateImageSetMetadata` operation for the following attributes:
   *
   * - `Tag.StudyInstanceUID`, `Tag.SeriesInstanceUID`, `Tag.SOPInstanceUID`, and `Tag.StudyID`
   * - Adding, removing, or updating private tags for an individual SOP Instance
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * Flag to apply the metadata updates to all image sets in the same Study as the requested image set ID.
   *
   * @public
   */
  includeStudyImageSets?: boolean | undefined;

  /**
   * Update image set metadata updates.
   *
   * @public
   */
  updateImageSetMetadataUpdates: MetadataUpdates | undefined;
}

/**
 * @public
 */
export interface UpdateImageSetMetadataResponse {
  /**
   * The data store identifier.
   *
   * @public
   */
  datastoreId: string | undefined;

  /**
   * The image set identifier.
   *
   * @public
   */
  imageSetId: string | undefined;

  /**
   * The latest image set version identifier.
   *
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * The image set state.
   *
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * The image set workflow status.
   *
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * The timestamp when image set metadata was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when image set metadata was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The error message thrown if an update image set metadata action fails.
   *
   * @public
   */
  message?: string | undefined;
}

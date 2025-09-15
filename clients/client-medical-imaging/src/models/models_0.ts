// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import { MedicalImagingServiceException as __BaseException } from "./MedicalImagingServiceException";

/**
 * <p>The user does not have sufficient access to perform this action.</p>
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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * <p>Copy the destination image set.</p>
 * @public
 */
export interface CopyDestinationImageSet {
  /**
   * <p>The image set identifier for the destination image set.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The latest version identifier for the destination image set.</p>
   * @public
   */
  latestVersionId: string | undefined;
}

/**
 * <p>Contains copiable <code>Attributes</code> structure and wraps information related to specific copy use cases. For example, when copying subsets.</p>
 * @public
 */
export interface MetadataCopies {
  /**
   * <p>The JSON string used to specify a subset of SOP Instances to copy from source to destination image set.</p>
   * @public
   */
  copiableAttributes: string | undefined;
}

/**
 * <p>Copy source image set information.</p>
 * @public
 */
export interface CopySourceImageSetInformation {
  /**
   * <p>The latest version identifier for the source image set.</p>
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * <p>Contains <code>MetadataCopies</code> structure and wraps information related to specific copy use cases. For example, when copying subsets.</p>
   * @public
   */
  DICOMCopies?: MetadataCopies | undefined;
}

/**
 * <p>Copy image set information.</p>
 * @public
 */
export interface CopyImageSetInformation {
  /**
   * <p>The source image set.</p>
   * @public
   */
  sourceImageSet: CopySourceImageSetInformation | undefined;

  /**
   * <p>The destination image set.</p>
   * @public
   */
  destinationImageSet?: CopyDestinationImageSet | undefined;
}

/**
 * @public
 */
export interface CopyImageSetRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The source image set identifier.</p>
   * @public
   */
  sourceImageSetId: string | undefined;

  /**
   * <p>Copy image set information.</p>
   * @public
   */
  copyImageSetInformation: CopyImageSetInformation | undefined;

  /**
   * <p>Providing this parameter will force completion of the <code>CopyImageSet</code> operation, even if there are inconsistent Patient, Study, and/or Series level metadata elements between the <code>sourceImageSet</code> and <code>destinationImageSet</code>.</p>
   * @public
   */
  force?: boolean | undefined;

  /**
   * <p>Providing this parameter will configure the <code>CopyImageSet</code> operation to promote the given image set to the primary DICOM hierarchy. If successful, a new primary image set ID will be returned as the destination image set.</p>
   * @public
   */
  promoteToPrimary?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageSetState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  LOCKED: "LOCKED",
} as const;

/**
 * @public
 */
export type ImageSetState = (typeof ImageSetState)[keyof typeof ImageSetState];

/**
 * @public
 * @enum
 */
export const ImageSetWorkflowStatus = {
  COPIED: "COPIED",
  COPYING: "COPYING",
  COPYING_WITH_READ_ONLY_ACCESS: "COPYING_WITH_READ_ONLY_ACCESS",
  COPY_FAILED: "COPY_FAILED",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  IMPORTED: "IMPORTED",
  IMPORTING: "IMPORTING",
  IMPORT_FAILED: "IMPORT_FAILED",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ImageSetWorkflowStatus = (typeof ImageSetWorkflowStatus)[keyof typeof ImageSetWorkflowStatus];

/**
 * <p>Copy the image set properties of the destination image set.</p>
 * @public
 */
export interface CopyDestinationImageSetProperties {
  /**
   * <p>The image set identifier of the copied image set properties.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The latest version identifier for the destination image set properties.</p>
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * <p>The image set state of the destination image set properties.</p>
   * @public
   */
  imageSetState?: ImageSetState | undefined;

  /**
   * <p>The image set workflow status of the destination image set properties.</p>
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * <p>The timestamp when the destination image set properties were created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the destination image set properties were last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the destination image set.</p>
   * @public
   */
  imageSetArn?: string | undefined;
}

/**
 * <p>Copy source image set properties.</p>
 * @public
 */
export interface CopySourceImageSetProperties {
  /**
   * <p>The image set identifier for the copied source image set.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The latest version identifier for the copied source image set.</p>
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * <p>The image set state of the copied source image set.</p>
   * @public
   */
  imageSetState?: ImageSetState | undefined;

  /**
   * <p>The workflow status of the copied source image set.</p>
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * <p>The timestamp when the source image set properties were created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the source image set properties were updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the source image set.</p>
   * @public
   */
  imageSetArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyImageSetResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The properties of the source image set.</p>
   * @public
   */
  sourceImageSetProperties: CopySourceImageSetProperties | undefined;

  /**
   * <p>The properties of the destination image set.</p>
   * @public
   */
  destinationImageSetProperties: CopyDestinationImageSetProperties | undefined;
}

/**
 * <p>An unexpected error occurred during processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>The request references a resource which does not exist.</p>
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
 * <p>The request caused a service quota to be exceeded.</p>
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
 * <p>The request was denied due to throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * <p>The input fails to satisfy the constraints set by the service.</p>
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
 */
export interface CreateDatastoreRequest {
  /**
   * <p>The data store name.</p>
   * @public
   */
  datastoreName?: string | undefined;

  /**
   * <p>A unique identifier for API idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags provided when creating a data store.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   * @public
   */
  lambdaAuthorizerArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatastoreStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DatastoreStatus = (typeof DatastoreStatus)[keyof typeof DatastoreStatus];

/**
 * @public
 */
export interface CreateDatastoreResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface GetDatastoreRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;
}

/**
 * <p>The properties associated with the data store.</p>
 * @public
 */
export interface DatastoreProperties {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The data store name.</p>
   * @public
   */
  datastoreName: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the Key Management Service (KMS) key for accessing encrypted data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   * @public
   */
  lambdaAuthorizerArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   * @public
   */
  datastoreArn?: string | undefined;

  /**
   * <p>The timestamp when the data store was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the data store was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDatastoreResponse {
  /**
   * <p>The data store properties.</p>
   * @public
   */
  datastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface ListDatastoresRequest {
  /**
   * <p>The data store status.</p>
   * @public
   */
  datastoreStatus?: DatastoreStatus | undefined;

  /**
   * <p>The pagination token used to request the list of data stores on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Valid Range: Minimum value of 1. Maximum value of 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>List of summaries of data stores.</p>
 * @public
 */
export interface DatastoreSummary {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The data store name.</p>
   * @public
   */
  datastoreName: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   * @public
   */
  datastoreArn?: string | undefined;

  /**
   * <p>The timestamp when the data store was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the data store was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatastoresResponse {
  /**
   * <p>The list of summaries of data stores.</p>
   * @public
   */
  datastoreSummaries?: DatastoreSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the list of data stores on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageSetRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageSetResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set state.</p>
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * <p>The image set workflow status.</p>
   * @public
   */
  imageSetWorkflowStatus: ImageSetWorkflowStatus | undefined;
}

/**
 * @public
 */
export interface GetDICOMImportJobRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The import job identifier.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>Properties of the import job.</p>
 * @public
 */
export interface DICOMImportJobProperties {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The import job name.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The filters for listing import jobs based on status.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.</p>
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * <p>The timestamp for when the import job was ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The timestamp for when the import job was submitted.</p>
   * @public
   */
  submittedAt?: Date | undefined;

  /**
   * <p>The input prefix path for the S3 bucket that contains the DICOM P10 files to be imported.</p>
   * @public
   */
  inputS3Uri: string | undefined;

  /**
   * <p>The output prefix of the S3 bucket to upload the results of the DICOM import job.</p>
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * <p>The error message thrown if an import job fails.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetDICOMImportJobResponse {
  /**
   * <p>The properties of the import job.</p>
   * @public
   */
  jobProperties: DICOMImportJobProperties | undefined;
}

/**
 * <p>Information about the image frame (pixel data) identifier.</p>
 * @public
 */
export interface ImageFrameInformation {
  /**
   * <p>The image frame (pixel data) identifier.</p>
   * @public
   */
  imageFrameId: string | undefined;
}

/**
 * @public
 */
export interface GetImageFrameRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>Information about the image frame (pixel data) identifier.</p>
   * @public
   */
  imageFrameInformation: ImageFrameInformation | undefined;
}

/**
 * @public
 */
export interface GetImageFrameResponse {
  /**
   * <p>The blob containing the aggregated image frame information.</p>
   * @public
   */
  imageFrameBlob: StreamingBlobTypes | undefined;

  /**
   * <p>The format in which the image frame information is returned to the customer. Default is <code>application/octet-stream</code>.</p> <note> <ul> <li> <p>If the stored transfer syntax is <code>1.2.840.10008.1.2.1</code>, the returned <code>contentType</code> is <code>application/octet-stream</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is <code>1.2.840.10008.1.2.4.50</code>, the returned <code>contentType</code> is <code>image/jpeg</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is <code>1.2.840.10008.1.2.4.91</code>, the returned <code>contentType</code> is <code>image/j2c</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is MPEG2, <code>1.2.840.10008.1.2.4.100</code>, <code>1.2.840.10008.1.2.4.100.1</code>, <code>1.2.840.10008.1.2.4.101</code>, or <code>1.2.840.10008.1.2.4.101.1</code>, the returned <code>contentType</code> is <code>video/mpeg</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is MPEG-4 AVC/H.264, UID <code>1.2.840.10008.1.2.4.102</code>, <code>1.2.840.10008.1.2.4.102.1</code>, <code>1.2.840.10008.1.2.4.103</code>, <code>1.2.840.10008.1.2.4.103.1</code>, <code>1.2.840.10008.1.2.4.104</code>, <code>1.2.840.10008.1.2.4.104.1</code>, <code>1.2.840.10008.1.2.4.105</code>, <code>1.2.840.10008.1.2.4.105.1</code>, <code>1.2.840.10008.1.2.4.106</code>, or <code>1.2.840.10008.1.2.4.106.1</code>, the returned <code>contentType</code> is <code>video/mp4</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is HEVC/H.265, UID <code>1.2.840.10008.1.2.4.107</code> or <code>1.2.840.10008.1.2.4.108</code>, the returned <code>contentType</code> is <code>video/H256</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is <code>1.2.840.10008.1.2.4.202</code> or if the stored transfer syntax is <i>missing</i>, the returned <code>contentType</code> is <code>image/jph</code>.</p> </li> </ul> <ul> <li> <p>If the stored transfer syntax is <code>1.2.840.10008.1.2.4.203</code>, the returned contentType is <code>image/jphc</code>.</p> </li> </ul> </note>
   * @public
   */
  contentType?: string | undefined;
}

/**
 * @public
 */
export interface GetImageSetRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set version identifier.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>Specifies the overrides used in image set modification calls to <code>CopyImageSet</code> and <code>UpdateImageSetMetadata</code>.</p>
 * @public
 */
export interface Overrides {
  /**
   * <p>Providing this parameter will force completion of the <code>CopyImageSet</code> and <code>UpdateImageSetMetadata</code> actions, even if metadata is inconsistent at the Patient, Study, and/or Series levels.</p>
   * @public
   */
  forced?: boolean | undefined;
}

/**
 * @public
 */
export interface GetImageSetResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set version identifier.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The image set state.</p>
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * <p>The image set workflow status.</p>
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * <p>The timestamp when image set properties were created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when image set properties were updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the image set properties were deleted.</p>
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * <p>The error message thrown if an image set action fails.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the image set.</p>
   * @public
   */
  imageSetArn?: string | undefined;

  /**
   * <p>This object contains the details of any overrides used while creating a specific image set version. If an image set was copied or updated using the <code>force</code> flag, this object will contain the <code>forced</code> flag.</p>
   * @public
   */
  overrides?: Overrides | undefined;

  /**
   * <p>The flag to determine whether the image set is primary or not.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface GetImageSetMetadataRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set version identifier.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * @public
 */
export interface GetImageSetMetadataResponse {
  /**
   * <p>The blob containing the aggregated metadata information for the image set.</p>
   * @public
   */
  imageSetMetadataBlob: StreamingBlobTypes | undefined;

  /**
   * <p>The format in which the study metadata is returned to the customer. Default is <code>text/plain</code>.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The compression format in which image set metadata attributes are returned.</p>
   * @public
   */
  contentEncoding?: string | undefined;
}

/**
 * @public
 */
export interface ListDICOMImportJobsRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The filters for listing import jobs based on status.</p>
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * <p>The pagination token used to request the list of import jobs on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The max results count. The upper bound is determined by load testing.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary of import job.</p>
 * @public
 */
export interface DICOMImportJobSummary {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The import job name.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The filters for listing import jobs based on status.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.</p>
   * @public
   */
  dataAccessRoleArn?: string | undefined;

  /**
   * <p>The timestamp when an import job ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The timestamp when an import job was submitted.</p>
   * @public
   */
  submittedAt?: Date | undefined;

  /**
   * <p>The error message thrown if an import job fails.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDICOMImportJobsResponse {
  /**
   * <p>A list of job summaries.</p>
   * @public
   */
  jobSummaries: DICOMImportJobSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the list of import jobs on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageSetVersionsRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The pagination token used to request the list of image set versions on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The max results count.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The image set properties.</p>
 * @public
 */
export interface ImageSetProperties {
  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set version identifier.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The image set state.</p>
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * <p>The image set workflow status.</p>
   * @public
   */
  ImageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * <p>The timestamp when the image set properties were created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the image set properties were updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the image set properties were deleted.</p>
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * <p>The error message thrown if an image set action fails.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Contains details on overrides used when creating the returned version of an image set. For example, if <code>forced</code> exists, the <code>forced</code> flag was used when creating the image set.</p>
   * @public
   */
  overrides?: Overrides | undefined;

  /**
   * <p>The flag to determine whether the image set is primary or not.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface ListImageSetVersionsResponse {
  /**
   * <p>Lists all properties associated with an image set.</p>
   * @public
   */
  imageSetPropertiesList: ImageSetProperties[] | undefined;

  /**
   * <p>The pagination token used to retrieve the list of image set versions on the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of all tags associated with a medical imaging resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const Operator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>The aggregated structure to store DICOM study date and study time for search capabilities.</p>
 * @public
 */
export interface DICOMStudyDateAndTime {
  /**
   * <p>The DICOM study date provided in <code>yyMMdd</code> format.</p>
   * @public
   */
  DICOMStudyDate: string | undefined;

  /**
   * <p>The DICOM study time provided in <code>HHmmss.FFFFFF</code> format.</p>
   * @public
   */
  DICOMStudyTime?: string | undefined;
}

/**
 * <p>The search input attribute value.</p>
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
   * <p>The patient ID input for search.</p>
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
   * <p>The DICOM accession number for search.</p>
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
   * <p>The DICOM study ID for search.</p>
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
   * <p>The DICOM study instance UID for search.</p>
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
   * <p>The Series Instance UID input for search.</p>
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
   * <p>The created at time of the image set provided for search.</p>
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
   * <p>The timestamp input for search.</p>
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
   * <p>The aggregated structure containing DICOM study date and study time for search.</p>
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
   * <p>The primary image set flag provided for search.</p>
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

  export const visit = <T>(value: SearchByAttributeValue, visitor: Visitor<T>): T => {
    if (value.DICOMPatientId !== undefined) return visitor.DICOMPatientId(value.DICOMPatientId);
    if (value.DICOMAccessionNumber !== undefined) return visitor.DICOMAccessionNumber(value.DICOMAccessionNumber);
    if (value.DICOMStudyId !== undefined) return visitor.DICOMStudyId(value.DICOMStudyId);
    if (value.DICOMStudyInstanceUID !== undefined) return visitor.DICOMStudyInstanceUID(value.DICOMStudyInstanceUID);
    if (value.DICOMSeriesInstanceUID !== undefined) return visitor.DICOMSeriesInstanceUID(value.DICOMSeriesInstanceUID);
    if (value.createdAt !== undefined) return visitor.createdAt(value.createdAt);
    if (value.updatedAt !== undefined) return visitor.updatedAt(value.updatedAt);
    if (value.DICOMStudyDateAndTime !== undefined) return visitor.DICOMStudyDateAndTime(value.DICOMStudyDateAndTime);
    if (value.isPrimary !== undefined) return visitor.isPrimary(value.isPrimary);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The search filter.</p>
 * @public
 */
export interface SearchFilter {
  /**
   * <p>The search filter values.</p>
   * @public
   */
  values: SearchByAttributeValue[] | undefined;

  /**
   * <p>The search filter operator for <code>imageSetDateTime</code>.</p>
   * @public
   */
  operator: Operator | undefined;
}

/**
 * @public
 * @enum
 */
export const SortField = {
  DICOMStudyDateAndTime: "DICOMStudyDateAndTime",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;

/**
 * @public
 */
export type SortField = (typeof SortField)[keyof typeof SortField];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>Sort search results.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>The sort order for search criteria.</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The sort field for search criteria.</p>
   * @public
   */
  sortField: SortField | undefined;
}

/**
 * <p>The search criteria.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>The filters for the search criteria.</p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>The sort input for search criteria.</p>
   * @public
   */
  sort?: Sort | undefined;
}

/**
 * @public
 */
export interface SearchImageSetsRequest {
  /**
   * <p>The identifier of the data store where the image sets reside.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The search criteria that filters by applying a maximum of 1 item to <code>SearchByAttribute</code>.</p>
   * @public
   */
  searchCriteria?: SearchCriteria | undefined;

  /**
   * <p>The maximum number of results that can be returned in a search.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The DICOM attributes returned as a part of a response. Each image set has these properties as part of a search result.</p>
 * @public
 */
export interface DICOMTags {
  /**
   * <p>The unique identifier for a patient in a DICOM Study.</p>
   * @public
   */
  DICOMPatientId?: string | undefined;

  /**
   * <p>The patient name.</p>
   * @public
   */
  DICOMPatientName?: string | undefined;

  /**
   * <p>The patient birth date.</p>
   * @public
   */
  DICOMPatientBirthDate?: string | undefined;

  /**
   * <p>The patient sex.</p>
   * @public
   */
  DICOMPatientSex?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the Study Instance UID.</p>
   * @public
   */
  DICOMStudyInstanceUID?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the Study ID.</p>
   * @public
   */
  DICOMStudyId?: string | undefined;

  /**
   * <p>The DICOM provided Study Description.</p>
   * @public
   */
  DICOMStudyDescription?: string | undefined;

  /**
   * <p>The total number of series in the DICOM study.</p>
   * @public
   */
  DICOMNumberOfStudyRelatedSeries?: number | undefined;

  /**
   * <p>The total number of instances in the DICOM study.</p>
   * @public
   */
  DICOMNumberOfStudyRelatedInstances?: number | undefined;

  /**
   * <p>The accession number for the DICOM study.</p>
   * @public
   */
  DICOMAccessionNumber?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the Series Instance UID.</p>
   * @public
   */
  DICOMSeriesInstanceUID?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the series Modality.</p>
   * @public
   */
  DICOMSeriesModality?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the series Body Part Examined.</p>
   * @public
   */
  DICOMSeriesBodyPart?: string | undefined;

  /**
   * <p>The DICOM provided identifier for the Series Number.</p>
   * @public
   */
  DICOMSeriesNumber?: number | undefined;

  /**
   * <p>The study date.</p>
   * @public
   */
  DICOMStudyDate?: string | undefined;

  /**
   * <p>The study time.</p>
   * @public
   */
  DICOMStudyTime?: string | undefined;
}

/**
 * <p>Summary of the image set metadata.</p>
 * @public
 */
export interface ImageSetsMetadataSummary {
  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The image set version.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The time an image set is created. Sample creation date is provided in <code>1985-04-12T23:20:50.52Z</code> format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time an image set was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The DICOM tags associated with the image set.</p>
   * @public
   */
  DICOMTags?: DICOMTags | undefined;

  /**
   * <p>The flag to determine whether the image set is primary or not.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchImageSetsResponse {
  /**
   * <p>The model containing the image set results.</p>
   * @public
   */
  imageSetsMetadataSummaries: ImageSetsMetadataSummary[] | undefined;

  /**
   * <p>The sort order for image set search results.</p>
   * @public
   */
  sort?: Sort | undefined;

  /**
   * <p>The token for pagination results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDICOMImportJobRequest {
  /**
   * <p>The import job name.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants permission to access medical imaging resources.</p>
   * @public
   */
  dataAccessRoleArn: string | undefined;

  /**
   * <p>A unique identifier for API idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The input prefix path for the S3 bucket that contains the DICOM files to be imported.</p>
   * @public
   */
  inputS3Uri: string | undefined;

  /**
   * <p>The output prefix of the S3 bucket to upload the results of the DICOM import job.</p>
   * @public
   */
  outputS3Uri: string | undefined;

  /**
   * <p>The account ID of the source S3 bucket owner.</p>
   * @public
   */
  inputOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartDICOMImportJobResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The import job identifier.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The import job status.</p>
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>The timestamp when the import job was submitted.</p>
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource that tags are being added to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The user-specified key and value tag pairs added to a medical imaging resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource that tags are being removed from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys for the tags to be removed from the medical imaging resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>.</p>
 * @public
 */
export interface DICOMUpdates {
  /**
   * <p>The DICOM tags to be removed from <code>ImageSetMetadata</code>.</p>
   * @public
   */
  removableAttributes?: Uint8Array | undefined;

  /**
   * <p>The DICOM tags that need to be updated in <code>ImageSetMetadata</code>.</p>
   * @public
   */
  updatableAttributes?: Uint8Array | undefined;
}

/**
 * <p>Contains DICOMUpdates.</p>
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
   * <p>The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>.</p>
   * @public
   */
  export interface DICOMUpdatesMember {
    DICOMUpdates: DICOMUpdates;
    revertToVersionId?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies the previous image set version ID to revert the current image set back to.</p> <note> <p>You must provide either <code>revertToVersionId</code> or <code>DICOMUpdates</code> in your request. A <code>ValidationException</code> error is thrown if both parameters are provided at the same time.</p> </note>
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

  export interface Visitor<T> {
    DICOMUpdates: (value: DICOMUpdates) => T;
    revertToVersionId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetadataUpdates, visitor: Visitor<T>): T => {
    if (value.DICOMUpdates !== undefined) return visitor.DICOMUpdates(value.DICOMUpdates);
    if (value.revertToVersionId !== undefined) return visitor.revertToVersionId(value.revertToVersionId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateImageSetMetadataRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The latest image set version identifier.</p>
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * <p>Setting this flag will force the <code>UpdateImageSetMetadata</code> operation for the following attributes:</p> <ul> <li> <p> <code>Tag.StudyInstanceUID</code>, <code>Tag.SeriesInstanceUID</code>, <code>Tag.SOPInstanceUID</code>, and <code>Tag.StudyID</code> </p> </li> <li> <p>Adding, removing, or updating private tags for an individual SOP Instance</p> </li> </ul>
   * @public
   */
  force?: boolean | undefined;

  /**
   * <p>Update image set metadata updates.</p>
   * @public
   */
  updateImageSetMetadataUpdates: MetadataUpdates | undefined;
}

/**
 * @public
 */
export interface UpdateImageSetMetadataResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  datastoreId: string | undefined;

  /**
   * <p>The image set identifier.</p>
   * @public
   */
  imageSetId: string | undefined;

  /**
   * <p>The latest image set version identifier.</p>
   * @public
   */
  latestVersionId: string | undefined;

  /**
   * <p>The image set state.</p>
   * @public
   */
  imageSetState: ImageSetState | undefined;

  /**
   * <p>The image set workflow status.</p>
   * @public
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus | undefined;

  /**
   * <p>The timestamp when image set metadata was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when image set metadata was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The error message thrown if an update image set metadata action fails.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @internal
 */
export const MetadataCopiesFilterSensitiveLog = (obj: MetadataCopies): any => ({
  ...obj,
  ...(obj.copiableAttributes && { copiableAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CopySourceImageSetInformationFilterSensitiveLog = (obj: CopySourceImageSetInformation): any => ({
  ...obj,
  ...(obj.DICOMCopies && { DICOMCopies: MetadataCopiesFilterSensitiveLog(obj.DICOMCopies) }),
});

/**
 * @internal
 */
export const CopyImageSetInformationFilterSensitiveLog = (obj: CopyImageSetInformation): any => ({
  ...obj,
  ...(obj.sourceImageSet && { sourceImageSet: CopySourceImageSetInformationFilterSensitiveLog(obj.sourceImageSet) }),
});

/**
 * @internal
 */
export const CopyImageSetRequestFilterSensitiveLog = (obj: CopyImageSetRequest): any => ({
  ...obj,
  ...(obj.copyImageSetInformation && {
    copyImageSetInformation: CopyImageSetInformationFilterSensitiveLog(obj.copyImageSetInformation),
  }),
});

/**
 * @internal
 */
export const GetImageFrameResponseFilterSensitiveLog = (obj: GetImageFrameResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageSetMetadataResponseFilterSensitiveLog = (obj: GetImageSetMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DICOMStudyDateAndTimeFilterSensitiveLog = (obj: DICOMStudyDateAndTime): any => ({
  ...obj,
  ...(obj.DICOMStudyDate && { DICOMStudyDate: SENSITIVE_STRING }),
  ...(obj.DICOMStudyTime && { DICOMStudyTime: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchByAttributeValueFilterSensitiveLog = (obj: SearchByAttributeValue): any => {
  if (obj.DICOMPatientId !== undefined) return { DICOMPatientId: SENSITIVE_STRING };
  if (obj.DICOMAccessionNumber !== undefined) return { DICOMAccessionNumber: SENSITIVE_STRING };
  if (obj.DICOMStudyId !== undefined) return { DICOMStudyId: SENSITIVE_STRING };
  if (obj.DICOMStudyInstanceUID !== undefined) return { DICOMStudyInstanceUID: SENSITIVE_STRING };
  if (obj.DICOMSeriesInstanceUID !== undefined) return { DICOMSeriesInstanceUID: SENSITIVE_STRING };
  if (obj.createdAt !== undefined) return { createdAt: obj.createdAt };
  if (obj.updatedAt !== undefined) return { updatedAt: obj.updatedAt };
  if (obj.DICOMStudyDateAndTime !== undefined)
    return { DICOMStudyDateAndTime: DICOMStudyDateAndTimeFilterSensitiveLog(obj.DICOMStudyDateAndTime) };
  if (obj.isPrimary !== undefined) return { isPrimary: obj.isPrimary };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SearchFilterFilterSensitiveLog = (obj: SearchFilter): any => ({
  ...obj,
  ...(obj.values && { values: obj.values.map((item) => SearchByAttributeValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchCriteriaFilterSensitiveLog = (obj: SearchCriteria): any => ({
  ...obj,
  ...(obj.filters && { filters: obj.filters.map((item) => SearchFilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchImageSetsRequestFilterSensitiveLog = (obj: SearchImageSetsRequest): any => ({
  ...obj,
  ...(obj.searchCriteria && { searchCriteria: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DICOMTagsFilterSensitiveLog = (obj: DICOMTags): any => ({
  ...obj,
  ...(obj.DICOMPatientId && { DICOMPatientId: SENSITIVE_STRING }),
  ...(obj.DICOMPatientName && { DICOMPatientName: SENSITIVE_STRING }),
  ...(obj.DICOMPatientBirthDate && { DICOMPatientBirthDate: SENSITIVE_STRING }),
  ...(obj.DICOMPatientSex && { DICOMPatientSex: SENSITIVE_STRING }),
  ...(obj.DICOMStudyInstanceUID && { DICOMStudyInstanceUID: SENSITIVE_STRING }),
  ...(obj.DICOMStudyId && { DICOMStudyId: SENSITIVE_STRING }),
  ...(obj.DICOMStudyDescription && { DICOMStudyDescription: SENSITIVE_STRING }),
  ...(obj.DICOMAccessionNumber && { DICOMAccessionNumber: SENSITIVE_STRING }),
  ...(obj.DICOMSeriesInstanceUID && { DICOMSeriesInstanceUID: SENSITIVE_STRING }),
  ...(obj.DICOMSeriesModality && { DICOMSeriesModality: SENSITIVE_STRING }),
  ...(obj.DICOMSeriesBodyPart && { DICOMSeriesBodyPart: SENSITIVE_STRING }),
  ...(obj.DICOMSeriesNumber && { DICOMSeriesNumber: SENSITIVE_STRING }),
  ...(obj.DICOMStudyDate && { DICOMStudyDate: SENSITIVE_STRING }),
  ...(obj.DICOMStudyTime && { DICOMStudyTime: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImageSetsMetadataSummaryFilterSensitiveLog = (obj: ImageSetsMetadataSummary): any => ({
  ...obj,
  ...(obj.DICOMTags && { DICOMTags: DICOMTagsFilterSensitiveLog(obj.DICOMTags) }),
});

/**
 * @internal
 */
export const SearchImageSetsResponseFilterSensitiveLog = (obj: SearchImageSetsResponse): any => ({
  ...obj,
  ...(obj.imageSetsMetadataSummaries && {
    imageSetsMetadataSummaries: obj.imageSetsMetadataSummaries.map((item) =>
      ImageSetsMetadataSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const DICOMUpdatesFilterSensitiveLog = (obj: DICOMUpdates): any => ({
  ...obj,
  ...(obj.removableAttributes && { removableAttributes: SENSITIVE_STRING }),
  ...(obj.updatableAttributes && { updatableAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MetadataUpdatesFilterSensitiveLog = (obj: MetadataUpdates): any => {
  if (obj.DICOMUpdates !== undefined) return { DICOMUpdates: DICOMUpdatesFilterSensitiveLog(obj.DICOMUpdates) };
  if (obj.revertToVersionId !== undefined) return { revertToVersionId: obj.revertToVersionId };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const UpdateImageSetMetadataRequestFilterSensitiveLog = (obj: UpdateImageSetMetadataRequest): any => ({
  ...obj,
  ...(obj.updateImageSetMetadataUpdates && {
    updateImageSetMetadataUpdates: MetadataUpdatesFilterSensitiveLog(obj.updateImageSetMetadataUpdates),
  }),
});

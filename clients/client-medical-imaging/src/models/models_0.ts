// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { MedicalImagingServiceException as __BaseException } from "./MedicalImagingServiceException";

/**
 * @public
 * <p>The user does not have sufficient access to perform this action.</p>
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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * <p>Copy the destination image set.</p>
 */
export interface CopyDestinationImageSet {
  /**
   * @public
   * <p>The image set identifier for the destination image set.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The latest version identifier for the destination image set.</p>
   */
  latestVersionId: string | undefined;
}

/**
 * @public
 * <p>Copy source image set information.</p>
 */
export interface CopySourceImageSetInformation {
  /**
   * @public
   * <p>The latest version identifier for the source image set.</p>
   */
  latestVersionId: string | undefined;
}

/**
 * @public
 * <p>Copy image set information.</p>
 */
export interface CopyImageSetInformation {
  /**
   * @public
   * <p>The source image set.</p>
   */
  sourceImageSet: CopySourceImageSetInformation | undefined;

  /**
   * @public
   * <p>The destination image set.</p>
   */
  destinationImageSet?: CopyDestinationImageSet;
}

/**
 * @public
 */
export interface CopyImageSetRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The source image set identifier.</p>
   */
  sourceImageSetId: string | undefined;

  /**
   * @public
   * <p>Copy image set information.</p>
   */
  copyImageSetInformation: CopyImageSetInformation | undefined;
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
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ImageSetWorkflowStatus = (typeof ImageSetWorkflowStatus)[keyof typeof ImageSetWorkflowStatus];

/**
 * @public
 * <p>Copy the image set properties of the destination image set.</p>
 */
export interface CopyDestinationImageSetProperties {
  /**
   * @public
   * <p>The image set identifier of the copied image set properties.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The latest version identifier for the destination image set properties.</p>
   */
  latestVersionId: string | undefined;

  /**
   * @public
   * <p>The image set state of the destination image set properties.</p>
   */
  imageSetState?: ImageSetState;

  /**
   * @public
   * <p>The image set workflow status of the destination image set properties.</p>
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;

  /**
   * @public
   * <p>The timestamp when the destination image set properties were created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the destination image set properties were last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the destination image set.</p>
   */
  imageSetArn?: string;
}

/**
 * @public
 * <p>Copy source image set properties.</p>
 */
export interface CopySourceImageSetProperties {
  /**
   * @public
   * <p>The image set identifier for the copied source image set.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The latest version identifier for the copied source image set.</p>
   */
  latestVersionId: string | undefined;

  /**
   * @public
   * <p>The image set state of the copied source image set.</p>
   */
  imageSetState?: ImageSetState;

  /**
   * @public
   * <p>The workflow status of the copied source image set.</p>
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;

  /**
   * @public
   * <p>The timestamp when the source image set properties were created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the source image set properties were updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the source image set.</p>
   */
  imageSetArn?: string;
}

/**
 * @public
 */
export interface CopyImageSetResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The properties of the source image set.</p>
   */
  sourceImageSetProperties: CopySourceImageSetProperties | undefined;

  /**
   * @public
   * <p>The properties of the destination image set.</p>
   */
  destinationImageSetProperties: CopyDestinationImageSetProperties | undefined;
}

/**
 * @public
 * <p>An unexpected error occurred during processing of the request.</p>
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
 * @public
 * <p>The request references a resource which does not exist.</p>
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
 * <p>The request caused a service quota to be exceeded.</p>
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
 * <p>The request was denied due to throttling.</p>
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
 */
export interface CreateDatastoreRequest {
  /**
   * @public
   * <p>The data store name.</p>
   */
  datastoreName?: string;

  /**
   * @public
   * <p>A unique identifier for API idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags provided when creating a data store.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the AWS Key Management Service (AWS KMS) key for accessing encrypted data.</p>
   */
  kmsKeyArn?: string;
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
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The data store status.</p>
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The data store status.</p>
   */
  datastoreStatus: DatastoreStatus | undefined;
}

/**
 * @public
 */
export interface GetDatastoreRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;
}

/**
 * @public
 * <p>The properties associated with the data store.</p>
 */
export interface DatastoreProperties {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The data store name.</p>
   */
  datastoreName: string | undefined;

  /**
   * @public
   * <p>The data store status.</p>
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the AWS Key Management Service (AWS KMS) key for accessing encrypted data.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   */
  datastoreArn?: string;

  /**
   * @public
   * <p>The timestamp when the data store was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the data store was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetDatastoreResponse {
  /**
   * @public
   * <p>The data store properties.</p>
   */
  datastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface ListDatastoresRequest {
  /**
   * @public
   * <p>The data store status.</p>
   */
  datastoreStatus?: DatastoreStatus;

  /**
   * @public
   * <p>The pagination token used to request the list of data stores on the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Valid Range: Minimum value of 1. Maximum value of 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>List of summaries of data stores.</p>
 */
export interface DatastoreSummary {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The data store name.</p>
   */
  datastoreName: string | undefined;

  /**
   * @public
   * <p>The data store status.</p>
   */
  datastoreStatus: DatastoreStatus | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   */
  datastoreArn?: string;

  /**
   * @public
   * <p>The timestamp when the data store was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the data store was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListDatastoresResponse {
  /**
   * @public
   * <p>The list of summaries of data stores.</p>
   */
  datastoreSummaries?: DatastoreSummary[];

  /**
   * @public
   * <p>The pagination token used to retrieve the list of data stores on the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DeleteImageSetRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageSetResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set state.</p>
   */
  imageSetState: ImageSetState | undefined;

  /**
   * @public
   * <p>The image set workflow status.</p>
   */
  imageSetWorkflowStatus: ImageSetWorkflowStatus | undefined;
}

/**
 * @public
 */
export interface GetDICOMImportJobRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The import job identifier.</p>
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
 * @public
 * <p>Properties of the import job.</p>
 */
export interface DICOMImportJobProperties {
  /**
   * @public
   * <p>The import job identifier.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The import job name.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>The filters for listing import jobs based on status.</p>
   */
  jobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.</p>
   */
  dataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the import job was ended.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>The timestamp for when the import job was submitted.</p>
   */
  submittedAt?: Date;

  /**
   * @public
   * <p>The input prefix path for the S3 bucket that contains the DICOM P10 files to be imported.</p>
   */
  inputS3Uri: string | undefined;

  /**
   * @public
   * <p>The output prefix of the S3 bucket to upload the results of the DICOM import job.</p>
   */
  outputS3Uri: string | undefined;

  /**
   * @public
   * <p>The error message thrown if an import job fails.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface GetDICOMImportJobResponse {
  /**
   * @public
   * <p>The properties of the import job.</p>
   */
  jobProperties: DICOMImportJobProperties | undefined;
}

/**
 * @public
 * <p>Information about the image frame (pixel data) identifier.</p>
 */
export interface ImageFrameInformation {
  /**
   * @public
   * <p>The image frame (pixel data) identifier.</p>
   */
  imageFrameId: string | undefined;
}

/**
 * @public
 */
export interface GetImageFrameRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>Information about the image frame (pixel data) identifier.</p>
   */
  imageFrameInformation: ImageFrameInformation | undefined;
}

/**
 * @public
 */
export interface GetImageFrameResponse {
  /**
   * @public
   * <p>The blob containing the aggregated image frame information.</p>
   */
  imageFrameBlob: StreamingBlobTypes | undefined;

  /**
   * @public
   * <p>The format in which the image frame information is returned to the customer. Default is
   *            <code>application/octet-stream</code>.</p>
   */
  contentType?: string;
}

/**
 * @public
 */
export interface GetImageSetRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set version identifier.</p>
   */
  versionId?: string;
}

/**
 * @public
 */
export interface GetImageSetResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set version identifier.</p>
   */
  versionId: string | undefined;

  /**
   * @public
   * <p>The image set state.</p>
   */
  imageSetState: ImageSetState | undefined;

  /**
   * @public
   * <p>The image set workflow status.</p>
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;

  /**
   * @public
   * <p>The timestamp when image set properties were created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when image set properties were updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The timestamp when the image set properties were deleted.</p>
   */
  deletedAt?: Date;

  /**
   * @public
   * <p>The error message thrown if an image set action fails.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the image set.</p>
   */
  imageSetArn?: string;
}

/**
 * @public
 */
export interface GetImageSetMetadataRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set version identifier.</p>
   */
  versionId?: string;
}

/**
 * @public
 */
export interface GetImageSetMetadataResponse {
  /**
   * @public
   * <p>The blob containing the aggregated metadata information for the image set.</p>
   */
  imageSetMetadataBlob: StreamingBlobTypes | undefined;

  /**
   * @public
   * <p>The format in which the study metadata is returned to the customer. Default is <code>text/plain</code>.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The compression format in which image set metadata attributes are returned.</p>
   */
  contentEncoding?: string;
}

/**
 * @public
 */
export interface ListDICOMImportJobsRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The filters for listing import jobs based on status.</p>
   */
  jobStatus?: JobStatus;

  /**
   * @public
   * <p>The pagination token used to request the list of import jobs on the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The max results count. The upper bound is determined by load testing.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary of import job.</p>
 */
export interface DICOMImportJobSummary {
  /**
   * @public
   * <p>The import job identifier.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The import job name.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>The filters for listing import jobs based on status.</p>
   */
  jobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that grants permissions to access medical imaging resources.</p>
   */
  dataAccessRoleArn?: string;

  /**
   * @public
   * <p>The timestamp when an import job ended.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>The timestamp when an import job was submitted.</p>
   */
  submittedAt?: Date;

  /**
   * @public
   * <p>The error message thrown if an import job fails.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface ListDICOMImportJobsResponse {
  /**
   * @public
   * <p>A list of job summaries.</p>
   */
  jobSummaries: DICOMImportJobSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token used to retrieve the list of import jobs on the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImageSetVersionsRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The pagination token used to request the list of image set versions on the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The max results count.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The image set properties.</p>
 */
export interface ImageSetProperties {
  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set version identifier.</p>
   */
  versionId: string | undefined;

  /**
   * @public
   * <p>The image set state.</p>
   */
  imageSetState: ImageSetState | undefined;

  /**
   * @public
   * <p>The image set workflow status.</p>
   */
  ImageSetWorkflowStatus?: ImageSetWorkflowStatus;

  /**
   * @public
   * <p>The timestamp when the image set properties were created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the image set properties were updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The timestamp when the image set properties were deleted.</p>
   */
  deletedAt?: Date;

  /**
   * @public
   * <p>The error message thrown if an image set action fails.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface ListImageSetVersionsResponse {
  /**
   * @public
   * <p>Lists all properties associated with an image set.</p>
   */
  imageSetPropertiesList: ImageSetProperties[] | undefined;

  /**
   * @public
   * <p>The pagination token used to retrieve the list of image set versions on the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource to list tags for.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of all tags associated with a medical imaging resource.</p>
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
 * @public
 * <p>The aggregated structure to store DICOM study date and study time for search capabilities.</p>
 */
export interface DICOMStudyDateAndTime {
  /**
   * @public
   * <p>The DICOM study date provided in <code>yyMMdd</code> format.</p>
   */
  DICOMStudyDate: string | undefined;

  /**
   * @public
   * <p>The DICOM study time provided in <code>HHmmss.FFFFFF</code> format.</p>
   */
  DICOMStudyTime?: string;
}

/**
 * @public
 * <p>The search input attribute value.</p>
 */
export type SearchByAttributeValue =
  | SearchByAttributeValue.DICOMAccessionNumberMember
  | SearchByAttributeValue.DICOMPatientIdMember
  | SearchByAttributeValue.DICOMStudyDateAndTimeMember
  | SearchByAttributeValue.DICOMStudyIdMember
  | SearchByAttributeValue.DICOMStudyInstanceUIDMember
  | SearchByAttributeValue.CreatedAtMember
  | SearchByAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchByAttributeValue {
  /**
   * @public
   * <p>The patient ID input for search.</p>
   */
  export interface DICOMPatientIdMember {
    DICOMPatientId: string;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    createdAt?: never;
    DICOMStudyDateAndTime?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The DICOM accession number for search.</p>
   */
  export interface DICOMAccessionNumberMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber: string;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    createdAt?: never;
    DICOMStudyDateAndTime?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The DICOM study ID for search.</p>
   */
  export interface DICOMStudyIdMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId: string;
    DICOMStudyInstanceUID?: never;
    createdAt?: never;
    DICOMStudyDateAndTime?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The DICOM study instance UID for search.</p>
   */
  export interface DICOMStudyInstanceUIDMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID: string;
    createdAt?: never;
    DICOMStudyDateAndTime?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The created at time of the image set provided for search.</p>
   */
  export interface CreatedAtMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    createdAt: Date;
    DICOMStudyDateAndTime?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The aggregated structure containing DICOM study date and study time for search.</p>
   */
  export interface DICOMStudyDateAndTimeMember {
    DICOMPatientId?: never;
    DICOMAccessionNumber?: never;
    DICOMStudyId?: never;
    DICOMStudyInstanceUID?: never;
    createdAt?: never;
    DICOMStudyDateAndTime: DICOMStudyDateAndTime;
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
    createdAt?: never;
    DICOMStudyDateAndTime?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    DICOMPatientId: (value: string) => T;
    DICOMAccessionNumber: (value: string) => T;
    DICOMStudyId: (value: string) => T;
    DICOMStudyInstanceUID: (value: string) => T;
    createdAt: (value: Date) => T;
    DICOMStudyDateAndTime: (value: DICOMStudyDateAndTime) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SearchByAttributeValue, visitor: Visitor<T>): T => {
    if (value.DICOMPatientId !== undefined) return visitor.DICOMPatientId(value.DICOMPatientId);
    if (value.DICOMAccessionNumber !== undefined) return visitor.DICOMAccessionNumber(value.DICOMAccessionNumber);
    if (value.DICOMStudyId !== undefined) return visitor.DICOMStudyId(value.DICOMStudyId);
    if (value.DICOMStudyInstanceUID !== undefined) return visitor.DICOMStudyInstanceUID(value.DICOMStudyInstanceUID);
    if (value.createdAt !== undefined) return visitor.createdAt(value.createdAt);
    if (value.DICOMStudyDateAndTime !== undefined) return visitor.DICOMStudyDateAndTime(value.DICOMStudyDateAndTime);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The search filter.</p>
 */
export interface SearchFilter {
  /**
   * @public
   * <p>The search filter values.</p>
   */
  values: SearchByAttributeValue[] | undefined;

  /**
   * @public
   * <p>The search filter operator for <code>imageSetDateTime</code>.</p>
   */
  operator: Operator | undefined;
}

/**
 * @public
 * <p>The search criteria.</p>
 */
export interface SearchCriteria {
  /**
   * @public
   * <p>The filters for the search criteria.</p>
   */
  filters?: SearchFilter[];
}

/**
 * @public
 */
export interface SearchImageSetsRequest {
  /**
   * @public
   * <p>The identifier of the data store where the image sets reside.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The search criteria that filters by applying a maximum of 1 item to <code>SearchByAttribute</code>.</p>
   */
  searchCriteria?: SearchCriteria;

  /**
   * @public
   * <p>The maximum number of results that can be returned in a search.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token used for pagination of results returned in the response. Use the token returned from the previous
   *            request to continue results where the previous request ended.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The DICOM attributes returned as a part of a response. Each image set has these properties
 *            as part of a search result.</p>
 */
export interface DICOMTags {
  /**
   * @public
   * <p>The unique identifier for a patient in a DICOM Study.</p>
   */
  DICOMPatientId?: string;

  /**
   * @public
   * <p>The patient name.</p>
   */
  DICOMPatientName?: string;

  /**
   * @public
   * <p>The patient birth date.</p>
   */
  DICOMPatientBirthDate?: string;

  /**
   * @public
   * <p>The patient sex.</p>
   */
  DICOMPatientSex?: string;

  /**
   * @public
   * <p>The DICOM provided identifier for studyInstanceUid.&gt;</p>
   */
  DICOMStudyInstanceUID?: string;

  /**
   * @public
   * <p>The DICOM provided studyId.</p>
   */
  DICOMStudyId?: string;

  /**
   * @public
   * <p>The description of the study.</p>
   */
  DICOMStudyDescription?: string;

  /**
   * @public
   * <p>The total number of series in the DICOM study.</p>
   */
  DICOMNumberOfStudyRelatedSeries?: number;

  /**
   * @public
   * <p>The total number of instances in the DICOM study.</p>
   */
  DICOMNumberOfStudyRelatedInstances?: number;

  /**
   * @public
   * <p>The accession number for the DICOM study.</p>
   */
  DICOMAccessionNumber?: string;

  /**
   * @public
   * <p>The study date.</p>
   */
  DICOMStudyDate?: string;

  /**
   * @public
   * <p>The study time.</p>
   */
  DICOMStudyTime?: string;
}

/**
 * @public
 * <p>Summary of the image set metadata.</p>
 */
export interface ImageSetsMetadataSummary {
  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The image set version.</p>
   */
  version?: number;

  /**
   * @public
   * <p>The time an image set is created in AWS HealthImaging. Sample creation
   *             date is provided in <code>1985-04-12T23:20:50.52Z</code> format.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time when an image was last updated in AWS HealthImaging.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The DICOM tags associated with the image set.</p>
   */
  DICOMTags?: DICOMTags;
}

/**
 * @public
 */
export interface SearchImageSetsResponse {
  /**
   * @public
   * <p>The model containing the image set results.</p>
   */
  imageSetsMetadataSummaries: ImageSetsMetadataSummary[] | undefined;

  /**
   * @public
   * <p>The token for pagination results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartDICOMImportJobRequest {
  /**
   * @public
   * <p>The import job name.</p>
   */
  jobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants permission to access medical imaging resources.</p>
   */
  dataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for API idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The input prefix path for the S3 bucket that contains the DICOM files to be imported.</p>
   */
  inputS3Uri: string | undefined;

  /**
   * @public
   * <p>The output prefix of the S3 bucket to upload the results of the DICOM import job.</p>
   */
  outputS3Uri: string | undefined;
}

/**
 * @public
 */
export interface StartDICOMImportJobResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The import job identifier.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The import job status.</p>
   */
  jobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the import job was submitted.</p>
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource that tags are being added to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The user-specified key and value tag pairs added to a medical imaging resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the medical imaging resource that tags are being removed from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys for the tags to be removed from the medical imaging resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>.</p>
 */
export interface DICOMUpdates {
  /**
   * @public
   * <p>The DICOM tags to be removed from <code>ImageSetMetadata</code>.</p>
   */
  removableAttributes?: Uint8Array;

  /**
   * @public
   * <p>The DICOM tags that need to be updated in <code>ImageSetMetadata</code>.</p>
   */
  updatableAttributes?: Uint8Array;
}

/**
 * @public
 * <p>Contains DICOMUpdates.</p>
 */
export type MetadataUpdates = MetadataUpdates.DICOMUpdatesMember | MetadataUpdates.$UnknownMember;

/**
 * @public
 */
export namespace MetadataUpdates {
  /**
   * @public
   * <p>The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>.</p>
   */
  export interface DICOMUpdatesMember {
    DICOMUpdates: DICOMUpdates;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DICOMUpdates?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    DICOMUpdates: (value: DICOMUpdates) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetadataUpdates, visitor: Visitor<T>): T => {
    if (value.DICOMUpdates !== undefined) return visitor.DICOMUpdates(value.DICOMUpdates);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateImageSetMetadataRequest {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The latest image set version identifier.</p>
   */
  latestVersionId: string | undefined;

  /**
   * @public
   * <p>Update image set metadata updates.</p>
   */
  updateImageSetMetadataUpdates: MetadataUpdates | undefined;
}

/**
 * @public
 */
export interface UpdateImageSetMetadataResponse {
  /**
   * @public
   * <p>The data store identifier.</p>
   */
  datastoreId: string | undefined;

  /**
   * @public
   * <p>The image set identifier.</p>
   */
  imageSetId: string | undefined;

  /**
   * @public
   * <p>The latest image set version identifier.</p>
   */
  latestVersionId: string | undefined;

  /**
   * @public
   * <p>The image set state.</p>
   */
  imageSetState: ImageSetState | undefined;

  /**
   * @public
   * <p>The image set workflow status.</p>
   */
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;

  /**
   * @public
   * <p>The timestamp when image set metadata was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when image set metadata was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The error message thrown if an update image set metadata action fails.</p>
   */
  message?: string;
}

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
  if (obj.createdAt !== undefined) return { createdAt: obj.createdAt };
  if (obj.DICOMStudyDateAndTime !== undefined)
    return { DICOMStudyDateAndTime: DICOMStudyDateAndTimeFilterSensitiveLog(obj.DICOMStudyDateAndTime) };
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

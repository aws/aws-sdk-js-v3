// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { HealthLakeServiceException as __BaseException } from "./HealthLakeServiceException";

/**
 * <p>Access is denied. Your account is not authorized to perform this operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum CmkType {
  AO_CMK = "AWS_OWNED_KMS_KEY",
  CM_CMK = "CUSTOMER_MANAGED_KMS_KEY",
}

/**
 * <p>The Data Store is in a transition state and the user requested action can not be performed.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum FHIRVersion {
  R4 = "R4",
}

export enum PreloadDataType {
  SYNTHEA = "SYNTHEA",
}

/**
 * <p> The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.</p>
 */
export interface PreloadDataConfig {
  /**
   * <p>The type of preloaded data. Only Synthea preloaded data is supported.</p>
   */
  PreloadDataType: PreloadDataType | string | undefined;
}

/**
 * <p>
 *             The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
 *          </p>
 */
export interface KmsEncryptionConfig {
  /**
   * <p>
   *             The type of customer-managed-key(CMK) used for encyrption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
   *          </p>
   */
  CmkType: CmkType | string | undefined;

  /**
   * <p>
   *             The KMS encryption key id/alias used to encrypt the Data Store contents at rest.
   *          </p>
   */
  KmsKeyId?: string;
}

/**
 * <p>
 *             The server-side encryption key configuration for a customer provided encryption key.
 *          </p>
 */
export interface SseConfiguration {
  /**
   * <p>
   *             The KMS encryption configuration used to provide details for data encryption.
   *          </p>
   */
  KmsEncryptionConfig: KmsEncryptionConfig | undefined;
}

/**
 * <p>
 *             A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}
 *          </p>
 */
export interface Tag {
  /**
   * <p>
   *             The key portion of a tag. Tag keys are case sensitive.
   *          </p>
   */
  Key: string | undefined;

  /**
   * <p>
   *             The value portion of tag. Tag values are case sensitive.
   *          </p>
   */
  Value: string | undefined;
}

export interface CreateFHIRDatastoreRequest {
  /**
   * <p>The user generated name for the Data Store.</p>
   */
  DatastoreName?: string;

  /**
   * <p>The FHIR version of the Data Store. The only supported version is R4.</p>
   */
  DatastoreTypeVersion: FHIRVersion | string | undefined;

  /**
   * <p>
   *             The server-side encryption key configuration for a customer provided encryption key specified for creating a Data Store.
   *          </p>
   */
  SseConfiguration?: SseConfiguration;

  /**
   * <p>Optional parameter to preload data upon creation of the Data Store. Currently, the only
   *          supported preloaded data is synthetic data generated from Synthea.</p>
   */
  PreloadDataConfig?: PreloadDataConfig;

  /**
   * <p>Optional user provided token used for ensuring idempotency.</p>
   */
  ClientToken?: string;

  /**
   * <p>
   *             Resource tags that are applied to a Data Store when it is created.
   *          </p>
   */
  Tags?: Tag[];
}

export enum DatastoreStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
}

export interface CreateFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated Data Store id. This id is in the output from the initial Data Store
   *          creation call.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The datastore ARN is generated during the creation of the Data Store and can be found in
   *          the output from the initial Data Store creation call.</p>
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The status of the FHIR Data Store. Possible statuses are ‘CREATING’, ‘ACTIVE’, ‘DELETING’,
   *          ‘DELETED’.</p>
   */
  DatastoreStatus: DatastoreStatus | string | undefined;

  /**
   * <p>The AWS endpoint for the created Data Store. For preview, only US-east-1 endpoints are
   *          supported.</p>
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p>Unknown error occurs in the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The user input parameter was invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The filters applied to Data Store query.</p>
 */
export interface DatastoreFilter {
  /**
   * <p>Allows the user to filter Data Store results by name.</p>
   */
  DatastoreName?: string;

  /**
   * <p>Allows the user to filter Data Store results by status.</p>
   */
  DatastoreStatus?: DatastoreStatus | string;

  /**
   * <p>A filter that allows the user to set cutoff dates for records. All Data Stores created
   *          before the specified date will be included in the results. </p>
   */
  CreatedBefore?: Date;

  /**
   * <p>A filter that allows the user to set cutoff dates for records. All Data Stores created
   *          after the specified date will be included in the results.</p>
   */
  CreatedAfter?: Date;
}

/**
 * <p>Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.</p>
 */
export interface DatastoreProperties {
  /**
   * <p>The AWS-generated ID number for the Data Store.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name used in the creation of the Data Store.</p>
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The user-generated name for the Data Store.</p>
   */
  DatastoreName?: string;

  /**
   * <p>The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.</p>
   */
  DatastoreStatus: DatastoreStatus | string | undefined;

  /**
   * <p>The time that a Data Store was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The FHIR version. Only R4 version data is supported.</p>
   */
  DatastoreTypeVersion: FHIRVersion | string | undefined;

  /**
   * <p>The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL.</p>
   */
  DatastoreEndpoint: string | undefined;

  /**
   * <p>
   *             The server-side encryption key configuration for a customer provided encryption key (CMK).
   *          </p>
   */
  SseConfiguration?: SseConfiguration;

  /**
   * <p>The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.</p>
   */
  PreloadDataConfig?: PreloadDataConfig;
}

export interface DeleteFHIRDatastoreRequest {
  /**
   * <p> The AWS-generated ID for the Data Store to be deleted.</p>
   */
  DatastoreId?: string;
}

export interface DeleteFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated ID for the Data Store to be deleted.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.</p>
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The status of the Data Store that the user has requested to be deleted.
   *       </p>
   */
  DatastoreStatus: DatastoreStatus | string | undefined;

  /**
   * <p>The AWS endpoint for the Data Store the user has requested to be deleted.</p>
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p> The requested Data Store was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface DescribeFHIRDatastoreRequest {
  /**
   * <p>The AWS-generated Data Store id. This is part of the ‘CreateFHIRDatastore’ output.</p>
   */
  DatastoreId?: string;
}

export interface DescribeFHIRDatastoreResponse {
  /**
   * <p>All properties associated with a Data Store, including the Data Store ID, Data Store ARN,
   *          Data Store name, Data Store status, created at, Data Store type version, and Data Store
   *          endpoint.</p>
   */
  DatastoreProperties: DatastoreProperties | undefined;
}

export interface DescribeFHIRExportJobRequest {
  /**
   * <p>The AWS generated ID for the Data Store from which files are being exported from for an export job.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The AWS generated ID for an export job.</p>
   */
  JobId: string | undefined;
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>
 *             The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.
 *          </p>
 */
export interface S3Configuration {
  /**
   * <p>
   *             The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake.
   *          </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>
   *             The KMS key ID used to access the S3 bucket.
   *          </p>
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The output data configuration that was supplied when the export job was created.</p>
 */
export type OutputDataConfig = OutputDataConfig.S3ConfigurationMember | OutputDataConfig.$UnknownMember;

export namespace OutputDataConfig {
  /**
   * <p>
   *             The output data configuration that was supplied when the export job was created.
   *          </p>
   */
  export interface S3ConfigurationMember {
    S3Configuration: S3Configuration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    S3Configuration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3Configuration: (value: S3Configuration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OutputDataConfig, visitor: Visitor<T>): T => {
    if (value.S3Configuration !== undefined) return visitor.S3Configuration(value.S3Configuration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 */
export interface ExportJobProperties {
  /**
   * <p>The AWS generated ID for an export job.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The user generated name for an export job.</p>
   */
  JobName?: string;

  /**
   * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The time an export job was initiated.</p>
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time an export job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name used during the initiation of the job.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>An explanation of any errors that may have occurred during the export job.</p>
   */
  Message?: string;
}

export interface DescribeFHIRExportJobResponse {
  /**
   * <p>Displays the properties of the export job, including the ID, Arn, Name, and the status of the job. </p>
   */
  ExportJobProperties: ExportJobProperties | undefined;
}

export interface DescribeFHIRImportJobRequest {
  /**
   * <p>The AWS-generated ID of the Data Store.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The AWS-generated job ID.</p>
   */
  JobId: string | undefined;
}

/**
 * <p> The input properties for an import job.</p>
 */
export type InputDataConfig = InputDataConfig.S3UriMember | InputDataConfig.$UnknownMember;

export namespace InputDataConfig {
  /**
   * <p>The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake. </p>
   */
  export interface S3UriMember {
    S3Uri: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    S3Uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InputDataConfig, visitor: Visitor<T>): T => {
    if (value.S3Uri !== undefined) return visitor.S3Uri(value.S3Uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.</p>
 */
export interface ImportJobProperties {
  /**
   * <p>The AWS-generated id number for the Import job.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The user-generated name for an Import job.</p>
   */
  JobName?: string;

  /**
   * <p>The job status for an Import job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, FAILED.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The time that the Import job was submitted for processing.</p>
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time that the Import job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The datastore id used when the Import job was created. </p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The input data configuration that was supplied when the Import job was created.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   */
  JobOutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>An explanation of any errors that may have occurred during the FHIR import job. </p>
   */
  Message?: string;
}

export interface DescribeFHIRImportJobResponse {
  /**
   * <p>The properties of the Import job request, including the ID, ARN, name, and the status of the job.</p>
   */
  ImportJobProperties: ImportJobProperties | undefined;
}

export interface ListFHIRDatastoresRequest {
  /**
   * <p>Lists all filters associated with a FHIR Data Store request.</p>
   */
  Filter?: DatastoreFilter;

  /**
   * <p>Fetches the next page of Data Stores when results are paginated.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of Data Stores returned in a single page of a
   *          ListFHIRDatastoresRequest call.</p>
   */
  MaxResults?: number;
}

export interface ListFHIRDatastoresResponse {
  /**
   * <p>All properties associated with the listed Data Stores.</p>
   */
  DatastorePropertiesList: DatastoreProperties[] | undefined;

  /**
   * <p>Pagination token that can be used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListFHIRExportJobsRequest {
  /**
   * <p>
   *             This parameter limits the response to the export job with the specified Data Store ID.
   *          </p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query.
   *          </p>
   */
  NextToken?: string;

  /**
   * <p>
   *             This parameter limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user.
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *             This parameter limits the response to the export job with the specified job name.
   *          </p>
   */
  JobName?: string;

  /**
   * <p>
   *             This parameter limits the response to the export jobs with the specified job status.
   *          </p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>
   *             This parameter limits the response to FHIR export jobs submitted before a user specified date.
   *          </p>
   */
  SubmittedBefore?: Date;

  /**
   * <p>
   *             This parameter limits the response to FHIR export jobs submitted after a user specified date.
   *          </p>
   */
  SubmittedAfter?: Date;
}

export interface ListFHIRExportJobsResponse {
  /**
   * <p>
   *             The properties of listed FHIR export jobs, including the ID, ARN, name, and the status of the job.
   *          </p>
   */
  ExportJobPropertiesList: ExportJobProperties[] | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query.
   *          </p>
   */
  NextToken?: string;
}

export interface ListFHIRImportJobsRequest {
  /**
   * <p>
   *             This parameter limits the response to the import job with the specified Data Store ID.
   *          </p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query.
   *          </p>
   */
  NextToken?: string;

  /**
   * <p>
   *             This parameter limits the number of results returned for a ListFHIRImportJobs to a maximum quantity specified by the user.
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *             This parameter limits the response to the import job with the specified job name.
   *          </p>
   */
  JobName?: string;

  /**
   * <p>
   *             This parameter limits the response to the import job with the specified job status.
   *          </p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>
   *             This parameter limits the response to FHIR import jobs submitted before a user specified date.
   *          </p>
   */
  SubmittedBefore?: Date;

  /**
   * <p>
   *             This parameter limits the response to FHIR import jobs submitted after a user specified date.
   *          </p>
   */
  SubmittedAfter?: Date;
}

export interface ListFHIRImportJobsResponse {
  /**
   * <p>
   *             The properties of a listed FHIR import jobs, including the ID, ARN, name, and the status of the job.
   *          </p>
   */
  ImportJobPropertiesList: ImportJobProperties[] | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query.
   *          </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name(ARN) of the Data Store for which tags are being added.
   *          </p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>
   *             Returns a list of tags associated with a Data Store.
   *          </p>
   */
  Tags?: Tag[];
}

export interface StartFHIRExportJobRequest {
  /**
   * <p>The user generated name for an export job.</p>
   */
  JobName?: string;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name used during the initiation of the job.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An optional user provided token used for ensuring idempotency.</p>
   */
  ClientToken?: string;
}

export interface StartFHIRExportJobResponse {
  /**
   * <p>The AWS generated ID for an export job.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
   */
  DatastoreId?: string;
}

export interface StartFHIRImportJobRequest {
  /**
   * <p>The name of the FHIR Import job in the StartFHIRImport job request.</p>
   */
  JobName?: string;

  /**
   * <p>The input properties of the FHIR Import job in the StartFHIRImport job request.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   */
  JobOutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The AWS-generated Data Store ID.</p>
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Optional user provided token used for ensuring idempotency.</p>
   */
  ClientToken?: string;
}

export interface StartFHIRImportJobResponse {
  /**
   * <p>The AWS-generated job ID.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The status of an import job.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The AWS-generated Data Store ID.</p>
   */
  DatastoreId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name(ARN)that gives Amazon HealthLake access to the Data Store which tags are being added to.
   *          </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *             The user specified key and value pair tags being added to a Data Store.
   *          </p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>
   *             "The Amazon Resource Name(ARN) of the Data Store for which tags are being removed
   *          </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *             The keys for the tags to be removed from the Healthlake Data Store.
   *          </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const PreloadDataConfigFilterSensitiveLog = (obj: PreloadDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KmsEncryptionConfigFilterSensitiveLog = (obj: KmsEncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SseConfigurationFilterSensitiveLog = (obj: SseConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFHIRDatastoreRequestFilterSensitiveLog = (obj: CreateFHIRDatastoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFHIRDatastoreResponseFilterSensitiveLog = (obj: CreateFHIRDatastoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatastoreFilterFilterSensitiveLog = (obj: DatastoreFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatastorePropertiesFilterSensitiveLog = (obj: DatastoreProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFHIRDatastoreRequestFilterSensitiveLog = (obj: DeleteFHIRDatastoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFHIRDatastoreResponseFilterSensitiveLog = (obj: DeleteFHIRDatastoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFHIRDatastoreRequestFilterSensitiveLog = (obj: DescribeFHIRDatastoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFHIRDatastoreResponseFilterSensitiveLog = (obj: DescribeFHIRDatastoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFHIRExportJobRequestFilterSensitiveLog = (obj: DescribeFHIRExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigurationFilterSensitiveLog = (obj: S3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDataConfigFilterSensitiveLog = (obj: OutputDataConfig): any => {
  if (obj.S3Configuration !== undefined)
    return { S3Configuration: S3ConfigurationFilterSensitiveLog(obj.S3Configuration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ExportJobPropertiesFilterSensitiveLog = (obj: ExportJobProperties): any => ({
  ...obj,
  ...(obj.OutputDataConfig && { OutputDataConfig: OutputDataConfigFilterSensitiveLog(obj.OutputDataConfig) }),
});

/**
 * @internal
 */
export const DescribeFHIRExportJobResponseFilterSensitiveLog = (obj: DescribeFHIRExportJobResponse): any => ({
  ...obj,
  ...(obj.ExportJobProperties && {
    ExportJobProperties: ExportJobPropertiesFilterSensitiveLog(obj.ExportJobProperties),
  }),
});

/**
 * @internal
 */
export const DescribeFHIRImportJobRequestFilterSensitiveLog = (obj: DescribeFHIRImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDataConfigFilterSensitiveLog = (obj: InputDataConfig): any => {
  if (obj.S3Uri !== undefined) return { S3Uri: obj.S3Uri };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ImportJobPropertiesFilterSensitiveLog = (obj: ImportJobProperties): any => ({
  ...obj,
  ...(obj.InputDataConfig && { InputDataConfig: InputDataConfigFilterSensitiveLog(obj.InputDataConfig) }),
  ...(obj.JobOutputDataConfig && { JobOutputDataConfig: OutputDataConfigFilterSensitiveLog(obj.JobOutputDataConfig) }),
});

/**
 * @internal
 */
export const DescribeFHIRImportJobResponseFilterSensitiveLog = (obj: DescribeFHIRImportJobResponse): any => ({
  ...obj,
  ...(obj.ImportJobProperties && {
    ImportJobProperties: ImportJobPropertiesFilterSensitiveLog(obj.ImportJobProperties),
  }),
});

/**
 * @internal
 */
export const ListFHIRDatastoresRequestFilterSensitiveLog = (obj: ListFHIRDatastoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFHIRDatastoresResponseFilterSensitiveLog = (obj: ListFHIRDatastoresResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFHIRExportJobsRequestFilterSensitiveLog = (obj: ListFHIRExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFHIRExportJobsResponseFilterSensitiveLog = (obj: ListFHIRExportJobsResponse): any => ({
  ...obj,
  ...(obj.ExportJobPropertiesList && {
    ExportJobPropertiesList: obj.ExportJobPropertiesList.map((item) => ExportJobPropertiesFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListFHIRImportJobsRequestFilterSensitiveLog = (obj: ListFHIRImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFHIRImportJobsResponseFilterSensitiveLog = (obj: ListFHIRImportJobsResponse): any => ({
  ...obj,
  ...(obj.ImportJobPropertiesList && {
    ImportJobPropertiesList: obj.ImportJobPropertiesList.map((item) => ImportJobPropertiesFilterSensitiveLog(item)),
  }),
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
export const StartFHIRExportJobRequestFilterSensitiveLog = (obj: StartFHIRExportJobRequest): any => ({
  ...obj,
  ...(obj.OutputDataConfig && { OutputDataConfig: OutputDataConfigFilterSensitiveLog(obj.OutputDataConfig) }),
});

/**
 * @internal
 */
export const StartFHIRExportJobResponseFilterSensitiveLog = (obj: StartFHIRExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFHIRImportJobRequestFilterSensitiveLog = (obj: StartFHIRImportJobRequest): any => ({
  ...obj,
  ...(obj.InputDataConfig && { InputDataConfig: InputDataConfigFilterSensitiveLog(obj.InputDataConfig) }),
  ...(obj.JobOutputDataConfig && { JobOutputDataConfig: OutputDataConfigFilterSensitiveLog(obj.JobOutputDataConfig) }),
});

/**
 * @internal
 */
export const StartFHIRImportJobResponseFilterSensitiveLog = (obj: StartFHIRImportJobResponse): any => ({
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

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { HealthLakeServiceException as __BaseException } from "./HealthLakeServiceException";

/**
 * <p>Access is denied. Your account is not authorized to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 * @enum
 */
export const AuthorizationStrategy = {
  AWS_AUTH: "AWS_AUTH",
  SMARTV1: "SMART_ON_FHIR_V1",
  SMART_ON_FHIR: "SMART_ON_FHIR",
} as const;

/**
 * @public
 */
export type AuthorizationStrategy = (typeof AuthorizationStrategy)[keyof typeof AuthorizationStrategy];

/**
 * @public
 * @enum
 */
export const CmkType = {
  AO_CMK: "AWS_OWNED_KMS_KEY",
  CM_CMK: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type CmkType = (typeof CmkType)[keyof typeof CmkType];

/**
 * <p>The data store is in a transition state and the user requested action can not be performed.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 * @enum
 */
export const FHIRVersion = {
  R4: "R4",
} as const;

/**
 * @public
 */
export type FHIRVersion = (typeof FHIRVersion)[keyof typeof FHIRVersion];

/**
 * <p>The identity provider configuration that you gave when the data store was created.</p>
 * @public
 */
export interface IdentityProviderConfiguration {
  /**
   * <p>The authorization strategy that you selected when you created the data store.</p>
   * @public
   */
  AuthorizationStrategy: AuthorizationStrategy | undefined;

  /**
   * <p>If you enabled fine-grained authorization when you created the data store.</p>
   * @public
   */
  FineGrainedAuthorizationEnabled?: boolean | undefined;

  /**
   * <p>The JSON metadata elements that you want to use in your identity provider configuration. Required elements are listed based on the launch specification of the SMART application. For more information on all possible elements, see <a href="https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata">Metadata</a> in SMART's App Launch specification.</p>
   *          <p>
   *             <code>authorization_endpoint</code>: The URL to the OAuth2 authorization endpoint.</p>
   *          <p>
   *             <code>grant_types_supported</code>:  An array of grant types that are supported at the token endpoint. You must provide at least one grant type option. Valid options are <code>authorization_code</code> and <code>client_credentials</code>.</p>
   *          <p>
   *             <code>token_endpoint</code>: The URL to the OAuth2 token endpoint.</p>
   *          <p>
   *             <code>capabilities</code>: An array of strings of the SMART capabilities that the authorization server supports.</p>
   *          <p>
   *             <code>code_challenge_methods_supported</code>: An array of strings of supported PKCE code challenge methods. You must include the <code>S256</code> method in the array of PKCE code challenge methods.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that you want to use to decode the access token created by the authorization server.</p>
   * @public
   */
  IdpLambdaArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PreloadDataType = {
  SYNTHEA: "SYNTHEA",
} as const;

/**
 * @public
 */
export type PreloadDataType = (typeof PreloadDataType)[keyof typeof PreloadDataType];

/**
 * <p> The input properties for the preloaded data store. Only data preloaded from Synthea is supported.</p>
 * @public
 */
export interface PreloadDataConfig {
  /**
   * <p>The type of preloaded data. Only Synthea preloaded data is supported.</p>
   * @public
   */
  PreloadDataType: PreloadDataType | undefined;
}

/**
 * <p>
 *             The customer-managed-key(CMK) used when creating a data store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
 *          </p>
 * @public
 */
export interface KmsEncryptionConfig {
  /**
   * <p>
   *             The type of customer-managed-key(CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
   *          </p>
   * @public
   */
  CmkType: CmkType | undefined;

  /**
   * <p>
   *             The KMS encryption key id/alias used to encrypt the data store contents at rest.
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>
 *             The server-side encryption key configuration for a customer provided encryption key.
 *          </p>
 * @public
 */
export interface SseConfiguration {
  /**
   * <p>
   *             The KMS encryption configuration used to provide details for data encryption.
   *          </p>
   * @public
   */
  KmsEncryptionConfig: KmsEncryptionConfig | undefined;
}

/**
 * <p>
 *             A tag is a label consisting of a user-defined key and value. The form for tags is \{"Key", "Value"\}
 *          </p>
 * @public
 */
export interface Tag {
  /**
   * <p>
   *             The key portion of a tag. Tag keys are case sensitive.
   *          </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>
   *             The value portion of a tag. Tag values are case sensitive.
   *          </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreRequest {
  /**
   * <p>The user generated name for the data store.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The FHIR version of the data store. The only supported version is R4.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>
   *             The server-side encryption key configuration for a customer provided encryption key specified for creating a data store.
   *          </p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>Optional parameter to preload data upon creation of the data store. Currently, the only
   *          supported preloaded data is synthetic data generated from Synthea.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>Optional user provided token used for ensuring idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>
   *             Resource tags that are applied to a data store when it is created.
   *          </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration of the identity provider that you want to use for your data store.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;
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
export interface CreateFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated data store id. This id is in the output from the initial data store
   *          creation call.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The data store ARN is generated during the creation of the data store and can be found in
   *          the output from the initial data store creation call.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The status of the FHIR data store.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint for the created data store.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p>Unknown error occurs in the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The filters applied to data store query.</p>
 * @public
 */
export interface DatastoreFilter {
  /**
   * <p>Allows the user to filter data store results by name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>Allows the user to filter data store results by status.</p>
   * @public
   */
  DatastoreStatus?: DatastoreStatus | undefined;

  /**
   * <p>A filter that allows the user to set cutoff dates for records. All data stores created
   *          before the specified date will be included in the results. </p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>A filter that allows the user to set cutoff dates for records. All data stores created
   *          after the specified date will be included in the results.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCategory = {
  NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR",
  RETRYABLE_ERROR: "RETRYABLE_ERROR",
} as const;

/**
 * @public
 */
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory];

/**
 * <p>The error info of the create/delete data store operation.</p>
 * @public
 */
export interface ErrorCause {
  /**
   * <p>The text of the error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error category of the create/delete data store operation. Possible statuses are RETRYABLE_ERROR or NON_RETRYABLE_ERROR.</p>
   * @public
   */
  ErrorCategory?: ErrorCategory | undefined;
}

/**
 * <p>Displays the properties of the data store, including the ID, ARN, name, and the status of the data store.</p>
 * @public
 */
export interface DatastoreProperties {
  /**
   * <p>The AWS-generated ID number for the data store.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name used in the creation of the data store.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The user-generated name for the data store.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The status of the data store.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The time that a data store was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The FHIR version. Only R4 version data is supported.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>The AWS endpoint for the data store. Each data store will have it's own endpoint with data store ID in the endpoint URL.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;

  /**
   * <p>
   *          The server-side encryption key configuration for a customer provided encryption key (CMK).
   *       </p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>The preloaded data configuration for the data store. Only data preloaded from Synthea is supported.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>The identity provider that you selected when you created the data store.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * <p>The error cause for the current data store operation.</p>
   * @public
   */
  ErrorCause?: ErrorCause | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreRequest {
  /**
   * <p> The AWS-generated ID for the data store to be deleted.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated ID for the data store to be deleted.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that gives AWS HealthLake access permission.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The status of the data store that the user has requested to be deleted.
   *       </p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint for the data store the user has requested to be deleted.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p> The requested data store was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DescribeFHIRDatastoreRequest {
  /**
   * <p>The AWS-generated data store ID.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreResponse {
  /**
   * <p>All properties associated with a data store, including the data store ID, data store ARN,
   *          data store name, data store status, when the data store was created, data store type version, and the data store's endpoint.</p>
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobRequest {
  /**
   * <p>The AWS generated ID for the data store from which files are being exported from for an export job.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The AWS generated ID for an export job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCEL_COMPLETED: "CANCEL_COMPLETED",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_SUBMITTED: "CANCEL_SUBMITTED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>
 *             The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.
 *          </p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>
   *             The S3Uri is the user specified S3 location of the FHIR data to be imported into AWS HealthLake.
   *          </p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>
   *             The KMS key ID used to access the S3 bucket.
   *          </p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The output data configuration that was supplied when the export job was created.</p>
 * @public
 */
export type OutputDataConfig = OutputDataConfig.S3ConfigurationMember | OutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputDataConfig {
  /**
   * <p>
   *             The output data configuration that was supplied when the export job was created.
   *          </p>
   * @public
   */
  export interface S3ConfigurationMember {
    S3Configuration: S3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * @public
 */
export interface ExportJobProperties {
  /**
   * <p>The AWS generated ID for an export job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The user generated name for an export job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time an export job was initiated.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time an export job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The AWS generated ID for the data store from which files are being exported for an export job.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name used during the initiation of the job.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that may have occurred during the export job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobResponse {
  /**
   * <p>Displays the properties of the export job, including the ID, Arn, Name, and the status of the job. </p>
   * @public
   */
  ExportJobProperties: ExportJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobRequest {
  /**
   * <p>The AWS-generated ID of the data store.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The AWS-generated job ID.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p> The input properties for an import job.</p>
 * @public
 */
export type InputDataConfig = InputDataConfig.S3UriMember | InputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace InputDataConfig {
  /**
   * <p>The S3Uri is the user specified S3 location of the FHIR data to be imported into AWS HealthLake. </p>
   * @public
   */
  export interface S3UriMember {
    S3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>The progress report of an import job.</p>
 * @public
 */
export interface JobProgressReport {
  /**
   * <p>The number of files scanned from input S3 bucket.</p>
   * @public
   */
  TotalNumberOfScannedFiles?: number | undefined;

  /**
   * <p>The size (in MB) of the files scanned from the input S3 bucket.</p>
   * @public
   */
  TotalSizeOfScannedFilesInMB?: number | undefined;

  /**
   * <p>The number of files imported so far.</p>
   * @public
   */
  TotalNumberOfImportedFiles?: number | undefined;

  /**
   * <p>The number of resources scanned from the input S3 bucket.</p>
   * @public
   */
  TotalNumberOfResourcesScanned?: number | undefined;

  /**
   * <p>The number of resources imported so far.</p>
   * @public
   */
  TotalNumberOfResourcesImported?: number | undefined;

  /**
   * <p>The number of resources that failed due to customer error.</p>
   * @public
   */
  TotalNumberOfResourcesWithCustomerError?: number | undefined;

  /**
   * <p>The number of files that failed to be read from the input S3 bucket due to customer error.</p>
   * @public
   */
  TotalNumberOfFilesReadWithCustomerError?: number | undefined;

  /**
   * <p>The throughput (in MB/sec) of the import job.</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>Displays the properties of the import job, including the ID, Arn, Name, the status of the job, and the progress report of the job.</p>
 * @public
 */
export interface ImportJobProperties {
  /**
   * <p>The AWS-generated id number for the Import job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The user-generated name for an Import job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job status for an Import job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED_WITH_ERRORS, COMPLETED, FAILED.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time that the Import job was submitted for processing.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time that the Import job was completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The datastore id used when the Import job was created. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The input data configuration that was supplied when the Import job was created.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>Displays the progress of the import job, including total resources scanned, total resources ingested, and total size of data ingested.</p>
   * @public
   */
  JobProgressReport?: JobProgressReport | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that gives AWS HealthLake access to your input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that may have occurred during the FHIR import job. </p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobResponse {
  /**
   * <p>The properties of the Import job request, including the ID, ARN, name, status of the job, and the progress report of the job.</p>
   * @public
   */
  ImportJobProperties: ImportJobProperties | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresRequest {
  /**
   * <p>Lists all filters associated with a FHIR data store request.</p>
   * @public
   */
  Filter?: DatastoreFilter | undefined;

  /**
   * <p>Fetches the next page of data stores when results are paginated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data stores returned in a single page of a ListFHIRDatastoresRequest call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresResponse {
  /**
   * <p>All properties associated with the listed data stores.</p>
   * @public
   */
  DatastorePropertiesList: DatastoreProperties[] | undefined;

  /**
   * <p>Pagination token that can be used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsRequest {
  /**
   * <p>
   *             This parameter limits the response to the export job with the specified data store ID.
   *          </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query.
   *          </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             This parameter limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user.
   *          </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             This parameter limits the response to the export job with the specified job name.
   *          </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>
   *             This parameter limits the response to the export jobs with the specified job status.
   *          </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>
   *             This parameter limits the response to FHIR export jobs submitted before a user specified date.
   *          </p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>
   *             This parameter limits the response to FHIR export jobs submitted after a user specified date.
   *          </p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsResponse {
  /**
   * <p>
   *             The properties of listed FHIR export jobs, including the ID, ARN, name, and the status of the job.
   *          </p>
   * @public
   */
  ExportJobPropertiesList: ExportJobProperties[] | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query.
   *          </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsRequest {
  /**
   * <p>
   *             This parameter limits the response to the import job with the specified data store ID.
   *          </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query.
   *          </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             This parameter limits the number of results returned for a ListFHIRImportJobs to a maximum quantity specified by the user.
   *          </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             This parameter limits the response to the import job with the specified job name.
   *          </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>
   *             This parameter limits the response to the import job with the specified job status.
   *          </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>
   *             This parameter limits the response to FHIR import jobs submitted before a user specified date.
   *          </p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>
   *             This parameter limits the response to FHIR import jobs submitted after a user specified date.
   *          </p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsResponse {
  /**
   * <p>
   *             The properties of a listed FHIR import jobs, including the ID, ARN, name, the status of the job, and the progress report of the job.
   *          </p>
   * @public
   */
  ImportJobPropertiesList: ImportJobProperties[] | undefined;

  /**
   * <p>
   *             A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query.
   *          </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name(ARN) of the data store for which tags are being added.
   *          </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *             Returns a list of tags associated with a data store.
   *          </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobRequest {
  /**
   * <p>The user generated name for an export job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The AWS generated ID for the data store from which files are being exported for an export job.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name used during the initiation of the job.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An optional user provided token used for ensuring idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobResponse {
  /**
   * <p>The AWS generated ID for an export job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The AWS generated ID for the data store from which files are being exported for an export job.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobRequest {
  /**
   * <p>The name of the FHIR Import job in the StartFHIRImport job request.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The input properties of the FHIR Import job in the StartFHIRImport job request.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration that was supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The AWS-generated data store ID.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that gives AWS HealthLake access permission.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Optional user provided token used for ensuring idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobResponse {
  /**
   * <p>The AWS-generated job ID.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The status of an import job.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The AWS-generated data store ID.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name(ARN)that gives AWS HealthLake access to the data store which tags are being added to.
   *          </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *             The user specified key and value pair tags being added to a data store.
   *          </p>
   * @public
   */
  Tags: Tag[] | undefined;
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
   * <p>The Amazon Resource Name(ARN) of the data store for which tags are being removed.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *             The keys for the tags to be removed from the HealthLake data store.
   *          </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

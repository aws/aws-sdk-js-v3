// smithy-typescript generated code
import {
  AuthorizationStrategy,
  CmkType,
  DatastoreStatus,
  ErrorCategory,
  FHIRVersion,
  JobStatus,
  PreloadDataType,
  ValidationLevel,
} from "./enums";

/**
 * <p>The identity provider configuration selected when the data store was created.</p>
 * @public
 */
export interface IdentityProviderConfiguration {
  /**
   * <p>The authorization strategy selected when the HealthLake data store is created.</p>
   *          <note>
   *             <p>HealthLake provides support for both SMART on FHIR V1 and V2 as described below.</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>SMART_ON_FHIR_V1</code> – Support for only SMART on FHIR V1, which
   *                   includes <code>read</code> (read/search) and <code>write</code>
   *                   (create/update/delete) permissions.</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>SMART_ON_FHIR</code> – Support for both SMART on FHIR V1 and V2,
   *                   which includes <code>create</code>, <code>read</code>, <code>update</code>,
   *                      <code>delete</code>, and <code>search</code> permissions.</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS_AUTH</code> – The default HealthLake authorization
   *                   strategy; not affiliated with SMART on FHIR.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  AuthorizationStrategy: AuthorizationStrategy | undefined;

  /**
   * <p>The parameter to enable SMART on FHIR fine-grained authorization for the data
   *          store.</p>
   * @public
   */
  FineGrainedAuthorizationEnabled?: boolean | undefined;

  /**
   * <p>The JSON metadata elements to use in your identity provider configuration. Required
   *          elements are listed based on the launch specification of the SMART application. For more
   *          information on all possible elements, see <a href="https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata">Metadata</a> in SMART's App Launch specification.</p>
   *          <p>
   *             <code>authorization_endpoint</code>: The URL to the OAuth2 authorization
   *          endpoint.</p>
   *          <p>
   *             <code>grant_types_supported</code>: An array of grant types that are supported at the
   *          token endpoint. You must provide at least one grant type option. Valid options are
   *             <code>authorization_code</code> and <code>client_credentials</code>.</p>
   *          <p>
   *             <code>token_endpoint</code>: The URL to the OAuth2 token endpoint.</p>
   *          <p>
   *             <code>capabilities</code>: An array of strings of the SMART capabilities that the
   *          authorization server supports.</p>
   *          <p>
   *             <code>code_challenge_methods_supported</code>: An array of strings of supported PKCE
   *          code challenge methods. You must include the <code>S256</code> method in the array of PKCE
   *          code challenge methods.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function to use to decode the access token created by the
   *          authorization server.</p>
   * @public
   */
  IdpLambdaArn?: string | undefined;
}

/**
 * <p>The input properties for the preloaded (Synthea) data store.</p>
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
 * <p>The customer-managed-key (CMK) used when creating a data store. If a customer-owned key
 *          is not specified, an AWS-owned key is used for encryption. </p>
 * @public
 */
export interface KmsEncryptionConfig {
  /**
   * <p>The type of customer-managed-key (CMK) used for encryption.</p>
   * @public
   */
  CmkType: CmkType | undefined;

  /**
   * <p>The Key Management Service (KMS) encryption key id/alias used to encrypt the data store contents at
   *          rest.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The server-side encryption key configuration for a customer-provided encryption
 *          key.</p>
 * @public
 */
export interface SseConfiguration {
  /**
   * <p>The Key Management Service (KMS) encryption configuration used to provide details for data
   *          encryption.</p>
   * @public
   */
  KmsEncryptionConfig: KmsEncryptionConfig | undefined;
}

/**
 * <p>A label consisting of a user-defined key and value. The form for tags is \{"Key",
 *          "Value"\}</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key portion of a tag. Tag keys are case sensitive. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> The value portion of a tag. Tag values are case-sensitive.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreRequest {
  /**
   * <p>The data store name (user-generated).</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The FHIR release version supported by the data store. Current support is for version
   *             <code>R4</code>.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>The server-side encryption key configuration for a customer-provided encryption key
   *          specified for creating a data store. </p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>An optional parameter to preload (import) open source Synthea FHIR data upon creation of
   *          the data store.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>An optional user-provided token to ensure API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The resource tags applied to a data store when it is created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identity provider configuration to use for the data store.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint created for the data store.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p>The filters applied to a data store query.</p>
 * @public
 */
export interface DatastoreFilter {
  /**
   * <p>Filter data store results by name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>Filter data store results by status.</p>
   * @public
   */
  DatastoreStatus?: DatastoreStatus | undefined;

  /**
   * <p>Filter to set cutoff dates for records. All data stores created before the specified
   *          date are included in the results. </p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter to set cutoff dates for records. All data stores created after the specified date
   *          are included in the results.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;
}

/**
 * <p>The error information for <code>CreateFHIRDatastore</code> and
 *             <code>DeleteFHIRDatastore</code> actions.</p>
 * @public
 */
export interface ErrorCause {
  /**
   * <p>The error message text for <code>ErrorCause</code>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error category for <code>ErrorCause</code>.</p>
   * @public
   */
  ErrorCategory?: ErrorCategory | undefined;
}

/**
 * <p>The data store properties.</p>
 * @public
 */
export interface DatastoreProperties {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used in the creation of the data store.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The time the data store was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The FHIR release version supported by the data store. Current support is for version
   *             <code>R4</code>.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>The AWS endpoint for the data store.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;

  /**
   * <p> The server-side encryption key configuration for a customer provided encryption
   *          key.</p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>The preloaded Synthea data configuration for the data store.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>The identity provider selected during data store creation.</p>
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
   * <p> The AWS-generated identifier for the data store to be deleted.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated ID for the deleted data store.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants access permission to AWS HealthLake.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint of the data store to be deleted.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreResponse {
  /**
   * <p>The data store properties.</p>
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobRequest {
  /**
   * <p>The data store identifier from which FHIR data is being exported from.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The configuration of the S3 bucket for either an import or export job. This includes
 *          assigning access permissions.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The <code>S3Uri</code> is the user-specified S3 location of the FHIR data to be
   *          imported into AWS HealthLake.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID used to access the S3 bucket. </p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The output data configuration supplied when the export job was created.</p>
 * @public
 */
export type OutputDataConfig = OutputDataConfig.S3ConfigurationMember | OutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputDataConfig {
  /**
   * <p>The output data configuration supplied when the export job was created. </p>
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Configuration: (value: S3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The properties of a FHIR export job.</p>
 * @public
 */
export interface ExportJobProperties {
  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The export job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The export job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time the export job was initiated.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time the export job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used during the initiation of the export job.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that might have occurred during the export job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobResponse {
  /**
   * <p>The export job properties.</p>
   * @public
   */
  ExportJobProperties: ExportJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p> The import job input properties.</p>
 * @public
 */
export type InputDataConfig = InputDataConfig.S3UriMember | InputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace InputDataConfig {
  /**
   * <p>The <code>S3Uri</code> is the user-specified S3 location of the FHIR data to be
   *          imported into AWS HealthLake.</p>
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The progress report for the import job.</p>
 * @public
 */
export interface JobProgressReport {
  /**
   * <p>The number of files scanned from the S3 input bucket.</p>
   * @public
   */
  TotalNumberOfScannedFiles?: number | undefined;

  /**
   * <p>The size (in MB) of files scanned from the S3 input bucket.</p>
   * @public
   */
  TotalSizeOfScannedFilesInMB?: number | undefined;

  /**
   * <p>The number of files imported.</p>
   * @public
   */
  TotalNumberOfImportedFiles?: number | undefined;

  /**
   * <p>The number of resources scanned from the S3 input bucket.</p>
   * @public
   */
  TotalNumberOfResourcesScanned?: number | undefined;

  /**
   * <p>The number of resources imported.</p>
   * @public
   */
  TotalNumberOfResourcesImported?: number | undefined;

  /**
   * <p>The number of resources that failed due to customer error.</p>
   * @public
   */
  TotalNumberOfResourcesWithCustomerError?: number | undefined;

  /**
   * <p>The number of files that failed to be read from the S3 input bucket due to customer
   *          error.</p>
   * @public
   */
  TotalNumberOfFilesReadWithCustomerError?: number | undefined;

  /**
   * <p>The transaction rate the import job is processed at.</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>The import job properties.</p>
 * @public
 */
export interface ImportJobProperties {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The import job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The import job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time the import job was submitted for processing.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time the import job was completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The data store identifier. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The input data configuration supplied when the import job was created.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>Displays the progress of the import job, including total resources scanned, total
   *          resources imported, and total size of data imported.</p>
   * @public
   */
  JobProgressReport?: JobProgressReport | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants AWS HealthLake access to the input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that might have occurred during the FHIR import job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The validation level of the import job.</p>
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobResponse {
  /**
   * <p>The import job properties.</p>
   * @public
   */
  ImportJobProperties: ImportJobProperties | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresRequest {
  /**
   * <p>List all filters associated with a FHIR data store request.</p>
   * @public
   */
  Filter?: DatastoreFilter | undefined;

  /**
   * <p>The token used to retrieve the next page of data stores when results are
   *          paginated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data stores returned on a page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresResponse {
  /**
   * <p>The properties associated with all listed data stores.</p>
   * @public
   */
  DatastorePropertiesList: DatastoreProperties[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsRequest {
  /**
   * <p>Limits the response to the export job with the specified data store ID. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>A pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Limits the number of results returned for a ListFHIRExportJobs to a maximum quantity
   *          specified by the user.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Limits the response to the export job with the specified job name. </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Limits the response to export jobs with the specified job status. </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Limits the response to FHIR export jobs submitted before a user- specified date.</p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>Limits the response to FHIR export jobs submitted after a user-specified date.</p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsResponse {
  /**
   * <p>The properties of listed FHIR export jobs.</p>
   * @public
   */
  ExportJobPropertiesList: ExportJobProperties[] | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsRequest {
  /**
   * <p>Limits the response to the import job with the specified data store ID. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Limits the number of results returned for <code>ListFHIRImportJobs</code> to a maximum
   *          quantity specified by the user.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Limits the response to the import job with the specified job name. </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Limits the response to the import job with the specified job status. </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Limits the response to FHIR import jobs submitted before a user- specified date. </p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>Limits the response to FHIR import jobs submitted after a user-specified date.</p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsResponse {
  /**
   * <p>The properties for listed import jobs.</p>
   * @public
   */
  ImportJobPropertiesList: ImportJobProperties[] | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data store to which tags are being added.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Returns a list of tags associated with a data store. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobRequest {
  /**
   * <p>The export job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The output data configuration supplied when the export job was started.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used during initiation of the export job.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An optional user provided token used for ensuring API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobResponse {
  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The export job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobRequest {
  /**
   * <p>The import job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The input properties for the import job request.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants access permission to AWS HealthLake.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The optional user-provided token used for ensuring API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The validation level of the import job.</p>
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobResponse {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The import job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that grants access to the data store tags are being added to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The user-specified key and value pair tags being added to a data store.</p>
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
   * <p>The Amazon Resource Name (ARN) of the data store from which tags are being removed.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys for the tags to be removed from the data store.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

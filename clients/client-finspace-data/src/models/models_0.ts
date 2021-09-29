import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ChangeType {
  APPEND = "APPEND",
  MODIFY = "MODIFY",
  REPLACE = "REPLACE",
}

export enum FormatType {
  CSV = "CSV",
  JSON = "JSON",
  PARQUET = "PARQUET",
  XML = "XML",
}

export enum SourceType {
  S3 = "S3",
}

export interface CreateChangesetRequest {
  /**
   * <p>The unique identifier for the FinSpace dataset in which the changeset will be
   *       created.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>Option to indicate how a changeset will be applied to a dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Changeset will be considered as a replacement to all prior
   *           loaded changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> - Changeset will be considered as an addition to the end of all
   *           prior loaded changesets.</p>
   *             </li>
   *          </ul>
   */
  changeType: ChangeType | string | undefined;

  /**
   * <p>Type of the data source from which the files to create the changeset will be
   *       sourced.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S3</code> - Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  sourceType: SourceType | string | undefined;

  /**
   * <p>Source path from which the files to create the changeset will be sourced.</p>
   */
  sourceParams: { [key: string]: string } | undefined;

  /**
   * <p>Format type of the input files being loaded into the changeset.</p>
   */
  formatType?: FormatType | string;

  /**
   * <p>Options that define the structure of the source file(s).</p>
   */
  formatParams?: { [key: string]: string };

  /**
   * <p>Metadata tags to apply to this changeset.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateChangesetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangesetRequest): any => ({
    ...obj,
  });
}

export enum ErrorCategory {
  ACCESS_DENIED = "Missing_required_permission_to_perform_this_request",
  CANCELLED = "Cancelled",
  INTERNAL_SERVICE_EXCEPTION = "An_internal_error_has_occurred",
  RESOURCE_NOT_FOUND = "One_or_more_inputs_to_this_request_were_not_found",
  SERVICE_QUOTA_EXCEEDED = "Service_limits_have_been_exceeded",
  THROTTLING = "The_system_temporarily_lacks_sufficient_resources_to_process_the_request",
  USER_RECOVERABLE = "A_user_recoverable_error_has_occurred",
  VALIDATION = "The_inputs_to_this_request_are_invalid",
}

/**
 * <p>Error message.</p>
 */
export interface ErrorInfo {
  /**
   * <p>The text of the error message.</p>
   */
  errorMessage?: string;

  /**
   * <p>The category of the error.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VALIDATION</code> -The inputs to this request are invalid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_EXCEEDED</code> - Service quotas have been exceeded. Please
   *           contact AWS support to increase quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> - Missing required permission to perform this
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_NOT_FOUND</code> - One or more inputs to this request were not
   *           found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLING</code> - The system temporarily lacks sufficient resources to process
   *           the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVICE_EXCEPTION</code> - An internal service error has
   *           occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - A user recoverable error has occurred.</p>
   *             </li>
   *          </ul>
   */
  errorCategory?: ErrorCategory | string;
}

export namespace ErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

export enum ChangesetStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUCCESS = "SUCCESS",
}

/**
 * <p>A changeset is unit of data in a dataset.</p>
 */
export interface ChangesetInfo {
  /**
   * <p>Unique identifier for a changeset.</p>
   */
  id?: string;

  /**
   * <p>The ARN identifier of the changeset.</p>
   */
  changesetArn?: string;

  /**
   * <p>The unique identifier for the FinSpace dataset in which the changeset is created.</p>
   */
  datasetId?: string;

  /**
   * <p>Change type indicates how a changeset is applied to a dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Changeset is considered as a replacement to all prior loaded
   *           changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> - Changeset is considered as an addition to the end of all prior
   *           loaded changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - Changeset is considered as a replacement to a specific prior
   *           ingested changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType?: ChangeType | string;

  /**
   * <p>Type of the data source from which the files to create the changeset are sourced.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S3</code> - Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  sourceType?: SourceType | string;

  /**
   * <p>Source path from which the files to create the changeset are sourced.</p>
   */
  sourceParams?: { [key: string]: string };

  /**
   * <p>Format type of the input files loaded into the changeset.</p>
   */
  formatType?: FormatType | string;

  /**
   * <p>Structure of the source file(s).</p>
   */
  formatParams?: { [key: string]: string };

  /**
   * <p>The timestamp at which the changeset was created in FinSpace.</p>
   */
  createTimestamp?: Date;

  /**
   * <p>The status of changeset creation operation.</p>
   */
  status?: ChangesetStatus | string;

  /**
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>Tags associated with the changeset.</p>
   */
  changesetLabels?: { [key: string]: string };

  /**
   * <p>Unique identifier of the changeset that is updated.</p>
   */
  updatesChangesetId?: string;

  /**
   * <p>Unique identifier of the changeset that is updated a changeset.</p>
   */
  updatedByChangesetId?: string;
}

export namespace ChangesetInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangesetInfo): any => ({
    ...obj,
  });
}

export interface CreateChangesetResponse {
  /**
   * <p>Returns the changeset details.</p>
   */
  changeset?: ChangesetInfo;
}

export namespace CreateChangesetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangesetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface GetProgrammaticAccessCredentialsRequest {
  /**
   * <p>The time duration in which the credentials remain valid. </p>
   */
  durationInMinutes?: number;

  /**
   * <p>The habanero environment identifier.</p>
   */
  environmentId: string | undefined;
}

export namespace GetProgrammaticAccessCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProgrammaticAccessCredentialsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Set short term API credentials.</p>
 */
export interface Credentials {
  /**
   * <p>The access key identifier.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The access key.</p>
   */
  secretAccessKey?: string;

  /**
   * <p>The session token.</p>
   */
  sessionToken?: string;
}

export namespace Credentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Credentials): any => ({
    ...obj,
  });
}

export interface GetProgrammaticAccessCredentialsResponse {
  /**
   * <p>Returns the programmatic credentials.</p>
   */
  credentials?: Credentials;

  /**
   * <p>Returns the duration in which the credentials will remain valid.</p>
   */
  durationInMinutes?: number;
}

export namespace GetProgrammaticAccessCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProgrammaticAccessCredentialsResponse): any => ({
    ...obj,
  });
}

export enum LocationType {
  INGESTION = "INGESTION",
  SAGEMAKER = "SAGEMAKER",
}

export interface GetWorkingLocationRequest {
  /**
   * <p>Specify the type of the working location.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAGEMAKER</code> - Use the Amazon S3 location as a temporary location to store data content when
   *           working with FinSpace Notebooks that run on SageMaker studio.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INGESTION</code> - Use the Amazon S3 location as a staging location to copy your
   *           data content and then use the location with the changeset creation operation.</p>
   *             </li>
   *          </ul>
   */
  locationType?: LocationType | string;
}

export namespace GetWorkingLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkingLocationRequest): any => ({
    ...obj,
  });
}

export interface GetWorkingLocationResponse {
  /**
   * <p>Returns the Amazon S3 URI for the working location.</p>
   */
  s3Uri?: string;

  /**
   * <p>Returns the Amazon S3 Path for the working location.</p>
   */
  s3Path?: string;

  /**
   * <p>Returns the Amazon S3 bucket name for the working location.</p>
   */
  s3Bucket?: string;
}

export namespace GetWorkingLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkingLocationResponse): any => ({
    ...obj,
  });
}

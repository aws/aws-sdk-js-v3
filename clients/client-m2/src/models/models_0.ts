// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { M2ServiceException as __BaseException } from "./M2ServiceException";

/**
 * <p>The account or role doesn't have the right permissions to make the request.</p>
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
 * <p>Defines an alternate key. This value is optional. A legacy data set might not have any
 *          alternate key defined but if those alternate keys definitions exist, provide them, as some
 *          applications will make use of them.</p>
 */
export interface AlternateKey {
  /**
   * <p>The name of the alternate key.</p>
   */
  name?: string;

  /**
   * <p>A positive integer value representing the offset to mark the start of the alternate key
   *          part in the record byte array.</p>
   */
  offset: number | undefined;

  /**
   * <p>A strictly positive integer value representing the length of the alternate key.</p>
   */
  length: number | undefined;

  /**
   * <p>Indicates whether the alternate key values are supposed to be unique for the given data
   *          set.</p>
   */
  allowDuplicates?: boolean;
}

export namespace AlternateKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlternateKey): any => ({
    ...obj,
  });
}

export interface CancelBatchJobExecutionRequest {
  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job execution.</p>
   */
  executionId: string | undefined;
}

export namespace CancelBatchJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchJobExecutionRequest): any => ({
    ...obj,
  });
}

export interface CancelBatchJobExecutionResponse {}

export namespace CancelBatchJobExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchJobExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters provided in the request conflict with existing resources.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the conflicting resource.</p>
   */
  resourceType?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>An unexpected error occurred during the processing of the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the missing resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the missing resource.</p>
   */
  resourceType?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The number of requests made exceeds the limit.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The identifier of the service that the throttled request was made to.</p>
   */
  serviceCode?: string;

  /**
   * <p>The identifier of the throttled reuqest.</p>
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   */
  retryAfterSeconds?: number;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Contains information about a validation exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception field.</p>
   */
  name: string | undefined;

  /**
   * <p>The message of the exception field.</p>
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>One or more parameters provided in the request is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason why it failed service validation.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>The list of fields that failed service validation.</p>
   */
  fieldList?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The application definition for a particular application. </p>
 */
export type Definition = Definition.ContentMember | Definition.S3LocationMember | Definition.$UnknownMember;

export namespace Definition {
  /**
   * <p>The S3 bucket that contains the application definition.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    content?: never;
    $unknown?: never;
  }

  /**
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration/definitions that identify an application.</p>
   */
  export interface ContentMember {
    s3Location?: never;
    content: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3Location?: never;
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Location: (value: string) => T;
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Definition, visitor: Visitor<T>): T => {
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Definition): any => {
    if (obj.s3Location !== undefined) return { s3Location: obj.s3Location };
    if (obj.content !== undefined) return { content: obj.content };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum EngineType {
  BLUAGE = "bluage",
  MICROFOCUS = "microfocus",
}

export interface CreateApplicationRequest {
  /**
   * <p>The unique identifier of the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The type of the target platform for this application.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   */
  definition: Definition | undefined;

  /**
   * <p>A list of tags to apply to the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Unique, case-sensitive identifier the service generates to ensure the idempotency of the
   *          request to create an application. The service generates the clientToken when the API call
   *          is triggered. The token expires after one hour, so if you retry the API within this
   *          timeframe with the same clientToken, you will get the same response. The service also
   *          handles deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
    ...(obj.definition && { definition: Definition.filterSensitiveLog(obj.definition) }),
  });
}

export interface CreateApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * <p>The unique application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The version number of the application.</p>
   */
  applicationVersion: number | undefined;
}

export namespace CreateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is exceeding the quota limit.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of resource that is exceeding the quota limit for Amazon Web Services Mainframe Modernization.</p>
   */
  resourceType?: string;

  /**
   * <p>A code that identifies the service that the exceeded quota belongs to.</p>
   */
  serviceCode?: string;

  /**
   * <p>The identifier of the exceeded quota.</p>
   */
  quotaCode?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The required attributes for a generation data group data set. A generation data set is
 *          one of a collection of successive, historically related, catalogued data sets that together
 *          are known as a generation data group (GDG). Use this structure when you want to import a
 *          GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation
 *             data sets</a>.</p>
 */
export interface GdgAttributes {
  /**
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   */
  limit?: number;

  /**
   * <p>The disposition of the data set in the catalog.</p>
   */
  rollDisposition?: string;
}

export namespace GdgAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GdgAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The primary key for a KSDS data set.</p>
 */
export interface PrimaryKey {
  /**
   * <p>A name for the Primary Key.</p>
   */
  name?: string;

  /**
   * <p>A positive integer value representing the offset to mark the start of the primary key in
   *          the record byte array.</p>
   */
  offset: number | undefined;

  /**
   * <p>A strictly positive integer value representing the length of the primary key. </p>
   */
  length: number | undefined;
}

export namespace PrimaryKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrimaryKey): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes of a VSAM type data set.</p>
 */
export interface VsamAttributes {
  /**
   * <p>The record format of the data set.</p>
   */
  format: string | undefined;

  /**
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   */
  encoding?: string;

  /**
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   */
  compressed?: boolean;

  /**
   * <p>The primary key of the data set.</p>
   */
  primaryKey?: PrimaryKey;

  /**
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   */
  alternateKeys?: AlternateKey[];
}

export namespace VsamAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VsamAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 */
export type DatasetOrgAttributes =
  | DatasetOrgAttributes.GdgMember
  | DatasetOrgAttributes.VsamMember
  | DatasetOrgAttributes.$UnknownMember;

export namespace DatasetOrgAttributes {
  /**
   * <p>The details of a VSAM data set.</p>
   */
  export interface VsamMember {
    vsam: VsamAttributes;
    gdg?: never;
    $unknown?: never;
  }

  /**
   * <p>The generation data group of the data set.</p>
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgAttributes;
    $unknown?: never;
  }

  export interface $UnknownMember {
    vsam?: never;
    gdg?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vsam: (value: VsamAttributes) => T;
    gdg: (value: GdgAttributes) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatasetOrgAttributes, visitor: Visitor<T>): T => {
    if (value.vsam !== undefined) return visitor.vsam(value.vsam);
    if (value.gdg !== undefined) return visitor.gdg(value.gdg);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetOrgAttributes): any => {
    if (obj.vsam !== undefined) return { vsam: VsamAttributes.filterSensitiveLog(obj.vsam) };
    if (obj.gdg !== undefined) return { gdg: GdgAttributes.filterSensitiveLog(obj.gdg) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The length of the records in the data set.</p>
 */
export interface RecordLength {
  /**
   * <p>The minimum record length of a record.</p>
   */
  min: number | undefined;

  /**
   * <p>The maximum record length. In case of fixed, both minimum and maximum are the
   *          same.</p>
   */
  max: number | undefined;
}

export namespace RecordLength {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordLength): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a data set.</p>
 */
export interface DataSet {
  /**
   * <p>The storage type of the data set: database or file system. For Micro Focus, database
   *          corresponds to datastore and file system corresponds to EFS/FSX. For Blu Age, there is no
   *          support of file system and database corresponds to Blusam. </p>
   */
  storageType?: string;

  /**
   * <p>The logical identifier for a specific data set (in mainframe format).</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The type of dataset. Possible values include VSAM, IS, PS, GDG, PO, PS, UNKNOWN
   *          etc.</p>
   */
  datasetOrg: DatasetOrgAttributes | undefined;

  /**
   * <p>The relative location of the data set in the database or file system. </p>
   */
  relativePath?: string;

  /**
   * <p>The length of a record.</p>
   */
  recordLength: RecordLength | undefined;
}

export namespace DataSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSet): any => ({
    ...obj,
    ...(obj.datasetOrg && { datasetOrg: DatasetOrgAttributes.filterSensitiveLog(obj.datasetOrg) }),
  });
}

/**
 * <p>Defines an external storage location.</p>
 */
export type ExternalLocation = ExternalLocation.S3LocationMember | ExternalLocation.$UnknownMember;

export namespace ExternalLocation {
  /**
   * <p>The URI of the Amazon S3 bucket.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3Location?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Location: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExternalLocation, visitor: Visitor<T>): T => {
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalLocation): any => {
    if (obj.s3Location !== undefined) return { s3Location: obj.s3Location };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Identifies a specific data set to import from an external location.</p>
 */
export interface DataSetImportItem {
  /**
   * <p>The data set.</p>
   */
  dataSet: DataSet | undefined;

  /**
   * <p>The location of the data set.</p>
   */
  externalLocation: ExternalLocation | undefined;
}

export namespace DataSetImportItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetImportItem): any => ({
    ...obj,
    ...(obj.dataSet && { dataSet: DataSet.filterSensitiveLog(obj.dataSet) }),
    ...(obj.externalLocation && { externalLocation: ExternalLocation.filterSensitiveLog(obj.externalLocation) }),
  });
}

/**
 * <p>Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.</p>
 */
export type DataSetImportConfig =
  | DataSetImportConfig.DataSetsMember
  | DataSetImportConfig.S3LocationMember
  | DataSetImportConfig.$UnknownMember;

export namespace DataSetImportConfig {
  /**
   * <p>The Amazon S3 location of the data sets.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    dataSets?: never;
    $unknown?: never;
  }

  /**
   * <p>The data sets.</p>
   */
  export interface DataSetsMember {
    s3Location?: never;
    dataSets: DataSetImportItem[];
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3Location?: never;
    dataSets?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Location: (value: string) => T;
    dataSets: (value: DataSetImportItem[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSetImportConfig, visitor: Visitor<T>): T => {
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    if (value.dataSets !== undefined) return visitor.dataSets(value.dataSets);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetImportConfig): any => {
    if (obj.s3Location !== undefined) return { s3Location: obj.s3Location };
    if (obj.dataSets !== undefined)
      return { dataSets: obj.dataSets.map((item) => DataSetImportItem.filterSensitiveLog(item)) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface CreateDataSetImportTaskRequest {
  /**
   * <p>The unique identifier of the application for which you want to import data sets.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The data set import task configuration.</p>
   */
  importConfig: DataSetImportConfig | undefined;

  /**
   * <p> Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a data set import. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

export namespace CreateDataSetImportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetImportTaskRequest): any => ({
    ...obj,
    ...(obj.importConfig && { importConfig: DataSetImportConfig.filterSensitiveLog(obj.importConfig) }),
  });
}

export interface CreateDataSetImportTaskResponse {
  /**
   * <p>The task identifier. This operation is asynchronous. Use this identifier with the <a>GetDataSetImportTask</a> operation to obtain the status of this task.</p>
   */
  taskId: string | undefined;
}

export namespace CreateDataSetImportTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetImportTaskResponse): any => ({
    ...obj,
  });
}

export interface CreateDeploymentRequest {
  /**
   * <p>The identifier of the environment where this application will be deployed.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The version of the application to deploy.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a deployment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

export namespace CreateDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
}

export interface CreateDeploymentResponse {
  /**
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;
}

export namespace CreateDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to delete.</p>
   */
  applicationId: string | undefined;
}

export namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationResponse {}

export namespace DeleteApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationFromEnvironmentRequest {
  /**
   * <p>The unique identifier of the application you want to delete.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment where the application was previously
   *          deployed.</p>
   */
  environmentId: string | undefined;
}

export namespace DeleteApplicationFromEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationFromEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationFromEnvironmentResponse {}

export namespace DeleteApplicationFromEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationFromEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface GetApplicationRequest {
  /**
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;
}

export namespace GetApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationRequest): any => ({
    ...obj,
  });
}

export enum DeploymentLifecycle {
  DEPLOYING = "Deploying",
  FAILED = "Failed",
  SUCCEEDED = "Succeeded",
}

/**
 * <p>Contains a summary of a deployed application.</p>
 */
export interface DeployedVersionSummary {
  /**
   * <p>The version of the deployed application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the deployment.</p>
   */
  status: DeploymentLifecycle | string | undefined;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace DeployedVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeployedVersionSummary): any => ({
    ...obj,
  });
}

export enum ApplicationVersionLifecycle {
  AVAILABLE = "Available",
  CREATING = "Creating",
  FAILED = "Failed",
}

/**
 * <p>Defines an application version summary.</p>
 */
export interface ApplicationVersionSummary {
  /**
   * <p>The application version.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the application.</p>
   */
  status: ApplicationVersionLifecycle | string | undefined;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * <p>The timestamp when the application version was created.</p>
   */
  creationTime: Date | undefined;
}

export namespace ApplicationVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A subset of the attributes about a log group. In CloudWatch a log group is a group of log
 *          streams that share the same retention, monitoring, and access control settings.</p>
 */
export interface LogGroupSummary {
  /**
   * <p>The type of log.</p>
   */
  logType: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace LogGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogGroupSummary): any => ({
    ...obj,
  });
}

export enum ApplicationLifecycle {
  AVAILABLE = "Available",
  CREATED = "Created",
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  READY = "Ready",
  RUNNING = "Running",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface GetApplicationResponse {
  /**
   * <p>The unique identifier of the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * <p>The status of the application.</p>
   */
  status: ApplicationLifecycle | string | undefined;

  /**
   * <p>The latest version of the application.</p>
   */
  latestVersion: ApplicationVersionSummary | undefined;

  /**
   * <p>The version of the application that is deployed.</p>
   */
  deployedVersion?: DeployedVersionSummary;

  /**
   * <p>The type of the target platform for the application.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The list of log summaries. Each log summary includes the log type as well as the log
   *          group identifier. These are CloudWatch logs. The Amazon Web Services Mainframe Modernization application log is pushed to CloudWatch
   *          under the customer's account.</p>
   */
  logGroups?: LogGroupSummary[];

  /**
   * <p>The timestamp when this application was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp when the application was last started. Null until the application has
   *          started running for the first time.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>A list of tags associated with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The identifier of the environment where the application will be deployed.</p>
   */
  environmentId?: string;

  /**
   * <p>Returns the Amazon Resource Names (ARNs) of the target groups that are attached to the
   *          network load balancer.</p>
   */
  targetGroupArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the network load balancer listener created in your
   *          Amazon Web Services account. Amazon Web Services Mainframe Modernization creates this listener on your behalf the first time you deploy an
   *          application.</p>
   */
  listenerArns?: string[];

  /**
   * <p>The port associated with the network load balancer listener created in your Amazon Web Services
   *          account.</p>
   */
  listenerPorts?: number[];

  /**
   * <p>The public DNS name of the load balancer created in your Amazon Web Services account.</p>
   */
  loadBalancerDnsName?: string;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace GetApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationResponse): any => ({
    ...obj,
  });
}

export interface GetApplicationVersionRequest {
  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The specific version of the application.</p>
   */
  applicationVersion: number | undefined;
}

export namespace GetApplicationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationVersionRequest): any => ({
    ...obj,
  });
}

export interface GetApplicationVersionResponse {
  /**
   * <p>The name of the application version.</p>
   */
  name: string | undefined;

  /**
   * <p>The specific version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The application description.</p>
   */
  description?: string;

  /**
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration/definitions that identify an application.</p>
   */
  definitionContent: string | undefined;

  /**
   * <p>The status of the application version.</p>
   */
  status: ApplicationVersionLifecycle | string | undefined;

  /**
   * <p>The timestamp when the application version was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace GetApplicationVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationVersionResponse): any => ({
    ...obj,
  });
}

export interface GetBatchJobExecutionRequest {
  /**
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job execution.</p>
   */
  executionId: string | undefined;
}

export namespace GetBatchJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchJobExecutionRequest): any => ({
    ...obj,
  });
}

export enum BatchJobType {
  JES2 = "JES2",
  JES3 = "JES3",
  VSE = "VSE",
}

export enum BatchJobExecutionStatus {
  CANCELLED = "Cancelled",
  CANCELLING = "Cancelling",
  DISPATCH = "Dispatching",
  FAILED = "Failed",
  HOLDING = "Holding",
  RUNNING = "Running",
  SUBMITTING = "Submitting",
  SUCCEEDED = "Succeeded",
  SUCCEEDED_WITH_WARNING = "Succeeded With Warning",
}

export interface GetBatchJobExecutionResponse {
  /**
   * <p>The unique identifier for this batch job execution.</p>
   */
  executionId: string | undefined;

  /**
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier for this batch job.</p>
   */
  jobId?: string;

  /**
   * <p>The name of this batch job.</p>
   */
  jobName?: string;

  /**
   * <p>The user for the job.</p>
   */
  jobUser?: string;

  /**
   * <p>The type of job.</p>
   */
  jobType?: BatchJobType | string;

  /**
   * <p>The status of the batch job execution.</p>
   */
  status: BatchJobExecutionStatus | string | undefined;

  /**
   * <p>The timestamp when the batch job execution started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp when the batch job execution ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace GetBatchJobExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchJobExecutionResponse): any => ({
    ...obj,
  });
}

export interface GetDataSetDetailsRequest {
  /**
   * <p>The unique identifier of the application that this data set is associated with.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;
}

export namespace GetDataSetDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetDetailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The required attributes for a generation data group data set. A generation data set is
 *          one of a collection of successive, historically related, catalogued data sets that together
 *          are known as a generation data group (GDG). Use this structure when you want to import a
 *          GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation
 *             data sets</a>.</p>
 */
export interface GdgDetailAttributes {
  /**
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   */
  limit?: number;

  /**
   * <p>The disposition of the data set in the catalog.</p>
   */
  rollDisposition?: string;
}

export namespace GdgDetailAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GdgDetailAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes of a VSAM type data set.</p>
 */
export interface VsamDetailAttributes {
  /**
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   */
  encoding?: string;

  /**
   * <p>The record format of the data set.</p>
   */
  recordFormat?: string;

  /**
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   */
  compressed?: boolean;

  /**
   * <p>If set to True, enforces loading the data set into cache before it’s used by the
   *          application.</p>
   */
  cacheAtStartup?: boolean;

  /**
   * <p>The primary key of the data set.</p>
   */
  primaryKey?: PrimaryKey;

  /**
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   */
  alternateKeys?: AlternateKey[];
}

export namespace VsamDetailAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VsamDetailAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 */
export type DatasetDetailOrgAttributes =
  | DatasetDetailOrgAttributes.GdgMember
  | DatasetDetailOrgAttributes.VsamMember
  | DatasetDetailOrgAttributes.$UnknownMember;

export namespace DatasetDetailOrgAttributes {
  /**
   * <p>The details of a VSAM data set.</p>
   */
  export interface VsamMember {
    vsam: VsamDetailAttributes;
    gdg?: never;
    $unknown?: never;
  }

  /**
   * <p>The generation data group of the data set.</p>
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgDetailAttributes;
    $unknown?: never;
  }

  export interface $UnknownMember {
    vsam?: never;
    gdg?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vsam: (value: VsamDetailAttributes) => T;
    gdg: (value: GdgDetailAttributes) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatasetDetailOrgAttributes, visitor: Visitor<T>): T => {
    if (value.vsam !== undefined) return visitor.vsam(value.vsam);
    if (value.gdg !== undefined) return visitor.gdg(value.gdg);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetDetailOrgAttributes): any => {
    if (obj.vsam !== undefined) return { vsam: VsamDetailAttributes.filterSensitiveLog(obj.vsam) };
    if (obj.gdg !== undefined) return { gdg: GdgDetailAttributes.filterSensitiveLog(obj.gdg) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface GetDataSetDetailsResponse {
  /**
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;

  /**
   * <p>The type of data set. Possible values include VSAM, IS, PS, GDG, PO, PS, or
   *          unknown.</p>
   */
  dataSetOrg?: DatasetDetailOrgAttributes;

  /**
   * <p>The length of records in the data set.</p>
   */
  recordLength?: number;

  /**
   * <p>The locaion where the data set is stored.</p>
   */
  location?: string;

  /**
   * <p>The size of the block on disk. </p>
   */
  blocksize?: number;

  /**
   * <p>The timestamp when the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The last time the data set was referenced.</p>
   */
  lastReferencedTime?: Date;
}

export namespace GetDataSetDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetDetailsResponse): any => ({
    ...obj,
    ...(obj.dataSetOrg && { dataSetOrg: DatasetDetailOrgAttributes.filterSensitiveLog(obj.dataSetOrg) }),
  });
}

export interface GetDataSetImportTaskRequest {
  /**
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The task identifier returned by the <a>CreateDataSetImportTask</a> operation.
   *       </p>
   */
  taskId: string | undefined;
}

export namespace GetDataSetImportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetImportTaskRequest): any => ({
    ...obj,
  });
}

export enum DataSetTaskLifecycle {
  COMPLETED = "Completed",
  CREATING = "Creating",
  RUNNING = "Running",
}

/**
 * <p>Represents a summary of data set imports.</p>
 */
export interface DataSetImportSummary {
  /**
   * <p>The total number of data set imports.</p>
   */
  total: number | undefined;

  /**
   * <p>The number of data set imports that have succeeded.</p>
   */
  succeeded: number | undefined;

  /**
   * <p>The number of data set imports that have failed.</p>
   */
  failed: number | undefined;

  /**
   * <p>The number of data set imports that are pending.</p>
   */
  pending: number | undefined;

  /**
   * <p>The number of data set imports that are in progress.</p>
   */
  inProgress: number | undefined;
}

export namespace DataSetImportSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetImportSummary): any => ({
    ...obj,
  });
}

export interface GetDataSetImportTaskResponse {
  /**
   * <p>The task identifier.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The status of the task.</p>
   */
  status: DataSetTaskLifecycle | string | undefined;

  /**
   * <p>A summary of the status of the task.</p>
   */
  summary?: DataSetImportSummary;
}

export namespace GetDataSetImportTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSetImportTaskResponse): any => ({
    ...obj,
  });
}

export interface GetDeploymentRequest {
  /**
   * <p>The unique identifier for the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

export namespace GetDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentRequest): any => ({
    ...obj,
  });
}

export interface GetDeploymentResponse {
  /**
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The application version.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the deployment.</p>
   */
  status: DeploymentLifecycle | string | undefined;

  /**
   * <p>The timestamp when the deployment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace GetDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentResponse): any => ({
    ...obj,
  });
}

export interface ListApplicationsRequest {
  /**
   * <p>A pagination token to control the number of applications displayed in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of applications to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The names of the applications.</p>
   */
  names?: string[];

  /**
   * <p>The unique identifier of the runtime environment where the applications are
   *          deployed.</p>
   */
  environmentId?: string;
}

export namespace ListApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
}

export enum ApplicationDeploymentLifecycle {
  DEPLOYED = "Deployed",
  DEPLOYING = "Deploying",
}

/**
 * <p>A subset of the possible application attributes. Used in the application list.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the application.</p>
   */
  status: ApplicationLifecycle | string | undefined;

  /**
   * <p>The type of the target platform for this application.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The timestamp when the application was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The unique identifier of the runtime environment that hosts this application.</p>
   */
  environmentId?: string;

  /**
   * <p>The timestamp when the application was last started. Null until the application has
   *          started running for the first time.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>Indicates the status of the latest version of the application.</p>
   */
  versionStatus?: ApplicationVersionLifecycle | string;

  /**
   * <p>Indicates whether there is an ongoing deployment or if the application has ever deployed
   *          successfully.</p>
   */
  deploymentStatus?: ApplicationDeploymentLifecycle | string;
}

export namespace ApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj,
  });
}

export interface ListApplicationsResponse {
  /**
   * <p>Returns a list of summary details for all the applications in an environment.</p>
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all
   *          applications.</p>
   */
  nextToken?: string;
}

export namespace ListApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListApplicationVersionsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of application versions to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

export namespace ListApplicationVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListApplicationVersionsResponse {
  /**
   * <p>The list of application versions.</p>
   */
  applicationVersions: ApplicationVersionSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListApplicationVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListBatchJobDefinitionsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch job definitions to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>If the batch job definition is a FileBatchJobDefinition, the prefix allows you to search
   *          on the file names of FileBatchJobDefinitions.</p>
   */
  prefix?: string;
}

export namespace ListBatchJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchJobDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A file containing a batch job definition.</p>
 */
export interface FileBatchJobDefinition {
  /**
   * <p>The name of the file containing the batch job definition.</p>
   */
  fileName: string | undefined;

  /**
   * <p>The path to the file containing the batch job definition.</p>
   */
  folderPath?: string;
}

export namespace FileBatchJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileBatchJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A batch job definition contained in a script.</p>
 */
export interface ScriptBatchJobDefinition {
  /**
   * <p>The name of the script containing the batch job definition.</p>
   */
  scriptName: string | undefined;
}

export namespace ScriptBatchJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScriptBatchJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the details of a batch job.</p>
 */
export type BatchJobDefinition =
  | BatchJobDefinition.FileBatchJobDefinitionMember
  | BatchJobDefinition.ScriptBatchJobDefinitionMember
  | BatchJobDefinition.$UnknownMember;

export namespace BatchJobDefinition {
  /**
   * <p>Specifies a file containing a batch job definition.</p>
   */
  export interface FileBatchJobDefinitionMember {
    fileBatchJobDefinition: FileBatchJobDefinition;
    scriptBatchJobDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>A script containing a batch job definition.</p>
   */
  export interface ScriptBatchJobDefinitionMember {
    fileBatchJobDefinition?: never;
    scriptBatchJobDefinition: ScriptBatchJobDefinition;
    $unknown?: never;
  }

  export interface $UnknownMember {
    fileBatchJobDefinition?: never;
    scriptBatchJobDefinition?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileBatchJobDefinition: (value: FileBatchJobDefinition) => T;
    scriptBatchJobDefinition: (value: ScriptBatchJobDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BatchJobDefinition, visitor: Visitor<T>): T => {
    if (value.fileBatchJobDefinition !== undefined) return visitor.fileBatchJobDefinition(value.fileBatchJobDefinition);
    if (value.scriptBatchJobDefinition !== undefined)
      return visitor.scriptBatchJobDefinition(value.scriptBatchJobDefinition);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchJobDefinition): any => {
    if (obj.fileBatchJobDefinition !== undefined)
      return { fileBatchJobDefinition: FileBatchJobDefinition.filterSensitiveLog(obj.fileBatchJobDefinition) };
    if (obj.scriptBatchJobDefinition !== undefined)
      return { scriptBatchJobDefinition: ScriptBatchJobDefinition.filterSensitiveLog(obj.scriptBatchJobDefinition) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface ListBatchJobDefinitionsResponse {
  /**
   * <p>The list of batch job definitions.</p>
   */
  batchJobDefinitions: BatchJobDefinition[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListBatchJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchJobDefinitionsResponse): any => ({
    ...obj,
    ...(obj.batchJobDefinitions && {
      batchJobDefinitions: obj.batchJobDefinitions.map((item) => BatchJobDefinition.filterSensitiveLog(item)),
    }),
  });
}

export interface ListBatchJobExecutionsRequest {
  /**
   * <p>A pagination token to control the number of batch job executions displayed in the
   *          list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch job executions to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of each batch job execution.</p>
   */
  executionIds?: string[];

  /**
   * <p>The name of each batch job execution.</p>
   */
  jobName?: string;

  /**
   * <p>The status of the batch job executions.</p>
   */
  status?: BatchJobExecutionStatus | string;

  /**
   * <p>The time after which the batch job executions started.</p>
   */
  startedAfter?: Date;

  /**
   * <p>The time before the batch job executions started.</p>
   */
  startedBefore?: Date;
}

export namespace ListBatchJobExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchJobExecutionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A subset of the possible batch job attributes. Used in the batch job list.</p>
 */
export interface BatchJobExecutionSummary {
  /**
   * <p>The unique identifier of this execution of the batch job.</p>
   */
  executionId: string | undefined;

  /**
   * <p>The unique identifier of the application that hosts this batch job.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of a particular batch job.</p>
   */
  jobId?: string;

  /**
   * <p>The name of a particular batch job.</p>
   */
  jobName?: string;

  /**
   * <p>The type of a particular batch job execution.</p>
   */
  jobType?: BatchJobType | string;

  /**
   * <p>The status of a particular batch job execution.</p>
   */
  status: BatchJobExecutionStatus | string | undefined;

  /**
   * <p>The timestamp when a particular batch job execution started.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp when this batch job execution ended.</p>
   */
  endTime?: Date;
}

export namespace BatchJobExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchJobExecutionSummary): any => ({
    ...obj,
  });
}

export interface ListBatchJobExecutionsResponse {
  /**
   * <p>Returns a list of batch job executions for an application.</p>
   */
  batchJobExecutions: BatchJobExecutionSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all batch job
   *          executions.</p>
   */
  nextToken?: string;
}

export namespace ListBatchJobExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchJobExecutionsResponse): any => ({
    ...obj,
  });
}

export interface ListDataSetImportHistoryRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

export namespace ListDataSetImportHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetImportHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a data set import task.</p>
 */
export interface DataSetImportTask {
  /**
   * <p>The identifier of the data set import task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The status of the data set import task.</p>
   */
  status: DataSetTaskLifecycle | string | undefined;

  /**
   * <p>A summary of the data set import task.</p>
   */
  summary: DataSetImportSummary | undefined;
}

export namespace DataSetImportTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetImportTask): any => ({
    ...obj,
  });
}

export interface ListDataSetImportHistoryResponse {
  /**
   * <p>The data set import tasks.</p>
   */
  dataSetImportTasks: DataSetImportTask[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListDataSetImportHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetImportHistoryResponse): any => ({
    ...obj,
  });
}

export interface ListDataSetsRequest {
  /**
   * <p>The unique identifier of the application for which you want to list the associated data
   *          sets.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The prefix of the data set name, which you can use to filter the list of data
   *          sets.</p>
   */
  prefix?: string;
}

export namespace ListDataSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A subset of the possible data set attributes.</p>
 */
export interface DataSetSummary {
  /**
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;

  /**
   * <p>The type of data set. Possible values include VSAM, IS, PS, GDG, PO, PS, or
   *          unknown.</p>
   */
  dataSetOrg?: string;

  /**
   * <p>The format of the data set. </p>
   */
  format?: string;

  /**
   * <p>The timestamp when the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The last time the data set was referenced.</p>
   */
  lastReferencedTime?: Date;
}

export namespace DataSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetSummary): any => ({
    ...obj,
  });
}

export interface ListDataSetsResponse {
  /**
   * <p>The list of data sets, containing ionformation including the creating time, the data set
   *          name, the data set organization, the data set format, and the last time the data set was
   *          referenced or updated.</p>
   */
  dataSets: DataSetSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListDataSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSetsResponse): any => ({
    ...obj,
  });
}

export interface ListDeploymentsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;
}

export namespace ListDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeploymentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A subset of information about a specific deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * <p>The current status of the deployment.</p>
   */
  status: DeploymentLifecycle | string | undefined;

  /**
   * <p>The timestamp when the deployment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

export namespace DeploymentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentSummary): any => ({
    ...obj,
  });
}

export interface ListDeploymentsResponse {
  /**
   * <p>The list of deployments that is returned.</p>
   */
  deployments: DeploymentSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListDeploymentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeploymentsResponse): any => ({
    ...obj,
  });
}

export interface StartApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to start.</p>
   */
  applicationId: string | undefined;
}

export namespace StartApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartApplicationRequest): any => ({
    ...obj,
  });
}

export interface StartApplicationResponse {}

export namespace StartApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A batch job identifier in which the batch job to run is identified by the file name and
 *          the relative path to the file name.</p>
 */
export interface FileBatchJobIdentifier {
  /**
   * <p>The file name for the batch job identifier.</p>
   */
  fileName: string | undefined;

  /**
   * <p>The relative path to the file name for the batch job identifier.</p>
   */
  folderPath?: string;
}

export namespace FileBatchJobIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileBatchJobIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>A batch job identifier in which the batch job to run is identified by the script
 *          name.</p>
 */
export interface ScriptBatchJobIdentifier {
  /**
   * <p>The name of the script containing the batch job definition.</p>
   */
  scriptName: string | undefined;
}

export namespace ScriptBatchJobIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScriptBatchJobIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a specific batch job.</p>
 */
export type BatchJobIdentifier =
  | BatchJobIdentifier.FileBatchJobIdentifierMember
  | BatchJobIdentifier.ScriptBatchJobIdentifierMember
  | BatchJobIdentifier.$UnknownMember;

export namespace BatchJobIdentifier {
  /**
   * <p>Specifies a file associated with a specific batch job.</p>
   */
  export interface FileBatchJobIdentifierMember {
    fileBatchJobIdentifier: FileBatchJobIdentifier;
    scriptBatchJobIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>A batch job identifier in which the batch job to run is identified by the script name.</p>
   */
  export interface ScriptBatchJobIdentifierMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier: ScriptBatchJobIdentifier;
    $unknown?: never;
  }

  export interface $UnknownMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileBatchJobIdentifier: (value: FileBatchJobIdentifier) => T;
    scriptBatchJobIdentifier: (value: ScriptBatchJobIdentifier) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BatchJobIdentifier, visitor: Visitor<T>): T => {
    if (value.fileBatchJobIdentifier !== undefined) return visitor.fileBatchJobIdentifier(value.fileBatchJobIdentifier);
    if (value.scriptBatchJobIdentifier !== undefined)
      return visitor.scriptBatchJobIdentifier(value.scriptBatchJobIdentifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchJobIdentifier): any => {
    if (obj.fileBatchJobIdentifier !== undefined)
      return { fileBatchJobIdentifier: FileBatchJobIdentifier.filterSensitiveLog(obj.fileBatchJobIdentifier) };
    if (obj.scriptBatchJobIdentifier !== undefined)
      return { scriptBatchJobIdentifier: ScriptBatchJobIdentifier.filterSensitiveLog(obj.scriptBatchJobIdentifier) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface StartBatchJobRequest {
  /**
   * <p>The unique identifier of the application associated with this batch job.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job.</p>
   */
  batchJobIdentifier: BatchJobIdentifier | undefined;

  /**
   * <p>The collection of batch job parameters. For details about limits for keys and values,
   *          see <a href="https://www.ibm.com/docs/en/workload-automation/9.3.0?topic=zos-coding-variables-in-jcl">Coding variables in JCL</a>.</p>
   */
  jobParams?: Record<string, string>;
}

export namespace StartBatchJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBatchJobRequest): any => ({
    ...obj,
    ...(obj.batchJobIdentifier && {
      batchJobIdentifier: BatchJobIdentifier.filterSensitiveLog(obj.batchJobIdentifier),
    }),
  });
}

export interface StartBatchJobResponse {
  /**
   * <p>The unique identifier of this execution of the batch job.</p>
   */
  executionId: string | undefined;
}

export namespace StartBatchJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBatchJobResponse): any => ({
    ...obj,
  });
}

export interface StopApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to stop.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>Stopping an application process can take a long time. Setting this parameter to true
   *          lets you force stop the application so you don't need to wait until the process finishes to
   *          apply another action on the application. The default value is false.</p>
   */
  forceStop?: boolean;
}

export namespace StopApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopApplicationRequest): any => ({
    ...obj,
  });
}

export interface StopApplicationResponse {}

export namespace StopApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopApplicationResponse): any => ({
    ...obj,
  });
}

export interface UpdateApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to update.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The description of the application to update.</p>
   */
  description?: string;

  /**
   * <p>The current version of the application to update.</p>
   */
  currentApplicationVersion: number | undefined;

  /**
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   */
  definition?: Definition;
}

export namespace UpdateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj,
    ...(obj.definition && { definition: Definition.filterSensitiveLog(obj.definition) }),
  });
}

export interface UpdateApplicationResponse {
  /**
   * <p>The new version of the application.</p>
   */
  applicationVersion: number | undefined;
}

export namespace UpdateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the details of a high availability configuration.</p>
 */
export interface HighAvailabilityConfig {
  /**
   * <p>The number of instances in a high availability configuration.</p>
   */
  desiredCapacity: number | undefined;
}

export namespace HighAvailabilityConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HighAvailabilityConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the storage configuration for an Amazon EFS file system.</p>
 */
export interface EfsStorageConfiguration {
  /**
   * <p>The file system identifier.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The mount point for the file system.</p>
   */
  mountPoint: string | undefined;
}

export namespace EfsStorageConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EfsStorageConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the storage configuration for an Amazon FSx file system.</p>
 */
export interface FsxStorageConfiguration {
  /**
   * <p>The file system identifier.</p>
   */
  fileSystemId: string | undefined;

  /**
   * <p>The mount point for the file system.</p>
   */
  mountPoint: string | undefined;
}

export namespace FsxStorageConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FsxStorageConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the storage configuration for an environment.</p>
 */
export type StorageConfiguration =
  | StorageConfiguration.EfsMember
  | StorageConfiguration.FsxMember
  | StorageConfiguration.$UnknownMember;

export namespace StorageConfiguration {
  /**
   * <p>Defines the storage configuration for an Amazon EFS file system.</p>
   */
  export interface EfsMember {
    efs: EfsStorageConfiguration;
    fsx?: never;
    $unknown?: never;
  }

  /**
   * <p>Defines the storage configuration for an Amazon FSx file system.</p>
   */
  export interface FsxMember {
    efs?: never;
    fsx: FsxStorageConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    efs?: never;
    fsx?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    efs: (value: EfsStorageConfiguration) => T;
    fsx: (value: FsxStorageConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StorageConfiguration, visitor: Visitor<T>): T => {
    if (value.efs !== undefined) return visitor.efs(value.efs);
    if (value.fsx !== undefined) return visitor.fsx(value.fsx);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageConfiguration): any => {
    if (obj.efs !== undefined) return { efs: EfsStorageConfiguration.filterSensitiveLog(obj.efs) };
    if (obj.fsx !== undefined) return { fsx: FsxStorageConfiguration.filterSensitiveLog(obj.fsx) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface CreateEnvironmentRequest {
  /**
   * <p>The unique identifier of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of instance for the environment.</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * <p>The engine type for the environment.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The version of the engine type for the environment.</p>
   */
  engineVersion?: string;

  /**
   * <p>The list of subnets associated with the VPC for this environment.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The list of security groups for the VPC associated with this environment.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>Optional. The storage configurations for this environment.</p>
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * <p>Specifies whether the environment is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The details of a high availability configuration for this runtime environment.</p>
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * <p>The tags for the environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Configures a desired maintenance window for the environment. If you do not provide a
   *          value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create an environment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

export namespace CreateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
    ...obj,
    ...(obj.storageConfigurations && {
      storageConfigurations: obj.storageConfigurations.map((item) => StorageConfiguration.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateEnvironmentResponse {
  /**
   * <p>The identifier of this environment.</p>
   */
  environmentId: string | undefined;
}

export namespace CreateEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The unique identifier of the runtime environment you want to delete.</p>
   */
  environmentId: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentResponse {}

export namespace DeleteEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface GetEnvironmentRequest {
  /**
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;
}

export namespace GetEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The information about the maintenance schedule.</p>
 */
export interface MaintenanceSchedule {
  /**
   * <p>The time the scheduled maintenance is to start.</p>
   */
  startTime?: Date;

  /**
   * <p>The time the scheduled maintenance is to end.</p>
   */
  endTime?: Date;
}

export namespace MaintenanceSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>The scheduled maintenance for a runtime engine.</p>
 */
export interface PendingMaintenance {
  /**
   * <p>The maintenance schedule for the engine version.</p>
   */
  schedule?: MaintenanceSchedule;

  /**
   * <p>The specific runtime engine that the maintenance schedule applies to.</p>
   */
  engineVersion?: string;
}

export namespace PendingMaintenance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingMaintenance): any => ({
    ...obj,
  });
}

export enum EnvironmentLifecycle {
  AVAILABLE = "Available",
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
}

export interface GetEnvironmentResponse {
  /**
   * <p>The name of the runtime environment. </p>
   */
  name: string | undefined;

  /**
   * <p>The description of the runtime environment.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the runtime environment.</p>
   */
  environmentArn: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The type of instance underlying the runtime environment.</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The status of the runtime environment.</p>
   */
  status: EnvironmentLifecycle | string | undefined;

  /**
   * <p>The target platform for the runtime environment.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The version of the runtime engine.</p>
   */
  engineVersion: string | undefined;

  /**
   * <p>The unique identifier for the VPC used with this runtime environment.</p>
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets assigned to this runtime environment.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups assigned to this runtime
   *          environment.</p>
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The timestamp when the runtime environment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The storage configurations defined for the runtime environment.</p>
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * <p>The tags defined for this runtime environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The desired capacity of the high availability configuration for the runtime
   *          environment.</p>
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * <p>Whether applications running in this runtime environment are publicly accessible.
   *       </p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The number of instances included in the runtime environment. A standalone runtime
   *          environment has a maxiumum of one instance. Currently, a high availability runtime
   *          environment has a maximum of two instances. </p>
   */
  actualCapacity?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the load balancer used with the runtime
   *          environment.</p>
   */
  loadBalancerArn?: string;

  /**
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * <p>Configures a desired maintenance window for the environment. If you do not provide a
   *          value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Indicates the pending maintenance scheduled on this environment.</p>
   */
  pendingMaintenance?: PendingMaintenance;
}

export namespace GetEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
    ...obj,
    ...(obj.storageConfigurations && {
      storageConfigurations: obj.storageConfigurations.map((item) => StorageConfiguration.filterSensitiveLog(item)),
    }),
  });
}

export interface ListEnvironmentsRequest {
  /**
   * <p>A pagination token to control the number of environments displayed in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environments to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the environment.</p>
   */
  names?: string[];

  /**
   * <p>The engine type for the environment.</p>
   */
  engineType?: EngineType | string;
}

export namespace ListEnvironmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a subset of the possible environment attributes. Used in the environment
 *          list.</p>
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a particular runtime environment.</p>
   */
  environmentArn: string | undefined;

  /**
   * <p>The unique identifier of a particular runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The instance type of the environment.</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The status of the environment</p>
   */
  status: EnvironmentLifecycle | string | undefined;

  /**
   * <p>The target platform for the environment.</p>
   */
  engineType: EngineType | string | undefined;

  /**
   * <p>The version of the runtime engine.</p>
   */
  engineVersion: string | undefined;

  /**
   * <p>The timestamp when the environment was created.</p>
   */
  creationTime: Date | undefined;
}

export namespace EnvironmentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentSummary): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsResponse {
  /**
   * <p>Returns a list of summary details for all the environments in your account. </p>
   */
  environments: EnvironmentSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all the
   *          environments.</p>
   */
  nextToken?: string;
}

export namespace ListEnvironmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentRequest {
  /**
   * <p>The unique identifier of the runtime environment that you want to update.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The desired capacity for the environment to update.</p>
   */
  desiredCapacity?: number;

  /**
   * <p>The instance type for the environment to update.</p>
   */
  instanceType?: string;

  /**
   * <p>The version of the runtime engine for the environment.</p>
   */
  engineVersion?: string;

  /**
   * <p>Configures a desired maintenance window for the environment. If you do not provide a
   *          value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Indicates whether to update the environment during the maintenance window. The default
   *          is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter only if
   *             <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than
   *             <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will
   *          fail if <code>applyDuringMaintenanceWindow</code> is set to true.</p>
   */
  applyDuringMaintenanceWindow?: boolean;
}

export namespace UpdateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentResponse {
  /**
   * <p>The unique identifier of the runtime environment that was updated.</p>
   */
  environmentId: string | undefined;
}

export namespace UpdateEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface ListEngineVersionsRequest {
  /**
   * <p>The type of target platform.</p>
   */
  engineType?: EngineType | string;

  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;
}

export namespace ListEngineVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEngineVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A subset of information about the engine version for a specific application.</p>
 */
export interface EngineVersionsSummary {
  /**
   * <p>The type of target platform for the application.</p>
   */
  engineType: string | undefined;

  /**
   * <p>The version of the engine type used by the application.</p>
   */
  engineVersion: string | undefined;
}

export namespace EngineVersionsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineVersionsSummary): any => ({
    ...obj,
  });
}

export interface ListEngineVersionsResponse {
  /**
   * <p>Returns the engine versions.</p>
   */
  engineVersions: EngineVersionsSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace ListEngineVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEngineVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

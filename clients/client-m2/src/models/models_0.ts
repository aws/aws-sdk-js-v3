// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { M2ServiceException as __BaseException } from "./M2ServiceException";

/**
 * @public
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
 * @public
 * <p>Defines an alternate key. This value is optional. A legacy data set might not have any
 *          alternate key defined but if those alternate keys definitions exist, provide them, as some
 *          applications will make use of them.</p>
 */
export interface AlternateKey {
  /**
   * @public
   * <p>The name of the alternate key.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A positive integer value representing the offset to mark the start of the alternate key
   *          part in the record byte array.</p>
   */
  offset: number | undefined;

  /**
   * @public
   * <p>A strictly positive integer value representing the length of the alternate key.</p>
   */
  length: number | undefined;

  /**
   * @public
   * <p>Indicates whether the alternate key values are supposed to be unique for the given data
   *          set.</p>
   */
  allowDuplicates?: boolean;
}

/**
 * @public
 */
export interface CancelBatchJobExecutionRequest {
  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the batch job execution.</p>
   */
  executionId: string | undefined;
}

/**
 * @public
 */
export interface CancelBatchJobExecutionResponse {}

/**
 * @public
 * <p>The parameters provided in the request conflict with existing resources.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId?: string;

  /**
   * @public
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
 * @public
 * <p>An unexpected error occurred during the processing of the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
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
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the missing resource.</p>
   */
  resourceId?: string;

  /**
   * @public
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
 * @public
 * <p>The number of requests made exceeds the limit.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The identifier of the service that the throttled request was made to.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The identifier of the throttled reuqest.</p>
   */
  quotaCode?: string;

  /**
   * @public
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
 * @public
 * <p>Contains information about a validation exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the exception field.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The message of the exception field.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>One or more parameters provided in the request is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason why it failed service validation.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
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
 * @public
 * <p>The application definition for a particular application. </p>
 */
export type Definition = Definition.ContentMember | Definition.S3LocationMember | Definition.$UnknownMember;

/**
 * @public
 */
export namespace Definition {
  /**
   * @public
   * <p>The S3 bucket that contains the application definition.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    content?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration/definitions that identify an application.</p>
   */
  export interface ContentMember {
    s3Location?: never;
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 * @enum
 */
export const EngineType = {
  BLUAGE: "bluage",
  MICROFOCUS: "microfocus",
} as const;

/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the target platform for this application.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   */
  definition: Definition | undefined;

  /**
   * @public
   * <p>A list of tags to apply to the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Unique, case-sensitive identifier the service generates to ensure the idempotency of the
   *          request to create an application. The service generates the clientToken when the API call
   *          is triggered. The token expires after one hour, so if you retry the API within this
   *          timeframe with the same clientToken, you will get the same response. The service also
   *          handles deleting the clientToken after it expires. </p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The identifier of a customer managed key.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies a role that the application uses to access Amazon Web Services resources
   *          that are not part of the application or are in a different Amazon Web Services account.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * @public
   * <p>The unique application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The version number of the application.</p>
   */
  applicationVersion: number | undefined;
}

/**
 * @public
 * <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that is exceeding the quota limit.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of resource that is exceeding the quota limit for Amazon Web Services Mainframe Modernization.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>A code that identifies the service that the exceeded quota belongs to.</p>
   */
  serviceCode?: string;

  /**
   * @public
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
 * @public
 * <p>The required attributes for a generation data group data set. A generation data set is
 *          one of a collection of successive, historically related, catalogued data sets that together
 *          are known as a generation data group (GDG). Use this structure when you want to import a
 *          GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation
 *             data sets</a>.</p>
 */
export interface GdgAttributes {
  /**
   * @public
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The disposition of the data set in the catalog.</p>
   */
  rollDisposition?: string;
}

/**
 * @public
 * <p>The supported properties for a PO type data set.</p>
 */
export interface PoAttributes {
  /**
   * @public
   * <p>The format of the data set records.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>The character set encoding of the data set.</p>
   */
  encoding?: string;

  /**
   * @public
   * <p>An array containing one or more filename extensions, allowing you to specify which files
   *          to be included as PDS member.</p>
   */
  memberFileExtensions: string[] | undefined;
}

/**
 * @public
 * <p>The supported properties for a PS type data set.</p>
 */
export interface PsAttributes {
  /**
   * @public
   * <p>The format of the data set records.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>The character set encoding of the data set.</p>
   */
  encoding?: string;
}

/**
 * @public
 * <p>The primary key for a KSDS data set.</p>
 */
export interface PrimaryKey {
  /**
   * @public
   * <p>A name for the Primary Key.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A positive integer value representing the offset to mark the start of the primary key in
   *          the record byte array.</p>
   */
  offset: number | undefined;

  /**
   * @public
   * <p>A strictly positive integer value representing the length of the primary key. </p>
   */
  length: number | undefined;
}

/**
 * @public
 * <p>The attributes of a VSAM type data set.</p>
 */
export interface VsamAttributes {
  /**
   * @public
   * <p>The record format of the data set.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   */
  encoding?: string;

  /**
   * @public
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   */
  compressed?: boolean;

  /**
   * @public
   * <p>The primary key of the data set.</p>
   */
  primaryKey?: PrimaryKey;

  /**
   * @public
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   */
  alternateKeys?: AlternateKey[];
}

/**
 * @public
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 */
export type DatasetOrgAttributes =
  | DatasetOrgAttributes.GdgMember
  | DatasetOrgAttributes.PoMember
  | DatasetOrgAttributes.PsMember
  | DatasetOrgAttributes.VsamMember
  | DatasetOrgAttributes.$UnknownMember;

/**
 * @public
 */
export namespace DatasetOrgAttributes {
  /**
   * @public
   * <p>The details of a VSAM data set.</p>
   */
  export interface VsamMember {
    vsam: VsamAttributes;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The generation data group of the data set.</p>
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgAttributes;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The details of a PO type data set.</p>
   */
  export interface PoMember {
    vsam?: never;
    gdg?: never;
    po: PoAttributes;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The details of a PS type data set.</p>
   */
  export interface PsMember {
    vsam?: never;
    gdg?: never;
    po?: never;
    ps: PsAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    vsam?: never;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vsam: (value: VsamAttributes) => T;
    gdg: (value: GdgAttributes) => T;
    po: (value: PoAttributes) => T;
    ps: (value: PsAttributes) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatasetOrgAttributes, visitor: Visitor<T>): T => {
    if (value.vsam !== undefined) return visitor.vsam(value.vsam);
    if (value.gdg !== undefined) return visitor.gdg(value.gdg);
    if (value.po !== undefined) return visitor.po(value.po);
    if (value.ps !== undefined) return visitor.ps(value.ps);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The length of the records in the data set.</p>
 */
export interface RecordLength {
  /**
   * @public
   * <p>The minimum record length of a record.</p>
   */
  min: number | undefined;

  /**
   * @public
   * <p>The maximum record length. In case of fixed, both minimum and maximum are the
   *          same.</p>
   */
  max: number | undefined;
}

/**
 * @public
 * <p>Defines a data set.</p>
 */
export interface DataSet {
  /**
   * @public
   * <p>The storage type of the data set: database or file system. For Micro Focus, database
   *          corresponds to datastore and file system corresponds to EFS/FSX. For Blu Age, there is no
   *          support of file system and database corresponds to Blusam. </p>
   */
  storageType?: string;

  /**
   * @public
   * <p>The logical identifier for a specific data set (in mainframe format).</p>
   */
  datasetName: string | undefined;

  /**
   * @public
   * <p>The type of dataset. The only supported value is VSAM.</p>
   */
  datasetOrg: DatasetOrgAttributes | undefined;

  /**
   * @public
   * <p>The relative location of the data set in the database or file system. </p>
   */
  relativePath?: string;

  /**
   * @public
   * <p>The length of a record.</p>
   */
  recordLength: RecordLength | undefined;
}

/**
 * @public
 * <p>Defines an external storage location.</p>
 */
export type ExternalLocation = ExternalLocation.S3LocationMember | ExternalLocation.$UnknownMember;

/**
 * @public
 */
export namespace ExternalLocation {
  /**
   * @public
   * <p>The URI of the Amazon S3 bucket.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 * <p>Identifies a specific data set to import from an external location.</p>
 */
export interface DataSetImportItem {
  /**
   * @public
   * <p>The data set.</p>
   */
  dataSet: DataSet | undefined;

  /**
   * @public
   * <p>The location of the data set.</p>
   */
  externalLocation: ExternalLocation | undefined;
}

/**
 * @public
 * <p>Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.</p>
 */
export type DataSetImportConfig =
  | DataSetImportConfig.DataSetsMember
  | DataSetImportConfig.S3LocationMember
  | DataSetImportConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataSetImportConfig {
  /**
   * @public
   * <p>The Amazon S3 location of the data sets.</p>
   */
  export interface S3LocationMember {
    s3Location: string;
    dataSets?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The data sets.</p>
   */
  export interface DataSetsMember {
    s3Location?: never;
    dataSets: DataSetImportItem[];
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 */
export interface CreateDataSetImportTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the application for which you want to import data sets.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The data set import task configuration.</p>
   */
  importConfig: DataSetImportConfig | undefined;

  /**
   * @public
   * <p> Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a data set import. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDataSetImportTaskResponse {
  /**
   * @public
   * <p>The task identifier. This operation is asynchronous. Use this identifier with the <a>GetDataSetImportTask</a> operation to obtain the status of this task.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * @public
   * <p>The identifier of the runtime environment where you want to deploy this
   *          application.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The version of the application to deploy.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a deployment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * @public
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>The unique identifier of the application you want to delete.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteApplicationFromEnvironmentRequest {
  /**
   * @public
   * <p>The unique identifier of the application you want to delete.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the runtime environment where the application was previously
   *          deployed.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationFromEnvironmentResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentLifecycle = {
  DEPLOYING: "Deploying",
  FAILED: "Failed",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type DeploymentLifecycle = (typeof DeploymentLifecycle)[keyof typeof DeploymentLifecycle];

/**
 * @public
 * <p>Contains a summary of a deployed application.</p>
 */
export interface DeployedVersionSummary {
  /**
   * @public
   * <p>The version of the deployed application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  status: DeploymentLifecycle | undefined;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationVersionLifecycle = {
  AVAILABLE: "Available",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type ApplicationVersionLifecycle =
  (typeof ApplicationVersionLifecycle)[keyof typeof ApplicationVersionLifecycle];

/**
 * @public
 * <p>Defines an application version summary.</p>
 */
export interface ApplicationVersionSummary {
  /**
   * @public
   * <p>The application version.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  status: ApplicationVersionLifecycle | undefined;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The timestamp when the application version was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 * <p>A subset of the attributes that describe a log group. In CloudWatch a log group is a group of
 *          log streams that share the same retention, monitoring, and access control settings.</p>
 */
export interface LogGroupSummary {
  /**
   * @public
   * <p>The type of log.</p>
   */
  logType: string | undefined;

  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationLifecycle = {
  AVAILABLE: "Available",
  CREATED: "Created",
  CREATING: "Creating",
  DELETING: "Deleting",
  DELETING_FROM_ENVIRONMENT: "Deleting From Environment",
  FAILED: "Failed",
  READY: "Ready",
  RUNNING: "Running",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ApplicationLifecycle = (typeof ApplicationLifecycle)[keyof typeof ApplicationLifecycle];

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  status: ApplicationLifecycle | undefined;

  /**
   * @public
   * <p>The latest version of the application.</p>
   */
  latestVersion: ApplicationVersionSummary | undefined;

  /**
   * @public
   * <p>The version of the application that is deployed.</p>
   */
  deployedVersion?: DeployedVersionSummary;

  /**
   * @public
   * <p>The type of the target platform for the application.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The list of log summaries. Each log summary includes the log type as well as the log
   *          group identifier. These are CloudWatch logs. Amazon Web Services Mainframe Modernization pushes the application log to CloudWatch under
   *          the customer's account.</p>
   */
  logGroups?: LogGroupSummary[];

  /**
   * @public
   * <p>The timestamp when this application was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when you last started the application. Null until the application runs for
   *          the first time.</p>
   */
  lastStartTime?: Date;

  /**
   * @public
   * <p>A list of tags associated with the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The identifier of the runtime environment where you want to deploy the
   *          application.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>Returns the Amazon Resource Names (ARNs) of the target groups that are attached to the
   *          network load balancer.</p>
   */
  targetGroupArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the network load balancer listener created in your
   *          Amazon Web Services account. Amazon Web Services Mainframe Modernization creates this listener for you the first time you deploy an
   *          application.</p>
   */
  listenerArns?: string[];

  /**
   * @public
   * <p>The port associated with the network load balancer listener created in your Amazon Web Services
   *          account.</p>
   */
  listenerPorts?: number[];

  /**
   * @public
   * <p>The public DNS name of the load balancer created in your Amazon Web Services account.</p>
   */
  loadBalancerDnsName?: string;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The identifier of a customer managed key.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role associated with the application.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface GetApplicationVersionRequest {
  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The specific version of the application.</p>
   */
  applicationVersion: number | undefined;
}

/**
 * @public
 */
export interface GetApplicationVersionResponse {
  /**
   * @public
   * <p>The name of the application version.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The specific version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The application description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration and definitions that identify an application.</p>
   */
  definitionContent: string | undefined;

  /**
   * @public
   * <p>The status of the application version.</p>
   */
  status: ApplicationVersionLifecycle | undefined;

  /**
   * @public
   * <p>The timestamp when the application version was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface GetBatchJobExecutionRequest {
  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the batch job execution.</p>
   */
  executionId: string | undefined;
}

/**
 * @public
 * <p>A batch job identifier in which the batch job to run is identified by the file name and
 *          the relative path to the file name.</p>
 */
export interface FileBatchJobIdentifier {
  /**
   * @public
   * <p>The file name for the batch job identifier.</p>
   */
  fileName: string | undefined;

  /**
   * @public
   * <p>The relative path to the file name for the batch job identifier.</p>
   */
  folderPath?: string;
}

/**
 * @public
 * <p>A batch job identifier in which the batch job to run is identified by the script
 *          name.</p>
 */
export interface ScriptBatchJobIdentifier {
  /**
   * @public
   * <p>The name of the script containing the batch job definition.</p>
   */
  scriptName: string | undefined;
}

/**
 * @public
 * <p>Identifies a specific batch job.</p>
 */
export type BatchJobIdentifier =
  | BatchJobIdentifier.FileBatchJobIdentifierMember
  | BatchJobIdentifier.ScriptBatchJobIdentifierMember
  | BatchJobIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace BatchJobIdentifier {
  /**
   * @public
   * <p>Specifies a file associated with a specific batch job.</p>
   */
  export interface FileBatchJobIdentifierMember {
    fileBatchJobIdentifier: FileBatchJobIdentifier;
    scriptBatchJobIdentifier?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A batch job identifier in which the batch job to run is identified by the script
   *          name.</p>
   */
  export interface ScriptBatchJobIdentifierMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier: ScriptBatchJobIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 * @enum
 */
export const BatchJobType = {
  JES2: "JES2",
  JES3: "JES3",
  VSE: "VSE",
} as const;

/**
 * @public
 */
export type BatchJobType = (typeof BatchJobType)[keyof typeof BatchJobType];

/**
 * @public
 * @enum
 */
export const BatchJobExecutionStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  DISPATCH: "Dispatching",
  FAILED: "Failed",
  HOLDING: "Holding",
  RUNNING: "Running",
  SUBMITTING: "Submitting",
  SUCCEEDED: "Succeeded",
  SUCCEEDED_WITH_WARNING: "Succeeded With Warning",
} as const;

/**
 * @public
 */
export type BatchJobExecutionStatus = (typeof BatchJobExecutionStatus)[keyof typeof BatchJobExecutionStatus];

/**
 * @public
 */
export interface GetBatchJobExecutionResponse {
  /**
   * @public
   * <p>The unique identifier for this batch job execution.</p>
   */
  executionId: string | undefined;

  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for this batch job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The name of this batch job.</p>
   */
  jobName?: string;

  /**
   * @public
   * <p>The user for the job.</p>
   */
  jobUser?: string;

  /**
   * @public
   * <p>The type of job.</p>
   */
  jobType?: BatchJobType;

  /**
   * @public
   * <p>The status of the batch job execution.</p>
   */
  status: BatchJobExecutionStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the batch job execution started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the batch job execution ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more
   *          information, see <a href="https://www.ibm.com/docs/en/was/8.5.5?topic=model-batch-return-codes">Batch return
   *             codes</a> in the <i>IBM WebSphere Application Server</i>
   *          documentation.</p>
   */
  returnCode?: string;

  /**
   * @public
   * <p>The unique identifier of this batch job.</p>
   */
  batchJobIdentifier?: BatchJobIdentifier;
}

/**
 * @public
 */
export interface GetDataSetDetailsRequest {
  /**
   * @public
   * <p>The unique identifier of the application that this data set is associated with.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;
}

/**
 * @public
 * <p>The required attributes for a generation data group data set. A generation data set is
 *          one of a collection of successive, historically related, catalogued data sets that together
 *          are known as a generation data group (GDG). Use this structure when you want to import a
 *          GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation
 *             data sets</a>.</p>
 */
export interface GdgDetailAttributes {
  /**
   * @public
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The disposition of the data set in the catalog.</p>
   */
  rollDisposition?: string;
}

/**
 * @public
 * <p>The supported properties for a PO type data set.</p>
 */
export interface PoDetailAttributes {
  /**
   * @public
   * <p>The format of the data set records.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>The character set encoding of the data set.</p>
   */
  encoding: string | undefined;
}

/**
 * @public
 * <p>The supported properties for a PS type data set.</p>
 */
export interface PsDetailAttributes {
  /**
   * @public
   * <p>The format of the data set records.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>The character set encoding of the data set.</p>
   */
  encoding: string | undefined;
}

/**
 * @public
 * <p>The attributes of a VSAM type data set.</p>
 */
export interface VsamDetailAttributes {
  /**
   * @public
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   */
  encoding?: string;

  /**
   * @public
   * <p>The record format of the data set.</p>
   */
  recordFormat?: string;

  /**
   * @public
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   */
  compressed?: boolean;

  /**
   * @public
   * <p>If set to True, enforces loading the data set into cache before it’s used by the
   *          application.</p>
   */
  cacheAtStartup?: boolean;

  /**
   * @public
   * <p>The primary key of the data set.</p>
   */
  primaryKey?: PrimaryKey;

  /**
   * @public
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   */
  alternateKeys?: AlternateKey[];
}

/**
 * @public
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 */
export type DatasetDetailOrgAttributes =
  | DatasetDetailOrgAttributes.GdgMember
  | DatasetDetailOrgAttributes.PoMember
  | DatasetDetailOrgAttributes.PsMember
  | DatasetDetailOrgAttributes.VsamMember
  | DatasetDetailOrgAttributes.$UnknownMember;

/**
 * @public
 */
export namespace DatasetDetailOrgAttributes {
  /**
   * @public
   * <p>The details of a VSAM data set.</p>
   */
  export interface VsamMember {
    vsam: VsamDetailAttributes;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The generation data group of the data set.</p>
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgDetailAttributes;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The details of a PO type data set.</p>
   */
  export interface PoMember {
    vsam?: never;
    gdg?: never;
    po: PoDetailAttributes;
    ps?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The details of a PS type data set.</p>
   */
  export interface PsMember {
    vsam?: never;
    gdg?: never;
    po?: never;
    ps: PsDetailAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    vsam?: never;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vsam: (value: VsamDetailAttributes) => T;
    gdg: (value: GdgDetailAttributes) => T;
    po: (value: PoDetailAttributes) => T;
    ps: (value: PsDetailAttributes) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatasetDetailOrgAttributes, visitor: Visitor<T>): T => {
    if (value.vsam !== undefined) return visitor.vsam(value.vsam);
    if (value.gdg !== undefined) return visitor.gdg(value.gdg);
    if (value.po !== undefined) return visitor.po(value.po);
    if (value.ps !== undefined) return visitor.ps(value.ps);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetDataSetDetailsResponse {
  /**
   * @public
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;

  /**
   * @public
   * <p>The type of data set. The only supported value is VSAM.</p>
   */
  dataSetOrg?: DatasetDetailOrgAttributes;

  /**
   * @public
   * <p>The length of records in the data set.</p>
   */
  recordLength?: number;

  /**
   * @public
   * <p>The location where the data set is stored.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The size of the block on disk. </p>
   */
  blocksize?: number;

  /**
   * @public
   * <p>The timestamp when the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last time the data set was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * @public
   * <p>The last time the data set was referenced.</p>
   */
  lastReferencedTime?: Date;
}

/**
 * @public
 */
export interface GetDataSetImportTaskRequest {
  /**
   * @public
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The task identifier returned by the <a>CreateDataSetImportTask</a> operation.
   *       </p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetTaskLifecycle = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  RUNNING: "Running",
} as const;

/**
 * @public
 */
export type DataSetTaskLifecycle = (typeof DataSetTaskLifecycle)[keyof typeof DataSetTaskLifecycle];

/**
 * @public
 * <p>Represents a summary of data set imports.</p>
 */
export interface DataSetImportSummary {
  /**
   * @public
   * <p>The total number of data set imports.</p>
   */
  total: number | undefined;

  /**
   * @public
   * <p>The number of data set imports that have succeeded.</p>
   */
  succeeded: number | undefined;

  /**
   * @public
   * <p>The number of data set imports that have failed.</p>
   */
  failed: number | undefined;

  /**
   * @public
   * <p>The number of data set imports that are pending.</p>
   */
  pending: number | undefined;

  /**
   * @public
   * <p>The number of data set imports that are in progress.</p>
   */
  inProgress: number | undefined;
}

/**
 * @public
 */
export interface GetDataSetImportTaskResponse {
  /**
   * @public
   * <p>The task identifier.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>The status of the task.</p>
   */
  status: DataSetTaskLifecycle | undefined;

  /**
   * @public
   * <p>A summary of the status of the task.</p>
   */
  summary?: DataSetImportSummary;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * @public
   * <p>The unique identifier for the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * @public
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The application version.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  status: DeploymentLifecycle | undefined;

  /**
   * @public
   * <p>The timestamp when the deployment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>A pagination token to control the number of applications displayed in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of applications to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The names of the applications.</p>
   */
  names?: string[];

  /**
   * @public
   * <p>The unique identifier of the runtime environment where the applications are
   *          deployed.</p>
   */
  environmentId?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationDeploymentLifecycle = {
  DEPLOYED: "Deployed",
  DEPLOYING: "Deploying",
} as const;

/**
 * @public
 */
export type ApplicationDeploymentLifecycle =
  (typeof ApplicationDeploymentLifecycle)[keyof typeof ApplicationDeploymentLifecycle];

/**
 * @public
 * <p>A subset of the possible application attributes. Used in the application list.</p>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  applicationArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  status: ApplicationLifecycle | undefined;

  /**
   * @public
   * <p>The type of the target platform for this application.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The timestamp when the application was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The unique identifier of the runtime environment that hosts this application.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The timestamp when you last started the application. Null until the application runs for
   *          the first time.</p>
   */
  lastStartTime?: Date;

  /**
   * @public
   * <p>Indicates the status of the latest version of the application.</p>
   */
  versionStatus?: ApplicationVersionLifecycle;

  /**
   * @public
   * <p>Indicates either an ongoing deployment or if the application has ever deployed
   *          successfully.</p>
   */
  deploymentStatus?: ApplicationDeploymentLifecycle;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role associated with the application.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>Returns a list of summary details for all the applications in a runtime
   *          environment.</p>
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * @public
   * <p>A pagination token that's returned when the response doesn't contain all
   *          applications.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of application versions to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * @public
   * <p>The list of application versions.</p>
   */
  applicationVersions: ApplicationVersionSummary[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBatchJobDefinitionsRequest {
  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of batch job definitions to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>If the batch job definition is a FileBatchJobDefinition, the prefix allows you to search
   *          on the file names of FileBatchJobDefinitions.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>A file containing a batch job definition.</p>
 */
export interface FileBatchJobDefinition {
  /**
   * @public
   * <p>The name of the file containing the batch job definition.</p>
   */
  fileName: string | undefined;

  /**
   * @public
   * <p>The path to the file containing the batch job definition.</p>
   */
  folderPath?: string;
}

/**
 * @public
 * <p>A batch job definition contained in a script.</p>
 */
export interface ScriptBatchJobDefinition {
  /**
   * @public
   * <p>The name of the script containing the batch job definition.</p>
   */
  scriptName: string | undefined;
}

/**
 * @public
 * <p>Defines the details of a batch job.</p>
 */
export type BatchJobDefinition =
  | BatchJobDefinition.FileBatchJobDefinitionMember
  | BatchJobDefinition.ScriptBatchJobDefinitionMember
  | BatchJobDefinition.$UnknownMember;

/**
 * @public
 */
export namespace BatchJobDefinition {
  /**
   * @public
   * <p>Specifies a file containing a batch job definition.</p>
   */
  export interface FileBatchJobDefinitionMember {
    fileBatchJobDefinition: FileBatchJobDefinition;
    scriptBatchJobDefinition?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A script containing a batch job definition.</p>
   */
  export interface ScriptBatchJobDefinitionMember {
    fileBatchJobDefinition?: never;
    scriptBatchJobDefinition: ScriptBatchJobDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 */
export interface ListBatchJobDefinitionsResponse {
  /**
   * @public
   * <p>The list of batch job definitions.</p>
   */
  batchJobDefinitions: BatchJobDefinition[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBatchJobExecutionsRequest {
  /**
   * @public
   * <p>A pagination token to control the number of batch job executions displayed in the
   *          list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of batch job executions to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of each batch job execution.</p>
   */
  executionIds?: string[];

  /**
   * @public
   * <p>The name of each batch job execution.</p>
   */
  jobName?: string;

  /**
   * @public
   * <p>The status of the batch job executions.</p>
   */
  status?: BatchJobExecutionStatus;

  /**
   * @public
   * <p>The time after which the batch job executions started.</p>
   */
  startedAfter?: Date;

  /**
   * @public
   * <p>The time before the batch job executions started.</p>
   */
  startedBefore?: Date;
}

/**
 * @public
 * <p>A subset of the possible batch job attributes. Used in the batch job list.</p>
 */
export interface BatchJobExecutionSummary {
  /**
   * @public
   * <p>The unique identifier of this execution of the batch job.</p>
   */
  executionId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the application that hosts this batch job.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of a particular batch job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The name of a particular batch job.</p>
   */
  jobName?: string;

  /**
   * @public
   * <p>The type of a particular batch job execution.</p>
   */
  jobType?: BatchJobType;

  /**
   * @public
   * <p>The status of a particular batch job execution.</p>
   */
  status: BatchJobExecutionStatus | undefined;

  /**
   * @public
   * <p>The timestamp when a particular batch job execution started.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when this batch job execution ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more
   *          information, see <a href="https://www.ibm.com/docs/en/was/8.5.5?topic=model-batch-return-codes">Batch return
   *             codes</a> in the <i>IBM WebSphere Application Server</i>
   *          documentation.</p>
   */
  returnCode?: string;

  /**
   * @public
   * <p>The unique identifier of this batch job.</p>
   */
  batchJobIdentifier?: BatchJobIdentifier;
}

/**
 * @public
 */
export interface ListBatchJobExecutionsResponse {
  /**
   * @public
   * <p>Returns a list of batch job executions for an application.</p>
   */
  batchJobExecutions: BatchJobExecutionSummary[] | undefined;

  /**
   * @public
   * <p>A pagination token that's returned when the response doesn't contain all batch job
   *          executions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSetImportHistoryRequest {
  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a data set import task.</p>
 */
export interface DataSetImportTask {
  /**
   * @public
   * <p>The identifier of the data set import task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>The status of the data set import task.</p>
   */
  status: DataSetTaskLifecycle | undefined;

  /**
   * @public
   * <p>A summary of the data set import task.</p>
   */
  summary: DataSetImportSummary | undefined;
}

/**
 * @public
 */
export interface ListDataSetImportHistoryResponse {
  /**
   * @public
   * <p>The data set import tasks.</p>
   */
  dataSetImportTasks: DataSetImportTask[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * @public
   * <p>The unique identifier of the application for which you want to list the associated data
   *          sets.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The prefix of the data set name, which you can use to filter the list of data
   *          sets.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>A subset of the possible data set attributes.</p>
 */
export interface DataSetSummary {
  /**
   * @public
   * <p>The name of the data set.</p>
   */
  dataSetName: string | undefined;

  /**
   * @public
   * <p>The type of data set. The only supported value is VSAM.</p>
   */
  dataSetOrg?: string;

  /**
   * @public
   * <p>The format of the data set. </p>
   */
  format?: string;

  /**
   * @public
   * <p>The timestamp when the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last time the data set was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * @public
   * <p>The last time the data set was referenced.</p>
   */
  lastReferencedTime?: Date;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * @public
   * <p>The list of data sets, containing information including the creation time, the data set
   *          name, the data set organization, the data set format, and the last time the data set was
   *          referenced or updated.</p>
   */
  dataSets: DataSetSummary[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The application identifier.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 * <p>A subset of information about a specific deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * @public
   * <p>The unique identifier of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  applicationVersion: number | undefined;

  /**
   * @public
   * <p>The current status of the deployment.</p>
   */
  status: DeploymentLifecycle | undefined;

  /**
   * @public
   * <p>The timestamp when the deployment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * @public
   * <p>The list of deployments that is returned.</p>
   */
  deployments: DeploymentSummary[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * @public
   * <p>The unique identifier of the application you want to start.</p>
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationResponse {}

/**
 * @public
 */
export interface StartBatchJobRequest {
  /**
   * @public
   * <p>The unique identifier of the application associated with this batch job.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the batch job.</p>
   */
  batchJobIdentifier: BatchJobIdentifier | undefined;

  /**
   * @public
   * <p>The collection of batch job parameters. For details about limits for keys and values,
   *          see <a href="https://www.ibm.com/docs/en/workload-automation/9.3.0?topic=zos-coding-variables-in-jcl">Coding variables in JCL</a>.</p>
   */
  jobParams?: Record<string, string>;
}

/**
 * @public
 */
export interface StartBatchJobResponse {
  /**
   * @public
   * <p>The unique identifier of this execution of the batch job.</p>
   */
  executionId: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * @public
   * <p>The unique identifier of the application you want to stop.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>Stopping an application process can take a long time. Setting this parameter to true
   *          lets you force stop the application so you don't need to wait until the process finishes to
   *          apply another action on the application. The default value is false.</p>
   */
  forceStop?: boolean;
}

/**
 * @public
 */
export interface StopApplicationResponse {}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>The unique identifier of the application you want to update.</p>
   */
  applicationId: string | undefined;

  /**
   * @public
   * <p>The description of the application to update.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The current version of the application to update.</p>
   */
  currentApplicationVersion: number | undefined;

  /**
   * @public
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   */
  definition?: Definition;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * @public
   * <p>The new version of the application.</p>
   */
  applicationVersion: number | undefined;
}

/**
 * @public
 * <p>Defines the details of a high availability configuration.</p>
 */
export interface HighAvailabilityConfig {
  /**
   * @public
   * <p>The number of instances in a high availability configuration. The minimum possible value is 1 and the maximum is 100.</p>
   */
  desiredCapacity: number | undefined;
}

/**
 * @public
 * <p>Defines the storage configuration for an Amazon EFS file system.</p>
 */
export interface EfsStorageConfiguration {
  /**
   * @public
   * <p>The file system identifier.</p>
   */
  fileSystemId: string | undefined;

  /**
   * @public
   * <p>The mount point for the file system.</p>
   */
  mountPoint: string | undefined;
}

/**
 * @public
 * <p>Defines the storage configuration for an Amazon FSx file system.</p>
 */
export interface FsxStorageConfiguration {
  /**
   * @public
   * <p>The file system identifier.</p>
   */
  fileSystemId: string | undefined;

  /**
   * @public
   * <p>The mount point for the file system.</p>
   */
  mountPoint: string | undefined;
}

/**
 * @public
 * <p>Defines the storage configuration for a runtime environment.</p>
 */
export type StorageConfiguration =
  | StorageConfiguration.EfsMember
  | StorageConfiguration.FsxMember
  | StorageConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StorageConfiguration {
  /**
   * @public
   * <p>Defines the storage configuration for an Amazon EFS file system.</p>
   */
  export interface EfsMember {
    efs: EfsStorageConfiguration;
    fsx?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines the storage configuration for an Amazon FSx file system.</p>
   */
  export interface FsxMember {
    efs?: never;
    fsx: FsxStorageConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * @public
   * <p>The name of the runtime environment. Must be unique within the account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of instance for the runtime environment.</p>
   */
  instanceType: string | undefined;

  /**
   * @public
   * <p>The description of the runtime environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The engine type for the runtime environment.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The version of the engine type for the runtime environment.</p>
   */
  engineVersion?: string;

  /**
   * @public
   * <p>The list of subnets associated with the VPC for this runtime environment.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The list of security groups for the VPC associated with this runtime environment.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>Optional. The storage configurations for this runtime environment.</p>
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * @public
   * <p>Specifies whether the runtime environment is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>The details of a high availability configuration for this runtime environment.</p>
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * @public
   * <p>The tags for the runtime environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Configures the maintenance window you want for the runtime environment. If you do not
   *          provide a value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create an environment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The identifier of a customer managed key.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * @public
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * @public
   * <p>The unique identifier of the runtime environment you want to delete.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * @public
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 * <p>The information about the maintenance schedule.</p>
 */
export interface MaintenanceSchedule {
  /**
   * @public
   * <p>The time the scheduled maintenance is to start.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time the scheduled maintenance is to end.</p>
   */
  endTime?: Date;
}

/**
 * @public
 * <p>The scheduled maintenance for a runtime engine.</p>
 */
export interface PendingMaintenance {
  /**
   * @public
   * <p>The maintenance schedule for the runtime engine version.</p>
   */
  schedule?: MaintenanceSchedule;

  /**
   * @public
   * <p>The specific runtime engine that the maintenance schedule applies to.</p>
   */
  engineVersion?: string;
}

/**
 * @public
 * @enum
 */
export const EnvironmentLifecycle = {
  AVAILABLE: "Available",
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type EnvironmentLifecycle = (typeof EnvironmentLifecycle)[keyof typeof EnvironmentLifecycle];

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * @public
   * <p>The name of the runtime environment. Must be unique within the account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the runtime environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the runtime environment.</p>
   */
  environmentArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The type of instance underlying the runtime environment.</p>
   */
  instanceType: string | undefined;

  /**
   * @public
   * <p>The status of the runtime environment.</p>
   */
  status: EnvironmentLifecycle | undefined;

  /**
   * @public
   * <p>The target platform for the runtime environment.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The version of the runtime engine.</p>
   */
  engineVersion: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the VPC used with this runtime environment.</p>
   */
  vpcId: string | undefined;

  /**
   * @public
   * <p>The unique identifiers of the subnets assigned to this runtime environment.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The unique identifiers of the security groups assigned to this runtime
   *          environment.</p>
   */
  securityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The timestamp when the runtime environment was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The storage configurations defined for the runtime environment.</p>
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * @public
   * <p>The tags defined for this runtime environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The desired capacity of the high availability configuration for the runtime
   *          environment.</p>
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * @public
   * <p>Whether applications running in this runtime environment are publicly accessible.
   *       </p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>The number of instances included in the runtime environment. A standalone runtime
   *          environment has a maxiumum of one instance. Currently, a high availability runtime
   *          environment has a maximum of two instances. </p>
   */
  actualCapacity?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the load balancer used with the runtime
   *          environment.</p>
   */
  loadBalancerArn?: string;

  /**
   * @public
   * <p>The reason for the reported status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>Configures the maintenance window you want for the runtime environment. If you do not
   *          provide a value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Indicates the pending maintenance scheduled on this environment.</p>
   */
  pendingMaintenance?: PendingMaintenance;

  /**
   * @public
   * <p>The identifier of a customer managed key.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * @public
   * <p>A pagination token to control the number of runtime environments displayed in the
   *          list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of runtime environments to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The names of the runtime environments. Must be unique within the account.</p>
   */
  names?: string[];

  /**
   * @public
   * <p>The engine type for the runtime environment.</p>
   */
  engineType?: EngineType;
}

/**
 * @public
 * <p>Contains a subset of the possible runtime environment attributes. Used in the
 *          environment list.</p>
 */
export interface EnvironmentSummary {
  /**
   * @public
   * <p>The name of the runtime environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a particular runtime environment.</p>
   */
  environmentArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of a particular runtime environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The instance type of the runtime environment.</p>
   */
  instanceType: string | undefined;

  /**
   * @public
   * <p>The status of the runtime environment</p>
   */
  status: EnvironmentLifecycle | undefined;

  /**
   * @public
   * <p>The target platform for the runtime environment.</p>
   */
  engineType: EngineType | undefined;

  /**
   * @public
   * <p>The version of the runtime engine.</p>
   */
  engineVersion: string | undefined;

  /**
   * @public
   * <p>The timestamp when the runtime environment was created.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * @public
   * <p>Returns a list of summary details for all the runtime environments in your account.
   *       </p>
   */
  environments: EnvironmentSummary[] | undefined;

  /**
   * @public
   * <p>A pagination token that's returned when the response doesn't contain all the runtime
   *          environments.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * @public
   * <p>The unique identifier of the runtime environment that you want to update.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The desired capacity for the runtime environment to update. The minimum possible value is 0 and the maximum is 100.</p>
   */
  desiredCapacity?: number;

  /**
   * @public
   * <p>The instance type for the runtime environment to update.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The version of the runtime engine for the runtime environment.</p>
   */
  engineVersion?: string;

  /**
   * @public
   * <p>Configures the maintenance window you want for the runtime environment. If you do not
   *          provide a value, a random system-generated value will be assigned.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Indicates whether to update the runtime environment during the maintenance window. The
   *          default is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter
   *          only if <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than
   *             <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will
   *          fail if <code>applyDuringMaintenanceWindow</code> is set to true.</p>
   */
  applyDuringMaintenanceWindow?: boolean;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * @public
   * <p>The unique identifier of the runtime environment that was updated.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSignedBluinsightsUrlResponse {
  /**
   * @public
   * <p>Single sign-on AWS Blu Insights URL.</p>
   */
  signedBiUrl: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsRequest {
  /**
   * @public
   * <p>The type of target platform.</p>
   */
  engineType?: EngineType;

  /**
   * @public
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A subset of information about the engine version for a specific application.</p>
 */
export interface EngineVersionsSummary {
  /**
   * @public
   * <p>The type of target platform for the application.</p>
   */
  engineType: string | undefined;

  /**
   * @public
   * <p>The version of the engine type used by the application.</p>
   */
  engineVersion: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsResponse {
  /**
   * @public
   * <p>Returns the engine versions.</p>
   */
  engineVersions: EngineVersionsSummary[] | undefined;

  /**
   * @public
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { M2ServiceException as __BaseException } from "./M2ServiceException";

/**
 * <p>The account or role doesn't have the right permissions to make the request.</p>
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
 * <p>Defines an alternate key. This value is optional. A legacy data set might not have any
 *          alternate key defined but if those alternate keys definitions exist, provide them, as some
 *          applications will make use of them.</p>
 * @public
 */
export interface AlternateKey {
  /**
   * <p>The name of the alternate key.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A positive integer value representing the offset to mark the start of the alternate key
   *          part in the record byte array.</p>
   * @public
   */
  offset: number | undefined;

  /**
   * <p>A strictly positive integer value representing the length of the alternate key.</p>
   * @public
   */
  length: number | undefined;

  /**
   * <p>Indicates whether the alternate key values are supposed to be unique for the given data
   *          set.</p>
   * @public
   */
  allowDuplicates?: boolean;
}

/**
 * @public
 */
export interface CancelBatchJobExecutionRequest {
  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job execution.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * @public
 */
export interface CancelBatchJobExecutionResponse {}

/**
 * <p>The parameters provided in the request conflict with existing resources.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the conflicting resource.</p>
   * @public
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
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the missing resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the missing resource.</p>
   * @public
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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The identifier of the service that the throttled request was made to.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>The identifier of the throttled request.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message of the exception field.</p>
   * @public
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
 * <p>One or more parameters provided in the request is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason why it failed service validation.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>The list of fields that failed service validation.</p>
   * @public
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
 * @public
 */
export type Definition = Definition.ContentMember | Definition.S3LocationMember | Definition.$UnknownMember;

/**
 * @public
 */
export namespace Definition {
  /**
   * <p>The S3 bucket that contains the application definition.</p>
   * @public
   */
  export interface S3LocationMember {
    s3Location: string;
    content?: never;
    $unknown?: never;
  }

  /**
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration/definitions that identify an application.</p>
   * @public
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
   * <p>The unique identifier of the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The type of the target platform for this application.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   * @public
   */
  definition: Definition | undefined;

  /**
   * <p>A list of tags to apply to the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Unique, case-sensitive identifier the service generates to ensure the idempotency of the
   *          request to create an application. The service generates the clientToken when the API call
   *          is triggered. The token expires after one hour, so if you retry the API within this
   *          timeframe with the same clientToken, you will get the same response. The service also
   *          handles deleting the clientToken after it expires. </p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The identifier of a customer managed key.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies a role that the application uses to access Amazon Web Services resources
   *          that are not part of the application or are in a different Amazon Web Services account.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The unique application identifier.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The version number of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;
}

/**
 * <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is exceeding the quota limit.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of resource that is exceeding the quota limit for Amazon Web Services Mainframe Modernization.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>A code that identifies the service that the exceeded quota belongs to.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>The identifier of the exceeded quota.</p>
   * @public
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
 * @public
 */
export interface GdgAttributes {
  /**
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   * @public
   */
  limit?: number;

  /**
   * <p>The disposition of the data set in the catalog.</p>
   * @public
   */
  rollDisposition?: string;
}

/**
 * <p>The supported properties for a PO type data set.</p>
 * @public
 */
export interface PoAttributes {
  /**
   * <p>The format of the data set records.</p>
   * @public
   */
  format: string | undefined;

  /**
   * <p>The character set encoding of the data set.</p>
   * @public
   */
  encoding?: string;

  /**
   * <p>An array containing one or more filename extensions, allowing you to specify which files
   *          to be included as PDS member.</p>
   * @public
   */
  memberFileExtensions: string[] | undefined;
}

/**
 * <p>The supported properties for a PS type data set.</p>
 * @public
 */
export interface PsAttributes {
  /**
   * <p>The format of the data set records.</p>
   * @public
   */
  format: string | undefined;

  /**
   * <p>The character set encoding of the data set.</p>
   * @public
   */
  encoding?: string;
}

/**
 * <p>The primary key for a KSDS data set.</p>
 * @public
 */
export interface PrimaryKey {
  /**
   * <p>A name for the Primary Key.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A positive integer value representing the offset to mark the start of the primary key in
   *          the record byte array.</p>
   * @public
   */
  offset: number | undefined;

  /**
   * <p>A strictly positive integer value representing the length of the primary key. </p>
   * @public
   */
  length: number | undefined;
}

/**
 * <p>The attributes of a VSAM type data set.</p>
 * @public
 */
export interface VsamAttributes {
  /**
   * <p>The record format of the data set.</p>
   * @public
   */
  format: string | undefined;

  /**
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   * @public
   */
  encoding?: string;

  /**
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   * @public
   */
  compressed?: boolean;

  /**
   * <p>The primary key of the data set.</p>
   * @public
   */
  primaryKey?: PrimaryKey;

  /**
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   * @public
   */
  alternateKeys?: AlternateKey[];
}

/**
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 * @public
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
   * <p>The details of a VSAM data set.</p>
   * @public
   */
  export interface VsamMember {
    vsam: VsamAttributes;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The generation data group of the data set.</p>
   * @public
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgAttributes;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a PO type data set.</p>
   * @public
   */
  export interface PoMember {
    vsam?: never;
    gdg?: never;
    po: PoAttributes;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a PS type data set.</p>
   * @public
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
 * <p>The length of the records in the data set.</p>
 * @public
 */
export interface RecordLength {
  /**
   * <p>The minimum record length of a record.</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum record length. In case of fixed, both minimum and maximum are the
   *          same.</p>
   * @public
   */
  max: number | undefined;
}

/**
 * <p>Defines a data set.</p>
 * @public
 */
export interface DataSet {
  /**
   * <p>The storage type of the data set: database or file system. For Micro Focus, database
   *          corresponds to datastore and file system corresponds to EFS/FSX. For Blu Age, there is no
   *          support of file system and database corresponds to Blusam. </p>
   * @public
   */
  storageType?: string;

  /**
   * <p>The logical identifier for a specific data set (in mainframe format).</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>The type of dataset. The only supported value is VSAM.</p>
   * @public
   */
  datasetOrg: DatasetOrgAttributes | undefined;

  /**
   * <p>The relative location of the data set in the database or file system. </p>
   * @public
   */
  relativePath?: string;

  /**
   * <p>The length of a record.</p>
   * @public
   */
  recordLength: RecordLength | undefined;
}

/**
 * <p>Defines an external storage location.</p>
 * @public
 */
export type ExternalLocation = ExternalLocation.S3LocationMember | ExternalLocation.$UnknownMember;

/**
 * @public
 */
export namespace ExternalLocation {
  /**
   * <p>The URI of the Amazon S3 bucket.</p>
   * @public
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
 * <p>Identifies a specific data set to import from an external location.</p>
 * @public
 */
export interface DataSetImportItem {
  /**
   * <p>The data set.</p>
   * @public
   */
  dataSet: DataSet | undefined;

  /**
   * <p>The location of the data set.</p>
   * @public
   */
  externalLocation: ExternalLocation | undefined;
}

/**
 * <p>Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.</p>
 * @public
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
   * <p>The Amazon S3 location of the data sets.</p>
   * @public
   */
  export interface S3LocationMember {
    s3Location: string;
    dataSets?: never;
    $unknown?: never;
  }

  /**
   * <p>The data sets.</p>
   * @public
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
   * <p>The unique identifier of the application for which you want to import data sets.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The data set import task configuration.</p>
   * @public
   */
  importConfig: DataSetImportConfig | undefined;

  /**
   * <p> Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a data set import. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDataSetImportTaskResponse {
  /**
   * <p>The task identifier. This operation is asynchronous. Use this identifier with the <a>GetDataSetImportTask</a> operation to obtain the status of this task.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * <p>The identifier of the runtime environment where you want to deploy this
   *          application.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The application identifier.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The version of the application to deploy.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create a deployment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * <p>The unique identifier of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to delete.</p>
   * @public
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
   * <p>The unique identifier of the application you want to delete.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment where the application was previously
   *          deployed.</p>
   * @public
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
   * <p>The identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentLifecycle = {
  DEPLOYING: "Deploying",
  DEPLOY_UPDATE: "Updating Deployment",
  FAILED: "Failed",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type DeploymentLifecycle = (typeof DeploymentLifecycle)[keyof typeof DeploymentLifecycle];

/**
 * <p>Contains a summary of a deployed application.</p>
 * @public
 */
export interface DeployedVersionSummary {
  /**
   * <p>The version of the deployed application.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  status: DeploymentLifecycle | undefined;

  /**
   * <p>The reason for the reported status.</p>
   * @public
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
 * <p>Defines an application version summary.</p>
 * @public
 */
export interface ApplicationVersionSummary {
  /**
   * <p>The application version.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  status: ApplicationVersionLifecycle | undefined;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The timestamp when the application version was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * <p>A subset of the attributes that describe a log group. In CloudWatch a log group is a group of
 *          log streams that share the same retention, monitoring, and access control settings.</p>
 * @public
 */
export interface LogGroupSummary {
  /**
   * <p>The type of log.</p>
   * @public
   */
  logType: string | undefined;

  /**
   * <p>The name of the log group.</p>
   * @public
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
   * <p>The unique identifier of the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  status: ApplicationLifecycle | undefined;

  /**
   * <p>The latest version of the application.</p>
   * @public
   */
  latestVersion: ApplicationVersionSummary | undefined;

  /**
   * <p>The version of the application that is deployed.</p>
   * @public
   */
  deployedVersion?: DeployedVersionSummary;

  /**
   * <p>The type of the target platform for the application.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The list of log summaries. Each log summary includes the log type as well as the log
   *          group identifier. These are CloudWatch logs. Amazon Web Services Mainframe Modernization pushes the application log to CloudWatch under
   *          the customer's account.</p>
   * @public
   */
  logGroups?: LogGroupSummary[];

  /**
   * <p>The timestamp when this application was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp when you last started the application. Null until the application runs for
   *          the first time.</p>
   * @public
   */
  lastStartTime?: Date;

  /**
   * <p>A list of tags associated with the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The identifier of the runtime environment where you want to deploy the
   *          application.</p>
   * @public
   */
  environmentId?: string;

  /**
   * <p>Returns the Amazon Resource Names (ARNs) of the target groups that are attached to the
   *          network load balancer.</p>
   * @public
   */
  targetGroupArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the network load balancer listener created in your
   *          Amazon Web Services account. Amazon Web Services Mainframe Modernization creates this listener for you the first time you deploy an
   *          application.</p>
   * @public
   */
  listenerArns?: string[];

  /**
   * <p>The port associated with the network load balancer listener created in your Amazon Web Services
   *          account.</p>
   * @public
   */
  listenerPorts?: number[];

  /**
   * <p>The public DNS name of the load balancer created in your Amazon Web Services account.</p>
   * @public
   */
  loadBalancerDnsName?: string;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The identifier of a customer managed key.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role associated with the application.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface GetApplicationVersionRequest {
  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The specific version of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;
}

/**
 * @public
 */
export interface GetApplicationVersionResponse {
  /**
   * <p>The name of the application version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The specific version of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The application description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The content of the application definition. This is a JSON object that contains the
   *          resource configuration and definitions that identify an application.</p>
   * @public
   */
  definitionContent: string | undefined;

  /**
   * <p>The status of the application version.</p>
   * @public
   */
  status: ApplicationVersionLifecycle | undefined;

  /**
   * <p>The timestamp when the application version was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface GetBatchJobExecutionRequest {
  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job execution.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * <p>A batch job identifier in which the batch job to run is identified by the file name and
 *          the relative path to the file name.</p>
 * @public
 */
export interface FileBatchJobIdentifier {
  /**
   * <p>The file name for the batch job identifier.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The relative path to the file name for the batch job identifier.</p>
   * @public
   */
  folderPath?: string;
}

/**
 * <p>Identifies a specific batch job.</p>
 * @public
 */
export type JobIdentifier =
  | JobIdentifier.FileNameMember
  | JobIdentifier.ScriptNameMember
  | JobIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace JobIdentifier {
  /**
   * <p>The name of the file that contains the batch job definition.</p>
   * @public
   */
  export interface FileNameMember {
    fileName: string;
    scriptName?: never;
    $unknown?: never;
  }

  /**
   * <p>The name of the script that contains the batch job definition.</p>
   * @public
   */
  export interface ScriptNameMember {
    fileName?: never;
    scriptName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fileName?: never;
    scriptName?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileName: (value: string) => T;
    scriptName: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobIdentifier, visitor: Visitor<T>): T => {
    if (value.fileName !== undefined) return visitor.fileName(value.fileName);
    if (value.scriptName !== undefined) return visitor.scriptName(value.scriptName);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A batch job identifier in which the batch jobs to run are identified by an Amazon S3 location.</p>
 * @public
 */
export interface S3BatchJobIdentifier {
  /**
   * <p>The Amazon S3 bucket that contains the batch job definitions.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The key prefix that specifies the path to the folder in the S3 bucket that has the batch job definitions.</p>
   * @public
   */
  keyPrefix?: string;

  /**
   * <p>Identifies the batch job definition. This identifier can also point to any batch job definition that already exists in the application or to one of the batch job definitions within the directory that is specified in <code>keyPrefix</code>.</p>
   * @public
   */
  identifier: JobIdentifier | undefined;
}

/**
 * <p>A batch job identifier in which the batch job to run is identified by the script
 *          name.</p>
 * @public
 */
export interface ScriptBatchJobIdentifier {
  /**
   * <p>The name of the script containing the batch job definition.</p>
   * @public
   */
  scriptName: string | undefined;
}

/**
 * <p>Identifies a specific batch job.</p>
 * @public
 */
export type BatchJobIdentifier =
  | BatchJobIdentifier.FileBatchJobIdentifierMember
  | BatchJobIdentifier.S3BatchJobIdentifierMember
  | BatchJobIdentifier.ScriptBatchJobIdentifierMember
  | BatchJobIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace BatchJobIdentifier {
  /**
   * <p>Specifies a file associated with a specific batch job.</p>
   * @public
   */
  export interface FileBatchJobIdentifierMember {
    fileBatchJobIdentifier: FileBatchJobIdentifier;
    scriptBatchJobIdentifier?: never;
    s3BatchJobIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>A batch job identifier in which the batch job to run is identified by the script
   *          name.</p>
   * @public
   */
  export interface ScriptBatchJobIdentifierMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier: ScriptBatchJobIdentifier;
    s3BatchJobIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies an Amazon S3 location that identifies the batch jobs that you want to run. Use this identifier to run ad hoc batch jobs.</p>
   * @public
   */
  export interface S3BatchJobIdentifierMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier?: never;
    s3BatchJobIdentifier: S3BatchJobIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fileBatchJobIdentifier?: never;
    scriptBatchJobIdentifier?: never;
    s3BatchJobIdentifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileBatchJobIdentifier: (value: FileBatchJobIdentifier) => T;
    scriptBatchJobIdentifier: (value: ScriptBatchJobIdentifier) => T;
    s3BatchJobIdentifier: (value: S3BatchJobIdentifier) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BatchJobIdentifier, visitor: Visitor<T>): T => {
    if (value.fileBatchJobIdentifier !== undefined) return visitor.fileBatchJobIdentifier(value.fileBatchJobIdentifier);
    if (value.scriptBatchJobIdentifier !== undefined)
      return visitor.scriptBatchJobIdentifier(value.scriptBatchJobIdentifier);
    if (value.s3BatchJobIdentifier !== undefined) return visitor.s3BatchJobIdentifier(value.s3BatchJobIdentifier);
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
   * <p>The unique identifier for this batch job execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier for this batch job.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>The name of this batch job.</p>
   * @public
   */
  jobName?: string;

  /**
   * <p>The user for the job.</p>
   * @public
   */
  jobUser?: string;

  /**
   * <p>The type of job.</p>
   * @public
   */
  jobType?: BatchJobType;

  /**
   * <p>The status of the batch job execution.</p>
   * @public
   */
  status: BatchJobExecutionStatus | undefined;

  /**
   * <p>The timestamp when the batch job execution started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp when the batch job execution ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more
   *          information, see <a href="https://www.ibm.com/docs/en/was/8.5.5?topic=model-batch-return-codes">Batch return
   *             codes</a> in the <i>IBM WebSphere Application Server</i>
   *          documentation.</p>
   * @public
   */
  returnCode?: string;

  /**
   * <p>The unique identifier of this batch job.</p>
   * @public
   */
  batchJobIdentifier?: BatchJobIdentifier;
}

/**
 * <p> Failed to connect to server, or didn’t receive response within expected time period.</p>
 * @public
 */
export class ExecutionTimeoutException extends __BaseException {
  readonly name: "ExecutionTimeoutException" = "ExecutionTimeoutException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecutionTimeoutException, __BaseException>) {
    super({
      name: "ExecutionTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecutionTimeoutException.prototype);
  }
}

/**
 * @public
 */
export interface GetDataSetDetailsRequest {
  /**
   * <p>The unique identifier of the application that this data set is associated with.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  dataSetName: string | undefined;
}

/**
 * <p>The required attributes for a generation data group data set. A generation data set is
 *          one of a collection of successive, historically related, catalogued data sets that together
 *          are known as a generation data group (GDG). Use this structure when you want to import a
 *          GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation
 *             data sets</a>.</p>
 * @public
 */
export interface GdgDetailAttributes {
  /**
   * <p>The maximum number of generation data sets, up to 255, in a GDG.</p>
   * @public
   */
  limit?: number;

  /**
   * <p>The disposition of the data set in the catalog.</p>
   * @public
   */
  rollDisposition?: string;
}

/**
 * <p>The supported properties for a PO type data set.</p>
 * @public
 */
export interface PoDetailAttributes {
  /**
   * <p>The format of the data set records.</p>
   * @public
   */
  format: string | undefined;

  /**
   * <p>The character set encoding of the data set.</p>
   * @public
   */
  encoding: string | undefined;
}

/**
 * <p>The supported properties for a PS type data set.</p>
 * @public
 */
export interface PsDetailAttributes {
  /**
   * <p>The format of the data set records.</p>
   * @public
   */
  format: string | undefined;

  /**
   * <p>The character set encoding of the data set.</p>
   * @public
   */
  encoding: string | undefined;
}

/**
 * <p>The attributes of a VSAM type data set.</p>
 * @public
 */
export interface VsamDetailAttributes {
  /**
   * <p>The character set used by the data set. Can be ASCII, EBCDIC, or unknown.</p>
   * @public
   */
  encoding?: string;

  /**
   * <p>The record format of the data set.</p>
   * @public
   */
  recordFormat?: string;

  /**
   * <p>Indicates whether indexes for this dataset are stored as compressed values. If you have
   *          a large data set (typically &gt; 100 Mb), consider setting this flag to True.</p>
   * @public
   */
  compressed?: boolean;

  /**
   * <p>If set to True, enforces loading the data set into cache before it’s used by the
   *          application.</p>
   * @public
   */
  cacheAtStartup?: boolean;

  /**
   * <p>The primary key of the data set.</p>
   * @public
   */
  primaryKey?: PrimaryKey;

  /**
   * <p>The alternate key definitions, if any. A legacy dataset might not have any alternate key
   *          defined, but if those alternate keys definitions exist, provide them as some applications
   *          will make use of them.</p>
   * @public
   */
  alternateKeys?: AlternateKey[];
}

/**
 * <p>Additional details about the data set. Different attributes correspond to different data
 *          set organizations. The values are populated based on datasetOrg, storageType and backend
 *          (Blu Age or Micro Focus).</p>
 * @public
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
   * <p>The details of a VSAM data set.</p>
   * @public
   */
  export interface VsamMember {
    vsam: VsamDetailAttributes;
    gdg?: never;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The generation data group of the data set.</p>
   * @public
   */
  export interface GdgMember {
    vsam?: never;
    gdg: GdgDetailAttributes;
    po?: never;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a PO type data set.</p>
   * @public
   */
  export interface PoMember {
    vsam?: never;
    gdg?: never;
    po: PoDetailAttributes;
    ps?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a PS type data set.</p>
   * @public
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
   * <p>The name of the data set.</p>
   * @public
   */
  dataSetName: string | undefined;

  /**
   * <p>The type of data set. The only supported value is VSAM.</p>
   * @public
   */
  dataSetOrg?: DatasetDetailOrgAttributes;

  /**
   * <p>The length of records in the data set.</p>
   * @public
   */
  recordLength?: number;

  /**
   * <p>The location where the data set is stored.</p>
   * @public
   */
  location?: string;

  /**
   * <p>The size of the block on disk. </p>
   * @public
   */
  blocksize?: number;

  /**
   * <p>The timestamp when the data set was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The last time the data set was referenced.</p>
   * @public
   */
  lastReferencedTime?: Date;

  /**
   * <p>File size of the dataset.</p>
   * @public
   */
  fileSize?: number;
}

/**
 * <p>Server cannot process the request at the moment.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface GetDataSetImportTaskRequest {
  /**
   * <p>The application identifier.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The task identifier returned by the <a>CreateDataSetImportTask</a> operation.
   *       </p>
   * @public
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
  FAILED: "Failed",
  RUNNING: "Running",
} as const;

/**
 * @public
 */
export type DataSetTaskLifecycle = (typeof DataSetTaskLifecycle)[keyof typeof DataSetTaskLifecycle];

/**
 * <p>Represents a summary of data set imports.</p>
 * @public
 */
export interface DataSetImportSummary {
  /**
   * <p>The total number of data set imports.</p>
   * @public
   */
  total: number | undefined;

  /**
   * <p>The number of data set imports that have succeeded.</p>
   * @public
   */
  succeeded: number | undefined;

  /**
   * <p>The number of data set imports that have failed.</p>
   * @public
   */
  failed: number | undefined;

  /**
   * <p>The number of data set imports that are pending.</p>
   * @public
   */
  pending: number | undefined;

  /**
   * <p>The number of data set imports that are in progress.</p>
   * @public
   */
  inProgress: number | undefined;
}

/**
 * @public
 */
export interface GetDataSetImportTaskResponse {
  /**
   * <p>The task identifier.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  status: DataSetTaskLifecycle | undefined;

  /**
   * <p>A summary of the status of the task.</p>
   * @public
   */
  summary?: DataSetImportSummary;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * <p>The unique identifier for the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * <p>The unique identifier of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The application version.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  status: DeploymentLifecycle | undefined;

  /**
   * <p>The timestamp when the deployment was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>A pagination token to control the number of applications displayed in the list.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of applications to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The names of the applications.</p>
   * @public
   */
  names?: string[];

  /**
   * <p>The unique identifier of the runtime environment where the applications are
   *          deployed.</p>
   * @public
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
 * <p>A subset of the possible application attributes. Used in the application list.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  status: ApplicationLifecycle | undefined;

  /**
   * <p>The type of the target platform for this application.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The timestamp when the application was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The unique identifier of the runtime environment that hosts this application.</p>
   * @public
   */
  environmentId?: string;

  /**
   * <p>The timestamp when you last started the application. Null until the application runs for
   *          the first time.</p>
   * @public
   */
  lastStartTime?: Date;

  /**
   * <p>Indicates the status of the latest version of the application.</p>
   * @public
   */
  versionStatus?: ApplicationVersionLifecycle;

  /**
   * <p>Indicates either an ongoing deployment or if the application has ever deployed
   *          successfully.</p>
   * @public
   */
  deploymentStatus?: ApplicationDeploymentLifecycle;

  /**
   * <p>The Amazon Resource Name (ARN) of the role associated with the application.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Returns a list of summary details for all the applications in a runtime
   *          environment.</p>
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all
   *          applications.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of application versions to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * <p>The list of application versions.</p>
   * @public
   */
  applicationVersions: ApplicationVersionSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBatchJobDefinitionsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch job definitions to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the batch job definition is a FileBatchJobDefinition, the prefix allows you to search
   *          on the file names of FileBatchJobDefinitions.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>A file containing a batch job definition.</p>
 * @public
 */
export interface FileBatchJobDefinition {
  /**
   * <p>The name of the file containing the batch job definition.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The path to the file containing the batch job definition.</p>
   * @public
   */
  folderPath?: string;
}

/**
 * <p>A batch job definition contained in a script.</p>
 * @public
 */
export interface ScriptBatchJobDefinition {
  /**
   * <p>The name of the script containing the batch job definition.</p>
   * @public
   */
  scriptName: string | undefined;
}

/**
 * <p>Defines the details of a batch job.</p>
 * @public
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
   * <p>Specifies a file containing a batch job definition.</p>
   * @public
   */
  export interface FileBatchJobDefinitionMember {
    fileBatchJobDefinition: FileBatchJobDefinition;
    scriptBatchJobDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>A script containing a batch job definition.</p>
   * @public
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
   * <p>The list of batch job definitions.</p>
   * @public
   */
  batchJobDefinitions: BatchJobDefinition[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBatchJobExecutionsRequest {
  /**
   * <p>A pagination token to control the number of batch job executions displayed in the
   *          list.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch job executions to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of each batch job execution.</p>
   * @public
   */
  executionIds?: string[];

  /**
   * <p>The name of each batch job execution.</p>
   * @public
   */
  jobName?: string;

  /**
   * <p>The status of the batch job executions.</p>
   * @public
   */
  status?: BatchJobExecutionStatus;

  /**
   * <p>The time after which the batch job executions started.</p>
   * @public
   */
  startedAfter?: Date;

  /**
   * <p>The time before the batch job executions started.</p>
   * @public
   */
  startedBefore?: Date;
}

/**
 * <p>A subset of the possible batch job attributes. Used in the batch job list.</p>
 * @public
 */
export interface BatchJobExecutionSummary {
  /**
   * <p>The unique identifier of this execution of the batch job.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The unique identifier of the application that hosts this batch job.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of a particular batch job.</p>
   * @public
   */
  jobId?: string;

  /**
   * <p>The name of a particular batch job.</p>
   * @public
   */
  jobName?: string;

  /**
   * <p>The type of a particular batch job execution.</p>
   * @public
   */
  jobType?: BatchJobType;

  /**
   * <p>The status of a particular batch job execution.</p>
   * @public
   */
  status: BatchJobExecutionStatus | undefined;

  /**
   * <p>The timestamp when a particular batch job execution started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp when this batch job execution ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more
   *          information, see <a href="https://www.ibm.com/docs/en/was/8.5.5?topic=model-batch-return-codes">Batch return
   *             codes</a> in the <i>IBM WebSphere Application Server</i>
   *          documentation.</p>
   * @public
   */
  returnCode?: string;

  /**
   * <p>The unique identifier of this batch job.</p>
   * @public
   */
  batchJobIdentifier?: BatchJobIdentifier;
}

/**
 * @public
 */
export interface ListBatchJobExecutionsResponse {
  /**
   * <p>Returns a list of batch job executions for an application.</p>
   * @public
   */
  batchJobExecutions: BatchJobExecutionSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all batch job
   *          executions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSetImportHistoryRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * <p>Contains information about a data set import task.</p>
 * @public
 */
export interface DataSetImportTask {
  /**
   * <p>The identifier of the data set import task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The status of the data set import task.</p>
   * @public
   */
  status: DataSetTaskLifecycle | undefined;

  /**
   * <p>A summary of the data set import task.</p>
   * @public
   */
  summary: DataSetImportSummary | undefined;

  /**
   * <p>If dataset import failed, the failure reason will show here.</p>
   * @public
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListDataSetImportHistoryResponse {
  /**
   * <p>The data set import tasks.</p>
   * @public
   */
  dataSetImportTasks: DataSetImportTask[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * <p>The unique identifier of the application for which you want to list the associated data
   *          sets.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The prefix of the data set name, which you can use to filter the list of data
   *          sets.</p>
   * @public
   */
  prefix?: string;

  /**
   * <p>Filter dataset name matching the specified pattern. Can use * and % as wild cards.</p>
   * @public
   */
  nameFilter?: string;
}

/**
 * <p>A subset of the possible data set attributes.</p>
 * @public
 */
export interface DataSetSummary {
  /**
   * <p>The name of the data set.</p>
   * @public
   */
  dataSetName: string | undefined;

  /**
   * <p>The type of data set. The only supported value is VSAM.</p>
   * @public
   */
  dataSetOrg?: string;

  /**
   * <p>The format of the data set. </p>
   * @public
   */
  format?: string;

  /**
   * <p>The timestamp when the data set was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The last time the data set was referenced.</p>
   * @public
   */
  lastReferencedTime?: Date;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * <p>The list of data sets, containing information including the creation time, the data set
   *          name, the data set organization, the data set format, and the last time the data set was
   *          referenced or updated.</p>
   * @public
   */
  dataSets: DataSetSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The application identifier.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * <p>A subset of information about a specific deployment.</p>
 * @public
 */
export interface DeploymentSummary {
  /**
   * <p>The unique identifier of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;

  /**
   * <p>The current status of the deployment.</p>
   * @public
   */
  status: DeploymentLifecycle | undefined;

  /**
   * <p>The timestamp when the deployment was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * <p>The list of deployments that is returned.</p>
   * @public
   */
  deployments: DeploymentSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to start.</p>
   * @public
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
   * <p>The unique identifier of the application associated with this batch job.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the batch job.</p>
   * @public
   */
  batchJobIdentifier: BatchJobIdentifier | undefined;

  /**
   * <p>The collection of batch job parameters. For details about limits for keys and values,
   *          see <a href="https://www.ibm.com/docs/en/workload-automation/9.3.0?topic=zos-coding-variables-in-jcl">Coding variables in JCL</a>.</p>
   * @public
   */
  jobParams?: Record<string, string>;
}

/**
 * @public
 */
export interface StartBatchJobResponse {
  /**
   * <p>The unique identifier of this execution of the batch job.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * <p>The unique identifier of the application you want to stop.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>Stopping an application process can take a long time. Setting this parameter to true
   *          lets you force stop the application so you don't need to wait until the process finishes to
   *          apply another action on the application. The default value is false.</p>
   * @public
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
   * <p>The unique identifier of the application you want to update.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The description of the application to update.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The current version of the application to update.</p>
   * @public
   */
  currentApplicationVersion: number | undefined;

  /**
   * <p>The application definition for this application. You can specify either inline JSON or
   *          an S3 bucket location.</p>
   * @public
   */
  definition?: Definition;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>The new version of the application.</p>
   * @public
   */
  applicationVersion: number | undefined;
}

/**
 * <p>Defines the details of a high availability configuration.</p>
 * @public
 */
export interface HighAvailabilityConfig {
  /**
   * <p>The number of instances in a high availability configuration. The minimum possible value is 1 and the maximum is 100.</p>
   * @public
   */
  desiredCapacity: number | undefined;
}

/**
 * <p>Defines the storage configuration for an Amazon EFS file system.</p>
 * @public
 */
export interface EfsStorageConfiguration {
  /**
   * <p>The file system identifier.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The mount point for the file system.</p>
   * @public
   */
  mountPoint: string | undefined;
}

/**
 * <p>Defines the storage configuration for an Amazon FSx file system.</p>
 * @public
 */
export interface FsxStorageConfiguration {
  /**
   * <p>The file system identifier.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The mount point for the file system.</p>
   * @public
   */
  mountPoint: string | undefined;
}

/**
 * <p>Defines the storage configuration for a runtime environment.</p>
 * @public
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
   * <p>Defines the storage configuration for an Amazon EFS file system.</p>
   * @public
   */
  export interface EfsMember {
    efs: EfsStorageConfiguration;
    fsx?: never;
    $unknown?: never;
  }

  /**
   * <p>Defines the storage configuration for an Amazon FSx file system.</p>
   * @public
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
   * <p>The name of the runtime environment. Must be unique within the account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of instance for the runtime environment.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The description of the runtime environment.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The engine type for the runtime environment.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The version of the engine type for the runtime environment.</p>
   * @public
   */
  engineVersion?: string;

  /**
   * <p>The list of subnets associated with the VPC for this runtime environment.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The list of security groups for the VPC associated with this runtime environment.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>Optional. The storage configurations for this runtime environment.</p>
   * @public
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * <p>Specifies whether the runtime environment is publicly accessible.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The details of a high availability configuration for this runtime environment.</p>
   * @public
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * <p>The tags for the runtime environment.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format <code>ddd:hh24:mi-ddd:hh24:mi</code> and must be less than 24 hours. The following two examples are valid maintenance windows: <code>sun:23:45-mon:00:15</code> or <code>sat:01:00-sat:03:00</code>. </p>
   *          <p>If you do not provide a value, a random system-generated value will be assigned.</p>
   * @public
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request
   *          to create an environment. The service generates the clientToken when the API call is
   *          triggered. The token expires after one hour, so if you retry the API within this timeframe
   *          with the same clientToken, you will get the same response. The service also handles
   *          deleting the clientToken after it expires. </p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The identifier of a customer managed key.</p>
   * @public
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>The unique identifier of the runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The unique identifier of the runtime environment you want to delete.</p>
   * @public
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
   * <p>The unique identifier of the runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>The information about the maintenance schedule.</p>
 * @public
 */
export interface MaintenanceSchedule {
  /**
   * <p>The time the scheduled maintenance is to start.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The time the scheduled maintenance is to end.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * <p>The scheduled maintenance for a runtime engine.</p>
 * @public
 */
export interface PendingMaintenance {
  /**
   * <p>The maintenance schedule for the runtime engine version.</p>
   * @public
   */
  schedule?: MaintenanceSchedule;

  /**
   * <p>The specific runtime engine that the maintenance schedule applies to.</p>
   * @public
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
   * <p>The name of the runtime environment. Must be unique within the account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the runtime environment.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the runtime environment.</p>
   * @public
   */
  environmentArn: string | undefined;

  /**
   * <p>The unique identifier of the runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The type of instance underlying the runtime environment.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The status of the runtime environment.</p>
   * @public
   */
  status: EnvironmentLifecycle | undefined;

  /**
   * <p>The target platform for the runtime environment.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The version of the runtime engine.</p>
   * @public
   */
  engineVersion: string | undefined;

  /**
   * <p>The unique identifier for the VPC used with this runtime environment.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets assigned to this runtime environment.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups assigned to this runtime
   *          environment.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The timestamp when the runtime environment was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The storage configurations defined for the runtime environment.</p>
   * @public
   */
  storageConfigurations?: StorageConfiguration[];

  /**
   * <p>The tags defined for this runtime environment.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The desired capacity of the high availability configuration for the runtime
   *          environment.</p>
   * @public
   */
  highAvailabilityConfig?: HighAvailabilityConfig;

  /**
   * <p>Whether applications running in this runtime environment are publicly accessible.
   *       </p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The number of instances included in the runtime environment. A standalone runtime
   *          environment has a maximum of one instance. Currently, a high availability runtime
   *          environment has a maximum of two instances. </p>
   * @public
   */
  actualCapacity?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the load balancer used with the runtime
   *          environment.</p>
   * @public
   */
  loadBalancerArn?: string;

  /**
   * <p>The reason for the reported status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The maintenance window for the runtime environment. If you don't
   *          provide a value for the maintenance window, the service assigns a random value.</p>
   * @public
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Indicates the pending maintenance scheduled on this environment.</p>
   * @public
   */
  pendingMaintenance?: PendingMaintenance;

  /**
   * <p>The identifier of a customer managed key.</p>
   * @public
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>A pagination token to control the number of runtime environments displayed in the
   *          list.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of runtime environments to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The names of the runtime environments. Must be unique within the account.</p>
   * @public
   */
  names?: string[];

  /**
   * <p>The engine type for the runtime environment.</p>
   * @public
   */
  engineType?: EngineType;
}

/**
 * <p>Contains a subset of the possible runtime environment attributes. Used in the
 *          environment list.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the runtime environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a particular runtime environment.</p>
   * @public
   */
  environmentArn: string | undefined;

  /**
   * <p>The unique identifier of a particular runtime environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The instance type of the runtime environment.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The status of the runtime environment</p>
   * @public
   */
  status: EnvironmentLifecycle | undefined;

  /**
   * <p>The target platform for the runtime environment.</p>
   * @public
   */
  engineType: EngineType | undefined;

  /**
   * <p>The version of the runtime engine.</p>
   * @public
   */
  engineVersion: string | undefined;

  /**
   * <p>The timestamp when the runtime environment was created.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>Returns a list of summary details for all the runtime environments in your account.
   *       </p>
   * @public
   */
  environments: EnvironmentSummary[] | undefined;

  /**
   * <p>A pagination token that's returned when the response doesn't contain all the runtime
   *          environments.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * <p>The unique identifier of the runtime environment that you want to update.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The desired capacity for the runtime environment to update. The minimum possible value is 0 and the maximum is 100.</p>
   * @public
   */
  desiredCapacity?: number;

  /**
   * <p>The instance type for the runtime environment to update.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The version of the runtime engine for the runtime environment.</p>
   * @public
   */
  engineVersion?: string;

  /**
   * <p>Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format <code>ddd:hh24:mi-ddd:hh24:mi</code> and must be less than 24 hours. The following two examples are valid maintenance windows: <code>sun:23:45-mon:00:15</code> or <code>sat:01:00-sat:03:00</code>. </p>
   *          <p>If you do not provide a value, a random system-generated value will be assigned.</p>
   * @public
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Indicates whether to update the runtime environment during the maintenance window. The
   *          default is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter
   *          only if <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than
   *             <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will
   *          fail if <code>applyDuringMaintenanceWindow</code> is set to true.</p>
   * @public
   */
  applyDuringMaintenanceWindow?: boolean;

  /**
   * <p>Forces the updates on the environment. This option is needed if the applications in the environment are not stopped or if there are ongoing application-related activities in the environment.</p>
   *          <p>If you use this option, be aware that it could lead to data corruption in the applications, and that you might need to perform repair and recovery procedures for the applications.</p>
   *          <p>This option is not needed if the attribute being updated is <code>preferredMaintenanceWindow</code>.</p>
   * @public
   */
  forceUpdate?: boolean;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * <p>The unique identifier of the runtime environment that was updated.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSignedBluinsightsUrlResponse {
  /**
   * <p>Single sign-on AWS Blu Insights URL.</p>
   * @public
   */
  signedBiUrl: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsRequest {
  /**
   * <p>The type of target platform.</p>
   * @public
   */
  engineType?: EngineType;

  /**
   * <p>A pagination token returned from a previous call to
   *   this operation. This specifies the next item to return. To return to the beginning of the
   *   list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A subset of information about the engine version for a specific application.</p>
 * @public
 */
export interface EngineVersionsSummary {
  /**
   * <p>The type of target platform for the application.</p>
   * @public
   */
  engineType: string | undefined;

  /**
   * <p>The version of the engine type used by the application.</p>
   * @public
   */
  engineVersion: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsResponse {
  /**
   * <p>Returns the engine versions.</p>
   * @public
   */
  engineVersions: EngineVersionsSummary[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token
   *   that is passed to a subsequent call to this operation to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

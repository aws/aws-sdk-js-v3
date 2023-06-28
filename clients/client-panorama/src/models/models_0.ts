// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PanoramaServiceException as __BaseException } from "./PanoramaServiceException";

/**
 * @public
 * <p>The requestor does not have permission to access the target action or resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * <p>Details about a beta appliance software update.</p>
 */
export interface AlternateSoftwareMetadata {
  /**
   * <p>The appliance software version.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationInstanceHealthStatus = {
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ApplicationInstanceHealthStatus =
  (typeof ApplicationInstanceHealthStatus)[keyof typeof ApplicationInstanceHealthStatus];

/**
 * @public
 * @enum
 */
export const DesiredState = {
  REMOVED: "REMOVED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DesiredState = (typeof DesiredState)[keyof typeof DesiredState];

/**
 * @public
 * @enum
 */
export const DeviceReportedStatus = {
  INSTALL_ERROR: "INSTALL_ERROR",
  INSTALL_IN_PROGRESS: "INSTALL_IN_PROGRESS",
  LAUNCHED: "LAUNCHED",
  LAUNCH_ERROR: "LAUNCH_ERROR",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_ERROR: "STOP_ERROR",
} as const;

/**
 * @public
 */
export type DeviceReportedStatus = (typeof DeviceReportedStatus)[keyof typeof DeviceReportedStatus];

/**
 * @public
 * <p>An application instance's state.</p>
 */
export interface ReportedRuntimeContextState {
  /**
   * <p>The application's desired state.</p>
   */
  DesiredState: DesiredState | string | undefined;

  /**
   * <p>The device's name.</p>
   */
  RuntimeContextName: string | undefined;

  /**
   * <p>The application's reported status.</p>
   */
  DeviceReportedStatus: DeviceReportedStatus | string | undefined;

  /**
   * <p>When the device reported the application's state.</p>
   */
  DeviceReportedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationInstanceStatus = {
  DEPLOYMENT_ERROR: "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_IN_PROGRESS: "DEPLOYMENT_IN_PROGRESS",
  DEPLOYMENT_PENDING: "DEPLOYMENT_PENDING",
  DEPLOYMENT_REQUESTED: "DEPLOYMENT_REQUESTED",
  DEPLOYMENT_SUCCEEDED: "DEPLOYMENT_SUCCEEDED",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
  REMOVAL_PENDING: "REMOVAL_PENDING",
  REMOVAL_REQUESTED: "REMOVAL_REQUESTED",
  REMOVAL_SUCCEEDED: "REMOVAL_SUCCEEDED",
} as const;

/**
 * @public
 */
export type ApplicationInstanceStatus = (typeof ApplicationInstanceStatus)[keyof typeof ApplicationInstanceStatus];

/**
 * @public
 * <p>An application instance on a device.</p>
 */
export interface ApplicationInstance {
  /**
   * <p>The application instance's name.</p>
   */
  Name?: string;

  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId?: string;

  /**
   * <p>The device's ID.</p>
   */
  DefaultRuntimeContextDevice?: string;

  /**
   * <p>The device's name.</p>
   */
  DefaultRuntimeContextDeviceName?: string;

  /**
   * <p>The application instance's description.</p>
   */
  Description?: string;

  /**
   * <p>The application instance's status.</p>
   */
  Status?: ApplicationInstanceStatus | string;

  /**
   * <p>The application instance's health status.</p>
   */
  HealthStatus?: ApplicationInstanceHealthStatus | string;

  /**
   * <p>The application instance's status description.</p>
   */
  StatusDescription?: string;

  /**
   * <p>When the application instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The application instance's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The application instance's tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The application's state.</p>
   */
  RuntimeContextStates?: ReportedRuntimeContextState[];
}

/**
 * @public
 * <p>A conflict exception error argument.</p>
 */
export interface ConflictExceptionErrorArgument {
  /**
   * <p>The error argument's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The error argument's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The target resource is in use.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The resource's ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource's type.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>A unique ID for the error.</p>
   */
  ErrorId?: string;

  /**
   * <p>A list of attributes that led to the exception and their values.</p>
   */
  ErrorArguments?: ConflictExceptionErrorArgument[];
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.ErrorId = opts.ErrorId;
    this.ErrorArguments = opts.ErrorArguments;
  }
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  DHCP: "DHCP",
  STATIC_IP: "STATIC_IP",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * <p>Parameter overrides for an application instance. This is a JSON document that has a single key
 *         (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document.</p>
 */
export type ManifestOverridesPayload =
  | ManifestOverridesPayload.PayloadDataMember
  | ManifestOverridesPayload.$UnknownMember;

/**
 * @public
 */
export namespace ManifestOverridesPayload {
  /**
   * <p>The overrides document.</p>
   */
  export interface PayloadDataMember {
    PayloadData: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    PayloadData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PayloadData: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ManifestOverridesPayload, visitor: Visitor<T>): T => {
    if (value.PayloadData !== undefined) return visitor.PayloadData(value.PayloadData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>)
 *       where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This
 *       file is located in the <code>graphs</code> folder in your application source.</p>
 */
export type ManifestPayload = ManifestPayload.PayloadDataMember | ManifestPayload.$UnknownMember;

/**
 * @public
 */
export namespace ManifestPayload {
  /**
   * <p>The application manifest.</p>
   */
  export interface PayloadDataMember {
    PayloadData: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    PayloadData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PayloadData: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ManifestPayload, visitor: Visitor<T>): T => {
    if (value.PayloadData !== undefined) return visitor.PayloadData(value.PayloadData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateApplicationInstanceRequest {
  /**
   * <p>A name for the application instance.</p>
   */
  Name?: string;

  /**
   * <p>A description for the application instance.</p>
   */
  Description?: string;

  /**
   * <p>The application's manifest document.</p>
   */
  ManifestPayload: ManifestPayload | undefined;

  /**
   * <p>Setting overrides for the application manifest.</p>
   */
  ManifestOverridesPayload?: ManifestOverridesPayload;

  /**
   * <p>The ID of an application instance to replace with the new instance.</p>
   */
  ApplicationInstanceIdToReplace?: string;

  /**
   * <p>The ARN of a runtime role for the application instance.</p>
   */
  RuntimeRoleArn?: string;

  /**
   * <p>A device's ID.</p>
   */
  DefaultRuntimeContextDevice: string | undefined;

  /**
   * <p>Tags for the application instance.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateApplicationInstanceResponse {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 * <p>An internal error occurred.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>The number of seconds a client should wait before retrying the call.</p>
   */
  RetryAfterSeconds?: number;
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 * <p>The request would cause a limit to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The target resource's ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The target resource's type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The name of the limit.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The name of the service.</p>
   */
  ServiceCode: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 * <p>A validation exception error argument.</p>
 */
export interface ValidationExceptionErrorArgument {
  /**
   * <p>The argument's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The argument's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>A validation exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The field's message.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The request contains an invalid parameter value.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason that validation failed.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>A unique ID for the error.</p>
   */
  ErrorId?: string;

  /**
   * <p>A list of attributes that led to the exception and their values.</p>
   */
  ErrorArguments?: ValidationExceptionErrorArgument[];

  /**
   * <p>A list of request parameters that failed validation.</p>
   */
  Fields?: ValidationExceptionField[];
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
    this.Reason = opts.Reason;
    this.ErrorId = opts.ErrorId;
    this.ErrorArguments = opts.ErrorArguments;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 * <p>An over-the-air update (OTA) job configuration.</p>
 */
export interface OTAJobConfig {
  /**
   * <p>The target version of the device software.</p>
   */
  ImageVersion: string | undefined;

  /**
   * <p>Whether to apply the update if it is a major version change.</p>
   */
  AllowMajorVersionUpdate?: boolean;
}

/**
 * @public
 * <p>A job's configuration.</p>
 */
export interface DeviceJobConfig {
  /**
   * <p>A configuration for an over-the-air (OTA) upgrade. Required for OTA jobs.</p>
   */
  OTAJobConfig?: OTAJobConfig;
}

/**
 * @public
 * @enum
 */
export const JobType = {
  OTA: "OTA",
  REBOOT: "REBOOT",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 */
export interface CreateJobForDevicesRequest {
  /**
   * <p>ID of target device.</p>
   */
  DeviceIds: string[] | undefined;

  /**
   * <p>Configuration settings for a software update job.</p>
   */
  DeviceJobConfig?: DeviceJobConfig;

  /**
   * <p>The type of job to run.</p>
   */
  JobType: JobType | string | undefined;
}

/**
 * @public
 * <p>A job for a device.</p>
 */
export interface Job {
  /**
   * <p>The job's ID.</p>
   */
  JobId?: string;

  /**
   * <p>The target device's ID.</p>
   */
  DeviceId?: string;
}

/**
 * @public
 */
export interface CreateJobForDevicesResponse {
  /**
   * <p>A list of jobs.</p>
   */
  Jobs: Job[] | undefined;
}

/**
 * @public
 * <p>The target resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The resource's ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource's type.</p>
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * @enum
 */
export const JobResourceType = {
  PACKAGE: "PACKAGE",
} as const;

/**
 * @public
 */
export type JobResourceType = (typeof JobResourceType)[keyof typeof JobResourceType];

/**
 * @public
 * <p>Tags for a job.</p>
 */
export interface JobResourceTags {
  /**
   * <p>The job's type.</p>
   */
  ResourceType: JobResourceType | string | undefined;

  /**
   * <p>The job's tags.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateType = {
  RTSP_CAMERA_STREAM: "RTSP_CAMERA_STREAM",
} as const;

/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 */
export interface CreateNodeFromTemplateJobRequest {
  /**
   * <p>The type of node.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>An output package name for the node.</p>
   */
  OutputPackageName: string | undefined;

  /**
   * <p>An output package version for the node.</p>
   */
  OutputPackageVersion: string | undefined;

  /**
   * <p>A name for the node.</p>
   */
  NodeName: string | undefined;

  /**
   * <p>A description for the node.</p>
   */
  NodeDescription?: string;

  /**
   * <p>Template parameters for the node.</p>
   */
  TemplateParameters: Record<string, string> | undefined;

  /**
   * <p>Tags for the job.</p>
   */
  JobTags?: JobResourceTags[];
}

/**
 * @public
 */
export interface CreateNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageRequest {
  /**
   * <p>A name for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>Tags for the package.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>A storage location.</p>
 */
export interface StorageLocation {
  /**
   * <p>The location's bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The location's repo prefix.</p>
   */
  RepoPrefixLocation: string | undefined;

  /**
   * <p>The location's generated prefix.</p>
   */
  GeneratedPrefixLocation: string | undefined;

  /**
   * <p>The location's binary prefix.</p>
   */
  BinaryPrefixLocation: string | undefined;

  /**
   * <p>The location's manifest prefix.</p>
   */
  ManifestPrefixLocation: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageResponse {
  /**
   * <p>The package's ID.</p>
   */
  PackageId?: string;

  /**
   * <p>The package's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The package's storage location.</p>
   */
  StorageLocation: StorageLocation | undefined;
}

/**
 * @public
 * <p>A location in Amazon S3.</p>
 */
export interface S3Location {
  /**
   * <p>The bucket's Region.</p>
   */
  Region?: string;

  /**
   * <p>A bucket name.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>An object key.</p>
   */
  ObjectKey: string | undefined;
}

/**
 * @public
 * <p>A package version input configuration.</p>
 */
export interface PackageVersionInputConfig {
  /**
   * <p>A location in Amazon S3.</p>
   */
  S3Location: S3Location | undefined;
}

/**
 * @public
 * <p>A configuration for a package import job.</p>
 */
export interface PackageImportJobInputConfig {
  /**
   * <p>The package version's input configuration.</p>
   */
  PackageVersionInputConfig?: PackageVersionInputConfig;
}

/**
 * @public
 * @enum
 */
export const PackageImportJobType = {
  MARKETPLACE_NODE_PACKAGE_VERSION: "MARKETPLACE_NODE_PACKAGE_VERSION",
  NODE_PACKAGE_VERSION: "NODE_PACKAGE_VERSION",
} as const;

/**
 * @public
 */
export type PackageImportJobType = (typeof PackageImportJobType)[keyof typeof PackageImportJobType];

/**
 * @public
 * <p>A package version output configuration.</p>
 */
export interface PackageVersionOutputConfig {
  /**
   * <p>The output's package name.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>The output's package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>Indicates that the version is recommended for all users.</p>
   */
  MarkLatest?: boolean;
}

/**
 * @public
 * <p>An output configuration for a package import job.</p>
 */
export interface PackageImportJobOutputConfig {
  /**
   * <p>The package version's output configuration.</p>
   */
  PackageVersionOutputConfig?: PackageVersionOutputConfig;
}

/**
 * @public
 */
export interface CreatePackageImportJobRequest {
  /**
   * <p>A job type for the package import job.</p>
   */
  JobType: PackageImportJobType | string | undefined;

  /**
   * <p>An input config for the package import job.</p>
   */
  InputConfig: PackageImportJobInputConfig | undefined;

  /**
   * <p>An output config for the package import job.</p>
   */
  OutputConfig: PackageImportJobOutputConfig | undefined;

  /**
   * <p>A client token for the package import job.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Tags for the package import job.</p>
   */
  JobTags?: JobResourceTags[];
}

/**
 * @public
 */
export interface CreatePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>Delete the package even if it has artifacts stored in its access point. Deletes the package's artifacts from
   *       Amazon S3.</p>
   */
  ForceDelete?: boolean;
}

/**
 * @public
 */
export interface DeletePackageResponse {}

/**
 * @public
 */
export interface DeregisterPackageVersionRequest {
  /**
   * <p>An owner account.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>A package ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>A package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>A patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>If the version was marked latest, the new version to maker as latest.</p>
   */
  UpdatedLatestPatchVersion?: string;
}

/**
 * @public
 */
export interface DeregisterPackageVersionResponse {}

/**
 * @public
 */
export interface DescribeApplicationInstanceRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationInstanceResponse {
  /**
   * <p>The application instance's name.</p>
   */
  Name?: string;

  /**
   * <p>The application instance's description.</p>
   */
  Description?: string;

  /**
   * <p>The device's ID.</p>
   */
  DefaultRuntimeContextDevice?: string;

  /**
   * <p>The device's bane.</p>
   */
  DefaultRuntimeContextDeviceName?: string;

  /**
   * <p>The ID of the application instance that this instance replaced.</p>
   */
  ApplicationInstanceIdToReplace?: string;

  /**
   * <p>The application instance's runtime role ARN.</p>
   */
  RuntimeRoleArn?: string;

  /**
   * <p>The application instance's status.</p>
   */
  Status?: ApplicationInstanceStatus | string;

  /**
   * <p>The application instance's health status.</p>
   */
  HealthStatus?: ApplicationInstanceHealthStatus | string;

  /**
   * <p>The application instance's status description.</p>
   */
  StatusDescription?: string;

  /**
   * <p>When the application instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The application instance was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId?: string;

  /**
   * <p>The application instance's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The application instance's tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The application instance's state.</p>
   */
  RuntimeContextStates?: ReportedRuntimeContextState[];
}

/**
 * @public
 */
export interface DescribeApplicationInstanceDetailsRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationInstanceDetailsResponse {
  /**
   * <p>The application instance's name.</p>
   */
  Name?: string;

  /**
   * <p>The application instance's description.</p>
   */
  Description?: string;

  /**
   * <p>The application instance's default runtime context device.</p>
   */
  DefaultRuntimeContextDevice?: string;

  /**
   * <p>The application instance's configuration manifest.</p>
   */
  ManifestPayload?: ManifestPayload;

  /**
   * <p>Parameter overrides for the configuration manifest.</p>
   */
  ManifestOverridesPayload?: ManifestOverridesPayload;

  /**
   * <p>The ID of the application instance that this instance replaced.</p>
   */
  ApplicationInstanceIdToReplace?: string;

  /**
   * <p>When the application instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId?: string;
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceBrand = {
  AWS_PANORAMA: "AWS_PANORAMA",
  LENOVO: "LENOVO",
} as const;

/**
 * @public
 */
export type DeviceBrand = (typeof DeviceBrand)[keyof typeof DeviceBrand];

/**
 * @public
 * @enum
 */
export const NetworkConnectionStatus = {
  CONNECTED: "CONNECTED",
  CONNECTING: "CONNECTING",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;

/**
 * @public
 */
export type NetworkConnectionStatus = (typeof NetworkConnectionStatus)[keyof typeof NetworkConnectionStatus];

/**
 * @public
 * <p>A device's Ethernet status.</p>
 */
export interface EthernetStatus {
  /**
   * <p>The device's IP address.</p>
   */
  IpAddress?: string;

  /**
   * <p>The device's connection status.</p>
   */
  ConnectionStatus?: NetworkConnectionStatus | string;

  /**
   * <p>The device's physical address.</p>
   */
  HwAddress?: string;
}

/**
 * @public
 * <p>Details about an NTP server connection.</p>
 */
export interface NtpStatus {
  /**
   * <p>The connection's status.</p>
   */
  ConnectionStatus?: NetworkConnectionStatus | string;

  /**
   * <p>The IP address of the server.</p>
   */
  IpAddress?: string;

  /**
   * <p>The domain name of the server.</p>
   */
  NtpServerName?: string;
}

/**
 * @public
 * <p>The network status of a device.</p>
 */
export interface NetworkStatus {
  /**
   * <p>The status of Ethernet port 0.</p>
   */
  Ethernet0Status?: EthernetStatus;

  /**
   * <p>The status of Ethernet port 1.</p>
   */
  Ethernet1Status?: EthernetStatus;

  /**
   * <p>Details about a network time protocol (NTP) server connection.</p>
   */
  NtpStatus?: NtpStatus;

  /**
   * <p>When the network status changed.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const DeviceAggregatedStatus = {
  AWAITING_PROVISIONING: "AWAITING_PROVISIONING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  LEASE_EXPIRED: "LEASE_EXPIRED",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  UPDATE_NEEDED: "UPDATE_NEEDED",
} as const;

/**
 * @public
 */
export type DeviceAggregatedStatus = (typeof DeviceAggregatedStatus)[keyof typeof DeviceAggregatedStatus];

/**
 * @public
 * @enum
 */
export const DeviceConnectionStatus = {
  AWAITING_CREDENTIALS: "AWAITING_CREDENTIALS",
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
} as const;

/**
 * @public
 */
export type DeviceConnectionStatus = (typeof DeviceConnectionStatus)[keyof typeof DeviceConnectionStatus];

/**
 * @public
 * @enum
 */
export const UpdateProgress = {
  COMPLETED: "COMPLETED",
  DOWNLOADING: "DOWNLOADING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REBOOTING: "REBOOTING",
  VERIFYING: "VERIFYING",
} as const;

/**
 * @public
 */
export type UpdateProgress = (typeof UpdateProgress)[keyof typeof UpdateProgress];

/**
 * @public
 * <p>Returns information about the latest device job.</p>
 */
export interface LatestDeviceJob {
  /**
   * <p>The target version of the device software.</p>
   */
  ImageVersion?: string;

  /**
   * <p>Status of the latest device job.</p>
   */
  Status?: UpdateProgress | string;

  /**
   * <p>The job's type.</p>
   */
  JobType?: JobType | string;
}

/**
 * @public
 * <p>A static IP configuration.</p>
 */
export interface StaticIpConnectionInfo {
  /**
   * <p>The connection's IP address.</p>
   */
  IpAddress: string | undefined;

  /**
   * <p>The connection's DNS mask.</p>
   */
  Mask: string | undefined;

  /**
   * <p>The connection's DNS address.</p>
   */
  Dns: string[] | undefined;

  /**
   * <p>The connection's default gateway.</p>
   */
  DefaultGateway: string | undefined;
}

/**
 * @public
 * <p>A device's network configuration.</p>
 */
export interface EthernetPayload {
  /**
   * <p>How the device gets an IP address.</p>
   */
  ConnectionType: ConnectionType | string | undefined;

  /**
   * <p>Network configuration for a static IP connection.</p>
   */
  StaticIpConnectionInfo?: StaticIpConnectionInfo;
}

/**
 * @public
 * <p>Network time protocol (NTP) server settings. Use this option to connect to local NTP servers instead of
 *         <code>pool.ntp.org</code>.</p>
 */
export interface NtpPayload {
  /**
   * <p>NTP servers to use, in order of preference.</p>
   */
  NtpServers: string[] | undefined;
}

/**
 * @public
 * <p>The network configuration for a device.</p>
 */
export interface NetworkPayload {
  /**
   * <p>Settings for Ethernet port 0.</p>
   */
  Ethernet0?: EthernetPayload;

  /**
   * <p>Settings for Ethernet port 1.</p>
   */
  Ethernet1?: EthernetPayload;

  /**
   * <p>Network time protocol (NTP) server settings.</p>
   */
  Ntp?: NtpPayload;
}

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  AWAITING_PROVISIONING: "AWAITING_PROVISIONING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  PANORAMA_APPLIANCE: "PANORAMA_APPLIANCE",
  PANORAMA_APPLIANCE_DEVELOPER_KIT: "PANORAMA_APPLIANCE_DEVELOPER_KIT",
} as const;

/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device's name.</p>
   */
  Name?: string;

  /**
   * <p>The device's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The device's description.</p>
   */
  Description?: string;

  /**
   * <p>The device's type.</p>
   */
  Type?: DeviceType | string;

  /**
   * <p>The device's connection status.</p>
   */
  DeviceConnectionStatus?: DeviceConnectionStatus | string;

  /**
   * <p>When the device was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The device's provisioning status.</p>
   */
  ProvisioningStatus?: DeviceStatus | string;

  /**
   * <p>The latest software version available for the device.</p>
   */
  LatestSoftware?: string;

  /**
   * <p>The device's current software version.</p>
   */
  CurrentSoftware?: string;

  /**
   * <p>The device's serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The device's tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The device's networking configuration.</p>
   */
  NetworkingConfiguration?: NetworkPayload;

  /**
   * <p>The device's networking status.</p>
   */
  CurrentNetworkingStatus?: NetworkStatus;

  /**
   * <p>The device's lease expiration time.</p>
   */
  LeaseExpirationTime?: Date;

  /**
   * <p>Beta software releases available for the device.</p>
   */
  AlternateSoftwares?: AlternateSoftwareMetadata[];

  /**
   * <p>The most recent beta software release.</p>
   */
  LatestAlternateSoftware?: string;

  /**
   * <p>The device's maker.</p>
   */
  Brand?: DeviceBrand | string;

  /**
   * <p>A device's latest job. Includes the target image version, and the job status.</p>
   */
  LatestDeviceJob?: LatestDeviceJob;

  /**
   * <p>A device's aggregated status. Including the device's connection status, provisioning status, and lease status.</p>
   */
  DeviceAggregatedStatus?: DeviceAggregatedStatus | string;
}

/**
 * @public
 */
export interface DescribeDeviceJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId?: string;

  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device's ARN.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The device's name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The device's type.</p>
   */
  DeviceType?: DeviceType | string;

  /**
   * <p>For an OTA job, the target version of the device software.</p>
   */
  ImageVersion?: string;

  /**
   * <p>The job's status.</p>
   */
  Status?: UpdateProgress | string;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The job's type.</p>
   */
  JobType?: JobType | string;
}

/**
 * @public
 */
export interface DescribeNodeRequest {
  /**
   * <p>The node's ID.</p>
   */
  NodeId: string | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   */
  OwnerAccount?: string;
}

/**
 * @public
 * @enum
 */
export const NodeCategory = {
  BUSINESS_LOGIC: "BUSINESS_LOGIC",
  MEDIA_SINK: "MEDIA_SINK",
  MEDIA_SOURCE: "MEDIA_SOURCE",
  ML_MODEL: "ML_MODEL",
} as const;

/**
 * @public
 */
export type NodeCategory = (typeof NodeCategory)[keyof typeof NodeCategory];

/**
 * @public
 * @enum
 */
export const PortType = {
  BOOLEAN: "BOOLEAN",
  FLOAT32: "FLOAT32",
  INT32: "INT32",
  MEDIA: "MEDIA",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type PortType = (typeof PortType)[keyof typeof PortType];

/**
 * @public
 * <p>A node input port.</p>
 */
export interface NodeInputPort {
  /**
   * <p>The input port's name.</p>
   */
  Name?: string;

  /**
   * <p>The input port's description.</p>
   */
  Description?: string;

  /**
   * <p>The input port's type.</p>
   */
  Type?: PortType | string;

  /**
   * <p>The input port's default value.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The input port's max connections.</p>
   */
  MaxConnections?: number;
}

/**
 * @public
 * <p>A node output port.</p>
 */
export interface NodeOutputPort {
  /**
   * <p>The output port's name.</p>
   */
  Name?: string;

  /**
   * <p>The output port's description.</p>
   */
  Description?: string;

  /**
   * <p>The output port's type.</p>
   */
  Type?: PortType | string;
}

/**
 * @public
 * <p>A node interface.</p>
 */
export interface NodeInterface {
  /**
   * <p>The node interface's inputs.</p>
   */
  Inputs: NodeInputPort[] | undefined;

  /**
   * <p>The node interface's outputs.</p>
   */
  Outputs: NodeOutputPort[] | undefined;
}

/**
 * @public
 */
export interface DescribeNodeResponse {
  /**
   * <p>The node's ID.</p>
   */
  NodeId: string | undefined;

  /**
   * <p>The node's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The node's category.</p>
   */
  Category: NodeCategory | string | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   */
  OwnerAccount: string | undefined;

  /**
   * <p>The node's package name.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>The node's package ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The node's ARN.</p>
   */
  PackageArn?: string;

  /**
   * <p>The node's package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The node's patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>The node's interface.</p>
   */
  NodeInterface: NodeInterface | undefined;

  /**
   * <p>The node's asset name.</p>
   */
  AssetName?: string;

  /**
   * <p>The node's description.</p>
   */
  Description: string | undefined;

  /**
   * <p>When the node was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the node was updated.</p>
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNodeFromTemplateJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeFromTemplateJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type NodeFromTemplateJobStatus = (typeof NodeFromTemplateJobStatus)[keyof typeof NodeFromTemplateJobStatus];

/**
 * @public
 */
export interface DescribeNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The job's status.</p>
   */
  Status: NodeFromTemplateJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  StatusMessage: string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The job's output package name.</p>
   */
  OutputPackageName: string | undefined;

  /**
   * <p>The job's output package version.</p>
   */
  OutputPackageVersion: string | undefined;

  /**
   * <p>The node's name.</p>
   */
  NodeName: string | undefined;

  /**
   * <p>The node's description.</p>
   */
  NodeDescription?: string;

  /**
   * <p>The job's template type.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The job's template parameters.</p>
   */
  TemplateParameters: Record<string, string> | undefined;

  /**
   * <p>The job's tags.</p>
   */
  JobTags?: JobResourceTags[];
}

/**
 * @public
 */
export interface DescribePackageRequest {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;
}

/**
 * @public
 */
export interface DescribePackageResponse {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The package's name.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>The package's ARN.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The package's storage location.</p>
   */
  StorageLocation: StorageLocation | undefined;

  /**
   * <p>ARNs of accounts that have read access to the package.</p>
   */
  ReadAccessPrincipalArns?: string[];

  /**
   * <p>ARNs of accounts that have write access to the package.</p>
   */
  WriteAccessPrincipalArns?: string[];

  /**
   * <p>When the package was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The package's tags.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribePackageImportJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>The location of an output object in Amazon S3.</p>
 */
export interface OutPutS3Location {
  /**
   * <p>The object's bucket.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The object's key.</p>
   */
  ObjectKey: string | undefined;
}

/**
 * @public
 * <p>Results of a package import job.</p>
 */
export interface PackageImportJobOutput {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The package's version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The package's patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>The package's output location.</p>
   */
  OutputS3Location: OutPutS3Location | undefined;
}

/**
 * @public
 * @enum
 */
export const PackageImportJobStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type PackageImportJobStatus = (typeof PackageImportJobStatus)[keyof typeof PackageImportJobStatus];

/**
 * @public
 */
export interface DescribePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The job's client token.</p>
   */
  ClientToken?: string;

  /**
   * <p>The job's type.</p>
   */
  JobType: PackageImportJobType | string | undefined;

  /**
   * <p>The job's input config.</p>
   */
  InputConfig: PackageImportJobInputConfig | undefined;

  /**
   * <p>The job's output config.</p>
   */
  OutputConfig: PackageImportJobOutputConfig | undefined;

  /**
   * <p>The job's output.</p>
   */
  Output: PackageImportJobOutput | undefined;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>When the job was updated.</p>
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The job's status.</p>
   */
  Status: PackageImportJobStatus | string | undefined;

  /**
   * <p>The job's status message.</p>
   */
  StatusMessage: string | undefined;

  /**
   * <p>The job's tags.</p>
   */
  JobTags?: JobResourceTags[];
}

/**
 * @public
 */
export interface DescribePackageVersionRequest {
  /**
   * <p>The version's owner account.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The version's ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The version's version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The version's patch version.</p>
   */
  PatchVersion?: string;
}

/**
 * @public
 * @enum
 */
export const PackageVersionStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  REGISTER_COMPLETED: "REGISTER_COMPLETED",
  REGISTER_PENDING: "REGISTER_PENDING",
} as const;

/**
 * @public
 */
export type PackageVersionStatus = (typeof PackageVersionStatus)[keyof typeof PackageVersionStatus];

/**
 * @public
 */
export interface DescribePackageVersionResponse {
  /**
   * <p>The account ID of the version's owner.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The version's ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The ARN of the package.</p>
   */
  PackageArn?: string;

  /**
   * <p>The version's name.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>The version's version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The version's patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>Whether the version is the latest available.</p>
   */
  IsLatestPatch: boolean | undefined;

  /**
   * <p>The version's status.</p>
   */
  Status: PackageVersionStatus | string | undefined;

  /**
   * <p>The version's status description.</p>
   */
  StatusDescription?: string;

  /**
   * <p>The version's registered time.</p>
   */
  RegisteredTime?: Date;
}

/**
 * @public
 * <p>A device.</p>
 */
export interface Device {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device's name.</p>
   */
  Name?: string;

  /**
   * <p>When the device was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The device's provisioning status.</p>
   */
  ProvisioningStatus?: DeviceStatus | string;

  /**
   * <p>When the device was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The device's lease expiration time.</p>
   */
  LeaseExpirationTime?: Date;

  /**
   * <p>The device's maker.</p>
   */
  Brand?: DeviceBrand | string;

  /**
   * <p>A device's current software.</p>
   */
  CurrentSoftware?: string;

  /**
   * <p>A description for the device.</p>
   */
  Description?: string;

  /**
   * <p>The device's tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The device's type.</p>
   */
  Type?: DeviceType | string;

  /**
   * <p>A device's latest job. Includes the target image version, and the update job status.</p>
   */
  LatestDeviceJob?: LatestDeviceJob;

  /**
   * <p>A device's aggregated status. Including the device's connection status, provisioning status, and lease status.</p>
   */
  DeviceAggregatedStatus?: DeviceAggregatedStatus | string;
}

/**
 * @public
 * <p>A job that runs on a device.</p>
 */
export interface DeviceJob {
  /**
   * <p>The name of the target device</p>
   */
  DeviceName?: string;

  /**
   * <p>The ID of the target device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The job's ID.</p>
   */
  JobId?: string;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The job's type.</p>
   */
  JobType?: JobType | string;
}

/**
 * @public
 */
export interface ListApplicationInstanceDependenciesRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>The maximum number of application instance dependencies to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A package object.</p>
 */
export interface PackageObject {
  /**
   * <p>The object's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The object's package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The object's patch version.</p>
   */
  PatchVersion: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceDependenciesResponse {
  /**
   * <p>A list of package objects.</p>
   */
  PackageObjects?: PackageObject[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationInstanceNodeInstancesRequest {
  /**
   * <p>The node instances' application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>The maximum number of node instances to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NodeInstanceStatus = {
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type NodeInstanceStatus = (typeof NodeInstanceStatus)[keyof typeof NodeInstanceStatus];

/**
 * @public
 * <p>A node instance.</p>
 */
export interface NodeInstance {
  /**
   * <p>The instance's ID.</p>
   */
  NodeInstanceId: string | undefined;

  /**
   * <p>The node's ID.</p>
   */
  NodeId?: string;

  /**
   * <p>The instance's package name.</p>
   */
  PackageName?: string;

  /**
   * <p>The instance's package version.</p>
   */
  PackageVersion?: string;

  /**
   * <p>The instance's package patch version.</p>
   */
  PackagePatchVersion?: string;

  /**
   * <p>The instance's name.</p>
   */
  NodeName?: string;

  /**
   * <p>The instance's current status.</p>
   */
  CurrentStatus: NodeInstanceStatus | string | undefined;
}

/**
 * @public
 */
export interface ListApplicationInstanceNodeInstancesResponse {
  /**
   * <p>A list of node instances.</p>
   */
  NodeInstances?: NodeInstance[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const StatusFilter = {
  DEPLOYMENT_ERROR: "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_SUCCEEDED: "DEPLOYMENT_SUCCEEDED",
  PROCESSING_DEPLOYMENT: "PROCESSING_DEPLOYMENT",
  PROCESSING_REMOVAL: "PROCESSING_REMOVAL",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVAL_SUCCEEDED: "REMOVAL_SUCCEEDED",
} as const;

/**
 * @public
 */
export type StatusFilter = (typeof StatusFilter)[keyof typeof StatusFilter];

/**
 * @public
 */
export interface ListApplicationInstancesRequest {
  /**
   * <p>The application instances' device ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>Only include instances with a specific status.</p>
   */
  StatusFilter?: StatusFilter | string;

  /**
   * <p>The maximum number of application instances to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationInstancesResponse {
  /**
   * <p>A list of application instances.</p>
   */
  ApplicationInstances?: ApplicationInstance[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListDevicesSortBy = {
  CREATED_TIME: "CREATED_TIME",
  DEVICE_AGGREGATED_STATUS: "DEVICE_AGGREGATED_STATUS",
  DEVICE_ID: "DEVICE_ID",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type ListDevicesSortBy = (typeof ListDevicesSortBy)[keyof typeof ListDevicesSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of devices to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The target column to be sorted on. Default column sort is CREATED_TIME.</p>
   */
  SortBy?: ListDevicesSortBy | string;

  /**
   * <p>The sorting order for the returned list. SortOrder is DESCENDING by default based on CREATED_TIME. Otherwise, SortOrder is ASCENDING.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>Filter based on device's name. Prefixes supported.</p>
   */
  NameFilter?: string;

  /**
   * <p>Filter based on a device's status.</p>
   */
  DeviceAggregatedStatusFilter?: DeviceAggregatedStatus | string;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>A list of devices.</p>
   */
  Devices: Device[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesJobsRequest {
  /**
   * <p>Filter results by the job's target device ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of device jobs to return in one page of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDevicesJobsResponse {
  /**
   * <p>A list of jobs.</p>
   */
  DeviceJobs?: DeviceJob[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNodeFromTemplateJobsRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of node from template jobs to return in one page of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A job to create a camera stream node.</p>
 */
export interface NodeFromTemplateJob {
  /**
   * <p>The job's ID.</p>
   */
  JobId?: string;

  /**
   * <p>The job's template type.</p>
   */
  TemplateType?: TemplateType | string;

  /**
   * <p>The job's status.</p>
   */
  Status?: NodeFromTemplateJobStatus | string;

  /**
   * <p>The job's status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The node's name.</p>
   */
  NodeName?: string;
}

/**
 * @public
 */
export interface ListNodeFromTemplateJobsResponse {
  /**
   * <p>A list of jobs.</p>
   */
  NodeFromTemplateJobs: NodeFromTemplateJob[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * <p>Search for nodes by category.</p>
   */
  Category?: NodeCategory | string;

  /**
   * <p>Search for nodes by the account ID of the nodes' owner.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>Search for nodes by name.</p>
   */
  PackageName?: string;

  /**
   * <p>Search for nodes by version.</p>
   */
  PackageVersion?: string;

  /**
   * <p>Search for nodes by patch version.</p>
   */
  PatchVersion?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of nodes to return in one page of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An application node that represents a camera stream, a model, code, or output.</p>
 */
export interface Node {
  /**
   * <p>The node's ID.</p>
   */
  NodeId: string | undefined;

  /**
   * <p>The node's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The node's category.</p>
   */
  Category: NodeCategory | string | undefined;

  /**
   * <p>The account ID of the node's owner.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The node's package name.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>The node's package ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>The node's ARN.</p>
   */
  PackageArn?: string;

  /**
   * <p>The node's package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>The node's patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>The node's description.</p>
   */
  Description?: string;

  /**
   * <p>When the node was created.</p>
   */
  CreatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListNodesResponse {
  /**
   * <p>A list of nodes.</p>
   */
  Nodes?: Node[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackageImportJobsRequest {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of package import jobs to return in one page of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A job to import a package version.</p>
 */
export interface PackageImportJob {
  /**
   * <p>The job's ID.</p>
   */
  JobId?: string;

  /**
   * <p>The job's type.</p>
   */
  JobType?: PackageImportJobType | string;

  /**
   * <p>The job's status.</p>
   */
  Status?: PackageImportJobStatus | string;

  /**
   * <p>The job's status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>When the job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>When the job was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListPackageImportJobsResponse {
  /**
   * <p>A list of package import jobs.</p>
   */
  PackageImportJobs: PackageImportJob[] | undefined;

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * <p>The maximum number of packages to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A package summary.</p>
 */
export interface PackageListItem {
  /**
   * <p>The package's ID.</p>
   */
  PackageId?: string;

  /**
   * <p>The package's name.</p>
   */
  PackageName?: string;

  /**
   * <p>The package's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>When the package was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The package's tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListPackagesResponse {
  /**
   * <p>A list of packages.</p>
   */
  Packages?: PackageListItem[];

  /**
   * <p>A pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const NodeSignalValue = {
  PAUSE: "PAUSE",
  RESUME: "RESUME",
} as const;

/**
 * @public
 */
export type NodeSignalValue = (typeof NodeSignalValue)[keyof typeof NodeSignalValue];

/**
 * @public
 * <p>A signal to a camera node to start or stop processing video.</p>
 */
export interface NodeSignal {
  /**
   * <p>The camera node's name, from the application manifest.</p>
   */
  NodeInstanceId: string | undefined;

  /**
   * <p>The signal value.</p>
   */
  Signal: NodeSignalValue | string | undefined;
}

/**
 * @public
 */
export interface ProvisionDeviceRequest {
  /**
   * <p>A name for the device.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the device.</p>
   */
  Description?: string;

  /**
   * <p>Tags for the device.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A networking configuration for the device.</p>
   */
  NetworkingConfiguration?: NetworkPayload;
}

/**
 * @public
 */
export interface ProvisionDeviceResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device's ARN.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The device's status.</p>
   */
  Status: DeviceStatus | string | undefined;

  /**
   * <p>The device's configuration bundle.</p>
   */
  Certificates?: Uint8Array;

  /**
   * <p>The device's IoT thing name.</p>
   */
  IotThingName?: string;
}

/**
 * @public
 */
export interface RegisterPackageVersionRequest {
  /**
   * <p>An owner account.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>A package ID.</p>
   */
  PackageId: string | undefined;

  /**
   * <p>A package version.</p>
   */
  PackageVersion: string | undefined;

  /**
   * <p>A patch version.</p>
   */
  PatchVersion: string | undefined;

  /**
   * <p>Whether to mark the new version as the latest version.</p>
   */
  MarkLatest?: boolean;
}

/**
 * @public
 */
export interface RegisterPackageVersionResponse {}

/**
 * @public
 */
export interface RemoveApplicationInstanceRequest {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface RemoveApplicationInstanceResponse {}

/**
 * @public
 */
export interface SignalApplicationInstanceNodeInstancesRequest {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;

  /**
   * <p>A list of signals.</p>
   */
  NodeSignals: NodeSignal[] | undefined;
}

/**
 * @public
 */
export interface SignalApplicationInstanceNodeInstancesResponse {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags for the resource.</p>
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys to remove.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDeviceMetadataRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>A description for the device.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateDeviceMetadataResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

/**
 * @internal
 */
export const CreateNodeFromTemplateJobRequestFilterSensitiveLog = (obj: CreateNodeFromTemplateJobRequest): any => ({
  ...obj,
  ...(obj.TemplateParameters && { TemplateParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeNodeFromTemplateJobResponseFilterSensitiveLog = (
  obj: DescribeNodeFromTemplateJobResponse
): any => ({
  ...obj,
  ...(obj.TemplateParameters && { TemplateParameters: SENSITIVE_STRING }),
});

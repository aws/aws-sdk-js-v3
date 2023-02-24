// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { PanoramaServiceException as __BaseException } from "./PanoramaServiceException";

/**
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
 * <p>Details about a beta appliance software update.</p>
 */
export interface AlternateSoftwareMetadata {
  /**
   * <p>The appliance software version.</p>
   */
  Version?: string;
}

export enum ApplicationInstanceHealthStatus {
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  RUNNING = "RUNNING",
}

export enum DesiredState {
  REMOVED = "REMOVED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

export enum DeviceReportedStatus {
  INSTALL_ERROR = "INSTALL_ERROR",
  INSTALL_IN_PROGRESS = "INSTALL_IN_PROGRESS",
  LAUNCHED = "LAUNCHED",
  LAUNCH_ERROR = "LAUNCH_ERROR",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS = "REMOVAL_IN_PROGRESS",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  STOP_ERROR = "STOP_ERROR",
}

/**
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

export enum ApplicationInstanceStatus {
  DEPLOYMENT_ERROR = "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED = "DEPLOYMENT_FAILED",
  DEPLOYMENT_IN_PROGRESS = "DEPLOYMENT_IN_PROGRESS",
  DEPLOYMENT_PENDING = "DEPLOYMENT_PENDING",
  DEPLOYMENT_REQUESTED = "DEPLOYMENT_REQUESTED",
  DEPLOYMENT_SUCCEEDED = "DEPLOYMENT_SUCCEEDED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVAL_IN_PROGRESS = "REMOVAL_IN_PROGRESS",
  REMOVAL_PENDING = "REMOVAL_PENDING",
  REMOVAL_REQUESTED = "REMOVAL_REQUESTED",
  REMOVAL_SUCCEEDED = "REMOVAL_SUCCEEDED",
}

/**
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

export enum ConnectionType {
  DHCP = "DHCP",
  STATIC_IP = "STATIC_IP",
}

/**
 * <p>Parameter overrides for an application instance. This is a JSON document that has a single key
 *         (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document.</p>
 */
export type ManifestOverridesPayload =
  | ManifestOverridesPayload.PayloadDataMember
  | ManifestOverridesPayload.$UnknownMember;

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
 * <p>A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>)
 *       where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This
 *       file is located in the <code>graphs</code> folder in your application source.</p>
 */
export type ManifestPayload = ManifestPayload.PayloadDataMember | ManifestPayload.$UnknownMember;

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

export interface CreateApplicationInstanceResponse {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

/**
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

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
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
 * <p>A job's configuration.</p>
 */
export interface DeviceJobConfig {
  /**
   * <p>A configuration for an over-the-air (OTA) upgrade. Required for OTA jobs.</p>
   */
  OTAJobConfig?: OTAJobConfig;
}

export enum JobType {
  OTA = "OTA",
  REBOOT = "REBOOT",
}

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

export interface CreateJobForDevicesResponse {
  /**
   * <p>A list of jobs.</p>
   */
  Jobs: Job[] | undefined;
}

/**
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

export enum JobResourceType {
  PACKAGE = "PACKAGE",
}

/**
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

export enum TemplateType {
  RTSP_CAMERA_STREAM = "RTSP_CAMERA_STREAM",
}

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

export interface CreateNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

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
 * <p>A package version input configuration.</p>
 */
export interface PackageVersionInputConfig {
  /**
   * <p>A location in Amazon S3.</p>
   */
  S3Location: S3Location | undefined;
}

/**
 * <p>A configuration for a package import job.</p>
 */
export interface PackageImportJobInputConfig {
  /**
   * <p>The package version's input configuration.</p>
   */
  PackageVersionInputConfig?: PackageVersionInputConfig;
}

export enum PackageImportJobType {
  MARKETPLACE_NODE_PACKAGE_VERSION = "MARKETPLACE_NODE_PACKAGE_VERSION",
  NODE_PACKAGE_VERSION = "NODE_PACKAGE_VERSION",
}

/**
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
 * <p>An output configuration for a package import job.</p>
 */
export interface PackageImportJobOutputConfig {
  /**
   * <p>The package version's output configuration.</p>
   */
  PackageVersionOutputConfig?: PackageVersionOutputConfig;
}

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

export interface CreatePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export interface DeleteDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

export interface DeleteDeviceResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

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

export interface DeletePackageResponse {}

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

export interface DeregisterPackageVersionResponse {}

export interface DescribeApplicationInstanceRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

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

export interface DescribeApplicationInstanceDetailsRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

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

export interface DescribeDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

export enum DeviceBrand {
  AWS_PANORAMA = "AWS_PANORAMA",
  LENOVO = "LENOVO",
}

export enum NetworkConnectionStatus {
  CONNECTED = "CONNECTED",
  CONNECTING = "CONNECTING",
  NOT_CONNECTED = "NOT_CONNECTED",
}

/**
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

export enum DeviceAggregatedStatus {
  AWAITING_PROVISIONING = "AWAITING_PROVISIONING",
  DELETING = "DELETING",
  ERROR = "ERROR",
  FAILED = "FAILED",
  LEASE_EXPIRED = "LEASE_EXPIRED",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  PENDING = "PENDING",
  REBOOTING = "REBOOTING",
  UPDATE_NEEDED = "UPDATE_NEEDED",
}

export enum DeviceConnectionStatus {
  AWAITING_CREDENTIALS = "AWAITING_CREDENTIALS",
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export enum UpdateProgress {
  COMPLETED = "COMPLETED",
  DOWNLOADING = "DOWNLOADING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  REBOOTING = "REBOOTING",
  VERIFYING = "VERIFYING",
}

/**
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

export enum DeviceStatus {
  AWAITING_PROVISIONING = "AWAITING_PROVISIONING",
  DELETING = "DELETING",
  ERROR = "ERROR",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

export enum DeviceType {
  PANORAMA_APPLIANCE = "PANORAMA_APPLIANCE",
  PANORAMA_APPLIANCE_DEVELOPER_KIT = "PANORAMA_APPLIANCE_DEVELOPER_KIT",
}

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

export interface DescribeDeviceJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

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

export enum NodeCategory {
  BUSINESS_LOGIC = "BUSINESS_LOGIC",
  MEDIA_SINK = "MEDIA_SINK",
  MEDIA_SOURCE = "MEDIA_SOURCE",
  ML_MODEL = "ML_MODEL",
}

export enum PortType {
  BOOLEAN = "BOOLEAN",
  FLOAT32 = "FLOAT32",
  INT32 = "INT32",
  MEDIA = "MEDIA",
  STRING = "STRING",
}

/**
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

export interface DescribeNodeFromTemplateJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export enum NodeFromTemplateJobStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

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

export interface DescribePackageRequest {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;
}

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

export interface DescribePackageImportJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

/**
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

export enum PackageImportJobStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

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

export enum PackageVersionStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  REGISTER_COMPLETED = "REGISTER_COMPLETED",
  REGISTER_PENDING = "REGISTER_PENDING",
}

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

export enum NodeInstanceStatus {
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PAUSED = "PAUSED",
  RUNNING = "RUNNING",
}

/**
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

export enum StatusFilter {
  DEPLOYMENT_ERROR = "DEPLOYMENT_ERROR",
  DEPLOYMENT_FAILED = "DEPLOYMENT_FAILED",
  DEPLOYMENT_SUCCEEDED = "DEPLOYMENT_SUCCEEDED",
  PROCESSING_DEPLOYMENT = "PROCESSING_DEPLOYMENT",
  PROCESSING_REMOVAL = "PROCESSING_REMOVAL",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVAL_SUCCEEDED = "REMOVAL_SUCCEEDED",
}

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

export enum ListDevicesSortBy {
  CREATED_TIME = "CREATED_TIME",
  DEVICE_AGGREGATED_STATUS = "DEVICE_AGGREGATED_STATUS",
  DEVICE_ID = "DEVICE_ID",
  NAME = "NAME",
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

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

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags.</p>
   */
  Tags?: Record<string, string>;
}

export enum NodeSignalValue {
  PAUSE = "PAUSE",
  RESUME = "RESUME",
}

/**
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

export interface RegisterPackageVersionResponse {}

export interface RemoveApplicationInstanceRequest {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

export interface RemoveApplicationInstanceResponse {}

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

export interface SignalApplicationInstanceNodeInstancesResponse {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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

export interface UpdateDeviceMetadataResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

/**
 * @internal
 */
export const AlternateSoftwareMetadataFilterSensitiveLog = (obj: AlternateSoftwareMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportedRuntimeContextStateFilterSensitiveLog = (obj: ReportedRuntimeContextState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationInstanceFilterSensitiveLog = (obj: ApplicationInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictExceptionErrorArgumentFilterSensitiveLog = (obj: ConflictExceptionErrorArgument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManifestOverridesPayloadFilterSensitiveLog = (obj: ManifestOverridesPayload): any => {
  if (obj.PayloadData !== undefined) return { PayloadData: obj.PayloadData };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ManifestPayloadFilterSensitiveLog = (obj: ManifestPayload): any => {
  if (obj.PayloadData !== undefined) return { PayloadData: obj.PayloadData };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateApplicationInstanceRequestFilterSensitiveLog = (obj: CreateApplicationInstanceRequest): any => ({
  ...obj,
  ...(obj.ManifestPayload && { ManifestPayload: ManifestPayloadFilterSensitiveLog(obj.ManifestPayload) }),
  ...(obj.ManifestOverridesPayload && {
    ManifestOverridesPayload: ManifestOverridesPayloadFilterSensitiveLog(obj.ManifestOverridesPayload),
  }),
});

/**
 * @internal
 */
export const CreateApplicationInstanceResponseFilterSensitiveLog = (obj: CreateApplicationInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionErrorArgumentFilterSensitiveLog = (obj: ValidationExceptionErrorArgument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OTAJobConfigFilterSensitiveLog = (obj: OTAJobConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceJobConfigFilterSensitiveLog = (obj: DeviceJobConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobForDevicesRequestFilterSensitiveLog = (obj: CreateJobForDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobForDevicesResponseFilterSensitiveLog = (obj: CreateJobForDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobResourceTagsFilterSensitiveLog = (obj: JobResourceTags): any => ({
  ...obj,
});

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
export const CreateNodeFromTemplateJobResponseFilterSensitiveLog = (obj: CreateNodeFromTemplateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageRequestFilterSensitiveLog = (obj: CreatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLocationFilterSensitiveLog = (obj: StorageLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageResponseFilterSensitiveLog = (obj: CreatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionInputConfigFilterSensitiveLog = (obj: PackageVersionInputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageImportJobInputConfigFilterSensitiveLog = (obj: PackageImportJobInputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionOutputConfigFilterSensitiveLog = (obj: PackageVersionOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageImportJobOutputConfigFilterSensitiveLog = (obj: PackageImportJobOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageImportJobRequestFilterSensitiveLog = (obj: CreatePackageImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageImportJobResponseFilterSensitiveLog = (obj: CreatePackageImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceRequestFilterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceResponseFilterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageRequestFilterSensitiveLog = (obj: DeletePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageResponseFilterSensitiveLog = (obj: DeletePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterPackageVersionRequestFilterSensitiveLog = (obj: DeregisterPackageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterPackageVersionResponseFilterSensitiveLog = (obj: DeregisterPackageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationInstanceRequestFilterSensitiveLog = (obj: DescribeApplicationInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationInstanceResponseFilterSensitiveLog = (
  obj: DescribeApplicationInstanceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationInstanceDetailsRequestFilterSensitiveLog = (
  obj: DescribeApplicationInstanceDetailsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationInstanceDetailsResponseFilterSensitiveLog = (
  obj: DescribeApplicationInstanceDetailsResponse
): any => ({
  ...obj,
  ...(obj.ManifestPayload && { ManifestPayload: ManifestPayloadFilterSensitiveLog(obj.ManifestPayload) }),
  ...(obj.ManifestOverridesPayload && {
    ManifestOverridesPayload: ManifestOverridesPayloadFilterSensitiveLog(obj.ManifestOverridesPayload),
  }),
});

/**
 * @internal
 */
export const DescribeDeviceRequestFilterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EthernetStatusFilterSensitiveLog = (obj: EthernetStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NtpStatusFilterSensitiveLog = (obj: NtpStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkStatusFilterSensitiveLog = (obj: NetworkStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LatestDeviceJobFilterSensitiveLog = (obj: LatestDeviceJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StaticIpConnectionInfoFilterSensitiveLog = (obj: StaticIpConnectionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EthernetPayloadFilterSensitiveLog = (obj: EthernetPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NtpPayloadFilterSensitiveLog = (obj: NtpPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkPayloadFilterSensitiveLog = (obj: NetworkPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceResponseFilterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceJobRequestFilterSensitiveLog = (obj: DescribeDeviceJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceJobResponseFilterSensitiveLog = (obj: DescribeDeviceJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeRequestFilterSensitiveLog = (obj: DescribeNodeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeInputPortFilterSensitiveLog = (obj: NodeInputPort): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeOutputPortFilterSensitiveLog = (obj: NodeOutputPort): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeInterfaceFilterSensitiveLog = (obj: NodeInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeResponseFilterSensitiveLog = (obj: DescribeNodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeFromTemplateJobRequestFilterSensitiveLog = (obj: DescribeNodeFromTemplateJobRequest): any => ({
  ...obj,
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

/**
 * @internal
 */
export const DescribePackageRequestFilterSensitiveLog = (obj: DescribePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageResponseFilterSensitiveLog = (obj: DescribePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageImportJobRequestFilterSensitiveLog = (obj: DescribePackageImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutPutS3LocationFilterSensitiveLog = (obj: OutPutS3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageImportJobOutputFilterSensitiveLog = (obj: PackageImportJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageImportJobResponseFilterSensitiveLog = (obj: DescribePackageImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageVersionRequestFilterSensitiveLog = (obj: DescribePackageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageVersionResponseFilterSensitiveLog = (obj: DescribePackageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceJobFilterSensitiveLog = (obj: DeviceJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstanceDependenciesRequestFilterSensitiveLog = (
  obj: ListApplicationInstanceDependenciesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageObjectFilterSensitiveLog = (obj: PackageObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstanceDependenciesResponseFilterSensitiveLog = (
  obj: ListApplicationInstanceDependenciesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstanceNodeInstancesRequestFilterSensitiveLog = (
  obj: ListApplicationInstanceNodeInstancesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeInstanceFilterSensitiveLog = (obj: NodeInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstanceNodeInstancesResponseFilterSensitiveLog = (
  obj: ListApplicationInstanceNodeInstancesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstancesRequestFilterSensitiveLog = (obj: ListApplicationInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationInstancesResponseFilterSensitiveLog = (obj: ListApplicationInstancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesJobsRequestFilterSensitiveLog = (obj: ListDevicesJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesJobsResponseFilterSensitiveLog = (obj: ListDevicesJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodeFromTemplateJobsRequestFilterSensitiveLog = (obj: ListNodeFromTemplateJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFromTemplateJobFilterSensitiveLog = (obj: NodeFromTemplateJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodeFromTemplateJobsResponseFilterSensitiveLog = (obj: ListNodeFromTemplateJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesRequestFilterSensitiveLog = (obj: ListNodesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFilterSensitiveLog = (obj: Node): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesResponseFilterSensitiveLog = (obj: ListNodesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageImportJobsRequestFilterSensitiveLog = (obj: ListPackageImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageImportJobFilterSensitiveLog = (obj: PackageImportJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageImportJobsResponseFilterSensitiveLog = (obj: ListPackageImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesRequestFilterSensitiveLog = (obj: ListPackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageListItemFilterSensitiveLog = (obj: PackageListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesResponseFilterSensitiveLog = (obj: ListPackagesResponse): any => ({
  ...obj,
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
export const NodeSignalFilterSensitiveLog = (obj: NodeSignal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionDeviceRequestFilterSensitiveLog = (obj: ProvisionDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionDeviceResponseFilterSensitiveLog = (obj: ProvisionDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterPackageVersionRequestFilterSensitiveLog = (obj: RegisterPackageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterPackageVersionResponseFilterSensitiveLog = (obj: RegisterPackageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveApplicationInstanceRequestFilterSensitiveLog = (obj: RemoveApplicationInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveApplicationInstanceResponseFilterSensitiveLog = (obj: RemoveApplicationInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignalApplicationInstanceNodeInstancesRequestFilterSensitiveLog = (
  obj: SignalApplicationInstanceNodeInstancesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignalApplicationInstanceNodeInstancesResponseFilterSensitiveLog = (
  obj: SignalApplicationInstanceNodeInstancesResponse
): any => ({
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

/**
 * @internal
 */
export const UpdateDeviceMetadataRequestFilterSensitiveLog = (obj: UpdateDeviceMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceMetadataResponseFilterSensitiveLog = (obj: UpdateDeviceMetadataResponse): any => ({
  ...obj,
});

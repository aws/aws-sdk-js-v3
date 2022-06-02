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

export namespace AlternateSoftwareMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlternateSoftwareMetadata): any => ({
    ...obj,
  });
}

export enum ApplicationInstanceHealthStatus {
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  RUNNING = "RUNNING",
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
}

export namespace ApplicationInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationInstance): any => ({
    ...obj,
  });
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

export namespace ConflictExceptionErrorArgument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictExceptionErrorArgument): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManifestOverridesPayload): any => {
    if (obj.PayloadData !== undefined) return { PayloadData: obj.PayloadData };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManifestPayload): any => {
    if (obj.PayloadData !== undefined) return { PayloadData: obj.PayloadData };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace CreateApplicationInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationInstanceRequest): any => ({
    ...obj,
    ...(obj.ManifestPayload && { ManifestPayload: ManifestPayload.filterSensitiveLog(obj.ManifestPayload) }),
    ...(obj.ManifestOverridesPayload && {
      ManifestOverridesPayload: ManifestOverridesPayload.filterSensitiveLog(obj.ManifestOverridesPayload),
    }),
  });
}

export interface CreateApplicationInstanceResponse {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

export namespace CreateApplicationInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationInstanceResponse): any => ({
    ...obj,
  });
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

export namespace ValidationExceptionErrorArgument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionErrorArgument): any => ({
    ...obj,
  });
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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
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
}

export namespace OTAJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OTAJobConfig): any => ({
    ...obj,
  });
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

export namespace DeviceJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceJobConfig): any => ({
    ...obj,
  });
}

export enum JobType {
  OTA = "OTA",
}

export interface CreateJobForDevicesRequest {
  /**
   * <p>IDs of target devices.</p>
   */
  DeviceIds: string[] | undefined;

  /**
   * <p>Configuration settings for the job.</p>
   */
  DeviceJobConfig: DeviceJobConfig | undefined;

  /**
   * <p>The type of job to run.</p>
   */
  JobType: JobType | string | undefined;
}

export namespace CreateJobForDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobForDevicesRequest): any => ({
    ...obj,
  });
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

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

export interface CreateJobForDevicesResponse {
  /**
   * <p>A list of jobs.</p>
   */
  Jobs: Job[] | undefined;
}

export namespace CreateJobForDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobForDevicesResponse): any => ({
    ...obj,
  });
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

export namespace JobResourceTags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobResourceTags): any => ({
    ...obj,
  });
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

export namespace CreateNodeFromTemplateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNodeFromTemplateJobRequest): any => ({
    ...obj,
    ...(obj.TemplateParameters && { TemplateParameters: SENSITIVE_STRING }),
  });
}

export interface CreateNodeFromTemplateJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export namespace CreateNodeFromTemplateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNodeFromTemplateJobResponse): any => ({
    ...obj,
  });
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

export namespace CreatePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageRequest): any => ({
    ...obj,
  });
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

export namespace StorageLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageLocation): any => ({
    ...obj,
  });
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

export namespace CreatePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageResponse): any => ({
    ...obj,
  });
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

export namespace S3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
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

export namespace PackageVersionInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageVersionInputConfig): any => ({
    ...obj,
  });
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

export namespace PackageImportJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageImportJobInputConfig): any => ({
    ...obj,
  });
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

export namespace PackageVersionOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageVersionOutputConfig): any => ({
    ...obj,
  });
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

export namespace PackageImportJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageImportJobOutputConfig): any => ({
    ...obj,
  });
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

export namespace CreatePackageImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageImportJobRequest): any => ({
    ...obj,
  });
}

export interface CreatePackageImportJobResponse {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export namespace CreatePackageImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageImportJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

export namespace DeleteDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

export namespace DeleteDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj,
  });
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

export namespace DeletePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePackageRequest): any => ({
    ...obj,
  });
}

export interface DeletePackageResponse {}

export namespace DeletePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePackageResponse): any => ({
    ...obj,
  });
}

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

export namespace DeregisterPackageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterPackageVersionRequest): any => ({
    ...obj,
  });
}

export interface DeregisterPackageVersionResponse {}

export namespace DeregisterPackageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterPackageVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeApplicationInstanceRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

export namespace DescribeApplicationInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationInstanceRequest): any => ({
    ...obj,
  });
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
}

export namespace DescribeApplicationInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationInstanceResponse): any => ({
    ...obj,
  });
}

export interface DescribeApplicationInstanceDetailsRequest {
  /**
   * <p>The application instance's ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

export namespace DescribeApplicationInstanceDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationInstanceDetailsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeApplicationInstanceDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationInstanceDetailsResponse): any => ({
    ...obj,
    ...(obj.ManifestPayload && { ManifestPayload: ManifestPayload.filterSensitiveLog(obj.ManifestPayload) }),
    ...(obj.ManifestOverridesPayload && {
      ManifestOverridesPayload: ManifestOverridesPayload.filterSensitiveLog(obj.ManifestOverridesPayload),
    }),
  });
}

export interface DescribeDeviceRequest {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId: string | undefined;
}

export namespace DescribeDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
    ...obj,
  });
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

export namespace EthernetStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EthernetStatus): any => ({
    ...obj,
  });
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

export namespace NtpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NtpStatus): any => ({
    ...obj,
  });
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

export namespace NetworkStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkStatus): any => ({
    ...obj,
  });
}

export enum DeviceConnectionStatus {
  AWAITING_CREDENTIALS = "AWAITING_CREDENTIALS",
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
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

export namespace StaticIpConnectionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticIpConnectionInfo): any => ({
    ...obj,
  });
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

export namespace EthernetPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EthernetPayload): any => ({
    ...obj,
  });
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

export namespace NtpPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NtpPayload): any => ({
    ...obj,
  });
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

export namespace NetworkPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPayload): any => ({
    ...obj,
  });
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
}

export namespace DescribeDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
}

export interface DescribeDeviceJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeDeviceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceJobRequest): any => ({
    ...obj,
  });
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
}

export namespace DescribeDeviceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceJobResponse): any => ({
    ...obj,
  });
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

export namespace DescribeNodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNodeRequest): any => ({
    ...obj,
  });
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

export namespace NodeInputPort {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeInputPort): any => ({
    ...obj,
  });
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

export namespace NodeOutputPort {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeOutputPort): any => ({
    ...obj,
  });
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

export namespace NodeInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeInterface): any => ({
    ...obj,
  });
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

export namespace DescribeNodeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNodeResponse): any => ({
    ...obj,
  });
}

export interface DescribeNodeFromTemplateJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeNodeFromTemplateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNodeFromTemplateJobRequest): any => ({
    ...obj,
  });
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

export namespace DescribeNodeFromTemplateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNodeFromTemplateJobResponse): any => ({
    ...obj,
    ...(obj.TemplateParameters && { TemplateParameters: SENSITIVE_STRING }),
  });
}

export interface DescribePackageRequest {
  /**
   * <p>The package's ID.</p>
   */
  PackageId: string | undefined;
}

export namespace DescribePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageRequest): any => ({
    ...obj,
  });
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

export namespace DescribePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageResponse): any => ({
    ...obj,
  });
}

export interface DescribePackageImportJobRequest {
  /**
   * <p>The job's ID.</p>
   */
  JobId: string | undefined;
}

export namespace DescribePackageImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageImportJobRequest): any => ({
    ...obj,
  });
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

export namespace OutPutS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutPutS3Location): any => ({
    ...obj,
  });
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

export namespace PackageImportJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageImportJobOutput): any => ({
    ...obj,
  });
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

export namespace DescribePackageImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageImportJobResponse): any => ({
    ...obj,
  });
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

export namespace DescribePackageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageVersionRequest): any => ({
    ...obj,
  });
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

export namespace DescribePackageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackageVersionResponse): any => ({
    ...obj,
  });
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
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
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
}

export namespace DeviceJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceJob): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstanceDependenciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstanceDependenciesRequest): any => ({
    ...obj,
  });
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

export namespace PackageObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageObject): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstanceDependenciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstanceDependenciesResponse): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstanceNodeInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstanceNodeInstancesRequest): any => ({
    ...obj,
  });
}

export enum NodeInstanceStatus {
  ERROR = "ERROR",
  NOT_AVAILABLE = "NOT_AVAILABLE",
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

export namespace NodeInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeInstance): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstanceNodeInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstanceNodeInstancesResponse): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstancesRequest): any => ({
    ...obj,
  });
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

export namespace ListApplicationInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationInstancesResponse): any => ({
    ...obj,
  });
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
}

export namespace ListDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
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

export namespace ListDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
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

export namespace ListDevicesJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesJobsRequest): any => ({
    ...obj,
  });
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

export namespace ListDevicesJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListNodeFromTemplateJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodeFromTemplateJobsRequest): any => ({
    ...obj,
  });
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

export namespace NodeFromTemplateJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeFromTemplateJob): any => ({
    ...obj,
  });
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

export namespace ListNodeFromTemplateJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodeFromTemplateJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListNodesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodesRequest): any => ({
    ...obj,
  });
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

export namespace Node {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
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

export namespace ListNodesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodesResponse): any => ({
    ...obj,
  });
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

export namespace ListPackageImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackageImportJobsRequest): any => ({
    ...obj,
  });
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

export namespace PackageImportJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageImportJob): any => ({
    ...obj,
  });
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

export namespace ListPackageImportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackageImportJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListPackagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackagesRequest): any => ({
    ...obj,
  });
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

export namespace PackageListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageListItem): any => ({
    ...obj,
  });
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

export namespace ListPackagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackagesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;
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
   * <p>A list of tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ProvisionDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionDeviceRequest): any => ({
    ...obj,
  });
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

export namespace ProvisionDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionDeviceResponse): any => ({
    ...obj,
  });
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

export namespace RegisterPackageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPackageVersionRequest): any => ({
    ...obj,
  });
}

export interface RegisterPackageVersionResponse {}

export namespace RegisterPackageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPackageVersionResponse): any => ({
    ...obj,
  });
}

export interface RemoveApplicationInstanceRequest {
  /**
   * <p>An application instance ID.</p>
   */
  ApplicationInstanceId: string | undefined;
}

export namespace RemoveApplicationInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveApplicationInstanceRequest): any => ({
    ...obj,
  });
}

export interface RemoveApplicationInstanceResponse {}

export namespace RemoveApplicationInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveApplicationInstanceResponse): any => ({
    ...obj,
  });
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
   * <p>The resource's ARN.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys to remove.</p>
   */
  TagKeys: string[] | undefined;
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

export namespace UpdateDeviceMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceMetadataResponse {
  /**
   * <p>The device's ID.</p>
   */
  DeviceId?: string;
}

export namespace UpdateDeviceMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceMetadataResponse): any => ({
    ...obj,
  });
}

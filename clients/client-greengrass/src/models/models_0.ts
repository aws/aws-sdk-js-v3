// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GreengrassServiceException as __BaseException } from "./GreengrassServiceException";

/**
 * Information about a Greengrass core's connectivity.
 * @public
 */
export interface ConnectivityInfo {
  /**
   * The endpoint for the Greengrass core. Can be an IP address or DNS.
   * @public
   */
  HostAddress?: string | undefined;

  /**
   * The ID of the connectivity information.
   * @public
   */
  Id?: string | undefined;

  /**
   * Metadata for this endpoint.
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The port of the Greengrass core. Usually 8883.
   * @public
   */
  PortNumber?: number | undefined;
}

/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 * @public
 */
export interface Connector {
  /**
   * The ARN of the connector.
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   * @public
   */
  Id: string | undefined;

  /**
   * The parameters or configuration that the connector uses.
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * Information about a core.
 * @public
 */
export interface Core {
  /**
   * The ARN of the certificate associated with the core.
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   * @public
   */
  Id: string | undefined;

  /**
   * If true, the core's local shadow is automatically synced with the cloud.
   * @public
   */
  SyncShadow?: boolean | undefined;

  /**
   * The ARN of the thing which is the core.
   * @public
   */
  ThingArn: string | undefined;
}

/**
 * Information about a definition.
 * @public
 */
export interface DefinitionInformation {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Information about a device.
 * @public
 */
export interface Device {
  /**
   * The ARN of the certificate associated with the device.
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   * @public
   */
  Id: string | undefined;

  /**
   * If true, the device's local shadow will be automatically synced with the cloud.
   * @public
   */
  SyncShadow?: boolean | undefined;

  /**
   * The thing ARN of the device.
   * @public
   */
  ThingArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncodingType = {
  binary: "binary",
  json: "json",
} as const;

/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 * @enum
 */
export const FunctionIsolationMode = {
  GreengrassContainer: "GreengrassContainer",
  NoContainer: "NoContainer",
} as const;

/**
 * @public
 */
export type FunctionIsolationMode = (typeof FunctionIsolationMode)[keyof typeof FunctionIsolationMode];

/**
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 * @public
 */
export interface FunctionRunAsConfig {
  /**
   * The group ID whose permissions are used to run a Lambda function.
   * @public
   */
  Gid?: number | undefined;

  /**
   * The user ID whose permissions are used to run a Lambda function.
   * @public
   */
  Uid?: number | undefined;
}

/**
 * Configuration information that specifies how a Lambda function runs.
 * @public
 */
export interface FunctionExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   * @public
   */
  IsolationMode?: FunctionIsolationMode | undefined;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   * @public
   */
  RunAs?: FunctionRunAsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  ro: "ro",
  rw: "rw",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * A policy used by the function to access a resource.
 * @public
 */
export interface ResourceAccessPolicy {
  /**
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * The environment configuration of the function.
 * @public
 */
export interface FunctionConfigurationEnvironment {
  /**
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   * @public
   */
  AccessSysfs?: boolean | undefined;

  /**
   * Configuration related to executing the Lambda function
   * @public
   */
  Execution?: FunctionExecutionConfig | undefined;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   * @public
   */
  ResourceAccessPolicies?: ResourceAccessPolicy[] | undefined;

  /**
   * Environment variables for the Lambda function's configuration.
   * @public
   */
  Variables?: Record<string, string> | undefined;
}

/**
 * The configuration of the Lambda function.
 * @public
 */
export interface FunctionConfiguration {
  /**
   * The expected encoding type of the input payload for the function. The default is ''json''.
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * The environment configuration of the function.
   * @public
   */
  Environment?: FunctionConfigurationEnvironment | undefined;

  /**
   * The execution arguments.
   * @public
   */
  ExecArgs?: string | undefined;

  /**
   * The name of the function executable.
   * @public
   */
  Executable?: string | undefined;

  /**
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   * @public
   */
  Pinned?: boolean | undefined;

  /**
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The Lambda runtime supported by Greengrass which is to be used instead of the one specified in the Lambda function.
   * @public
   */
  FunctionRuntimeOverride?: string | undefined;
}

/**
 * Information about a Lambda function.
 * @public
 */
export interface Function {
  /**
   * The ARN of the Lambda function.
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The configuration of the Lambda function.
   * @public
   */
  FunctionConfiguration?: FunctionConfiguration | undefined;

  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   * @public
   */
  Id: string | undefined;
}

/**
 * Information about a certificate authority for a group.
 * @public
 */
export interface GroupCertificateAuthorityProperties {
  /**
   * The ARN of the certificate authority for the group.
   * @public
   */
  GroupCertificateAuthorityArn?: string | undefined;

  /**
   * The ID of the certificate authority for the group.
   * @public
   */
  GroupCertificateAuthorityId?: string | undefined;
}

/**
 * Information about a group.
 * @public
 */
export interface GroupInformation {
  /**
   * The ARN of the group.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the group was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the group.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the group was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the group.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the group.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the group.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LoggerComponent = {
  GreengrassSystem: "GreengrassSystem",
  Lambda: "Lambda",
} as const;

/**
 * @public
 */
export type LoggerComponent = (typeof LoggerComponent)[keyof typeof LoggerComponent];

/**
 * @public
 * @enum
 */
export const LoggerLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type LoggerLevel = (typeof LoggerLevel)[keyof typeof LoggerLevel];

/**
 * @public
 * @enum
 */
export const LoggerType = {
  AWSCloudWatch: "AWSCloudWatch",
  FileSystem: "FileSystem",
} as const;

/**
 * @public
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

/**
 * Information about a logger
 * @public
 */
export interface Logger {
  /**
   * The component that will be subject to logging.
   * @public
   */
  Component: LoggerComponent | undefined;

  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   * @public
   */
  Id: string | undefined;

  /**
   * The level of the logs.
   * @public
   */
  Level: LoggerLevel | undefined;

  /**
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   * @public
   */
  Space?: number | undefined;

  /**
   * The type of log output which will be used.
   * @public
   */
  Type: LoggerType | undefined;
}

/**
 * Group owner related settings for local resources.
 * @public
 */
export interface GroupOwnerSetting {
  /**
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   * @public
   */
  AutoAddGroupOwner?: boolean | undefined;

  /**
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   * @public
   */
  GroupOwner?: string | undefined;
}

/**
 * Attributes that define a local device resource.
 * @public
 */
export interface LocalDeviceResourceData {
  /**
   * Group/owner related settings for local resources.
   * @public
   */
  GroupOwnerSetting?: GroupOwnerSetting | undefined;

  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * Attributes that define a local volume resource.
 * @public
 */
export interface LocalVolumeResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   * @public
   */
  DestinationPath?: string | undefined;

  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   * @public
   */
  GroupOwnerSetting?: GroupOwnerSetting | undefined;

  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   * @public
   */
  SourcePath?: string | undefined;
}

/**
 * The owner setting for downloaded machine learning resources.
 * @public
 */
export interface ResourceDownloadOwnerSetting {
  /**
   * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
   * @public
   */
  GroupOwner: string | undefined;

  /**
   * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
   * @public
   */
  GroupPermission: Permission | undefined;
}

/**
 * Attributes that define an Amazon S3 machine learning resource.
 * @public
 */
export interface S3MachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   * @public
   */
  DestinationPath?: string | undefined;

  /**
   * The owner setting for downloaded machine learning resources.
   * @public
   */
  OwnerSetting?: ResourceDownloadOwnerSetting | undefined;

  /**
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 * @public
 */
export interface SageMakerMachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   * @public
   */
  DestinationPath?: string | undefined;

  /**
   * The owner setting for downloaded machine learning resources.
   * @public
   */
  OwnerSetting?: ResourceDownloadOwnerSetting | undefined;

  /**
   * The ARN of the Amazon SageMaker training job that represents the source model.
   * @public
   */
  SageMakerJobArn?: string | undefined;
}

/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 * @public
 */
export interface SecretsManagerSecretResourceData {
  /**
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   * @public
   */
  ARN?: string | undefined;

  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   * @public
   */
  AdditionalStagingLabelsToDownload?: string[] | undefined;
}

/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 * @public
 */
export interface ResourceDataContainer {
  /**
   * Attributes that define the local device resource.
   * @public
   */
  LocalDeviceResourceData?: LocalDeviceResourceData | undefined;

  /**
   * Attributes that define the local volume resource.
   * @public
   */
  LocalVolumeResourceData?: LocalVolumeResourceData | undefined;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   * @public
   */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData | undefined;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   * @public
   */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData | undefined;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   * @public
   */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData | undefined;
}

/**
 * Information about a resource.
 * @public
 */
export interface Resource {
  /**
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   * @public
   */
  Id: string | undefined;

  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   * @public
   */
  Name: string | undefined;

  /**
   * A container of data for all resource types.
   * @public
   */
  ResourceDataContainer: ResourceDataContainer | undefined;
}

/**
 * Information about a subscription.
 * @public
 */
export interface Subscription {
  /**
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   * @public
   */
  Id: string | undefined;

  /**
   * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   * @public
   */
  Source: string | undefined;

  /**
   * The MQTT topic used to route the message.
   * @public
   */
  Subject: string | undefined;

  /**
   * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   * @public
   */
  Target: string | undefined;
}

/**
 * Information about a version.
 * @public
 */
export interface VersionInformation {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface AssociateRoleToGroupRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateRoleToGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
   * @public
   */
  AssociatedAt?: string | undefined;
}

/**
 * Details about the error.
 * @public
 */
export interface ErrorDetail {
  /**
   * A detailed error code.
   * @public
   */
  DetailedErrorCode?: string | undefined;

  /**
   * A detailed error message.
   * @public
   */
  DetailedErrorMessage?: string | undefined;
}

/**
 * General error information.
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * Details about the error.
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * A message containing information about the error.
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}

/**
 * General error information.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * Details about the error.
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * A message containing information about the error.
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountRequest {
  /**
   * The ARN of the service role you wish to associate with your account.
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * The time when the service role was associated with the account.
   * @public
   */
  AssociatedAt?: string | undefined;
}

/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 * @public
 */
export interface BulkDeployment {
  /**
   * The ARN of the bulk deployment.
   * @public
   */
  BulkDeploymentArn?: string | undefined;

  /**
   * The ID of the bulk deployment.
   * @public
   */
  BulkDeploymentId?: string | undefined;

  /**
   * The time, in ISO format, when the deployment was created.
   * @public
   */
  CreatedAt?: string | undefined;
}

/**
 * Relevant metrics on input records processed during bulk deployment.
 * @public
 */
export interface BulkDeploymentMetrics {
  /**
   * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
   * @public
   */
  InvalidInputRecords?: number | undefined;

  /**
   * The total number of group records from the input file that have been processed so far, or attempted.
   * @public
   */
  RecordsProcessed?: number | undefined;

  /**
   * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
   * @public
   */
  RetryAttempts?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  ForceResetDeployment: "ForceResetDeployment",
  NewDeployment: "NewDeployment",
  Redeployment: "Redeployment",
  ResetDeployment: "ResetDeployment",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * Information about an individual group deployment in a bulk deployment operation.
 * @public
 */
export interface BulkDeploymentResult {
  /**
   * The time, in ISO format, when the deployment was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The ARN of the group deployment.
   * @public
   */
  DeploymentArn?: string | undefined;

  /**
   * The ID of the group deployment.
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * The type of the deployment.
   * @public
   */
  DeploymentType?: DeploymentType | undefined;

  /**
   * Details about the error.
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * The error message for a failed deployment
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The ARN of the Greengrass group.
   * @public
   */
  GroupArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BulkDeploymentStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Initializing: "Initializing",
  Running: "Running",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;

/**
 * @public
 */
export type BulkDeploymentStatus = (typeof BulkDeploymentStatus)[keyof typeof BulkDeploymentStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationSyncStatus = {
  InSync: "InSync",
  OutOfSync: "OutOfSync",
} as const;

/**
 * @public
 */
export type ConfigurationSyncStatus = (typeof ConfigurationSyncStatus)[keyof typeof ConfigurationSyncStatus];

/**
 * Information about the connector definition version, which is a container for connectors.
 * @public
 */
export interface ConnectorDefinitionVersion {
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   * @public
   */
  Connectors?: Connector[] | undefined;
}

/**
 * Information about a core definition version.
 * @public
 */
export interface CoreDefinitionVersion {
  /**
   * A list of cores in the core definition version.
   * @public
   */
  Cores?: Core[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the connector definition.
   * @public
   */
  InitialVersion?: ConnectorDefinitionVersion | undefined;

  /**
   * The name of the connector definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   * @public
   */
  Connectors?: Connector[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Information needed to create a core definition.
 * @public
 */
export interface CreateCoreDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the core definition.
   * @public
   */
  InitialVersion?: CoreDefinitionVersion | undefined;

  /**
   * The name of the core definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;

  /**
   * A list of cores in the core definition version.
   * @public
   */
  Cores?: Core[] | undefined;
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the deployment if you wish to redeploy a previous deployment.
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
   * @public
   */
  DeploymentType: DeploymentType | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version to be deployed.
   * @public
   */
  GroupVersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * The ARN of the deployment.
   * @public
   */
  DeploymentArn?: string | undefined;

  /**
   * The ID of the deployment.
   * @public
   */
  DeploymentId?: string | undefined;
}

/**
 * Information about a device definition version.
 * @public
 */
export interface DeviceDefinitionVersion {
  /**
   * A list of devices in the definition version.
   * @public
   */
  Devices?: Device[] | undefined;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the device definition.
   * @public
   */
  InitialVersion?: DeviceDefinitionVersion | undefined;

  /**
   * The name of the device definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;

  /**
   * A list of devices in the definition version.
   * @public
   */
  Devices?: Device[] | undefined;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Configuration information that specifies how a Lambda function runs.
 * @public
 */
export interface FunctionDefaultExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   * @public
   */
  IsolationMode?: FunctionIsolationMode | undefined;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   * @public
   */
  RunAs?: FunctionRunAsConfig | undefined;
}

/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 * @public
 */
export interface FunctionDefaultConfig {
  /**
   * Configuration information that specifies how a Lambda function runs.
   * @public
   */
  Execution?: FunctionDefaultExecutionConfig | undefined;
}

/**
 * Information about a function definition version.
 * @public
 */
export interface FunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   * @public
   */
  DefaultConfig?: FunctionDefaultConfig | undefined;

  /**
   * A list of Lambda functions in this function definition version.
   * @public
   */
  Functions?: Function[] | undefined;
}

/**
 * @public
 */
export interface CreateFunctionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the function definition.
   * @public
   */
  InitialVersion?: FunctionDefinitionVersion | undefined;

  /**
   * The name of the function definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information needed to create a function definition version.
 * @public
 */
export interface CreateFunctionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   * @public
   */
  DefaultConfig?: FunctionDefaultConfig | undefined;

  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;

  /**
   * A list of Lambda functions in this function definition version.
   * @public
   */
  Functions?: Function[] | undefined;
}

/**
 * @public
 */
export interface CreateFunctionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Information about a group version.
 * @public
 */
export interface GroupVersion {
  /**
   * The ARN of the connector definition version for this group.
   * @public
   */
  ConnectorDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the core definition version for this group.
   * @public
   */
  CoreDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the device definition version for this group.
   * @public
   */
  DeviceDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the function definition version for this group.
   * @public
   */
  FunctionDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the logger definition version for this group.
   * @public
   */
  LoggerDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the resource definition version for this group.
   * @public
   */
  ResourceDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the subscription definition version for this group.
   * @public
   */
  SubscriptionDefinitionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the group.
   * @public
   */
  InitialVersion?: GroupVersion | undefined;

  /**
   * The name of the group.
   * @public
   */
  Name: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityResponse {
  /**
   * The ARN of the group certificate authority.
   * @public
   */
  GroupCertificateAuthorityArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ARN of the connector definition version for this group.
   * @public
   */
  ConnectorDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the core definition version for this group.
   * @public
   */
  CoreDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the device definition version for this group.
   * @public
   */
  DeviceDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the function definition version for this group.
   * @public
   */
  FunctionDefinitionVersionArn?: string | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The ARN of the logger definition version for this group.
   * @public
   */
  LoggerDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the resource definition version for this group.
   * @public
   */
  ResourceDefinitionVersionArn?: string | undefined;

  /**
   * The ARN of the subscription definition version for this group.
   * @public
   */
  SubscriptionDefinitionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Information about a logger definition version.
 * @public
 */
export interface LoggerDefinitionVersion {
  /**
   * A list of loggers.
   * @public
   */
  Loggers?: Logger[] | undefined;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the logger definition.
   * @public
   */
  InitialVersion?: LoggerDefinitionVersion | undefined;

  /**
   * The name of the logger definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;

  /**
   * A list of loggers.
   * @public
   */
  Loggers?: Logger[] | undefined;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Information about a resource definition version.
 * @public
 */
export interface ResourceDefinitionVersion {
  /**
   * A list of resources.
   * @public
   */
  Resources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the resource definition.
   * @public
   */
  InitialVersion?: ResourceDefinitionVersion | undefined;

  /**
   * The name of the resource definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;

  /**
   * A list of resources.
   * @public
   */
  Resources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SoftwareToUpdate = {
  core: "core",
  ota_agent: "ota_agent",
} as const;

/**
 * @public
 */
export type SoftwareToUpdate = (typeof SoftwareToUpdate)[keyof typeof SoftwareToUpdate];

/**
 * @public
 * @enum
 */
export const UpdateAgentLogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  NONE: "NONE",
  TRACE: "TRACE",
  VERBOSE: "VERBOSE",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type UpdateAgentLogLevel = (typeof UpdateAgentLogLevel)[keyof typeof UpdateAgentLogLevel];

/**
 * @public
 * @enum
 */
export const UpdateTargetsArchitecture = {
  aarch64: "aarch64",
  armv6l: "armv6l",
  armv7l: "armv7l",
  x86_64: "x86_64",
} as const;

/**
 * @public
 */
export type UpdateTargetsArchitecture = (typeof UpdateTargetsArchitecture)[keyof typeof UpdateTargetsArchitecture];

/**
 * @public
 * @enum
 */
export const UpdateTargetsOperatingSystem = {
  amazon_linux: "amazon_linux",
  openwrt: "openwrt",
  raspbian: "raspbian",
  ubuntu: "ubuntu",
} as const;

/**
 * @public
 */
export type UpdateTargetsOperatingSystem =
  (typeof UpdateTargetsOperatingSystem)[keyof typeof UpdateTargetsOperatingSystem];

/**
 * @public
 */
export interface CreateSoftwareUpdateJobRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   * @public
   */
  S3UrlSignerRole: string | undefined;

  /**
   * The piece of software on the Greengrass core that will be updated.
   * @public
   */
  SoftwareToUpdate: SoftwareToUpdate | undefined;

  /**
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   * @public
   */
  UpdateAgentLogLevel?: UpdateAgentLogLevel | undefined;

  /**
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   * @public
   */
  UpdateTargets: string[] | undefined;

  /**
   * The architecture of the cores which are the targets of an update.
   * @public
   */
  UpdateTargetsArchitecture: UpdateTargetsArchitecture | undefined;

  /**
   * The operating system of the cores which are the targets of an update.
   * @public
   */
  UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | undefined;
}

/**
 * @public
 */
export interface CreateSoftwareUpdateJobResponse {
  /**
   * The IoT Job ARN corresponding to this update.
   * @public
   */
  IotJobArn?: string | undefined;

  /**
   * The IoT Job Id corresponding to this update.
   * @public
   */
  IotJobId?: string | undefined;

  /**
   * The software version installed on the device or devices after the update.
   * @public
   */
  PlatformSoftwareVersion?: string | undefined;
}

/**
 * Information about a subscription definition version.
 * @public
 */
export interface SubscriptionDefinitionVersion {
  /**
   * A list of subscriptions.
   * @public
   */
  Subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * Information about the initial version of the subscription definition.
   * @public
   */
  InitialVersion?: SubscriptionDefinitionVersion | undefined;

  /**
   * The name of the subscription definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * A list of subscriptions.
   * @public
   */
  Subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the parent definition that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorDefinitionResponse {}

/**
 * @public
 */
export interface DeleteCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreDefinitionResponse {}

/**
 * @public
 */
export interface DeleteDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceDefinitionResponse {}

/**
 * @public
 */
export interface DeleteFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionDefinitionResponse {}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DeleteLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoggerDefinitionResponse {}

/**
 * @public
 */
export interface DeleteResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceDefinitionResponse {}

/**
 * @public
 */
export interface DeleteSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionDefinitionResponse {}

/**
 * Information about a deployment.
 * @public
 */
export interface Deployment {
  /**
   * The time, in milliseconds since the epoch, when the deployment was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The ARN of the deployment.
   * @public
   */
  DeploymentArn?: string | undefined;

  /**
   * The ID of the deployment.
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The type of the deployment.
   * @public
   */
  DeploymentType?: DeploymentType | undefined;

  /**
   * The ARN of the group for this deployment.
   * @public
   */
  GroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   * @public
   */
  DisassociatedAt?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountRequest {}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountResponse {
  /**
   * The time when the service role was disassociated from the account.
   * @public
   */
  DisassociatedAt?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedRoleRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedRoleResponse {
  /**
   * The time when the role was associated with the group.
   * @public
   */
  AssociatedAt?: string | undefined;

  /**
   * The ARN of the role that is associated with the group.
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusRequest {
  /**
   * The ID of the bulk deployment.
   * @public
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusResponse {
  /**
   * Relevant metrics on input records processed during bulk deployment.
   * @public
   */
  BulkDeploymentMetrics?: BulkDeploymentMetrics | undefined;

  /**
   * The status of the bulk deployment.
   * @public
   */
  BulkDeploymentStatus?: BulkDeploymentStatus | undefined;

  /**
   * The time, in ISO format, when the deployment was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * Error details
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * Error message
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoRequest {
  /**
   * The thing name.
   * @public
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoResponse {
  /**
   * Connectivity info list.
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo[] | undefined;

  /**
   * A message about the connectivity info request.
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionRequest {
  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  ConnectorDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionResponse {
  /**
   * The ARN of the connector definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the connector definition version.
   * @public
   */
  Definition?: ConnectorDefinitionVersion | undefined;

  /**
   * The ID of the connector definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the connector definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionRequest {
  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;

  /**
   * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  CoreDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionResponse {
  /**
   * The ARN of the core definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the core definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the core definition version.
   * @public
   */
  Definition?: CoreDefinitionVersion | undefined;

  /**
   * The ID of the core definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the core definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStatusRequest {
  /**
   * The ID of the deployment.
   * @public
   */
  DeploymentId: string | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStatusResponse {
  /**
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * The type of the deployment.
   * @public
   */
  DeploymentType?: DeploymentType | undefined;

  /**
   * Error details
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * Error message
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   * @public
   */
  UpdatedAt?: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionRequest {
  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  DeviceDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionResponse {
  /**
   * The ARN of the device definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the device definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the device definition version.
   * @public
   */
  Definition?: DeviceDefinitionVersion | undefined;

  /**
   * The ID of the device definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the device definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionRequest {
  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  FunctionDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionResponse {
  /**
   * The ARN of the function definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the function definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information on the definition.
   * @public
   */
  Definition?: FunctionDefinitionVersion | undefined;

  /**
   * The ID of the function definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the function definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityRequest {
  /**
   * The ID of the certificate authority.
   * @public
   */
  CertificateAuthorityId: string | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityResponse {
  /**
   * The ARN of the certificate authority for the group.
   * @public
   */
  GroupCertificateAuthorityArn?: string | undefined;

  /**
   * The ID of the certificate authority for the group.
   * @public
   */
  GroupCertificateAuthorityId?: string | undefined;

  /**
   * The PEM encoded certificate for the group.
   * @public
   */
  PemEncodedCertificate?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   * @public
   */
  CertificateAuthorityExpiryInMilliseconds?: string | undefined;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   * @public
   */
  CertificateExpiryInMilliseconds?: string | undefined;

  /**
   * The ID of the group certificate configuration.
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupVersionRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
   * @public
   */
  GroupVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupVersionResponse {
  /**
   * The ARN of the group version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the group version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the group version definition.
   * @public
   */
  Definition?: GroupVersion | undefined;

  /**
   * The ID of the group that the version is associated with.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the group version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionRequest {
  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  LoggerDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionResponse {
  /**
   * The ARN of the logger definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the logger definition version.
   * @public
   */
  Definition?: LoggerDefinitionVersion | undefined;

  /**
   * The ID of the logger definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The version of the logger definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionRequest {
  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;

  /**
   * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  ResourceDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionResponse {
  /**
   * Arn of the resource definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the definition.
   * @public
   */
  Definition?: ResourceDefinitionVersion | undefined;

  /**
   * The ID of the resource definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The version of the resource definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceRoleForAccountRequest {}

/**
 * @public
 */
export interface GetServiceRoleForAccountResponse {
  /**
   * The time when the service role was associated with the account.
   * @public
   */
  AssociatedAt?: string | undefined;

  /**
   * The ARN of the role which is associated with the account.
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * The ID of the definition.
   * @public
   */
  Id?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   * @public
   */
  LastUpdatedTimestamp?: string | undefined;

  /**
   * The ID of the latest version associated with the definition.
   * @public
   */
  LatestVersion?: string | undefined;

  /**
   * The ARN of the latest version associated with the definition.
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * Tag(s) attached to the resource arn.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionRequest {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   * @public
   */
  SubscriptionDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the subscription definition version.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the subscription definition version was created.
   * @public
   */
  CreationTimestamp?: string | undefined;

  /**
   * Information about the subscription definition version.
   * @public
   */
  Definition?: SubscriptionDefinitionVersion | undefined;

  /**
   * The ID of the subscription definition version.
   * @public
   */
  Id?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the subscription definition version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationRequest {
  /**
   * The thing name.
   * @public
   */
  ThingName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Telemetry = {
  Off: "Off",
  On: "On",
} as const;

/**
 * @public
 */
export type Telemetry = (typeof Telemetry)[keyof typeof Telemetry];

/**
 * Configuration settings for running telemetry.
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * Synchronization status of the device reported configuration with the desired configuration.
   * @public
   */
  ConfigurationSyncStatus?: ConfigurationSyncStatus | undefined;

  /**
   * Configure telemetry to be on or off.
   * @public
   */
  Telemetry: Telemetry | undefined;
}

/**
 * Runtime configuration for a thing.
 * @public
 */
export interface RuntimeConfiguration {
  /**
   * Configuration for telemetry service.
   * @public
   */
  TelemetryConfiguration?: TelemetryConfiguration | undefined;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationResponse {
  /**
   * Runtime configuration for a thing.
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsRequest {
  /**
   * The ID of the bulk deployment.
   * @public
   */
  BulkDeploymentId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsResponse {
  /**
   * A list of the individual group deployments in the bulk deployment operation.
   * @public
   */
  Deployments?: BulkDeploymentResult[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBulkDeploymentsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBulkDeploymentsResponse {
  /**
   * A list of bulk deployments.
   * @public
   */
  BulkDeployments?: BulkDeployment[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsRequest {
  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListCoreDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsRequest {
  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * A list of deployments for the requested groups.
   * @public
   */
  Deployments?: Deployment[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsRequest {
  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsRequest {
  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesResponse {
  /**
   * A list of certificate authorities associated with the group.
   * @public
   */
  GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[] | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * Information about a group.
   * @public
   */
  Groups?: GroupInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupVersionsRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListLoggerDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLoggerDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsRequest {
  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsResponse {
  /**
   * Information about a definition.
   * @public
   */
  Definitions?: DefinitionInformation[] | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about a version.
   * @public
   */
  Versions?: VersionInformation[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pair for the resource tag.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information needed to reset deployments.
 * @public
 */
export interface ResetDeploymentsRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * If true, performs a best-effort only core reset.
   * @public
   */
  Force?: boolean | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ResetDeploymentsResponse {
  /**
   * The ARN of the deployment.
   * @public
   */
  DeploymentArn?: string | undefined;

  /**
   * The ID of the deployment.
   * @public
   */
  DeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface StartBulkDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   * @public
   */
  AmznClientToken?: string | undefined;

  /**
   * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
   * @public
   */
  InputFileUri: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartBulkDeploymentResponse {
  /**
   * The ARN of the bulk deployment.
   * @public
   */
  BulkDeploymentArn?: string | undefined;

  /**
   * The ID of the bulk deployment.
   * @public
   */
  BulkDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface StopBulkDeploymentRequest {
  /**
   * The ID of the bulk deployment.
   * @public
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface StopBulkDeploymentResponse {}

/**
 * A map of the key-value pairs for the resource tag.
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Connectivity information.
 * @public
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * A list of connectivity info.
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo[] | undefined;

  /**
   * The thing name.
   * @public
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * A message about the connectivity info update request.
   * @public
   */
  Message?: string | undefined;

  /**
   * The new version of the connectivity info.
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   * @public
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorDefinitionResponse {}

/**
 * @public
 */
export interface UpdateCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   * @public
   */
  CoreDefinitionId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCoreDefinitionResponse {}

/**
 * @public
 */
export interface UpdateDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   * @public
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceDefinitionResponse {}

/**
 * @public
 */
export interface UpdateFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   * @public
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionDefinitionResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {}

/**
 * @public
 */
export interface UpdateGroupCertificateConfigurationRequest {
  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   * @public
   */
  CertificateExpiryInMilliseconds?: string | undefined;

  /**
   * The ID of the Greengrass group.
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   * @public
   */
  CertificateAuthorityExpiryInMilliseconds?: string | undefined;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   * @public
   */
  CertificateExpiryInMilliseconds?: string | undefined;

  /**
   * The ID of the group certificate configuration.
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   * @public
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoggerDefinitionResponse {}

/**
 * @public
 */
export interface UpdateResourceDefinitionRequest {
  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the resource definition.
   * @public
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDefinitionResponse {}

/**
 * @public
 */
export interface UpdateSubscriptionDefinitionRequest {
  /**
   * The name of the definition.
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the subscription definition.
   * @public
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionDefinitionResponse {}

/**
 * Configuration settings for running telemetry.
 * @public
 */
export interface TelemetryConfigurationUpdate {
  /**
   * Configure telemetry to be on or off.
   * @public
   */
  Telemetry: Telemetry | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationRequest {
  /**
   * Configuration for telemetry service.
   * @public
   */
  TelemetryConfiguration?: TelemetryConfigurationUpdate | undefined;

  /**
   * The thing name.
   * @public
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationResponse {}

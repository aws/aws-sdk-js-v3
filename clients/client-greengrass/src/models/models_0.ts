// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GreengrassServiceException as __BaseException } from "./GreengrassServiceException";

/**
 * @public
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
  /**
   * @public
   * The endpoint for the Greengrass core. Can be an IP address or DNS.
   */
  HostAddress?: string;

  /**
   * @public
   * The ID of the connectivity information.
   */
  Id?: string;

  /**
   * @public
   * Metadata for this endpoint.
   */
  Metadata?: string;

  /**
   * @public
   * The port of the Greengrass core. Usually 8883.
   */
  PortNumber?: number;
}

/**
 * @public
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
  /**
   * @public
   * The ARN of the connector.
   */
  ConnectorArn: string | undefined;

  /**
   * @public
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   */
  Id: string | undefined;

  /**
   * @public
   * The parameters or configuration that the connector uses.
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 * Information about a core.
 */
export interface Core {
  /**
   * @public
   * The ARN of the certificate associated with the core.
   */
  CertificateArn: string | undefined;

  /**
   * @public
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * @public
   * If true, the core's local shadow is automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * @public
   * The ARN of the thing which is the core.
   */
  ThingArn: string | undefined;
}

/**
 * @public
 * Information about a definition.
 */
export interface DefinitionInformation {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Information about a device.
 */
export interface Device {
  /**
   * @public
   * The ARN of the certificate associated with the device.
   */
  CertificateArn: string | undefined;

  /**
   * @public
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * @public
   * If true, the device's local shadow will be automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * @public
   * The thing ARN of the device.
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
 * @public
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
  /**
   * @public
   * The group ID whose permissions are used to run a Lambda function.
   */
  Gid?: number;

  /**
   * @public
   * The user ID whose permissions are used to run a Lambda function.
   */
  Uid?: number;
}

/**
 * @public
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
  /**
   * @public
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode;

  /**
   * @public
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
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
 * @public
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
  /**
   * @public
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   */
  Permission?: Permission;

  /**
   * @public
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
  /**
   * @public
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   */
  AccessSysfs?: boolean;

  /**
   * @public
   * Configuration related to executing the Lambda function
   */
  Execution?: FunctionExecutionConfig;

  /**
   * @public
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?: ResourceAccessPolicy[];

  /**
   * @public
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: Record<string, string>;
}

/**
 * @public
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
  /**
   * @public
   * The expected encoding type of the input payload for the function. The default is ''json''.
   */
  EncodingType?: EncodingType;

  /**
   * @public
   * The environment configuration of the function.
   */
  Environment?: FunctionConfigurationEnvironment;

  /**
   * @public
   * The execution arguments.
   */
  ExecArgs?: string;

  /**
   * @public
   * The name of the function executable.
   */
  Executable?: string;

  /**
   * @public
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   */
  MemorySize?: number;

  /**
   * @public
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   */
  Pinned?: boolean;

  /**
   * @public
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   */
  Timeout?: number;

  /**
   * @public
   * The Lambda runtime supported by Greengrass which is to be used instead of the one specified in the Lambda function.
   */
  FunctionRuntimeOverride?: string;
}

/**
 * @public
 * Information about a Lambda function.
 */
export interface Function {
  /**
   * @public
   * The ARN of the Lambda function.
   */
  FunctionArn?: string;

  /**
   * @public
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: FunctionConfiguration;

  /**
   * @public
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;
}

/**
 * @public
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
  /**
   * @public
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * @public
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;
}

/**
 * @public
 * Information about a group.
 */
export interface GroupInformation {
  /**
   * @public
   * The ARN of the group.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the group was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the group.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the group was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the group.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the group.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the group.
   */
  Name?: string;
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
 * @public
 * Information about a logger
 */
export interface Logger {
  /**
   * @public
   * The component that will be subject to logging.
   */
  Component: LoggerComponent | undefined;

  /**
   * @public
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * @public
   * The level of the logs.
   */
  Level: LoggerLevel | undefined;

  /**
   * @public
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   */
  Space?: number;

  /**
   * @public
   * The type of log output which will be used.
   */
  Type: LoggerType | undefined;
}

/**
 * @public
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
  /**
   * @public
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   */
  AutoAddGroupOwner?: boolean;

  /**
   * @public
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   */
  GroupOwner?: string;
}

/**
 * @public
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
  /**
   * @public
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * @public
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   */
  SourcePath?: string;
}

/**
 * @public
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
  /**
   * @public
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * @public
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * @public
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   */
  SourcePath?: string;
}

/**
 * @public
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
  /**
   * @public
   * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
   */
  GroupOwner: string | undefined;

  /**
   * @public
   * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
   */
  GroupPermission: Permission | undefined;
}

/**
 * @public
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
  /**
   * @public
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * @public
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * @public
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   */
  S3Uri?: string;
}

/**
 * @public
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
  /**
   * @public
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * @public
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * @public
   * The ARN of the Amazon SageMaker training job that represents the source model.
   */
  SageMakerJobArn?: string;
}

/**
 * @public
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
  /**
   * @public
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   */
  ARN?: string;

  /**
   * @public
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: string[];
}

/**
 * @public
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
  /**
   * @public
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: LocalDeviceResourceData;

  /**
   * @public
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: LocalVolumeResourceData;

  /**
   * @public
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  /**
   * @public
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  /**
   * @public
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}

/**
 * @public
 * Information about a resource.
 */
export interface Resource {
  /**
   * @public
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Id: string | undefined;

  /**
   * @public
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Name: string | undefined;

  /**
   * @public
   * A container of data for all resource types.
   */
  ResourceDataContainer: ResourceDataContainer | undefined;
}

/**
 * @public
 * Information about a subscription.
 */
export interface Subscription {
  /**
   * @public
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * @public
   * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Source: string | undefined;

  /**
   * @public
   * The MQTT topic used to route the message.
   */
  Subject: string | undefined;

  /**
   * @public
   * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Target: string | undefined;
}

/**
 * @public
 * Information about a version.
 */
export interface VersionInformation {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface AssociateRoleToGroupRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateRoleToGroupResponse {
  /**
   * @public
   * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
   */
  AssociatedAt?: string;
}

/**
 * @public
 * Details about the error.
 */
export interface ErrorDetail {
  /**
   * @public
   * A detailed error code.
   */
  DetailedErrorCode?: string;

  /**
   * @public
   * A detailed error message.
   */
  DetailedErrorMessage?: string;
}

/**
 * @public
 * General error information.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * @public
   * A message containing information about the error.
   */
  Message?: string;
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
 * @public
 * General error information.
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * @public
   * A message containing information about the error.
   */
  Message?: string;
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
   * @public
   * The ARN of the service role you wish to associate with your account.
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * @public
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;
}

/**
 * @public
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
  /**
   * @public
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * @public
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;

  /**
   * @public
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;
}

/**
 * @public
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
  /**
   * @public
   * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
   */
  InvalidInputRecords?: number;

  /**
   * @public
   * The total number of group records from the input file that have been processed so far, or attempted.
   */
  RecordsProcessed?: number;

  /**
   * @public
   * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
   */
  RetryAttempts?: number;
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
 * @public
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
  /**
   * @public
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The ARN of the group deployment.
   */
  DeploymentArn?: string;

  /**
   * @public
   * The ID of the group deployment.
   */
  DeploymentId?: string;

  /**
   * @public
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * @public
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType;

  /**
   * @public
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * @public
   * The error message for a failed deployment
   */
  ErrorMessage?: string;

  /**
   * @public
   * The ARN of the Greengrass group.
   */
  GroupArn?: string;
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
 * @public
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
  /**
   * @public
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

/**
 * @public
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
  /**
   * @public
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

/**
 * @public
 */
export interface CreateConnectorDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the connector definition.
   */
  InitialVersion?: ConnectorDefinitionVersion;

  /**
   * @public
   * The name of the connector definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * @public
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the core definition.
   */
  InitialVersion?: CoreDefinitionVersion;

  /**
   * @public
   * The name of the core definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCoreDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * @public
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the deployment if you wish to redeploy a previous deployment.
   */
  DeploymentId?: string;

  /**
   * @public
   * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
   */
  DeploymentType: DeploymentType | undefined;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The ID of the group version to be deployed.
   */
  GroupVersionId?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * @public
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * @public
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

/**
 * @public
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
  /**
   * @public
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

/**
 * @public
 */
export interface CreateDeviceDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the device definition.
   */
  InitialVersion?: DeviceDefinitionVersion;

  /**
   * @public
   * The name of the device definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * @public
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
  /**
   * @public
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode;

  /**
   * @public
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

/**
 * @public
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
  /**
   * @public
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: FunctionDefaultExecutionConfig;
}

/**
 * @public
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
  /**
   * @public
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * @public
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

/**
 * @public
 */
export interface CreateFunctionDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the function definition.
   */
  InitialVersion?: FunctionDefinitionVersion;

  /**
   * @public
   * The name of the function definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFunctionDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * @public
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * @public
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

/**
 * @public
 */
export interface CreateFunctionDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a group version.
 */
export interface GroupVersion {
  /**
   * @public
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the group.
   */
  InitialVersion?: GroupVersion;

  /**
   * @public
   * The name of the group.
   */
  Name: string | undefined;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityResponse {
  /**
   * @public
   * The ARN of the group certificate authority.
   */
  GroupCertificateAuthorityArn?: string;
}

/**
 * @public
 */
export interface CreateGroupVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * @public
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

/**
 * @public
 */
export interface CreateGroupVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
  /**
   * @public
   * A list of loggers.
   */
  Loggers?: Logger[];
}

/**
 * @public
 */
export interface CreateLoggerDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the logger definition.
   */
  InitialVersion?: LoggerDefinitionVersion;

  /**
   * @public
   * The name of the logger definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * @public
   * A list of loggers.
   */
  Loggers?: Logger[];
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
  /**
   * @public
   * A list of resources.
   */
  Resources?: Resource[];
}

/**
 * @public
 */
export interface CreateResourceDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the resource definition.
   */
  InitialVersion?: ResourceDefinitionVersion;

  /**
   * @public
   * The name of the resource definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResourceDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * @public
   * A list of resources.
   */
  Resources?: Resource[];
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
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
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   */
  S3UrlSignerRole: string | undefined;

  /**
   * @public
   * The piece of software on the Greengrass core that will be updated.
   */
  SoftwareToUpdate: SoftwareToUpdate | undefined;

  /**
   * @public
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   */
  UpdateAgentLogLevel?: UpdateAgentLogLevel;

  /**
   * @public
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   */
  UpdateTargets: string[] | undefined;

  /**
   * @public
   * The architecture of the cores which are the targets of an update.
   */
  UpdateTargetsArchitecture: UpdateTargetsArchitecture | undefined;

  /**
   * @public
   * The operating system of the cores which are the targets of an update.
   */
  UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | undefined;
}

/**
 * @public
 */
export interface CreateSoftwareUpdateJobResponse {
  /**
   * @public
   * The IoT Job ARN corresponding to this update.
   */
  IotJobArn?: string;

  /**
   * @public
   * The IoT Job Id corresponding to this update.
   */
  IotJobId?: string;

  /**
   * @public
   * The software version installed on the device or devices after the update.
   */
  PlatformSoftwareVersion?: string;
}

/**
 * @public
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
  /**
   * @public
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * Information about the initial version of the subscription definition.
   */
  InitialVersion?: SubscriptionDefinitionVersion;

  /**
   * @public
   * The name of the subscription definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * @public
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteConnectorDefinitionRequest {
  /**
   * @public
   * The ID of the connector definition.
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
   * @public
   * The ID of the core definition.
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
   * @public
   * The ID of the device definition.
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
   * @public
   * The ID of the Lambda function definition.
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
   * @public
   * The ID of the Greengrass group.
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
   * @public
   * The ID of the logger definition.
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
   * @public
   * The ID of the resource definition.
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
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionDefinitionResponse {}

/**
 * @public
 * Information about a deployment.
 */
export interface Deployment {
  /**
   * @public
   * The time, in milliseconds since the epoch, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * @public
   * The ID of the deployment.
   */
  DeploymentId?: string;

  /**
   * @public
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType;

  /**
   * @public
   * The ARN of the group for this deployment.
   */
  GroupArn?: string;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupResponse {
  /**
   * @public
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   */
  DisassociatedAt?: string;
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
   * @public
   * The time when the service role was disassociated from the account.
   */
  DisassociatedAt?: string;
}

/**
 * @public
 */
export interface GetAssociatedRoleRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedRoleResponse {
  /**
   * @public
   * The time when the role was associated with the group.
   */
  AssociatedAt?: string;

  /**
   * @public
   * The ARN of the role that is associated with the group.
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusRequest {
  /**
   * @public
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusResponse {
  /**
   * @public
   * Relevant metrics on input records processed during bulk deployment.
   */
  BulkDeploymentMetrics?: BulkDeploymentMetrics;

  /**
   * @public
   * The status of the bulk deployment.
   */
  BulkDeploymentStatus?: BulkDeploymentStatus;

  /**
   * @public
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * @public
   * Error message
   */
  ErrorMessage?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetConnectivityInfoRequest {
  /**
   * @public
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoResponse {
  /**
   * @public
   * Connectivity info list.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * @public
   * A message about the connectivity info request.
   */
  Message?: string;
}

/**
 * @public
 */
export interface GetConnectorDefinitionRequest {
  /**
   * @public
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionRequest {
  /**
   * @public
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ConnectorDefinitionVersionId: string | undefined;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the connector definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the connector definition version.
   */
  Definition?: ConnectorDefinitionVersion;

  /**
   * @public
   * The ID of the connector definition version.
   */
  Id?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The version of the connector definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetCoreDefinitionRequest {
  /**
   * @public
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionRequest {
  /**
   * @public
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  CoreDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the core definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the core definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the core definition version.
   */
  Definition?: CoreDefinitionVersion;

  /**
   * @public
   * The ID of the core definition version.
   */
  Id?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The version of the core definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetDeploymentStatusRequest {
  /**
   * @public
   * The ID of the deployment.
   */
  DeploymentId: string | undefined;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStatusResponse {
  /**
   * @public
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * @public
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType;

  /**
   * @public
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * @public
   * Error message
   */
  ErrorMessage?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   */
  UpdatedAt?: string;
}

/**
 * @public
 */
export interface GetDeviceDefinitionRequest {
  /**
   * @public
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionRequest {
  /**
   * @public
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  DeviceDefinitionVersionId: string | undefined;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the device definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the device definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the device definition version.
   */
  Definition?: DeviceDefinitionVersion;

  /**
   * @public
   * The ID of the device definition version.
   */
  Id?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The version of the device definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetFunctionDefinitionRequest {
  /**
   * @public
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionRequest {
  /**
   * @public
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  FunctionDefinitionVersionId: string | undefined;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the function definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the function definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information on the definition.
   */
  Definition?: FunctionDefinitionVersion;

  /**
   * @public
   * The ID of the function definition version.
   */
  Id?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The version of the function definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityRequest {
  /**
   * @public
   * The ID of the certificate authority.
   */
  CertificateAuthorityId: string | undefined;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityResponse {
  /**
   * @public
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * @public
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;

  /**
   * @public
   * The PEM encoded certificate for the group.
   */
  PemEncodedCertificate?: string;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationResponse {
  /**
   * @public
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @public
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * @public
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

/**
 * @public
 */
export interface GetGroupVersionRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
   */
  GroupVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupVersionResponse {
  /**
   * @public
   * The ARN of the group version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the group version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the group version definition.
   */
  Definition?: GroupVersion;

  /**
   * @public
   * The ID of the group that the version is associated with.
   */
  Id?: string;

  /**
   * @public
   * The ID of the group version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetLoggerDefinitionRequest {
  /**
   * @public
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionRequest {
  /**
   * @public
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  LoggerDefinitionVersionId: string | undefined;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the logger definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the logger definition version.
   */
  Definition?: LoggerDefinitionVersion;

  /**
   * @public
   * The ID of the logger definition version.
   */
  Id?: string;

  /**
   * @public
   * The version of the logger definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetResourceDefinitionRequest {
  /**
   * @public
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionRequest {
  /**
   * @public
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ResourceDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionResponse {
  /**
   * @public
   * Arn of the resource definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the definition.
   */
  Definition?: ResourceDefinitionVersion;

  /**
   * @public
   * The ID of the resource definition version.
   */
  Id?: string;

  /**
   * @public
   * The version of the resource definition version.
   */
  Version?: string;
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
   * @public
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * @public
   * The ARN of the role which is associated with the account.
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionRequest {
  /**
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionResponse {
  /**
   * @public
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * The ID of the definition.
   */
  Id?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * @public
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * @public
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionRequest {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * @public
   * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  SubscriptionDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionResponse {
  /**
   * @public
   * The ARN of the subscription definition version.
   */
  Arn?: string;

  /**
   * @public
   * The time, in milliseconds since the epoch, when the subscription definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * @public
   * Information about the subscription definition version.
   */
  Definition?: SubscriptionDefinitionVersion;

  /**
   * @public
   * The ID of the subscription definition version.
   */
  Id?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The version of the subscription definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationRequest {
  /**
   * @public
   * The thing name.
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
 * @public
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfiguration {
  /**
   * @public
   * Synchronization status of the device reported configuration with the desired configuration.
   */
  ConfigurationSyncStatus?: ConfigurationSyncStatus;

  /**
   * @public
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | undefined;
}

/**
 * @public
 * Runtime configuration for a thing.
 */
export interface RuntimeConfiguration {
  /**
   * @public
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfiguration;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationResponse {
  /**
   * @public
   * Runtime configuration for a thing.
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsRequest {
  /**
   * @public
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsResponse {
  /**
   * @public
   * A list of the individual group deployments in the bulk deployment operation.
   */
  Deployments?: BulkDeploymentResult[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentsResponse {
  /**
   * @public
   * A list of bulk deployments.
   */
  BulkDeployments?: BulkDeployment[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsRequest {
  /**
   * @public
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListCoreDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsRequest {
  /**
   * @public
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * @public
   * A list of deployments for the requested groups.
   */
  Deployments?: Deployment[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsRequest {
  /**
   * @public
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListFunctionDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsRequest {
  /**
   * @public
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesResponse {
  /**
   * @public
   * A list of certificate authorities associated with the group.
   */
  GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * @public
   * Information about a group.
   */
  Groups?: GroupInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupVersionsRequest {
  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListLoggerDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsRequest {
  /**
   * @public
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListResourceDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsResponse {
  /**
   * @public
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsRequest {
  /**
   * @public
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsResponse {
  /**
   * @public
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * @public
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * The key-value pair for the resource tag.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * If true, performs a best-effort only core reset.
   */
  Force?: boolean;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ResetDeploymentsResponse {
  /**
   * @public
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * @public
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

/**
 * @public
 */
export interface StartBulkDeploymentRequest {
  /**
   * @public
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * @public
   * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
   */
  InputFileUri: string | undefined;

  /**
   * @public
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartBulkDeploymentResponse {
  /**
   * @public
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * @public
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;
}

/**
 * @public
 */
export interface StopBulkDeploymentRequest {
  /**
   * @public
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface StopBulkDeploymentResponse {}

/**
 * @public
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * The key-value pair for the resource tag.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * @public
   * A list of connectivity info.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * @public
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * @public
   * A message about the connectivity info update request.
   */
  Message?: string;

  /**
   * @public
   * The new version of the connectivity info.
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateConnectorDefinitionRequest {
  /**
   * @public
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * @public
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupCertificateConfigurationResponse {
  /**
   * @public
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @public
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * @public
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

/**
 * @public
 */
export interface UpdateLoggerDefinitionRequest {
  /**
   * @public
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * @public
   * The name of the definition.
   */
  Name?: string;
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
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * The ID of the resource definition.
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
   * @public
   * The name of the definition.
   */
  Name?: string;

  /**
   * @public
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionDefinitionResponse {}

/**
 * @public
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfigurationUpdate {
  /**
   * @public
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationRequest {
  /**
   * @public
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfigurationUpdate;

  /**
   * @public
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationResponse {}

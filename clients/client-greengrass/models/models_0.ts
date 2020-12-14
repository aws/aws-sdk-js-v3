import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
  /**
   * The endpoint for the Greengrass core. Can be an IP address or DNS.
   */
  HostAddress?: string;

  /**
   * The ID of the connectivity information.
   */
  Id?: string;

  /**
   * Metadata for this endpoint.
   */
  Metadata?: string;

  /**
   * The port of the Greengrass core. Usually 8883.
   */
  PortNumber?: number;
}

export namespace ConnectivityInfo {
  export const filterSensitiveLog = (obj: ConnectivityInfo): any => ({
    ...obj,
  });
}

/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
  /**
   * The ARN of the connector.
   */
  ConnectorArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   */
  Id: string | undefined;

  /**
   * The parameters or configuration that the connector uses.
   */
  Parameters?: { [key: string]: string };
}

export namespace Connector {
  export const filterSensitiveLog = (obj: Connector): any => ({
    ...obj,
  });
}

/**
 * Information about a core.
 */
export interface Core {
  /**
   * The ARN of the certificate associated with the core.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the core's local shadow is automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The ARN of the thing which is the core.
   */
  ThingArn: string | undefined;
}

export namespace Core {
  export const filterSensitiveLog = (obj: Core): any => ({
    ...obj,
  });
}

/**
 * Information about a definition.
 */
export interface DefinitionInformation {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  Tags?: { [key: string]: string };
}

export namespace DefinitionInformation {
  export const filterSensitiveLog = (obj: DefinitionInformation): any => ({
    ...obj,
  });
}

/**
 * Information about a device.
 */
export interface Device {
  /**
   * The ARN of the certificate associated with the device.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the device's local shadow will be automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The thing ARN of the device.
   */
  ThingArn: string | undefined;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

export enum EncodingType {
  binary = "binary",
  json = "json",
}

export enum FunctionIsolationMode {
  GreengrassContainer = "GreengrassContainer",
  NoContainer = "NoContainer",
}

/**
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
  /**
   * The group ID whose permissions are used to run a Lambda function.
   */
  Gid?: number;

  /**
   * The user ID whose permissions are used to run a Lambda function.
   */
  Uid?: number;
}

export namespace FunctionRunAsConfig {
  export const filterSensitiveLog = (obj: FunctionRunAsConfig): any => ({
    ...obj,
  });
}

/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

export namespace FunctionExecutionConfig {
  export const filterSensitiveLog = (obj: FunctionExecutionConfig): any => ({
    ...obj,
  });
}

export enum Permission {
  ro = "ro",
  rw = "rw",
}

/**
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
  /**
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   */
  Permission?: Permission | string;

  /**
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   */
  ResourceId: string | undefined;
}

export namespace ResourceAccessPolicy {
  export const filterSensitiveLog = (obj: ResourceAccessPolicy): any => ({
    ...obj,
  });
}

/**
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
  /**
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   */
  AccessSysfs?: boolean;

  /**
   * Configuration related to executing the Lambda function
   */
  Execution?: FunctionExecutionConfig;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?: ResourceAccessPolicy[];

  /**
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: { [key: string]: string };
}

export namespace FunctionConfigurationEnvironment {
  export const filterSensitiveLog = (obj: FunctionConfigurationEnvironment): any => ({
    ...obj,
  });
}

/**
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
  /**
   * The expected encoding type of the input payload for the function. The default is ''json''.
   */
  EncodingType?: EncodingType | string;

  /**
   * The environment configuration of the function.
   */
  Environment?: FunctionConfigurationEnvironment;

  /**
   * The execution arguments.
   */
  ExecArgs?: string;

  /**
   * The name of the function executable.
   */
  Executable?: string;

  /**
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   */
  MemorySize?: number;

  /**
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   */
  Pinned?: boolean;

  /**
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   */
  Timeout?: number;
}

export namespace FunctionConfiguration {
  export const filterSensitiveLog = (obj: FunctionConfiguration): any => ({
    ...obj,
  });
}

/**
 * Information about a Lambda function.
 */
export interface Function {
  /**
   * The ARN of the Lambda function.
   */
  FunctionArn?: string;

  /**
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: FunctionConfiguration;

  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;
}

export namespace Function {
  export const filterSensitiveLog = (obj: Function): any => ({
    ...obj,
  });
}

/**
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;
}

export namespace GroupCertificateAuthorityProperties {
  export const filterSensitiveLog = (obj: GroupCertificateAuthorityProperties): any => ({
    ...obj,
  });
}

/**
 * Information about a group.
 */
export interface GroupInformation {
  /**
   * The ARN of the group.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the group.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the group.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the group.
   */
  LatestVersionArn?: string;

  /**
   * The name of the group.
   */
  Name?: string;
}

export namespace GroupInformation {
  export const filterSensitiveLog = (obj: GroupInformation): any => ({
    ...obj,
  });
}

export enum LoggerComponent {
  GreengrassSystem = "GreengrassSystem",
  Lambda = "Lambda",
}

export enum LoggerLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  WARN = "WARN",
}

export enum LoggerType {
  AWSCloudWatch = "AWSCloudWatch",
  FileSystem = "FileSystem",
}

/**
 * Information about a logger
 */
export interface Logger {
  /**
   * The component that will be subject to logging.
   */
  Component: LoggerComponent | string | undefined;

  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The level of the logs.
   */
  Level: LoggerLevel | string | undefined;

  /**
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   */
  Space?: number;

  /**
   * The type of log output which will be used.
   */
  Type: LoggerType | string | undefined;
}

export namespace Logger {
  export const filterSensitiveLog = (obj: Logger): any => ({
    ...obj,
  });
}

/**
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
  /**
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   */
  AutoAddGroupOwner?: boolean;

  /**
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   */
  GroupOwner?: string;
}

export namespace GroupOwnerSetting {
  export const filterSensitiveLog = (obj: GroupOwnerSetting): any => ({
    ...obj,
  });
}

/**
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
  /**
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   */
  SourcePath?: string;
}

export namespace LocalDeviceResourceData {
  export const filterSensitiveLog = (obj: LocalDeviceResourceData): any => ({
    ...obj,
  });
}

/**
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   */
  SourcePath?: string;
}

export namespace LocalVolumeResourceData {
  export const filterSensitiveLog = (obj: LocalVolumeResourceData): any => ({
    ...obj,
  });
}

/**
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
  /**
   * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
   */
  GroupOwner: string | undefined;

  /**
   * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
   */
  GroupPermission: Permission | string | undefined;
}

export namespace ResourceDownloadOwnerSetting {
  export const filterSensitiveLog = (obj: ResourceDownloadOwnerSetting): any => ({
    ...obj,
  });
}

/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   */
  S3Uri?: string;
}

export namespace S3MachineLearningModelResourceData {
  export const filterSensitiveLog = (obj: S3MachineLearningModelResourceData): any => ({
    ...obj,
  });
}

/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The ARN of the Amazon SageMaker training job that represents the source model.
   */
  SageMakerJobArn?: string;
}

export namespace SageMakerMachineLearningModelResourceData {
  export const filterSensitiveLog = (obj: SageMakerMachineLearningModelResourceData): any => ({
    ...obj,
  });
}

/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
  /**
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   */
  ARN?: string;

  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: string[];
}

export namespace SecretsManagerSecretResourceData {
  export const filterSensitiveLog = (obj: SecretsManagerSecretResourceData): any => ({
    ...obj,
  });
}

/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
  /**
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: LocalDeviceResourceData;

  /**
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: LocalVolumeResourceData;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}

export namespace ResourceDataContainer {
  export const filterSensitiveLog = (obj: ResourceDataContainer): any => ({
    ...obj,
  });
}

/**
 * Information about a resource.
 */
export interface Resource {
  /**
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Id: string | undefined;

  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Name: string | undefined;

  /**
   * A container of data for all resource types.
   */
  ResourceDataContainer: ResourceDataContainer | undefined;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * Information about a subscription.
 */
export interface Subscription {
  /**
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Source: string | undefined;

  /**
   * The MQTT topic used to route the message.
   */
  Subject: string | undefined;

  /**
   * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Target: string | undefined;
}

export namespace Subscription {
  export const filterSensitiveLog = (obj: Subscription): any => ({
    ...obj,
  });
}

/**
 * Information about a version.
 */
export interface VersionInformation {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace VersionInformation {
  export const filterSensitiveLog = (obj: VersionInformation): any => ({
    ...obj,
  });
}

export interface AssociateRoleToGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
   */
  RoleArn: string | undefined;
}

export namespace AssociateRoleToGroupRequest {
  export const filterSensitiveLog = (obj: AssociateRoleToGroupRequest): any => ({
    ...obj,
  });
}

export interface AssociateRoleToGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
   */
  AssociatedAt?: string;
}

export namespace AssociateRoleToGroupResponse {
  export const filterSensitiveLog = (obj: AssociateRoleToGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Details about the error.
 */
export interface ErrorDetail {
  /**
   * A detailed error code.
   */
  DetailedErrorCode?: string;

  /**
   * A detailed error message.
   */
  DetailedErrorMessage?: string;
}

export namespace ErrorDetail {
  export const filterSensitiveLog = (obj: ErrorDetail): any => ({
    ...obj,
  });
}

/**
 * General error information.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * General error information.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

export interface AssociateServiceRoleToAccountRequest {
  /**
   * The ARN of the service role you wish to associate with your account.
   */
  RoleArn: string | undefined;
}

export namespace AssociateServiceRoleToAccountRequest {
  export const filterSensitiveLog = (obj: AssociateServiceRoleToAccountRequest): any => ({
    ...obj,
  });
}

export interface AssociateServiceRoleToAccountResponse {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;
}

export namespace AssociateServiceRoleToAccountResponse {
  export const filterSensitiveLog = (obj: AssociateServiceRoleToAccountResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;
}

export namespace BulkDeployment {
  export const filterSensitiveLog = (obj: BulkDeployment): any => ({
    ...obj,
  });
}

/**
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
  /**
   * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
   */
  InvalidInputRecords?: number;

  /**
   * The total number of group records from the input file that have been processed so far, or attempted.
   */
  RecordsProcessed?: number;

  /**
   * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
   */
  RetryAttempts?: number;
}

export namespace BulkDeploymentMetrics {
  export const filterSensitiveLog = (obj: BulkDeploymentMetrics): any => ({
    ...obj,
  });
}

export enum DeploymentType {
  ForceResetDeployment = "ForceResetDeployment",
  NewDeployment = "NewDeployment",
  Redeployment = "Redeployment",
  ResetDeployment = "ResetDeployment",
}

/**
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the group deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the group deployment.
   */
  DeploymentId?: string;

  /**
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * The error message for a failed deployment
   */
  ErrorMessage?: string;

  /**
   * The ARN of the Greengrass group.
   */
  GroupArn?: string;
}

export namespace BulkDeploymentResult {
  export const filterSensitiveLog = (obj: BulkDeploymentResult): any => ({
    ...obj,
  });
}

export enum BulkDeploymentStatus {
  Completed = "Completed",
  Failed = "Failed",
  Initializing = "Initializing",
  Running = "Running",
  Stopped = "Stopped",
  Stopping = "Stopping",
}

export enum ConfigurationSyncStatus {
  InSync = "InSync",
  OutOfSync = "OutOfSync",
}

/**
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

export namespace ConnectorDefinitionVersion {
  export const filterSensitiveLog = (obj: ConnectorDefinitionVersion): any => ({
    ...obj,
  });
}

/**
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

export namespace CoreDefinitionVersion {
  export const filterSensitiveLog = (obj: CoreDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateConnectorDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the connector definition.
   */
  InitialVersion?: ConnectorDefinitionVersion;

  /**
   * The name of the connector definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateConnectorDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateConnectorDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateConnectorDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateConnectorDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateConnectorDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

export namespace CreateConnectorDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateConnectorDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectorDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateConnectorDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateConnectorDefinitionVersionResponse): any => ({
    ...obj,
  });
}

/**
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the core definition.
   */
  InitialVersion?: CoreDefinitionVersion;

  /**
   * The name of the core definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateCoreDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateCoreDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateCoreDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateCoreDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateCoreDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

export namespace CreateCoreDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateCoreDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateCoreDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateCoreDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateCoreDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface CreateDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the deployment if you wish to redeploy a previous deployment.
   */
  DeploymentId?: string;

  /**
   * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
   */
  DeploymentType: DeploymentType | string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version to be deployed.
   */
  GroupVersionId?: string;
}

export namespace CreateDeploymentRequest {
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
}

export interface CreateDeploymentResponse {
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

export namespace CreateDeploymentResponse {
  export const filterSensitiveLog = (obj: CreateDeploymentResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

export namespace DeviceDefinitionVersion {
  export const filterSensitiveLog = (obj: DeviceDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateDeviceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the device definition.
   */
  InitialVersion?: DeviceDefinitionVersion;

  /**
   * The name of the device definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateDeviceDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateDeviceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateDeviceDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateDeviceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateDeviceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

export namespace CreateDeviceDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateDeviceDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateDeviceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateDeviceDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateDeviceDefinitionVersionResponse): any => ({
    ...obj,
  });
}

/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

export namespace FunctionDefaultExecutionConfig {
  export const filterSensitiveLog = (obj: FunctionDefaultExecutionConfig): any => ({
    ...obj,
  });
}

/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
  /**
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: FunctionDefaultExecutionConfig;
}

export namespace FunctionDefaultConfig {
  export const filterSensitiveLog = (obj: FunctionDefaultConfig): any => ({
    ...obj,
  });
}

/**
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

export namespace FunctionDefinitionVersion {
  export const filterSensitiveLog = (obj: FunctionDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateFunctionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the function definition.
   */
  InitialVersion?: FunctionDefinitionVersion;

  /**
   * The name of the function definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateFunctionDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateFunctionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateFunctionDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateFunctionDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

export namespace CreateFunctionDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateFunctionDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateFunctionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateFunctionDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateFunctionDefinitionVersionResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a group version.
 */
export interface GroupVersion {
  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

export namespace GroupVersion {
  export const filterSensitiveLog = (obj: GroupVersion): any => ({
    ...obj,
  });
}

export interface CreateGroupRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the group.
   */
  InitialVersion?: GroupVersion;

  /**
   * The name of the group.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateGroupCertificateAuthorityRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace CreateGroupCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: CreateGroupCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupCertificateAuthorityResponse {
  /**
   * The ARN of the group certificate authority.
   */
  GroupCertificateAuthorityArn?: string;
}

export namespace CreateGroupCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: CreateGroupCertificateAuthorityResponse): any => ({
    ...obj,
  });
}

export interface CreateGroupVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

export namespace CreateGroupVersionRequest {
  export const filterSensitiveLog = (obj: CreateGroupVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateGroupVersionResponse {
  export const filterSensitiveLog = (obj: CreateGroupVersionResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

export namespace LoggerDefinitionVersion {
  export const filterSensitiveLog = (obj: LoggerDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateLoggerDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the logger definition.
   */
  InitialVersion?: LoggerDefinitionVersion;

  /**
   * The name of the logger definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateLoggerDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateLoggerDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateLoggerDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateLoggerDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateLoggerDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

export namespace CreateLoggerDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateLoggerDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateLoggerDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateLoggerDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateLoggerDefinitionVersionResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

export namespace ResourceDefinitionVersion {
  export const filterSensitiveLog = (obj: ResourceDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateResourceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the resource definition.
   */
  InitialVersion?: ResourceDefinitionVersion;

  /**
   * The name of the resource definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateResourceDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateResourceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateResourceDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateResourceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateResourceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

export namespace CreateResourceDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateResourceDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateResourceDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateResourceDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export enum SoftwareToUpdate {
  core = "core",
  ota_agent = "ota_agent",
}

export enum UpdateAgentLogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  NONE = "NONE",
  TRACE = "TRACE",
  VERBOSE = "VERBOSE",
  WARN = "WARN",
}

export enum UpdateTargetsArchitecture {
  aarch64 = "aarch64",
  armv6l = "armv6l",
  armv7l = "armv7l",
  x86_64 = "x86_64",
}

export enum UpdateTargetsOperatingSystem {
  amazon_linux = "amazon_linux",
  openwrt = "openwrt",
  raspbian = "raspbian",
  ubuntu = "ubuntu",
}

export interface CreateSoftwareUpdateJobRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   */
  S3UrlSignerRole: string | undefined;

  /**
   * The piece of software on the Greengrass core that will be updated.
   */
  SoftwareToUpdate: SoftwareToUpdate | string | undefined;

  /**
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   */
  UpdateAgentLogLevel?: UpdateAgentLogLevel | string;

  /**
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   */
  UpdateTargets: string[] | undefined;

  /**
   * The architecture of the cores which are the targets of an update.
   */
  UpdateTargetsArchitecture: UpdateTargetsArchitecture | string | undefined;

  /**
   * The operating system of the cores which are the targets of an update.
   */
  UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | string | undefined;
}

export namespace CreateSoftwareUpdateJobRequest {
  export const filterSensitiveLog = (obj: CreateSoftwareUpdateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateSoftwareUpdateJobResponse {
  /**
   * The IoT Job ARN corresponding to this update.
   */
  IotJobArn?: string;

  /**
   * The IoT Job Id corresponding to this update.
   */
  IotJobId?: string;

  /**
   * The software version installed on the device or devices after the update.
   */
  PlatformSoftwareVersion?: string;
}

export namespace CreateSoftwareUpdateJobResponse {
  export const filterSensitiveLog = (obj: CreateSoftwareUpdateJobResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

export namespace SubscriptionDefinitionVersion {
  export const filterSensitiveLog = (obj: SubscriptionDefinitionVersion): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the subscription definition.
   */
  InitialVersion?: SubscriptionDefinitionVersion;

  /**
   * The name of the subscription definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateSubscriptionDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateSubscriptionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateSubscriptionDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateSubscriptionDefinitionResponse): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

export namespace CreateSubscriptionDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: CreateSubscriptionDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateSubscriptionDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: CreateSubscriptionDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

export namespace DeleteConnectorDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteConnectorDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectorDefinitionResponse {}

export namespace DeleteConnectorDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteConnectorDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

export namespace DeleteCoreDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteCoreDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteCoreDefinitionResponse {}

export namespace DeleteCoreDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteCoreDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

export namespace DeleteDeviceDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteDeviceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceDefinitionResponse {}

export namespace DeleteDeviceDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

export namespace DeleteFunctionDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteFunctionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionDefinitionResponse {}

export namespace DeleteFunctionDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteFunctionDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResponse {}

export namespace DeleteGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

export namespace DeleteLoggerDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteLoggerDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoggerDefinitionResponse {}

export namespace DeleteLoggerDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteLoggerDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace DeleteResourceDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteResourceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceDefinitionResponse {}

export namespace DeleteResourceDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteResourceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace DeleteSubscriptionDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteSubscriptionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubscriptionDefinitionResponse {}

export namespace DeleteSubscriptionDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteSubscriptionDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * Information about a deployment.
 */
export interface Deployment {
  /**
   * The time, in milliseconds since the epoch, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * The ARN of the group for this deployment.
   */
  GroupArn?: string;
}

export namespace Deployment {
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj,
  });
}

export interface DisassociateRoleFromGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace DisassociateRoleFromGroupRequest {
  export const filterSensitiveLog = (obj: DisassociateRoleFromGroupRequest): any => ({
    ...obj,
  });
}

export interface DisassociateRoleFromGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   */
  DisassociatedAt?: string;
}

export namespace DisassociateRoleFromGroupResponse {
  export const filterSensitiveLog = (obj: DisassociateRoleFromGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateServiceRoleFromAccountRequest {}

export namespace DisassociateServiceRoleFromAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateServiceRoleFromAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateServiceRoleFromAccountResponse {
  /**
   * The time when the service role was disassociated from the account.
   */
  DisassociatedAt?: string;
}

export namespace DisassociateServiceRoleFromAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateServiceRoleFromAccountResponse): any => ({
    ...obj,
  });
}

export interface GetAssociatedRoleRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetAssociatedRoleRequest {
  export const filterSensitiveLog = (obj: GetAssociatedRoleRequest): any => ({
    ...obj,
  });
}

export interface GetAssociatedRoleResponse {
  /**
   * The time when the role was associated with the group.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role that is associated with the group.
   */
  RoleArn?: string;
}

export namespace GetAssociatedRoleResponse {
  export const filterSensitiveLog = (obj: GetAssociatedRoleResponse): any => ({
    ...obj,
  });
}

export interface GetBulkDeploymentStatusRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

export namespace GetBulkDeploymentStatusRequest {
  export const filterSensitiveLog = (obj: GetBulkDeploymentStatusRequest): any => ({
    ...obj,
  });
}

export interface GetBulkDeploymentStatusResponse {
  /**
   * Relevant metrics on input records processed during bulk deployment.
   */
  BulkDeploymentMetrics?: BulkDeploymentMetrics;

  /**
   * The status of the bulk deployment.
   */
  BulkDeploymentStatus?: BulkDeploymentStatus | string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetBulkDeploymentStatusResponse {
  export const filterSensitiveLog = (obj: GetBulkDeploymentStatusResponse): any => ({
    ...obj,
  });
}

export interface GetConnectivityInfoRequest {
  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace GetConnectivityInfoRequest {
  export const filterSensitiveLog = (obj: GetConnectivityInfoRequest): any => ({
    ...obj,
  });
}

export interface GetConnectivityInfoResponse {
  /**
   * Connectivity info list.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * A message about the connectivity info request.
   */
  Message?: string;
}

export namespace GetConnectivityInfoResponse {
  export const filterSensitiveLog = (obj: GetConnectivityInfoResponse): any => ({
    ...obj,
  });
}

export interface GetConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

export namespace GetConnectorDefinitionRequest {
  export const filterSensitiveLog = (obj: GetConnectorDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetConnectorDefinitionResponse {
  export const filterSensitiveLog = (obj: GetConnectorDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetConnectorDefinitionVersionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ConnectorDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetConnectorDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetConnectorDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetConnectorDefinitionVersionResponse {
  /**
   * The ARN of the connector definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the connector definition version.
   */
  Definition?: ConnectorDefinitionVersion;

  /**
   * The ID of the connector definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the connector definition version.
   */
  Version?: string;
}

export namespace GetConnectorDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetConnectorDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

export namespace GetCoreDefinitionRequest {
  export const filterSensitiveLog = (obj: GetCoreDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetCoreDefinitionResponse {
  export const filterSensitiveLog = (obj: GetCoreDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetCoreDefinitionVersionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  CoreDefinitionVersionId: string | undefined;
}

export namespace GetCoreDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetCoreDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetCoreDefinitionVersionResponse {
  /**
   * The ARN of the core definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the core definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the core definition version.
   */
  Definition?: CoreDefinitionVersion;

  /**
   * The ID of the core definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the core definition version.
   */
  Version?: string;
}

export namespace GetCoreDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetCoreDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetDeploymentStatusRequest {
  /**
   * The ID of the deployment.
   */
  DeploymentId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetDeploymentStatusRequest {
  export const filterSensitiveLog = (obj: GetDeploymentStatusRequest): any => ({
    ...obj,
  });
}

export interface GetDeploymentStatusResponse {
  /**
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   */
  UpdatedAt?: string;
}

export namespace GetDeploymentStatusResponse {
  export const filterSensitiveLog = (obj: GetDeploymentStatusResponse): any => ({
    ...obj,
  });
}

export interface GetDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

export namespace GetDeviceDefinitionRequest {
  export const filterSensitiveLog = (obj: GetDeviceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetDeviceDefinitionResponse {
  export const filterSensitiveLog = (obj: GetDeviceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetDeviceDefinitionVersionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  DeviceDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetDeviceDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetDeviceDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceDefinitionVersionResponse {
  /**
   * The ARN of the device definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the device definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the device definition version.
   */
  Definition?: DeviceDefinitionVersion;

  /**
   * The ID of the device definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the device definition version.
   */
  Version?: string;
}

export namespace GetDeviceDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetDeviceDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

export namespace GetFunctionDefinitionRequest {
  export const filterSensitiveLog = (obj: GetFunctionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetFunctionDefinitionResponse {
  export const filterSensitiveLog = (obj: GetFunctionDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionDefinitionVersionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  FunctionDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetFunctionDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetFunctionDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionDefinitionVersionResponse {
  /**
   * The ARN of the function definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the function definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information on the definition.
   */
  Definition?: FunctionDefinitionVersion;

  /**
   * The ID of the function definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the function definition version.
   */
  Version?: string;
}

export namespace GetFunctionDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetFunctionDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj,
  });
}

export interface GetGroupResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetGroupResponse {
  export const filterSensitiveLog = (obj: GetGroupResponse): any => ({
    ...obj,
  });
}

export interface GetGroupCertificateAuthorityRequest {
  /**
   * The ID of the certificate authority.
   */
  CertificateAuthorityId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: GetGroupCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface GetGroupCertificateAuthorityResponse {
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;

  /**
   * The PEM encoded certificate for the group.
   */
  PemEncodedCertificate?: string;
}

export namespace GetGroupCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: GetGroupCertificateAuthorityResponse): any => ({
    ...obj,
  });
}

export interface GetGroupCertificateConfigurationRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupCertificateConfigurationRequest {
  export const filterSensitiveLog = (obj: GetGroupCertificateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

export namespace GetGroupCertificateConfigurationResponse {
  export const filterSensitiveLog = (obj: GetGroupCertificateConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetGroupVersionRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
   */
  GroupVersionId: string | undefined;
}

export namespace GetGroupVersionRequest {
  export const filterSensitiveLog = (obj: GetGroupVersionRequest): any => ({
    ...obj,
  });
}

export interface GetGroupVersionResponse {
  /**
   * The ARN of the group version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the group version definition.
   */
  Definition?: GroupVersion;

  /**
   * The ID of the group that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the group version.
   */
  Version?: string;
}

export namespace GetGroupVersionResponse {
  export const filterSensitiveLog = (obj: GetGroupVersionResponse): any => ({
    ...obj,
  });
}

export interface GetLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

export namespace GetLoggerDefinitionRequest {
  export const filterSensitiveLog = (obj: GetLoggerDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetLoggerDefinitionResponse {
  export const filterSensitiveLog = (obj: GetLoggerDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetLoggerDefinitionVersionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  LoggerDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetLoggerDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetLoggerDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetLoggerDefinitionVersionResponse {
  /**
   * The ARN of the logger definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the logger definition version.
   */
  Definition?: LoggerDefinitionVersion;

  /**
   * The ID of the logger definition version.
   */
  Id?: string;

  /**
   * The version of the logger definition version.
   */
  Version?: string;
}

export namespace GetLoggerDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetLoggerDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace GetResourceDefinitionRequest {
  export const filterSensitiveLog = (obj: GetResourceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetResourceDefinitionResponse {
  export const filterSensitiveLog = (obj: GetResourceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetResourceDefinitionVersionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ResourceDefinitionVersionId: string | undefined;
}

export namespace GetResourceDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetResourceDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetResourceDefinitionVersionResponse {
  /**
   * Arn of the resource definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the definition.
   */
  Definition?: ResourceDefinitionVersion;

  /**
   * The ID of the resource definition version.
   */
  Id?: string;

  /**
   * The version of the resource definition version.
   */
  Version?: string;
}

export namespace GetResourceDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetResourceDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetServiceRoleForAccountRequest {}

export namespace GetServiceRoleForAccountRequest {
  export const filterSensitiveLog = (obj: GetServiceRoleForAccountRequest): any => ({
    ...obj,
  });
}

export interface GetServiceRoleForAccountResponse {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role which is associated with the account.
   */
  RoleArn?: string;
}

export namespace GetServiceRoleForAccountResponse {
  export const filterSensitiveLog = (obj: GetServiceRoleForAccountResponse): any => ({
    ...obj,
  });
}

export interface GetSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace GetSubscriptionDefinitionRequest {
  export const filterSensitiveLog = (obj: GetSubscriptionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetSubscriptionDefinitionResponse {
  export const filterSensitiveLog = (obj: GetSubscriptionDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetSubscriptionDefinitionVersionRequest {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  SubscriptionDefinitionVersionId: string | undefined;
}

export namespace GetSubscriptionDefinitionVersionRequest {
  export const filterSensitiveLog = (obj: GetSubscriptionDefinitionVersionRequest): any => ({
    ...obj,
  });
}

export interface GetSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the subscription definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the subscription definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the subscription definition version.
   */
  Definition?: SubscriptionDefinitionVersion;

  /**
   * The ID of the subscription definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the subscription definition version.
   */
  Version?: string;
}

export namespace GetSubscriptionDefinitionVersionResponse {
  export const filterSensitiveLog = (obj: GetSubscriptionDefinitionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetThingRuntimeConfigurationRequest {
  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace GetThingRuntimeConfigurationRequest {
  export const filterSensitiveLog = (obj: GetThingRuntimeConfigurationRequest): any => ({
    ...obj,
  });
}

export enum Telemetry {
  Off = "Off",
  On = "On",
}

/**
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfiguration {
  /**
   * Synchronization status of the device reported configuration with the desired configuration.
   */
  ConfigurationSyncStatus?: ConfigurationSyncStatus | string;

  /**
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | string | undefined;
}

export namespace TelemetryConfiguration {
  export const filterSensitiveLog = (obj: TelemetryConfiguration): any => ({
    ...obj,
  });
}

/**
 * Runtime configuration for a thing.
 */
export interface RuntimeConfiguration {
  /**
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfiguration;
}

export namespace RuntimeConfiguration {
  export const filterSensitiveLog = (obj: RuntimeConfiguration): any => ({
    ...obj,
  });
}

export interface GetThingRuntimeConfigurationResponse {
  /**
   * Runtime configuration for a thing.
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export namespace GetThingRuntimeConfigurationResponse {
  export const filterSensitiveLog = (obj: GetThingRuntimeConfigurationResponse): any => ({
    ...obj,
  });
}

export interface ListBulkDeploymentDetailedReportsRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentDetailedReportsRequest {
  export const filterSensitiveLog = (obj: ListBulkDeploymentDetailedReportsRequest): any => ({
    ...obj,
  });
}

export interface ListBulkDeploymentDetailedReportsResponse {
  /**
   * A list of the individual group deployments in the bulk deployment operation.
   */
  Deployments?: BulkDeploymentResult[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentDetailedReportsResponse {
  export const filterSensitiveLog = (obj: ListBulkDeploymentDetailedReportsResponse): any => ({
    ...obj,
  });
}

export interface ListBulkDeploymentsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentsRequest {
  export const filterSensitiveLog = (obj: ListBulkDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface ListBulkDeploymentsResponse {
  /**
   * A list of bulk deployments.
   */
  BulkDeployments?: BulkDeployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentsResponse {
  export const filterSensitiveLog = (obj: ListBulkDeploymentsResponse): any => ({
    ...obj,
  });
}

export interface ListConnectorDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListConnectorDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListConnectorDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListConnectorDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListConnectorDefinitionVersionsRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListConnectorDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListConnectorDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListConnectorDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListConnectorDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListCoreDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListCoreDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListCoreDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListCoreDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListCoreDefinitionVersionsRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListCoreDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListCoreDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListCoreDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListCoreDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListDeploymentsRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeploymentsRequest {
  export const filterSensitiveLog = (obj: ListDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface ListDeploymentsResponse {
  /**
   * A list of deployments for the requested groups.
   */
  Deployments?: Deployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeploymentsResponse {
  export const filterSensitiveLog = (obj: ListDeploymentsResponse): any => ({
    ...obj,
  });
}

export interface ListDeviceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListDeviceDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListDeviceDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListDeviceDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListDeviceDefinitionVersionsRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListDeviceDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListDeviceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListDeviceDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListDeviceDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListFunctionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListFunctionDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListFunctionDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListFunctionDefinitionVersionsRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListFunctionDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListFunctionDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListFunctionDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListGroupCertificateAuthoritiesRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace ListGroupCertificateAuthoritiesRequest {
  export const filterSensitiveLog = (obj: ListGroupCertificateAuthoritiesRequest): any => ({
    ...obj,
  });
}

export interface ListGroupCertificateAuthoritiesResponse {
  /**
   * A list of certificate authorities associated with the group.
   */
  GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}

export namespace ListGroupCertificateAuthoritiesResponse {
  export const filterSensitiveLog = (obj: ListGroupCertificateAuthoritiesResponse): any => ({
    ...obj,
  });
}

export interface ListGroupsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListGroupsResponse {
  /**
   * Information about a group.
   */
  Groups?: GroupInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListGroupVersionsRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupVersionsRequest {
  export const filterSensitiveLog = (obj: ListGroupVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListGroupVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListGroupVersionsResponse {
  export const filterSensitiveLog = (obj: ListGroupVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListLoggerDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListLoggerDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListLoggerDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListLoggerDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListLoggerDefinitionVersionsRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListLoggerDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListLoggerDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListLoggerDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListLoggerDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListResourceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListResourceDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListResourceDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListResourceDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListResourceDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListResourceDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListResourceDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace ListResourceDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListResourceDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListResourceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListResourceDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListResourceDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListSubscriptionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListSubscriptionDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListSubscriptionDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListSubscriptionDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListSubscriptionDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListSubscriptionDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListSubscriptionDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace ListSubscriptionDefinitionVersionsRequest {
  export const filterSensitiveLog = (obj: ListSubscriptionDefinitionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListSubscriptionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListSubscriptionDefinitionVersionsResponse {
  export const filterSensitiveLog = (obj: ListSubscriptionDefinitionVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * The key-value pair for the resource tag.
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * If true, performs a best-effort only core reset.
   */
  Force?: boolean;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace ResetDeploymentsRequest {
  export const filterSensitiveLog = (obj: ResetDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface ResetDeploymentsResponse {
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

export namespace ResetDeploymentsResponse {
  export const filterSensitiveLog = (obj: ResetDeploymentsResponse): any => ({
    ...obj,
  });
}

export interface StartBulkDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
   */
  InputFileUri: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace StartBulkDeploymentRequest {
  export const filterSensitiveLog = (obj: StartBulkDeploymentRequest): any => ({
    ...obj,
  });
}

export interface StartBulkDeploymentResponse {
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;
}

export namespace StartBulkDeploymentResponse {
  export const filterSensitiveLog = (obj: StartBulkDeploymentResponse): any => ({
    ...obj,
  });
}

export interface StopBulkDeploymentRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

export namespace StopBulkDeploymentRequest {
  export const filterSensitiveLog = (obj: StopBulkDeploymentRequest): any => ({
    ...obj,
  });
}

export interface StopBulkDeploymentResponse {}

export namespace StopBulkDeploymentResponse {
  export const filterSensitiveLog = (obj: StopBulkDeploymentResponse): any => ({
    ...obj,
  });
}

/**
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   */
  tags?: { [key: string]: string };
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * A list of connectivity info.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace UpdateConnectivityInfoRequest {
  export const filterSensitiveLog = (obj: UpdateConnectivityInfoRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectivityInfoResponse {
  /**
   * A message about the connectivity info update request.
   */
  Message?: string;

  /**
   * The new version of the connectivity info.
   */
  Version?: string;
}

export namespace UpdateConnectivityInfoResponse {
  export const filterSensitiveLog = (obj: UpdateConnectivityInfoResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateConnectorDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateConnectorDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectorDefinitionResponse {}

export namespace UpdateConnectorDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateConnectorDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateCoreDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateCoreDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateCoreDefinitionResponse {}

export namespace UpdateCoreDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateCoreDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateDeviceDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceDefinitionResponse {}

export namespace UpdateDeviceDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateFunctionDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateFunctionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateFunctionDefinitionResponse {}

export namespace UpdateFunctionDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateFunctionDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResponse {}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupCertificateConfigurationRequest {
  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace UpdateGroupCertificateConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateGroupCertificateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

export namespace UpdateGroupCertificateConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateGroupCertificateConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateLoggerDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateLoggerDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoggerDefinitionResponse {}

export namespace UpdateLoggerDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateLoggerDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateResourceDefinitionRequest {
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace UpdateResourceDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateResourceDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceDefinitionResponse {}

export namespace UpdateResourceDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateResourceDefinitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateSubscriptionDefinitionRequest {
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace UpdateSubscriptionDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateSubscriptionDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSubscriptionDefinitionResponse {}

export namespace UpdateSubscriptionDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateSubscriptionDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfigurationUpdate {
  /**
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | string | undefined;
}

export namespace TelemetryConfigurationUpdate {
  export const filterSensitiveLog = (obj: TelemetryConfigurationUpdate): any => ({
    ...obj,
  });
}

export interface UpdateThingRuntimeConfigurationRequest {
  /**
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfigurationUpdate;

  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace UpdateThingRuntimeConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateThingRuntimeConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateThingRuntimeConfigurationResponse {}

export namespace UpdateThingRuntimeConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateThingRuntimeConfigurationResponse): any => ({
    ...obj,
  });
}

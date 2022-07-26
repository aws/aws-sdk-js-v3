// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SMSServiceException as __BaseException } from "./SMSServiceException";

export enum AppLaunchConfigurationStatus {
  Configured = "CONFIGURED",
  NotConfigured = "NOT_CONFIGURED",
}

export enum AppLaunchStatus {
  ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid = "CONFIGURATION_INVALID",
  DeltaLaunchFailed = "DELTA_LAUNCH_FAILED",
  DeltaLaunchInProgress = "DELTA_LAUNCH_IN_PROGRESS",
  LaunchFailed = "LAUNCH_FAILED",
  LaunchInProgress = "LAUNCH_IN_PROGRESS",
  LaunchPending = "LAUNCH_PENDING",
  Launched = "LAUNCHED",
  PartiallyLaunched = "PARTIALLY_LAUNCHED",
  ReadyForConfiguration = "READY_FOR_CONFIGURATION",
  ReadyForLaunch = "READY_FOR_LAUNCH",
  TerminateFailed = "TERMINATE_FAILED",
  TerminateInProgress = "TERMINATE_IN_PROGRESS",
  Terminated = "TERMINATED",
  ValidationInProgress = "VALIDATION_IN_PROGRESS",
}

export enum AppReplicationConfigurationStatus {
  Configured = "CONFIGURED",
  NotConfigured = "NOT_CONFIGURED",
}

export enum AppReplicationStatus {
  ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid = "CONFIGURATION_INVALID",
  DeltaReplicated = "DELTA_REPLICATED",
  DeltaReplicationFailed = "DELTA_REPLICATION_FAILED",
  DeltaReplicationInProgress = "DELTA_REPLICATION_IN_PROGRESS",
  PartiallyReplicated = "PARTIALLY_REPLICATED",
  ReadyForConfiguration = "READY_FOR_CONFIGURATION",
  ReadyForReplication = "READY_FOR_REPLICATION",
  Replicated = "REPLICATED",
  ReplicationFailed = "REPLICATION_FAILED",
  ReplicationInProgress = "REPLICATION_IN_PROGRESS",
  ReplicationPending = "REPLICATION_PENDING",
  ReplicationStopFailed = "REPLICATION_STOP_FAILED",
  ReplicationStopped = "REPLICATION_STOPPED",
  ReplicationStopping = "REPLICATION_STOPPING",
  ValidationInProgress = "VALIDATION_IN_PROGRESS",
}

/**
 * <p>Details about the latest launch of an application.</p>
 */
export interface LaunchDetails {
  /**
   * <p>The latest time that this application was launched successfully.</p>
   */
  latestLaunchTime?: Date;

  /**
   * <p>The name of the latest stack launched for this application.</p>
   */
  stackName?: string;

  /**
   * <p>The ID of the latest stack launched for this application.</p>
   */
  stackId?: string;
}

export enum AppStatus {
  Active = "ACTIVE",
  Creating = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  Deleted = "DELETED",
  Deleting = "DELETING",
  Updating = "UPDATING",
}

/**
 * <p>Information about the application.</p>
 */
export interface AppSummary {
  /**
   * <p>The unique ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The ID of the application.</p>
   */
  importedAppId?: string;

  /**
   * <p>The name of the application.</p>
   */
  name?: string;

  /**
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * <p>Status of the application.</p>
   */
  status?: AppStatus | string;

  /**
   * <p>A message related to the status of the application</p>
   */
  statusMessage?: string;

  /**
   * <p>Status of the replication configuration.</p>
   */
  replicationConfigurationStatus?: AppReplicationConfigurationStatus | string;

  /**
   * <p>The replication status of the application.</p>
   */
  replicationStatus?: AppReplicationStatus | string;

  /**
   * <p>A message related to the replication status of the application.</p>
   */
  replicationStatusMessage?: string;

  /**
   * <p>The timestamp of the application's most recent successful replication.</p>
   */
  latestReplicationTime?: Date;

  /**
   * <p>Status of the launch configuration.</p>
   */
  launchConfigurationStatus?: AppLaunchConfigurationStatus | string;

  /**
   * <p>The launch status of the application.</p>
   */
  launchStatus?: AppLaunchStatus | string;

  /**
   * <p>A message related to the launch status of the application.</p>
   */
  launchStatusMessage?: string;

  /**
   * <p>Details about the latest launch of the application.</p>
   */
  launchDetails?: LaunchDetails;

  /**
   * <p>The creation time of the application.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last modified time of the application.</p>
   */
  lastModified?: Date;

  /**
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The number of server groups present in the application.</p>
   */
  totalServerGroups?: number;

  /**
   * <p>The number of servers present in the application.</p>
   */
  totalServers?: number;
}

export enum AppValidationStrategy {
  SSM = "SSM",
}

export enum ScriptType {
  POWERSHELL_SCRIPT = "POWERSHELL_SCRIPT",
  SHELL_SCRIPT = "SHELL_SCRIPT",
}

/**
 * <p>Location of an Amazon S3 object.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  bucket?: string;

  /**
   * <p>The Amazon S3 bucket key.</p>
   */
  key?: string;
}

/**
 * <p>Contains the location of a validation script.</p>
 */
export interface Source {
  /**
   * <p>Location of an Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * <p>Contains validation parameters.</p>
 */
export interface SSMValidationParameters {
  /**
   * <p>The location of the validation script.</p>
   */
  source?: Source;

  /**
   * <p>The ID of the instance. The instance must have the following tag: UserForSMSApplicationValidation=true.</p>
   */
  instanceId?: string;

  /**
   * <p>The type of validation script.</p>
   */
  scriptType?: ScriptType | string;

  /**
   * <p>The command to run the validation script.</p>
   */
  command?: string;

  /**
   * <p>The timeout interval, in seconds.</p>
   */
  executionTimeoutSeconds?: number;

  /**
   * <p>The name of the S3 bucket for output.</p>
   */
  outputS3BucketName?: string;
}

/**
 * <p>Configuration for validating an application.</p>
 */
export interface AppValidationConfiguration {
  /**
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * <p>The name of the configuration.</p>
   */
  name?: string;

  /**
   * <p>The validation strategy.</p>
   */
  appValidationStrategy?: AppValidationStrategy | string;

  /**
   * <p>The validation parameters.</p>
   */
  ssmValidationParameters?: SSMValidationParameters;
}

/**
 * <p>Contains the location of validation output.</p>
 */
export interface SSMOutput {
  /**
   * <p>Location of an Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * <p>Output from validating an application.</p>
 */
export interface AppValidationOutput {
  /**
   * <p>Output from using SSM to validate the application.</p>
   */
  ssmOutput?: SSMOutput;
}

export enum ServerType {
  VirtualMachine = "VIRTUAL_MACHINE",
}

export enum VmManagerType {
  hyperVManager = "HYPERV-MANAGER",
  scvmm = "SCVMM",
  vSphere = "VSPHERE",
}

/**
 * <p>Represents a VM server location.</p>
 */
export interface VmServerAddress {
  /**
   * <p>The ID of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The ID of the VM.</p>
   */
  vmId?: string;
}

/**
 * <p>Represents a VM server.</p>
 */
export interface VmServer {
  /**
   * <p>The VM server location.</p>
   */
  vmServerAddress?: VmServerAddress;

  /**
   * <p>The name of the VM.</p>
   */
  vmName?: string;

  /**
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The type of VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;

  /**
   * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
   */
  vmPath?: string;
}

/**
 * <p>Represents a server.</p>
 */
export interface Server {
  /**
   * <p>The ID of the server.</p>
   */
  serverId?: string;

  /**
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>Indicates whether the replication job is deleted or failed.</p>
   */
  replicationJobTerminated?: boolean;
}

/**
 * <p>Logical grouping of servers.</p>
 */
export interface ServerGroup {
  /**
   * <p>The ID of a server group.</p>
   */
  serverGroupId?: string;

  /**
   * <p>The name of a server group.</p>
   */
  name?: string;

  /**
   * <p>The servers that belong to a server group.</p>
   */
  serverList?: Server[];
}

/**
 * <p>Key/value pair that can be assigned to an application.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  key?: string;

  /**
   * <p>The tag value.</p>
   */
  value?: string;
}

export interface CreateAppRequest {
  /**
   * <p>The name of the new application.</p>
   */
  name?: string;

  /**
   * <p>The description of the new application</p>
   */
  description?: string;

  /**
   * <p>The name of the service role in the customer's account to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
   *             application creation.</p>
   */
  clientToken?: string;

  /**
   * <p>The server groups to include in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>The tags to be associated with the application.</p>
   */
  tags?: Tag[];
}

export interface CreateAppResponse {
  /**
   * <p>A summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>The server groups included in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

/**
 * <p>An internal error occurred.</p>
 */
export class InternalError extends __BaseException {
  readonly name: "InternalError" = "InternalError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalError, __BaseException>) {
    super({
      name: "InternalError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}

/**
 * <p>A specified parameter is not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>A required parameter is missing.</p>
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name: "MissingRequiredParameterException" = "MissingRequiredParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
  }
}

/**
 * <p>This operation is not allowed.</p>
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
  }
}

/**
 * <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 */
export class UnauthorizedOperationException extends __BaseException {
  readonly name: "UnauthorizedOperationException" = "UnauthorizedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperationException, __BaseException>) {
    super({
      name: "UnauthorizedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperationException.prototype);
  }
}

export enum LicenseType {
  AWS = "AWS",
  BYOL = "BYOL",
}

export interface CreateReplicationJobRequest {
  /**
   * <p>The ID of the server.</p>
   */
  serverId: string | undefined;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime: Date | undefined;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The name of the IAM role to be used by the Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used. </p>
   */
  kmsKeyId?: string;
}

export interface CreateReplicationJobResponse {
  /**
   * <p>The unique identifier of the replication job.</p>
   */
  replicationJobId?: string;
}

/**
 * <p>There are no connectors available.</p>
 */
export class NoConnectorsAvailableException extends __BaseException {
  readonly name: "NoConnectorsAvailableException" = "NoConnectorsAvailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoConnectorsAvailableException, __BaseException>) {
    super({
      name: "NoConnectorsAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoConnectorsAvailableException.prototype);
  }
}

/**
 * <p>The specified replication job already exists.</p>
 */
export class ReplicationJobAlreadyExistsException extends __BaseException {
  readonly name: "ReplicationJobAlreadyExistsException" = "ReplicationJobAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationJobAlreadyExistsException, __BaseException>) {
    super({
      name: "ReplicationJobAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationJobAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified server cannot be replicated.</p>
 */
export class ServerCannotBeReplicatedException extends __BaseException {
  readonly name: "ServerCannotBeReplicatedException" = "ServerCannotBeReplicatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerCannotBeReplicatedException, __BaseException>) {
    super({
      name: "ServerCannotBeReplicatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerCannotBeReplicatedException.prototype);
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export class TemporarilyUnavailableException extends __BaseException {
  readonly name: "TemporarilyUnavailableException" = "TemporarilyUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemporarilyUnavailableException, __BaseException>) {
    super({
      name: "TemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, TemporarilyUnavailableException.prototype);
  }
}

export interface DeleteAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>Indicates whether to stop all replication jobs corresponding to the servers
   *             in the application while deleting the application.</p>
   */
  forceStopAppReplication?: boolean;

  /**
   * <p>Indicates whether to terminate the stack corresponding to the
   *             application while deleting the application.</p>
   */
  forceTerminateApp?: boolean;
}

export interface DeleteAppResponse {}

export interface DeleteAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface DeleteAppLaunchConfigurationResponse {}

export interface DeleteAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface DeleteAppReplicationConfigurationResponse {}

export interface DeleteAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

export interface DeleteAppValidationConfigurationResponse {}

export interface DeleteReplicationJobRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;
}

export interface DeleteReplicationJobResponse {}

/**
 * <p>The specified replication job does not exist.</p>
 */
export class ReplicationJobNotFoundException extends __BaseException {
  readonly name: "ReplicationJobNotFoundException" = "ReplicationJobNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationJobNotFoundException, __BaseException>) {
    super({
      name: "ReplicationJobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationJobNotFoundException.prototype);
  }
}

export interface DeleteServerCatalogRequest {}

export interface DeleteServerCatalogResponse {}

export interface DisassociateConnectorRequest {
  /**
   * <p>The ID of the connector.</p>
   */
  connectorId: string | undefined;
}

export interface DisassociateConnectorResponse {}

export enum OutputFormat {
  JSON = "JSON",
  YAML = "YAML",
}

export interface GenerateChangeSetRequest {
  /**
   * <p>The ID of the application associated with the change set.</p>
   */
  appId?: string;

  /**
   * <p>The format for the change set.</p>
   */
  changesetFormat?: OutputFormat | string;
}

export interface GenerateChangeSetResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

export interface GenerateTemplateRequest {
  /**
   * <p>The ID of the application associated with the CloudFormation template.</p>
   */
  appId?: string;

  /**
   * <p>The format for generating the CloudFormation template.</p>
   */
  templateFormat?: OutputFormat | string;
}

export interface GenerateTemplateResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

export interface GetAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface GetAppResponse {
  /**
   * <p>Information about the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>The server groups that belong to the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

export interface GetAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the
 *             server during launch.</p>
 */
export interface UserData {
  /**
   * <p>Amazon S3 location of the user-data script.</p>
   */
  s3Location?: S3Location;
}

/**
 * <p>Launch configuration for a server.</p>
 */
export interface ServerLaunchConfiguration {
  /**
   * <p>The ID of the server with which the launch configuration is associated.</p>
   */
  server?: Server;

  /**
   * <p>The logical ID of the server in the CloudFormation template.</p>
   */
  logicalId?: string;

  /**
   * <p>The ID of the VPC into which the server should be launched.</p>
   */
  vpc?: string;

  /**
   * <p>The ID of the subnet the server should be launched into.</p>
   */
  subnet?: string;

  /**
   * <p>The ID of the security group that applies to the launched server.</p>
   */
  securityGroup?: string;

  /**
   * <p>The name of the Amazon EC2 SSH key to be used for connecting to the launched server.</p>
   */
  ec2KeyName?: string;

  /**
   * <p>Location of the user-data script to be executed when launching the server.</p>
   */
  userData?: UserData;

  /**
   * <p>The instance type to use when launching the server.</p>
   */
  instanceType?: string;

  /**
   * <p>Indicates whether a publicly accessible IP address is created when launching the server.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>The name of the IAM instance profile.</p>
   */
  iamInstanceProfileName?: string;

  /**
   * <p>Location of an Amazon S3 object.</p>
   */
  configureScript?: S3Location;

  /**
   * <p>The type of configuration script.</p>
   */
  configureScriptType?: ScriptType | string;
}

/**
 * <p>Launch configuration for a server group.</p>
 */
export interface ServerGroupLaunchConfiguration {
  /**
   * <p>The ID of the server group with which the launch configuration is
   *             associated.</p>
   */
  serverGroupId?: string;

  /**
   * <p>The launch order of servers in the server group.</p>
   */
  launchOrder?: number;

  /**
   * <p>The launch configuration for servers in the server group.</p>
   */
  serverLaunchConfigurations?: ServerLaunchConfiguration[];
}

export interface GetAppLaunchConfigurationResponse {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The name of the service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   */
  autoLaunch?: boolean;

  /**
   * <p>The launch configurations for server groups in this application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}

export interface GetAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * <p>The replication parameters for replicating a server.</p>
 */
export interface ServerReplicationParameters {
  /**
   * <p>The seed time for creating a replication job for the server.</p>
   */
  seedTime?: Date;

  /**
   * <p>The frequency of creating replication jobs for the server.</p>
   */
  frequency?: number;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * <p>The license type for creating a replication job for the server.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The number of recent AMIs to keep when creating a replication job for this server.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;
}

/**
 * <p>Replication configuration of a server.</p>
 */
export interface ServerReplicationConfiguration {
  /**
   * <p>The ID of the server with which this replication configuration is
   *             associated.</p>
   */
  server?: Server;

  /**
   * <p>The parameters for replicating the server.</p>
   */
  serverReplicationParameters?: ServerReplicationParameters;
}

/**
 * <p>Replication configuration for a server group.</p>
 */
export interface ServerGroupReplicationConfiguration {
  /**
   * <p>The ID of the server group with which this replication configuration is
   *             associated.</p>
   */
  serverGroupId?: string;

  /**
   * <p>The replication configuration for servers in the server group.</p>
   */
  serverReplicationConfigurations?: ServerReplicationConfiguration[];
}

export interface GetAppReplicationConfigurationResponse {
  /**
   * <p>The replication configurations associated with server groups in this application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

export interface GetAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

export enum ServerValidationStrategy {
  USERDATA = "USERDATA",
}

/**
 * <p>Contains validation parameters.</p>
 */
export interface UserDataValidationParameters {
  /**
   * <p>The location of the validation script.</p>
   */
  source?: Source;

  /**
   * <p>The type of validation script.</p>
   */
  scriptType?: ScriptType | string;
}

/**
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerValidationConfiguration {
  /**
   * <p>Represents a server.</p>
   */
  server?: Server;

  /**
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * <p>The name of the configuration.</p>
   */
  name?: string;

  /**
   * <p>The validation strategy.</p>
   */
  serverValidationStrategy?: ServerValidationStrategy | string;

  /**
   * <p>The validation parameters.</p>
   */
  userDataValidationParameters?: UserDataValidationParameters;
}

/**
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerGroupValidationConfiguration {
  /**
   * <p>The ID of the server group.</p>
   */
  serverGroupId?: string;

  /**
   * <p>The validation configuration.</p>
   */
  serverValidationConfigurations?: ServerValidationConfiguration[];
}

export interface GetAppValidationConfigurationResponse {
  /**
   * <p>The configuration for application validation.</p>
   */
  appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * <p>The configuration for instance validation.</p>
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}

export interface GetAppValidationOutputRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

/**
 * <p>Contains output from validating an instance.</p>
 */
export interface ServerValidationOutput {
  /**
   * <p>Represents a server.</p>
   */
  server?: Server;
}

export enum ValidationStatus {
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
  ReadyForValidation = "READY_FOR_VALIDATION",
  Succeeded = "SUCCEEDED",
}

/**
 * <p>Contains validation output.</p>
 */
export interface ValidationOutput {
  /**
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * <p>The name of the validation.</p>
   */
  name?: string;

  /**
   * <p>The status of the validation.</p>
   */
  status?: ValidationStatus | string;

  /**
   * <p>The status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The latest time that the validation was performed.</p>
   */
  latestValidationTime?: Date;

  /**
   * <p>The output from validating an application.</p>
   */
  appValidationOutput?: AppValidationOutput;

  /**
   * <p>The output from validation an instance.</p>
   */
  serverValidationOutput?: ServerValidationOutput;
}

export interface GetAppValidationOutputResponse {
  /**
   * <p>The validation output.</p>
   */
  validationOutputList?: ValidationOutput[];
}

export interface GetConnectorsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

export enum ConnectorCapability {
  hyperVManager = "HYPERV-MANAGER",
  scvmm = "SCVMM",
  smsOptimized = "SMS_OPTIMIZED",
  snapshotBatching = "SNAPSHOT_BATCHING",
  vSphere = "VSPHERE",
}

export enum ConnectorStatus {
  Healthy = "HEALTHY",
  Unhealthy = "UNHEALTHY",
}

/**
 * <p>Represents a connector.</p>
 */
export interface Connector {
  /**
   * <p>The ID of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The connector version.</p>
   */
  version?: string;

  /**
   * <p>The status of the connector.</p>
   */
  status?: ConnectorStatus | string;

  /**
   * <p>The capabilities of the connector.</p>
   */
  capabilityList?: (ConnectorCapability | string)[];

  /**
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;

  /**
   * <p>The ID of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The IP address of the connector.</p>
   */
  ipAddress?: string;

  /**
   * <p>The MAC address of the connector.</p>
   */
  macAddress?: string;

  /**
   * <p>The time the connector was associated.</p>
   */
  associatedOn?: Date;
}

export interface GetConnectorsResponse {
  /**
   * <p>Information about the registered connectors.</p>
   */
  connectorList?: Connector[];

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface GetReplicationJobsRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * <p>Details of the current stage of a replication run.</p>
 */
export interface ReplicationRunStageDetails {
  /**
   * <p>The current stage of a replication run.</p>
   */
  stage?: string;

  /**
   * <p>The progress of the current stage of a replication run.</p>
   */
  stageProgress?: string;
}

export enum ReplicationRunState {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  Deleted = "DELETED",
  Deleting = "DELETING",
  Failed = "FAILED",
  Missed = "MISSED",
  Pending = "PENDING",
}

export enum ReplicationRunType {
  Automatic = "AUTOMATIC",
  OnDemand = "ON_DEMAND",
}

/**
 * <p>Represents a replication run.</p>
 */
export interface ReplicationRun {
  /**
   * <p>The ID of the replication run.</p>
   */
  replicationRunId?: string;

  /**
   * <p>The state of the replication run.</p>
   */
  state?: ReplicationRunState | string;

  /**
   * <p>The type of replication run.</p>
   */
  type?: ReplicationRunType | string;

  /**
   * <p>Details about the current stage of the replication run.</p>
   */
  stageDetails?: ReplicationRunStageDetails;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) from the replication
   *             run.</p>
   */
  amiId?: string;

  /**
   * <p>The start time of the next replication run.</p>
   */
  scheduledStartTime?: Date;

  /**
   * <p>The completion time of the last replication run.</p>
   */
  completedTime?: Date;

  /**
   * <p>The description of the replication run.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether the replication run should produce an encrypted AMI.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used. </p>
   */
  kmsKeyId?: string;
}

export enum ReplicationJobState {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  Deleted = "DELETED",
  Deleting = "DELETING",
  Failed = "FAILED",
  Failing = "FAILING",
  PausedOnFailure = "PAUSED_ON_FAILURE",
  Pending = "PENDING",
}

/**
 * <p>Represents a replication job.</p>
 */
export interface ReplicationJob {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The ID of the server.</p>
   */
  serverId?: string;

  /**
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime?: Date;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The ID of the latest Amazon Machine Image (AMI).</p>
   */
  latestAmiId?: string;

  /**
   * <p>The state of the replication job.</p>
   */
  state?: ReplicationJobState | string;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>The number of recent AMIs to keep in the customer's account for a replication job. By
   *             default, the value is set to zero, meaning that all AMIs are kept.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>Indicates whether the replication job should produce encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: ReplicationRun[];
}

export interface GetReplicationJobsResponse {
  /**
   * <p>Information about the replication jobs.</p>
   */
  replicationJobList?: ReplicationJob[];

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface GetReplicationRunsRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

export interface GetReplicationRunsResponse {
  /**
   * <p>Information about the replication job.</p>
   */
  replicationJob?: ReplicationJob;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: ReplicationRun[];

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface GetServersRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The server addresses.</p>
   */
  vmServerAddressList?: VmServerAddress[];
}

export enum ServerCatalogStatus {
  Available = "AVAILABLE",
  Deleted = "DELETED",
  Expired = "EXPIRED",
  Importing = "IMPORTING",
  NotImported = "NOT_IMPORTED",
}

export interface GetServersResponse {
  /**
   * <p>The time when the server was last modified.</p>
   */
  lastModifiedOn?: Date;

  /**
   * <p>The status of the server catalog.</p>
   */
  serverCatalogStatus?: ServerCatalogStatus | string;

  /**
   * <p>Information about the servers.</p>
   */
  serverList?: Server[];

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface ImportAppCatalogRequest {
  /**
   * <p>The name of the service role. If you omit this parameter, we create a service-linked role
   *             for Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy
   *                 and trust policy</a> described in the <i>Migration Hub User Guide</i>.</p>
   */
  roleName?: string;
}

export interface ImportAppCatalogResponse {}

export interface ImportServerCatalogRequest {}

export interface ImportServerCatalogResponse {}

export interface LaunchAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface LaunchAppResponse {}

export interface ListAppsRequest {
  /**
   * <p>The unique application IDs.</p>
   */
  appIds?: string[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 100. To
   *             retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value. </p>
   */
  maxResults?: number;
}

export interface ListAppsResponse {
  /**
   * <p>The application summaries.</p>
   */
  apps?: AppSummary[];

  /**
   * <p>The token required to retrieve the next set of results. This value is null when there
   *             are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains the status of validating an application.</p>
 */
export interface NotificationContext {
  /**
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * <p>The status of the validation.</p>
   */
  status?: ValidationStatus | string;

  /**
   * <p>The status message.</p>
   */
  statusMessage?: string;
}

export interface NotifyAppValidationOutputRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * <p>The notification information.</p>
   */
  notificationContext?: NotificationContext;
}

export interface NotifyAppValidationOutputResponse {}

export interface PutAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The name of service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   */
  autoLaunch?: boolean;

  /**
   * <p>Information about the launch configurations for server groups in the application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}

export interface PutAppLaunchConfigurationResponse {}

export interface PutAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>Information about the replication configurations for server groups in the application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

export interface PutAppReplicationConfigurationResponse {}

export interface PutAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * <p>The configuration for application validation.</p>
   */
  appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * <p>The configuration for instance validation.</p>
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}

export interface PutAppValidationConfigurationResponse {}

export interface StartAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface StartAppReplicationResponse {}

export interface StartOnDemandAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * <p>The description of the replication run.</p>
   */
  description?: string;
}

export interface StartOnDemandAppReplicationResponse {}

/**
 * <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 */
export class DryRunOperationException extends __BaseException {
  readonly name: "DryRunOperationException" = "DryRunOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
  }
}

/**
 * <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 */
export class ReplicationRunLimitExceededException extends __BaseException {
  readonly name: "ReplicationRunLimitExceededException" = "ReplicationRunLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationRunLimitExceededException, __BaseException>) {
    super({
      name: "ReplicationRunLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationRunLimitExceededException.prototype);
  }
}

export interface StartOnDemandReplicationRunRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * <p>The description of the replication run.</p>
   */
  description?: string;
}

export interface StartOnDemandReplicationRunResponse {
  /**
   * <p>The ID of the replication run.</p>
   */
  replicationRunId?: string;
}

export interface StopAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface StopAppReplicationResponse {}

export interface TerminateAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export interface TerminateAppResponse {}

export interface UpdateAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The new name of the application.</p>
   */
  name?: string;

  /**
   * <p>The new description of the application.</p>
   */
  description?: string;

  /**
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The server groups in the application to update.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>The tags to associate with the application.</p>
   */
  tags?: Tag[];
}

export interface UpdateAppResponse {
  /**
   * <p>A summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>The updated server groups in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

export interface UpdateReplicationJobRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>When true, the replication job produces encrypted AMIs. For more information,
   *                 <code>KmsKeyId</code>.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;
}

export interface UpdateReplicationJobResponse {}

/**
 * @internal
 */
export const LaunchDetailsFilterSensitiveLog = (obj: LaunchDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppSummaryFilterSensitiveLog = (obj: AppSummary): any => ({
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
export const SourceFilterSensitiveLog = (obj: Source): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSMValidationParametersFilterSensitiveLog = (obj: SSMValidationParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppValidationConfigurationFilterSensitiveLog = (obj: AppValidationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSMOutputFilterSensitiveLog = (obj: SSMOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppValidationOutputFilterSensitiveLog = (obj: AppValidationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VmServerAddressFilterSensitiveLog = (obj: VmServerAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VmServerFilterSensitiveLog = (obj: VmServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerFilterSensitiveLog = (obj: Server): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerGroupFilterSensitiveLog = (obj: ServerGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppRequestFilterSensitiveLog = (obj: CreateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppResponseFilterSensitiveLog = (obj: CreateAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplicationJobRequestFilterSensitiveLog = (obj: CreateReplicationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplicationJobResponseFilterSensitiveLog = (obj: CreateReplicationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppRequestFilterSensitiveLog = (obj: DeleteAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppResponseFilterSensitiveLog = (obj: DeleteAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppLaunchConfigurationRequestFilterSensitiveLog = (
  obj: DeleteAppLaunchConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppLaunchConfigurationResponseFilterSensitiveLog = (
  obj: DeleteAppLaunchConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppReplicationConfigurationRequestFilterSensitiveLog = (
  obj: DeleteAppReplicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppReplicationConfigurationResponseFilterSensitiveLog = (
  obj: DeleteAppReplicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppValidationConfigurationRequestFilterSensitiveLog = (
  obj: DeleteAppValidationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppValidationConfigurationResponseFilterSensitiveLog = (
  obj: DeleteAppValidationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationJobRequestFilterSensitiveLog = (obj: DeleteReplicationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationJobResponseFilterSensitiveLog = (obj: DeleteReplicationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServerCatalogRequestFilterSensitiveLog = (obj: DeleteServerCatalogRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServerCatalogResponseFilterSensitiveLog = (obj: DeleteServerCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectorRequestFilterSensitiveLog = (obj: DisassociateConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectorResponseFilterSensitiveLog = (obj: DisassociateConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateChangeSetRequestFilterSensitiveLog = (obj: GenerateChangeSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateChangeSetResponseFilterSensitiveLog = (obj: GenerateChangeSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateTemplateRequestFilterSensitiveLog = (obj: GenerateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateTemplateResponseFilterSensitiveLog = (obj: GenerateTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppRequestFilterSensitiveLog = (obj: GetAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppResponseFilterSensitiveLog = (obj: GetAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppLaunchConfigurationRequestFilterSensitiveLog = (obj: GetAppLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDataFilterSensitiveLog = (obj: UserData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerLaunchConfigurationFilterSensitiveLog = (obj: ServerLaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerGroupLaunchConfigurationFilterSensitiveLog = (obj: ServerGroupLaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppLaunchConfigurationResponseFilterSensitiveLog = (obj: GetAppLaunchConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppReplicationConfigurationRequestFilterSensitiveLog = (
  obj: GetAppReplicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerReplicationParametersFilterSensitiveLog = (obj: ServerReplicationParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerReplicationConfigurationFilterSensitiveLog = (obj: ServerReplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerGroupReplicationConfigurationFilterSensitiveLog = (
  obj: ServerGroupReplicationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppReplicationConfigurationResponseFilterSensitiveLog = (
  obj: GetAppReplicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppValidationConfigurationRequestFilterSensitiveLog = (
  obj: GetAppValidationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDataValidationParametersFilterSensitiveLog = (obj: UserDataValidationParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerValidationConfigurationFilterSensitiveLog = (obj: ServerValidationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerGroupValidationConfigurationFilterSensitiveLog = (obj: ServerGroupValidationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppValidationConfigurationResponseFilterSensitiveLog = (
  obj: GetAppValidationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppValidationOutputRequestFilterSensitiveLog = (obj: GetAppValidationOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerValidationOutputFilterSensitiveLog = (obj: ServerValidationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationOutputFilterSensitiveLog = (obj: ValidationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppValidationOutputResponseFilterSensitiveLog = (obj: GetAppValidationOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorsRequestFilterSensitiveLog = (obj: GetConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorFilterSensitiveLog = (obj: Connector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorsResponseFilterSensitiveLog = (obj: GetConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationJobsRequestFilterSensitiveLog = (obj: GetReplicationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationRunStageDetailsFilterSensitiveLog = (obj: ReplicationRunStageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationRunFilterSensitiveLog = (obj: ReplicationRun): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationJobFilterSensitiveLog = (obj: ReplicationJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationJobsResponseFilterSensitiveLog = (obj: GetReplicationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationRunsRequestFilterSensitiveLog = (obj: GetReplicationRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationRunsResponseFilterSensitiveLog = (obj: GetReplicationRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServersRequestFilterSensitiveLog = (obj: GetServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServersResponseFilterSensitiveLog = (obj: GetServersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAppCatalogRequestFilterSensitiveLog = (obj: ImportAppCatalogRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAppCatalogResponseFilterSensitiveLog = (obj: ImportAppCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportServerCatalogRequestFilterSensitiveLog = (obj: ImportServerCatalogRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportServerCatalogResponseFilterSensitiveLog = (obj: ImportServerCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchAppRequestFilterSensitiveLog = (obj: LaunchAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchAppResponseFilterSensitiveLog = (obj: LaunchAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsRequestFilterSensitiveLog = (obj: ListAppsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsResponseFilterSensitiveLog = (obj: ListAppsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationContextFilterSensitiveLog = (obj: NotificationContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyAppValidationOutputRequestFilterSensitiveLog = (obj: NotifyAppValidationOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyAppValidationOutputResponseFilterSensitiveLog = (obj: NotifyAppValidationOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppLaunchConfigurationRequestFilterSensitiveLog = (obj: PutAppLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppLaunchConfigurationResponseFilterSensitiveLog = (obj: PutAppLaunchConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppReplicationConfigurationRequestFilterSensitiveLog = (
  obj: PutAppReplicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppReplicationConfigurationResponseFilterSensitiveLog = (
  obj: PutAppReplicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppValidationConfigurationRequestFilterSensitiveLog = (
  obj: PutAppValidationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppValidationConfigurationResponseFilterSensitiveLog = (
  obj: PutAppValidationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAppReplicationRequestFilterSensitiveLog = (obj: StartAppReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAppReplicationResponseFilterSensitiveLog = (obj: StartAppReplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandAppReplicationRequestFilterSensitiveLog = (obj: StartOnDemandAppReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandAppReplicationResponseFilterSensitiveLog = (
  obj: StartOnDemandAppReplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandReplicationRunRequestFilterSensitiveLog = (obj: StartOnDemandReplicationRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandReplicationRunResponseFilterSensitiveLog = (
  obj: StartOnDemandReplicationRunResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAppReplicationRequestFilterSensitiveLog = (obj: StopAppReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAppReplicationResponseFilterSensitiveLog = (obj: StopAppReplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateAppRequestFilterSensitiveLog = (obj: TerminateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateAppResponseFilterSensitiveLog = (obj: TerminateAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppRequestFilterSensitiveLog = (obj: UpdateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppResponseFilterSensitiveLog = (obj: UpdateAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReplicationJobRequestFilterSensitiveLog = (obj: UpdateReplicationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReplicationJobResponseFilterSensitiveLog = (obj: UpdateReplicationJobResponse): any => ({
  ...obj,
});

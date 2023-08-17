// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SMSServiceException as __BaseException } from "./SMSServiceException";

/**
 * @public
 * @enum
 */
export const AppLaunchConfigurationStatus = {
  Configured: "CONFIGURED",
  NotConfigured: "NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type AppLaunchConfigurationStatus =
  (typeof AppLaunchConfigurationStatus)[keyof typeof AppLaunchConfigurationStatus];

/**
 * @public
 * @enum
 */
export const AppLaunchStatus = {
  ConfigurationInProgress: "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid: "CONFIGURATION_INVALID",
  DeltaLaunchFailed: "DELTA_LAUNCH_FAILED",
  DeltaLaunchInProgress: "DELTA_LAUNCH_IN_PROGRESS",
  LaunchFailed: "LAUNCH_FAILED",
  LaunchInProgress: "LAUNCH_IN_PROGRESS",
  LaunchPending: "LAUNCH_PENDING",
  Launched: "LAUNCHED",
  PartiallyLaunched: "PARTIALLY_LAUNCHED",
  ReadyForConfiguration: "READY_FOR_CONFIGURATION",
  ReadyForLaunch: "READY_FOR_LAUNCH",
  TerminateFailed: "TERMINATE_FAILED",
  TerminateInProgress: "TERMINATE_IN_PROGRESS",
  Terminated: "TERMINATED",
  ValidationInProgress: "VALIDATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AppLaunchStatus = (typeof AppLaunchStatus)[keyof typeof AppLaunchStatus];

/**
 * @public
 * @enum
 */
export const AppReplicationConfigurationStatus = {
  Configured: "CONFIGURED",
  NotConfigured: "NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type AppReplicationConfigurationStatus =
  (typeof AppReplicationConfigurationStatus)[keyof typeof AppReplicationConfigurationStatus];

/**
 * @public
 * @enum
 */
export const AppReplicationStatus = {
  ConfigurationInProgress: "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid: "CONFIGURATION_INVALID",
  DeltaReplicated: "DELTA_REPLICATED",
  DeltaReplicationFailed: "DELTA_REPLICATION_FAILED",
  DeltaReplicationInProgress: "DELTA_REPLICATION_IN_PROGRESS",
  PartiallyReplicated: "PARTIALLY_REPLICATED",
  ReadyForConfiguration: "READY_FOR_CONFIGURATION",
  ReadyForReplication: "READY_FOR_REPLICATION",
  Replicated: "REPLICATED",
  ReplicationFailed: "REPLICATION_FAILED",
  ReplicationInProgress: "REPLICATION_IN_PROGRESS",
  ReplicationPending: "REPLICATION_PENDING",
  ReplicationStopFailed: "REPLICATION_STOP_FAILED",
  ReplicationStopped: "REPLICATION_STOPPED",
  ReplicationStopping: "REPLICATION_STOPPING",
  ValidationInProgress: "VALIDATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AppReplicationStatus = (typeof AppReplicationStatus)[keyof typeof AppReplicationStatus];

/**
 * @public
 * <p>Details about the latest launch of an application.</p>
 */
export interface LaunchDetails {
  /**
   * @public
   * <p>The latest time that this application was launched successfully.</p>
   */
  latestLaunchTime?: Date;

  /**
   * @public
   * <p>The name of the latest stack launched for this application.</p>
   */
  stackName?: string;

  /**
   * @public
   * <p>The ID of the latest stack launched for this application.</p>
   */
  stackId?: string;
}

/**
 * @public
 * @enum
 */
export const AppStatus = {
  Active: "ACTIVE",
  Creating: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  Deleted: "DELETED",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;

/**
 * @public
 */
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

/**
 * @public
 * <p>Information about the application.</p>
 */
export interface AppSummary {
  /**
   * @public
   * <p>The unique ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The ID of the application.</p>
   */
  importedAppId?: string;

  /**
   * @public
   * <p>The name of the application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Status of the application.</p>
   */
  status?: AppStatus | string;

  /**
   * @public
   * <p>A message related to the status of the application</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>Status of the replication configuration.</p>
   */
  replicationConfigurationStatus?: AppReplicationConfigurationStatus | string;

  /**
   * @public
   * <p>The replication status of the application.</p>
   */
  replicationStatus?: AppReplicationStatus | string;

  /**
   * @public
   * <p>A message related to the replication status of the application.</p>
   */
  replicationStatusMessage?: string;

  /**
   * @public
   * <p>The timestamp of the application's most recent successful replication.</p>
   */
  latestReplicationTime?: Date;

  /**
   * @public
   * <p>Status of the launch configuration.</p>
   */
  launchConfigurationStatus?: AppLaunchConfigurationStatus | string;

  /**
   * @public
   * <p>The launch status of the application.</p>
   */
  launchStatus?: AppLaunchStatus | string;

  /**
   * @public
   * <p>A message related to the launch status of the application.</p>
   */
  launchStatusMessage?: string;

  /**
   * @public
   * <p>Details about the latest launch of the application.</p>
   */
  launchDetails?: LaunchDetails;

  /**
   * @public
   * <p>The creation time of the application.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last modified time of the application.</p>
   */
  lastModified?: Date;

  /**
   * @public
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>The number of server groups present in the application.</p>
   */
  totalServerGroups?: number;

  /**
   * @public
   * <p>The number of servers present in the application.</p>
   */
  totalServers?: number;
}

/**
 * @public
 * @enum
 */
export const AppValidationStrategy = {
  SSM: "SSM",
} as const;

/**
 * @public
 */
export type AppValidationStrategy = (typeof AppValidationStrategy)[keyof typeof AppValidationStrategy];

/**
 * @public
 * @enum
 */
export const ScriptType = {
  POWERSHELL_SCRIPT: "POWERSHELL_SCRIPT",
  SHELL_SCRIPT: "SHELL_SCRIPT",
} as const;

/**
 * @public
 */
export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];

/**
 * @public
 * <p>Location of an Amazon S3 object.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The Amazon S3 bucket name.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket key.</p>
   */
  key?: string;
}

/**
 * @public
 * <p>Contains the location of a validation script.</p>
 */
export interface Source {
  /**
   * @public
   * <p>Location of an Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 * <p>Contains validation parameters.</p>
 */
export interface SSMValidationParameters {
  /**
   * @public
   * <p>The location of the validation script.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>The ID of the instance. The instance must have the following tag: UserForSMSApplicationValidation=true.</p>
   */
  instanceId?: string;

  /**
   * @public
   * <p>The type of validation script.</p>
   */
  scriptType?: ScriptType | string;

  /**
   * @public
   * <p>The command to run the validation script.</p>
   */
  command?: string;

  /**
   * @public
   * <p>The timeout interval, in seconds.</p>
   */
  executionTimeoutSeconds?: number;

  /**
   * @public
   * <p>The name of the S3 bucket for output.</p>
   */
  outputS3BucketName?: string;
}

/**
 * @public
 * <p>Configuration for validating an application.</p>
 */
export interface AppValidationConfiguration {
  /**
   * @public
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The validation strategy.</p>
   */
  appValidationStrategy?: AppValidationStrategy | string;

  /**
   * @public
   * <p>The validation parameters.</p>
   */
  ssmValidationParameters?: SSMValidationParameters;
}

/**
 * @public
 * <p>Contains the location of validation output.</p>
 */
export interface SSMOutput {
  /**
   * @public
   * <p>Location of an Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 * <p>Output from validating an application.</p>
 */
export interface AppValidationOutput {
  /**
   * @public
   * <p>Output from using SSM to validate the application.</p>
   */
  ssmOutput?: SSMOutput;
}

/**
 * @public
 * @enum
 */
export const ServerType = {
  VirtualMachine: "VIRTUAL_MACHINE",
} as const;

/**
 * @public
 */
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

/**
 * @public
 * @enum
 */
export const VmManagerType = {
  hyperVManager: "HYPERV-MANAGER",
  scvmm: "SCVMM",
  vSphere: "VSPHERE",
} as const;

/**
 * @public
 */
export type VmManagerType = (typeof VmManagerType)[keyof typeof VmManagerType];

/**
 * @public
 * <p>Represents a VM server location.</p>
 */
export interface VmServerAddress {
  /**
   * @public
   * <p>The ID of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * @public
   * <p>The ID of the VM.</p>
   */
  vmId?: string;
}

/**
 * @public
 * <p>Represents a VM server.</p>
 */
export interface VmServer {
  /**
   * @public
   * <p>The VM server location.</p>
   */
  vmServerAddress?: VmServerAddress;

  /**
   * @public
   * <p>The name of the VM.</p>
   */
  vmName?: string;

  /**
   * @public
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * @public
   * <p>The type of VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;

  /**
   * @public
   * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
   */
  vmPath?: string;
}

/**
 * @public
 * <p>Represents a server.</p>
 */
export interface Server {
  /**
   * @public
   * <p>The ID of the server.</p>
   */
  serverId?: string;

  /**
   * @public
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * @public
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * @public
   * <p>Indicates whether the replication job is deleted or failed.</p>
   */
  replicationJobTerminated?: boolean;
}

/**
 * @public
 * <p>Logical grouping of servers.</p>
 */
export interface ServerGroup {
  /**
   * @public
   * <p>The ID of a server group.</p>
   */
  serverGroupId?: string;

  /**
   * @public
   * <p>The name of a server group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The servers that belong to a server group.</p>
   */
  serverList?: Server[];
}

/**
 * @public
 * <p>Key/value pair that can be assigned to an application.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag key.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The tag value.</p>
   */
  value?: string;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * @public
   * <p>The name of the new application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the new application</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the service role in the customer's account to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
   *             application creation.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The server groups to include in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * @public
   * <p>The tags to be associated with the application.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * @public
   * <p>A summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * @public
   * <p>The server groups included in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * @public
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const LicenseType = {
  AWS: "AWS",
  BYOL: "BYOL",
} as const;

/**
 * @public
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

/**
 * @public
 */
export interface CreateReplicationJobRequest {
  /**
   * @public
   * <p>The ID of the server.</p>
   */
  serverId: string | undefined;

  /**
   * @public
   * <p>The seed replication time.</p>
   */
  seedReplicationTime: Date | undefined;

  /**
   * @public
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * @public
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * @public
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * @public
   * <p>The name of the IAM role to be used by the Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * @public
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *          <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used. </p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateReplicationJobResponse {
  /**
   * @public
   * <p>The unique identifier of the replication job.</p>
   */
  replicationJobId?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>Indicates whether to stop all replication jobs corresponding to the servers
   *             in the application while deleting the application.</p>
   */
  forceStopAppReplication?: boolean;

  /**
   * @public
   * <p>Indicates whether to terminate the stack corresponding to the
   *             application while deleting the application.</p>
   */
  forceTerminateApp?: boolean;
}

/**
 * @public
 */
export interface DeleteAppResponse {}

/**
 * @public
 */
export interface DeleteAppLaunchConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface DeleteAppLaunchConfigurationResponse {}

/**
 * @public
 */
export interface DeleteAppReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface DeleteAppReplicationConfigurationResponse {}

/**
 * @public
 */
export interface DeleteAppValidationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppValidationConfigurationResponse {}

/**
 * @public
 */
export interface DeleteReplicationJobRequest {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationJobResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteServerCatalogRequest {}

/**
 * @public
 */
export interface DeleteServerCatalogResponse {}

/**
 * @public
 */
export interface DisassociateConnectorRequest {
  /**
   * @public
   * <p>The ID of the connector.</p>
   */
  connectorId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectorResponse {}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  JSON: "JSON",
  YAML: "YAML",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 */
export interface GenerateChangeSetRequest {
  /**
   * @public
   * <p>The ID of the application associated with the change set.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The format for the change set.</p>
   */
  changesetFormat?: OutputFormat | string;
}

/**
 * @public
 */
export interface GenerateChangeSetResponse {
  /**
   * @public
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 */
export interface GenerateTemplateRequest {
  /**
   * @public
   * <p>The ID of the application associated with the CloudFormation template.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The format for generating the CloudFormation template.</p>
   */
  templateFormat?: OutputFormat | string;
}

/**
 * @public
 */
export interface GenerateTemplateResponse {
  /**
   * @public
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 */
export interface GetAppRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface GetAppResponse {
  /**
   * @public
   * <p>Information about the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * @public
   * <p>The server groups that belong to the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * @public
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface GetAppLaunchConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the
 *             server during launch.</p>
 */
export interface UserData {
  /**
   * @public
   * <p>Amazon S3 location of the user-data script.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 * <p>Launch configuration for a server.</p>
 */
export interface ServerLaunchConfiguration {
  /**
   * @public
   * <p>The ID of the server with which the launch configuration is associated.</p>
   */
  server?: Server;

  /**
   * @public
   * <p>The logical ID of the server in the CloudFormation template.</p>
   */
  logicalId?: string;

  /**
   * @public
   * <p>The ID of the VPC into which the server should be launched.</p>
   */
  vpc?: string;

  /**
   * @public
   * <p>The ID of the subnet the server should be launched into.</p>
   */
  subnet?: string;

  /**
   * @public
   * <p>The ID of the security group that applies to the launched server.</p>
   */
  securityGroup?: string;

  /**
   * @public
   * <p>The name of the Amazon EC2 SSH key to be used for connecting to the launched server.</p>
   */
  ec2KeyName?: string;

  /**
   * @public
   * <p>Location of the user-data script to be executed when launching the server.</p>
   */
  userData?: UserData;

  /**
   * @public
   * <p>The instance type to use when launching the server.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>Indicates whether a publicly accessible IP address is created when launching the server.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>The name of the IAM instance profile.</p>
   */
  iamInstanceProfileName?: string;

  /**
   * @public
   * <p>Location of an Amazon S3 object.</p>
   */
  configureScript?: S3Location;

  /**
   * @public
   * <p>The type of configuration script.</p>
   */
  configureScriptType?: ScriptType | string;
}

/**
 * @public
 * <p>Launch configuration for a server group.</p>
 */
export interface ServerGroupLaunchConfiguration {
  /**
   * @public
   * <p>The ID of the server group with which the launch configuration is
   *             associated.</p>
   */
  serverGroupId?: string;

  /**
   * @public
   * <p>The launch order of servers in the server group.</p>
   */
  launchOrder?: number;

  /**
   * @public
   * <p>The launch configuration for servers in the server group.</p>
   */
  serverLaunchConfigurations?: ServerLaunchConfiguration[];
}

/**
 * @public
 */
export interface GetAppLaunchConfigurationResponse {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The name of the service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   */
  autoLaunch?: boolean;

  /**
   * @public
   * <p>The launch configurations for server groups in this application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}

/**
 * @public
 */
export interface GetAppReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 * <p>The replication parameters for replicating a server.</p>
 */
export interface ServerReplicationParameters {
  /**
   * @public
   * <p>The seed time for creating a replication job for the server.</p>
   */
  seedTime?: Date;

  /**
   * @public
   * <p>The frequency of creating replication jobs for the server.</p>
   */
  frequency?: number;

  /**
   * @public
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * @public
   * <p>The license type for creating a replication job for the server.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * @public
   * <p>The number of recent AMIs to keep when creating a replication job for this server.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * @public
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *          <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>Replication configuration of a server.</p>
 */
export interface ServerReplicationConfiguration {
  /**
   * @public
   * <p>The ID of the server with which this replication configuration is
   *             associated.</p>
   */
  server?: Server;

  /**
   * @public
   * <p>The parameters for replicating the server.</p>
   */
  serverReplicationParameters?: ServerReplicationParameters;
}

/**
 * @public
 * <p>Replication configuration for a server group.</p>
 */
export interface ServerGroupReplicationConfiguration {
  /**
   * @public
   * <p>The ID of the server group with which this replication configuration is
   *             associated.</p>
   */
  serverGroupId?: string;

  /**
   * @public
   * <p>The replication configuration for servers in the server group.</p>
   */
  serverReplicationConfigurations?: ServerReplicationConfiguration[];
}

/**
 * @public
 */
export interface GetAppReplicationConfigurationResponse {
  /**
   * @public
   * <p>The replication configurations associated with server groups in this application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

/**
 * @public
 */
export interface GetAppValidationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServerValidationStrategy = {
  USERDATA: "USERDATA",
} as const;

/**
 * @public
 */
export type ServerValidationStrategy = (typeof ServerValidationStrategy)[keyof typeof ServerValidationStrategy];

/**
 * @public
 * <p>Contains validation parameters.</p>
 */
export interface UserDataValidationParameters {
  /**
   * @public
   * <p>The location of the validation script.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>The type of validation script.</p>
   */
  scriptType?: ScriptType | string;
}

/**
 * @public
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerValidationConfiguration {
  /**
   * @public
   * <p>Represents a server.</p>
   */
  server?: Server;

  /**
   * @public
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The validation strategy.</p>
   */
  serverValidationStrategy?: ServerValidationStrategy | string;

  /**
   * @public
   * <p>The validation parameters.</p>
   */
  userDataValidationParameters?: UserDataValidationParameters;
}

/**
 * @public
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerGroupValidationConfiguration {
  /**
   * @public
   * <p>The ID of the server group.</p>
   */
  serverGroupId?: string;

  /**
   * @public
   * <p>The validation configuration.</p>
   */
  serverValidationConfigurations?: ServerValidationConfiguration[];
}

/**
 * @public
 */
export interface GetAppValidationConfigurationResponse {
  /**
   * @public
   * <p>The configuration for application validation.</p>
   */
  appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * @public
   * <p>The configuration for instance validation.</p>
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}

/**
 * @public
 */
export interface GetAppValidationOutputRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

/**
 * @public
 * <p>Contains output from validating an instance.</p>
 */
export interface ServerValidationOutput {
  /**
   * @public
   * <p>Represents a server.</p>
   */
  server?: Server;
}

/**
 * @public
 * @enum
 */
export const ValidationStatus = {
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
  Pending: "PENDING",
  ReadyForValidation: "READY_FOR_VALIDATION",
  Succeeded: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus];

/**
 * @public
 * <p>Contains validation output.</p>
 */
export interface ValidationOutput {
  /**
   * @public
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * @public
   * <p>The name of the validation.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of the validation.</p>
   */
  status?: ValidationStatus | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The latest time that the validation was performed.</p>
   */
  latestValidationTime?: Date;

  /**
   * @public
   * <p>The output from validating an application.</p>
   */
  appValidationOutput?: AppValidationOutput;

  /**
   * @public
   * <p>The output from validation an instance.</p>
   */
  serverValidationOutput?: ServerValidationOutput;
}

/**
 * @public
 */
export interface GetAppValidationOutputResponse {
  /**
   * @public
   * <p>The validation output.</p>
   */
  validationOutputList?: ValidationOutput[];
}

/**
 * @public
 */
export interface GetConnectorsRequest {
  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ConnectorCapability = {
  hyperVManager: "HYPERV-MANAGER",
  scvmm: "SCVMM",
  smsOptimized: "SMS_OPTIMIZED",
  snapshotBatching: "SNAPSHOT_BATCHING",
  vSphere: "VSPHERE",
} as const;

/**
 * @public
 */
export type ConnectorCapability = (typeof ConnectorCapability)[keyof typeof ConnectorCapability];

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  Healthy: "HEALTHY",
  Unhealthy: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * <p>Represents a connector.</p>
 */
export interface Connector {
  /**
   * @public
   * <p>The ID of the connector.</p>
   */
  connectorId?: string;

  /**
   * @public
   * <p>The connector version.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The status of the connector.</p>
   */
  status?: ConnectorStatus | string;

  /**
   * @public
   * <p>The capabilities of the connector.</p>
   */
  capabilityList?: (ConnectorCapability | string)[];

  /**
   * @public
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * @public
   * <p>The VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;

  /**
   * @public
   * <p>The ID of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * @public
   * <p>The IP address of the connector.</p>
   */
  ipAddress?: string;

  /**
   * @public
   * <p>The MAC address of the connector.</p>
   */
  macAddress?: string;

  /**
   * @public
   * <p>The time the connector was associated.</p>
   */
  associatedOn?: Date;
}

/**
 * @public
 */
export interface GetConnectorsResponse {
  /**
   * @public
   * <p>Information about the registered connectors.</p>
   */
  connectorList?: Connector[];

  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetReplicationJobsRequest {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details of the current stage of a replication run.</p>
 */
export interface ReplicationRunStageDetails {
  /**
   * @public
   * <p>The current stage of a replication run.</p>
   */
  stage?: string;

  /**
   * @public
   * <p>The progress of the current stage of a replication run.</p>
   */
  stageProgress?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicationRunState = {
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Deleted: "DELETED",
  Deleting: "DELETING",
  Failed: "FAILED",
  Missed: "MISSED",
  Pending: "PENDING",
} as const;

/**
 * @public
 */
export type ReplicationRunState = (typeof ReplicationRunState)[keyof typeof ReplicationRunState];

/**
 * @public
 * @enum
 */
export const ReplicationRunType = {
  Automatic: "AUTOMATIC",
  OnDemand: "ON_DEMAND",
} as const;

/**
 * @public
 */
export type ReplicationRunType = (typeof ReplicationRunType)[keyof typeof ReplicationRunType];

/**
 * @public
 * <p>Represents a replication run.</p>
 */
export interface ReplicationRun {
  /**
   * @public
   * <p>The ID of the replication run.</p>
   */
  replicationRunId?: string;

  /**
   * @public
   * <p>The state of the replication run.</p>
   */
  state?: ReplicationRunState | string;

  /**
   * @public
   * <p>The type of replication run.</p>
   */
  type?: ReplicationRunType | string;

  /**
   * @public
   * <p>Details about the current stage of the replication run.</p>
   */
  stageDetails?: ReplicationRunStageDetails;

  /**
   * @public
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The ID of the Amazon Machine Image (AMI) from the replication
   *             run.</p>
   */
  amiId?: string;

  /**
   * @public
   * <p>The start time of the next replication run.</p>
   */
  scheduledStartTime?: Date;

  /**
   * @public
   * <p>The completion time of the last replication run.</p>
   */
  completedTime?: Date;

  /**
   * @public
   * <p>The description of the replication run.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates whether the replication run should produce an encrypted AMI.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *          <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used. </p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicationJobState = {
  Active: "ACTIVE",
  Completed: "COMPLETED",
  Deleted: "DELETED",
  Deleting: "DELETING",
  Failed: "FAILED",
  Failing: "FAILING",
  PausedOnFailure: "PAUSED_ON_FAILURE",
  Pending: "PENDING",
} as const;

/**
 * @public
 */
export type ReplicationJobState = (typeof ReplicationJobState)[keyof typeof ReplicationJobState];

/**
 * @public
 * <p>Represents a replication job.</p>
 */
export interface ReplicationJob {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * @public
   * <p>The ID of the server.</p>
   */
  serverId?: string;

  /**
   * @public
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * @public
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * @public
   * <p>The seed replication time.</p>
   */
  seedReplicationTime?: Date;

  /**
   * @public
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * @public
   * <p>Indicates whether to run the replication job one time.</p>
   */
  runOnce?: boolean;

  /**
   * @public
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * @public
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * @public
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>The ID of the latest Amazon Machine Image (AMI).</p>
   */
  latestAmiId?: string;

  /**
   * @public
   * <p>The state of the replication job.</p>
   */
  state?: ReplicationJobState | string;

  /**
   * @public
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The number of recent AMIs to keep in the customer's account for a replication job. By
   *             default, the value is set to zero, meaning that all AMIs are kept.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * @public
   * <p>Indicates whether the replication job should produce encrypted AMIs.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following: </p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *          <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: ReplicationRun[];
}

/**
 * @public
 */
export interface GetReplicationJobsResponse {
  /**
   * @public
   * <p>Information about the replication jobs.</p>
   */
  replicationJobList?: ReplicationJob[];

  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetReplicationRunsRequest {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetReplicationRunsResponse {
  /**
   * @public
   * <p>Information about the replication job.</p>
   */
  replicationJob?: ReplicationJob;

  /**
   * @public
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: ReplicationRun[];

  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetServersRequest {
  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The server addresses.</p>
   */
  vmServerAddressList?: VmServerAddress[];
}

/**
 * @public
 * @enum
 */
export const ServerCatalogStatus = {
  Available: "AVAILABLE",
  Deleted: "DELETED",
  Expired: "EXPIRED",
  Importing: "IMPORTING",
  NotImported: "NOT_IMPORTED",
} as const;

/**
 * @public
 */
export type ServerCatalogStatus = (typeof ServerCatalogStatus)[keyof typeof ServerCatalogStatus];

/**
 * @public
 */
export interface GetServersResponse {
  /**
   * @public
   * <p>The time when the server was last modified.</p>
   */
  lastModifiedOn?: Date;

  /**
   * @public
   * <p>The status of the server catalog.</p>
   */
  serverCatalogStatus?: ServerCatalogStatus | string;

  /**
   * @public
   * <p>Information about the servers.</p>
   */
  serverList?: Server[];

  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ImportAppCatalogRequest {
  /**
   * @public
   * <p>The name of the service role. If you omit this parameter, we create a service-linked role
   *             for Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy
   *                 and trust policy</a> described in the <i>Migration Hub User Guide</i>.</p>
   */
  roleName?: string;
}

/**
 * @public
 */
export interface ImportAppCatalogResponse {}

/**
 * @public
 */
export interface ImportServerCatalogRequest {}

/**
 * @public
 */
export interface ImportServerCatalogResponse {}

/**
 * @public
 */
export interface LaunchAppRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface LaunchAppResponse {}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * @public
   * <p>The unique application IDs.</p>
   */
  appIds?: string[];

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default value is 100. To
   *             retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * @public
   * <p>The application summaries.</p>
   */
  apps?: AppSummary[];

  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is null when there
   *             are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains the status of validating an application.</p>
 */
export interface NotificationContext {
  /**
   * @public
   * <p>The ID of the validation.</p>
   */
  validationId?: string;

  /**
   * @public
   * <p>The status of the validation.</p>
   */
  status?: ValidationStatus | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface NotifyAppValidationOutputRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The notification information.</p>
   */
  notificationContext?: NotificationContext;
}

/**
 * @public
 */
export interface NotifyAppValidationOutputResponse {}

/**
 * @public
 */
export interface PutAppLaunchConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The name of service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   */
  autoLaunch?: boolean;

  /**
   * @public
   * <p>Information about the launch configurations for server groups in the application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}

/**
 * @public
 */
export interface PutAppLaunchConfigurationResponse {}

/**
 * @public
 */
export interface PutAppReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>Information about the replication configurations for server groups in the application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

/**
 * @public
 */
export interface PutAppReplicationConfigurationResponse {}

/**
 * @public
 */
export interface PutAppValidationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The configuration for application validation.</p>
   */
  appValidationConfigurations?: AppValidationConfiguration[];

  /**
   * @public
   * <p>The configuration for instance validation.</p>
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}

/**
 * @public
 */
export interface PutAppValidationConfigurationResponse {}

/**
 * @public
 */
export interface StartAppReplicationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface StartAppReplicationResponse {}

/**
 * @public
 */
export interface StartOnDemandAppReplicationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;

  /**
   * @public
   * <p>The description of the replication run.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface StartOnDemandAppReplicationResponse {}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface StartOnDemandReplicationRunRequest {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * @public
   * <p>The description of the replication run.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface StartOnDemandReplicationRunResponse {
  /**
   * @public
   * <p>The ID of the replication run.</p>
   */
  replicationRunId?: string;
}

/**
 * @public
 */
export interface StopAppReplicationRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface StopAppReplicationResponse {}

/**
 * @public
 */
export interface TerminateAppRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

/**
 * @public
 */
export interface TerminateAppResponse {}

/**
 * @public
 */
export interface UpdateAppRequest {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * @public
   * <p>The new name of the application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The new description of the application.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>The server groups in the application to update.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * @public
   * <p>The tags to associate with the application.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateAppResponse {
  /**
   * @public
   * <p>A summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * @public
   * <p>The updated server groups in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * @public
   * <p>The tags associated with the application.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateReplicationJobRequest {
  /**
   * @public
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * @public
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * @public
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * @public
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * @public
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * @public
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * @public
   * <p>When true, the replication job produces encrypted AMIs. For more information,
   *                 <code>KmsKeyId</code>.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
   *             This value can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key ID</p>
   *             </li>
   *             <li>
   *                <p>ARN referring to the KMS key alias</p>
   *             </li>
   *          </ul>
   *          <p>If encrypted is enabled but a KMS key ID is not specified, the
   *             customer's default KMS key for Amazon EBS is used.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface UpdateReplicationJobResponse {}

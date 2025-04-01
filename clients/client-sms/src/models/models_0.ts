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
 * <p>Details about the latest launch of an application.</p>
 * @public
 */
export interface LaunchDetails {
  /**
   * <p>The latest time that this application was launched successfully.</p>
   * @public
   */
  latestLaunchTime?: Date | undefined;

  /**
   * <p>The name of the latest stack launched for this application.</p>
   * @public
   */
  stackName?: string | undefined;

  /**
   * <p>The ID of the latest stack launched for this application.</p>
   * @public
   */
  stackId?: string | undefined;
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
 * <p>Information about the application.</p>
 * @public
 */
export interface AppSummary {
  /**
   * <p>The unique ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  importedAppId?: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Status of the application.</p>
   * @public
   */
  status?: AppStatus | undefined;

  /**
   * <p>A message related to the status of the application</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>Status of the replication configuration.</p>
   * @public
   */
  replicationConfigurationStatus?: AppReplicationConfigurationStatus | undefined;

  /**
   * <p>The replication status of the application.</p>
   * @public
   */
  replicationStatus?: AppReplicationStatus | undefined;

  /**
   * <p>A message related to the replication status of the application.</p>
   * @public
   */
  replicationStatusMessage?: string | undefined;

  /**
   * <p>The timestamp of the application's most recent successful replication.</p>
   * @public
   */
  latestReplicationTime?: Date | undefined;

  /**
   * <p>Status of the launch configuration.</p>
   * @public
   */
  launchConfigurationStatus?: AppLaunchConfigurationStatus | undefined;

  /**
   * <p>The launch status of the application.</p>
   * @public
   */
  launchStatus?: AppLaunchStatus | undefined;

  /**
   * <p>A message related to the launch status of the application.</p>
   * @public
   */
  launchStatusMessage?: string | undefined;

  /**
   * <p>Details about the latest launch of the application.</p>
   * @public
   */
  launchDetails?: LaunchDetails | undefined;

  /**
   * <p>The creation time of the application.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last modified time of the application.</p>
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>The number of server groups present in the application.</p>
   * @public
   */
  totalServerGroups?: number | undefined;

  /**
   * <p>The number of servers present in the application.</p>
   * @public
   */
  totalServers?: number | undefined;
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
 * <p>Location of an Amazon S3 object.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The Amazon S3 bucket key.</p>
   * @public
   */
  key?: string | undefined;
}

/**
 * <p>Contains the location of a validation script.</p>
 * @public
 */
export interface Source {
  /**
   * <p>Location of an Amazon S3 object.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * <p>Contains validation parameters.</p>
 * @public
 */
export interface SSMValidationParameters {
  /**
   * <p>The location of the validation script.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>The ID of the instance. The instance must have the following tag: UserForSMSApplicationValidation=true.</p>
   * @public
   */
  instanceId?: string | undefined;

  /**
   * <p>The type of validation script.</p>
   * @public
   */
  scriptType?: ScriptType | undefined;

  /**
   * <p>The command to run the validation script.</p>
   * @public
   */
  command?: string | undefined;

  /**
   * <p>The timeout interval, in seconds.</p>
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * <p>The name of the S3 bucket for output.</p>
   * @public
   */
  outputS3BucketName?: string | undefined;
}

/**
 * <p>Configuration for validating an application.</p>
 * @public
 */
export interface AppValidationConfiguration {
  /**
   * <p>The ID of the validation.</p>
   * @public
   */
  validationId?: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The validation strategy.</p>
   * @public
   */
  appValidationStrategy?: AppValidationStrategy | undefined;

  /**
   * <p>The validation parameters.</p>
   * @public
   */
  ssmValidationParameters?: SSMValidationParameters | undefined;
}

/**
 * <p>Contains the location of validation output.</p>
 * @public
 */
export interface SSMOutput {
  /**
   * <p>Location of an Amazon S3 object.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * <p>Output from validating an application.</p>
 * @public
 */
export interface AppValidationOutput {
  /**
   * <p>Output from using SSM to validate the application.</p>
   * @public
   */
  ssmOutput?: SSMOutput | undefined;
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
 * <p>Represents a VM server location.</p>
 * @public
 */
export interface VmServerAddress {
  /**
   * <p>The ID of the VM manager.</p>
   * @public
   */
  vmManagerId?: string | undefined;

  /**
   * <p>The ID of the VM.</p>
   * @public
   */
  vmId?: string | undefined;
}

/**
 * <p>Represents a VM server.</p>
 * @public
 */
export interface VmServer {
  /**
   * <p>The VM server location.</p>
   * @public
   */
  vmServerAddress?: VmServerAddress | undefined;

  /**
   * <p>The name of the VM.</p>
   * @public
   */
  vmName?: string | undefined;

  /**
   * <p>The name of the VM manager.</p>
   * @public
   */
  vmManagerName?: string | undefined;

  /**
   * <p>The type of VM management product.</p>
   * @public
   */
  vmManagerType?: VmManagerType | undefined;

  /**
   * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
   * @public
   */
  vmPath?: string | undefined;
}

/**
 * <p>Represents a server.</p>
 * @public
 */
export interface Server {
  /**
   * <p>The ID of the server.</p>
   * @public
   */
  serverId?: string | undefined;

  /**
   * <p>The type of server.</p>
   * @public
   */
  serverType?: ServerType | undefined;

  /**
   * <p>Information about the VM server.</p>
   * @public
   */
  vmServer?: VmServer | undefined;

  /**
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId?: string | undefined;

  /**
   * <p>Indicates whether the replication job is deleted or failed.</p>
   * @public
   */
  replicationJobTerminated?: boolean | undefined;
}

/**
 * <p>Logical grouping of servers.</p>
 * @public
 */
export interface ServerGroup {
  /**
   * <p>The ID of a server group.</p>
   * @public
   */
  serverGroupId?: string | undefined;

  /**
   * <p>The name of a server group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The servers that belong to a server group.</p>
   * @public
   */
  serverList?: Server[] | undefined;
}

/**
 * <p>Key/value pair that can be assigned to an application.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * <p>The name of the new application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the new application</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the service role in the customer's account to be used by Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
   *             application creation.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The server groups to include in the application.</p>
   * @public
   */
  serverGroups?: ServerGroup[] | undefined;

  /**
   * <p>The tags to be associated with the application.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * <p>A summary description of the application.</p>
   * @public
   */
  appSummary?: AppSummary | undefined;

  /**
   * <p>The server groups included in the application.</p>
   * @public
   */
  serverGroups?: ServerGroup[] | undefined;

  /**
   * <p>The tags associated with the application.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>An internal error occurred.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
   * <p>The ID of the server.</p>
   * @public
   */
  serverId: string | undefined;

  /**
   * <p>The seed replication time.</p>
   * @public
   */
  seedReplicationTime: Date | undefined;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   * @public
   */
  frequency?: number | undefined;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   * @public
   */
  runOnce?: boolean | undefined;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>The name of the IAM role to be used by the Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>The description of the replication job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   * @public
   */
  numberOfRecentAmisToKeep?: number | undefined;

  /**
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
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
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationJobResponse {
  /**
   * <p>The unique identifier of the replication job.</p>
   * @public
   */
  replicationJobId?: string | undefined;
}

/**
 * <p>There are no connectors available.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>Indicates whether to stop all replication jobs corresponding to the servers
   *             in the application while deleting the application.</p>
   * @public
   */
  forceStopAppReplication?: boolean | undefined;

  /**
   * <p>Indicates whether to terminate the stack corresponding to the
   *             application while deleting the application.</p>
   * @public
   */
  forceTerminateApp?: boolean | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
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
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationJobResponse {}

/**
 * <p>The specified replication job does not exist.</p>
 * @public
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
   * <p>The ID of the connector.</p>
   * @public
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
   * <p>The ID of the application associated with the change set.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The format for the change set.</p>
   * @public
   */
  changesetFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface GenerateChangeSetResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface GenerateTemplateRequest {
  /**
   * <p>The ID of the application associated with the CloudFormation template.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The format for generating the CloudFormation template.</p>
   * @public
   */
  templateFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface GenerateTemplateResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface GetAppRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
}

/**
 * @public
 */
export interface GetAppResponse {
  /**
   * <p>Information about the application.</p>
   * @public
   */
  appSummary?: AppSummary | undefined;

  /**
   * <p>The server groups that belong to the application.</p>
   * @public
   */
  serverGroups?: ServerGroup[] | undefined;

  /**
   * <p>The tags associated with the application.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
}

/**
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the
 *             server during launch.</p>
 * @public
 */
export interface UserData {
  /**
   * <p>Amazon S3 location of the user-data script.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * <p>Launch configuration for a server.</p>
 * @public
 */
export interface ServerLaunchConfiguration {
  /**
   * <p>The ID of the server with which the launch configuration is associated.</p>
   * @public
   */
  server?: Server | undefined;

  /**
   * <p>The logical ID of the server in the CloudFormation template.</p>
   * @public
   */
  logicalId?: string | undefined;

  /**
   * <p>The ID of the VPC into which the server should be launched.</p>
   * @public
   */
  vpc?: string | undefined;

  /**
   * <p>The ID of the subnet the server should be launched into.</p>
   * @public
   */
  subnet?: string | undefined;

  /**
   * <p>The ID of the security group that applies to the launched server.</p>
   * @public
   */
  securityGroup?: string | undefined;

  /**
   * <p>The name of the Amazon EC2 SSH key to be used for connecting to the launched server.</p>
   * @public
   */
  ec2KeyName?: string | undefined;

  /**
   * <p>Location of the user-data script to be executed when launching the server.</p>
   * @public
   */
  userData?: UserData | undefined;

  /**
   * <p>The instance type to use when launching the server.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Indicates whether a publicly accessible IP address is created when launching the server.</p>
   * @public
   */
  associatePublicIpAddress?: boolean | undefined;

  /**
   * <p>The name of the IAM instance profile.</p>
   * @public
   */
  iamInstanceProfileName?: string | undefined;

  /**
   * <p>Location of an Amazon S3 object.</p>
   * @public
   */
  configureScript?: S3Location | undefined;

  /**
   * <p>The type of configuration script.</p>
   * @public
   */
  configureScriptType?: ScriptType | undefined;
}

/**
 * <p>Launch configuration for a server group.</p>
 * @public
 */
export interface ServerGroupLaunchConfiguration {
  /**
   * <p>The ID of the server group with which the launch configuration is
   *             associated.</p>
   * @public
   */
  serverGroupId?: string | undefined;

  /**
   * <p>The launch order of servers in the server group.</p>
   * @public
   */
  launchOrder?: number | undefined;

  /**
   * <p>The launch configuration for servers in the server group.</p>
   * @public
   */
  serverLaunchConfigurations?: ServerLaunchConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppLaunchConfigurationResponse {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The name of the service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   * @public
   */
  autoLaunch?: boolean | undefined;

  /**
   * <p>The launch configurations for server groups in this application.</p>
   * @public
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
}

/**
 * <p>The replication parameters for replicating a server.</p>
 * @public
 */
export interface ServerReplicationParameters {
  /**
   * <p>The seed time for creating a replication job for the server.</p>
   * @public
   */
  seedTime?: Date | undefined;

  /**
   * <p>The frequency of creating replication jobs for the server.</p>
   * @public
   */
  frequency?: number | undefined;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   * @public
   */
  runOnce?: boolean | undefined;

  /**
   * <p>The license type for creating a replication job for the server.</p>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>The number of recent AMIs to keep when creating a replication job for this server.</p>
   * @public
   */
  numberOfRecentAmisToKeep?: number | undefined;

  /**
   * <p>Indicates whether the replication job produces encrypted AMIs.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
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
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>Replication configuration of a server.</p>
 * @public
 */
export interface ServerReplicationConfiguration {
  /**
   * <p>The ID of the server with which this replication configuration is
   *             associated.</p>
   * @public
   */
  server?: Server | undefined;

  /**
   * <p>The parameters for replicating the server.</p>
   * @public
   */
  serverReplicationParameters?: ServerReplicationParameters | undefined;
}

/**
 * <p>Replication configuration for a server group.</p>
 * @public
 */
export interface ServerGroupReplicationConfiguration {
  /**
   * <p>The ID of the server group with which this replication configuration is
   *             associated.</p>
   * @public
   */
  serverGroupId?: string | undefined;

  /**
   * <p>The replication configuration for servers in the server group.</p>
   * @public
   */
  serverReplicationConfigurations?: ServerReplicationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppReplicationConfigurationResponse {
  /**
   * <p>The replication configurations associated with server groups in this application.</p>
   * @public
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
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
 * <p>Contains validation parameters.</p>
 * @public
 */
export interface UserDataValidationParameters {
  /**
   * <p>The location of the validation script.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>The type of validation script.</p>
   * @public
   */
  scriptType?: ScriptType | undefined;
}

/**
 * <p>Configuration for validating an instance.</p>
 * @public
 */
export interface ServerValidationConfiguration {
  /**
   * <p>Represents a server.</p>
   * @public
   */
  server?: Server | undefined;

  /**
   * <p>The ID of the validation.</p>
   * @public
   */
  validationId?: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The validation strategy.</p>
   * @public
   */
  serverValidationStrategy?: ServerValidationStrategy | undefined;

  /**
   * <p>The validation parameters.</p>
   * @public
   */
  userDataValidationParameters?: UserDataValidationParameters | undefined;
}

/**
 * <p>Configuration for validating an instance.</p>
 * @public
 */
export interface ServerGroupValidationConfiguration {
  /**
   * <p>The ID of the server group.</p>
   * @public
   */
  serverGroupId?: string | undefined;

  /**
   * <p>The validation configuration.</p>
   * @public
   */
  serverValidationConfigurations?: ServerValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppValidationConfigurationResponse {
  /**
   * <p>The configuration for application validation.</p>
   * @public
   */
  appValidationConfigurations?: AppValidationConfiguration[] | undefined;

  /**
   * <p>The configuration for instance validation.</p>
   * @public
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAppValidationOutputRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * <p>Contains output from validating an instance.</p>
 * @public
 */
export interface ServerValidationOutput {
  /**
   * <p>Represents a server.</p>
   * @public
   */
  server?: Server | undefined;
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
 * <p>Contains validation output.</p>
 * @public
 */
export interface ValidationOutput {
  /**
   * <p>The ID of the validation.</p>
   * @public
   */
  validationId?: string | undefined;

  /**
   * <p>The name of the validation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the validation.</p>
   * @public
   */
  status?: ValidationStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The latest time that the validation was performed.</p>
   * @public
   */
  latestValidationTime?: Date | undefined;

  /**
   * <p>The output from validating an application.</p>
   * @public
   */
  appValidationOutput?: AppValidationOutput | undefined;

  /**
   * <p>The output from validation an instance.</p>
   * @public
   */
  serverValidationOutput?: ServerValidationOutput | undefined;
}

/**
 * @public
 */
export interface GetAppValidationOutputResponse {
  /**
   * <p>The validation output.</p>
   * @public
   */
  validationOutputList?: ValidationOutput[] | undefined;
}

/**
 * @public
 */
export interface GetConnectorsRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
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
 * <p>Represents a connector.</p>
 * @public
 */
export interface Connector {
  /**
   * <p>The ID of the connector.</p>
   * @public
   */
  connectorId?: string | undefined;

  /**
   * <p>The connector version.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The status of the connector.</p>
   * @public
   */
  status?: ConnectorStatus | undefined;

  /**
   * <p>The capabilities of the connector.</p>
   * @public
   */
  capabilityList?: ConnectorCapability[] | undefined;

  /**
   * <p>The name of the VM manager.</p>
   * @public
   */
  vmManagerName?: string | undefined;

  /**
   * <p>The VM management product.</p>
   * @public
   */
  vmManagerType?: VmManagerType | undefined;

  /**
   * <p>The ID of the VM manager.</p>
   * @public
   */
  vmManagerId?: string | undefined;

  /**
   * <p>The IP address of the connector.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The MAC address of the connector.</p>
   * @public
   */
  macAddress?: string | undefined;

  /**
   * <p>The time the connector was associated.</p>
   * @public
   */
  associatedOn?: Date | undefined;
}

/**
 * @public
 */
export interface GetConnectorsResponse {
  /**
   * <p>Information about the registered connectors.</p>
   * @public
   */
  connectorList?: Connector[] | undefined;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReplicationJobsRequest {
  /**
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId?: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details of the current stage of a replication run.</p>
 * @public
 */
export interface ReplicationRunStageDetails {
  /**
   * <p>The current stage of a replication run.</p>
   * @public
   */
  stage?: string | undefined;

  /**
   * <p>The progress of the current stage of a replication run.</p>
   * @public
   */
  stageProgress?: string | undefined;
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
 * <p>Represents a replication run.</p>
 * @public
 */
export interface ReplicationRun {
  /**
   * <p>The ID of the replication run.</p>
   * @public
   */
  replicationRunId?: string | undefined;

  /**
   * <p>The state of the replication run.</p>
   * @public
   */
  state?: ReplicationRunState | undefined;

  /**
   * <p>The type of replication run.</p>
   * @public
   */
  type?: ReplicationRunType | undefined;

  /**
   * <p>Details about the current stage of the replication run.</p>
   * @public
   */
  stageDetails?: ReplicationRunStageDetails | undefined;

  /**
   * <p>The description of the current status of the replication job.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) from the replication
   *             run.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The start time of the next replication run.</p>
   * @public
   */
  scheduledStartTime?: Date | undefined;

  /**
   * <p>The completion time of the last replication run.</p>
   * @public
   */
  completedTime?: Date | undefined;

  /**
   * <p>The description of the replication run.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the replication run should produce an encrypted AMI.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
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
   * @public
   */
  kmsKeyId?: string | undefined;
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
 * <p>Represents a replication job.</p>
 * @public
 */
export interface ReplicationJob {
  /**
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId?: string | undefined;

  /**
   * <p>The ID of the server.</p>
   * @public
   */
  serverId?: string | undefined;

  /**
   * <p>The type of server.</p>
   * @public
   */
  serverType?: ServerType | undefined;

  /**
   * <p>Information about the VM server.</p>
   * @public
   */
  vmServer?: VmServer | undefined;

  /**
   * <p>The seed replication time.</p>
   * @public
   */
  seedReplicationTime?: Date | undefined;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   * @public
   */
  frequency?: number | undefined;

  /**
   * <p>Indicates whether to run the replication job one time.</p>
   * @public
   */
  runOnce?: boolean | undefined;

  /**
   * <p>The start time of the next replication run.</p>
   * @public
   */
  nextReplicationRunStartTime?: Date | undefined;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>The ID of the latest Amazon Machine Image (AMI).</p>
   * @public
   */
  latestAmiId?: string | undefined;

  /**
   * <p>The state of the replication job.</p>
   * @public
   */
  state?: ReplicationJobState | undefined;

  /**
   * <p>The description of the current status of the replication job.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The description of the replication job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of recent AMIs to keep in the customer's account for a replication job. By
   *             default, the value is set to zero, meaning that all AMIs are kept.</p>
   * @public
   */
  numberOfRecentAmisToKeep?: number | undefined;

  /**
   * <p>Indicates whether the replication job should produce encrypted AMIs.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
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
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Information about the replication runs.</p>
   * @public
   */
  replicationRunList?: ReplicationRun[] | undefined;
}

/**
 * @public
 */
export interface GetReplicationJobsResponse {
  /**
   * <p>Information about the replication jobs.</p>
   * @public
   */
  replicationJobList?: ReplicationJob[] | undefined;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReplicationRunsRequest {
  /**
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetReplicationRunsResponse {
  /**
   * <p>Information about the replication job.</p>
   * @public
   */
  replicationJob?: ReplicationJob | undefined;

  /**
   * <p>Information about the replication runs.</p>
   * @public
   */
  replicationRunList?: ReplicationRun[] | undefined;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServersRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The server addresses.</p>
   * @public
   */
  vmServerAddressList?: VmServerAddress[] | undefined;
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
   * <p>The time when the server was last modified.</p>
   * @public
   */
  lastModifiedOn?: Date | undefined;

  /**
   * <p>The status of the server catalog.</p>
   * @public
   */
  serverCatalogStatus?: ServerCatalogStatus | undefined;

  /**
   * <p>Information about the servers.</p>
   * @public
   */
  serverList?: Server[] | undefined;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAppCatalogRequest {
  /**
   * <p>The name of the service role. If you omit this parameter, we create a service-linked role
   *             for Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy
   *                 and trust policy</a> described in the <i>Migration Hub User Guide</i>.</p>
   * @public
   */
  roleName?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The unique application IDs.</p>
   * @public
   */
  appIds?: string[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 100. To
   *             retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * <p>The application summaries.</p>
   * @public
   */
  apps?: AppSummary[] | undefined;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when there
   *             are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the status of validating an application.</p>
 * @public
 */
export interface NotificationContext {
  /**
   * <p>The ID of the validation.</p>
   * @public
   */
  validationId?: string | undefined;

  /**
   * <p>The status of the validation.</p>
   * @public
   */
  status?: ValidationStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface NotifyAppValidationOutputRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The notification information.</p>
   * @public
   */
  notificationContext?: NotificationContext | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The name of service role in the customer's account that CloudFormation uses to launch the
   *             application.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
   * @public
   */
  autoLaunch?: boolean | undefined;

  /**
   * <p>Information about the launch configurations for server groups in the application.</p>
   * @public
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[] | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>Information about the replication configurations for server groups in the application.</p>
   * @public
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[] | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The configuration for application validation.</p>
   * @public
   */
  appValidationConfigurations?: AppValidationConfiguration[] | undefined;

  /**
   * <p>The configuration for instance validation.</p>
   * @public
   */
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[] | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The description of the replication run.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartOnDemandAppReplicationResponse {}

/**
 * <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 * @public
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
 * @public
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
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId: string | undefined;

  /**
   * <p>The description of the replication run.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartOnDemandReplicationRunResponse {
  /**
   * <p>The ID of the replication run.</p>
   * @public
   */
  replicationRunId?: string | undefined;
}

/**
 * @public
 */
export interface StopAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;
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
   * <p>The ID of the application.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The new name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The new description of the application.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the service role in the customer's account used by Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>The server groups in the application to update.</p>
   * @public
   */
  serverGroups?: ServerGroup[] | undefined;

  /**
   * <p>The tags to associate with the application.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppResponse {
  /**
   * <p>A summary description of the application.</p>
   * @public
   */
  appSummary?: AppSummary | undefined;

  /**
   * <p>The updated server groups in the application.</p>
   * @public
   */
  serverGroups?: ServerGroup[] | undefined;

  /**
   * <p>The tags associated with the application.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationJobRequest {
  /**
   * <p>The ID of the replication job.</p>
   * @public
   */
  replicationJobId: string | undefined;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   * @public
   */
  frequency?: number | undefined;

  /**
   * <p>The start time of the next replication run.</p>
   * @public
   */
  nextReplicationRunStartTime?: Date | undefined;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>The name of the IAM role to be used by Server Migration Service.</p>
   * @public
   */
  roleName?: string | undefined;

  /**
   * <p>The description of the replication job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
   *             maximum number is reached and a new AMI is created.</p>
   * @public
   */
  numberOfRecentAmisToKeep?: number | undefined;

  /**
   * <p>When true, the replication job produces encrypted AMIs. For more information,
   *                 <code>KmsKeyId</code>.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
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
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationJobResponse {}

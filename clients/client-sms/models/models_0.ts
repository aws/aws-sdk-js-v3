import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace LaunchDetails {
  export const filterSensitiveLog = (obj: LaunchDetails): any => ({
    ...obj,
  });
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
   * <p>The name of the service role in the customer's account used by AWS SMS.</p>
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

export namespace AppSummary {
  export const filterSensitiveLog = (obj: AppSummary): any => ({
    ...obj,
  });
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

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
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

export namespace Source {
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
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
   * <p>The command to run the validation script</p>
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

export namespace SSMValidationParameters {
  export const filterSensitiveLog = (obj: SSMValidationParameters): any => ({
    ...obj,
  });
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

export namespace AppValidationConfiguration {
  export const filterSensitiveLog = (obj: AppValidationConfiguration): any => ({
    ...obj,
  });
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

export namespace SSMOutput {
  export const filterSensitiveLog = (obj: SSMOutput): any => ({
    ...obj,
  });
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

export namespace AppValidationOutput {
  export const filterSensitiveLog = (obj: AppValidationOutput): any => ({
    ...obj,
  });
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

export namespace VmServerAddress {
  export const filterSensitiveLog = (obj: VmServerAddress): any => ({
    ...obj,
  });
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

export namespace VmServer {
  export const filterSensitiveLog = (obj: VmServer): any => ({
    ...obj,
  });
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

export namespace Server {
  export const filterSensitiveLog = (obj: Server): any => ({
    ...obj,
  });
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

export namespace ServerGroup {
  export const filterSensitiveLog = (obj: ServerGroup): any => ({
    ...obj,
  });
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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
   * <p>The name of the service role in the customer's account to be used by AWS SMS.</p>
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

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
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

export namespace CreateAppResponse {
  export const filterSensitiveLog = (obj: CreateAppResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalError extends __SmithyException, $MetadataBearer {
  name: "InternalError";
  $fault: "server";
  message?: string;
}

export namespace InternalError {
  export const filterSensitiveLog = (obj: InternalError): any => ({
    ...obj,
  });
}

/**
 * <p>A specified parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>A required parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
  name: "MissingRequiredParameterException";
  $fault: "client";
  message?: string;
}

export namespace MissingRequiredParameterException {
  export const filterSensitiveLog = (obj: MissingRequiredParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message?: string;
}

export namespace OperationNotPermittedException {
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
}

/**
 * <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 */
export interface UnauthorizedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedOperationException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedOperationException {
  export const filterSensitiveLog = (obj: UnauthorizedOperationException): any => ({
    ...obj,
  });
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
   * <p>The name of the IAM role to be used by the AWS SMS.</p>
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

export namespace CreateReplicationJobRequest {
  export const filterSensitiveLog = (obj: CreateReplicationJobRequest): any => ({
    ...obj,
  });
}

export interface CreateReplicationJobResponse {
  /**
   * <p>The unique identifier of the replication job.</p>
   */
  replicationJobId?: string;
}

export namespace CreateReplicationJobResponse {
  export const filterSensitiveLog = (obj: CreateReplicationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There are no connectors available.</p>
 */
export interface NoConnectorsAvailableException extends __SmithyException, $MetadataBearer {
  name: "NoConnectorsAvailableException";
  $fault: "client";
  message?: string;
}

export namespace NoConnectorsAvailableException {
  export const filterSensitiveLog = (obj: NoConnectorsAvailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified replication job already exists.</p>
 */
export interface ReplicationJobAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ReplicationJobAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ReplicationJobAlreadyExistsException {
  export const filterSensitiveLog = (obj: ReplicationJobAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified server cannot be replicated.</p>
 */
export interface ServerCannotBeReplicatedException extends __SmithyException, $MetadataBearer {
  name: "ServerCannotBeReplicatedException";
  $fault: "client";
  message?: string;
}

export namespace ServerCannotBeReplicatedException {
  export const filterSensitiveLog = (obj: ServerCannotBeReplicatedException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface TemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "TemporarilyUnavailableException";
  $fault: "server";
}

export namespace TemporarilyUnavailableException {
  export const filterSensitiveLog = (obj: TemporarilyUnavailableException): any => ({
    ...obj,
  });
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

export namespace DeleteAppRequest {
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppResponse {}

export namespace DeleteAppResponse {
  export const filterSensitiveLog = (obj: DeleteAppResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace DeleteAppLaunchConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteAppLaunchConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppLaunchConfigurationResponse {}

export namespace DeleteAppLaunchConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteAppLaunchConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace DeleteAppReplicationConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteAppReplicationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppReplicationConfigurationResponse {}

export namespace DeleteAppReplicationConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteAppReplicationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

export namespace DeleteAppValidationConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteAppValidationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppValidationConfigurationResponse {}

export namespace DeleteAppValidationConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteAppValidationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteReplicationJobRequest {
  /**
   * <p>The ID of the replication job.</p>
   */
  replicationJobId: string | undefined;
}

export namespace DeleteReplicationJobRequest {
  export const filterSensitiveLog = (obj: DeleteReplicationJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteReplicationJobResponse {}

export namespace DeleteReplicationJobResponse {
  export const filterSensitiveLog = (obj: DeleteReplicationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified replication job does not exist.</p>
 */
export interface ReplicationJobNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ReplicationJobNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ReplicationJobNotFoundException {
  export const filterSensitiveLog = (obj: ReplicationJobNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteServerCatalogRequest {}

export namespace DeleteServerCatalogRequest {
  export const filterSensitiveLog = (obj: DeleteServerCatalogRequest): any => ({
    ...obj,
  });
}

export interface DeleteServerCatalogResponse {}

export namespace DeleteServerCatalogResponse {
  export const filterSensitiveLog = (obj: DeleteServerCatalogResponse): any => ({
    ...obj,
  });
}

export interface DisassociateConnectorRequest {
  /**
   * <p>The ID of the connector.</p>
   */
  connectorId: string | undefined;
}

export namespace DisassociateConnectorRequest {
  export const filterSensitiveLog = (obj: DisassociateConnectorRequest): any => ({
    ...obj,
  });
}

export interface DisassociateConnectorResponse {}

export namespace DisassociateConnectorResponse {
  export const filterSensitiveLog = (obj: DisassociateConnectorResponse): any => ({
    ...obj,
  });
}

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

export namespace GenerateChangeSetRequest {
  export const filterSensitiveLog = (obj: GenerateChangeSetRequest): any => ({
    ...obj,
  });
}

export interface GenerateChangeSetResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

export namespace GenerateChangeSetResponse {
  export const filterSensitiveLog = (obj: GenerateChangeSetResponse): any => ({
    ...obj,
  });
}

export interface GenerateTemplateRequest {
  /**
   * <p>The ID of the application associated with the AWS CloudFormation template.</p>
   */
  appId?: string;

  /**
   * <p>The format for generating the AWS CloudFormation template.</p>
   */
  templateFormat?: OutputFormat | string;
}

export namespace GenerateTemplateRequest {
  export const filterSensitiveLog = (obj: GenerateTemplateRequest): any => ({
    ...obj,
  });
}

export interface GenerateTemplateResponse {
  /**
   * <p>The location of the Amazon S3 object.</p>
   */
  s3Location?: S3Location;
}

export namespace GenerateTemplateResponse {
  export const filterSensitiveLog = (obj: GenerateTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace GetAppRequest {
  export const filterSensitiveLog = (obj: GetAppRequest): any => ({
    ...obj,
  });
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

export namespace GetAppResponse {
  export const filterSensitiveLog = (obj: GetAppResponse): any => ({
    ...obj,
  });
}

export interface GetAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace GetAppLaunchConfigurationRequest {
  export const filterSensitiveLog = (obj: GetAppLaunchConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UserData {
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj,
  });
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
   * <p>The logical ID of the server in the AWS CloudFormation template.</p>
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

export namespace ServerLaunchConfiguration {
  export const filterSensitiveLog = (obj: ServerLaunchConfiguration): any => ({
    ...obj,
  });
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

export namespace ServerGroupLaunchConfiguration {
  export const filterSensitiveLog = (obj: ServerGroupLaunchConfiguration): any => ({
    ...obj,
  });
}

export interface GetAppLaunchConfigurationResponse {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The name of the service role in the customer's account that AWS CloudFormation uses to launch the
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

export namespace GetAppLaunchConfigurationResponse {
  export const filterSensitiveLog = (obj: GetAppLaunchConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetAppReplicationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace GetAppReplicationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetAppReplicationConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace ServerReplicationParameters {
  export const filterSensitiveLog = (obj: ServerReplicationParameters): any => ({
    ...obj,
  });
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

export namespace ServerReplicationConfiguration {
  export const filterSensitiveLog = (obj: ServerReplicationConfiguration): any => ({
    ...obj,
  });
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

export namespace ServerGroupReplicationConfiguration {
  export const filterSensitiveLog = (obj: ServerGroupReplicationConfiguration): any => ({
    ...obj,
  });
}

export interface GetAppReplicationConfigurationResponse {
  /**
   * <p>The replication configurations associated with server groups in this application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

export namespace GetAppReplicationConfigurationResponse {
  export const filterSensitiveLog = (obj: GetAppReplicationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetAppValidationConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

export namespace GetAppValidationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetAppValidationConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UserDataValidationParameters {
  export const filterSensitiveLog = (obj: UserDataValidationParameters): any => ({
    ...obj,
  });
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

export namespace ServerValidationConfiguration {
  export const filterSensitiveLog = (obj: ServerValidationConfiguration): any => ({
    ...obj,
  });
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

export namespace ServerGroupValidationConfiguration {
  export const filterSensitiveLog = (obj: ServerGroupValidationConfiguration): any => ({
    ...obj,
  });
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

export namespace GetAppValidationConfigurationResponse {
  export const filterSensitiveLog = (obj: GetAppValidationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetAppValidationOutputRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId: string | undefined;
}

export namespace GetAppValidationOutputRequest {
  export const filterSensitiveLog = (obj: GetAppValidationOutputRequest): any => ({
    ...obj,
  });
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

export namespace ServerValidationOutput {
  export const filterSensitiveLog = (obj: ServerValidationOutput): any => ({
    ...obj,
  });
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

export namespace ValidationOutput {
  export const filterSensitiveLog = (obj: ValidationOutput): any => ({
    ...obj,
  });
}

export interface GetAppValidationOutputResponse {
  /**
   * <p>The validation output.</p>
   */
  validationOutputList?: ValidationOutput[];
}

export namespace GetAppValidationOutputResponse {
  export const filterSensitiveLog = (obj: GetAppValidationOutputResponse): any => ({
    ...obj,
  });
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

export namespace GetConnectorsRequest {
  export const filterSensitiveLog = (obj: GetConnectorsRequest): any => ({
    ...obj,
  });
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

export namespace Connector {
  export const filterSensitiveLog = (obj: Connector): any => ({
    ...obj,
  });
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

export namespace GetConnectorsResponse {
  export const filterSensitiveLog = (obj: GetConnectorsResponse): any => ({
    ...obj,
  });
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

export namespace GetReplicationJobsRequest {
  export const filterSensitiveLog = (obj: GetReplicationJobsRequest): any => ({
    ...obj,
  });
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

export namespace ReplicationRunStageDetails {
  export const filterSensitiveLog = (obj: ReplicationRunStageDetails): any => ({
    ...obj,
  });
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

export namespace ReplicationRun {
  export const filterSensitiveLog = (obj: ReplicationRun): any => ({
    ...obj,
  });
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
   * <p>The name of the IAM role to be used by AWS SMS.</p>
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

export namespace ReplicationJob {
  export const filterSensitiveLog = (obj: ReplicationJob): any => ({
    ...obj,
  });
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

export namespace GetReplicationJobsResponse {
  export const filterSensitiveLog = (obj: GetReplicationJobsResponse): any => ({
    ...obj,
  });
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

export namespace GetReplicationRunsRequest {
  export const filterSensitiveLog = (obj: GetReplicationRunsRequest): any => ({
    ...obj,
  });
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

export namespace GetReplicationRunsResponse {
  export const filterSensitiveLog = (obj: GetReplicationRunsResponse): any => ({
    ...obj,
  });
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

export namespace GetServersRequest {
  export const filterSensitiveLog = (obj: GetServersRequest): any => ({
    ...obj,
  });
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

export namespace GetServersResponse {
  export const filterSensitiveLog = (obj: GetServersResponse): any => ({
    ...obj,
  });
}

export interface ImportAppCatalogRequest {
  /**
   * <p>The name of the service role. If you omit this parameter, we create a service-linked role
   *             for AWS Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy
   *             and trust policy</a> described in the <i>AWS Migration Hub User Guide</i>.</p>
   */
  roleName?: string;
}

export namespace ImportAppCatalogRequest {
  export const filterSensitiveLog = (obj: ImportAppCatalogRequest): any => ({
    ...obj,
  });
}

export interface ImportAppCatalogResponse {}

export namespace ImportAppCatalogResponse {
  export const filterSensitiveLog = (obj: ImportAppCatalogResponse): any => ({
    ...obj,
  });
}

export interface ImportServerCatalogRequest {}

export namespace ImportServerCatalogRequest {
  export const filterSensitiveLog = (obj: ImportServerCatalogRequest): any => ({
    ...obj,
  });
}

export interface ImportServerCatalogResponse {}

export namespace ImportServerCatalogResponse {
  export const filterSensitiveLog = (obj: ImportServerCatalogResponse): any => ({
    ...obj,
  });
}

export interface LaunchAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace LaunchAppRequest {
  export const filterSensitiveLog = (obj: LaunchAppRequest): any => ({
    ...obj,
  });
}

export interface LaunchAppResponse {}

export namespace LaunchAppResponse {
  export const filterSensitiveLog = (obj: LaunchAppResponse): any => ({
    ...obj,
  });
}

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

export namespace ListAppsRequest {
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj,
  });
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

export namespace ListAppsResponse {
  export const filterSensitiveLog = (obj: ListAppsResponse): any => ({
    ...obj,
  });
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

export namespace NotificationContext {
  export const filterSensitiveLog = (obj: NotificationContext): any => ({
    ...obj,
  });
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

export namespace NotifyAppValidationOutputRequest {
  export const filterSensitiveLog = (obj: NotifyAppValidationOutputRequest): any => ({
    ...obj,
  });
}

export interface NotifyAppValidationOutputResponse {}

export namespace NotifyAppValidationOutputResponse {
  export const filterSensitiveLog = (obj: NotifyAppValidationOutputResponse): any => ({
    ...obj,
  });
}

export interface PutAppLaunchConfigurationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>The name of service role in the customer's account that AWS CloudFormation uses to launch the
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

export namespace PutAppLaunchConfigurationRequest {
  export const filterSensitiveLog = (obj: PutAppLaunchConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutAppLaunchConfigurationResponse {}

export namespace PutAppLaunchConfigurationResponse {
  export const filterSensitiveLog = (obj: PutAppLaunchConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace PutAppReplicationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutAppReplicationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutAppReplicationConfigurationResponse {}

export namespace PutAppReplicationConfigurationResponse {
  export const filterSensitiveLog = (obj: PutAppReplicationConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace PutAppValidationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutAppValidationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutAppValidationConfigurationResponse {}

export namespace PutAppValidationConfigurationResponse {
  export const filterSensitiveLog = (obj: PutAppValidationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface StartAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace StartAppReplicationRequest {
  export const filterSensitiveLog = (obj: StartAppReplicationRequest): any => ({
    ...obj,
  });
}

export interface StartAppReplicationResponse {}

export namespace StartAppReplicationResponse {
  export const filterSensitiveLog = (obj: StartAppReplicationResponse): any => ({
    ...obj,
  });
}

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

export namespace StartOnDemandAppReplicationRequest {
  export const filterSensitiveLog = (obj: StartOnDemandAppReplicationRequest): any => ({
    ...obj,
  });
}

export interface StartOnDemandAppReplicationResponse {}

export namespace StartOnDemandAppReplicationResponse {
  export const filterSensitiveLog = (obj: StartOnDemandAppReplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 */
export interface DryRunOperationException extends __SmithyException, $MetadataBearer {
  name: "DryRunOperationException";
  $fault: "client";
  message?: string;
}

export namespace DryRunOperationException {
  export const filterSensitiveLog = (obj: DryRunOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 */
export interface ReplicationRunLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ReplicationRunLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ReplicationRunLimitExceededException {
  export const filterSensitiveLog = (obj: ReplicationRunLimitExceededException): any => ({
    ...obj,
  });
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

export namespace StartOnDemandReplicationRunRequest {
  export const filterSensitiveLog = (obj: StartOnDemandReplicationRunRequest): any => ({
    ...obj,
  });
}

export interface StartOnDemandReplicationRunResponse {
  /**
   * <p>The ID of the replication run.</p>
   */
  replicationRunId?: string;
}

export namespace StartOnDemandReplicationRunResponse {
  export const filterSensitiveLog = (obj: StartOnDemandReplicationRunResponse): any => ({
    ...obj,
  });
}

export interface StopAppReplicationRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace StopAppReplicationRequest {
  export const filterSensitiveLog = (obj: StopAppReplicationRequest): any => ({
    ...obj,
  });
}

export interface StopAppReplicationResponse {}

export namespace StopAppReplicationResponse {
  export const filterSensitiveLog = (obj: StopAppReplicationResponse): any => ({
    ...obj,
  });
}

export interface TerminateAppRequest {
  /**
   * <p>The ID of the application.</p>
   */
  appId?: string;
}

export namespace TerminateAppRequest {
  export const filterSensitiveLog = (obj: TerminateAppRequest): any => ({
    ...obj,
  });
}

export interface TerminateAppResponse {}

export namespace TerminateAppResponse {
  export const filterSensitiveLog = (obj: TerminateAppResponse): any => ({
    ...obj,
  });
}

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
   * <p>The name of the service role in the customer's account used by AWS SMS.</p>
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

export namespace UpdateAppRequest {
  export const filterSensitiveLog = (obj: UpdateAppRequest): any => ({
    ...obj,
  });
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

export namespace UpdateAppResponse {
  export const filterSensitiveLog = (obj: UpdateAppResponse): any => ({
    ...obj,
  });
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
   * <p>The name of the IAM role to be used by AWS SMS.</p>
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

export namespace UpdateReplicationJobRequest {
  export const filterSensitiveLog = (obj: UpdateReplicationJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateReplicationJobResponse {}

export namespace UpdateReplicationJobResponse {
  export const filterSensitiveLog = (obj: UpdateReplicationJobResponse): any => ({
    ...obj,
  });
}

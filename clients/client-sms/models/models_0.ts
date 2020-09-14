import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AppLaunchStatus {
  ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid = "CONFIGURATION_INVALID",
  DeltaLaunchFailed = "DELTA_LAUNCH_FAILED",
  DeltaLaunchInProgress = "DELTA_LAUNCH_IN_PROGRESS",
  LaunchFailed = "LAUNCH_FAILED",
  LaunchInProgress = "LAUNCH_IN_PROGRESS",
  LaunchPending = "LAUNCH_PENDING",
  Launched = "LAUNCHED",
  ReadyForConfiguration = "READY_FOR_CONFIGURATION",
  ReadyForLaunch = "READY_FOR_LAUNCH",
  TerminateFailed = "TERMINATE_FAILED",
  TerminateInProgress = "TERMINATE_IN_PROGRESS",
  Terminated = "TERMINATED",
  ValidationInProgress = "VALIDATION_IN_PROGRESS",
}

export enum AppReplicationStatus {
  ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
  ConfigurationInvalid = "CONFIGURATION_INVALID",
  DeltaReplicated = "DELTA_REPLICATED",
  DeltaReplicationFailed = "DELTA_REPLICATION_FAILED",
  DeltaReplicationInProgress = "DELTA_REPLICATION_IN_PROGRESS",
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
   * <p>Name of the latest stack launched for this application.</p>
   */
  stackName?: string;

  /**
   * <p>Latest time this application was launched successfully.</p>
   */
  latestLaunchTime?: Date;

  /**
   * <p>Identifier of the latest stack launched for this application.</p>
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
   * <p>Details about the latest launch of the application.</p>
   */
  launchDetails?: LaunchDetails;

  /**
   * <p>Status of the application.</p>
   */
  status?: AppStatus | string;

  /**
   * <p>Launch status of the application.</p>
   */
  launchStatus?: AppLaunchStatus | string;

  /**
   * <p>Description of the application.</p>
   */
  description?: string;

  /**
   * <p>Timestamp of the application's creation.</p>
   */
  lastModified?: Date;

  /**
   * <p>Time of creation of this application.</p>
   */
  creationTime?: Date;

  /**
   * <p>A message related to the status of the application</p>
   */
  statusMessage?: string;

  /**
   * <p>Replication status of the application.</p>
   */
  replicationStatus?: AppReplicationStatus | string;

  /**
   * <p>A message related to the launch status of the application.</p>
   */
  launchStatusMessage?: string;

  /**
   * <p>Unique ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>Number of server groups present in the application.</p>
   */
  totalServerGroups?: number;

  /**
   * <p>Number of servers present in the application.</p>
   */
  totalServers?: number;

  /**
   * <p>Name of the application.</p>
   */
  name?: string;

  /**
   * <p>A message related to the replication status of the application.</p>
   */
  replicationStatusMessage?: string;

  /**
   * <p>Name of the service role in the customer's account used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>Timestamp of the application's most recent successful replication.</p>
   */
  latestReplicationTime?: Date;
}

export namespace AppSummary {
  export const filterSensitiveLog = (obj: AppSummary): any => ({
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
   * <p>The identifier of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The identifier of the VM.</p>
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
   * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
   */
  vmPath?: string;

  /**
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The name of the VM.</p>
   */
  vmName?: string;

  /**
   * <p>Information about the VM server location.</p>
   */
  vmServerAddress?: VmServerAddress;

  /**
   * <p>The type of VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;
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
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * <p>Indicates whether the replication job is deleted or failed.</p>
   */
  replicationJobTerminated?: boolean;

  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The identifier of the server.</p>
   */
  serverId?: string;
}

export namespace Server {
  export const filterSensitiveLog = (obj: Server): any => ({
    ...obj,
  });
}

/**
 * <p>A logical grouping of servers.</p>
 */
export interface ServerGroup {
  /**
   * <p>Identifier of a server group.</p>
   */
  serverGroupId?: string;

  /**
   * <p>Name of a server group.</p>
   */
  name?: string;

  /**
   * <p>List of servers belonging to a server group.</p>
   */
  serverList?: Server[];
}

export namespace ServerGroup {
  export const filterSensitiveLog = (obj: ServerGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A label that can be assigned to an application.</p>
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   */
  key?: string;

  /**
   * <p>Tag value.</p>
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
   * <p>Name of the new application.</p>
   */
  name?: string;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure idempotency of application
   *             creation.</p>
   */
  clientToken?: string;

  /**
   * <p>Description of the new application</p>
   */
  description?: string;

  /**
   * <p>List of tags to be associated with the application.</p>
   */
  tags?: Tag[];

  /**
   * <p>List of server groups to include in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>Name of service role in customer's account to be used by AWS SMS.</p>
   */
  roleName?: string;
}

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
}

export interface CreateAppResponse {
  /**
   * <p>Summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>List of server groups included in the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>List of taags associated with the application.</p>
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
 * <p>You lack permissions needed to perform this operation. Check your IAM policies, and
 *             ensure that you are using the correct access keys.</p>
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
   * <p>The name of the IAM role to be used by the AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>The identifier of the server.</p>
   */
  serverId: string | undefined;

  /**
   * <p></p>
   */
  runOnce?: boolean;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>When <i>true</i>, the replication job produces encrypted AMIs. See also
   *                 <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
   *             customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime: Date | undefined;
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
   * <p>While deleting the application, terminate the stack corresponding to the
   *             application.</p>
   */
  forceTerminateApp?: boolean;

  /**
   * <p>While deleting the application, stop all replication jobs corresponding to the servers
   *             in the application.</p>
   */
  forceStopAppReplication?: boolean;

  /**
   * <p>ID of the application to delete.</p>
   */
  appId?: string;
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
   * <p>ID of the application associated with the launch configuration.</p>
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
   * <p>ID of the application associated with the replication configuration.</p>
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

export interface DeleteReplicationJobRequest {
  /**
   * <p>The identifier of the replication job.</p>
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
   * <p>The identifier of the connector.</p>
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
   * <p>Format for the change set.</p>
   */
  changesetFormat?: OutputFormat | string;

  /**
   * <p>ID of the application associated with the change set.</p>
   */
  appId?: string;
}

export namespace GenerateChangeSetRequest {
  export const filterSensitiveLog = (obj: GenerateChangeSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Location of the Amazon S3 object in the customer's account.</p>
 */
export interface S3Location {
  /**
   * <p>Amazon S3 bucket key.</p>
   */
  key?: string;

  /**
   * <p>Amazon S3 bucket name.</p>
   */
  bucket?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

export interface GenerateChangeSetResponse {
  /**
   * <p>Location of the Amazon S3 object.</p>
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
   * <p>Format for generating the Amazon CloudFormation template.</p>
   */
  templateFormat?: OutputFormat | string;

  /**
   * <p>ID of the application associated with the Amazon CloudFormation template.</p>
   */
  appId?: string;
}

export namespace GenerateTemplateRequest {
  export const filterSensitiveLog = (obj: GenerateTemplateRequest): any => ({
    ...obj,
  });
}

export interface GenerateTemplateResponse {
  /**
   * <p>Location of the Amazon S3 object.</p>
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
   * <p>ID of the application whose information is being retrieved.</p>
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
   * <p>List of server groups belonging to the application.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>Information about the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>List of tags associated with the application.</p>
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
   * <p>ID of the application launch configuration.</p>
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
   * <p>Identifier of the security group that applies to the launched server.</p>
   */
  securityGroup?: string;

  /**
   * <p>If true, a publicly accessible IP address is created when launching the server.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Identifier of the VPC the server should be launched into.</p>
   */
  vpc?: string;

  /**
   * <p>Logical ID of the server in the Amazon CloudFormation template.</p>
   */
  logicalId?: string;

  /**
   * <p>Instance type to be used for launching the server.</p>
   */
  instanceType?: string;

  /**
   * <p>Identifier of the subnet the server should be launched into.</p>
   */
  subnet?: string;

  /**
   * <p>Identifier of the server the launch configuration is associated with.</p>
   */
  server?: Server;

  /**
   * <p>Name of the EC2 SSH Key to be used for connecting to the launched server.</p>
   */
  ec2KeyName?: string;

  /**
   * <p>Location of the user-data script to be executed when launching the server.</p>
   */
  userData?: UserData;
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
   * <p>Launch order of servers in the server group.</p>
   */
  launchOrder?: number;

  /**
   * <p>Launch configuration for servers in the server group.</p>
   */
  serverLaunchConfigurations?: ServerLaunchConfiguration[];

  /**
   * <p>Identifier of the server group the launch configuration is associated with.</p>
   */
  serverGroupId?: string;
}

export namespace ServerGroupLaunchConfiguration {
  export const filterSensitiveLog = (obj: ServerGroupLaunchConfiguration): any => ({
    ...obj,
  });
}

export interface GetAppLaunchConfigurationResponse {
  /**
   * <p>List of launch configurations for server groups in this application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];

  /**
   * <p>Name of the service role in the customer's account that Amazon CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * <p>ID of the application associated with the launch configuration.</p>
   */
  appId?: string;
}

export namespace GetAppLaunchConfigurationResponse {
  export const filterSensitiveLog = (obj: GetAppLaunchConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetAppReplicationConfigurationRequest {
  /**
   * <p>ID of the application associated with the replication configuration.</p>
   */
  appId?: string;
}

export namespace GetAppReplicationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetAppReplicationConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Replication parameters for replicating a server.</p>
 */
export interface ServerReplicationParameters {
  /**
   * <p>Frequency of creating replication jobs for the server.</p>
   */
  frequency?: number;

  /**
   * <p></p>
   *         <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
   *             customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p></p>
   */
  runOnce?: boolean;

  /**
   * <p>Number of recent AMIs to keep when creating a replication job for this server.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>License type for creating a replication job for the server.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>When true, the replication job produces encrypted AMIs. See also <code>KmsKeyId</code>
   *             below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>Seed time for creating a replication job for the server.</p>
   */
  seedTime?: Date;
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
   * <p>Identifier of the server this replication configuration is associated with.</p>
   */
  server?: Server;

  /**
   * <p>Parameters for replicating the server.</p>
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
   * <p>Replication configuration for servers in the server group.</p>
   */
  serverReplicationConfigurations?: ServerReplicationConfiguration[];

  /**
   * <p>Identifier of the server group this replication configuration is associated
   *             with.</p>
   */
  serverGroupId?: string;
}

export namespace ServerGroupReplicationConfiguration {
  export const filterSensitiveLog = (obj: ServerGroupReplicationConfiguration): any => ({
    ...obj,
  });
}

export interface GetAppReplicationConfigurationResponse {
  /**
   * <p>Replication configurations associated with server groups in this application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}

export namespace GetAppReplicationConfigurationResponse {
  export const filterSensitiveLog = (obj: GetAppReplicationConfigurationResponse): any => ({
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
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The MAC address of the connector.</p>
   */
  macAddress?: string;

  /**
   * <p>The identifier of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The identifier of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The VM management product.</p>
   */
  vmManagerType?: VmManagerType | string;

  /**
   * <p>The capabilities of the connector.</p>
   */
  capabilityList?: (ConnectorCapability | string)[];

  /**
   * <p>The connector version.</p>
   */
  version?: string;

  /**
   * <p>The status of the connector.</p>
   */
  status?: ConnectorStatus | string;

  /**
   * <p>The time the connector was associated.</p>
   */
  associatedOn?: Date;

  /**
   * <p>The IP address of the connector.</p>
   */
  ipAddress?: string;
}

export namespace Connector {
  export const filterSensitiveLog = (obj: Connector): any => ({
    ...obj,
  });
}

export interface GetConnectorsResponse {
  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the registered connectors.</p>
   */
  connectorList?: Connector[];
}

export namespace GetConnectorsResponse {
  export const filterSensitiveLog = (obj: GetConnectorsResponse): any => ({
    ...obj,
  });
}

export interface GetReplicationJobsRequest {
  /**
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
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
   * <p>String describing the progress of the current stage of a replication run.</p>
   */
  stageProgress?: string;

  /**
   * <p>String describing the current stage of a replication run.</p>
   */
  stage?: string;
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
   * <p>The completion time of the last replication run.</p>
   */
  completedTime?: Date;

  /**
   * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
   *             customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>The state of the replication run.</p>
   */
  state?: ReplicationRunState | string;

  /**
   * <p>The start time of the next replication run.</p>
   */
  scheduledStartTime?: Date;

  /**
   * <p>Details of the current stage of the replication run.</p>
   */
  stageDetails?: ReplicationRunStageDetails;

  /**
   * <p>Whether the replication run should produce encrypted AMI or not. See also
   *                 <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The identifier of the Amazon Machine Image (AMI) from the replication
   *             run.</p>
   */
  amiId?: string;

  /**
   * <p>The description of the replication run.</p>
   */
  description?: string;

  /**
   * <p>The type of replication run.</p>
   */
  type?: ReplicationRunType | string;

  /**
   * <p>The identifier of the replication run.</p>
   */
  replicationRunId?: string;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;
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
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: ReplicationRun[];

  /**
   * <p>The state of the replication job.</p>
   */
  state?: ReplicationJobState | string;

  /**
   * <p>The name of the IAM role to be used by the Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p></p>
   */
  runOnce?: boolean;

  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: VmServer;

  /**
   * <p>Number of recent AMIs to keep in the customer's account for a replication job. By
   *             default the value is set to zero, meaning that all AMIs are kept.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>The identifier of the server.</p>
   */
  serverId?: string;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * <p>Whether the replication job should produce encrypted AMIs or not. See also
   *                 <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
   *             customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The type of server.</p>
   */
  serverType?: ServerType | string;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime?: Date;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * <p>The ID of the latest Amazon Machine Image (AMI).</p>
   */
  latestAmiId?: string;
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
   * <p>The identifier of the replication job.</p>
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
   * <p>The maximum number of results to return in a single call. The default value is 50.
   *             To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>List of <code>VmServerAddress</code> objects</p>
   */
  vmServerAddressList?: VmServerAddress[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
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
   * <p>The status of the server catalog.</p>
   */
  serverCatalogStatus?: ServerCatalogStatus | string;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when
   *             there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the servers.</p>
   */
  serverList?: Server[];

  /**
   * <p>The time when the server was last modified.</p>
   */
  lastModifiedOn?: Date;
}

export namespace GetServersResponse {
  export const filterSensitiveLog = (obj: GetServersResponse): any => ({
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
   * <p>ID of the application to launch.</p>
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
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p></p>
   */
  appIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. The default value is
   *             50.
   *             To retrieve the remaining results, make another call with the returned
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
   * <p>A list of application summaries.</p>
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

export interface PutAppLaunchConfigurationRequest {
  /**
   * <p>Launch configurations for server groups in the application.</p>
   */
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];

  /**
   * <p>Name of service role in the customer's account that Amazon CloudFormation uses to launch the
   *             application.</p>
   */
  roleName?: string;

  /**
   * <p>ID of the application associated with the launch configuration.</p>
   */
  appId?: string;
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
   * <p>Replication configurations for server groups in the application.</p>
   */
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];

  /**
   * <p>ID of the application tassociated with the replication configuration.</p>
   */
  appId?: string;
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

export interface StartAppReplicationRequest {
  /**
   * <p>ID of the application to replicate.</p>
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
   * <p>The identifier of the replication job.</p>
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
   * <p>The identifier of the replication run.</p>
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
   * <p>ID of the application to stop replicating.</p>
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
   * <p>ID of the application to terminate.</p>
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
   * <p>Name of the service role in the customer's account used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>New name of the application.</p>
   */
  name?: string;

  /**
   * <p>ID of the application to update.</p>
   */
  appId?: string;

  /**
   * <p>List of server groups in the application to update.</p>
   */
  serverGroups?: ServerGroup[];

  /**
   * <p>List of tags to associate with the application.</p>
   */
  tags?: Tag[];

  /**
   * <p>New description of the application.</p>
   */
  description?: string;
}

export namespace UpdateAppRequest {
  export const filterSensitiveLog = (obj: UpdateAppRequest): any => ({
    ...obj,
  });
}

export interface UpdateAppResponse {
  /**
   * <p>Summary description of the application.</p>
   */
  appSummary?: AppSummary;

  /**
   * <p>List of tags associated with the application.</p>
   */
  tags?: Tag[];

  /**
   * <p>List of updated server groups in the application.</p>
   */
  serverGroups?: ServerGroup[];
}

export namespace UpdateAppResponse {
  export const filterSensitiveLog = (obj: UpdateAppResponse): any => ({
    ...obj,
  });
}

export interface UpdateReplicationJobRequest {
  /**
   * <p>When true, the replication job produces encrypted AMIs . See also
   *                 <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The license type to be used for the AMI created by a successful replication
   *             run.</p>
   */
  licenseType?: LicenseType | string;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the
   *             maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * <p></p>
   *         <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>KMS key alias</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key ID</p>
   *             </li>
   *             <li>
   *                 <p>ARN referring to KMS key alias</p>
   *             </li>
   *          </ul>
   *         <p> If encrypted is <i>true</i> but a KMS key id is not specified, the
   *             customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the IAM role to be used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId: string | undefined;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;
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

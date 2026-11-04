// smithy-typescript generated code
import type {
  DataReplicationErrorString,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  EC2InstanceState,
  ExtensionStatus,
  FailbackLaunchType,
  FailbackReplicationError,
  FailbackState,
  InitiatedBy,
  InternetProtocol,
  JobLogEvent,
  JobStatus,
  JobType,
  LastLaunchResult,
  LastLaunchType,
  LaunchActionCategory,
  LaunchActionParameterType,
  LaunchActionRunStatus,
  LaunchActionType,
  LaunchDisposition,
  LaunchStatus,
  OriginEnvironment,
  PITPolicyRuleUnits,
  ProductCodeMode,
  RecoveryInstanceDataReplicationInitiationStepName,
  RecoveryInstanceDataReplicationInitiationStepStatus,
  RecoveryInstanceDataReplicationState,
  RecoveryMode,
  RecoveryPlanExecutionMode,
  RecoveryPlanExecutionStatus,
  RecoveryPlanExecutionStepStatus,
  RecoveryPlanServerImpactLevel,
  RecoveryPlanStatus,
  RecoveryResult,
  RecoverySnapshotsOrder,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationDirection,
  ReplicationStatus,
  SourceServerArchitecture,
  TargetInstanceTypeRightSizingMethod,
  VolumeStatus,
} from "./enums";

/**
 * AWS account.
 *
 * @public
 */
export interface Account {
  /**
   * Account ID of AWS account.
   *
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackRequest {
  /**
   * The Source Network ID to associate with CloudFormation template.
   *
   * @public
   */
  sourceNetworkID: string | undefined;

  /**
   * CloudFormation template to associate with a Source Network.
   *
   * @public
   */
  cfnStackName: string | undefined;
}

/**
 * ID of a resource participating in an asynchronous Job.
 *
 * @public
 */
export type ParticipatingResourceID =
  | ParticipatingResourceID.SourceNetworkIDMember
  | ParticipatingResourceID.$UnknownMember;

/**
 * @public
 */
export namespace ParticipatingResourceID {
  /**
   * Source Network ID.
   *
   * @public
   */
  export interface SourceNetworkIDMember {
    sourceNetworkID: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sourceNetworkID?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sourceNetworkID: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a resource participating in an asynchronous Job.
 *
 * @public
 */
export interface ParticipatingResource {
  /**
   * The ID of a participating resource.
   *
   * @public
   */
  participatingResourceID?: ParticipatingResourceID | undefined;

  /**
   * The launch status of a participating resource.
   *
   * @public
   */
  launchStatus?: LaunchStatus | undefined;
}

/**
 * Launch action parameter.
 *
 * @public
 */
export interface LaunchActionParameter {
  /**
   * Value.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Type.
   *
   * @public
   */
  type?: LaunchActionParameterType | undefined;
}

/**
 * Launch action.
 *
 * @public
 */
export interface LaunchAction {
  /**
   * Launch action Id.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * Launch action code.
   *
   * @public
   */
  actionCode?: string | undefined;

  /**
   * Launch action type.
   *
   * @public
   */
  type?: LaunchActionType | undefined;

  /**
   * Launch action name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Whether the launch action is active.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Launch action order.
   *
   * @public
   */
  order?: number | undefined;

  /**
   * Launch action version.
   *
   * @public
   */
  actionVersion?: string | undefined;

  /**
   * Whether the launch will not be marked as failed if this action fails.
   *
   * @public
   */
  optional?: boolean | undefined;

  /**
   * Launch action parameters.
   *
   * @public
   */
  parameters?: Record<string, LaunchActionParameter> | undefined;

  /**
   * Launch action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Launch action category.
   *
   * @public
   */
  category?: LaunchActionCategory | undefined;
}

/**
 * Launch action run.
 *
 * @public
 */
export interface LaunchActionRun {
  /**
   * Action.
   *
   * @public
   */
  action?: LaunchAction | undefined;

  /**
   * Run Id.
   *
   * @public
   */
  runId?: string | undefined;

  /**
   * Run status.
   *
   * @public
   */
  status?: LaunchActionRunStatus | undefined;

  /**
   * Failure reason.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Launch actions status.
 *
 * @public
 */
export interface LaunchActionsStatus {
  /**
   * Time where the AWS Systems Manager was detected as running on the launched instance.
   *
   * @public
   */
  ssmAgentDiscoveryDatetime?: string | undefined;

  /**
   * List of post launch action status.
   *
   * @public
   */
  runs?: LaunchActionRun[] | undefined;
}

/**
 * Represents a server participating in an asynchronous Job.
 *
 * @public
 */
export interface ParticipatingServer {
  /**
   * The Source Server ID of a participating server.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The Recovery Instance ID of a participating server.
   *
   * @public
   */
  recoveryInstanceID?: string | undefined;

  /**
   * The launch status of a participating server.
   *
   * @public
   */
  launchStatus?: LaunchStatus | undefined;

  /**
   * The post-launch action runs of a participating server.
   *
   * @public
   */
  launchActionsStatus?: LaunchActionsStatus | undefined;
}

/**
 * A job is an asynchronous workflow.
 *
 * @public
 */
export interface Job {
  /**
   * The ID of the Job.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * The ARN of a Job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of the Job.
   *
   * @public
   */
  type?: JobType | undefined;

  /**
   * A string representing who initiated the Job.
   *
   * @public
   */
  initiatedBy?: InitiatedBy | undefined;

  /**
   * The date and time of when the Job was created.
   *
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * The date and time of when the Job ended.
   *
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * The status of the Job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * A list of servers that the Job is acting upon.
   *
   * @public
   */
  participatingServers?: ParticipatingServer[] | undefined;

  /**
   * A list of tags associated with the Job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of resources that the Job is acting upon.
   *
   * @public
   */
  participatingResources?: ParticipatingResource[] | undefined;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackResponse {
  /**
   * The Source Network association Job.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * Validate exception field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Validate exception field name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Validate exception field message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CancelRecoveryPlanExecutionRequest {
  /**
   * The ARN of the Recovery Plan execution to cancel.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;
}

/**
 * Error details for a failed operation.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code: string | undefined;
}

/**
 * A Recovery Plan execution.
 *
 * @public
 */
export interface RecoveryPlanExecution {
  /**
   * The ARN of the Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;

  /**
   * The ARN of the Recovery Plan being executed.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The execution mode.
   *
   * @public
   */
  mode: RecoveryPlanExecutionMode | undefined;

  /**
   * The execution status.
   *
   * @public
   */
  status: RecoveryPlanExecutionStatus | undefined;

  /**
   * The timestamp when the execution started.
   *
   * @public
   */
  startedAt: string | undefined;

  /**
   * The timestamp when the execution completed.
   *
   * @public
   */
  completedAt?: string | undefined;

  /**
   * Error details if the execution failed.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;

  /**
   * The tags associated with the Recovery Plan execution.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CancelRecoveryPlanExecutionResponse {
  /**
   * The cancelled Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecution: RecoveryPlanExecution | undefined;
}

/**
 * Properties of a product code associated with a volume.
 *
 * @public
 */
export interface ProductCode {
  /**
   * Id of a product code associated with a volume.
   *
   * @public
   */
  productCodeId?: string | undefined;

  /**
   * Mode of a product code associated with a volume.
   *
   * @public
   */
  productCodeMode?: ProductCodeMode | undefined;
}

/**
 * Properties of a conversion job
 *
 * @public
 */
export interface ConversionProperties {
  /**
   * A mapping between the volumes being converted and the converted snapshot ids
   *
   * @public
   */
  volumeToConversionMap?: Record<string, Record<string, string>> | undefined;

  /**
   * The root volume name of a conversion job
   *
   * @public
   */
  rootVolumeName?: string | undefined;

  /**
   * Whether the volume being converted uses UEFI or not
   *
   * @public
   */
  forceUefi?: boolean | undefined;

  /**
   * The timestamp of when the snapshot being converted was taken
   *
   * @public
   */
  dataTimestamp?: string | undefined;

  /**
   * A mapping between the volumes and their sizes
   *
   * @public
   */
  volumeToVolumeSize?: Record<string, number> | undefined;

  /**
   * A mapping between the volumes being converted and the product codes associated with them
   *
   * @public
   */
  volumeToProductCodes?: Record<string, ProductCode[]> | undefined;
}

/**
 * Information about a server's CPU.
 *
 * @public
 */
export interface CPU {
  /**
   * The number of CPU cores.
   *
   * @public
   */
  cores?: number | undefined;

  /**
   * The model name of the CPU.
   *
   * @public
   */
  modelName?: string | undefined;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerRequest {
  /**
   * This defines the ARN of the source server in staging Account based on which you want to create an extended source server.
   *
   * @public
   */
  sourceServerArn: string | undefined;

  /**
   * A list of tags associated with the extended source server.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Error in data replication.
 *
 * @public
 */
export interface DataReplicationError {
  /**
   * Error in data replication.
   *
   * @public
   */
  error?: DataReplicationErrorString | undefined;

  /**
   * Error in data replication.
   *
   * @public
   */
  rawError?: string | undefined;
}

/**
 * Data replication initiation step.
 *
 * @public
 */
export interface DataReplicationInitiationStep {
  /**
   * The name of the step.
   *
   * @public
   */
  name?: DataReplicationInitiationStepName | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: DataReplicationInitiationStepStatus | undefined;
}

/**
 * Data replication initiation.
 *
 * @public
 */
export interface DataReplicationInitiation {
  /**
   * The date and time of the current attempt to initiate data replication.
   *
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * The date and time of the next attempt to initiate data replication.
   *
   * @public
   */
  nextAttemptDateTime?: string | undefined;

  /**
   * The steps of the current attempt to initiate data replication.
   *
   * @public
   */
  steps?: DataReplicationInitiationStep[] | undefined;
}

/**
 * A disk that should be replicated.
 *
 * @public
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * The name of the device.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The total amount of data to be replicated in bytes.
   *
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * The amount of data replicated so far in bytes.
   *
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * The amount of data to be rescanned in bytes.
   *
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * The size of the replication backlog in bytes.
   *
   * @public
   */
  backloggedStorageBytes?: number | undefined;

  /**
   * The status of the volume.
   *
   * @public
   */
  volumeStatus?: VolumeStatus | undefined;
}

/**
 * Information about Data Replication
 *
 * @public
 */
export interface DataReplicationInfo {
  /**
   * Data replication lag duration.
   *
   * @public
   */
  lagDuration?: string | undefined;

  /**
   * An estimate of when the data replication will be completed.
   *
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * The disks that should be replicated.
   *
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * The state of the data replication.
   *
   * @public
   */
  dataReplicationState?: DataReplicationState | undefined;

  /**
   * Information about whether the data replication has been initiated.
   *
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation | undefined;

  /**
   * Error in data replication.
   *
   * @public
   */
  dataReplicationError?: DataReplicationError | undefined;

  /**
   * AWS Availability zone into which data is being replicated.
   *
   * @public
   */
  stagingAvailabilityZone?: string | undefined;

  /**
   * The ARN of the staging Outpost
   *
   * @public
   */
  stagingOutpostArn?: string | undefined;
}

/**
 * An object containing information regarding the initiation of the last launch of a Source Server.
 *
 * @public
 */
export interface LifeCycleLastLaunchInitiated {
  /**
   * The date and time the last Source Server launch was initiated.
   *
   * @public
   */
  apiCallDateTime?: string | undefined;

  /**
   * The ID of the Job that was used to last launch the Source Server.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The Job type that was used to last launch the Source Server.
   *
   * @public
   */
  type?: LastLaunchType | undefined;
}

/**
 * An object containing information regarding the last launch of a Source Server.
 *
 * @public
 */
export interface LifeCycleLastLaunch {
  /**
   * An object containing information regarding the initiation of the last launch of a Source Server.
   *
   * @public
   */
  initiated?: LifeCycleLastLaunchInitiated | undefined;

  /**
   * Status of Source Server's last launch.
   *
   * @public
   */
  status?: LaunchStatus | undefined;
}

/**
 * An object representing the Source Server Lifecycle.
 *
 * @public
 */
export interface LifeCycle {
  /**
   * The date and time of when the Source Server was added to the service.
   *
   * @public
   */
  addedToServiceDateTime?: string | undefined;

  /**
   * The date and time of the first byte that was replicated from the Source Server.
   *
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * The amount of time that the Source Server has been replicating for.
   *
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * The date and time this Source Server was last seen by the service.
   *
   * @public
   */
  lastSeenByServiceDateTime?: string | undefined;

  /**
   * An object containing information regarding the last launch of the Source Server.
   *
   * @public
   */
  lastLaunch?: LifeCycleLastLaunch | undefined;
}

/**
 * Properties of the cloud environment where this Source Server originated from.
 *
 * @public
 */
export interface SourceCloudProperties {
  /**
   * AWS Account ID for an EC2-originated Source Server.
   *
   * @public
   */
  originAccountID?: string | undefined;

  /**
   * AWS Region for an EC2-originated Source Server.
   *
   * @public
   */
  originRegion?: string | undefined;

  /**
   * AWS Availability Zone for an EC2-originated Source Server.
   *
   * @public
   */
  originAvailabilityZone?: string | undefined;

  /**
   * The ARN of the source Outpost
   *
   * @public
   */
  sourceOutpostArn?: string | undefined;
}

/**
 * An object representing a data storage device on a server.
 *
 * @public
 */
export interface Disk {
  /**
   * The disk or device name.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The amount of storage on the disk in bytes.
   *
   * @public
   */
  bytes?: number | undefined;
}

/**
 * Hints used to uniquely identify a machine.
 *
 * @public
 */
export interface IdentificationHints {
  /**
   * Fully Qualified Domain Name identification hint.
   *
   * @public
   */
  fqdn?: string | undefined;

  /**
   * Hostname identification hint.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * vCenter VM path identification hint.
   *
   * @public
   */
  vmWareUuid?: string | undefined;

  /**
   * AWS Instance ID identification hint.
   *
   * @public
   */
  awsInstanceID?: string | undefined;
}

/**
 * Network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The MAC address of the network interface.
   *
   * @public
   */
  macAddress?: string | undefined;

  /**
   * Network interface IPs.
   *
   * @public
   */
  ips?: string[] | undefined;

  /**
   * Whether this is the primary network interface.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * Operating System.
 *
 * @public
 */
export interface OS {
  /**
   * The long name of the Operating System.
   *
   * @public
   */
  fullString?: string | undefined;
}

/**
 * Properties of the Source Server machine.
 *
 * @public
 */
export interface SourceProperties {
  /**
   * The date and time the Source Properties were last updated on.
   *
   * @public
   */
  lastUpdatedDateTime?: string | undefined;

  /**
   * The recommended EC2 instance type that will be used when recovering the Source Server.
   *
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * Hints used to uniquely identify a machine.
   *
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * An array of network interfaces.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * An array of disks.
   *
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * An array of CPUs.
   *
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * The amount of RAM in bytes.
   *
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * Operating system.
   *
   * @public
   */
  os?: OS | undefined;

  /**
   * Are EC2 nitro instance types supported when recovering the Source Server.
   *
   * @public
   */
  supportsNitroInstances?: boolean | undefined;

  /**
   * The architecture of the Source Server.
   *
   * @public
   */
  architecture?: SourceServerArchitecture | undefined;
}

/**
 * Staging information related to source server.
 *
 * @public
 */
export interface StagingArea {
  /**
   * Status of Source server extension. Possible values: (a) NOT_EXTENDED - This is a source server that is replicating in the current account. (b) EXTENDED - Source server is extended from a staging source server. In this case, the value of stagingSourceServerArn is pointing to the Arn of the source server in the staging account. (c) EXTENSION_ERROR - Some issue occurred when accessing staging source server. In this case, errorMessage field will contain an error message that explains what happened.
   *
   * @public
   */
  status?: ExtensionStatus | undefined;

  /**
   * Account ID of the account to which source server belongs. If this source server is extended - shows Account ID of staging source server.
   *
   * @public
   */
  stagingAccountID?: string | undefined;

  /**
   * Arn of the staging source server if this source server is extended
   *
   * @public
   */
  stagingSourceServerArn?: string | undefined;

  /**
   * Shows an error message that occurred when DRS tried to access the staging source server. In this case StagingArea$status will have value EXTENSION_ERROR
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * The ID of the Source Server.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The ARN of the Source Server.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The tags associated with the Source Server.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the Recovery Instance associated with this Source Server.
   *
   * @public
   */
  recoveryInstanceId?: string | undefined;

  /**
   * The status of the last recovery launch of this Source Server.
   *
   * @public
   */
  lastLaunchResult?: LastLaunchResult | undefined;

  /**
   * The Data Replication Info of the Source Server.
   *
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo | undefined;

  /**
   * The lifecycle information of this Source Server.
   *
   * @public
   */
  lifeCycle?: LifeCycle | undefined;

  /**
   * The source properties of the Source Server.
   *
   * @public
   */
  sourceProperties?: SourceProperties | undefined;

  /**
   * The staging area of the source server.
   *
   * @public
   */
  stagingArea?: StagingArea | undefined;

  /**
   * Source cloud properties of the Source Server.
   *
   * @public
   */
  sourceCloudProperties?: SourceCloudProperties | undefined;

  /**
   * Replication direction of the Source Server.
   *
   * @public
   */
  replicationDirection?: ReplicationDirection | undefined;

  /**
   * For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction.
   *
   * @public
   */
  reversedDirectionSourceServerArn?: string | undefined;

  /**
   * ID of the Source Network which is protecting this Source Server's network.
   *
   * @public
   */
  sourceNetworkID?: string | undefined;

  /**
   * The version of the DRS agent installed on the source server
   *
   * @public
   */
  agentVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerResponse {
  /**
   * Created extended source server.
   *
   * @public
   */
  sourceServer?: SourceServer | undefined;
}

/**
 * Configuration of a machine's license.
 *
 * @public
 */
export interface Licensing {
  /**
   * Whether to enable "Bring your own license" or not.
   *
   * @public
   */
  osByol?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * Request to associate tags during creation of a Launch Configuration Template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private IP.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * S3 bucket ARN to export Source Network templates.
   *
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * Whether we want to activate post-launch actions.
   *
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.
   *
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;

  /**
   * Recovery mode.
   *
   * @public
   */
  recoveryMode?: RecoveryMode | undefined;
}

/**
 * Account level Launch Configuration Template.
 *
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * ID of the Launch Configuration Template.
   *
   * @public
   */
  launchConfigurationTemplateID?: string | undefined;

  /**
   * ARN of the Launch Configuration Template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Tags of the Launch Configuration Template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private IP.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * S3 bucket ARN to export Source Network templates.
   *
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * Post-launch actions activated.
   *
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.
   *
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;

  /**
   * Recovery mode.
   *
   * @public
   */
  recoveryMode?: RecoveryMode | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateResponse {
  /**
   * Created Launch Configuration Template.
   *
   * @public
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryPlanRequest {
  /**
   * The name of a Recovery Plan.
   * @public
   */
  name: string | undefined;

  /**
   * The description of a Recovery Plan.
   * @public
   */
  description?: string | undefined;

  /**
   * A unique string provided to ensure request idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to apply to the Recovery Plan.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A Recovery Plan resource.
 * @public
 */
export interface RecoveryPlan {
  /**
   * The ARN of the Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The name of a Recovery Plan.
   * @public
   */
  name: string | undefined;

  /**
   * The description of a Recovery Plan.
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the Recovery Plan.
   *
   * @public
   */
  status: RecoveryPlanStatus | undefined;

  /**
   * The timestamp when the Recovery Plan was created.
   *
   * @public
   */
  createdAt: string | undefined;

  /**
   * The timestamp when the Recovery Plan was last updated.
   *
   * @public
   */
  updatedAt: string | undefined;

  /**
   * The tags associated with the Recovery Plan.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryPlanResponse {
  /**
   * A Recovery Plan resource.
   * @public
   */
  recoveryPlan: RecoveryPlan | undefined;
}

/**
 * A server associated with a Recovery Plan Step.
 * @public
 */
export interface RecoveryPlanServer {
  /**
   * The ARN of the source server.
   *
   * @public
   */
  serverArn: string | undefined;

  /**
   * Defaults to CRITICAL if not specified.
   * @public
   */
  impactLevel?: RecoveryPlanServerImpactLevel | undefined;
}

/**
 * Configuration for a `SERVER` type step.
 *
 * @public
 */
export interface ServerStepConfiguration {
  /**
   * The list of servers to recover in this step.
   *
   * @public
   */
  servers: RecoveryPlanServer[] | undefined;
}

/**
 * Configuration for a `WAIT` type step.
 *
 * @public
 */
export interface WaitStepConfiguration {
  /**
   * The wait duration in minutes for a Wait type step.
   * @public
   */
  waitDurationMinutes: number | undefined;
}

/**
 * Type-specific configuration for a recovery plan step.
 * Exactly one member must be set.
 * @public
 */
export type RecoveryPlanStepConfiguration =
  | RecoveryPlanStepConfiguration.ServerStepConfigurationMember
  | RecoveryPlanStepConfiguration.WaitStepConfigurationMember
  | RecoveryPlanStepConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RecoveryPlanStepConfiguration {
  /**
   * Configuration for a SERVER type step.
   * @public
   */
  export interface ServerStepConfigurationMember {
    serverStepConfiguration: ServerStepConfiguration;
    waitStepConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a WAIT type step.
   * @public
   */
  export interface WaitStepConfigurationMember {
    serverStepConfiguration?: never;
    waitStepConfiguration: WaitStepConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serverStepConfiguration?: never;
    waitStepConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serverStepConfiguration: (value: ServerStepConfiguration) => T;
    waitStepConfiguration: (value: WaitStepConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRecoveryPlanStepRequest {
  /**
   * The ARN of the Recovery Plan to add the step to.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The name of a Recovery Plan Step.
   * @public
   */
  stepName: string | undefined;

  /**
   * The order of a step within a Recovery Plan (1-based).
   * @public
   */
  stepOrder?: number | undefined;

  /**
   * Type-specific configuration for a recovery plan step.
   * Exactly one member must be set.
   * @public
   */
  configuration: RecoveryPlanStepConfiguration | undefined;

  /**
   * A unique string provided to ensure request idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A Recovery Plan Step resource.
 * @public
 */
export interface RecoveryPlanStep {
  /**
   * The ARN of the Recovery Plan step.
   *
   * @public
   */
  recoveryPlanStepArn: string | undefined;

  /**
   * The order of a step within a Recovery Plan (1-based).
   * @public
   */
  stepOrder: number | undefined;

  /**
   * The name of a Recovery Plan Step.
   * @public
   */
  stepName: string | undefined;

  /**
   * Type-specific configuration for a recovery plan step.
   * Exactly one member must be set.
   * @public
   */
  configuration: RecoveryPlanStepConfiguration | undefined;

  /**
   * The timestamp when the step was created.
   *
   * @public
   */
  createdAt: string | undefined;

  /**
   * The timestamp when the step was last updated.
   *
   * @public
   */
  updatedAt: string | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryPlanStepResponse {
  /**
   * A Recovery Plan Step resource.
   * @public
   */
  recoveryPlanStep: RecoveryPlanStep | undefined;
}

/**
 * A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for.
 *
 * @public
 */
export interface PITPolicyRule {
  /**
   * The ID of the rule.
   *
   * @public
   */
  ruleID?: number | undefined;

  /**
   * The units used to measure the interval and retentionDuration.
   *
   * @public
   */
  units: PITPolicyRuleUnits | undefined;

  /**
   * How often, in the chosen units, a snapshot should be taken.
   *
   * @public
   */
  interval: number | undefined;

  /**
   * The duration to retain a snapshot for, in the chosen units.
   *
   * @public
   */
  retentionDuration: number | undefined;

  /**
   * Whether this rule is enabled or not.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * The subnet to be used by the replication staging area.
   *
   * @public
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * The security group IDs that will be used by the replication server.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * The instance type to be used for the replication server.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Whether to use a dedicated Replication Server in the replication staging area.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * The type of EBS encryption to be used during replication.
   *
   * @public
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * The ARN of the EBS encryption key to be used during replication.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
   *
   * @public
   */
  bandwidthThrottling: number | undefined;

  /**
   * The data plane routing mechanism that will be used for replication.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Whether to create a Public IP for the Recovery Instance by default.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
   *
   * @public
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * The Point in time (PIT) policy to manage snapshots taken during replication.
   *
   * @public
   */
  pitPolicy: PITPolicyRule[] | undefined;

  /**
   * A set of tags to be associated with the Replication Configuration Template resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Whether to allow the AWS replication agent to automatically replicate newly added disks.
   *
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * The Replication Configuration Template ID.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * The Replication Configuration Template ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The subnet to be used by the replication staging area.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * The security group IDs that will be used by the replication server.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * The instance type to be used for the replication server.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Whether to use a dedicated Replication Server in the replication staging area.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * The type of EBS encryption to be used during replication.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * The ARN of the EBS encryption key to be used during replication.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * The data plane routing mechanism that will be used for replication.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Whether to create a Public IP for the Recovery Instance by default.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * A set of tags to be associated with the Replication Configuration Template resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Point in time (PIT) policy to manage snapshots taken during replication.
   *
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * Whether to allow the AWS replication agent to automatically replicate newly added disks.
   *
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @public
 */
export interface CreateSourceNetworkRequest {
  /**
   * Which VPC ID to protect.
   *
   * @public
   */
  vpcID: string | undefined;

  /**
   * Account containing the VPC to protect.
   *
   * @public
   */
  originAccountID: string | undefined;

  /**
   * Region containing the VPC to protect.
   *
   * @public
   */
  originRegion: string | undefined;

  /**
   * A set of tags to be associated with the Source Network resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSourceNetworkResponse {
  /**
   * ID of the created Source Network.
   *
   * @public
   */
  sourceNetworkID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * The ID of the Job to be deleted.
   *
   * @public
   */
  jobID: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {}

/**
 * @public
 */
export interface DeleteLaunchActionRequest {
  /**
   * Launch configuration template Id or Source Server Id
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Launch action Id.
   *
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchActionResponse {}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * The ID of the Launch Configuration Template to be deleted.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DeleteRecoveryInstanceRequest {
  /**
   * The ID of the Recovery Instance to be deleted.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanRequest {
  /**
   * The ARN of the Recovery Plan to delete.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanResponse {
  /**
   * The ARN of the deleted Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanExecutionRequest {
  /**
   * The ARN of the Recovery Plan execution to delete.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanExecutionResponse {
  /**
   * The ARN of the deleted Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanStepRequest {
  /**
   * The ARN of the Recovery Plan step to delete.
   *
   * @public
   */
  recoveryPlanStepArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPlanStepResponse {
  /**
   * The ARN of the deleted Recovery Plan step.
   *
   * @public
   */
  recoveryPlanStepArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * The ID of the Replication Configuration Template to be deleted.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DeleteSourceNetworkRequest {
  /**
   * ID of the Source Network to delete.
   *
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceNetworkResponse {}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * The ID of the Source Server to be deleted.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceServerResponse {}

/**
 * @public
 */
export interface DescribeJobLogItemsRequest {
  /**
   * The ID of the Job for which Job log items will be retrieved.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * Maximum number of Job log items to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Job log items to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Properties of Source Network related to a job event.
 *
 * @public
 */
export interface SourceNetworkData {
  /**
   * Source Network ID.
   *
   * @public
   */
  sourceNetworkID?: string | undefined;

  /**
   * VPC ID protected by the Source Network.
   *
   * @public
   */
  sourceVpc?: string | undefined;

  /**
   * ID of the recovered VPC following Source Network recovery.
   *
   * @public
   */
  targetVpc?: string | undefined;

  /**
   * CloudFormation stack name that was deployed for recovering the Source Network.
   *
   * @public
   */
  stackName?: string | undefined;
}

/**
 * Properties of resource related to a job event.
 *
 * @public
 */
export type EventResourceData =
  | EventResourceData.SourceNetworkDataMember
  | EventResourceData.$UnknownMember;

/**
 * @public
 */
export namespace EventResourceData {
  /**
   * Source Network properties.
   *
   * @public
   */
  export interface SourceNetworkDataMember {
    sourceNetworkData: SourceNetworkData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sourceNetworkData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sourceNetworkData: (value: SourceNetworkData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Metadata associated with a Job log.
 *
 * @public
 */
export interface JobLogEventData {
  /**
   * The ID of a Source Server.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The ID of a conversion server.
   *
   * @public
   */
  conversionServerID?: string | undefined;

  /**
   * The ID of a Recovery Instance.
   *
   * @public
   */
  targetInstanceID?: string | undefined;

  /**
   * A string representing a job error.
   *
   * @public
   */
  rawError?: string | undefined;

  /**
   * Properties of a conversion job
   *
   * @public
   */
  conversionProperties?: ConversionProperties | undefined;

  /**
   * Properties of resource related to a job event.
   *
   * @public
   */
  eventResourceData?: EventResourceData | undefined;

  /**
   * Retries for this operation.
   *
   * @public
   */
  attemptCount?: number | undefined;

  /**
   * The maximum number of retries that will be attempted if this operation failed.
   *
   * @public
   */
  maxAttemptsCount?: number | undefined;
}

/**
 * A log outputted by a Job.
 *
 * @public
 */
export interface JobLog {
  /**
   * The date and time the log was taken.
   *
   * @public
   */
  logDateTime?: string | undefined;

  /**
   * The event represents the type of a log.
   *
   * @public
   */
  event?: JobLogEvent | undefined;

  /**
   * Metadata associated with a Job log.
   *
   * @public
   */
  eventData?: JobLogEventData | undefined;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * An array of Job log items.
   *
   * @public
   */
  items?: JobLog[] | undefined;

  /**
   * The token of the next Job log items to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A set of filters by which to return Jobs.
 *
 * @public
 */
export interface DescribeJobsRequestFilters {
  /**
   * An array of Job IDs that should be returned. An empty array means all jobs.
   *
   * @public
   */
  jobIDs?: string[] | undefined;

  /**
   * The start date in a date range query.
   *
   * @public
   */
  fromDate?: string | undefined;

  /**
   * The end date in a date range query.
   *
   * @public
   */
  toDate?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * A set of filters by which to return Jobs.
   *
   * @public
   */
  filters?: DescribeJobsRequestFilters | undefined;

  /**
   * Maximum number of Jobs to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Job to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * An array of Jobs.
   *
   * @public
   */
  items?: Job[] | undefined;

  /**
   * The token of the next Job to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * Request to filter Launch Configuration Templates list by Launch Configuration Template ID.
   *
   * @public
   */
  launchConfigurationTemplateIDs?: string[] | undefined;

  /**
   * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Launch Configuration Template to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * List of items returned by DescribeLaunchConfigurationTemplates.
   *
   * @public
   */
  items?: LaunchConfigurationTemplate[] | undefined;

  /**
   * The token of the next Launch Configuration Template to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A set of filters by which to return Recovery Instances.
 *
 * @public
 */
export interface DescribeRecoveryInstancesRequestFilters {
  /**
   * An array of Recovery Instance IDs that should be returned. An empty array means all Recovery Instances.
   *
   * @public
   */
  recoveryInstanceIDs?: string[] | undefined;

  /**
   * An array of Source Server IDs for which associated Recovery Instances should be returned.
   *
   * @public
   */
  sourceServerIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesRequest {
  /**
   * A set of filters by which to return Recovery Instances.
   *
   * @public
   */
  filters?: DescribeRecoveryInstancesRequestFilters | undefined;

  /**
   * Maximum number of Recovery Instances to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Recovery Instance to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Error in data replication.
 *
 * @public
 */
export interface RecoveryInstanceDataReplicationError {
  /**
   * Error in data replication.
   *
   * @public
   */
  error?: FailbackReplicationError | undefined;

  /**
   * Error in data replication.
   *
   * @public
   */
  rawError?: string | undefined;
}

/**
 * Data replication initiation step.
 *
 * @public
 */
export interface RecoveryInstanceDataReplicationInitiationStep {
  /**
   * The name of the step.
   *
   * @public
   */
  name?: RecoveryInstanceDataReplicationInitiationStepName | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: RecoveryInstanceDataReplicationInitiationStepStatus | undefined;
}

/**
 * Data replication initiation.
 *
 * @public
 */
export interface RecoveryInstanceDataReplicationInitiation {
  /**
   * The date and time of the current attempt to initiate data replication.
   *
   * @public
   */
  startDateTime?: string | undefined;

  /**
   * The steps of the current attempt to initiate data replication.
   *
   * @public
   */
  steps?: RecoveryInstanceDataReplicationInitiationStep[] | undefined;
}

/**
 * A disk that should be replicated.
 *
 * @public
 */
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  /**
   * The name of the device.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The total amount of data to be replicated in bytes.
   *
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * The amount of data replicated so far in bytes.
   *
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * The amount of data to be rescanned in bytes.
   *
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * The size of the replication backlog in bytes.
   *
   * @public
   */
  backloggedStorageBytes?: number | undefined;
}

/**
 * Information about Data Replication
 *
 * @public
 */
export interface RecoveryInstanceDataReplicationInfo {
  /**
   * Data replication lag duration.
   *
   * @public
   */
  lagDuration?: string | undefined;

  /**
   * An estimate of when the data replication will be completed.
   *
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * The disks that should be replicated.
   *
   * @public
   */
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * The state of the data replication.
   *
   * @public
   */
  dataReplicationState?: RecoveryInstanceDataReplicationState | undefined;

  /**
   * Information about whether the data replication has been initiated.
   *
   * @public
   */
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation | undefined;

  /**
   * Information about Data Replication
   *
   * @public
   */
  dataReplicationError?: RecoveryInstanceDataReplicationError | undefined;

  /**
   * AWS Availability zone into which data is being replicated.
   *
   * @public
   */
  stagingAvailabilityZone?: string | undefined;

  /**
   * The ARN of the staging Outpost
   *
   * @public
   */
  stagingOutpostArn?: string | undefined;
}

/**
 * An object representing failback related information of the Recovery Instance.
 *
 * @public
 */
export interface RecoveryInstanceFailback {
  /**
   * The ID of the failback client that this Recovery Instance is associated with.
   *
   * @public
   */
  failbackClientID?: string | undefined;

  /**
   * The Job ID of the last failback log for this Recovery Instance.
   *
   * @public
   */
  failbackJobID?: string | undefined;

  /**
   * The date and time that the failback initiation started.
   *
   * @public
   */
  failbackInitiationTime?: string | undefined;

  /**
   * The state of the failback process that this Recovery Instance is in.
   *
   * @public
   */
  state?: FailbackState | undefined;

  /**
   * The date and time the agent on the Recovery Instance was last seen by the service.
   *
   * @public
   */
  agentLastSeenByServiceDateTime?: string | undefined;

  /**
   * The date and time that the failback client was last seen by the service.
   *
   * @public
   */
  failbackClientLastSeenByServiceDateTime?: string | undefined;

  /**
   * Whether we are failing back to the original Source Server for this Recovery Instance.
   *
   * @public
   */
  failbackToOriginalServer?: boolean | undefined;

  /**
   * The date and time of the first byte that was replicated from the Recovery Instance.
   *
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * The amount of time that the Recovery Instance has been replicating for.
   *
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * The launch type (Recovery / Drill) of the last launch for the failback replication of this recovery instance.
   *
   * @public
   */
  failbackLaunchType?: FailbackLaunchType | undefined;
}

/**
 * An object representing a block storage device on the Recovery Instance.
 *
 * @public
 */
export interface RecoveryInstanceDisk {
  /**
   * The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.
   *
   * @public
   */
  internalDeviceName?: string | undefined;

  /**
   * The amount of storage on the disk in bytes.
   *
   * @public
   */
  bytes?: number | undefined;

  /**
   * The EBS Volume ID of this disk.
   *
   * @public
   */
  ebsVolumeID?: string | undefined;
}

/**
 * Properties of the Recovery Instance machine.
 *
 * @public
 */
export interface RecoveryInstanceProperties {
  /**
   * The date and time the Recovery Instance properties were last updated on.
   *
   * @public
   */
  lastUpdatedDateTime?: string | undefined;

  /**
   * Hints used to uniquely identify a machine.
   *
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * An array of network interfaces.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * An array of disks.
   *
   * @public
   */
  disks?: RecoveryInstanceDisk[] | undefined;

  /**
   * An array of CPUs.
   *
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * The amount of RAM in bytes.
   *
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * Operating system.
   *
   * @public
   */
  os?: OS | undefined;
}

/**
 * A Recovery Instance is a replica of a Source Server running on EC2.
 *
 * @public
 */
export interface RecoveryInstance {
  /**
   * The EC2 instance ID of the Recovery Instance.
   *
   * @public
   */
  ec2InstanceID?: string | undefined;

  /**
   * The state of the EC2 instance for this Recovery Instance.
   *
   * @public
   */
  ec2InstanceState?: EC2InstanceState | undefined;

  /**
   * The ID of the Job that created the Recovery Instance.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The ID of the Recovery Instance.
   *
   * @public
   */
  recoveryInstanceID?: string | undefined;

  /**
   * The Source Server ID that this Recovery Instance is associated with.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The ARN of the Recovery Instance.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * An array of tags that are associated with the Recovery Instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An object representing failback related information of the Recovery Instance.
   *
   * @public
   */
  failback?: RecoveryInstanceFailback | undefined;

  /**
   * The Data Replication Info of the Recovery Instance.
   *
   * @public
   */
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo | undefined;

  /**
   * Properties of the Recovery Instance machine.
   *
   * @public
   */
  recoveryInstanceProperties?: RecoveryInstanceProperties | undefined;

  /**
   * The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.
   *
   * @public
   */
  pointInTimeSnapshotDateTime?: string | undefined;

  /**
   * Whether this Recovery Instance was created for a drill or for an actual Recovery event.
   *
   * @public
   */
  isDrill?: boolean | undefined;

  /**
   * Environment (On Premises / AWS) of the instance that the recovery instance originated from.
   *
   * @public
   */
  originEnvironment?: OriginEnvironment | undefined;

  /**
   * AWS availability zone associated with the recovery instance.
   *
   * @public
   */
  originAvailabilityZone?: string | undefined;

  /**
   * The version of the DRS agent installed on the recovery instance
   *
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * The ARN of the source Outpost
   *
   * @public
   */
  sourceOutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesResponse {
  /**
   * The token of the next Recovery Instance to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of Recovery Instances.
   *
   * @public
   */
  items?: RecoveryInstance[] | undefined;
}

/**
 * A set of filters by which to return Recovery Snapshots.
 *
 * @public
 */
export interface DescribeRecoverySnapshotsRequestFilters {
  /**
   * The start date in a date range query.
   *
   * @public
   */
  fromDateTime?: string | undefined;

  /**
   * The end date in a date range query.
   *
   * @public
   */
  toDateTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecoverySnapshotsRequest {
  /**
   * Filter Recovery Snapshots by Source Server ID.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * A set of filters by which to return Recovery Snapshots.
   *
   * @public
   */
  filters?: DescribeRecoverySnapshotsRequestFilters | undefined;

  /**
   * The sorted ordering by which to return Recovery Snapshots.
   *
   * @public
   */
  order?: RecoverySnapshotsOrder | undefined;

  /**
   * Maximum number of Recovery Snapshots to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Recovery Snapshot to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A snapshot of a Source Server used during recovery.
 *
 * @public
 */
export interface RecoverySnapshot {
  /**
   * The ID of the Recovery Snapshot.
   *
   * @public
   */
  snapshotID: string | undefined;

  /**
   * The ID of the Source Server that the snapshot was taken for.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The timestamp of when we expect the snapshot to be taken.
   *
   * @public
   */
  expectedTimestamp: string | undefined;

  /**
   * The actual timestamp that the snapshot was taken.
   *
   * @public
   */
  timestamp?: string | undefined;

  /**
   * A list of EBS snapshots.
   *
   * @public
   */
  ebsSnapshots?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecoverySnapshotsResponse {
  /**
   * An array of Recovery Snapshots.
   *
   * @public
   */
  items?: RecoverySnapshot[] | undefined;

  /**
   * The token of the next Recovery Snapshot to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.
   *
   * @public
   */
  replicationConfigurationTemplateIDs?: string[] | undefined;

  /**
   * Maximum number of Replication Configuration Templates to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Replication Configuration Template to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * An array of Replication Configuration Templates.
   *
   * @public
   */
  items?: ReplicationConfigurationTemplate[] | undefined;

  /**
   * The token of the next Replication Configuration Template to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A set of filters by which to return Source Networks.
 *
 * @public
 */
export interface DescribeSourceNetworksRequestFilters {
  /**
   * An array of Source Network IDs that should be returned. An empty array means all Source Networks.
   *
   * @public
   */
  sourceNetworkIDs?: string[] | undefined;

  /**
   * Filter Source Networks by account ID containing the protected VPCs.
   *
   * @public
   */
  originAccountID?: string | undefined;

  /**
   * Filter Source Networks by the region containing the protected VPCs.
   *
   * @public
   */
  originRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceNetworksRequest {
  /**
   * A set of filters by which to return Source Networks.
   *
   * @public
   */
  filters?: DescribeSourceNetworksRequestFilters | undefined;

  /**
   * Maximum number of Source Networks to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Source Networks to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object representing the Source Network recovery Lifecycle.
 *
 * @public
 */
export interface RecoveryLifeCycle {
  /**
   * The date and time the last Source Network recovery was initiated.
   *
   * @public
   */
  apiCallDateTime?: Date | undefined;

  /**
   * The ID of the Job that was used to last recover the Source Network.
   *
   * @public
   */
  jobID?: string | undefined;

  /**
   * The status of the last recovery status of this Source Network.
   *
   * @public
   */
  lastRecoveryResult?: RecoveryResult | undefined;
}

/**
 * The ARN of the Source Network.
 *
 * @public
 */
export interface SourceNetwork {
  /**
   * Source Network ID.
   *
   * @public
   */
  sourceNetworkID?: string | undefined;

  /**
   * VPC ID protected by the Source Network.
   *
   * @public
   */
  sourceVpcID?: string | undefined;

  /**
   * The ARN of the Source Network.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A list of tags associated with the Source Network.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Status of Source Network Replication. Possible values: (a) STOPPED - Source Network is not replicating. (b) IN_PROGRESS - Source Network is being replicated. (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes. (d) ERROR - Source Network replication has failed
   *
   * @public
   */
  replicationStatus?: ReplicationStatus | undefined;

  /**
   * Error details in case Source Network replication status is ERROR.
   *
   * @public
   */
  replicationStatusDetails?: string | undefined;

  /**
   * CloudFormation stack name that was deployed for recovering the Source Network.
   *
   * @public
   */
  cfnStackName?: string | undefined;

  /**
   * Region containing the VPC protected by the Source Network.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * Account ID containing the VPC protected by the Source Network.
   *
   * @public
   */
  sourceAccountID?: string | undefined;

  /**
   * An object containing information regarding the last recovery of the Source Network.
   *
   * @public
   */
  lastRecovery?: RecoveryLifeCycle | undefined;

  /**
   * ID of the recovered VPC following Source Network recovery.
   *
   * @public
   */
  launchedVpcID?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceNetworksResponse {
  /**
   * An array of Source Networks.
   *
   * @public
   */
  items?: SourceNetwork[] | undefined;

  /**
   * The token of the next Source Networks to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A set of filters by which to return Source Servers.
 *
 * @public
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * An array of Source Servers IDs that should be returned. An empty array means all Source Servers.
   *
   * @public
   */
  sourceServerIDs?: string[] | undefined;

  /**
   * An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.
   *
   * @public
   */
  hardwareId?: string | undefined;

  /**
   * An array of staging account IDs that extended source servers belong to. An empty array means all source servers will be shown.
   *
   * @public
   */
  stagingAccountIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * A set of filters by which to return Source Servers.
   *
   * @public
   */
  filters?: DescribeSourceServersRequestFilters | undefined;

  /**
   * Maximum number of Source Servers to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next Source Server to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * An array of Source Servers.
   *
   * @public
   */
  items?: SourceServer[] | undefined;

  /**
   * The token of the next Source Server to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisconnectRecoveryInstanceRequest {
  /**
   * The ID of the Recovery Instance to disconnect.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DisconnectSourceServerRequest {
  /**
   * The ID of the Source Server to disconnect.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanRequest {
  /**
   * The ARN of the Recovery Plan to retrieve.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanResponse {
  /**
   * A Recovery Plan resource.
   * @public
   */
  recoveryPlan: RecoveryPlan | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanExecutionRequest {
  /**
   * The ARN of the Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanExecutionResponse {
  /**
   * The Recovery Plan execution details.
   *
   * @public
   */
  recoveryPlanExecution: RecoveryPlanExecution | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanExecutionStepRequest {
  /**
   * The ARN of the execution step.
   *
   * @public
   */
  recoveryPlanExecutionStepArn: string | undefined;
}

/**
 * A server within a recovery plan execution step, enriched with execution state.
 * @public
 */
export interface RecoveryPlanExecutionServer {
  /**
   * The ARN of the source server.
   *
   * @public
   */
  serverArn: string | undefined;

  /**
   * Defaults to CRITICAL if not specified.
   * @public
   */
  impactLevel?: RecoveryPlanServerImpactLevel | undefined;

  /**
   * The DRS recovery job ID. Populated when recovery is initiated for this server.
   * @public
   */
  jobID?: string | undefined;
}

/**
 * Configuration for a `SERVER` type execution step.
 *
 * @public
 */
export interface ExecutionServerStepConfiguration {
  /**
   * The list of servers in this execution step.
   *
   * @public
   */
  servers: RecoveryPlanExecutionServer[] | undefined;
}

/**
 * Type-specific configuration for an execution step response.
 * Mirrors RecoveryPlanStepConfiguration but uses execution-enriched server shapes.
 * @public
 */
export type RecoveryPlanExecutionStepConfiguration =
  | RecoveryPlanExecutionStepConfiguration.ExecutionServerStepConfigurationMember
  | RecoveryPlanExecutionStepConfiguration.WaitStepConfigurationMember
  | RecoveryPlanExecutionStepConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RecoveryPlanExecutionStepConfiguration {
  /**
   * Configuration for a SERVER type step (with execution state like jobID).
   * @public
   */
  export interface ExecutionServerStepConfigurationMember {
    executionServerStepConfiguration: ExecutionServerStepConfiguration;
    waitStepConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a WAIT type step.
   * @public
   */
  export interface WaitStepConfigurationMember {
    executionServerStepConfiguration?: never;
    waitStepConfiguration: WaitStepConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    executionServerStepConfiguration?: never;
    waitStepConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    executionServerStepConfiguration: (value: ExecutionServerStepConfiguration) => T;
    waitStepConfiguration: (value: WaitStepConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A Recovery Plan Execution Step resource.
 * @public
 */
export interface RecoveryPlanExecutionStep {
  /**
   * The ARN of the execution step.
   *
   * @public
   */
  recoveryPlanExecutionStepArn: string | undefined;

  /**
   * The order of a step within a Recovery Plan (1-based).
   * @public
   */
  stepIndex: number | undefined;

  /**
   * The status of the execution step.
   *
   * @public
   */
  status: RecoveryPlanExecutionStepStatus | undefined;

  /**
   * The name of a Recovery Plan Step.
   * @public
   */
  stepName: string | undefined;

  /**
   * Type-specific configuration for an execution step response.
   * Mirrors RecoveryPlanStepConfiguration but uses execution-enriched server shapes.
   * @public
   */
  configuration: RecoveryPlanExecutionStepConfiguration | undefined;

  /**
   * Error details if the step failed.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;

  /**
   * The number of times this step has been attempted.
   *
   * @public
   */
  attempt: number | undefined;

  /**
   * The timestamp when the execution step was created.
   *
   * @public
   */
  createdAt: string | undefined;

  /**
   * The timestamp when the execution step was last updated.
   *
   * @public
   */
  updatedAt: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanExecutionStepResponse {
  /**
   * A Recovery Plan Execution Step resource.
   * @public
   */
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanStepRequest {
  /**
   * The ARN of the Recovery Plan step to retrieve.
   *
   * @public
   */
  recoveryPlanStepArn: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPlanStepResponse {
  /**
   * A Recovery Plan Step resource.
   * @public
   */
  recoveryPlanStep: RecoveryPlanStep | undefined;
}

/**
 * @public
 */
export interface InitializeServiceRequest {}

/**
 * @public
 */
export interface InitializeServiceResponse {}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateRequest {
  /**
   * Launch Configuration Template ID.
   *
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * Launch disposition.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Target instance type right-sizing method.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Copy private IP.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Copy tags.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * Licensing.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * S3 bucket ARN to export Source Network templates.
   *
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * Whether we want to activate post-launch actions.
   *
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.
   *
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;

  /**
   * Recovery mode.
   *
   * @public
   */
  recoveryMode?: RecoveryMode | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateResponse {
  /**
   * Updated Launch Configuration Template.
   *
   * @public
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate | undefined;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersRequest {
  /**
   * The Id of the staging Account to retrieve extensible source servers from.
   *
   * @public
   */
  stagingAccountID: string | undefined;

  /**
   * The maximum number of extensible source servers to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next extensible source server to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Source server in staging account that extended source server connected to.
 *
 * @public
 */
export interface StagingSourceServer {
  /**
   * Hostname of staging source server.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * The ARN of the source server.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A list of tags associated with the staging source server.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersResponse {
  /**
   * A list of source servers on a staging Account that are extensible.
   *
   * @public
   */
  items?: StagingSourceServer[] | undefined;

  /**
   * The token of the next extensible source server to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Resource launch actions filter.
 *
 * @public
 */
export interface LaunchActionsRequestFilters {
  /**
   * Launch actions Ids.
   *
   * @public
   */
  actionIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLaunchActionsRequest {
  /**
   * Launch configuration template Id or Source Server Id
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Filters to apply when listing resource launch actions.
   *
   * @public
   */
  filters?: LaunchActionsRequestFilters | undefined;

  /**
   * Maximum amount of items to return when listing resource launch actions.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token to use when listing resource launch actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchActionsResponse {
  /**
   * List of resource launch actions.
   *
   * @public
   */
  items?: LaunchAction[] | undefined;

  /**
   * Next token returned when listing resource launch actions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanExecutionsRequest {
  /**
   * Filter executions by Recovery Plan ARN.
   *
   * @public
   */
  recoveryPlanArn?: string | undefined;

  /**
   * Filter executions by status.
   *
   * @public
   */
  status?: RecoveryPlanExecutionStatus | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a Recovery Plan execution.
 *
 * @public
 */
export interface RecoveryPlanExecutionSummary {
  /**
   * The ARN of the Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;

  /**
   * The ARN of the Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The execution mode.
   *
   * @public
   */
  mode: RecoveryPlanExecutionMode | undefined;

  /**
   * The execution status.
   *
   * @public
   */
  status: RecoveryPlanExecutionStatus | undefined;

  /**
   * The timestamp when the execution started.
   *
   * @public
   */
  startedAt: string | undefined;

  /**
   * Error details if the execution failed.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanExecutionsResponse {
  /**
   * The list of Recovery Plan executions.
   *
   * @public
   */
  recoveryPlanExecutions: RecoveryPlanExecutionSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for listing Recovery Plan execution steps.
 *
 * @public
 */
export interface ListRecoveryPlanExecutionStepsFilter {
  /**
   * Filter by execution step status.
   *
   * @public
   */
  status?: RecoveryPlanExecutionStepStatus | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanExecutionStepsRequest {
  /**
   * The ARN of the Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecutionArn: string | undefined;

  /**
   * Filters for listing execution steps.
   *
   * @public
   */
  filter?: ListRecoveryPlanExecutionStepsFilter | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a Recovery Plan execution step.
 *
 * @public
 */
export interface RecoveryPlanExecutionStepSummary {
  /**
   * The ARN of the execution step.
   *
   * @public
   */
  recoveryPlanExecutionStepArn: string | undefined;

  /**
   * The name of a Recovery Plan Step.
   * @public
   */
  stepName: string | undefined;

  /**
   * The order of a step within a Recovery Plan (1-based).
   * @public
   */
  stepIndex: number | undefined;

  /**
   * The status of the execution step.
   *
   * @public
   */
  status: RecoveryPlanExecutionStepStatus | undefined;

  /**
   * Type-specific configuration for an execution step response.
   * Mirrors RecoveryPlanStepConfiguration but uses execution-enriched server shapes.
   * @public
   */
  configuration: RecoveryPlanExecutionStepConfiguration | undefined;

  /**
   * Error details if the step failed.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanExecutionStepsResponse {
  /**
   * The list of execution steps.
   *
   * @public
   */
  recoveryPlanExecutionSteps: RecoveryPlanExecutionStepSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlansRequest {
  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a Recovery Plan.
 *
 * @public
 */
export interface RecoveryPlanSummary {
  /**
   * The ARN of the Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The name of a Recovery Plan.
   * @public
   */
  name: string | undefined;

  /**
   * The status of the Recovery Plan.
   *
   * @public
   */
  status: RecoveryPlanStatus | undefined;

  /**
   * The timestamp when the Recovery Plan was created.
   *
   * @public
   */
  createdAt: string | undefined;

  /**
   * The timestamp when the Recovery Plan was last updated.
   *
   * @public
   */
  updatedAt: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlansResponse {
  /**
   * The list of Recovery Plans.
   *
   * @public
   */
  recoveryPlans: RecoveryPlanSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanStepsRequest {
  /**
   * The ARN of the Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPlanStepsResponse {
  /**
   * The list of Recovery Plan steps.
   *
   * @public
   */
  recoveryPlanSteps: RecoveryPlanStep[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStagingAccountsRequest {
  /**
   * The maximum number of staging Accounts to retrieve.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token of the next staging Account to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStagingAccountsResponse {
  /**
   * An array of staging AWS Accounts.
   *
   * @public
   */
  accounts?: Account[] | undefined;

  /**
   * The token of the next staging Account to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource whose tags should be returned.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags of the requested resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutLaunchActionRequest {
  /**
   * Launch configuration template Id or Source Server Id
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Launch action code.
   *
   * @public
   */
  actionCode: string | undefined;

  /**
   * Launch action order.
   *
   * @public
   */
  order: number | undefined;

  /**
   * Launch action Id.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * Whether the launch will not be marked as failed if this action fails.
   *
   * @public
   */
  optional: boolean | undefined;

  /**
   * Whether the launch action is active.
   *
   * @public
   */
  active: boolean | undefined;

  /**
   * Launch action name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Launch action version.
   *
   * @public
   */
  actionVersion: string | undefined;

  /**
   * Launch action category.
   *
   * @public
   */
  category: LaunchActionCategory | undefined;

  /**
   * Launch action parameters.
   *
   * @public
   */
  parameters?: Record<string, LaunchActionParameter> | undefined;

  /**
   * Launch action description.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface PutLaunchActionResponse {
  /**
   * Launch configuration template Id or Source Server Id
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Launch action Id.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * Launch action code.
   *
   * @public
   */
  actionCode?: string | undefined;

  /**
   * Launch action type.
   *
   * @public
   */
  type?: LaunchActionType | undefined;

  /**
   * Launch action name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Whether the launch action is active.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Launch action order.
   *
   * @public
   */
  order?: number | undefined;

  /**
   * Launch action version.
   *
   * @public
   */
  actionVersion?: string | undefined;

  /**
   * Whether the launch will not be marked as failed if this action fails.
   *
   * @public
   */
  optional?: boolean | undefined;

  /**
   * Launch action parameters.
   *
   * @public
   */
  parameters?: Record<string, LaunchActionParameter> | undefined;

  /**
   * Launch action description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Launch action category.
   *
   * @public
   */
  category?: LaunchActionCategory | undefined;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationRequest {
  /**
   * The ID of the Recovery Instance whose failback replication configuration should be returned.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationResponse {
  /**
   * The ID of the Recovery Instance.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;

  /**
   * The name of the Failback Replication Configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Whether to use Private IP for the failback replication of the Recovery Instance.
   *
   * @public
   */
  usePrivateIP?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @public
 */
export interface ReverseReplicationRequest {
  /**
   * The ID of the Recovery Instance that we want to reverse the replication for.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface ReverseReplicationResponse {
  /**
   * ARN of created SourceServer.
   *
   * @public
   */
  reversedDirectionSourceServerArn?: string | undefined;
}

/**
 * @public
 */
export interface StartFailbackLaunchRequest {
  /**
   * The IDs of the Recovery Instance whose failback launch we want to request.
   *
   * @public
   */
  recoveryInstanceIDs: string[] | undefined;

  /**
   * The tags to be associated with the failback launch Job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartFailbackLaunchResponse {
  /**
   * The failback launch Job.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StopFailbackRequest {
  /**
   * The ID of the Recovery Instance we want to stop failback for.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesRequest {
  /**
   * The IDs of the Recovery Instances that should be terminated.
   *
   * @public
   */
  recoveryInstanceIDs: string[] | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesResponse {
  /**
   * The Job for terminating the Recovery Instances.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface UpdateFailbackReplicationConfigurationRequest {
  /**
   * The ID of the Recovery Instance.
   *
   * @public
   */
  recoveryInstanceID: string | undefined;

  /**
   * The name of the Failback Replication Configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * Whether to use Private IP for the failback replication of the Recovery Instance.
   *
   * @public
   */
  usePrivateIP?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * A source server with a specific recovery snapshot for plan execution.
 *
 * @public
 */
export interface RecoveryPlanExecutionSourceServer {
  /**
   * The ID of the source server.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The ID of the recovery snapshot to use.
   *
   * @public
   */
  recoverySnapshotID: string | undefined;
}

/**
 * @public
 */
export interface StartRecoveryPlanExecutionRequest {
  /**
   * The ARN of the Recovery Plan to execute.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The execution mode (`DRILL` or `RECOVERY`).
   *
   * @public
   */
  mode: RecoveryPlanExecutionMode | undefined;

  /**
   * A unique string provided to ensure request idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Optional list of source servers with specific recovery snapshots. If not provided, the latest snapshot is used for each server.
   *
   * @public
   */
  sourceServers?: RecoveryPlanExecutionSourceServer[] | undefined;

  /**
   * The tags to apply to the Recovery Plan execution.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartRecoveryPlanExecutionResponse {
  /**
   * The started Recovery Plan execution.
   *
   * @public
   */
  recoveryPlanExecution: RecoveryPlanExecution | undefined;
}

/**
 * @public
 */
export interface ReorderRecoveryPlanStepsRequest {
  /**
   * The ARN of the Recovery Plan.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * Ordered list of all step ARNs representing the desired sequence.
   *
   * @public
   */
  orderedStepArns: string[] | undefined;
}

/**
 * @public
 */
export interface ReorderRecoveryPlanStepsResponse {
  /**
   * The steps with updated order.
   *
   * @public
   */
  recoveryPlanSteps: RecoveryPlanStep[] | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * The Replication Configuration Template ID.
   *
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * The Replication Configuration Template ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The subnet to be used by the replication staging area.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * The security group IDs that will be used by the replication server.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * The instance type to be used for the replication server.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Whether to use a dedicated Replication Server in the replication staging area.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * The type of EBS encryption to be used during replication.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * The ARN of the EBS encryption key to be used during replication.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * The data plane routing mechanism that will be used for replication.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Whether to create a Public IP for the Recovery Instance by default.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * The Point in time (PIT) policy to manage snapshots taken during replication.
   *
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * Whether to allow the AWS replication agent to automatically replicate newly added disks.
   *
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @public
 */
export interface RetryRecoveryPlanExecutionStepRequest {
  /**
   * The ARN of the execution step to retry.
   *
   * @public
   */
  recoveryPlanExecutionStepArn: string | undefined;
}

/**
 * @public
 */
export interface RetryRecoveryPlanExecutionStepResponse {
  /**
   * A Recovery Plan Execution Step resource.
   * @public
   */
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep | undefined;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateRequest {
  /**
   * The Source Network ID to export its CloudFormation template to an S3 bucket.
   *
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateResponse {
  /**
   * S3 bucket URL where the Source Network CloudFormation template was exported to.
   *
   * @public
   */
  s3DestinationUrl?: string | undefined;
}

/**
 * An object representing the Source Network to recover.
 *
 * @public
 */
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
  /**
   * The ID of the Source Network you want to recover.
   *
   * @public
   */
  sourceNetworkID: string | undefined;

  /**
   * CloudFormation stack name to be used for recovering the network.
   *
   * @public
   */
  cfnStackName?: string | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryRequest {
  /**
   * The Source Networks that we want to start a Recovery Job for.
   *
   * @public
   */
  sourceNetworks: StartSourceNetworkRecoveryRequestNetworkEntry[] | undefined;

  /**
   * Don't update existing CloudFormation Stack, recover the network using a new stack.
   *
   * @public
   */
  deployAsNew?: boolean | undefined;

  /**
   * The tags to be associated with the Source Network recovery Job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryResponse {
  /**
   * The Source Network recovery Job.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationRequest {
  /**
   * ID of the Source Network to replicate.
   *
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationResponse {
  /**
   * Source Network which was requested for replication.
   *
   * @public
   */
  sourceNetwork?: SourceNetwork | undefined;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationRequest {
  /**
   * ID of the Source Network to stop replication.
   *
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationResponse {
  /**
   * Source Network which was requested to stop replication.
   *
   * @public
   */
  sourceNetwork?: SourceNetwork | undefined;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * The ID of the Source Server that we want to retrieve a Launch Configuration for.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * Launch into existing instance.
 *
 * @public
 */
export interface LaunchIntoInstanceProperties {
  /**
   * Optionally holds EC2 instance ID of an instance to launch into, instead of launching a new instance during drill, recovery or failback.
   *
   * @public
   */
  launchIntoEC2InstanceID?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * The ID of the Source Server for this launch configuration.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The name of the launch configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The EC2 launch template ID of this launch configuration.
   *
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * The state of the Recovery Instance in EC2 after the recovery operation.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * The licensing configuration to be used for this launch configuration.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Whether we want to activate post-launch actions for the Source Server.
   *
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * Launch into existing instance properties.
   *
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties | undefined;

  /**
   * Recovery mode.
   *
   * @public
   */
  recoveryMode?: RecoveryMode | undefined;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * The ID of the Source Serve for this Replication Configuration.r
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * The configuration of a disk of the Source Server to be replicated.
 *
 * @public
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * The name of the device.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * Whether to boot from this disk or not.
   *
   * @public
   */
  isBootDisk?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;

  /**
   * The requested number of I/O operations per second (IOPS).
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication when `stagingDiskType` is set to Auto. This is a read-only field.
   *
   * @public
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * The ID of the Source Server for this Replication Configuration.
   *
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * The name of the Replication Configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The subnet to be used by the replication staging area.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * The security group IDs that will be used by the replication server.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * The instance type to be used for the replication server.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Whether to use a dedicated Replication Server in the replication staging area.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * The configuration of the disks of the Source Server to be replicated.
   *
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * The type of EBS encryption to be used during replication.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * The ARN of the EBS encryption key to be used during replication.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * The data plane routing mechanism that will be used for replication.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Whether to create a Public IP for the Recovery Instance by default.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * The Point in time (PIT) policy to manage snapshots taken during replication.
   *
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * Whether to allow the AWS replication agent to automatically replicate newly added disks.
   *
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @deprecated WARNING: RetryDataReplication is deprecated.
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * The ID of the Source Server whose data replication should be retried.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * An object representing the Source Server to recover.
 *
 * @public
 */
export interface StartRecoveryRequestSourceServer {
  /**
   * The ID of the Source Server you want to recover.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The ID of a Recovery Snapshot we want to recover from. Omit this field to launch from the latest data by taking an on-demand snapshot.
   *
   * @public
   */
  recoverySnapshotID?: string | undefined;
}

/**
 * @public
 */
export interface StartRecoveryRequest {
  /**
   * The Source Servers that we want to start a Recovery Job for.
   *
   * @public
   */
  sourceServers: StartRecoveryRequestSourceServer[] | undefined;

  /**
   * Whether this Source Server Recovery operation is a drill or not.
   *
   * @public
   */
  isDrill?: boolean | undefined;

  /**
   * The tags to be associated with the Recovery Job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartRecoveryResponse {
  /**
   * The Recovery Job.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * The ID of the Source Server to start replication for.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationResponse {
  /**
   * The Source Server that this action was targeted on.
   *
   * @public
   */
  sourceServer?: SourceServer | undefined;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * The ID of the Source Server to stop replication for.
   *
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * The Source Server that this action was targeted on.
   *
   * @public
   */
  sourceServer?: SourceServer | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * The ID of the Source Server that we want to retrieve a Launch Configuration for.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The name of the launch configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The state of the Recovery Instance in EC2 after the recovery operation.
   *
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
   *
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
   *
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * The licensing configuration to be used for this launch configuration.
   *
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * Whether we want to enable post-launch actions for the Source Server.
   *
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * Launch into existing instance properties.
   *
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties | undefined;

  /**
   * Recovery mode.
   *
   * @public
   */
  recoveryMode?: RecoveryMode | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * The ID of the Source Server for this Replication Configuration.
   *
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * The name of the Replication Configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The subnet to be used by the replication staging area.
   *
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
   *
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * The security group IDs that will be used by the replication server.
   *
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * The instance type to be used for the replication server.
   *
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * Whether to use a dedicated Replication Server in the replication staging area.
   *
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * The Staging Disk EBS volume type to be used during replication.
   *
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * The configuration of the disks of the Source Server to be replicated.
   *
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * The type of EBS encryption to be used during replication.
   *
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * The ARN of the EBS encryption key to be used during replication.
   *
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
   *
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * The data plane routing mechanism that will be used for replication.
   *
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * Whether to create a Public IP for the Recovery Instance by default.
   *
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
   *
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * The Point in time (PIT) policy to manage snapshots taken during replication.
   *
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * Whether to allow the AWS replication agent to automatically replicate newly added disks.
   *
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;

  /**
   * Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6)
   *
   * @public
   */
  internetProtocol?: InternetProtocol | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of the resource for which tags are to be added or updated.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be added or updated.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * ARN of the resource for which tags are to be removed.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanRequest {
  /**
   * The ARN of the Recovery Plan to update.
   *
   * @public
   */
  recoveryPlanArn: string | undefined;

  /**
   * The name of a Recovery Plan.
   * @public
   */
  name?: string | undefined;

  /**
   * The description of a Recovery Plan.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanResponse {
  /**
   * A Recovery Plan resource.
   * @public
   */
  recoveryPlan: RecoveryPlan | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanExecutionStepRequest {
  /**
   * The ARN of the execution step to update.
   *
   * @public
   */
  recoveryPlanExecutionStepArn: string | undefined;

  /**
   * Only SKIPPED is accepted. Step must be in NOT_STARTED or FAILED status.
   * @public
   */
  status?: RecoveryPlanExecutionStepStatus | undefined;

  /**
   * Full replacement of the server list. Only allowed when the step is in NOT_STARTED status (Server type steps only).
   * @public
   */
  servers?: RecoveryPlanServer[] | undefined;

  /**
   * Updated wait duration. Only allowed when the step is in NOT_STARTED status (Wait type steps only).
   * @public
   */
  waitDurationMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanExecutionStepResponse {
  /**
   * A Recovery Plan Execution Step resource.
   * @public
   */
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanStepRequest {
  /**
   * The ARN of the Recovery Plan step to update.
   *
   * @public
   */
  recoveryPlanStepArn: string | undefined;

  /**
   * The name of a Recovery Plan Step.
   * @public
   */
  stepName?: string | undefined;

  /**
   * Type-specific configuration for a recovery plan step.
   * Exactly one member must be set.
   * @public
   */
  configuration?: RecoveryPlanStepConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPlanStepResponse {
  /**
   * A Recovery Plan Step resource.
   * @public
   */
  recoveryPlanStep: RecoveryPlanStep | undefined;
}

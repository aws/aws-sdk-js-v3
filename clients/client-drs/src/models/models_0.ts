// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DrsServiceException as __BaseException } from "./DrsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * <p>AWS account.</p>
 */
export interface Account {
  /**
   * <p>Account ID of AWS account.</p>
   */
  accountID?: string;
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  resourceType?: string;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Properties of a conversion job</p>
 */
export interface ConversionProperties {
  /**
   * <p>A mapping between the volumes being converted and the converted snapshot ids</p>
   */
  volumeToConversionMap?: Record<string, Record<string, string>>;

  /**
   * <p>The root volume name of a conversion job</p>
   */
  rootVolumeName?: string;

  /**
   * <p>Whether the volume being converted uses UEFI or not</p>
   */
  forceUefi?: boolean;

  /**
   * <p>The timestamp of when the snapshot being converted was taken</p>
   */
  dataTimestamp?: string;

  /**
   * <p>A mapping between the volumes and their sizes</p>
   */
  volumeToVolumeSize?: Record<string, number>;
}

/**
 * <p>Information about a server's CPU.</p>
 */
export interface CPU {
  /**
   * <p>The number of CPU cores.</p>
   */
  cores?: number;

  /**
   * <p>The model name of the CPU.</p>
   */
  modelName?: string;
}

export interface CreateExtendedSourceServerRequest {
  /**
   * <p>This defines the ARN of the source server in staging Account based on which you want to create an extended source server.</p>
   */
  sourceServerArn: string | undefined;

  /**
   * <p>A list of tags associated with the extended source server.</p>
   */
  tags?: Record<string, string>;
}

export enum DataReplicationErrorString {
  AGENT_NOT_SEEN = "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS = "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE = "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER = "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP = "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS = "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER = "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER = "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING = "NOT_CONVERGING",
  SNAPSHOTS_FAILURE = "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK = "UNSTABLE_NETWORK",
}

/**
 * <p>Error in data replication.</p>
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString | string;

  /**
   * <p>Error in data replication.</p>
   */
  rawError?: string;
}

export enum DataReplicationInitiationStepName {
  ATTACH_STAGING_DISKS = "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE = "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER = "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER = "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP = "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS = "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE = "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER = "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT = "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER = "START_DATA_TRANSFER",
  WAIT = "WAIT",
}

export enum DataReplicationInitiationStepStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SKIPPED = "SKIPPED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Data replication initiation step.</p>
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>The name of the step.</p>
   */
  name?: DataReplicationInitiationStepName | string;

  /**
   * <p>The status of the step.</p>
   */
  status?: DataReplicationInitiationStepStatus | string;
}

/**
 * <p>Data replication initiation.</p>
 */
export interface DataReplicationInitiation {
  /**
   * <p>The date and time of the current attempt to initiate data replication.</p>
   */
  startDateTime?: string;

  /**
   * <p>The date and time of the next attempt to initiate data replication.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   */
  steps?: DataReplicationInitiationStep[];
}

export enum DataReplicationState {
  BACKLOG = "BACKLOG",
  CONTINUOUS = "CONTINUOUS",
  CREATING_SNAPSHOT = "CREATING_SNAPSHOT",
  DISCONNECTED = "DISCONNECTED",
  INITIAL_SYNC = "INITIAL_SYNC",
  INITIATING = "INITIATING",
  PAUSED = "PAUSED",
  RESCAN = "RESCAN",
  STALLED = "STALLED",
  STOPPED = "STOPPED",
}

/**
 * <p>A disk that should be replicated.</p>
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   */
  backloggedStorageBytes?: number;
}

/**
 * <p>Information about Data Replication</p>
 */
export interface DataReplicationInfo {
  /**
   * <p>Data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   */
  etaDateTime?: string;

  /**
   * <p>The disks that should be replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>The state of the data replication.</p>
   */
  dataReplicationState?: DataReplicationState | string;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in data replication.</p>
   */
  dataReplicationError?: DataReplicationError;
}

export enum LastLaunchResult {
  FAILED = "FAILED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

export enum LastLaunchType {
  DRILL = "DRILL",
  RECOVERY = "RECOVERY",
}

/**
 * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
 */
export interface LifeCycleLastLaunchInitiated {
  /**
   * <p>The date and time the last Source Server launch was initiated.</p>
   */
  apiCallDateTime?: string;

  /**
   * <p>The ID of the Job that was used to last launch the Source Server.</p>
   */
  jobID?: string;

  /**
   * <p>The Job type that was used to last launch the Source Server.</p>
   */
  type?: LastLaunchType | string;
}

/**
 * <p>An object containing information regarding the last launch of a Source Server.</p>
 */
export interface LifeCycleLastLaunch {
  /**
   * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
   */
  initiated?: LifeCycleLastLaunchInitiated;
}

/**
 * <p>An object representing the Source Server Lifecycle.</p>
 */
export interface LifeCycle {
  /**
   * <p>The date and time of when the Source Server was added to the service.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * <p>The date and time of the first byte that was replicated from the Source Server.</p>
   */
  firstByteDateTime?: string;

  /**
   * <p>The amount of time that the Source Server has been replicating for.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>The date and time this Source Server was last seen by the service.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>An object containing information regarding the last launch of the Source Server.</p>
   */
  lastLaunch?: LifeCycleLastLaunch;
}

export enum ReplicationDirection {
  FAILBACK = "FAILBACK",
  FAILOVER = "FAILOVER",
}

/**
 * <p>Properties of the cloud environment where this Source Server originated from.</p>
 */
export interface SourceCloudProperties {
  /**
   * <p>AWS Account ID for an EC2-originated Source Server.</p>
   */
  originAccountID?: string;

  /**
   * <p>AWS Region for an EC2-originated Source Server.</p>
   */
  originRegion?: string;

  /**
   * <p>AWS Availability Zone for an EC2-originated Source Server.</p>
   */
  originAvailabilityZone?: string;
}

/**
 * <p>An object representing a data storage device on a server.</p>
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;
}

/**
 * <p>Hints used to uniquely identify a machine.</p>
 */
export interface IdentificationHints {
  /**
   * <p>Fully Qualified Domain Name identification hint.</p>
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * <p>vCenter VM path identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   */
  awsInstanceID?: string;
}

/**
 * <p>Network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The MAC address of the network interface.</p>
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * <p>Whether this is the primary network interface.</p>
   */
  isPrimary?: boolean;
}

/**
 * <p>Operating System.</p>
 */
export interface OS {
  /**
   * <p>The long name of the Operating System.</p>
   */
  fullString?: string;
}

/**
 * <p>Properties of the Source Server machine.</p>
 */
export interface SourceProperties {
  /**
   * <p>The date and time the Source Properties were last updated on.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>The recommended EC2 instance type that will be used when recovering the Source Server.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>An array of network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>An array of disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>An array of CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * <p>The amount of RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * <p>Operating system.</p>
   */
  os?: OS;
}

export enum ExtensionStatus {
  EXTENDED = "EXTENDED",
  EXTENSION_ERROR = "EXTENSION_ERROR",
  NOT_EXTENDED = "NOT_EXTENDED",
}

/**
 * <p>Staging information related to source server.</p>
 */
export interface StagingArea {
  /**
   * <p>Status of Source server extension. Possible values:
   *             (a) NOT_EXTENDED - This is a source server that is replicating in the current account.
   *             (b) EXTENDED - Source server is extended from a staging source server. In this case, the value of stagingSourceServerArn is pointing to the Arn of the source server in the staging account.
   *             (c) EXTENSION_ERROR - Some issue occurred when accessing staging source server. In this case, errorMessage field will contain an error message that explains what happened.</p>
   */
  status?: ExtensionStatus | string;

  /**
   * <p>Account ID of the account to which source server belongs. If this source server is extended - shows Account ID of staging source server.</p>
   */
  stagingAccountID?: string;

  /**
   * <p>Arn of the staging source server if this source server is extended</p>
   */
  stagingSourceServerArn?: string;

  /**
   * <p>Shows an error message that occurred when DRS tried to access the staging source server. In this case StagingArea$status will have value EXTENSION_ERROR</p>
   */
  errorMessage?: string;
}

export interface SourceServer {
  /**
   * <p>The ID of the Source Server.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The ARN of the Source Server.</p>
   */
  arn?: string;

  /**
   * <p>The tags associated with the Source Server.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ID of the Recovery Instance associated with this Source Server.</p>
   */
  recoveryInstanceId?: string;

  /**
   * <p>The status of the last recovery launch of this Source Server.</p>
   */
  lastLaunchResult?: LastLaunchResult | string;

  /**
   * <p>The Data Replication Info of the Source Server.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>The lifecycle information of this Source Server.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>The source properties of the Source Server.</p>
   */
  sourceProperties?: SourceProperties;

  /**
   * <p>The staging area of the source server.</p>
   */
  stagingArea?: StagingArea;

  /**
   * <p>Source cloud properties of the Source Server.</p>
   */
  sourceCloudProperties?: SourceCloudProperties;

  /**
   * <p>Replication direction of the Source Server.</p>
   */
  replicationDirection?: ReplicationDirection | string;

  /**
   * <p>For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction.</p>
   */
  reversedDirectionSourceServerArn?: string;
}

export interface CreateExtendedSourceServerResponse {
  /**
   * <p>Created extended source server.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The number of seconds after which the request should be safe to retry.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource for this operation was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  resourceType?: string;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request could not be completed because its exceeded the service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  resourceType?: string;

  /**
   * <p>Service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Quota code.</p>
   */
  quotaCode?: string;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Quota code.</p>
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds after which the request should be safe to retry.</p>
   */
  retryAfterSeconds?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The account performing the request has not been initialized.</p>
 */
export class UninitializedAccountException extends __BaseException {
  readonly name: "UninitializedAccountException" = "UninitializedAccountException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UninitializedAccountException, __BaseException>) {
    super({
      name: "UninitializedAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UninitializedAccountException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p>Validate exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   */
  message?: string;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Validation exception reason.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>A list of fields that failed validation.</p>
   */
  fieldList?: ValidationExceptionField[];

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
    this.code = opts.code;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

export enum ReplicationConfigurationDataPlaneRouting {
  PRIVATE_IP = "PRIVATE_IP",
  PUBLIC_IP = "PUBLIC_IP",
}

export enum ReplicationConfigurationDefaultLargeStagingDiskType {
  AUTO = "AUTO",
  GP2 = "GP2",
  GP3 = "GP3",
  ST1 = "ST1",
}

export enum ReplicationConfigurationEbsEncryption {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
}

export enum PITPolicyRuleUnits {
  DAY = "DAY",
  HOUR = "HOUR",
  MINUTE = "MINUTE",
}

/**
 * <p>A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for.</p>
 */
export interface PITPolicyRule {
  /**
   * <p>The ID of the rule.</p>
   */
  ruleID?: number;

  /**
   * <p>The units used to measure the interval and retentionDuration.</p>
   */
  units: PITPolicyRuleUnits | string | undefined;

  /**
   * <p>How often, in the chosen units, a snapshot should be taken.</p>
   */
  interval: number | undefined;

  /**
   * <p>The duration to retain a snapshot for, in the chosen units.</p>
   */
  retentionDuration: number | undefined;

  /**
   * <p>Whether this rule is enabled or not.</p>
   */
  enabled?: boolean;
}

export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | string | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | string | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | string | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy: PITPolicyRule[] | undefined;

  /**
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ReplicationConfigurationTemplate {
  /**
   * <p>The Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>The Replication Configuration Template ARN.</p>
   */
  arn?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];
}

export interface DeleteJobRequest {
  /**
   * <p>The ID of the Job to be deleted.</p>
   */
  jobID: string | undefined;
}

export interface DeleteJobResponse {}

export interface DeleteRecoveryInstanceRequest {
  /**
   * <p>The ID of the Recovery Instance to be deleted.</p>
   */
  recoveryInstanceID: string | undefined;
}

export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>The ID of the Replication Configuration Template to be deleted.</p>
   */
  replicationConfigurationTemplateID: string | undefined;
}

export interface DeleteReplicationConfigurationTemplateResponse {}

export interface DeleteSourceServerRequest {
  /**
   * <p>The ID of the Source Server to be deleted.</p>
   */
  sourceServerID: string | undefined;
}

export interface DeleteSourceServerResponse {}

export interface DescribeJobLogItemsRequest {
  /**
   * <p>The ID of the Job for which Job log items will be retrieved.</p>
   */
  jobID: string | undefined;

  /**
   * <p>Maximum number of Job log items to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   */
  nextToken?: string;
}

export enum JobLogEvent {
  CLEANUP_END = "CLEANUP_END",
  CLEANUP_FAIL = "CLEANUP_FAIL",
  CLEANUP_START = "CLEANUP_START",
  CONVERSION_END = "CONVERSION_END",
  CONVERSION_FAIL = "CONVERSION_FAIL",
  CONVERSION_START = "CONVERSION_START",
  JOB_CANCEL = "JOB_CANCEL",
  JOB_END = "JOB_END",
  JOB_START = "JOB_START",
  LAUNCH_FAILED = "LAUNCH_FAILED",
  LAUNCH_START = "LAUNCH_START",
  SERVER_SKIPPED = "SERVER_SKIPPED",
  SNAPSHOT_END = "SNAPSHOT_END",
  SNAPSHOT_FAIL = "SNAPSHOT_FAIL",
  SNAPSHOT_START = "SNAPSHOT_START",
  USING_PREVIOUS_SNAPSHOT = "USING_PREVIOUS_SNAPSHOT",
  USING_PREVIOUS_SNAPSHOT_FAILED = "USING_PREVIOUS_SNAPSHOT_FAILED",
}

/**
 * <p>Metadata associated with a Job log.</p>
 */
export interface JobLogEventData {
  /**
   * <p>The ID of a Source Server.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The ID of a conversion server.</p>
   */
  conversionServerID?: string;

  /**
   * <p>The ID of a Recovery Instance.</p>
   */
  targetInstanceID?: string;

  /**
   * <p>A string representing a job error.</p>
   */
  rawError?: string;

  /**
   * <p>Properties of a conversion job</p>
   */
  conversionProperties?: ConversionProperties;
}

/**
 * <p>A log outputted by a Job.</p>
 */
export interface JobLog {
  /**
   * <p>The date and time the log was taken.</p>
   */
  logDateTime?: string;

  /**
   * <p>The event represents the type of a log.</p>
   */
  event?: JobLogEvent | string;

  /**
   * <p>Metadata associated with a Job log.</p>
   */
  eventData?: JobLogEventData;
}

export interface DescribeJobLogItemsResponse {
  /**
   * <p>An array of Job log items.</p>
   */
  items?: JobLog[];

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Jobs.</p>
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>An array of Job IDs that should be returned. An empty array means all jobs.</p>
   */
  jobIDs?: string[];

  /**
   * <p>The start date in a date range query.</p>
   */
  fromDate?: string;

  /**
   * <p>The end date in a date range query.</p>
   */
  toDate?: string;
}

export interface DescribeJobsRequest {
  /**
   * <p>A set of filters by which to return Jobs.</p>
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * <p>Maximum number of Jobs to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Job to retrieve.</p>
   */
  nextToken?: string;
}

export enum InitiatedBy {
  DIAGNOSTIC = "DIAGNOSTIC",
  FAILBACK = "FAILBACK",
  START_DRILL = "START_DRILL",
  START_RECOVERY = "START_RECOVERY",
  TARGET_ACCOUNT = "TARGET_ACCOUNT",
  TERMINATE_RECOVERY_INSTANCES = "TERMINATE_RECOVERY_INSTANCES",
}

export enum LaunchStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  LAUNCHED = "LAUNCHED",
  PENDING = "PENDING",
  TERMINATED = "TERMINATED",
}

/**
 * <p>Represents a server participating in an asynchronous Job.</p>
 */
export interface ParticipatingServer {
  /**
   * <p>The Source Server ID of a participating server.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The Recovery Instance ID of a participating server.</p>
   */
  recoveryInstanceID?: string;

  /**
   * <p>The launch status of a participating server.</p>
   */
  launchStatus?: LaunchStatus | string;
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  STARTED = "STARTED",
}

export enum JobType {
  CREATE_CONVERTED_SNAPSHOT = "CREATE_CONVERTED_SNAPSHOT",
  LAUNCH = "LAUNCH",
  TERMINATE = "TERMINATE",
}

/**
 * <p>A job is an asynchronous workflow.</p>
 */
export interface Job {
  /**
   * <p>The ID of the Job.</p>
   */
  jobID: string | undefined;

  /**
   * <p>The ARN of a Job.</p>
   */
  arn?: string;

  /**
   * <p>The type of the Job.</p>
   */
  type?: JobType | string;

  /**
   * <p>A string representing who initiated the Job.</p>
   */
  initiatedBy?: InitiatedBy | string;

  /**
   * <p>The date and time of when the Job was created.</p>
   */
  creationDateTime?: string;

  /**
   * <p>The date and time of when the Job ended.</p>
   */
  endDateTime?: string;

  /**
   * <p>The status of the Job.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>A list of servers that the Job is acting upon.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>A list of tags associated with the Job.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeJobsResponse {
  /**
   * <p>An array of Jobs.</p>
   */
  items?: Job[];

  /**
   * <p>The token of the next Job to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Recovery Instances.</p>
 */
export interface DescribeRecoveryInstancesRequestFilters {
  /**
   * <p>An array of Recovery Instance IDs that should be returned. An empty array means all Recovery Instances.</p>
   */
  recoveryInstanceIDs?: string[];

  /**
   * <p>An array of Source Server IDs for which associated Recovery Instances should be returned.</p>
   */
  sourceServerIDs?: string[];
}

export interface DescribeRecoveryInstancesRequest {
  /**
   * <p>A set of filters by which to return Recovery Instances.</p>
   */
  filters?: DescribeRecoveryInstancesRequestFilters;

  /**
   * <p>Maximum number of Recovery Instances to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   */
  nextToken?: string;
}

export enum FailbackReplicationError {
  AGENT_NOT_SEEN = "AGENT_NOT_SEEN",
  FAILBACK_CLIENT_NOT_SEEN = "FAILBACK_CLIENT_NOT_SEEN",
  FAILED_GETTING_REPLICATION_STATE = "FAILED_GETTING_REPLICATION_STATE",
  FAILED_TO_ATTACH_STAGING_DISKS = "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE = "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER = "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE = "FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP = "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS = "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION = "FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION = "FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  FAILED_TO_LAUNCH_REPLICATION_SERVER = "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE = "FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER = "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING = "NOT_CONVERGING",
  SNAPSHOTS_FAILURE = "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK = "UNSTABLE_NETWORK",
}

/**
 * <p>Error in data replication.</p>
 */
export interface RecoveryInstanceDataReplicationError {
  /**
   * <p>Error in data replication.</p>
   */
  error?: FailbackReplicationError | string;

  /**
   * <p>Error in data replication.</p>
   */
  rawError?: string;
}

export enum RecoveryInstanceDataReplicationInitiationStepName {
  ATTACH_STAGING_DISKS = "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE = "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER = "BOOT_REPLICATION_SERVER",
  COMPLETE_VOLUME_MAPPING = "COMPLETE_VOLUME_MAPPING",
  CONFIGURE_REPLICATION_SOFTWARE = "CONFIGURE_REPLICATION_SOFTWARE",
  CONNECT_AGENT_TO_REPLICATION_SERVER = "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP = "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS = "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE = "DOWNLOAD_REPLICATION_SOFTWARE",
  DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT = "DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION = "ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION = "ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  LAUNCH_REPLICATION_SERVER = "LAUNCH_REPLICATION_SERVER",
  LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE = "LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE",
  PAIR_AGENT_WITH_REPLICATION_SOFTWARE = "PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  PAIR_REPLICATION_SERVER_WITH_AGENT = "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER = "START_DATA_TRANSFER",
  WAIT = "WAIT",
}

export enum RecoveryInstanceDataReplicationInitiationStepStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SKIPPED = "SKIPPED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Data replication initiation step.</p>
 */
export interface RecoveryInstanceDataReplicationInitiationStep {
  /**
   * <p>The name of the step.</p>
   */
  name?: RecoveryInstanceDataReplicationInitiationStepName | string;

  /**
   * <p>The status of the step.</p>
   */
  status?: RecoveryInstanceDataReplicationInitiationStepStatus | string;
}

/**
 * <p>Data replication initiation.</p>
 */
export interface RecoveryInstanceDataReplicationInitiation {
  /**
   * <p>The date and time of the current attempt to initiate data replication.</p>
   */
  startDateTime?: string;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   */
  steps?: RecoveryInstanceDataReplicationInitiationStep[];
}

export enum RecoveryInstanceDataReplicationState {
  BACKLOG = "BACKLOG",
  CONTINUOUS = "CONTINUOUS",
  CREATING_SNAPSHOT = "CREATING_SNAPSHOT",
  DISCONNECTED = "DISCONNECTED",
  INITIAL_SYNC = "INITIAL_SYNC",
  INITIATING = "INITIATING",
  NOT_STARTED = "NOT_STARTED",
  PAUSED = "PAUSED",
  REPLICATION_STATE_NOT_AVAILABLE = "REPLICATION_STATE_NOT_AVAILABLE",
  RESCAN = "RESCAN",
  STALLED = "STALLED",
  STOPPED = "STOPPED",
}

/**
 * <p>A disk that should be replicated.</p>
 */
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   */
  backloggedStorageBytes?: number;
}

/**
 * <p>Information about Data Replication</p>
 */
export interface RecoveryInstanceDataReplicationInfo {
  /**
   * <p>Data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   */
  etaDateTime?: string;

  /**
   * <p>The disks that should be replicated.</p>
   */
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[];

  /**
   * <p>The state of the data replication.</p>
   */
  dataReplicationState?: RecoveryInstanceDataReplicationState | string;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   */
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;

  /**
   * <p>Information about Data Replication</p>
   */
  dataReplicationError?: RecoveryInstanceDataReplicationError;
}

export enum EC2InstanceState {
  NOT_FOUND = "NOT_FOUND",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING-DOWN",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  TERMINATED = "TERMINATED",
}

export enum FailbackLaunchType {
  DRILL = "DRILL",
  RECOVERY = "RECOVERY",
}

export enum FailbackState {
  FAILBACK_COMPLETED = "FAILBACK_COMPLETED",
  FAILBACK_ERROR = "FAILBACK_ERROR",
  FAILBACK_IN_PROGRESS = "FAILBACK_IN_PROGRESS",
  FAILBACK_LAUNCH_STATE_NOT_AVAILABLE = "FAILBACK_LAUNCH_STATE_NOT_AVAILABLE",
  FAILBACK_NOT_READY_FOR_LAUNCH = "FAILBACK_NOT_READY_FOR_LAUNCH",
  FAILBACK_NOT_STARTED = "FAILBACK_NOT_STARTED",
  FAILBACK_READY_FOR_LAUNCH = "FAILBACK_READY_FOR_LAUNCH",
}

/**
 * <p>An object representing failback related information of the Recovery Instance.</p>
 */
export interface RecoveryInstanceFailback {
  /**
   * <p>The ID of the failback client that this Recovery Instance is associated with.</p>
   */
  failbackClientID?: string;

  /**
   * <p>The Job ID of the last failback log for this Recovery Instance.</p>
   */
  failbackJobID?: string;

  /**
   * <p>The date and time that the failback initiation started.</p>
   */
  failbackInitiationTime?: string;

  /**
   * <p>The state of the failback process that this Recovery Instance is in.</p>
   */
  state?: FailbackState | string;

  /**
   * <p>The date and time the agent on the Recovery Instance was last seen by the service.</p>
   */
  agentLastSeenByServiceDateTime?: string;

  /**
   * <p>The date and time that the failback client was last seen by the service.</p>
   */
  failbackClientLastSeenByServiceDateTime?: string;

  /**
   * <p>Whether we are failing back to the original Source Server for this Recovery Instance.</p>
   */
  failbackToOriginalServer?: boolean;

  /**
   * <p>The date and time of the first byte that was replicated from the Recovery Instance.</p>
   */
  firstByteDateTime?: string;

  /**
   * <p>The amount of time that the Recovery Instance has been replicating for.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>The launch type (Recovery / Drill) of the last launch for the failback replication of this recovery instance.</p>
   */
  failbackLaunchType?: FailbackLaunchType | string;
}

export enum OriginEnvironment {
  AWS = "AWS",
  ON_PREMISES = "ON_PREMISES",
}

/**
 * <p>An object representing a block storage device on the Recovery Instance.</p>
 */
export interface RecoveryInstanceDisk {
  /**
   * <p>The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.</p>
   */
  internalDeviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;

  /**
   * <p>The EBS Volume ID of this disk.</p>
   */
  ebsVolumeID?: string;
}

/**
 * <p>Properties of the Recovery Instance machine.</p>
 */
export interface RecoveryInstanceProperties {
  /**
   * <p>The date and time the Recovery Instance properties were last updated on.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>An array of network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>An array of disks.</p>
   */
  disks?: RecoveryInstanceDisk[];

  /**
   * <p>An array of CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * <p>The amount of RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * <p>Operating system.</p>
   */
  os?: OS;
}

/**
 * <p>A Recovery Instance is a replica of a Source Server running on EC2.</p>
 */
export interface RecoveryInstance {
  /**
   * <p>The EC2 instance ID of the Recovery Instance.</p>
   */
  ec2InstanceID?: string;

  /**
   * <p>The state of the EC2 instance for this Recovery Instance.</p>
   */
  ec2InstanceState?: EC2InstanceState | string;

  /**
   * <p>The ID of the Job that created the Recovery Instance.</p>
   */
  jobID?: string;

  /**
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID?: string;

  /**
   * <p>The Source Server ID that this Recovery Instance is associated with.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The ARN of the Recovery Instance.</p>
   */
  arn?: string;

  /**
   * <p>An array of tags that are associated with the Recovery Instance.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>An object representing failback related information of the Recovery Instance.</p>
   */
  failback?: RecoveryInstanceFailback;

  /**
   * <p>The Data Replication Info of the Recovery Instance.</p>
   */
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;

  /**
   * <p>Properties of the Recovery Instance machine.</p>
   */
  recoveryInstanceProperties?: RecoveryInstanceProperties;

  /**
   * <p>The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.</p>
   */
  pointInTimeSnapshotDateTime?: string;

  /**
   * <p>Whether this Recovery Instance was created for a drill or for an actual Recovery event.</p>
   */
  isDrill?: boolean;

  /**
   * <p>Environment (On Premises / AWS) of the instance that the recovery instance originated from. </p>
   */
  originEnvironment?: OriginEnvironment | string;
}

export interface DescribeRecoveryInstancesResponse {
  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of Recovery Instances.</p>
   */
  items?: RecoveryInstance[];
}

/**
 * <p>A set of filters by which to return Recovery Snapshots.</p>
 */
export interface DescribeRecoverySnapshotsRequestFilters {
  /**
   * <p>The start date in a date range query.</p>
   */
  fromDateTime?: string;

  /**
   * <p>The end date in a date range query.</p>
   */
  toDateTime?: string;
}

export enum RecoverySnapshotsOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface DescribeRecoverySnapshotsRequest {
  /**
   * <p>Filter Recovery Snapshots by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>A set of filters by which to return Recovery Snapshots.</p>
   */
  filters?: DescribeRecoverySnapshotsRequestFilters;

  /**
   * <p>The sorted ordering by which to return Recovery Snapshots.</p>
   */
  order?: RecoverySnapshotsOrder | string;

  /**
   * <p>Maximum number of Recovery Snapshots to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * <p>A snapshot of a Source Server used during recovery.</p>
 */
export interface RecoverySnapshot {
  /**
   * <p>The ID of the Recovery Snapshot.</p>
   */
  snapshotID: string | undefined;

  /**
   * <p>The ID of the Source Server that the snapshot was taken for.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The timestamp of when we expect the snapshot to be taken.</p>
   */
  expectedTimestamp: string | undefined;

  /**
   * <p>The actual timestamp that the snapshot was taken.</p>
   */
  timestamp?: string;

  /**
   * <p>A list of EBS snapshots.</p>
   */
  ebsSnapshots?: string[];
}

export interface DescribeRecoverySnapshotsResponse {
  /**
   * <p>An array of Recovery Snapshots.</p>
   */
  items?: RecoverySnapshot[];

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   */
  nextToken?: string;
}

export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.</p>
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum number of Replication Configuration Templates to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>An array of Replication Configuration Templates.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Source Servers.</p>
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>An array of Source Servers IDs that should be returned. An empty array means all Source Servers.</p>
   */
  sourceServerIDs?: string[];

  /**
   * <p>An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.</p>
   */
  hardwareId?: string;

  /**
   * <p>An array of staging account IDs that extended source servers belong to. An empty array means all source servers will be shown.</p>
   */
  stagingAccountIDs?: string[];
}

export interface DescribeSourceServersRequest {
  /**
   * <p>A set of filters by which to return Source Servers.</p>
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * <p>Maximum number of Source Servers to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   */
  nextToken?: string;
}

export interface DescribeSourceServersResponse {
  /**
   * <p>An array of Source Servers.</p>
   */
  items?: SourceServer[];

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   */
  nextToken?: string;
}

export interface DisconnectRecoveryInstanceRequest {
  /**
   * <p>The ID of the Recovery Instance to disconnect.</p>
   */
  recoveryInstanceID: string | undefined;
}

export interface DisconnectSourceServerRequest {
  /**
   * <p>The ID of the Source Server to disconnect.</p>
   */
  sourceServerID: string | undefined;
}

export interface InitializeServiceRequest {}

export interface InitializeServiceResponse {}

export interface ListExtensibleSourceServersRequest {
  /**
   * <p>The Id of the staging Account to retrieve extensible source servers from.</p>
   */
  stagingAccountID: string | undefined;

  /**
   * <p>The maximum number of extensible source servers to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * <p>Source server in staging account that extended source server connected to.</p>
 */
export interface StagingSourceServer {
  /**
   * <p>Hostname of staging source server.</p>
   */
  hostname?: string;

  /**
   * <p>The ARN of the source server.</p>
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the staging source server.</p>
   */
  tags?: Record<string, string>;
}

export interface ListExtensibleSourceServersResponse {
  /**
   * <p>A list of source servers on a staging Account that are extensible.</p>
   */
  items?: StagingSourceServer[];

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   */
  nextToken?: string;
}

export interface ListStagingAccountsRequest {
  /**
   * <p>The maximum number of staging Accounts to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   */
  nextToken?: string;
}

export interface ListStagingAccountsResponse {
  /**
   * <p>An array of staging AWS Accounts.</p>
   */
  accounts?: Account[];

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags should be returned.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the requested resource.</p>
   */
  tags?: Record<string, string>;
}

export interface GetFailbackReplicationConfigurationRequest {
  /**
   * <p>The ID of the Recovery Instance whose failback replication configuration should be returned.</p>
   */
  recoveryInstanceID: string | undefined;
}

export interface GetFailbackReplicationConfigurationResponse {
  /**
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID: string | undefined;

  /**
   * <p>The name of the Failback Replication Configuration.</p>
   */
  name?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   */
  usePrivateIP?: boolean;
}

export interface ReverseReplicationRequest {
  /**
   * <p>The ID of the Recovery Instance that we want to reverse the replication for.</p>
   */
  recoveryInstanceID: string | undefined;
}

export interface ReverseReplicationResponse {
  /**
   * <p>ARN of created SourceServer.</p>
   */
  reversedDirectionSourceServerArn?: string;
}

export interface StartFailbackLaunchRequest {
  /**
   * <p>The IDs of the Recovery Instance whose failback launch we want to request.</p>
   */
  recoveryInstanceIDs: string[] | undefined;

  /**
   * <p>The tags to be associated with the failback launch Job.</p>
   */
  tags?: Record<string, string>;
}

export interface StartFailbackLaunchResponse {
  /**
   * <p>The failback launch Job.</p>
   */
  job?: Job;
}

export interface StopFailbackRequest {
  /**
   * <p>The ID of the Recovery Instance we want to stop failback for.</p>
   */
  recoveryInstanceID: string | undefined;
}

export interface TerminateRecoveryInstancesRequest {
  /**
   * <p>The IDs of the Recovery Instances that should be terminated.</p>
   */
  recoveryInstanceIDs: string[] | undefined;
}

export interface TerminateRecoveryInstancesResponse {
  /**
   * <p>The Job for terminating the Recovery Instances.</p>
   */
  job?: Job;
}

export interface UpdateFailbackReplicationConfigurationRequest {
  /**
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID: string | undefined;

  /**
   * <p>The name of the Failback Replication Configuration.</p>
   */
  name?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   */
  usePrivateIP?: boolean;
}

export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>The Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>The Replication Configuration Template ARN.</p>
   */
  arn?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];
}

export interface GetLaunchConfigurationRequest {
  /**
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   */
  sourceServerID: string | undefined;
}

export enum LaunchDisposition {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

/**
 * <p>Configuration of a machine's license.</p>
 */
export interface Licensing {
  /**
   * <p>Whether to enable "Bring your own license" or not.</p>
   */
  osByol?: boolean;
}

export enum TargetInstanceTypeRightSizingMethod {
  BASIC = "BASIC",
  NONE = "NONE",
}

export interface LaunchConfiguration {
  /**
   * <p>The ID of the Source Server for this launch configuration.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The name of the launch configuration.</p>
   */
  name?: string;

  /**
   * <p>The EC2 launch template ID of this launch configuration.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   */
  copyTags?: boolean;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   */
  licensing?: Licensing;
}

export interface GetReplicationConfigurationRequest {
  /**
   * <p>The ID of the Source Serve for this Replication Configuration.r</p>
   */
  sourceServerID: string | undefined;
}

export enum ReplicationConfigurationReplicatedDiskStagingDiskType {
  AUTO = "AUTO",
  GP2 = "GP2",
  GP3 = "GP3",
  IO1 = "IO1",
  SC1 = "SC1",
  ST1 = "ST1",
  STANDARD = "STANDARD",
}

/**
 * <p>The configuration of a disk of the Source Server to be replicated.</p>
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * <p>Whether to boot from this disk or not.</p>
   */
  isBootDisk?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;

  /**
   * <p>The requested number of I/O operations per second (IOPS).</p>
   */
  iops?: number;

  /**
   * <p>The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.</p>
   */
  throughput?: number;

  /**
   * <p>When <code>stagingDiskType</code> is set to Auto, this field shows the current staging disk EBS volume type as it is constantly updated by the service. This is a read-only field.</p>
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;
}

export interface ReplicationConfiguration {
  /**
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   */
  sourceServerID?: string;

  /**
   * <p>The name of the Replication Configuration.</p>
   */
  name?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];
}

export interface RetryDataReplicationRequest {
  /**
   * <p>The ID of the Source Server whose data replication should be retried.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * <p>An object representing the Source Server to recover.</p>
 */
export interface StartRecoveryRequestSourceServer {
  /**
   * <p>The ID of the Source Server you want to recover.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The ID of a Recovery Snapshot we want to recover from. Omit this field to launch from the latest data by taking an on-demand snapshot.</p>
   */
  recoverySnapshotID?: string;
}

export interface StartRecoveryRequest {
  /**
   * <p>The Source Servers that we want to start a Recovery Job for.</p>
   */
  sourceServers: StartRecoveryRequestSourceServer[] | undefined;

  /**
   * <p>Whether this Source Server Recovery operation is a drill or not.</p>
   */
  isDrill?: boolean;

  /**
   * <p>The tags to be associated with the Recovery Job.</p>
   */
  tags?: Record<string, string>;
}

export interface StartRecoveryResponse {
  /**
   * <p>The Recovery Job.</p>
   */
  job?: Job;
}

export interface StartReplicationRequest {
  /**
   * <p>The ID of the Source Server to start replication for.</p>
   */
  sourceServerID: string | undefined;
}

export interface StartReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

export interface StopReplicationRequest {
  /**
   * <p>The ID of the Source Server to stop replication for.</p>
   */
  sourceServerID: string | undefined;
}

export interface StopReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The name of the launch configuration.</p>
   */
  name?: string;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   */
  copyTags?: boolean;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   */
  licensing?: Licensing;
}

export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The name of the Replication Configuration.</p>
   */
  name?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];
}

export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const AccountFilterSensitiveLog = (obj: Account): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConversionPropertiesFilterSensitiveLog = (obj: ConversionProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CPUFilterSensitiveLog = (obj: CPU): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExtendedSourceServerRequestFilterSensitiveLog = (obj: CreateExtendedSourceServerRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataReplicationErrorFilterSensitiveLog = (obj: DataReplicationError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInitiationStepFilterSensitiveLog = (obj: DataReplicationInitiationStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInitiationFilterSensitiveLog = (obj: DataReplicationInitiation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInfoReplicatedDiskFilterSensitiveLog = (obj: DataReplicationInfoReplicatedDisk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInfoFilterSensitiveLog = (obj: DataReplicationInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastLaunchInitiatedFilterSensitiveLog = (obj: LifeCycleLastLaunchInitiated): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastLaunchFilterSensitiveLog = (obj: LifeCycleLastLaunch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleFilterSensitiveLog = (obj: LifeCycle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceCloudPropertiesFilterSensitiveLog = (obj: SourceCloudProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskFilterSensitiveLog = (obj: Disk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentificationHintsFilterSensitiveLog = (obj: IdentificationHints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OSFilterSensitiveLog = (obj: OS): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourcePropertiesFilterSensitiveLog = (obj: SourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StagingAreaFilterSensitiveLog = (obj: StagingArea): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceServerFilterSensitiveLog = (obj: SourceServer): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateExtendedSourceServerResponseFilterSensitiveLog = (obj: CreateExtendedSourceServerResponse): any => ({
  ...obj,
  ...(obj.sourceServer && { sourceServer: SourceServerFilterSensitiveLog(obj.sourceServer) }),
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PITPolicyRuleFilterSensitiveLog = (obj: PITPolicyRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ReplicationConfigurationTemplateFilterSensitiveLog = (obj: ReplicationConfigurationTemplate): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteJobRequestFilterSensitiveLog = (obj: DeleteJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobResponseFilterSensitiveLog = (obj: DeleteJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecoveryInstanceRequestFilterSensitiveLog = (obj: DeleteRecoveryInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: DeleteReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationConfigurationTemplateResponseFilterSensitiveLog = (
  obj: DeleteReplicationConfigurationTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSourceServerRequestFilterSensitiveLog = (obj: DeleteSourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSourceServerResponseFilterSensitiveLog = (obj: DeleteSourceServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobLogItemsRequestFilterSensitiveLog = (obj: DescribeJobLogItemsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobLogEventDataFilterSensitiveLog = (obj: JobLogEventData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobLogFilterSensitiveLog = (obj: JobLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobLogItemsResponseFilterSensitiveLog = (obj: DescribeJobLogItemsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsRequestFiltersFilterSensitiveLog = (obj: DescribeJobsRequestFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsRequestFilterSensitiveLog = (obj: DescribeJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParticipatingServerFilterSensitiveLog = (obj: ParticipatingServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeJobsResponseFilterSensitiveLog = (obj: DescribeJobsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeRecoveryInstancesRequestFiltersFilterSensitiveLog = (
  obj: DescribeRecoveryInstancesRequestFilters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecoveryInstancesRequestFilterSensitiveLog = (obj: DescribeRecoveryInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDataReplicationErrorFilterSensitiveLog = (
  obj: RecoveryInstanceDataReplicationError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDataReplicationInitiationStepFilterSensitiveLog = (
  obj: RecoveryInstanceDataReplicationInitiationStep
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDataReplicationInitiationFilterSensitiveLog = (
  obj: RecoveryInstanceDataReplicationInitiation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDataReplicationInfoReplicatedDiskFilterSensitiveLog = (
  obj: RecoveryInstanceDataReplicationInfoReplicatedDisk
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDataReplicationInfoFilterSensitiveLog = (
  obj: RecoveryInstanceDataReplicationInfo
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceFailbackFilterSensitiveLog = (obj: RecoveryInstanceFailback): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceDiskFilterSensitiveLog = (obj: RecoveryInstanceDisk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstancePropertiesFilterSensitiveLog = (obj: RecoveryInstanceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryInstanceFilterSensitiveLog = (obj: RecoveryInstance): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeRecoveryInstancesResponseFilterSensitiveLog = (obj: DescribeRecoveryInstancesResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => RecoveryInstanceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeRecoverySnapshotsRequestFiltersFilterSensitiveLog = (
  obj: DescribeRecoverySnapshotsRequestFilters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecoverySnapshotsRequestFilterSensitiveLog = (obj: DescribeRecoverySnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoverySnapshotFilterSensitiveLog = (obj: RecoverySnapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecoverySnapshotsResponseFilterSensitiveLog = (obj: DescribeRecoverySnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplicationConfigurationTemplatesRequestFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeSourceServersRequestFiltersFilterSensitiveLog = (
  obj: DescribeSourceServersRequestFilters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceServersRequestFilterSensitiveLog = (obj: DescribeSourceServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceServersResponseFilterSensitiveLog = (obj: DescribeSourceServersResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SourceServerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DisconnectRecoveryInstanceRequestFilterSensitiveLog = (obj: DisconnectRecoveryInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectSourceServerRequestFilterSensitiveLog = (obj: DisconnectSourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitializeServiceRequestFilterSensitiveLog = (obj: InitializeServiceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitializeServiceResponseFilterSensitiveLog = (obj: InitializeServiceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensibleSourceServersRequestFilterSensitiveLog = (obj: ListExtensibleSourceServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StagingSourceServerFilterSensitiveLog = (obj: StagingSourceServer): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListExtensibleSourceServersResponseFilterSensitiveLog = (
  obj: ListExtensibleSourceServersResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => StagingSourceServerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListStagingAccountsRequestFilterSensitiveLog = (obj: ListStagingAccountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStagingAccountsResponseFilterSensitiveLog = (obj: ListStagingAccountsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFailbackReplicationConfigurationRequestFilterSensitiveLog = (
  obj: GetFailbackReplicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFailbackReplicationConfigurationResponseFilterSensitiveLog = (
  obj: GetFailbackReplicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReverseReplicationRequestFilterSensitiveLog = (obj: ReverseReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReverseReplicationResponseFilterSensitiveLog = (obj: ReverseReplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFailbackLaunchRequestFilterSensitiveLog = (obj: StartFailbackLaunchRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartFailbackLaunchResponseFilterSensitiveLog = (obj: StartFailbackLaunchResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const StopFailbackRequestFilterSensitiveLog = (obj: StopFailbackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateRecoveryInstancesRequestFilterSensitiveLog = (obj: TerminateRecoveryInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateRecoveryInstancesResponseFilterSensitiveLog = (obj: TerminateRecoveryInstancesResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const UpdateFailbackReplicationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateFailbackReplicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLaunchConfigurationRequestFilterSensitiveLog = (obj: GetLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicensingFilterSensitiveLog = (obj: Licensing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationFilterSensitiveLog = (obj: LaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationConfigurationRequestFilterSensitiveLog = (obj: GetReplicationConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationConfigurationReplicatedDiskFilterSensitiveLog = (
  obj: ReplicationConfigurationReplicatedDisk
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationConfigurationFilterSensitiveLog = (obj: ReplicationConfiguration): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetryDataReplicationRequestFilterSensitiveLog = (obj: RetryDataReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecoveryRequestSourceServerFilterSensitiveLog = (obj: StartRecoveryRequestSourceServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecoveryRequestFilterSensitiveLog = (obj: StartRecoveryRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartRecoveryResponseFilterSensitiveLog = (obj: StartRecoveryResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const StartReplicationRequestFilterSensitiveLog = (obj: StartReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReplicationResponseFilterSensitiveLog = (obj: StartReplicationResponse): any => ({
  ...obj,
  ...(obj.sourceServer && { sourceServer: SourceServerFilterSensitiveLog(obj.sourceServer) }),
});

/**
 * @internal
 */
export const StopReplicationRequestFilterSensitiveLog = (obj: StopReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopReplicationResponseFilterSensitiveLog = (obj: StopReplicationResponse): any => ({
  ...obj,
  ...(obj.sourceServer && { sourceServer: SourceServerFilterSensitiveLog(obj.sourceServer) }),
});

/**
 * @internal
 */
export const UpdateLaunchConfigurationRequestFilterSensitiveLog = (obj: UpdateLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

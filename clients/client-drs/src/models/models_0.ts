// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DrsServiceException as __BaseException } from "./DrsServiceException";

/**
 * @public
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
 * @public
 * <p>AWS account.</p>
 */
export interface Account {
  /**
   * <p>Account ID of AWS account.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackRequest {
  /**
   * <p>The Source Network ID to associate with CloudFormation template.</p>
   */
  sourceNetworkID: string | undefined;

  /**
   * <p>CloudFormation template to associate with a Source Network.</p>
   */
  cfnStackName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  ASSOCIATE_NETWORK_RECOVERY: "ASSOCIATE_NETWORK_RECOVERY",
  CREATE_NETWORK_RECOVERY: "CREATE_NETWORK_RECOVERY",
  DIAGNOSTIC: "DIAGNOSTIC",
  FAILBACK: "FAILBACK",
  START_DRILL: "START_DRILL",
  START_RECOVERY: "START_RECOVERY",
  TARGET_ACCOUNT: "TARGET_ACCOUNT",
  TERMINATE_RECOVERY_INSTANCES: "TERMINATE_RECOVERY_INSTANCES",
  UPDATE_NETWORK_RECOVERY: "UPDATE_NETWORK_RECOVERY",
} as const;

/**
 * @public
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

/**
 * @public
 * @enum
 */
export const LaunchStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  LAUNCHED: "LAUNCHED",
  PENDING: "PENDING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus];

/**
 * @public
 * <p>ID of a resource participating in an asynchronous Job.</p>
 */
export type ParticipatingResourceID =
  | ParticipatingResourceID.SourceNetworkIDMember
  | ParticipatingResourceID.$UnknownMember;

/**
 * @public
 */
export namespace ParticipatingResourceID {
  /**
   * <p>Source Network ID.</p>
   */
  export interface SourceNetworkIDMember {
    sourceNetworkID: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    sourceNetworkID?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sourceNetworkID: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ParticipatingResourceID, visitor: Visitor<T>): T => {
    if (value.sourceNetworkID !== undefined) return visitor.sourceNetworkID(value.sourceNetworkID);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Represents a resource participating in an asynchronous Job.</p>
 */
export interface ParticipatingResource {
  /**
   * <p>The ID of a participating resource.</p>
   */
  participatingResourceID?: ParticipatingResourceID;

  /**
   * <p>The launch status of a participating resource.</p>
   */
  launchStatus?: LaunchStatus | string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  STARTED: "STARTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  CREATE_CONVERTED_SNAPSHOT: "CREATE_CONVERTED_SNAPSHOT",
  LAUNCH: "LAUNCH",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
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

  /**
   * <p>A list of resources that the Job is acting upon.</p>
   */
  participatingResources?: ParticipatingResource[];
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackResponse {
  /**
   * <p>The Source Network association Job.</p>
   */
  job?: Job;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
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

/**
 * @public
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 * @enum
 */
export const DataReplicationErrorString = {
  AGENT_NOT_SEEN: "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS: "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE: "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER: "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER: "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP: "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS: "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE: "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER: "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT: "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER: "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
} as const;

/**
 * @public
 */
export type DataReplicationErrorString = (typeof DataReplicationErrorString)[keyof typeof DataReplicationErrorString];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepName = {
  ATTACH_STAGING_DISKS: "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE: "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER: "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER: "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP: "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS: "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE: "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER: "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT: "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER: "START_DATA_TRANSFER",
  WAIT: "WAIT",
} as const;

/**
 * @public
 */
export type DataReplicationInitiationStepName =
  (typeof DataReplicationInitiationStepName)[keyof typeof DataReplicationInitiationStepName];

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DataReplicationInitiationStepStatus =
  (typeof DataReplicationInitiationStepStatus)[keyof typeof DataReplicationInitiationStepStatus];

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DataReplicationState = {
  BACKLOG: "BACKLOG",
  CONTINUOUS: "CONTINUOUS",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DISCONNECTED: "DISCONNECTED",
  INITIAL_SYNC: "INITIAL_SYNC",
  INITIATING: "INITIATING",
  PAUSED: "PAUSED",
  RESCAN: "RESCAN",
  STALLED: "STALLED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DataReplicationState = (typeof DataReplicationState)[keyof typeof DataReplicationState];

/**
 * @public
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
 * @public
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

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   */
  stagingAvailabilityZone?: string;
}

/**
 * @public
 * @enum
 */
export const LastLaunchResult = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LastLaunchResult = (typeof LastLaunchResult)[keyof typeof LastLaunchResult];

/**
 * @public
 * @enum
 */
export const LastLaunchType = {
  DRILL: "DRILL",
  RECOVERY: "RECOVERY",
} as const;

/**
 * @public
 */
export type LastLaunchType = (typeof LastLaunchType)[keyof typeof LastLaunchType];

/**
 * @public
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
 * @public
 * <p>An object containing information regarding the last launch of a Source Server.</p>
 */
export interface LifeCycleLastLaunch {
  /**
   * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
   */
  initiated?: LifeCycleLastLaunchInitiated;

  /**
   * <p>Status of Source Server's last launch.</p>
   */
  status?: LaunchStatus | string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ReplicationDirection = {
  FAILBACK: "FAILBACK",
  FAILOVER: "FAILOVER",
} as const;

/**
 * @public
 */
export type ReplicationDirection = (typeof ReplicationDirection)[keyof typeof ReplicationDirection];

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>Operating System.</p>
 */
export interface OS {
  /**
   * <p>The long name of the Operating System.</p>
   */
  fullString?: string;
}

/**
 * @public
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

  /**
   * <p>Are EC2 nitro instance types supported when recovering the Source Server.</p>
   */
  supportsNitroInstances?: boolean;
}

/**
 * @public
 * @enum
 */
export const ExtensionStatus = {
  EXTENDED: "EXTENDED",
  EXTENSION_ERROR: "EXTENSION_ERROR",
  NOT_EXTENDED: "NOT_EXTENDED",
} as const;

/**
 * @public
 */
export type ExtensionStatus = (typeof ExtensionStatus)[keyof typeof ExtensionStatus];

/**
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>ID of the Source Network which is protecting this Source Server's network.</p>
   */
  sourceNetworkID?: string;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerResponse {
  /**
   * <p>Created extended source server.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 * @enum
 */
export const LaunchDisposition = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type LaunchDisposition = (typeof LaunchDisposition)[keyof typeof LaunchDisposition];

/**
 * @public
 * <p>Configuration of a machine's license.</p>
 */
export interface Licensing {
  /**
   * <p>Whether to enable "Bring your own license" or not.</p>
   */
  osByol?: boolean;
}

/**
 * @public
 * @enum
 */
export const TargetInstanceTypeRightSizingMethod = {
  BASIC: "BASIC",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TargetInstanceTypeRightSizingMethod =
  (typeof TargetInstanceTypeRightSizingMethod)[keyof typeof TargetInstanceTypeRightSizingMethod];

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   */
  exportBucketArn?: string;
}

/**
 * @public
 * <p>Account level Launch Configuration Template.</p>
 */
export interface LaunchConfigurationTemplate {
  /**
   * <p>ID of the Launch Configuration Template.</p>
   */
  launchConfigurationTemplateID?: string;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   */
  arn?: string;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   */
  exportBucketArn?: string;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateResponse {
  /**
   * <p>Created Launch Configuration Template.</p>
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDataPlaneRouting = {
  PRIVATE_IP: "PRIVATE_IP",
  PUBLIC_IP: "PUBLIC_IP",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationDataPlaneRouting =
  (typeof ReplicationConfigurationDataPlaneRouting)[keyof typeof ReplicationConfigurationDataPlaneRouting];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDefaultLargeStagingDiskType = {
  AUTO: "AUTO",
  GP2: "GP2",
  GP3: "GP3",
  ST1: "ST1",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationDefaultLargeStagingDiskType =
  (typeof ReplicationConfigurationDefaultLargeStagingDiskType)[keyof typeof ReplicationConfigurationDefaultLargeStagingDiskType];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationEbsEncryption = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationEbsEncryption =
  (typeof ReplicationConfigurationEbsEncryption)[keyof typeof ReplicationConfigurationEbsEncryption];

/**
 * @public
 * @enum
 */
export const PITPolicyRuleUnits = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
} as const;

/**
 * @public
 */
export type PITPolicyRuleUnits = (typeof PITPolicyRuleUnits)[keyof typeof PITPolicyRuleUnits];

/**
 * @public
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

/**
 * @public
 */
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

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
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

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface CreateSourceNetworkRequest {
  /**
   * <p>Which VPC ID to protect.</p>
   */
  vpcID: string | undefined;

  /**
   * <p>Account containing the VPC to protect.</p>
   */
  originAccountID: string | undefined;

  /**
   * <p>Region containing the VPC to protect.</p>
   */
  originRegion: string | undefined;

  /**
   * <p>A set of tags to be associated with the Source Network resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSourceNetworkResponse {
  /**
   * <p>ID of the created Source Network.</p>
   */
  sourceNetworkID?: string;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The ID of the Job to be deleted.</p>
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
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * <p>The ID of the Launch Configuration Template to be deleted.</p>
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
   * <p>The ID of the Recovery Instance to be deleted.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>The ID of the Replication Configuration Template to be deleted.</p>
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
   * <p>ID of the Source Network to delete.</p>
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
   * <p>The ID of the Source Server to be deleted.</p>
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

/**
 * @public
 * @enum
 */
export const JobLogEvent = {
  CLEANUP_END: "CLEANUP_END",
  CLEANUP_FAIL: "CLEANUP_FAIL",
  CLEANUP_START: "CLEANUP_START",
  CONVERSION_END: "CONVERSION_END",
  CONVERSION_FAIL: "CONVERSION_FAIL",
  CONVERSION_START: "CONVERSION_START",
  DEPLOY_NETWORK_CONFIGURATION_END: "DEPLOY_NETWORK_CONFIGURATION_END",
  DEPLOY_NETWORK_CONFIGURATION_FAILED: "DEPLOY_NETWORK_CONFIGURATION_FAILED",
  DEPLOY_NETWORK_CONFIGURATION_START: "DEPLOY_NETWORK_CONFIGURATION_START",
  JOB_CANCEL: "JOB_CANCEL",
  JOB_END: "JOB_END",
  JOB_START: "JOB_START",
  LAUNCH_FAILED: "LAUNCH_FAILED",
  LAUNCH_START: "LAUNCH_START",
  NETWORK_RECOVERY_FAIL: "NETWORK_RECOVERY_FAIL",
  SERVER_SKIPPED: "SERVER_SKIPPED",
  SNAPSHOT_END: "SNAPSHOT_END",
  SNAPSHOT_FAIL: "SNAPSHOT_FAIL",
  SNAPSHOT_START: "SNAPSHOT_START",
  UPDATE_LAUNCH_TEMPLATE_END: "UPDATE_LAUNCH_TEMPLATE_END",
  UPDATE_LAUNCH_TEMPLATE_FAILED: "UPDATE_LAUNCH_TEMPLATE_FAILED",
  UPDATE_LAUNCH_TEMPLATE_START: "UPDATE_LAUNCH_TEMPLATE_START",
  UPDATE_NETWORK_CONFIGURATION_END: "UPDATE_NETWORK_CONFIGURATION_END",
  UPDATE_NETWORK_CONFIGURATION_FAILED: "UPDATE_NETWORK_CONFIGURATION_FAILED",
  UPDATE_NETWORK_CONFIGURATION_START: "UPDATE_NETWORK_CONFIGURATION_START",
  USING_PREVIOUS_SNAPSHOT: "USING_PREVIOUS_SNAPSHOT",
  USING_PREVIOUS_SNAPSHOT_FAILED: "USING_PREVIOUS_SNAPSHOT_FAILED",
} as const;

/**
 * @public
 */
export type JobLogEvent = (typeof JobLogEvent)[keyof typeof JobLogEvent];

/**
 * @public
 * <p>Properties of Source Network related to a job event.</p>
 */
export interface SourceNetworkData {
  /**
   * <p>Source Network ID.</p>
   */
  sourceNetworkID?: string;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   */
  sourceVpc?: string;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   */
  targetVpc?: string;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   */
  stackName?: string;
}

/**
 * @public
 * <p>Properties of resource related to a job event.</p>
 */
export type EventResourceData = EventResourceData.SourceNetworkDataMember | EventResourceData.$UnknownMember;

/**
 * @public
 */
export namespace EventResourceData {
  /**
   * <p>Source Network properties.</p>
   */
  export interface SourceNetworkDataMember {
    sourceNetworkData: SourceNetworkData;
    $unknown?: never;
  }

  export interface $UnknownMember {
    sourceNetworkData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sourceNetworkData: (value: SourceNetworkData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EventResourceData, visitor: Visitor<T>): T => {
    if (value.sourceNetworkData !== undefined) return visitor.sourceNetworkData(value.sourceNetworkData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
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

  /**
   * <p>Properties of resource related to a job event.</p>
   */
  eventResourceData?: EventResourceData;
}

/**
 * @public
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

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 * @enum
 */
export const FailbackReplicationError = {
  AGENT_NOT_SEEN: "AGENT_NOT_SEEN",
  FAILBACK_CLIENT_NOT_SEEN: "FAILBACK_CLIENT_NOT_SEEN",
  FAILED_GETTING_REPLICATION_STATE: "FAILED_GETTING_REPLICATION_STATE",
  FAILED_TO_ATTACH_STAGING_DISKS: "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE: "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER: "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE: "FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER: "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP: "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS: "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE: "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT:
    "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION:
    "FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION: "FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  FAILED_TO_LAUNCH_REPLICATION_SERVER: "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE: "FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT: "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER: "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
} as const;

/**
 * @public
 */
export type FailbackReplicationError = (typeof FailbackReplicationError)[keyof typeof FailbackReplicationError];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationInitiationStepName = {
  ATTACH_STAGING_DISKS: "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE: "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER: "BOOT_REPLICATION_SERVER",
  COMPLETE_VOLUME_MAPPING: "COMPLETE_VOLUME_MAPPING",
  CONFIGURE_REPLICATION_SOFTWARE: "CONFIGURE_REPLICATION_SOFTWARE",
  CONNECT_AGENT_TO_REPLICATION_SERVER: "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP: "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS: "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE: "DOWNLOAD_REPLICATION_SOFTWARE",
  DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT: "DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION: "ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION: "ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  LAUNCH_REPLICATION_SERVER: "LAUNCH_REPLICATION_SERVER",
  LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE: "LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE",
  PAIR_AGENT_WITH_REPLICATION_SOFTWARE: "PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  PAIR_REPLICATION_SERVER_WITH_AGENT: "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER: "START_DATA_TRANSFER",
  WAIT: "WAIT",
} as const;

/**
 * @public
 */
export type RecoveryInstanceDataReplicationInitiationStepName =
  (typeof RecoveryInstanceDataReplicationInitiationStepName)[keyof typeof RecoveryInstanceDataReplicationInitiationStepName];

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationInitiationStepStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type RecoveryInstanceDataReplicationInitiationStepStatus =
  (typeof RecoveryInstanceDataReplicationInitiationStepStatus)[keyof typeof RecoveryInstanceDataReplicationInitiationStepStatus];

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationState = {
  BACKLOG: "BACKLOG",
  CONTINUOUS: "CONTINUOUS",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DISCONNECTED: "DISCONNECTED",
  INITIAL_SYNC: "INITIAL_SYNC",
  INITIATING: "INITIATING",
  NOT_STARTED: "NOT_STARTED",
  PAUSED: "PAUSED",
  REPLICATION_STATE_NOT_AVAILABLE: "REPLICATION_STATE_NOT_AVAILABLE",
  RESCAN: "RESCAN",
  STALLED: "STALLED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type RecoveryInstanceDataReplicationState =
  (typeof RecoveryInstanceDataReplicationState)[keyof typeof RecoveryInstanceDataReplicationState];

/**
 * @public
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
 * @public
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

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   */
  stagingAvailabilityZone?: string;
}

/**
 * @public
 * @enum
 */
export const EC2InstanceState = {
  NOT_FOUND: "NOT_FOUND",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING-DOWN",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type EC2InstanceState = (typeof EC2InstanceState)[keyof typeof EC2InstanceState];

/**
 * @public
 * @enum
 */
export const FailbackLaunchType = {
  DRILL: "DRILL",
  RECOVERY: "RECOVERY",
} as const;

/**
 * @public
 */
export type FailbackLaunchType = (typeof FailbackLaunchType)[keyof typeof FailbackLaunchType];

/**
 * @public
 * @enum
 */
export const FailbackState = {
  FAILBACK_COMPLETED: "FAILBACK_COMPLETED",
  FAILBACK_ERROR: "FAILBACK_ERROR",
  FAILBACK_IN_PROGRESS: "FAILBACK_IN_PROGRESS",
  FAILBACK_LAUNCH_STATE_NOT_AVAILABLE: "FAILBACK_LAUNCH_STATE_NOT_AVAILABLE",
  FAILBACK_NOT_READY_FOR_LAUNCH: "FAILBACK_NOT_READY_FOR_LAUNCH",
  FAILBACK_NOT_STARTED: "FAILBACK_NOT_STARTED",
  FAILBACK_READY_FOR_LAUNCH: "FAILBACK_READY_FOR_LAUNCH",
} as const;

/**
 * @public
 */
export type FailbackState = (typeof FailbackState)[keyof typeof FailbackState];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const OriginEnvironment = {
  AWS: "AWS",
  ON_PREMISES: "ON_PREMISES",
} as const;

/**
 * @public
 */
export type OriginEnvironment = (typeof OriginEnvironment)[keyof typeof OriginEnvironment];

/**
 * @public
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
 * @public
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
 * @public
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
   * <p>Environment (On Premises / AWS) of the instance that the recovery instance originated from.</p>
   */
  originEnvironment?: OriginEnvironment | string;

  /**
   * <p>AWS availability zone associated with the recovery instance.</p>
   */
  originAvailabilityZone?: string;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 * @enum
 */
export const RecoverySnapshotsOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type RecoverySnapshotsOrder = (typeof RecoverySnapshotsOrder)[keyof typeof RecoverySnapshotsOrder];

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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
 * @public
 * <p>A set of filters by which to return Source Networks.</p>
 */
export interface DescribeSourceNetworksRequestFilters {
  /**
   * <p>An array of Source Network IDs that should be returned. An empty array means all Source Networks.</p>
   */
  sourceNetworkIDs?: string[];

  /**
   * <p>Filter Source Networks by account ID containing the protected VPCs.</p>
   */
  originAccountID?: string;

  /**
   * <p>Filter Source Networks by the region containing the protected VPCs.</p>
   */
  originRegion?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksRequest {
  /**
   * <p>A set of filters by which to return Source Networks.</p>
   */
  filters?: DescribeSourceNetworksRequestFilters;

  /**
   * <p>Maximum number of Source Networks to retrieve.</p>
   */
  maxResults?: number;

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RecoveryResult = {
  ASSOCIATE_FAIL: "ASSOCIATE_FAIL",
  ASSOCIATE_SUCCESS: "ASSOCIATE_SUCCESS",
  FAIL: "FAIL",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type RecoveryResult = (typeof RecoveryResult)[keyof typeof RecoveryResult];

/**
 * @public
 * <p>An object representing the Source Network recovery Lifecycle.</p>
 */
export interface RecoveryLifeCycle {
  /**
   * <p>The date and time the last Source Network recovery was initiated.</p>
   */
  apiCallDateTime?: Date;

  /**
   * <p>The ID of the Job that was used to last recover the Source Network.</p>
   */
  jobID?: string;

  /**
   * <p>The status of the last recovery status of this Source Network.</p>
   */
  lastRecoveryResult?: RecoveryResult | string;
}

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  PROTECTED: "PROTECTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * <p>The ARN of the Source Network.</p>
 */
export interface SourceNetwork {
  /**
   * <p>Source Network ID.</p>
   */
  sourceNetworkID?: string;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   */
  sourceVpcID?: string;

  /**
   * <p>The ARN of the Source Network.</p>
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the Source Network.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Status of Source Network Replication. Possible values:
   *             (a) STOPPED - Source Network is not replicating.
   *             (b) IN_PROGRESS - Source Network is being replicated.
   *             (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes.
   *             (d) ERROR - Source Network replication has failed</p>
   */
  replicationStatus?: ReplicationStatus | string;

  /**
   * <p>Error details in case Source Network replication status is ERROR.</p>
   */
  replicationStatusDetails?: string;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   */
  cfnStackName?: string;

  /**
   * <p>Region containing the VPC protected by the Source Network.</p>
   */
  sourceRegion?: string;

  /**
   * <p>Account ID containing the VPC protected by the Source Network.</p>
   */
  sourceAccountID?: string;

  /**
   * <p>An object containing information regarding the last recovery of the Source Network.</p>
   */
  lastRecovery?: RecoveryLifeCycle;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   */
  launchedVpcID?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksResponse {
  /**
   * <p>An array of Source Networks.</p>
   */
  items?: SourceNetwork[];

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface DisconnectRecoveryInstanceRequest {
  /**
   * <p>The ID of the Recovery Instance to disconnect.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DisconnectSourceServerRequest {
  /**
   * <p>The ID of the Source Server to disconnect.</p>
   */
  sourceServerID: string | undefined;
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
   * <p>Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   */
  exportBucketArn?: string;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateResponse {
  /**
   * <p>Updated Launch Configuration Template.</p>
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}

/**
 * @public
 */
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
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags should be returned.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the requested resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationRequest {
  /**
   * <p>The ID of the Recovery Instance whose failback replication configuration should be returned.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface ReverseReplicationRequest {
  /**
   * <p>The ID of the Recovery Instance that we want to reverse the replication for.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface ReverseReplicationResponse {
  /**
   * <p>ARN of created SourceServer.</p>
   */
  reversedDirectionSourceServerArn?: string;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface StartFailbackLaunchResponse {
  /**
   * <p>The failback launch Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopFailbackRequest {
  /**
   * <p>The ID of the Recovery Instance we want to stop failback for.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesRequest {
  /**
   * <p>The IDs of the Recovery Instances that should be terminated.</p>
   */
  recoveryInstanceIDs: string[] | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesResponse {
  /**
   * <p>The Job for terminating the Recovery Instances.</p>
   */
  job?: Job;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateRequest {
  /**
   * <p>The Source Network ID to export its CloudFormation template to an S3 bucket.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateResponse {
  /**
   * <p>S3 bucket URL where the Source Network CloudFormation template was exported to.</p>
   */
  s3DestinationUrl?: string;
}

/**
 * @public
 * <p>An object representing the Source Network to recover.</p>
 */
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
  /**
   * <p>The ID of the Source Network you want to recover.</p>
   */
  sourceNetworkID: string | undefined;

  /**
   * <p>CloudFormation stack name to be used for recovering the network.</p>
   */
  cfnStackName?: string;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryRequest {
  /**
   * <p>The Source Networks that we want to start a Recovery Job for.</p>
   */
  sourceNetworks: StartSourceNetworkRecoveryRequestNetworkEntry[] | undefined;

  /**
   * <p>Don't update existing CloudFormation Stack, recover the network using a new stack.</p>
   */
  deployAsNew?: boolean;

  /**
   * <p>The tags to be associated with the Source Network recovery Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryResponse {
  /**
   * <p>The Source Network recovery Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationRequest {
  /**
   * <p>ID of the Source Network to replicate.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationResponse {
  /**
   * <p>Source Network which was requested for replication.</p>
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationRequest {
  /**
   * <p>ID of the Source Network to stop replication.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationResponse {
  /**
   * <p>Source Network which was requested to stop replication.</p>
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * <p>The ID of the Source Serve for this Replication Configuration.r</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationReplicatedDiskStagingDiskType = {
  AUTO: "AUTO",
  GP2: "GP2",
  GP3: "GP3",
  IO1: "IO1",
  SC1: "SC1",
  ST1: "ST1",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationReplicatedDiskStagingDiskType =
  (typeof ReplicationConfigurationReplicatedDiskStagingDiskType)[keyof typeof ReplicationConfigurationReplicatedDiskStagingDiskType];

/**
 * @public
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
   * <p>The Staging Disk EBS volume type to be used during replication when <code>stagingDiskType</code> is set to Auto. This is a read-only field.</p>
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;
}

/**
 * @public
 */
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

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * <p>The ID of the Source Server whose data replication should be retried.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface StartRecoveryResponse {
  /**
   * <p>The Recovery Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * <p>The ID of the Source Server to start replication for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * <p>The ID of the Source Server to stop replication for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
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

/**
 * @public
 */
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
export const AssociateSourceNetworkStackRequestFilterSensitiveLog = (obj: AssociateSourceNetworkStackRequest): any => ({
  ...obj,
  ...(obj.cfnStackName && { cfnStackName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.participatingResources && { participatingResources: obj.participatingResources.map((item) => item) }),
});

/**
 * @internal
 */
export const AssociateSourceNetworkStackResponseFilterSensitiveLog = (
  obj: AssociateSourceNetworkStackResponse
): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
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
export const CreateLaunchConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateLaunchConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchConfigurationTemplateFilterSensitiveLog = (obj: LaunchConfigurationTemplate): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLaunchConfigurationTemplateResponseFilterSensitiveLog = (
  obj: CreateLaunchConfigurationTemplateResponse
): any => ({
  ...obj,
  ...(obj.launchConfigurationTemplate && {
    launchConfigurationTemplate: LaunchConfigurationTemplateFilterSensitiveLog(obj.launchConfigurationTemplate),
  }),
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
export const CreateSourceNetworkRequestFilterSensitiveLog = (obj: CreateSourceNetworkRequest): any => ({
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
export const DescribeLaunchConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeLaunchConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => LaunchConfigurationTemplateFilterSensitiveLog(item)) }),
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
export const DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SourceNetworkFilterSensitiveLog = (obj: SourceNetwork): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.replicationStatusDetails && { replicationStatusDetails: SENSITIVE_STRING }),
  ...(obj.cfnStackName && { cfnStackName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeSourceNetworksResponseFilterSensitiveLog = (obj: DescribeSourceNetworksResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SourceNetworkFilterSensitiveLog(item)) }),
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
export const UpdateLaunchConfigurationTemplateResponseFilterSensitiveLog = (
  obj: UpdateLaunchConfigurationTemplateResponse
): any => ({
  ...obj,
  ...(obj.launchConfigurationTemplate && {
    launchConfigurationTemplate: LaunchConfigurationTemplateFilterSensitiveLog(obj.launchConfigurationTemplate),
  }),
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const TerminateRecoveryInstancesResponseFilterSensitiveLog = (obj: TerminateRecoveryInstancesResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
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
export const StartSourceNetworkRecoveryRequestNetworkEntryFilterSensitiveLog = (
  obj: StartSourceNetworkRecoveryRequestNetworkEntry
): any => ({
  ...obj,
  ...(obj.cfnStackName && { cfnStackName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSourceNetworkRecoveryRequestFilterSensitiveLog = (obj: StartSourceNetworkRecoveryRequest): any => ({
  ...obj,
  ...(obj.sourceNetworks && {
    sourceNetworks: obj.sourceNetworks.map((item) =>
      StartSourceNetworkRecoveryRequestNetworkEntryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSourceNetworkRecoveryResponseFilterSensitiveLog = (obj: StartSourceNetworkRecoveryResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const StartSourceNetworkReplicationResponseFilterSensitiveLog = (
  obj: StartSourceNetworkReplicationResponse
): any => ({
  ...obj,
  ...(obj.sourceNetwork && { sourceNetwork: SourceNetworkFilterSensitiveLog(obj.sourceNetwork) }),
});

/**
 * @internal
 */
export const StopSourceNetworkReplicationResponseFilterSensitiveLog = (
  obj: StopSourceNetworkReplicationResponse
): any => ({
  ...obj,
  ...(obj.sourceNetwork && { sourceNetwork: SourceNetworkFilterSensitiveLog(obj.sourceNetwork) }),
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
export const StartReplicationResponseFilterSensitiveLog = (obj: StartReplicationResponse): any => ({
  ...obj,
  ...(obj.sourceServer && { sourceServer: SourceServerFilterSensitiveLog(obj.sourceServer) }),
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

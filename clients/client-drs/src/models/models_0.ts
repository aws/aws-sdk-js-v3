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
   * @public
   * <p>Account ID of AWS account.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackRequest {
  /**
   * @public
   * <p>The Source Network ID to associate with CloudFormation template.</p>
   */
  sourceNetworkID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Source Network ID.</p>
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
   * @public
   * <p>The ID of a participating resource.</p>
   */
  participatingResourceID?: ParticipatingResourceID;

  /**
   * @public
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
   * @public
   * <p>The Source Server ID of a participating server.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The Recovery Instance ID of a participating server.</p>
   */
  recoveryInstanceID?: string;

  /**
   * @public
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
   * @public
   * <p>The ID of the Job.</p>
   */
  jobID: string | undefined;

  /**
   * @public
   * <p>The ARN of a Job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type of the Job.</p>
   */
  type?: JobType | string;

  /**
   * @public
   * <p>A string representing who initiated the Job.</p>
   */
  initiatedBy?: InitiatedBy | string;

  /**
   * @public
   * <p>The date and time of when the Job was created.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>The date and time of when the Job ended.</p>
   */
  endDateTime?: string;

  /**
   * @public
   * <p>The status of the Job.</p>
   */
  status?: JobStatus | string;

  /**
   * @public
   * <p>A list of servers that the Job is acting upon.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * @public
   * <p>A list of tags associated with the Job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of resources that the Job is acting upon.</p>
   */
  participatingResources?: ParticipatingResource[];
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackResponse {
  /**
   * @public
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
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * @public
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
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>Service code.</p>
   */
  serviceCode?: string;

  /**
   * @public
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
   * @public
   * <p>Service code.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Quota code.</p>
   */
  quotaCode?: string;

  /**
   * @public
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
   * @public
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * @public
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
   * @public
   * <p>Validation exception reason.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * @public
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
   * @public
   * <p>A mapping between the volumes being converted and the converted snapshot ids</p>
   */
  volumeToConversionMap?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The root volume name of a conversion job</p>
   */
  rootVolumeName?: string;

  /**
   * @public
   * <p>Whether the volume being converted uses UEFI or not</p>
   */
  forceUefi?: boolean;

  /**
   * @public
   * <p>The timestamp of when the snapshot being converted was taken</p>
   */
  dataTimestamp?: string;

  /**
   * @public
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
   * @public
   * <p>The number of CPU cores.</p>
   */
  cores?: number;

  /**
   * @public
   * <p>The model name of the CPU.</p>
   */
  modelName?: string;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerRequest {
  /**
   * @public
   * <p>This defines the ARN of the source server in staging Account based on which you want to create an extended source server.</p>
   */
  sourceServerArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString | string;

  /**
   * @public
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
   * @public
   * <p>The name of the step.</p>
   */
  name?: DataReplicationInitiationStepName | string;

  /**
   * @public
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
   * @public
   * <p>The date and time of the current attempt to initiate data replication.</p>
   */
  startDateTime?: string;

  /**
   * @public
   * <p>The date and time of the next attempt to initiate data replication.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>The total amount of data to be replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * @public
   * <p>The amount of data replicated so far in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * @public
   * <p>The amount of data to be rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * @public
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
   * @public
   * <p>Data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * @public
   * <p>An estimate of when the data replication will be completed.</p>
   */
  etaDateTime?: string;

  /**
   * @public
   * <p>The disks that should be replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * @public
   * <p>The state of the data replication.</p>
   */
  dataReplicationState?: DataReplicationState | string;

  /**
   * @public
   * <p>Information about whether the data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * @public
   * <p>Error in data replication.</p>
   */
  dataReplicationError?: DataReplicationError;

  /**
   * @public
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
   * @public
   * <p>The date and time the last Source Server launch was initiated.</p>
   */
  apiCallDateTime?: string;

  /**
   * @public
   * <p>The ID of the Job that was used to last launch the Source Server.</p>
   */
  jobID?: string;

  /**
   * @public
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
   * @public
   * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
   */
  initiated?: LifeCycleLastLaunchInitiated;

  /**
   * @public
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
   * @public
   * <p>The date and time of when the Source Server was added to the service.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * @public
   * <p>The date and time of the first byte that was replicated from the Source Server.</p>
   */
  firstByteDateTime?: string;

  /**
   * @public
   * <p>The amount of time that the Source Server has been replicating for.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * @public
   * <p>The date and time this Source Server was last seen by the service.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>AWS Account ID for an EC2-originated Source Server.</p>
   */
  originAccountID?: string;

  /**
   * @public
   * <p>AWS Region for an EC2-originated Source Server.</p>
   */
  originRegion?: string;

  /**
   * @public
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
   * @public
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * @public
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
   * @public
   * <p>Fully Qualified Domain Name identification hint.</p>
   */
  fqdn?: string;

  /**
   * @public
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * @public
   * <p>vCenter VM path identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * @public
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
   * @public
   * <p>The MAC address of the network interface.</p>
   */
  macAddress?: string;

  /**
   * @public
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The date and time the Source Properties were last updated on.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * @public
   * <p>The recommended EC2 instance type that will be used when recovering the Source Server.</p>
   */
  recommendedInstanceType?: string;

  /**
   * @public
   * <p>Hints used to uniquely identify a machine.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * @public
   * <p>An array of network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>An array of disks.</p>
   */
  disks?: Disk[];

  /**
   * @public
   * <p>An array of CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * @public
   * <p>The amount of RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * @public
   * <p>Operating system.</p>
   */
  os?: OS;

  /**
   * @public
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
   * @public
   * <p>Status of Source server extension. Possible values:
   *             (a) NOT_EXTENDED - This is a source server that is replicating in the current account.
   *             (b) EXTENDED - Source server is extended from a staging source server. In this case, the value of stagingSourceServerArn is pointing to the Arn of the source server in the staging account.
   *             (c) EXTENSION_ERROR - Some issue occurred when accessing staging source server. In this case, errorMessage field will contain an error message that explains what happened.</p>
   */
  status?: ExtensionStatus | string;

  /**
   * @public
   * <p>Account ID of the account to which source server belongs. If this source server is extended - shows Account ID of staging source server.</p>
   */
  stagingAccountID?: string;

  /**
   * @public
   * <p>Arn of the staging source server if this source server is extended</p>
   */
  stagingSourceServerArn?: string;

  /**
   * @public
   * <p>Shows an error message that occurred when DRS tried to access the staging source server. In this case StagingArea$status will have value EXTENSION_ERROR</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * @public
   * <p>The ID of the Source Server.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The ARN of the Source Server.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The tags associated with the Source Server.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ID of the Recovery Instance associated with this Source Server.</p>
   */
  recoveryInstanceId?: string;

  /**
   * @public
   * <p>The status of the last recovery launch of this Source Server.</p>
   */
  lastLaunchResult?: LastLaunchResult | string;

  /**
   * @public
   * <p>The Data Replication Info of the Source Server.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * @public
   * <p>The lifecycle information of this Source Server.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * @public
   * <p>The source properties of the Source Server.</p>
   */
  sourceProperties?: SourceProperties;

  /**
   * @public
   * <p>The staging area of the source server.</p>
   */
  stagingArea?: StagingArea;

  /**
   * @public
   * <p>Source cloud properties of the Source Server.</p>
   */
  sourceCloudProperties?: SourceCloudProperties;

  /**
   * @public
   * <p>Replication direction of the Source Server.</p>
   */
  replicationDirection?: ReplicationDirection | string;

  /**
   * @public
   * <p>For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction.</p>
   */
  reversedDirectionSourceServerArn?: string;

  /**
   * @public
   * <p>ID of the Source Network which is protecting this Source Server's network.</p>
   */
  sourceNetworkID?: string;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerResponse {
  /**
   * @public
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
   * @public
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
  IN_AWS: "IN_AWS",
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
   * @public
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * @public
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
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
   * @public
   * <p>ID of the Launch Configuration Template.</p>
   */
  launchConfigurationTemplateID?: string;

  /**
   * @public
   * <p>ARN of the Launch Configuration Template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Tags of the Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * @public
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>S3 bucket ARN to export Source Network templates.</p>
   */
  exportBucketArn?: string;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateResponse {
  /**
   * @public
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
   * @public
   * <p>The ID of the rule.</p>
   */
  ruleID?: number;

  /**
   * @public
   * <p>The units used to measure the interval and retentionDuration.</p>
   */
  units: PITPolicyRuleUnits | string | undefined;

  /**
   * @public
   * <p>How often, in the chosen units, a snapshot should be taken.</p>
   */
  interval: number | undefined;

  /**
   * @public
   * <p>The duration to retain a snapshot for, in the chosen units.</p>
   */
  retentionDuration: number | undefined;

  /**
   * @public
   * <p>Whether this rule is enabled or not.</p>
   */
  enabled?: boolean;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * @public
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * @public
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * @public
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * @public
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * @public
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | string | undefined;

  /**
   * @public
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | string | undefined;

  /**
   * @public
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * @public
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | string | undefined;

  /**
   * @public
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * @public
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * @public
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy: PITPolicyRule[] | undefined;

  /**
   * @public
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * @public
   * <p>The Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>The Replication Configuration Template ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * @public
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * @public
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * @public
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * @public
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface CreateSourceNetworkRequest {
  /**
   * @public
   * <p>Which VPC ID to protect.</p>
   */
  vpcID: string | undefined;

  /**
   * @public
   * <p>Account containing the VPC to protect.</p>
   */
  originAccountID: string | undefined;

  /**
   * @public
   * <p>Region containing the VPC to protect.</p>
   */
  originRegion: string | undefined;

  /**
   * @public
   * <p>A set of tags to be associated with the Source Network resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSourceNetworkResponse {
  /**
   * @public
   * <p>ID of the created Source Network.</p>
   */
  sourceNetworkID?: string;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>The ID of the Recovery Instance to be deleted.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>The ID of the Job for which Job log items will be retrieved.</p>
   */
  jobID: string | undefined;

  /**
   * @public
   * <p>Maximum number of Job log items to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Source Network ID.</p>
   */
  sourceNetworkID?: string;

  /**
   * @public
   * <p>VPC ID protected by the Source Network.</p>
   */
  sourceVpc?: string;

  /**
   * @public
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   */
  targetVpc?: string;

  /**
   * @public
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
   * @public
   * <p>Source Network properties.</p>
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
   * @public
   * <p>The ID of a Source Server.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The ID of a conversion server.</p>
   */
  conversionServerID?: string;

  /**
   * @public
   * <p>The ID of a Recovery Instance.</p>
   */
  targetInstanceID?: string;

  /**
   * @public
   * <p>A string representing a job error.</p>
   */
  rawError?: string;

  /**
   * @public
   * <p>Properties of a conversion job</p>
   */
  conversionProperties?: ConversionProperties;

  /**
   * @public
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
   * @public
   * <p>The date and time the log was taken.</p>
   */
  logDateTime?: string;

  /**
   * @public
   * <p>The event represents the type of a log.</p>
   */
  event?: JobLogEvent | string;

  /**
   * @public
   * <p>Metadata associated with a Job log.</p>
   */
  eventData?: JobLogEventData;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * @public
   * <p>An array of Job log items.</p>
   */
  items?: JobLog[];

  /**
   * @public
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
   * @public
   * <p>An array of Job IDs that should be returned. An empty array means all jobs.</p>
   */
  jobIDs?: string[];

  /**
   * @public
   * <p>The start date in a date range query.</p>
   */
  fromDate?: string;

  /**
   * @public
   * <p>The end date in a date range query.</p>
   */
  toDate?: string;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * @public
   * <p>A set of filters by which to return Jobs.</p>
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * @public
   * <p>Maximum number of Jobs to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token of the next Job to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * @public
   * <p>An array of Jobs.</p>
   */
  items?: Job[];

  /**
   * @public
   * <p>The token of the next Job to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * @public
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * @public
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * @public
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * @public
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
   * @public
   * <p>An array of Recovery Instance IDs that should be returned. An empty array means all Recovery Instances.</p>
   */
  recoveryInstanceIDs?: string[];

  /**
   * @public
   * <p>An array of Source Server IDs for which associated Recovery Instances should be returned.</p>
   */
  sourceServerIDs?: string[];
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesRequest {
  /**
   * @public
   * <p>A set of filters by which to return Recovery Instances.</p>
   */
  filters?: DescribeRecoveryInstancesRequestFilters;

  /**
   * @public
   * <p>Maximum number of Recovery Instances to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Error in data replication.</p>
   */
  error?: FailbackReplicationError | string;

  /**
   * @public
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
   * @public
   * <p>The name of the step.</p>
   */
  name?: RecoveryInstanceDataReplicationInitiationStepName | string;

  /**
   * @public
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
   * @public
   * <p>The date and time of the current attempt to initiate data replication.</p>
   */
  startDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>The total amount of data to be replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * @public
   * <p>The amount of data replicated so far in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * @public
   * <p>The amount of data to be rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * @public
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
   * @public
   * <p>Data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * @public
   * <p>An estimate of when the data replication will be completed.</p>
   */
  etaDateTime?: string;

  /**
   * @public
   * <p>The disks that should be replicated.</p>
   */
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[];

  /**
   * @public
   * <p>The state of the data replication.</p>
   */
  dataReplicationState?: RecoveryInstanceDataReplicationState | string;

  /**
   * @public
   * <p>Information about whether the data replication has been initiated.</p>
   */
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;

  /**
   * @public
   * <p>Information about Data Replication</p>
   */
  dataReplicationError?: RecoveryInstanceDataReplicationError;

  /**
   * @public
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
   * @public
   * <p>The ID of the failback client that this Recovery Instance is associated with.</p>
   */
  failbackClientID?: string;

  /**
   * @public
   * <p>The Job ID of the last failback log for this Recovery Instance.</p>
   */
  failbackJobID?: string;

  /**
   * @public
   * <p>The date and time that the failback initiation started.</p>
   */
  failbackInitiationTime?: string;

  /**
   * @public
   * <p>The state of the failback process that this Recovery Instance is in.</p>
   */
  state?: FailbackState | string;

  /**
   * @public
   * <p>The date and time the agent on the Recovery Instance was last seen by the service.</p>
   */
  agentLastSeenByServiceDateTime?: string;

  /**
   * @public
   * <p>The date and time that the failback client was last seen by the service.</p>
   */
  failbackClientLastSeenByServiceDateTime?: string;

  /**
   * @public
   * <p>Whether we are failing back to the original Source Server for this Recovery Instance.</p>
   */
  failbackToOriginalServer?: boolean;

  /**
   * @public
   * <p>The date and time of the first byte that was replicated from the Recovery Instance.</p>
   */
  firstByteDateTime?: string;

  /**
   * @public
   * <p>The amount of time that the Recovery Instance has been replicating for.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * @public
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
   * @public
   * <p>The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.</p>
   */
  internalDeviceName?: string;

  /**
   * @public
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;

  /**
   * @public
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
   * @public
   * <p>The date and time the Recovery Instance properties were last updated on.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * @public
   * <p>Hints used to uniquely identify a machine.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * @public
   * <p>An array of network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>An array of disks.</p>
   */
  disks?: RecoveryInstanceDisk[];

  /**
   * @public
   * <p>An array of CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * @public
   * <p>The amount of RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * @public
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
   * @public
   * <p>The EC2 instance ID of the Recovery Instance.</p>
   */
  ec2InstanceID?: string;

  /**
   * @public
   * <p>The state of the EC2 instance for this Recovery Instance.</p>
   */
  ec2InstanceState?: EC2InstanceState | string;

  /**
   * @public
   * <p>The ID of the Job that created the Recovery Instance.</p>
   */
  jobID?: string;

  /**
   * @public
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID?: string;

  /**
   * @public
   * <p>The Source Server ID that this Recovery Instance is associated with.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The ARN of the Recovery Instance.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>An array of tags that are associated with the Recovery Instance.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>An object representing failback related information of the Recovery Instance.</p>
   */
  failback?: RecoveryInstanceFailback;

  /**
   * @public
   * <p>The Data Replication Info of the Recovery Instance.</p>
   */
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;

  /**
   * @public
   * <p>Properties of the Recovery Instance machine.</p>
   */
  recoveryInstanceProperties?: RecoveryInstanceProperties;

  /**
   * @public
   * <p>The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.</p>
   */
  pointInTimeSnapshotDateTime?: string;

  /**
   * @public
   * <p>Whether this Recovery Instance was created for a drill or for an actual Recovery event.</p>
   */
  isDrill?: boolean;

  /**
   * @public
   * <p>Environment (On Premises / AWS) of the instance that the recovery instance originated from.</p>
   */
  originEnvironment?: OriginEnvironment | string;

  /**
   * @public
   * <p>AWS availability zone associated with the recovery instance.</p>
   */
  originAvailabilityZone?: string;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesResponse {
  /**
   * @public
   * <p>The token of the next Recovery Instance to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The start date in a date range query.</p>
   */
  fromDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>Filter Recovery Snapshots by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>A set of filters by which to return Recovery Snapshots.</p>
   */
  filters?: DescribeRecoverySnapshotsRequestFilters;

  /**
   * @public
   * <p>The sorted ordering by which to return Recovery Snapshots.</p>
   */
  order?: RecoverySnapshotsOrder | string;

  /**
   * @public
   * <p>Maximum number of Recovery Snapshots to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>The ID of the Recovery Snapshot.</p>
   */
  snapshotID: string | undefined;

  /**
   * @public
   * <p>The ID of the Source Server that the snapshot was taken for.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>The timestamp of when we expect the snapshot to be taken.</p>
   */
  expectedTimestamp: string | undefined;

  /**
   * @public
   * <p>The actual timestamp that the snapshot was taken.</p>
   */
  timestamp?: string;

  /**
   * @public
   * <p>A list of EBS snapshots.</p>
   */
  ebsSnapshots?: string[];
}

/**
 * @public
 */
export interface DescribeRecoverySnapshotsResponse {
  /**
   * @public
   * <p>An array of Recovery Snapshots.</p>
   */
  items?: RecoverySnapshot[];

  /**
   * @public
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * @public
   * <p>The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.</p>
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * @public
   * <p>Maximum number of Replication Configuration Templates to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * @public
   * <p>An array of Replication Configuration Templates.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * @public
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
   * @public
   * <p>An array of Source Network IDs that should be returned. An empty array means all Source Networks.</p>
   */
  sourceNetworkIDs?: string[];

  /**
   * @public
   * <p>Filter Source Networks by account ID containing the protected VPCs.</p>
   */
  originAccountID?: string;

  /**
   * @public
   * <p>Filter Source Networks by the region containing the protected VPCs.</p>
   */
  originRegion?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksRequest {
  /**
   * @public
   * <p>A set of filters by which to return Source Networks.</p>
   */
  filters?: DescribeSourceNetworksRequestFilters;

  /**
   * @public
   * <p>Maximum number of Source Networks to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>The date and time the last Source Network recovery was initiated.</p>
   */
  apiCallDateTime?: Date;

  /**
   * @public
   * <p>The ID of the Job that was used to last recover the Source Network.</p>
   */
  jobID?: string;

  /**
   * @public
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
   * @public
   * <p>Source Network ID.</p>
   */
  sourceNetworkID?: string;

  /**
   * @public
   * <p>VPC ID protected by the Source Network.</p>
   */
  sourceVpcID?: string;

  /**
   * @public
   * <p>The ARN of the Source Network.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A list of tags associated with the Source Network.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Status of Source Network Replication. Possible values:
   *             (a) STOPPED - Source Network is not replicating.
   *             (b) IN_PROGRESS - Source Network is being replicated.
   *             (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes.
   *             (d) ERROR - Source Network replication has failed</p>
   */
  replicationStatus?: ReplicationStatus | string;

  /**
   * @public
   * <p>Error details in case Source Network replication status is ERROR.</p>
   */
  replicationStatusDetails?: string;

  /**
   * @public
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   */
  cfnStackName?: string;

  /**
   * @public
   * <p>Region containing the VPC protected by the Source Network.</p>
   */
  sourceRegion?: string;

  /**
   * @public
   * <p>Account ID containing the VPC protected by the Source Network.</p>
   */
  sourceAccountID?: string;

  /**
   * @public
   * <p>An object containing information regarding the last recovery of the Source Network.</p>
   */
  lastRecovery?: RecoveryLifeCycle;

  /**
   * @public
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   */
  launchedVpcID?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksResponse {
  /**
   * @public
   * <p>An array of Source Networks.</p>
   */
  items?: SourceNetwork[];

  /**
   * @public
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
   * @public
   * <p>An array of Source Servers IDs that should be returned. An empty array means all Source Servers.</p>
   */
  sourceServerIDs?: string[];

  /**
   * @public
   * <p>An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.</p>
   */
  hardwareId?: string;

  /**
   * @public
   * <p>An array of staging account IDs that extended source servers belong to. An empty array means all source servers will be shown.</p>
   */
  stagingAccountIDs?: string[];
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * @public
   * <p>A set of filters by which to return Source Servers.</p>
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * @public
   * <p>Maximum number of Source Servers to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token of the next Source Server to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * @public
   * <p>An array of Source Servers.</p>
   */
  items?: SourceServer[];

  /**
   * @public
   * <p>The token of the next Source Server to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisconnectRecoveryInstanceRequest {
  /**
   * @public
   * <p>The ID of the Recovery Instance to disconnect.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DisconnectSourceServerRequest {
  /**
   * @public
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
   * @public
   * <p>Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * @public
   * <p>Copy private IP.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>S3 bucket ARN to export Source Network templates.</p>
   */
  exportBucketArn?: string;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateResponse {
  /**
   * @public
   * <p>Updated Launch Configuration Template.</p>
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersRequest {
  /**
   * @public
   * <p>The Id of the staging Account to retrieve extensible source servers from.</p>
   */
  stagingAccountID: string | undefined;

  /**
   * @public
   * <p>The maximum number of extensible source servers to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Hostname of staging source server.</p>
   */
  hostname?: string;

  /**
   * @public
   * <p>The ARN of the source server.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A list of tags associated with the staging source server.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersResponse {
  /**
   * @public
   * <p>A list of source servers on a staging Account that are extensible.</p>
   */
  items?: StagingSourceServer[];

  /**
   * @public
   * <p>The token of the next extensible source server to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagingAccountsRequest {
  /**
   * @public
   * <p>The maximum number of staging Accounts to retrieve.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token of the next staging Account to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagingAccountsResponse {
  /**
   * @public
   * <p>An array of staging AWS Accounts.</p>
   */
  accounts?: Account[];

  /**
   * @public
   * <p>The token of the next staging Account to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource whose tags should be returned.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags of the requested resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Recovery Instance whose failback replication configuration should be returned.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationResponse {
  /**
   * @public
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID: string | undefined;

  /**
   * @public
   * <p>The name of the Failback Replication Configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   */
  usePrivateIP?: boolean;
}

/**
 * @public
 */
export interface ReverseReplicationRequest {
  /**
   * @public
   * <p>The ID of the Recovery Instance that we want to reverse the replication for.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface ReverseReplicationResponse {
  /**
   * @public
   * <p>ARN of created SourceServer.</p>
   */
  reversedDirectionSourceServerArn?: string;
}

/**
 * @public
 */
export interface StartFailbackLaunchRequest {
  /**
   * @public
   * <p>The IDs of the Recovery Instance whose failback launch we want to request.</p>
   */
  recoveryInstanceIDs: string[] | undefined;

  /**
   * @public
   * <p>The tags to be associated with the failback launch Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartFailbackLaunchResponse {
  /**
   * @public
   * <p>The failback launch Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopFailbackRequest {
  /**
   * @public
   * <p>The ID of the Recovery Instance we want to stop failback for.</p>
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesRequest {
  /**
   * @public
   * <p>The IDs of the Recovery Instances that should be terminated.</p>
   */
  recoveryInstanceIDs: string[] | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesResponse {
  /**
   * @public
   * <p>The Job for terminating the Recovery Instances.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface UpdateFailbackReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Recovery Instance.</p>
   */
  recoveryInstanceID: string | undefined;

  /**
   * @public
   * <p>The name of the Failback Replication Configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   */
  usePrivateIP?: boolean;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * @public
   * <p>The Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>The Replication Configuration Template ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * @public
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * @public
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * @public
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * @public
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateRequest {
  /**
   * @public
   * <p>The Source Network ID to export its CloudFormation template to an S3 bucket.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateResponse {
  /**
   * @public
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
   * @public
   * <p>The ID of the Source Network you want to recover.</p>
   */
  sourceNetworkID: string | undefined;

  /**
   * @public
   * <p>CloudFormation stack name to be used for recovering the network.</p>
   */
  cfnStackName?: string;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryRequest {
  /**
   * @public
   * <p>The Source Networks that we want to start a Recovery Job for.</p>
   */
  sourceNetworks: StartSourceNetworkRecoveryRequestNetworkEntry[] | undefined;

  /**
   * @public
   * <p>Don't update existing CloudFormation Stack, recover the network using a new stack.</p>
   */
  deployAsNew?: boolean;

  /**
   * @public
   * <p>The tags to be associated with the Source Network recovery Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryResponse {
  /**
   * @public
   * <p>The Source Network recovery Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationRequest {
  /**
   * @public
   * <p>ID of the Source Network to replicate.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationResponse {
  /**
   * @public
   * <p>Source Network which was requested for replication.</p>
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationRequest {
  /**
   * @public
   * <p>ID of the Source Network to stop replication.</p>
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationResponse {
  /**
   * @public
   * <p>Source Network which was requested to stop replication.</p>
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * @public
   * <p>The ID of the Source Server for this launch configuration.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The name of the launch configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The EC2 launch template ID of this launch configuration.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * @public
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * @public
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * @public
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>The licensing configuration to be used for this launch configuration.</p>
   */
  licensing?: Licensing;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * @public
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
   * @public
   * <p>The name of the device.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>Whether to boot from this disk or not.</p>
   */
  isBootDisk?: boolean;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;

  /**
   * @public
   * <p>The requested number of I/O operations per second (IOPS).</p>
   */
  iops?: number;

  /**
   * @public
   * <p>The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.</p>
   */
  throughput?: number;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication when <code>stagingDiskType</code> is set to Auto. This is a read-only field.</p>
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * @public
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>The name of the Replication Configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * @public
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * @public
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * @public
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * @public
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * @public
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * @public
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
   * @public
   * <p>The ID of the Source Server you want to recover.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>The ID of a Recovery Snapshot we want to recover from. Omit this field to launch from the latest data by taking an on-demand snapshot.</p>
   */
  recoverySnapshotID?: string;
}

/**
 * @public
 */
export interface StartRecoveryRequest {
  /**
   * @public
   * <p>The Source Servers that we want to start a Recovery Job for.</p>
   */
  sourceServers: StartRecoveryRequestSourceServer[] | undefined;

  /**
   * @public
   * <p>Whether this Source Server Recovery operation is a drill or not.</p>
   */
  isDrill?: boolean;

  /**
   * @public
   * <p>The tags to be associated with the Recovery Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartRecoveryResponse {
  /**
   * @public
   * <p>The Recovery Job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * @public
   * <p>The ID of the Source Server to start replication for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationResponse {
  /**
   * @public
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * @public
   * <p>The ID of the Source Server to stop replication for.</p>
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * @public
   * <p>The Source Server that this action was targeted on.</p>
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>The name of the launch configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * @public
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * @public
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>The licensing configuration to be used for this launch configuration.</p>
   */
  licensing?: Licensing;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>The name of the Replication Configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The subnet to be used by the replication staging area.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>The security group IDs that will be used by the replication server.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>The instance type to be used for the replication server.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * @public
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * @public
   * <p>The type of EBS encryption to be used during replication.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * @public
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>The data plane routing mechanism that will be used for replication.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * @public
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * @public
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>ARN of the resource for which tags are to be added or updated.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be added or updated.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>ARN of the resource for which tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
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

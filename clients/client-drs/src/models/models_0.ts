// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DrsServiceException as __BaseException } from "./DrsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * @public
 */
export interface Account {
  /**
   * <p>Account ID of AWS account.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackRequest {
  /**
   * <p>The Source Network ID to associate with CloudFormation template.</p>
   * @public
   */
  sourceNetworkID: string | undefined;

  /**
   * <p>CloudFormation template to associate with a Source Network.</p>
   * @public
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
 * <p>ID of a resource participating in an asynchronous Job.</p>
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
   * <p>Source Network ID.</p>
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
 * <p>Represents a resource participating in an asynchronous Job.</p>
 * @public
 */
export interface ParticipatingResource {
  /**
   * <p>The ID of a participating resource.</p>
   * @public
   */
  participatingResourceID?: ParticipatingResourceID;

  /**
   * <p>The launch status of a participating resource.</p>
   * @public
   */
  launchStatus?: LaunchStatus;
}

/**
 * @public
 * @enum
 */
export const LaunchActionCategory = {
  CONFIGURATION: "CONFIGURATION",
  MONITORING: "MONITORING",
  OTHER: "OTHER",
  SECURITY: "SECURITY",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type LaunchActionCategory = (typeof LaunchActionCategory)[keyof typeof LaunchActionCategory];

/**
 * @public
 * @enum
 */
export const LaunchActionParameterType = {
  DYNAMIC: "DYNAMIC",
  SSM_STORE: "SSM_STORE",
} as const;

/**
 * @public
 */
export type LaunchActionParameterType = (typeof LaunchActionParameterType)[keyof typeof LaunchActionParameterType];

/**
 * <p>Launch action parameter.</p>
 * @public
 */
export interface LaunchActionParameter {
  /**
   * <p>Value.</p>
   * @public
   */
  value?: string;

  /**
   * <p>Type.</p>
   * @public
   */
  type?: LaunchActionParameterType;
}

/**
 * @public
 * @enum
 */
export const LaunchActionType = {
  SSM_AUTOMATION: "SSM_AUTOMATION",
  SSM_COMMAND: "SSM_COMMAND",
} as const;

/**
 * @public
 */
export type LaunchActionType = (typeof LaunchActionType)[keyof typeof LaunchActionType];

/**
 * <p>Launch action.</p>
 * @public
 */
export interface LaunchAction {
  /**
   * <p>Launch action Id.</p>
   * @public
   */
  actionId?: string;

  /**
   * <p>Launch action code.</p>
   * @public
   */
  actionCode?: string;

  /**
   * <p>Launch action type.</p>
   * @public
   */
  type?: LaunchActionType;

  /**
   * <p>Launch action name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Whether the launch action is active.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Launch action order.</p>
   * @public
   */
  order?: number;

  /**
   * <p>Launch action version.</p>
   * @public
   */
  actionVersion?: string;

  /**
   * <p>Whether the launch will not be marked as failed if this action fails.</p>
   * @public
   */
  optional?: boolean;

  /**
   * <p>Launch action parameters.</p>
   * @public
   */
  parameters?: Record<string, LaunchActionParameter>;

  /**
   * <p>Launch action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Launch action category.</p>
   * @public
   */
  category?: LaunchActionCategory;
}

/**
 * @public
 * @enum
 */
export const LaunchActionRunStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LaunchActionRunStatus = (typeof LaunchActionRunStatus)[keyof typeof LaunchActionRunStatus];

/**
 * <p>Launch action run.</p>
 * @public
 */
export interface LaunchActionRun {
  /**
   * <p>Action.</p>
   * @public
   */
  action?: LaunchAction;

  /**
   * <p>Run Id.</p>
   * @public
   */
  runId?: string;

  /**
   * <p>Run status.</p>
   * @public
   */
  status?: LaunchActionRunStatus;

  /**
   * <p>Failure reason.</p>
   * @public
   */
  failureReason?: string;
}

/**
 * <p>Launch actions status.</p>
 * @public
 */
export interface LaunchActionsStatus {
  /**
   * <p>Time where the AWS Systems Manager was detected as running on the launched instance.</p>
   * @public
   */
  ssmAgentDiscoveryDatetime?: string;

  /**
   * <p>List of post launch action status.</p>
   * @public
   */
  runs?: LaunchActionRun[];
}

/**
 * <p>Represents a server participating in an asynchronous Job.</p>
 * @public
 */
export interface ParticipatingServer {
  /**
   * <p>The Source Server ID of a participating server.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The Recovery Instance ID of a participating server.</p>
   * @public
   */
  recoveryInstanceID?: string;

  /**
   * <p>The launch status of a participating server.</p>
   * @public
   */
  launchStatus?: LaunchStatus;

  /**
   * <p>The post-launch action runs of a participating server.</p>
   * @public
   */
  launchActionsStatus?: LaunchActionsStatus;
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
 * <p>A job is an asynchronous workflow.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The ID of the Job.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>The ARN of a Job.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The type of the Job.</p>
   * @public
   */
  type?: JobType;

  /**
   * <p>A string representing who initiated the Job.</p>
   * @public
   */
  initiatedBy?: InitiatedBy;

  /**
   * <p>The date and time of when the Job was created.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>The date and time of when the Job ended.</p>
   * @public
   */
  endDateTime?: string;

  /**
   * <p>The status of the Job.</p>
   * @public
   */
  status?: JobStatus;

  /**
   * <p>A list of servers that the Job is acting upon.</p>
   * @public
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>A list of tags associated with the Job.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A list of resources that the Job is acting upon.</p>
   * @public
   */
  participatingResources?: ParticipatingResource[];
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackResponse {
  /**
   * <p>The Source Network association Job.</p>
   * @public
   */
  job?: Job;
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   * @public
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
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The number of seconds after which the request should be safe to retry.</p>
   * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   * @public
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
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Service code.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>Quota code.</p>
   * @public
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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Service code.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>Quota code.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds after which the request should be safe to retry.</p>
   * @public
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
 * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   * @public
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
 * <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Validation exception reason.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>A list of fields that failed validation.</p>
   * @public
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
 * @enum
 */
export const ProductCodeMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ProductCodeMode = (typeof ProductCodeMode)[keyof typeof ProductCodeMode];

/**
 * <p>Properties of a product code associated with a volume.</p>
 * @public
 */
export interface ProductCode {
  /**
   * <p>Id of a product code associated with a volume.</p>
   * @public
   */
  productCodeId?: string;

  /**
   * <p>Mode of a product code associated with a volume.</p>
   * @public
   */
  productCodeMode?: ProductCodeMode;
}

/**
 * <p>Properties of a conversion job</p>
 * @public
 */
export interface ConversionProperties {
  /**
   * <p>A mapping between the volumes being converted and the converted snapshot ids</p>
   * @public
   */
  volumeToConversionMap?: Record<string, Record<string, string>>;

  /**
   * <p>The root volume name of a conversion job</p>
   * @public
   */
  rootVolumeName?: string;

  /**
   * <p>Whether the volume being converted uses UEFI or not</p>
   * @public
   */
  forceUefi?: boolean;

  /**
   * <p>The timestamp of when the snapshot being converted was taken</p>
   * @public
   */
  dataTimestamp?: string;

  /**
   * <p>A mapping between the volumes and their sizes</p>
   * @public
   */
  volumeToVolumeSize?: Record<string, number>;

  /**
   * <p>A mapping between the volumes being converted and the product codes associated with them</p>
   * @public
   */
  volumeToProductCodes?: Record<string, ProductCode[]>;
}

/**
 * <p>Information about a server's CPU.</p>
 * @public
 */
export interface CPU {
  /**
   * <p>The number of CPU cores.</p>
   * @public
   */
  cores?: number;

  /**
   * <p>The model name of the CPU.</p>
   * @public
   */
  modelName?: string;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerRequest {
  /**
   * <p>This defines the ARN of the source server in staging Account based on which you want to create an extended source server.</p>
   * @public
   */
  sourceServerArn: string | undefined;

  /**
   * <p>A list of tags associated with the extended source server.</p>
   * @public
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
 * <p>Error in data replication.</p>
 * @public
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   * @public
   */
  error?: DataReplicationErrorString;

  /**
   * <p>Error in data replication.</p>
   * @public
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
 * <p>Data replication initiation step.</p>
 * @public
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: DataReplicationInitiationStepName;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: DataReplicationInitiationStepStatus;
}

/**
 * <p>Data replication initiation.</p>
 * @public
 */
export interface DataReplicationInitiation {
  /**
   * <p>The date and time of the current attempt to initiate data replication.</p>
   * @public
   */
  startDateTime?: string;

  /**
   * <p>The date and time of the next attempt to initiate data replication.</p>
   * @public
   */
  nextAttemptDateTime?: string;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   * @public
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
 * @enum
 */
export const VolumeStatus = {
  CONTAINS_MARKETPLACE_PRODUCT_CODES: "CONTAINS_MARKETPLACE_PRODUCT_CODES",
  MISSING_VOLUME_ATTRIBUTES: "MISSING_VOLUME_ATTRIBUTES",
  MISSING_VOLUME_ATTRIBUTES_AND_PRECHECK_UNAVAILABLE: "MISSING_VOLUME_ATTRIBUTES_AND_PRECHECK_UNAVAILABLE",
  REGULAR: "REGULAR",
} as const;

/**
 * @public
 */
export type VolumeStatus = (typeof VolumeStatus)[keyof typeof VolumeStatus];

/**
 * <p>A disk that should be replicated.</p>
 * @public
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number;

  /**
   * <p>The status of the volume.</p>
   * @public
   */
  volumeStatus?: VolumeStatus;
}

/**
 * <p>Information about Data Replication</p>
 * @public
 */
export interface DataReplicationInfo {
  /**
   * <p>Data replication lag duration.</p>
   * @public
   */
  lagDuration?: string;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   * @public
   */
  etaDateTime?: string;

  /**
   * <p>The disks that should be replicated.</p>
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>The state of the data replication.</p>
   * @public
   */
  dataReplicationState?: DataReplicationState;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in data replication.</p>
   * @public
   */
  dataReplicationError?: DataReplicationError;

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   * @public
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
 * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
 * @public
 */
export interface LifeCycleLastLaunchInitiated {
  /**
   * <p>The date and time the last Source Server launch was initiated.</p>
   * @public
   */
  apiCallDateTime?: string;

  /**
   * <p>The ID of the Job that was used to last launch the Source Server.</p>
   * @public
   */
  jobID?: string;

  /**
   * <p>The Job type that was used to last launch the Source Server.</p>
   * @public
   */
  type?: LastLaunchType;
}

/**
 * <p>An object containing information regarding the last launch of a Source Server.</p>
 * @public
 */
export interface LifeCycleLastLaunch {
  /**
   * <p>An object containing information regarding the initiation of the last launch of a Source Server.</p>
   * @public
   */
  initiated?: LifeCycleLastLaunchInitiated;

  /**
   * <p>Status of Source Server's last launch.</p>
   * @public
   */
  status?: LaunchStatus;
}

/**
 * <p>An object representing the Source Server Lifecycle.</p>
 * @public
 */
export interface LifeCycle {
  /**
   * <p>The date and time of when the Source Server was added to the service.</p>
   * @public
   */
  addedToServiceDateTime?: string;

  /**
   * <p>The date and time of the first byte that was replicated from the Source Server.</p>
   * @public
   */
  firstByteDateTime?: string;

  /**
   * <p>The amount of time that the Source Server has been replicating for.</p>
   * @public
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>The date and time this Source Server was last seen by the service.</p>
   * @public
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>An object containing information regarding the last launch of the Source Server.</p>
   * @public
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
 * <p>Properties of the cloud environment where this Source Server originated from.</p>
 * @public
 */
export interface SourceCloudProperties {
  /**
   * <p>AWS Account ID for an EC2-originated Source Server.</p>
   * @public
   */
  originAccountID?: string;

  /**
   * <p>AWS Region for an EC2-originated Source Server.</p>
   * @public
   */
  originRegion?: string;

  /**
   * <p>AWS Availability Zone for an EC2-originated Source Server.</p>
   * @public
   */
  originAvailabilityZone?: string;
}

/**
 * <p>An object representing a data storage device on a server.</p>
 * @public
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number;
}

/**
 * <p>Hints used to uniquely identify a machine.</p>
 * @public
 */
export interface IdentificationHints {
  /**
   * <p>Fully Qualified Domain Name identification hint.</p>
   * @public
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   * @public
   */
  hostname?: string;

  /**
   * <p>vCenter VM path identification hint.</p>
   * @public
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   * @public
   */
  awsInstanceID?: string;
}

/**
 * <p>Network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The MAC address of the network interface.</p>
   * @public
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   * @public
   */
  ips?: string[];

  /**
   * <p>Whether this is the primary network interface.</p>
   * @public
   */
  isPrimary?: boolean;
}

/**
 * <p>Operating System.</p>
 * @public
 */
export interface OS {
  /**
   * <p>The long name of the Operating System.</p>
   * @public
   */
  fullString?: string;
}

/**
 * <p>Properties of the Source Server machine.</p>
 * @public
 */
export interface SourceProperties {
  /**
   * <p>The date and time the Source Properties were last updated on.</p>
   * @public
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>The recommended EC2 instance type that will be used when recovering the Source Server.</p>
   * @public
   */
  recommendedInstanceType?: string;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   * @public
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>An array of network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>An array of disks.</p>
   * @public
   */
  disks?: Disk[];

  /**
   * <p>An array of CPUs.</p>
   * @public
   */
  cpus?: CPU[];

  /**
   * <p>The amount of RAM in bytes.</p>
   * @public
   */
  ramBytes?: number;

  /**
   * <p>Operating system.</p>
   * @public
   */
  os?: OS;

  /**
   * <p>Are EC2 nitro instance types supported when recovering the Source Server.</p>
   * @public
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
 * <p>Staging information related to source server.</p>
 * @public
 */
export interface StagingArea {
  /**
   * <p>Status of Source server extension. Possible values:
   *             (a) NOT_EXTENDED - This is a source server that is replicating in the current account.
   *             (b) EXTENDED - Source server is extended from a staging source server. In this case, the value of stagingSourceServerArn is pointing to the Arn of the source server in the staging account.
   *             (c) EXTENSION_ERROR - Some issue occurred when accessing staging source server. In this case, errorMessage field will contain an error message that explains what happened.</p>
   * @public
   */
  status?: ExtensionStatus;

  /**
   * <p>Account ID of the account to which source server belongs. If this source server is extended - shows Account ID of staging source server.</p>
   * @public
   */
  stagingAccountID?: string;

  /**
   * <p>Arn of the staging source server if this source server is extended</p>
   * @public
   */
  stagingSourceServerArn?: string;

  /**
   * <p>Shows an error message that occurred when DRS tried to access the staging source server. In this case StagingArea$status will have value EXTENSION_ERROR</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * <p>The ID of the Source Server.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The ARN of the Source Server.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The tags associated with the Source Server.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The ID of the Recovery Instance associated with this Source Server.</p>
   * @public
   */
  recoveryInstanceId?: string;

  /**
   * <p>The status of the last recovery launch of this Source Server.</p>
   * @public
   */
  lastLaunchResult?: LastLaunchResult;

  /**
   * <p>The Data Replication Info of the Source Server.</p>
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>The lifecycle information of this Source Server.</p>
   * @public
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>The source properties of the Source Server.</p>
   * @public
   */
  sourceProperties?: SourceProperties;

  /**
   * <p>The staging area of the source server.</p>
   * @public
   */
  stagingArea?: StagingArea;

  /**
   * <p>Source cloud properties of the Source Server.</p>
   * @public
   */
  sourceCloudProperties?: SourceCloudProperties;

  /**
   * <p>Replication direction of the Source Server.</p>
   * @public
   */
  replicationDirection?: ReplicationDirection;

  /**
   * <p>For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction.</p>
   * @public
   */
  reversedDirectionSourceServerArn?: string;

  /**
   * <p>ID of the Source Network which is protecting this Source Server's network.</p>
   * @public
   */
  sourceNetworkID?: string;

  /**
   * <p>The version of the DRS agent installed on the source server</p>
   * @public
   */
  agentVersion?: string;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerResponse {
  /**
   * <p>Created extended source server.</p>
   * @public
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
 * <p>Configuration of a machine's license.</p>
 * @public
 */
export interface Licensing {
  /**
   * <p>Whether to enable "Bring your own license" or not.</p>
   * @public
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
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string;

  /**
   * <p>Whether we want to activate post-launch actions.</p>
   * @public
   */
  postLaunchEnabled?: boolean;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean;
}

/**
 * <p>Account level Launch Configuration Template.</p>
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * <p>ID of the Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplateID?: string;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string;

  /**
   * <p>Post-launch actions activated.</p>
   * @public
   */
  postLaunchEnabled?: boolean;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateResponse {
  /**
   * <p>Created Launch Configuration Template.</p>
   * @public
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
 * <p>A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for.</p>
 * @public
 */
export interface PITPolicyRule {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  ruleID?: number;

  /**
   * <p>The units used to measure the interval and retentionDuration.</p>
   * @public
   */
  units: PITPolicyRuleUnits | undefined;

  /**
   * <p>How often, in the chosen units, a snapshot should be taken.</p>
   * @public
   */
  interval: number | undefined;

  /**
   * <p>The duration to retain a snapshot for, in the chosen units.</p>
   * @public
   */
  retentionDuration: number | undefined;

  /**
   * <p>Whether this rule is enabled or not.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   * @public
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy: PITPolicyRule[] | undefined;

  /**
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * <p>The Replication Configuration Template ID.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>The Replication Configuration Template ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface CreateSourceNetworkRequest {
  /**
   * <p>Which VPC ID to protect.</p>
   * @public
   */
  vpcID: string | undefined;

  /**
   * <p>Account containing the VPC to protect.</p>
   * @public
   */
  originAccountID: string | undefined;

  /**
   * <p>Region containing the VPC to protect.</p>
   * @public
   */
  originRegion: string | undefined;

  /**
   * <p>A set of tags to be associated with the Source Network resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSourceNetworkResponse {
  /**
   * <p>ID of the created Source Network.</p>
   * @public
   */
  sourceNetworkID?: string;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The ID of the Job to be deleted.</p>
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
   * <p>Launch configuration template Id or Source Server Id</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Launch action Id.</p>
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
   * <p>The ID of the Launch Configuration Template to be deleted.</p>
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
   * <p>The ID of the Recovery Instance to be deleted.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>The ID of the Replication Configuration Template to be deleted.</p>
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
   * <p>ID of the Source Network to delete.</p>
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
   * <p>The ID of the Source Server to be deleted.</p>
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
   * <p>The ID of the Job for which Job log items will be retrieved.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>Maximum number of Job log items to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   * @public
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
 * <p>Properties of Source Network related to a job event.</p>
 * @public
 */
export interface SourceNetworkData {
  /**
   * <p>Source Network ID.</p>
   * @public
   */
  sourceNetworkID?: string;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   * @public
   */
  sourceVpc?: string;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   * @public
   */
  targetVpc?: string;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   * @public
   */
  stackName?: string;
}

/**
 * <p>Properties of resource related to a job event.</p>
 * @public
 */
export type EventResourceData = EventResourceData.SourceNetworkDataMember | EventResourceData.$UnknownMember;

/**
 * @public
 */
export namespace EventResourceData {
  /**
   * <p>Source Network properties.</p>
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
 * <p>Metadata associated with a Job log.</p>
 * @public
 */
export interface JobLogEventData {
  /**
   * <p>The ID of a Source Server.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The ID of a conversion server.</p>
   * @public
   */
  conversionServerID?: string;

  /**
   * <p>The ID of a Recovery Instance.</p>
   * @public
   */
  targetInstanceID?: string;

  /**
   * <p>A string representing a job error.</p>
   * @public
   */
  rawError?: string;

  /**
   * <p>Properties of a conversion job</p>
   * @public
   */
  conversionProperties?: ConversionProperties;

  /**
   * <p>Properties of resource related to a job event.</p>
   * @public
   */
  eventResourceData?: EventResourceData;
}

/**
 * <p>A log outputted by a Job.</p>
 * @public
 */
export interface JobLog {
  /**
   * <p>The date and time the log was taken.</p>
   * @public
   */
  logDateTime?: string;

  /**
   * <p>The event represents the type of a log.</p>
   * @public
   */
  event?: JobLogEvent;

  /**
   * <p>Metadata associated with a Job log.</p>
   * @public
   */
  eventData?: JobLogEventData;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * <p>An array of Job log items.</p>
   * @public
   */
  items?: JobLog[];

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Jobs.</p>
 * @public
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>An array of Job IDs that should be returned. An empty array means all jobs.</p>
   * @public
   */
  jobIDs?: string[];

  /**
   * <p>The start date in a date range query.</p>
   * @public
   */
  fromDate?: string;

  /**
   * <p>The end date in a date range query.</p>
   * @public
   */
  toDate?: string;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>A set of filters by which to return Jobs.</p>
   * @public
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * <p>Maximum number of Jobs to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Job to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>An array of Jobs.</p>
   * @public
   */
  items?: Job[];

  /**
   * <p>The token of the next Job to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   * @public
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Recovery Instances.</p>
 * @public
 */
export interface DescribeRecoveryInstancesRequestFilters {
  /**
   * <p>An array of Recovery Instance IDs that should be returned. An empty array means all Recovery Instances.</p>
   * @public
   */
  recoveryInstanceIDs?: string[];

  /**
   * <p>An array of Source Server IDs for which associated Recovery Instances should be returned.</p>
   * @public
   */
  sourceServerIDs?: string[];
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesRequest {
  /**
   * <p>A set of filters by which to return Recovery Instances.</p>
   * @public
   */
  filters?: DescribeRecoveryInstancesRequestFilters;

  /**
   * <p>Maximum number of Recovery Instances to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   * @public
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
 * <p>Error in data replication.</p>
 * @public
 */
export interface RecoveryInstanceDataReplicationError {
  /**
   * <p>Error in data replication.</p>
   * @public
   */
  error?: FailbackReplicationError;

  /**
   * <p>Error in data replication.</p>
   * @public
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
 * <p>Data replication initiation step.</p>
 * @public
 */
export interface RecoveryInstanceDataReplicationInitiationStep {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: RecoveryInstanceDataReplicationInitiationStepName;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: RecoveryInstanceDataReplicationInitiationStepStatus;
}

/**
 * <p>Data replication initiation.</p>
 * @public
 */
export interface RecoveryInstanceDataReplicationInitiation {
  /**
   * <p>The date and time of the current attempt to initiate data replication.</p>
   * @public
   */
  startDateTime?: string;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   * @public
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
 * <p>A disk that should be replicated.</p>
 * @public
 */
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number;
}

/**
 * <p>Information about Data Replication</p>
 * @public
 */
export interface RecoveryInstanceDataReplicationInfo {
  /**
   * <p>Data replication lag duration.</p>
   * @public
   */
  lagDuration?: string;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   * @public
   */
  etaDateTime?: string;

  /**
   * <p>The disks that should be replicated.</p>
   * @public
   */
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[];

  /**
   * <p>The state of the data replication.</p>
   * @public
   */
  dataReplicationState?: RecoveryInstanceDataReplicationState;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;

  /**
   * <p>Information about Data Replication</p>
   * @public
   */
  dataReplicationError?: RecoveryInstanceDataReplicationError;

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   * @public
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
 * <p>An object representing failback related information of the Recovery Instance.</p>
 * @public
 */
export interface RecoveryInstanceFailback {
  /**
   * <p>The ID of the failback client that this Recovery Instance is associated with.</p>
   * @public
   */
  failbackClientID?: string;

  /**
   * <p>The Job ID of the last failback log for this Recovery Instance.</p>
   * @public
   */
  failbackJobID?: string;

  /**
   * <p>The date and time that the failback initiation started.</p>
   * @public
   */
  failbackInitiationTime?: string;

  /**
   * <p>The state of the failback process that this Recovery Instance is in.</p>
   * @public
   */
  state?: FailbackState;

  /**
   * <p>The date and time the agent on the Recovery Instance was last seen by the service.</p>
   * @public
   */
  agentLastSeenByServiceDateTime?: string;

  /**
   * <p>The date and time that the failback client was last seen by the service.</p>
   * @public
   */
  failbackClientLastSeenByServiceDateTime?: string;

  /**
   * <p>Whether we are failing back to the original Source Server for this Recovery Instance.</p>
   * @public
   */
  failbackToOriginalServer?: boolean;

  /**
   * <p>The date and time of the first byte that was replicated from the Recovery Instance.</p>
   * @public
   */
  firstByteDateTime?: string;

  /**
   * <p>The amount of time that the Recovery Instance has been replicating for.</p>
   * @public
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>The launch type (Recovery / Drill) of the last launch for the failback replication of this recovery instance.</p>
   * @public
   */
  failbackLaunchType?: FailbackLaunchType;
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
 * <p>An object representing a block storage device on the Recovery Instance.</p>
 * @public
 */
export interface RecoveryInstanceDisk {
  /**
   * <p>The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.</p>
   * @public
   */
  internalDeviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number;

  /**
   * <p>The EBS Volume ID of this disk.</p>
   * @public
   */
  ebsVolumeID?: string;
}

/**
 * <p>Properties of the Recovery Instance machine.</p>
 * @public
 */
export interface RecoveryInstanceProperties {
  /**
   * <p>The date and time the Recovery Instance properties were last updated on.</p>
   * @public
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   * @public
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>An array of network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>An array of disks.</p>
   * @public
   */
  disks?: RecoveryInstanceDisk[];

  /**
   * <p>An array of CPUs.</p>
   * @public
   */
  cpus?: CPU[];

  /**
   * <p>The amount of RAM in bytes.</p>
   * @public
   */
  ramBytes?: number;

  /**
   * <p>Operating system.</p>
   * @public
   */
  os?: OS;
}

/**
 * <p>A Recovery Instance is a replica of a Source Server running on EC2.</p>
 * @public
 */
export interface RecoveryInstance {
  /**
   * <p>The EC2 instance ID of the Recovery Instance.</p>
   * @public
   */
  ec2InstanceID?: string;

  /**
   * <p>The state of the EC2 instance for this Recovery Instance.</p>
   * @public
   */
  ec2InstanceState?: EC2InstanceState;

  /**
   * <p>The ID of the Job that created the Recovery Instance.</p>
   * @public
   */
  jobID?: string;

  /**
   * <p>The ID of the Recovery Instance.</p>
   * @public
   */
  recoveryInstanceID?: string;

  /**
   * <p>The Source Server ID that this Recovery Instance is associated with.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The ARN of the Recovery Instance.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>An array of tags that are associated with the Recovery Instance.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>An object representing failback related information of the Recovery Instance.</p>
   * @public
   */
  failback?: RecoveryInstanceFailback;

  /**
   * <p>The Data Replication Info of the Recovery Instance.</p>
   * @public
   */
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;

  /**
   * <p>Properties of the Recovery Instance machine.</p>
   * @public
   */
  recoveryInstanceProperties?: RecoveryInstanceProperties;

  /**
   * <p>The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.</p>
   * @public
   */
  pointInTimeSnapshotDateTime?: string;

  /**
   * <p>Whether this Recovery Instance was created for a drill or for an actual Recovery event.</p>
   * @public
   */
  isDrill?: boolean;

  /**
   * <p>Environment (On Premises / AWS) of the instance that the recovery instance originated from.</p>
   * @public
   */
  originEnvironment?: OriginEnvironment;

  /**
   * <p>AWS availability zone associated with the recovery instance.</p>
   * @public
   */
  originAvailabilityZone?: string;

  /**
   * <p>The version of the DRS agent installed on the recovery instance</p>
   * @public
   */
  agentVersion?: string;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesResponse {
  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array of Recovery Instances.</p>
   * @public
   */
  items?: RecoveryInstance[];
}

/**
 * <p>A set of filters by which to return Recovery Snapshots.</p>
 * @public
 */
export interface DescribeRecoverySnapshotsRequestFilters {
  /**
   * <p>The start date in a date range query.</p>
   * @public
   */
  fromDateTime?: string;

  /**
   * <p>The end date in a date range query.</p>
   * @public
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
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>A set of filters by which to return Recovery Snapshots.</p>
   * @public
   */
  filters?: DescribeRecoverySnapshotsRequestFilters;

  /**
   * <p>The sorted ordering by which to return Recovery Snapshots.</p>
   * @public
   */
  order?: RecoverySnapshotsOrder;

  /**
   * <p>Maximum number of Recovery Snapshots to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A snapshot of a Source Server used during recovery.</p>
 * @public
 */
export interface RecoverySnapshot {
  /**
   * <p>The ID of the Recovery Snapshot.</p>
   * @public
   */
  snapshotID: string | undefined;

  /**
   * <p>The ID of the Source Server that the snapshot was taken for.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The timestamp of when we expect the snapshot to be taken.</p>
   * @public
   */
  expectedTimestamp: string | undefined;

  /**
   * <p>The actual timestamp that the snapshot was taken.</p>
   * @public
   */
  timestamp?: string;

  /**
   * <p>A list of EBS snapshots.</p>
   * @public
   */
  ebsSnapshots?: string[];
}

/**
 * @public
 */
export interface DescribeRecoverySnapshotsResponse {
  /**
   * <p>An array of Recovery Snapshots.</p>
   * @public
   */
  items?: RecoverySnapshot[];

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.</p>
   * @public
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum number of Replication Configuration Templates to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>An array of Replication Configuration Templates.</p>
   * @public
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Source Networks.</p>
 * @public
 */
export interface DescribeSourceNetworksRequestFilters {
  /**
   * <p>An array of Source Network IDs that should be returned. An empty array means all Source Networks.</p>
   * @public
   */
  sourceNetworkIDs?: string[];

  /**
   * <p>Filter Source Networks by account ID containing the protected VPCs.</p>
   * @public
   */
  originAccountID?: string;

  /**
   * <p>Filter Source Networks by the region containing the protected VPCs.</p>
   * @public
   */
  originRegion?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksRequest {
  /**
   * <p>A set of filters by which to return Source Networks.</p>
   * @public
   */
  filters?: DescribeSourceNetworksRequestFilters;

  /**
   * <p>Maximum number of Source Networks to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   * @public
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
 * <p>An object representing the Source Network recovery Lifecycle.</p>
 * @public
 */
export interface RecoveryLifeCycle {
  /**
   * <p>The date and time the last Source Network recovery was initiated.</p>
   * @public
   */
  apiCallDateTime?: Date;

  /**
   * <p>The ID of the Job that was used to last recover the Source Network.</p>
   * @public
   */
  jobID?: string;

  /**
   * <p>The status of the last recovery status of this Source Network.</p>
   * @public
   */
  lastRecoveryResult?: RecoveryResult;
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
 * <p>The ARN of the Source Network.</p>
 * @public
 */
export interface SourceNetwork {
  /**
   * <p>Source Network ID.</p>
   * @public
   */
  sourceNetworkID?: string;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   * @public
   */
  sourceVpcID?: string;

  /**
   * <p>The ARN of the Source Network.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the Source Network.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Status of Source Network Replication. Possible values:
   *             (a) STOPPED - Source Network is not replicating.
   *             (b) IN_PROGRESS - Source Network is being replicated.
   *             (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes.
   *             (d) ERROR - Source Network replication has failed</p>
   * @public
   */
  replicationStatus?: ReplicationStatus;

  /**
   * <p>Error details in case Source Network replication status is ERROR.</p>
   * @public
   */
  replicationStatusDetails?: string;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   * @public
   */
  cfnStackName?: string;

  /**
   * <p>Region containing the VPC protected by the Source Network.</p>
   * @public
   */
  sourceRegion?: string;

  /**
   * <p>Account ID containing the VPC protected by the Source Network.</p>
   * @public
   */
  sourceAccountID?: string;

  /**
   * <p>An object containing information regarding the last recovery of the Source Network.</p>
   * @public
   */
  lastRecovery?: RecoveryLifeCycle;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   * @public
   */
  launchedVpcID?: string;
}

/**
 * @public
 */
export interface DescribeSourceNetworksResponse {
  /**
   * <p>An array of Source Networks.</p>
   * @public
   */
  items?: SourceNetwork[];

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A set of filters by which to return Source Servers.</p>
 * @public
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>An array of Source Servers IDs that should be returned. An empty array means all Source Servers.</p>
   * @public
   */
  sourceServerIDs?: string[];

  /**
   * <p>An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.</p>
   * @public
   */
  hardwareId?: string;

  /**
   * <p>An array of staging account IDs that extended source servers belong to. An empty array means all source servers will be shown.</p>
   * @public
   */
  stagingAccountIDs?: string[];
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * <p>A set of filters by which to return Source Servers.</p>
   * @public
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * <p>Maximum number of Source Servers to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>An array of Source Servers.</p>
   * @public
   */
  items?: SourceServer[];

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisconnectRecoveryInstanceRequest {
  /**
   * <p>The ID of the Recovery Instance to disconnect.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface DisconnectSourceServerRequest {
  /**
   * <p>The ID of the Source Server to disconnect.</p>
   * @public
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
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string;

  /**
   * <p>Whether we want to activate post-launch actions.</p>
   * @public
   */
  postLaunchEnabled?: boolean;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateResponse {
  /**
   * <p>Updated Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersRequest {
  /**
   * <p>The Id of the staging Account to retrieve extensible source servers from.</p>
   * @public
   */
  stagingAccountID: string | undefined;

  /**
   * <p>The maximum number of extensible source servers to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Source server in staging account that extended source server connected to.</p>
 * @public
 */
export interface StagingSourceServer {
  /**
   * <p>Hostname of staging source server.</p>
   * @public
   */
  hostname?: string;

  /**
   * <p>The ARN of the source server.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>A list of tags associated with the staging source server.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersResponse {
  /**
   * <p>A list of source servers on a staging Account that are extensible.</p>
   * @public
   */
  items?: StagingSourceServer[];

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Resource launch actions filter.</p>
 * @public
 */
export interface LaunchActionsRequestFilters {
  /**
   * <p>Launch actions Ids.</p>
   * @public
   */
  actionIds?: string[];
}

/**
 * @public
 */
export interface ListLaunchActionsRequest {
  /**
   * <p>Launch configuration template Id or Source Server Id</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Filters to apply when listing resource launch actions.</p>
   * @public
   */
  filters?: LaunchActionsRequestFilters;

  /**
   * <p>Maximum amount of items to return when listing resource launch actions.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next token to use when listing resource launch actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListLaunchActionsResponse {
  /**
   * <p>List of resource launch actions.</p>
   * @public
   */
  items?: LaunchAction[];

  /**
   * <p>Next token returned when listing resource launch actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagingAccountsRequest {
  /**
   * <p>The maximum number of staging Accounts to retrieve.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagingAccountsResponse {
  /**
   * <p>An array of staging AWS Accounts.</p>
   * @public
   */
  accounts?: Account[];

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags should be returned.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the requested resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutLaunchActionRequest {
  /**
   * <p>Launch configuration template Id or Source Server Id</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Launch action code.</p>
   * @public
   */
  actionCode: string | undefined;

  /**
   * <p>Launch action order.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>Launch action Id.</p>
   * @public
   */
  actionId: string | undefined;

  /**
   * <p>Whether the launch will not be marked as failed if this action fails.</p>
   * @public
   */
  optional: boolean | undefined;

  /**
   * <p>Whether the launch action is active.</p>
   * @public
   */
  active: boolean | undefined;

  /**
   * <p>Launch action name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Launch action version.</p>
   * @public
   */
  actionVersion: string | undefined;

  /**
   * <p>Launch action category.</p>
   * @public
   */
  category: LaunchActionCategory | undefined;

  /**
   * <p>Launch action parameters.</p>
   * @public
   */
  parameters?: Record<string, LaunchActionParameter>;

  /**
   * <p>Launch action description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface PutLaunchActionResponse {
  /**
   * <p>Launch configuration template Id or Source Server Id</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Launch action Id.</p>
   * @public
   */
  actionId?: string;

  /**
   * <p>Launch action code.</p>
   * @public
   */
  actionCode?: string;

  /**
   * <p>Launch action type.</p>
   * @public
   */
  type?: LaunchActionType;

  /**
   * <p>Launch action name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Whether the launch action is active.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Launch action order.</p>
   * @public
   */
  order?: number;

  /**
   * <p>Launch action version.</p>
   * @public
   */
  actionVersion?: string;

  /**
   * <p>Whether the launch will not be marked as failed if this action fails.</p>
   * @public
   */
  optional?: boolean;

  /**
   * <p>Launch action parameters.</p>
   * @public
   */
  parameters?: Record<string, LaunchActionParameter>;

  /**
   * <p>Launch action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Launch action category.</p>
   * @public
   */
  category?: LaunchActionCategory;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationRequest {
  /**
   * <p>The ID of the Recovery Instance whose failback replication configuration should be returned.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface GetFailbackReplicationConfigurationResponse {
  /**
   * <p>The ID of the Recovery Instance.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;

  /**
   * <p>The name of the Failback Replication Configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   * @public
   */
  usePrivateIP?: boolean;
}

/**
 * @public
 */
export interface ReverseReplicationRequest {
  /**
   * <p>The ID of the Recovery Instance that we want to reverse the replication for.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface ReverseReplicationResponse {
  /**
   * <p>ARN of created SourceServer.</p>
   * @public
   */
  reversedDirectionSourceServerArn?: string;
}

/**
 * @public
 */
export interface StartFailbackLaunchRequest {
  /**
   * <p>The IDs of the Recovery Instance whose failback launch we want to request.</p>
   * @public
   */
  recoveryInstanceIDs: string[] | undefined;

  /**
   * <p>The tags to be associated with the failback launch Job.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartFailbackLaunchResponse {
  /**
   * <p>The failback launch Job.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopFailbackRequest {
  /**
   * <p>The ID of the Recovery Instance we want to stop failback for.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesRequest {
  /**
   * <p>The IDs of the Recovery Instances that should be terminated.</p>
   * @public
   */
  recoveryInstanceIDs: string[] | undefined;
}

/**
 * @public
 */
export interface TerminateRecoveryInstancesResponse {
  /**
   * <p>The Job for terminating the Recovery Instances.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface UpdateFailbackReplicationConfigurationRequest {
  /**
   * <p>The ID of the Recovery Instance.</p>
   * @public
   */
  recoveryInstanceID: string | undefined;

  /**
   * <p>The name of the Failback Replication Configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   * @public
   */
  usePrivateIP?: boolean;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>The Replication Configuration Template ID.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>The Replication Configuration Template ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateRequest {
  /**
   * <p>The Source Network ID to export its CloudFormation template to an S3 bucket.</p>
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface ExportSourceNetworkCfnTemplateResponse {
  /**
   * <p>S3 bucket URL where the Source Network CloudFormation template was exported to.</p>
   * @public
   */
  s3DestinationUrl?: string;
}

/**
 * <p>An object representing the Source Network to recover.</p>
 * @public
 */
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
  /**
   * <p>The ID of the Source Network you want to recover.</p>
   * @public
   */
  sourceNetworkID: string | undefined;

  /**
   * <p>CloudFormation stack name to be used for recovering the network.</p>
   * @public
   */
  cfnStackName?: string;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryRequest {
  /**
   * <p>The Source Networks that we want to start a Recovery Job for.</p>
   * @public
   */
  sourceNetworks: StartSourceNetworkRecoveryRequestNetworkEntry[] | undefined;

  /**
   * <p>Don't update existing CloudFormation Stack, recover the network using a new stack.</p>
   * @public
   */
  deployAsNew?: boolean;

  /**
   * <p>The tags to be associated with the Source Network recovery Job.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryResponse {
  /**
   * <p>The Source Network recovery Job.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationRequest {
  /**
   * <p>ID of the Source Network to replicate.</p>
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkReplicationResponse {
  /**
   * <p>Source Network which was requested for replication.</p>
   * @public
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationRequest {
  /**
   * <p>ID of the Source Network to stop replication.</p>
   * @public
   */
  sourceNetworkID: string | undefined;
}

/**
 * @public
 */
export interface StopSourceNetworkReplicationResponse {
  /**
   * <p>Source Network which was requested to stop replication.</p>
   * @public
   */
  sourceNetwork?: SourceNetwork;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * <p>Launch into existing instance.</p>
 * @public
 */
export interface LaunchIntoInstanceProperties {
  /**
   * <p>Optionally holds EC2 instance ID of an instance to launch into, instead of launching a new instance during drill, recovery or failback.</p>
   * @public
   */
  launchIntoEC2InstanceID?: string;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * <p>The ID of the Source Server for this launch configuration.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The name of the launch configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The EC2 launch template ID of this launch configuration.</p>
   * @public
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Whether we want to activate post-launch actions for the Source Server.</p>
   * @public
   */
  postLaunchEnabled?: boolean;

  /**
   * <p>Launch into existing instance properties.</p>
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * <p>The ID of the Source Serve for this Replication Configuration.r</p>
   * @public
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
 * <p>The configuration of a disk of the Source Server to be replicated.</p>
 * @public
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>The name of the device.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>Whether to boot from this disk or not.</p>
   * @public
   */
  isBootDisk?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;

  /**
   * <p>The requested number of I/O operations per second (IOPS).</p>
   * @public
   */
  iops?: number;

  /**
   * <p>The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.</p>
   * @public
   */
  throughput?: number;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication when <code>stagingDiskType</code> is set to Auto. This is a read-only field.</p>
   * @public
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>The name of the Replication Configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * <p>The ID of the Source Server whose data replication should be retried.</p>
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * <p>An object representing the Source Server to recover.</p>
 * @public
 */
export interface StartRecoveryRequestSourceServer {
  /**
   * <p>The ID of the Source Server you want to recover.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The ID of a Recovery Snapshot we want to recover from. Omit this field to launch from the latest data by taking an on-demand snapshot.</p>
   * @public
   */
  recoverySnapshotID?: string;
}

/**
 * @public
 */
export interface StartRecoveryRequest {
  /**
   * <p>The Source Servers that we want to start a Recovery Job for.</p>
   * @public
   */
  sourceServers: StartRecoveryRequestSourceServer[] | undefined;

  /**
   * <p>Whether this Source Server Recovery operation is a drill or not.</p>
   * @public
   */
  isDrill?: boolean;

  /**
   * <p>The tags to be associated with the Recovery Job.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartRecoveryResponse {
  /**
   * <p>The Recovery Job.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * <p>The ID of the Source Server to start replication for.</p>
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   * @public
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * <p>The ID of the Source Server to stop replication for.</p>
   * @public
   */
  sourceServerID: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * <p>The Source Server that this action was targeted on.</p>
   * @public
   */
  sourceServer?: SourceServer;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>The ID of the Source Server that we want to retrieve a Launch Configuration for.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The name of the launch configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Whether we want to enable post-launch actions for the Source Server.</p>
   * @public
   */
  postLaunchEnabled?: boolean;

  /**
   * <p>Launch into existing instance properties.</p>
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The name of the Replication Configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[];

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be removed.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed.</p>
   * @public
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

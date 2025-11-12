// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DrsServiceException as __BaseException } from "./DrsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string | undefined;
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
  accountID?: string | undefined;
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
 * <p>Represents a resource participating in an asynchronous Job.</p>
 * @public
 */
export interface ParticipatingResource {
  /**
   * <p>The ID of a participating resource.</p>
   * @public
   */
  participatingResourceID?: ParticipatingResourceID | undefined;

  /**
   * <p>The launch status of a participating resource.</p>
   * @public
   */
  launchStatus?: LaunchStatus | undefined;
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
  value?: string | undefined;

  /**
   * <p>Type.</p>
   * @public
   */
  type?: LaunchActionParameterType | undefined;
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
  actionId?: string | undefined;

  /**
   * <p>Launch action code.</p>
   * @public
   */
  actionCode?: string | undefined;

  /**
   * <p>Launch action type.</p>
   * @public
   */
  type?: LaunchActionType | undefined;

  /**
   * <p>Launch action name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Whether the launch action is active.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Launch action order.</p>
   * @public
   */
  order?: number | undefined;

  /**
   * <p>Launch action version.</p>
   * @public
   */
  actionVersion?: string | undefined;

  /**
   * <p>Whether the launch will not be marked as failed if this action fails.</p>
   * @public
   */
  optional?: boolean | undefined;

  /**
   * <p>Launch action parameters.</p>
   * @public
   */
  parameters?: Record<string, LaunchActionParameter> | undefined;

  /**
   * <p>Launch action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Launch action category.</p>
   * @public
   */
  category?: LaunchActionCategory | undefined;
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
  action?: LaunchAction | undefined;

  /**
   * <p>Run Id.</p>
   * @public
   */
  runId?: string | undefined;

  /**
   * <p>Run status.</p>
   * @public
   */
  status?: LaunchActionRunStatus | undefined;

  /**
   * <p>Failure reason.</p>
   * @public
   */
  failureReason?: string | undefined;
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
  ssmAgentDiscoveryDatetime?: string | undefined;

  /**
   * <p>List of post launch action status.</p>
   * @public
   */
  runs?: LaunchActionRun[] | undefined;
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
  sourceServerID?: string | undefined;

  /**
   * <p>The Recovery Instance ID of a participating server.</p>
   * @public
   */
  recoveryInstanceID?: string | undefined;

  /**
   * <p>The launch status of a participating server.</p>
   * @public
   */
  launchStatus?: LaunchStatus | undefined;

  /**
   * <p>The post-launch action runs of a participating server.</p>
   * @public
   */
  launchActionsStatus?: LaunchActionsStatus | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The type of the Job.</p>
   * @public
   */
  type?: JobType | undefined;

  /**
   * <p>A string representing who initiated the Job.</p>
   * @public
   */
  initiatedBy?: InitiatedBy | undefined;

  /**
   * <p>The date and time of when the Job was created.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>The date and time of when the Job ended.</p>
   * @public
   */
  endDateTime?: string | undefined;

  /**
   * <p>The status of the Job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>A list of servers that the Job is acting upon.</p>
   * @public
   */
  participatingServers?: ParticipatingServer[] | undefined;

  /**
   * <p>A list of tags associated with the Job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of resources that the Job is acting upon.</p>
   * @public
   */
  participatingResources?: ParticipatingResource[] | undefined;
}

/**
 * @public
 */
export interface AssociateSourceNetworkStackResponse {
  /**
   * <p>The Source Network association Job.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType?: string | undefined;

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
  retryAfterSeconds?: number | undefined;

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
  code?: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType?: string | undefined;

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
  code?: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>Service code.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Quota code.</p>
   * @public
   */
  quotaCode?: string | undefined;

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
  serviceCode?: string | undefined;

  /**
   * <p>Quota code.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds after which the request should be safe to retry.</p>
   * @public
   */
  retryAfterSeconds?: string | undefined;

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
  code?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>Validate exception field message.</p>
   * @public
   */
  message?: string | undefined;
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
  code?: string | undefined;
  /**
   * <p>Validation exception reason.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
  productCodeId?: string | undefined;

  /**
   * <p>Mode of a product code associated with a volume.</p>
   * @public
   */
  productCodeMode?: ProductCodeMode | undefined;
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
  volumeToConversionMap?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The root volume name of a conversion job</p>
   * @public
   */
  rootVolumeName?: string | undefined;

  /**
   * <p>Whether the volume being converted uses UEFI or not</p>
   * @public
   */
  forceUefi?: boolean | undefined;

  /**
   * <p>The timestamp of when the snapshot being converted was taken</p>
   * @public
   */
  dataTimestamp?: string | undefined;

  /**
   * <p>A mapping between the volumes and their sizes</p>
   * @public
   */
  volumeToVolumeSize?: Record<string, number> | undefined;

  /**
   * <p>A mapping between the volumes being converted and the product codes associated with them</p>
   * @public
   */
  volumeToProductCodes?: Record<string, ProductCode[]> | undefined;
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
  cores?: number | undefined;

  /**
   * <p>The model name of the CPU.</p>
   * @public
   */
  modelName?: string | undefined;
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
  tags?: Record<string, string> | undefined;
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
  error?: DataReplicationErrorString | undefined;

  /**
   * <p>Error in data replication.</p>
   * @public
   */
  rawError?: string | undefined;
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
  name?: DataReplicationInitiationStepName | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: DataReplicationInitiationStepStatus | undefined;
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
  startDateTime?: string | undefined;

  /**
   * <p>The date and time of the next attempt to initiate data replication.</p>
   * @public
   */
  nextAttemptDateTime?: string | undefined;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   * @public
   */
  steps?: DataReplicationInitiationStep[] | undefined;
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
  PENDING: "PENDING",
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
  deviceName?: string | undefined;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number | undefined;

  /**
   * <p>The status of the volume.</p>
   * @public
   */
  volumeStatus?: VolumeStatus | undefined;
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
  lagDuration?: string | undefined;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * <p>The disks that should be replicated.</p>
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * <p>The state of the data replication.</p>
   * @public
   */
  dataReplicationState?: DataReplicationState | undefined;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation | undefined;

  /**
   * <p>Error in data replication.</p>
   * @public
   */
  dataReplicationError?: DataReplicationError | undefined;

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   * @public
   */
  stagingAvailabilityZone?: string | undefined;

  /**
   * <p>The ARN of the staging Outpost</p>
   * @public
   */
  stagingOutpostArn?: string | undefined;
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
  apiCallDateTime?: string | undefined;

  /**
   * <p>The ID of the Job that was used to last launch the Source Server.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The Job type that was used to last launch the Source Server.</p>
   * @public
   */
  type?: LastLaunchType | undefined;
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
  initiated?: LifeCycleLastLaunchInitiated | undefined;

  /**
   * <p>Status of Source Server's last launch.</p>
   * @public
   */
  status?: LaunchStatus | undefined;
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
  addedToServiceDateTime?: string | undefined;

  /**
   * <p>The date and time of the first byte that was replicated from the Source Server.</p>
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * <p>The amount of time that the Source Server has been replicating for.</p>
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * <p>The date and time this Source Server was last seen by the service.</p>
   * @public
   */
  lastSeenByServiceDateTime?: string | undefined;

  /**
   * <p>An object containing information regarding the last launch of the Source Server.</p>
   * @public
   */
  lastLaunch?: LifeCycleLastLaunch | undefined;
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
  originAccountID?: string | undefined;

  /**
   * <p>AWS Region for an EC2-originated Source Server.</p>
   * @public
   */
  originRegion?: string | undefined;

  /**
   * <p>AWS Availability Zone for an EC2-originated Source Server.</p>
   * @public
   */
  originAvailabilityZone?: string | undefined;

  /**
   * <p>The ARN of the source Outpost</p>
   * @public
   */
  sourceOutpostArn?: string | undefined;
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
  deviceName?: string | undefined;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number | undefined;
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
  fqdn?: string | undefined;

  /**
   * <p>Hostname identification hint.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>vCenter VM path identification hint.</p>
   * @public
   */
  vmWareUuid?: string | undefined;

  /**
   * <p>AWS Instance ID identification hint.</p>
   * @public
   */
  awsInstanceID?: string | undefined;
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
  macAddress?: string | undefined;

  /**
   * <p>Network interface IPs.</p>
   * @public
   */
  ips?: string[] | undefined;

  /**
   * <p>Whether this is the primary network interface.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
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
  fullString?: string | undefined;
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
  lastUpdatedDateTime?: string | undefined;

  /**
   * <p>The recommended EC2 instance type that will be used when recovering the Source Server.</p>
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * <p>An array of network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>An array of disks.</p>
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * <p>An array of CPUs.</p>
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * <p>The amount of RAM in bytes.</p>
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * <p>Operating system.</p>
   * @public
   */
  os?: OS | undefined;

  /**
   * <p>Are EC2 nitro instance types supported when recovering the Source Server.</p>
   * @public
   */
  supportsNitroInstances?: boolean | undefined;
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
  status?: ExtensionStatus | undefined;

  /**
   * <p>Account ID of the account to which source server belongs. If this source server is extended - shows Account ID of staging source server.</p>
   * @public
   */
  stagingAccountID?: string | undefined;

  /**
   * <p>Arn of the staging source server if this source server is extended</p>
   * @public
   */
  stagingSourceServerArn?: string | undefined;

  /**
   * <p>Shows an error message that occurred when DRS tried to access the staging source server. In this case StagingArea$status will have value EXTENSION_ERROR</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * <p>The ID of the Source Server.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>The ARN of the Source Server.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The tags associated with the Source Server.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the Recovery Instance associated with this Source Server.</p>
   * @public
   */
  recoveryInstanceId?: string | undefined;

  /**
   * <p>The status of the last recovery launch of this Source Server.</p>
   * @public
   */
  lastLaunchResult?: LastLaunchResult | undefined;

  /**
   * <p>The Data Replication Info of the Source Server.</p>
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo | undefined;

  /**
   * <p>The lifecycle information of this Source Server.</p>
   * @public
   */
  lifeCycle?: LifeCycle | undefined;

  /**
   * <p>The source properties of the Source Server.</p>
   * @public
   */
  sourceProperties?: SourceProperties | undefined;

  /**
   * <p>The staging area of the source server.</p>
   * @public
   */
  stagingArea?: StagingArea | undefined;

  /**
   * <p>Source cloud properties of the Source Server.</p>
   * @public
   */
  sourceCloudProperties?: SourceCloudProperties | undefined;

  /**
   * <p>Replication direction of the Source Server.</p>
   * @public
   */
  replicationDirection?: ReplicationDirection | undefined;

  /**
   * <p>For EC2-originated Source Servers which have been failed over and then failed back, this value will mean the ARN of the Source Server on the opposite replication direction.</p>
   * @public
   */
  reversedDirectionSourceServerArn?: string | undefined;

  /**
   * <p>ID of the Source Network which is protecting this Source Server's network.</p>
   * @public
   */
  sourceNetworkID?: string | undefined;

  /**
   * <p>The version of the DRS agent installed on the source server</p>
   * @public
   */
  agentVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateExtendedSourceServerResponse {
  /**
   * <p>Created extended source server.</p>
   * @public
   */
  sourceServer?: SourceServer | undefined;
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
  osByol?: boolean | undefined;
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
  tags?: Record<string, string> | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * <p>Whether we want to activate post-launch actions.</p>
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;
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
  launchConfigurationTemplateID?: string | undefined;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * <p>Post-launch actions activated.</p>
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateResponse {
  /**
   * <p>Created Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate | undefined;
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
  ruleID?: number | undefined;

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
  enabled?: boolean | undefined;
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
  ebsEncryptionKeyArn?: string | undefined;

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
  tags?: Record<string, string> | undefined;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>A set of tags to be associated with the Replication Configuration Template resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;
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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSourceNetworkResponse {
  /**
   * <p>ID of the created Source Network.</p>
   * @public
   */
  sourceNetworkID?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  sourceNetworkID?: string | undefined;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   * @public
   */
  sourceVpc?: string | undefined;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   * @public
   */
  targetVpc?: string | undefined;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   * @public
   */
  stackName?: string | undefined;
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
 * <p>Metadata associated with a Job log.</p>
 * @public
 */
export interface JobLogEventData {
  /**
   * <p>The ID of a Source Server.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>The ID of a conversion server.</p>
   * @public
   */
  conversionServerID?: string | undefined;

  /**
   * <p>The ID of a Recovery Instance.</p>
   * @public
   */
  targetInstanceID?: string | undefined;

  /**
   * <p>A string representing a job error.</p>
   * @public
   */
  rawError?: string | undefined;

  /**
   * <p>Properties of a conversion job</p>
   * @public
   */
  conversionProperties?: ConversionProperties | undefined;

  /**
   * <p>Properties of resource related to a job event.</p>
   * @public
   */
  eventResourceData?: EventResourceData | undefined;
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
  logDateTime?: string | undefined;

  /**
   * <p>The event represents the type of a log.</p>
   * @public
   */
  event?: JobLogEvent | undefined;

  /**
   * <p>Metadata associated with a Job log.</p>
   * @public
   */
  eventData?: JobLogEventData | undefined;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * <p>An array of Job log items.</p>
   * @public
   */
  items?: JobLog[] | undefined;

  /**
   * <p>The token of the next Job log items to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  jobIDs?: string[] | undefined;

  /**
   * <p>The start date in a date range query.</p>
   * @public
   */
  fromDate?: string | undefined;

  /**
   * <p>The end date in a date range query.</p>
   * @public
   */
  toDate?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>A set of filters by which to return Jobs.</p>
   * @public
   */
  filters?: DescribeJobsRequestFilters | undefined;

  /**
   * <p>Maximum number of Jobs to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Job to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>An array of Jobs.</p>
   * @public
   */
  items?: Job[] | undefined;

  /**
   * <p>The token of the next Job to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   * @public
   */
  launchConfigurationTemplateIDs?: string[] | undefined;

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  items?: LaunchConfigurationTemplate[] | undefined;

  /**
   * <p>The token of the next Launch Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  recoveryInstanceIDs?: string[] | undefined;

  /**
   * <p>An array of Source Server IDs for which associated Recovery Instances should be returned.</p>
   * @public
   */
  sourceServerIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesRequest {
  /**
   * <p>A set of filters by which to return Recovery Instances.</p>
   * @public
   */
  filters?: DescribeRecoveryInstancesRequestFilters | undefined;

  /**
   * <p>Maximum number of Recovery Instances to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  error?: FailbackReplicationError | undefined;

  /**
   * <p>Error in data replication.</p>
   * @public
   */
  rawError?: string | undefined;
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
  name?: RecoveryInstanceDataReplicationInitiationStepName | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: RecoveryInstanceDataReplicationInitiationStepStatus | undefined;
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
  startDateTime?: string | undefined;

  /**
   * <p>The steps of the current attempt to initiate data replication.</p>
   * @public
   */
  steps?: RecoveryInstanceDataReplicationInitiationStep[] | undefined;
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
  deviceName?: string | undefined;

  /**
   * <p>The total amount of data to be replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number | undefined;

  /**
   * <p>The amount of data replicated so far in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number | undefined;

  /**
   * <p>The amount of data to be rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number | undefined;

  /**
   * <p>The size of the replication backlog in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number | undefined;
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
  lagDuration?: string | undefined;

  /**
   * <p>An estimate of when the data replication will be completed.</p>
   * @public
   */
  etaDateTime?: string | undefined;

  /**
   * <p>The disks that should be replicated.</p>
   * @public
   */
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[] | undefined;

  /**
   * <p>The state of the data replication.</p>
   * @public
   */
  dataReplicationState?: RecoveryInstanceDataReplicationState | undefined;

  /**
   * <p>Information about whether the data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation | undefined;

  /**
   * <p>Information about Data Replication</p>
   * @public
   */
  dataReplicationError?: RecoveryInstanceDataReplicationError | undefined;

  /**
   * <p>AWS Availability zone into which data is being replicated.</p>
   * @public
   */
  stagingAvailabilityZone?: string | undefined;

  /**
   * <p>The ARN of the staging Outpost</p>
   * @public
   */
  stagingOutpostArn?: string | undefined;
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
  failbackClientID?: string | undefined;

  /**
   * <p>The Job ID of the last failback log for this Recovery Instance.</p>
   * @public
   */
  failbackJobID?: string | undefined;

  /**
   * <p>The date and time that the failback initiation started.</p>
   * @public
   */
  failbackInitiationTime?: string | undefined;

  /**
   * <p>The state of the failback process that this Recovery Instance is in.</p>
   * @public
   */
  state?: FailbackState | undefined;

  /**
   * <p>The date and time the agent on the Recovery Instance was last seen by the service.</p>
   * @public
   */
  agentLastSeenByServiceDateTime?: string | undefined;

  /**
   * <p>The date and time that the failback client was last seen by the service.</p>
   * @public
   */
  failbackClientLastSeenByServiceDateTime?: string | undefined;

  /**
   * <p>Whether we are failing back to the original Source Server for this Recovery Instance.</p>
   * @public
   */
  failbackToOriginalServer?: boolean | undefined;

  /**
   * <p>The date and time of the first byte that was replicated from the Recovery Instance.</p>
   * @public
   */
  firstByteDateTime?: string | undefined;

  /**
   * <p>The amount of time that the Recovery Instance has been replicating for.</p>
   * @public
   */
  elapsedReplicationDuration?: string | undefined;

  /**
   * <p>The launch type (Recovery / Drill) of the last launch for the failback replication of this recovery instance.</p>
   * @public
   */
  failbackLaunchType?: FailbackLaunchType | undefined;
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
  internalDeviceName?: string | undefined;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number | undefined;

  /**
   * <p>The EBS Volume ID of this disk.</p>
   * @public
   */
  ebsVolumeID?: string | undefined;
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
  lastUpdatedDateTime?: string | undefined;

  /**
   * <p>Hints used to uniquely identify a machine.</p>
   * @public
   */
  identificationHints?: IdentificationHints | undefined;

  /**
   * <p>An array of network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>An array of disks.</p>
   * @public
   */
  disks?: RecoveryInstanceDisk[] | undefined;

  /**
   * <p>An array of CPUs.</p>
   * @public
   */
  cpus?: CPU[] | undefined;

  /**
   * <p>The amount of RAM in bytes.</p>
   * @public
   */
  ramBytes?: number | undefined;

  /**
   * <p>Operating system.</p>
   * @public
   */
  os?: OS | undefined;
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
  ec2InstanceID?: string | undefined;

  /**
   * <p>The state of the EC2 instance for this Recovery Instance.</p>
   * @public
   */
  ec2InstanceState?: EC2InstanceState | undefined;

  /**
   * <p>The ID of the Job that created the Recovery Instance.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The ID of the Recovery Instance.</p>
   * @public
   */
  recoveryInstanceID?: string | undefined;

  /**
   * <p>The Source Server ID that this Recovery Instance is associated with.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>The ARN of the Recovery Instance.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>An array of tags that are associated with the Recovery Instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object representing failback related information of the Recovery Instance.</p>
   * @public
   */
  failback?: RecoveryInstanceFailback | undefined;

  /**
   * <p>The Data Replication Info of the Recovery Instance.</p>
   * @public
   */
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo | undefined;

  /**
   * <p>Properties of the Recovery Instance machine.</p>
   * @public
   */
  recoveryInstanceProperties?: RecoveryInstanceProperties | undefined;

  /**
   * <p>The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.</p>
   * @public
   */
  pointInTimeSnapshotDateTime?: string | undefined;

  /**
   * <p>Whether this Recovery Instance was created for a drill or for an actual Recovery event.</p>
   * @public
   */
  isDrill?: boolean | undefined;

  /**
   * <p>Environment (On Premises / AWS) of the instance that the recovery instance originated from.</p>
   * @public
   */
  originEnvironment?: OriginEnvironment | undefined;

  /**
   * <p>AWS availability zone associated with the recovery instance.</p>
   * @public
   */
  originAvailabilityZone?: string | undefined;

  /**
   * <p>The version of the DRS agent installed on the recovery instance</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>The ARN of the source Outpost</p>
   * @public
   */
  sourceOutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryInstancesResponse {
  /**
   * <p>The token of the next Recovery Instance to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of Recovery Instances.</p>
   * @public
   */
  items?: RecoveryInstance[] | undefined;
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
  fromDateTime?: string | undefined;

  /**
   * <p>The end date in a date range query.</p>
   * @public
   */
  toDateTime?: string | undefined;
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
  filters?: DescribeRecoverySnapshotsRequestFilters | undefined;

  /**
   * <p>The sorted ordering by which to return Recovery Snapshots.</p>
   * @public
   */
  order?: RecoverySnapshotsOrder | undefined;

  /**
   * <p>Maximum number of Recovery Snapshots to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  timestamp?: string | undefined;

  /**
   * <p>A list of EBS snapshots.</p>
   * @public
   */
  ebsSnapshots?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecoverySnapshotsResponse {
  /**
   * <p>An array of Recovery Snapshots.</p>
   * @public
   */
  items?: RecoverySnapshot[] | undefined;

  /**
   * <p>The token of the next Recovery Snapshot to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.</p>
   * @public
   */
  replicationConfigurationTemplateIDs?: string[] | undefined;

  /**
   * <p>Maximum number of Replication Configuration Templates to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>An array of Replication Configuration Templates.</p>
   * @public
   */
  items?: ReplicationConfigurationTemplate[] | undefined;

  /**
   * <p>The token of the next Replication Configuration Template to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  sourceNetworkIDs?: string[] | undefined;

  /**
   * <p>Filter Source Networks by account ID containing the protected VPCs.</p>
   * @public
   */
  originAccountID?: string | undefined;

  /**
   * <p>Filter Source Networks by the region containing the protected VPCs.</p>
   * @public
   */
  originRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceNetworksRequest {
  /**
   * <p>A set of filters by which to return Source Networks.</p>
   * @public
   */
  filters?: DescribeSourceNetworksRequestFilters | undefined;

  /**
   * <p>Maximum number of Source Networks to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  apiCallDateTime?: Date | undefined;

  /**
   * <p>The ID of the Job that was used to last recover the Source Network.</p>
   * @public
   */
  jobID?: string | undefined;

  /**
   * <p>The status of the last recovery status of this Source Network.</p>
   * @public
   */
  lastRecoveryResult?: RecoveryResult | undefined;
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
  sourceNetworkID?: string | undefined;

  /**
   * <p>VPC ID protected by the Source Network.</p>
   * @public
   */
  sourceVpcID?: string | undefined;

  /**
   * <p>The ARN of the Source Network.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A list of tags associated with the Source Network.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Status of Source Network Replication. Possible values:
   *             (a) STOPPED - Source Network is not replicating.
   *             (b) IN_PROGRESS - Source Network is being replicated.
   *             (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes.
   *             (d) ERROR - Source Network replication has failed</p>
   * @public
   */
  replicationStatus?: ReplicationStatus | undefined;

  /**
   * <p>Error details in case Source Network replication status is ERROR.</p>
   * @public
   */
  replicationStatusDetails?: string | undefined;

  /**
   * <p>CloudFormation stack name that was deployed for recovering the Source Network.</p>
   * @public
   */
  cfnStackName?: string | undefined;

  /**
   * <p>Region containing the VPC protected by the Source Network.</p>
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * <p>Account ID containing the VPC protected by the Source Network.</p>
   * @public
   */
  sourceAccountID?: string | undefined;

  /**
   * <p>An object containing information regarding the last recovery of the Source Network.</p>
   * @public
   */
  lastRecovery?: RecoveryLifeCycle | undefined;

  /**
   * <p>ID of the recovered VPC following Source Network recovery.</p>
   * @public
   */
  launchedVpcID?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceNetworksResponse {
  /**
   * <p>An array of Source Networks.</p>
   * @public
   */
  items?: SourceNetwork[] | undefined;

  /**
   * <p>The token of the next Source Networks to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  sourceServerIDs?: string[] | undefined;

  /**
   * <p>An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.</p>
   * @public
   */
  hardwareId?: string | undefined;

  /**
   * <p>An array of staging account IDs that extended source servers belong to. An empty array means all source servers will be shown.</p>
   * @public
   */
  stagingAccountIDs?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * <p>A set of filters by which to return Source Servers.</p>
   * @public
   */
  filters?: DescribeSourceServersRequestFilters | undefined;

  /**
   * <p>Maximum number of Source Servers to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>An array of Source Servers.</p>
   * @public
   */
  items?: SourceServer[] | undefined;

  /**
   * <p>The token of the next Source Server to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Copy private IP.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>Licensing.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>S3 bucket ARN to export Source Network templates.</p>
   * @public
   */
  exportBucketArn?: string | undefined;

  /**
   * <p>Whether we want to activate post-launch actions.</p>
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * <p>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</p>
   * @public
   */
  launchIntoSourceInstance?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateResponse {
  /**
   * <p>Updated Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplate?: LaunchConfigurationTemplate | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  hostname?: string | undefined;

  /**
   * <p>The ARN of the source server.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A list of tags associated with the staging source server.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExtensibleSourceServersResponse {
  /**
   * <p>A list of source servers on a staging Account that are extensible.</p>
   * @public
   */
  items?: StagingSourceServer[] | undefined;

  /**
   * <p>The token of the next extensible source server to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  actionIds?: string[] | undefined;
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
  filters?: LaunchActionsRequestFilters | undefined;

  /**
   * <p>Maximum amount of items to return when listing resource launch actions.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token to use when listing resource launch actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchActionsResponse {
  /**
   * <p>List of resource launch actions.</p>
   * @public
   */
  items?: LaunchAction[] | undefined;

  /**
   * <p>Next token returned when listing resource launch actions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStagingAccountsRequest {
  /**
   * <p>The maximum number of staging Accounts to retrieve.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStagingAccountsResponse {
  /**
   * <p>An array of staging AWS Accounts.</p>
   * @public
   */
  accounts?: Account[] | undefined;

  /**
   * <p>The token of the next staging Account to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  tags?: Record<string, string> | undefined;
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
  parameters?: Record<string, LaunchActionParameter> | undefined;

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
  resourceId?: string | undefined;

  /**
   * <p>Launch action Id.</p>
   * @public
   */
  actionId?: string | undefined;

  /**
   * <p>Launch action code.</p>
   * @public
   */
  actionCode?: string | undefined;

  /**
   * <p>Launch action type.</p>
   * @public
   */
  type?: LaunchActionType | undefined;

  /**
   * <p>Launch action name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Whether the launch action is active.</p>
   * @public
   */
  active?: boolean | undefined;

  /**
   * <p>Launch action order.</p>
   * @public
   */
  order?: number | undefined;

  /**
   * <p>Launch action version.</p>
   * @public
   */
  actionVersion?: string | undefined;

  /**
   * <p>Whether the launch will not be marked as failed if this action fails.</p>
   * @public
   */
  optional?: boolean | undefined;

  /**
   * <p>Launch action parameters.</p>
   * @public
   */
  parameters?: Record<string, LaunchActionParameter> | undefined;

  /**
   * <p>Launch action description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Launch action category.</p>
   * @public
   */
  category?: LaunchActionCategory | undefined;
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
  name?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   * @public
   */
  usePrivateIP?: boolean | undefined;
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
  reversedDirectionSourceServerArn?: string | undefined;
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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartFailbackLaunchResponse {
  /**
   * <p>The failback launch Job.</p>
   * @public
   */
  job?: Job | undefined;
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
  job?: Job | undefined;
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
  name?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>Whether to use Private IP for the failback replication of the Recovery Instance.</p>
   * @public
   */
  usePrivateIP?: boolean | undefined;
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
  arn?: string | undefined;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;
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
  s3DestinationUrl?: string | undefined;
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
  cfnStackName?: string | undefined;
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
  deployAsNew?: boolean | undefined;

  /**
   * <p>The tags to be associated with the Source Network recovery Job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSourceNetworkRecoveryResponse {
  /**
   * <p>The Source Network recovery Job.</p>
   * @public
   */
  job?: Job | undefined;
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
  sourceNetwork?: SourceNetwork | undefined;
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
  sourceNetwork?: SourceNetwork | undefined;
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
  launchIntoEC2InstanceID?: string | undefined;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * <p>The ID of the Source Server for this launch configuration.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>The name of the launch configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The EC2 launch template ID of this launch configuration.</p>
   * @public
   */
  ec2LaunchTemplateID?: string | undefined;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Whether we want to activate post-launch actions for the Source Server.</p>
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * <p>Launch into existing instance properties.</p>
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties | undefined;
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
  deviceName?: string | undefined;

  /**
   * <p>Whether to boot from this disk or not.</p>
   * @public
   */
  isBootDisk?: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;

  /**
   * <p>The requested number of I/O operations per second (IOPS).</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.</p>
   * @public
   */
  throughput?: number | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication when <code>stagingDiskType</code> is set to Auto. This is a read-only field.</p>
   * @public
   */
  optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | undefined;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>The ID of the Source Server for this Replication Configuration.</p>
   * @public
   */
  sourceServerID?: string | undefined;

  /**
   * <p>The name of the Replication Configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;
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
  recoverySnapshotID?: string | undefined;
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
  isDrill?: boolean | undefined;

  /**
   * <p>The tags to be associated with the Recovery Job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartRecoveryResponse {
  /**
   * <p>The Recovery Job.</p>
   * @public
   */
  job?: Job | undefined;
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
  sourceServer?: SourceServer | undefined;
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
  sourceServer?: SourceServer | undefined;
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
  name?: string | undefined;

  /**
   * <p>The state of the Recovery Instance in EC2 after the recovery operation.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition | undefined;

  /**
   * <p>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | undefined;

  /**
   * <p>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</p>
   * @public
   */
  copyPrivateIp?: boolean | undefined;

  /**
   * <p>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</p>
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * <p>The licensing configuration to be used for this launch configuration.</p>
   * @public
   */
  licensing?: Licensing | undefined;

  /**
   * <p>Whether we want to enable post-launch actions for the Source Server.</p>
   * @public
   */
  postLaunchEnabled?: boolean | undefined;

  /**
   * <p>Launch into existing instance properties.</p>
   * @public
   */
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties | undefined;
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
  name?: string | undefined;

  /**
   * <p>The subnet to be used by the replication staging area.</p>
   * @public
   */
  stagingAreaSubnetId?: string | undefined;

  /**
   * <p>Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean | undefined;

  /**
   * <p>The security group IDs that will be used by the replication server.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[] | undefined;

  /**
   * <p>The instance type to be used for the replication server.</p>
   * @public
   */
  replicationServerInstanceType?: string | undefined;

  /**
   * <p>Whether to use a dedicated Replication Server in the replication staging area.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean | undefined;

  /**
   * <p>The Staging Disk EBS volume type to be used during replication.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>The configuration of the disks of the Source Server to be replicated.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined;

  /**
   * <p>The type of EBS encryption to be used during replication.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>The ARN of the EBS encryption key to be used during replication.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string | undefined;

  /**
   * <p>Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.</p>
   * @public
   */
  bandwidthThrottling?: number | undefined;

  /**
   * <p>The data plane routing mechanism that will be used for replication.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Whether to create a Public IP for the Recovery Instance by default.</p>
   * @public
   */
  createPublicIP?: boolean | undefined;

  /**
   * <p>A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string> | undefined;

  /**
   * <p>The Point in time (PIT) policy to manage snapshots taken during replication.</p>
   * @public
   */
  pitPolicy?: PITPolicyRule[] | undefined;

  /**
   * <p>Whether to allow the AWS replication agent to automatically replicate newly added disks.</p>
   * @public
   */
  autoReplicateNewDisks?: boolean | undefined;
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

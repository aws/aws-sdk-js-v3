// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AcceleratorName,
  AcceleratorType,
  AutoScalingMode,
  AutoScalingStatus,
  BatchGetJobErrorCode,
  BatchGetSessionActionErrorCode,
  BatchGetSessionErrorCode,
  BatchGetStepErrorCode,
  BatchGetTaskErrorCode,
  BatchGetWorkerErrorCode,
  BatchUpdateJobErrorCode,
  BatchUpdateTaskErrorCode,
  BudgetActionType,
  BudgetStatus,
  ComparisonOperator,
  CompletedStatus,
  CpuArchitectureType,
  CreateJobTargetTaskRunStatus,
  CustomerManagedFleetOperatingSystemFamily,
  DeadlinePrincipalType,
  DefaultQueueBudgetAction,
  DesiredWorkerStatus,
  EbsVolumeType,
  Ec2MarketType,
  EnvironmentTemplateType,
  FileSystemLocationType,
  FleetSoftwareAddOnName,
  FleetStatus,
  JobAttachmentsFileSystem,
  JobEntityErrorCode,
  JobLifecycleStatus,
  JobTargetTaskRunStatus,
  JobTemplateType,
  MembershipLevel,
  PathFormat,
  QueueBlockedReason,
  QueueStatus,
  RangeConstraint,
  RunAs,
  ServiceManagedFleetOperatingSystemFamily,
  SessionActionStatus,
  SessionLifecycleStatus,
  SessionLifecycleTargetStatus,
  StepLifecycleStatus,
  StepParameterType,
  StepTargetTaskRunStatus,
  StorageProfileOperatingSystemFamily,
  TagPropagationMode,
  TaskRunStatus,
  TaskTargetRunStatus,
  UpdatedWorkerStatus,
  UpdateJobLifecycleStatus,
  VolumeState,
  WorkerStatus,
} from "./enums";

/**
 * Defines the maximum and minimum number of GPU accelerators required for a worker instance..
 * @public
 */
export interface AcceleratorCountRange {
  /**
   * The minimum number of GPU accelerators in the worker host.
   * @public
   */
  min: number | undefined;

  /**
   * The maximum number of GPU accelerators in the worker host.
   * @public
   */
  max?: number | undefined;
}

/**
 * Describes a specific GPU accelerator required for an Amazon Elastic Compute Cloud worker host.
 * @public
 */
export interface AcceleratorSelection {
  /**
   * <p>The name of the chip used by the GPU accelerator.</p> <p>The available GPU accelerators are:</p> <ul> <li> <p> <code>t4</code> - NVIDIA T4 Tensor Core GPU (16 GiB memory)</p> </li> <li> <p> <code>a10g</code> - NVIDIA A10G Tensor Core GPU (24 GiB memory)</p> </li> <li> <p> <code>l4</code> - NVIDIA L4 Tensor Core GPU (24 GiB memory)</p> </li> <li> <p> <code>l40s</code> - NVIDIA L40S Tensor Core GPU (48 GiB memory)</p> </li> <li> <p> <code>rtx-pro-server-6000</code> - NVIDIA RTX PRO Server 6000 GPU (96 GiB memory)</p> </li> </ul>
   * @public
   */
  name: AcceleratorName | undefined;

  /**
   * <p>Specifies the runtime driver to use for the GPU accelerator. You must use the same runtime for all GPUs in a fleet. </p> <p>You can choose from the following runtimes:</p> <ul> <li> <p> <code>latest</code> - Use the latest runtime available for the chip. If you specify <code>latest</code> and a new version of the runtime is released, the new version of the runtime is used.</p> </li> <li> <p> <code>grid:r580</code> - <a href="https://docs.nvidia.com/vgpu/19.0/index.html">NVIDIA vGPU software 19</a> </p> </li> </ul> <p>If you don't specify a runtime, Amazon Web Services Deadline Cloud uses <code>latest</code> as the default. However, if you have multiple accelerators and specify <code>latest</code> for some and leave others blank, Amazon Web Services Deadline Cloud raises an exception.</p> <important> <p>All accelerator types support <code>grid:r580</code>.</p> <p>All accelerators in a fleet must use the same runtime version. You cannot mix different runtime versions within a single fleet.</p> </important> <note> <p>When you specify <code>latest</code>, it resolves to <code>grid:r580</code> for all currently supported accelerators.</p> </note>
   * @public
   */
  runtime?: string | undefined;
}

/**
 * <p>Provides information about the GPU accelerators used for jobs processed by a fleet.</p> <important> <p>Accelerator capabilities cannot be used with wait-and-save fleets. If you specify accelerator capabilities, you must use either spot or on-demand instance market options.</p> </important> <note> <p>Each accelerator type maps to specific EC2 instance families:</p> <ul> <li> <p> <code>t4</code>: Uses G4dn instance family</p> </li> <li> <p> <code>a10g</code>: Uses G5 instance family</p> </li> <li> <p> <code>l4</code>: Uses G6 and Gr6 instance families</p> </li> <li> <p> <code>l40s</code>: Uses G6e instance family</p> </li> <li> <p> <code>rtx-pro-server-6000</code>: Uses G7e instance family</p> </li> </ul> </note>
 * @public
 */
export interface AcceleratorCapabilities {
  /**
   * <p>A list of accelerator capabilities requested for this fleet. Only Amazon Elastic Compute Cloud instances that provide these capabilities will be used. For example, if you specify both L4 and T4 chips, Amazon Web Services Deadline Cloud will use Amazon EC2 instances that have either the L4 or the T4 chip installed.</p> <important> <ul> <li> <p>You must specify at least one accelerator selection.</p> </li> <li> <p>You cannot specify the same accelerator name multiple times in the selections list.</p> </li> <li> <p>All accelerators in the selections must use the same runtime version.</p> </li> </ul> </important>
   * @public
   */
  selections: AcceleratorSelection[] | undefined;

  /**
   * <p>The number of GPU accelerators specified for worker hosts in this fleet.</p> <important> <p>You must specify either <code>acceleratorCapabilities.count.max</code> or <code>allowedInstanceTypes</code> when using accelerator capabilities. If you don't specify a maximum count, Amazon Web Services Deadline Cloud uses the instance types you specify in <code>allowedInstanceTypes</code> to determine the maximum number of accelerators.</p> </important>
   * @public
   */
  count?: AcceleratorCountRange | undefined;
}

/**
 * Defines the maximum and minimum amount of memory, in MiB, to use for the accelerator.
 * @public
 */
export interface AcceleratorTotalMemoryMiBRange {
  /**
   * The minimum amount of memory to use for the accelerator, measured in MiB.
   * @public
   */
  min: number | undefined;

  /**
   * The maximum amount of memory to use for the accelerator, measured in MiB.
   * @public
   */
  max?: number | undefined;
}

/**
 * Provides information about the number of resources used.
 * @public
 */
export interface AcquiredLimit {
  /**
   * The unique identifier of the limit.
   * @public
   */
  limitId: string | undefined;

  /**
   * The number of limit resources used.
   * @public
   */
  count: number | undefined;
}

/**
 * The assigned starting environment for a worker during session.
 * @public
 */
export interface AssignedEnvironmentEnterSessionActionDefinition {
  /**
   * The environment ID of the assigned environment at the start of a session.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * The assigned environment when a worker exits a session.
 * @public
 */
export interface AssignedEnvironmentExitSessionActionDefinition {
  /**
   * The environment ID of the assigned environment when exiting a session.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * Log configuration details.
 * @public
 */
export interface LogConfiguration {
  /**
   * The log drivers for worker related logs.
   * @public
   */
  logDriver: string | undefined;

  /**
   * The options for a log driver.
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * The parameters for the log configuration.
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The log configuration error details.
   * @public
   */
  error?: string | undefined;
}

/**
 * The assigned session action definition for syncing input job attachments.
 * @public
 */
export interface AssignedSyncInputJobAttachmentsSessionActionDefinition {
  /**
   * The step ID for the assigned sync input job attachments session action.
   * @public
   */
  stepId?: string | undefined;
}

/**
 * The data types for the task parameters.
 * @public
 */
export type TaskParameterValue =
  | TaskParameterValue.ChunkIntMember
  | TaskParameterValue.FloatMember
  | TaskParameterValue.IntMember
  | TaskParameterValue.PathMember
  | TaskParameterValue.StringMember
  | TaskParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace TaskParameterValue {
  /**
   * A signed integer represented as a string.
   * @public
   */
  export interface IntMember {
    int: string;
    float?: never;
    string?: never;
    path?: never;
    chunkInt?: never;
    $unknown?: never;
  }

  /**
   * A double precision IEEE-754 floating point number represented as a string.
   * @public
   */
  export interface FloatMember {
    int?: never;
    float: string;
    string?: never;
    path?: never;
    chunkInt?: never;
    $unknown?: never;
  }

  /**
   * A UTF-8 string.
   * @public
   */
  export interface StringMember {
    int?: never;
    float?: never;
    string: string;
    path?: never;
    chunkInt?: never;
    $unknown?: never;
  }

  /**
   * A file system path represented as a string.
   * @public
   */
  export interface PathMember {
    int?: never;
    float?: never;
    string?: never;
    path: string;
    chunkInt?: never;
    $unknown?: never;
  }

  /**
   * A range (for example 1-10) or selection of specific (for example 1,3,7,8,10) integers represented as a string.
   * @public
   */
  export interface ChunkIntMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    chunkInt: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    chunkInt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    int: (value: string) => T;
    float: (value: string) => T;
    string: (value: string) => T;
    path: (value: string) => T;
    chunkInt: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The specific task, step, and parameters to include.
 * @public
 */
export interface AssignedTaskRunSessionActionDefinition {
  /**
   * The task ID.
   * @public
   */
  taskId?: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The parameters to include.
   * @public
   */
  parameters: Record<string, TaskParameterValue> | undefined;
}

/**
 * The definition of the assigned session action.
 * @public
 */
export type AssignedSessionActionDefinition =
  | AssignedSessionActionDefinition.EnvEnterMember
  | AssignedSessionActionDefinition.EnvExitMember
  | AssignedSessionActionDefinition.SyncInputJobAttachmentsMember
  | AssignedSessionActionDefinition.TaskRunMember
  | AssignedSessionActionDefinition.$UnknownMember;

/**
 * @public
 */
export namespace AssignedSessionActionDefinition {
  /**
   * The environment a session starts on.
   * @public
   */
  export interface EnvEnterMember {
    envEnter: AssignedEnvironmentEnterSessionActionDefinition;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The environment a session exits from.
   * @public
   */
  export interface EnvExitMember {
    envEnter?: never;
    envExit: AssignedEnvironmentExitSessionActionDefinition;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The task run.
   * @public
   */
  export interface TaskRunMember {
    envEnter?: never;
    envExit?: never;
    taskRun: AssignedTaskRunSessionActionDefinition;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The job attachments to sync for the assigned session action.
   * @public
   */
  export interface SyncInputJobAttachmentsMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments: AssignedSyncInputJobAttachmentsSessionActionDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    envEnter: (value: AssignedEnvironmentEnterSessionActionDefinition) => T;
    envExit: (value: AssignedEnvironmentExitSessionActionDefinition) => T;
    taskRun: (value: AssignedTaskRunSessionActionDefinition) => T;
    syncInputJobAttachments: (value: AssignedSyncInputJobAttachmentsSessionActionDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The action for a session defined by the session action ID.
 * @public
 */
export interface AssignedSessionAction {
  /**
   * The session action ID for the assigned session.
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * The definition of the assigned session action.
   * @public
   */
  definition: AssignedSessionActionDefinition | undefined;
}

/**
 * The assigned session for the worker.
 * @public
 */
export interface AssignedSession {
  /**
   * The queue ID of the assigned session.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the assigned session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session actions to apply to the assigned session.
   * @public
   */
  sessionActions: AssignedSessionAction[] | undefined;

  /**
   * The log configuration for the worker's assigned session.
   * @public
   */
  logConfiguration: LogConfiguration | undefined;

  /**
   * Key-value hints that the service provides to guide how the session runs. This value is used by the worker agent.
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFarmRequest {
  /**
   * The ID of the farm to associate with the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The principal type of the member to associate with the farm.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The identity store ID of the member to associate with the farm.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The principal's membership level for the associated farm.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * The member's principal ID to associate with the farm.
   * @public
   */
  principalId: string | undefined;

  /**
   * The Region of the IAM Identity Center instance. If not provided, the service defaults to the Region of the farm.
   * @public
   */
  identityCenterRegion?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFarmResponse {}

/**
 * The details of a validation exception.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation exception.
   * @public
   */
  name: string | undefined;

  /**
   * The error message for the validation exception.
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFleetRequest {
  /**
   * The farm ID of the fleet to associate with the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The ID of the fleet to associate with a member.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The member's principal type to associate with the fleet.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The member's identity store ID to associate with the fleet.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The principal's membership level for the associated fleet.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * The member's principal ID to associate with a fleet.
   * @public
   */
  principalId: string | undefined;

  /**
   * The Region of the IAM Identity Center instance. If not provided, the service defaults to the Region of the farm.
   * @public
   */
  identityCenterRegion?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFleetResponse {}

/**
 * @public
 */
export interface AssociateMemberToJobRequest {
  /**
   * The farm ID of the job to associate with the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to associate to the member.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to associate with the member.
   * @public
   */
  jobId: string | undefined;

  /**
   * The member's principal type to associate with the job.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The member's identity store ID to associate with the job.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The principal's membership level for the associated job.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * The member's principal ID to associate with the job.
   * @public
   */
  principalId: string | undefined;

  /**
   * The Region of the IAM Identity Center instance. If not provided, the service defaults to the Region of the farm.
   * @public
   */
  identityCenterRegion?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToJobResponse {}

/**
 * @public
 */
export interface AssociateMemberToQueueRequest {
  /**
   * The farm ID of the queue to associate with the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The ID of the queue to associate to the member.
   * @public
   */
  queueId: string | undefined;

  /**
   * The member's principal type to associate with the queue.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The member's identity store ID to associate with the queue.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The principal's membership level for the associated queue.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * The member's principal ID to associate with the queue.
   * @public
   */
  principalId: string | undefined;

  /**
   * The Region of the IAM Identity Center instance. If not provided, the service defaults to the Region of the farm.
   * @public
   */
  identityCenterRegion?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToQueueResponse {}

/**
 * @public
 */
export interface AssumeFleetRoleForReadRequest {
  /**
   * The farm ID for the fleet's farm.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * The Identity and Access Management credentials.
 * @public
 */
export interface AwsCredentials {
  /**
   * The IAM access key ID.
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The IAM secret access key.
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * The IAM session token
   * @public
   */
  sessionToken: string | undefined;

  /**
   * The expiration date and time of the IAM credentials.
   * @public
   */
  expiration: Date | undefined;
}

/**
 * @public
 */
export interface AssumeFleetRoleForReadResponse {
  /**
   * The credentials for the fleet role.
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeFleetRoleForWorkerRequest {
  /**
   * The farm ID for the fleet's farm.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID that contains the worker.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The ID of the worker assuming the fleet role.
   * @public
   */
  workerId: string | undefined;
}

/**
 * @public
 */
export interface AssumeFleetRoleForWorkerResponse {
  /**
   * The credentials for the worker.
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForReadRequest {
  /**
   * The farm ID of the farm containing the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForReadResponse {
  /**
   * The credentials for the queue role.
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForUserRequest {
  /**
   * The farm ID of the queue that the user assumes the role for.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue that the user assumes the role for.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForUserResponse {
  /**
   * The credentials for the queue role that a user has access to.
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForWorkerRequest {
  /**
   * The farm ID of the worker assuming the queue role.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker assuming the queue role.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID of the worker assuming the queue role.
   * @public
   */
  workerId: string | undefined;

  /**
   * The queue ID of the worker assuming the queue role.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForWorkerResponse {
  /**
   * The Amazon Web Services credentials for the role that the worker is assuming.
   * @public
   */
  credentials?: AwsCredentials | undefined;
}

/**
 * The details of the manifest that links a job's source information.
 * @public
 */
export interface ManifestProperties {
  /**
   * The file system location name.
   * @public
   */
  fileSystemLocationName?: string | undefined;

  /**
   * The file's root path.
   * @public
   */
  rootPath: string | undefined;

  /**
   * The format of the root path.
   * @public
   */
  rootPathFormat: PathFormat | undefined;

  /**
   * The file path relative to the directory.
   * @public
   */
  outputRelativeDirectories?: string[] | undefined;

  /**
   * The file path.
   * @public
   */
  inputManifestPath?: string | undefined;

  /**
   * The hash value of the file.
   * @public
   */
  inputManifestHash?: string | undefined;
}

/**
 * The job attachments.
 * @public
 */
export interface Attachments {
  /**
   * The manifest properties for the attachments.
   * @public
   */
  manifests: ManifestProperties[] | undefined;

  /**
   * The file system location for the attachments.
   * @public
   */
  fileSystem?: JobAttachmentsFileSystem | undefined;
}

/**
 * The identifiers for a job.
 * @public
 */
export interface BatchGetJobIdentifier {
  /**
   * The farm ID of the job.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetJobRequest {
  /**
   * The list of job identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetJobIdentifier[] | undefined;
}

/**
 * The error details for a job that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetJobError {
  /**
   * The farm ID of the job that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job that could not be retrieved.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the job that could not be retrieved.
   * @public
   */
  jobId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetJobErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The details of job parameters.
 * @public
 */
export type JobParameter =
  | JobParameter.BoolMember
  | JobParameter.BoolListMember
  | JobParameter.FloatMember
  | JobParameter.FloatListMember
  | JobParameter.IntMember
  | JobParameter.IntListMember
  | JobParameter.IntListListMember
  | JobParameter.PathMember
  | JobParameter.PathListMember
  | JobParameter.RangeExprMember
  | JobParameter.StringMember
  | JobParameter.StringListMember
  | JobParameter.$UnknownMember;

/**
 * @public
 */
export namespace JobParameter {
  /**
   * A signed integer represented as a string.
   * @public
   */
  export interface IntMember {
    int: string;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A double precision IEEE-754 floating point number represented as a string.
   * @public
   */
  export interface FloatMember {
    int?: never;
    float: string;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A UTF-8 string.
   * @public
   */
  export interface StringMember {
    int?: never;
    float?: never;
    string: string;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A file system path represented as a string.
   * @public
   */
  export interface PathMember {
    int?: never;
    float?: never;
    string?: never;
    path: string;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A boolean value represented as a string. Accepted values are <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, <code>1</code>, and <code>0</code>, case-insensitive.
   * @public
   */
  export interface BoolMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool: string;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * An Open Job Description range expression represented as a string, such as <code>1-10:2</code>.
   * @public
   */
  export interface RangeExprMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr: string;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of UTF-8 strings.
   * @public
   */
  export interface StringListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList: string[];
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of file system paths, each represented as a string.
   * @public
   */
  export interface PathListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList: string[];
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of signed integers, each represented as a string.
   * @public
   */
  export interface IntListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList: string[];
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of double precision IEEE-754 floating point numbers, each represented as a string.
   * @public
   */
  export interface FloatListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList: string[];
    boolList?: never;
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of boolean values, each represented as a string.
   * @public
   */
  export interface BoolListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList: string[];
    intListList?: never;
    $unknown?: never;
  }

  /**
   * A list of lists of signed integers, each represented as a string.
   * @public
   */
  export interface IntListListMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList: string[][];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    int?: never;
    float?: never;
    string?: never;
    path?: never;
    bool?: never;
    rangeExpr?: never;
    stringList?: never;
    pathList?: never;
    intList?: never;
    floatList?: never;
    boolList?: never;
    intListList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    int: (value: string) => T;
    float: (value: string) => T;
    string: (value: string) => T;
    path: (value: string) => T;
    bool: (value: string) => T;
    rangeExpr: (value: string) => T;
    stringList: (value: string[]) => T;
    pathList: (value: string[]) => T;
    intList: (value: string[]) => T;
    floatList: (value: string[]) => T;
    boolList: (value: string[]) => T;
    intListList: (value: string[][]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of a job returned in a batch get operation.
 * @public
 */
export interface BatchGetJobItem {
  /**
   * The farm ID of the job.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the job.
   * @public
   */
  name: string | undefined;

  /**
   * The life cycle status of the job.
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * A message that communicates the status of the life cycle.
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * The job priority.
   * @public
   */
  priority: number | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The task run status for the job.
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * The task status to start with on the job.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The number of tasks for each run status for the job.
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The number of times that tasks failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The storage profile ID associated with the job.
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries per failed tasks.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * The parameters for the job.
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * The attachments for the job.
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * The description of the job.
   * @public
   */
  description?: string | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job.
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The job ID for the source job.
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetJobResponse {
  /**
   * A list of jobs that were successfully retrieved.
   * @public
   */
  jobs: BatchGetJobItem[] | undefined;

  /**
   * A list of errors for jobs that could not be retrieved.
   * @public
   */
  errors: BatchGetJobError[] | undefined;
}

/**
 * The IDs of the job and environment.
 * @public
 */
export interface EnvironmentDetailsIdentifiers {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * Identifier details for job attachments.
 * @public
 */
export interface JobAttachmentDetailsIdentifiers {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;
}

/**
 * The identifiers for a job.
 * @public
 */
export interface JobDetailsIdentifiers {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;
}

/**
 * The details of identifiers for a step.
 * @public
 */
export interface StepDetailsIdentifiers {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;
}

/**
 * The details of a job entity identifier.
 * @public
 */
export type JobEntityIdentifiersUnion =
  | JobEntityIdentifiersUnion.EnvironmentDetailsMember
  | JobEntityIdentifiersUnion.JobAttachmentDetailsMember
  | JobEntityIdentifiersUnion.JobDetailsMember
  | JobEntityIdentifiersUnion.StepDetailsMember
  | JobEntityIdentifiersUnion.$UnknownMember;

/**
 * @public
 */
export namespace JobEntityIdentifiersUnion {
  /**
   * The job details.
   * @public
   */
  export interface JobDetailsMember {
    jobDetails: JobDetailsIdentifiers;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The job attachment details.
   * @public
   */
  export interface JobAttachmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails: JobAttachmentDetailsIdentifiers;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The step details.
   * @public
   */
  export interface StepDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails: StepDetailsIdentifiers;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The environment details.
   * @public
   */
  export interface EnvironmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails: EnvironmentDetailsIdentifiers;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    jobDetails: (value: JobDetailsIdentifiers) => T;
    jobAttachmentDetails: (value: JobAttachmentDetailsIdentifiers) => T;
    stepDetails: (value: StepDetailsIdentifiers) => T;
    environmentDetails: (value: EnvironmentDetailsIdentifiers) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface BatchGetJobEntityRequest {
  /**
   * The farm ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID of the worker containing the job details to get.
   * @public
   */
  workerId: string | undefined;

  /**
   * The job identifiers to include within the job entity batch details.
   * @public
   */
  identifiers: JobEntityIdentifiersUnion[] | undefined;
}

/**
 * The details of a specified environment.
 * @public
 */
export interface EnvironmentDetailsEntity {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The schema version in the environment.
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * The template used for the environment.
   * @public
   */
  template: __DocumentType | undefined;

  /**
   * The Open Job Description extensions that the environment uses. This value is used by the worker agent.
   * @public
   */
  extensions?: string[] | undefined;

  /**
   * The resolved symbol table for the environment's expressions, serialized as JSON. This value is used by the worker agent.
   * @public
   */
  resolvedSymbolTable?: string | undefined;
}

/**
 * The job attachments.
 * @public
 */
export interface JobAttachmentDetailsEntity {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The job attachments.
   * @public
   */
  attachments: Attachments | undefined;
}

/**
 * The job attachment settings returned to workers for a job. These are the Amazon S3 bucket name and the Amazon S3 prefix.
 * @public
 */
export interface JobDetailsJobAttachmentSettings {
  /**
   * The Amazon S3 bucket name.
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The root prefix.
   * @public
   */
  rootPrefix: string | undefined;
}

/**
 * The POSIX user.
 * @public
 */
export interface PosixUser {
  /**
   * The name of the POSIX user.
   * @public
   */
  user: string | undefined;

  /**
   * The name of the POSIX user's group.
   * @public
   */
  group: string | undefined;
}

/**
 * The Windows user details.
 * @public
 */
export interface WindowsUser {
  /**
   * The user.
   * @public
   */
  user: string | undefined;

  /**
   * The password ARN for the Windows user.
   * @public
   */
  passwordArn: string | undefined;
}

/**
 * Identifies the user for a job.
 * @public
 */
export interface JobRunAsUser {
  /**
   * The user and group that the jobs in the queue run as.
   * @public
   */
  posix?: PosixUser | undefined;

  /**
   * Identifies a Microsoft Windows user.
   * @public
   */
  windows?: WindowsUser | undefined;

  /**
   * Specifies whether the job should run using the queue's system user or if the job should run using the worker agent system user.
   * @public
   */
  runAs: RunAs | undefined;
}

/**
 * The details of a source and destination path.
 * @public
 */
export interface PathMappingRule {
  /**
   * The source path format.
   * @public
   */
  sourcePathFormat: PathFormat | undefined;

  /**
   * The source path.
   * @public
   */
  sourcePath: string | undefined;

  /**
   * The destination path.
   * @public
   */
  destinationPath: string | undefined;
}

/**
 * The job details for a specific job.
 * @public
 */
export interface JobDetailsEntity {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The job attachment settings.
   * @public
   */
  jobAttachmentSettings?: JobDetailsJobAttachmentSettings | undefined;

  /**
   * The user name and group that the job uses when run.
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * The log group name.
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The queue role ARN.
   * @public
   */
  queueRoleArn?: string | undefined;

  /**
   * The parameters.
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * The schema version.
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * The Open Job Description extensions that the job template uses. This value is used by the worker agent.
   * @public
   */
  extensions?: string[] | undefined;

  /**
   * The path mapping rules.
   * @public
   */
  pathMappingRules?: PathMappingRule[] | undefined;
}

/**
 * The details of a step entity.
 * @public
 */
export interface StepDetailsEntity {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The schema version for a step template.
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * The template for a step.
   * @public
   */
  template: __DocumentType | undefined;

  /**
   * The dependencies for a step.
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The Open Job Description extensions that the step uses. This value is used by the worker agent.
   * @public
   */
  extensions?: string[] | undefined;

  /**
   * The resolved symbol table for the step's expressions, serialized as JSON. This value is used by the worker agent.
   * @public
   */
  resolvedSymbolTable?: string | undefined;
}

/**
 * The details of a job entity.
 * @public
 */
export type JobEntity =
  | JobEntity.EnvironmentDetailsMember
  | JobEntity.JobAttachmentDetailsMember
  | JobEntity.JobDetailsMember
  | JobEntity.StepDetailsMember
  | JobEntity.$UnknownMember;

/**
 * @public
 */
export namespace JobEntity {
  /**
   * The job details.
   * @public
   */
  export interface JobDetailsMember {
    jobDetails: JobDetailsEntity;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The job attachment details.
   * @public
   */
  export interface JobAttachmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails: JobAttachmentDetailsEntity;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The step details.
   * @public
   */
  export interface StepDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails: StepDetailsEntity;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The environment details for the job entity.
   * @public
   */
  export interface EnvironmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails: EnvironmentDetailsEntity;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    jobDetails: (value: JobDetailsEntity) => T;
    jobAttachmentDetails: (value: JobAttachmentDetailsEntity) => T;
    stepDetails: (value: StepDetailsEntity) => T;
    environmentDetails: (value: EnvironmentDetailsEntity) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The error details for the environment.
 * @public
 */
export interface EnvironmentDetailsError {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * The error message detailing the error's cause.
   * @public
   */
  message: string | undefined;
}

/**
 * The error details for job attachments.
 * @public
 */
export interface JobAttachmentDetailsError {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * The error message detailing the error's cause.
   * @public
   */
  message: string | undefined;
}

/**
 * The details of a job error.
 * @public
 */
export interface JobDetailsError {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * The error message detailing the error's cause.
   * @public
   */
  message: string | undefined;
}

/**
 * The details of the step error.
 * @public
 */
export interface StepDetailsError {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * The error message detailing the error's cause.
   * @public
   */
  message: string | undefined;
}

/**
 * The error for the job entity.
 * @public
 */
export type GetJobEntityError =
  | GetJobEntityError.EnvironmentDetailsMember
  | GetJobEntityError.JobAttachmentDetailsMember
  | GetJobEntityError.JobDetailsMember
  | GetJobEntityError.StepDetailsMember
  | GetJobEntityError.$UnknownMember;

/**
 * @public
 */
export namespace GetJobEntityError {
  /**
   * The job details for the failed job entity.
   * @public
   */
  export interface JobDetailsMember {
    jobDetails: JobDetailsError;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The job attachment details for the failed job entity.
   * @public
   */
  export interface JobAttachmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails: JobAttachmentDetailsError;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The step details for the failed job entity.
   * @public
   */
  export interface StepDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails: StepDetailsError;
    environmentDetails?: never;
    $unknown?: never;
  }

  /**
   * The environment details for the failed job entity.
   * @public
   */
  export interface EnvironmentDetailsMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails: EnvironmentDetailsError;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    jobDetails?: never;
    jobAttachmentDetails?: never;
    stepDetails?: never;
    environmentDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    jobDetails: (value: JobDetailsError) => T;
    jobAttachmentDetails: (value: JobAttachmentDetailsError) => T;
    stepDetails: (value: StepDetailsError) => T;
    environmentDetails: (value: EnvironmentDetailsError) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface BatchGetJobEntityResponse {
  /**
   * A list of the job entities, or details, in the batch.
   * @public
   */
  entities: JobEntity[] | undefined;

  /**
   * A list of errors from the job error logs for the batch.
   * @public
   */
  errors: GetJobEntityError[] | undefined;
}

/**
 * The identifiers for a session.
 * @public
 */
export interface BatchGetSessionIdentifier {
  /**
   * The farm ID of the session.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session ID.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionRequest {
  /**
   * The list of session identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetSessionIdentifier[] | undefined;
}

/**
 * The error details for a session that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetSessionError {
  /**
   * The farm ID of the session that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session that could not be retrieved.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session that could not be retrieved.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session ID of the session that could not be retrieved.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetSessionErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The IP addresses for a host.
 * @public
 */
export interface IpAddresses {
  /**
   * The IpV4 address of the network.
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * The IpV6 address for the network and node component.
   * @public
   */
  ipV6Addresses?: string[] | undefined;
}

/**
 * The host property details.
 * @public
 */
export interface HostPropertiesResponse {
  /**
   * The IP address of the host.
   * @public
   */
  ipAddresses?: IpAddresses | undefined;

  /**
   * The host name.
   * @public
   */
  hostName?: string | undefined;

  /**
   * The ARN of the host EC2 instance.
   * @public
   */
  ec2InstanceArn?: string | undefined;

  /**
   * The instance type of the host EC2 instance.
   * @public
   */
  ec2InstanceType?: string | undefined;
}

/**
 * The details of a session returned in a batch get operation.
 * @public
 */
export interface BatchGetSessionItem {
  /**
   * The farm ID of the session.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session ID.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The fleet ID of the session.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID of the session.
   * @public
   */
  workerId: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The life cycle status of the session.
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The target life cycle status for the session.
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The session log.
   * @public
   */
  log: LogConfiguration | undefined;

  /**
   * The host properties for the session.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The worker log for the session.
   * @public
   */
  workerLog?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionResponse {
  /**
   * A list of sessions that were successfully retrieved.
   * @public
   */
  sessions: BatchGetSessionItem[] | undefined;

  /**
   * A list of errors for sessions that could not be retrieved.
   * @public
   */
  errors: BatchGetSessionError[] | undefined;
}

/**
 * The identifiers for a session action.
 * @public
 */
export interface BatchGetSessionActionIdentifier {
  /**
   * The farm ID of the session action.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session action.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session action.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session action ID.
   * @public
   */
  sessionActionId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionActionRequest {
  /**
   * The list of session action identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetSessionActionIdentifier[] | undefined;
}

/**
 * The error details for a session action that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetSessionActionError {
  /**
   * The farm ID of the session action that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session action that could not be retrieved.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session action that could not be retrieved.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session action ID of the session action that could not be retrieved.
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetSessionActionErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The environment ID to use to enter a session action.
 * @public
 */
export interface EnvironmentEnterSessionActionDefinition {
  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * Defines the environment a session action exits from.
 * @public
 */
export interface EnvironmentExitSessionActionDefinition {
  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * The session action definition for syncing input job attachments.
 * @public
 */
export interface SyncInputJobAttachmentsSessionActionDefinition {
  /**
   * The step ID for the sync input job attachments session action.
   * @public
   */
  stepId?: string | undefined;
}

/**
 * The task, step, and parameters for the task run in the session action.
 * @public
 */
export interface TaskRunSessionActionDefinition {
  /**
   * The task ID.
   * @public
   */
  taskId?: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task parameters.
   * @public
   */
  parameters: Record<string, TaskParameterValue> | undefined;
}

/**
 * The definition of the session action.
 * @public
 */
export type SessionActionDefinition =
  | SessionActionDefinition.EnvEnterMember
  | SessionActionDefinition.EnvExitMember
  | SessionActionDefinition.SyncInputJobAttachmentsMember
  | SessionActionDefinition.TaskRunMember
  | SessionActionDefinition.$UnknownMember;

/**
 * @public
 */
export namespace SessionActionDefinition {
  /**
   * The environment to enter into.
   * @public
   */
  export interface EnvEnterMember {
    envEnter: EnvironmentEnterSessionActionDefinition;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The environment to exit from.
   * @public
   */
  export interface EnvExitMember {
    envEnter?: never;
    envExit: EnvironmentExitSessionActionDefinition;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The task run in the session.
   * @public
   */
  export interface TaskRunMember {
    envEnter?: never;
    envExit?: never;
    taskRun: TaskRunSessionActionDefinition;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The session action definition for syncing input job attachments.
   * @public
   */
  export interface SyncInputJobAttachmentsMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    envEnter: (value: EnvironmentEnterSessionActionDefinition) => T;
    envExit: (value: EnvironmentExitSessionActionDefinition) => T;
    taskRun: (value: TaskRunSessionActionDefinition) => T;
    syncInputJobAttachments: (value: SyncInputJobAttachmentsSessionActionDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The manifest properties for a task run, corresponding to the manifest properties in the job.
 * @public
 */
export interface TaskRunManifestPropertiesResponse {
  /**
   * The manifest file path.
   * @public
   */
  outputManifestPath?: string | undefined;

  /**
   * The hash value of the file.
   * @public
   */
  outputManifestHash?: string | undefined;
}

/**
 * The details of a session action returned in a batch get operation.
 * @public
 */
export interface BatchGetSessionActionItem {
  /**
   * The farm ID of the session action.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the session action.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the session action.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session action ID.
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * The status of the session action.
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated by a worker.
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * The completion percentage for the session action.
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * The manifests for the session action.
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * The session ID for the session action.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The exit code to apply to the session action.
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * The message that communicates the progress of the session action.
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * The limits that were acquired for the session action.
   * @public
   */
  acquiredLimits?: AcquiredLimit[] | undefined;

  /**
   * The session action definition.
   * @public
   */
  definition: SessionActionDefinition | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionActionResponse {
  /**
   * A list of session actions that were successfully retrieved.
   * @public
   */
  sessionActions: BatchGetSessionActionItem[] | undefined;

  /**
   * A list of errors for session actions that could not be retrieved.
   * @public
   */
  errors: BatchGetSessionActionError[] | undefined;
}

/**
 * The identifiers for a step.
 * @public
 */
export interface BatchGetStepIdentifier {
  /**
   * The farm ID of the step.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the step.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the step.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStepRequest {
  /**
   * The list of step identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetStepIdentifier[] | undefined;
}

/**
 * The error details for a step that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetStepError {
  /**
   * The farm ID of the step that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the step that could not be retrieved.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the step that could not be retrieved.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the step that could not be retrieved.
   * @public
   */
  stepId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetStepErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The number of dependencies for the consumer.
 * @public
 */
export interface DependencyCounts {
  /**
   * The number of resolved dependencies.
   * @public
   */
  dependenciesResolved: number | undefined;

  /**
   * The number of unresolved dependencies.
   * @public
   */
  dependenciesUnresolved: number | undefined;

  /**
   * The number of consumers resolved.
   * @public
   */
  consumersResolved: number | undefined;

  /**
   * The number of unresolved consumers.
   * @public
   */
  consumersUnresolved: number | undefined;
}

/**
 * Defines how a step parameter range should be divided into chunks.
 * @public
 */
export interface StepParameterChunks {
  /**
   * The number of tasks to combine into a single chunk by default.
   * @public
   */
  defaultTaskCount: number | undefined;

  /**
   * The number of seconds to aim for when forming chunks.
   * @public
   */
  targetRuntimeSeconds?: number | undefined;

  /**
   * Specifies whether the chunked ranges must be contiguous or can have gaps between them.
   * @public
   */
  rangeConstraint: RangeConstraint | undefined;
}

/**
 * The details of a step parameter.
 * @public
 */
export interface StepParameter {
  /**
   * The name of the parameter.
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the parameter.
   * @public
   */
  type: StepParameterType | undefined;

  /**
   * The configuration for task chunking.
   * @public
   */
  chunks?: StepParameterChunks | undefined;
}

/**
 * The details of a search for two or more step parameters.
 * @public
 */
export interface ParameterSpace {
  /**
   * The parameters to search for.
   * @public
   */
  parameters: StepParameter[] | undefined;

  /**
   * The combination expression to use in the search.
   * @public
   */
  combination?: string | undefined;
}

/**
 * The details outlining the minimum and maximum capability of a step.
 * @public
 */
export interface StepAmountCapability {
  /**
   * The name of the step.
   * @public
   */
  name: string | undefined;

  /**
   * The minimum amount.
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum amount.
   * @public
   */
  max?: number | undefined;

  /**
   * The amount value.
   * @public
   */
  value?: number | undefined;
}

/**
 * The list of step attributes.
 * @public
 */
export interface StepAttributeCapability {
  /**
   * The name of the step attribute.
   * @public
   */
  name: string | undefined;

  /**
   * Requires any of the step attributes in a given list.
   * @public
   */
  anyOf?: string[] | undefined;

  /**
   * Requires all of the step attribute values.
   * @public
   */
  allOf?: string[] | undefined;
}

/**
 * The details of required step capabilities.
 * @public
 */
export interface StepRequiredCapabilities {
  /**
   * The capability attributes that the step requires.
   * @public
   */
  attributes: StepAttributeCapability[] | undefined;

  /**
   * The capability amounts that the step requires.
   * @public
   */
  amounts: StepAmountCapability[] | undefined;
}

/**
 * The details of a step returned in a batch get operation.
 * @public
 */
export interface BatchGetStepItem {
  /**
   * The farm ID of the step.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the step.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the step.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The name of the step.
   * @public
   */
  name: string | undefined;

  /**
   * The life cycle status of the step.
   * @public
   */
  lifecycleStatus: StepLifecycleStatus | undefined;

  /**
   * A message that communicates the status of the life cycle.
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * The task run status for the step.
   * @public
   */
  taskRunStatus: TaskRunStatus | undefined;

  /**
   * The number of tasks for each run status for the step.
   * @public
   */
  taskRunStatusCounts: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The number of times that tasks failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The task status to start with on the step.
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The number of dependencies for the step.
   * @public
   */
  dependencyCounts?: DependencyCounts | undefined;

  /**
   * The required capabilities for the step.
   * @public
   */
  requiredCapabilities?: StepRequiredCapabilities | undefined;

  /**
   * The parameter space for the step.
   * @public
   */
  parameterSpace?: ParameterSpace | undefined;

  /**
   * The description of the step.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStepResponse {
  /**
   * A list of steps that were successfully retrieved.
   * @public
   */
  steps: BatchGetStepItem[] | undefined;

  /**
   * A list of errors for steps that could not be retrieved.
   * @public
   */
  errors: BatchGetStepError[] | undefined;
}

/**
 * The identifiers for a task.
 * @public
 */
export interface BatchGetTaskIdentifier {
  /**
   * The farm ID of the task.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the task.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the task.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the task.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID.
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTaskRequest {
  /**
   * The list of task identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetTaskIdentifier[] | undefined;
}

/**
 * The error details for a task that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetTaskError {
  /**
   * The farm ID of the task that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the task that could not be retrieved.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the task that could not be retrieved.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the task that could not be retrieved.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID of the task that could not be retrieved.
   * @public
   */
  taskId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetTaskErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The details of a task returned in a batch get operation.
 * @public
 */
export interface BatchGetTaskItem {
  /**
   * The farm ID of the task.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the task.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the task.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the task.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID.
   * @public
   */
  taskId: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The run status of the task.
   * @public
   */
  runStatus: TaskRunStatus | undefined;

  /**
   * The run status with which to start the task.
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * The number of times the task failed and was retried.
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The latest session action for the task.
   * @public
   */
  latestSessionActionId?: string | undefined;

  /**
   * The parameters for the task.
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * @public
 */
export interface BatchGetTaskResponse {
  /**
   * A list of tasks that were successfully retrieved.
   * @public
   */
  tasks: BatchGetTaskItem[] | undefined;

  /**
   * A list of errors for tasks that could not be retrieved.
   * @public
   */
  errors: BatchGetTaskError[] | undefined;
}

/**
 * The identifiers for a worker.
 * @public
 */
export interface BatchGetWorkerIdentifier {
  /**
   * The farm ID of the worker.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkerRequest {
  /**
   * The list of worker identifiers to retrieve. You can specify up to 100 identifiers per request.
   * @public
   */
  identifiers: BatchGetWorkerIdentifier[] | undefined;
}

/**
 * The error details for a worker that could not be retrieved in a batch get operation.
 * @public
 */
export interface BatchGetWorkerError {
  /**
   * The farm ID of the worker that could not be retrieved.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker that could not be retrieved.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID of the worker that could not be retrieved.
   * @public
   */
  workerId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchGetWorkerErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * The details of a worker returned in a batch get operation.
 * @public
 */
export interface BatchGetWorkerItem {
  /**
   * The farm ID of the worker.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;

  /**
   * The host properties for the worker.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The status of the worker.
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * The log configuration for the worker.
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkerResponse {
  /**
   * A list of workers that were successfully retrieved.
   * @public
   */
  workers: BatchGetWorkerItem[] | undefined;

  /**
   * A list of errors for workers that could not be retrieved.
   * @public
   */
  errors: BatchGetWorkerError[] | undefined;
}

/**
 * The details of a job to update in a batch update operation.
 * @public
 */
export interface BatchUpdateJobItem {
  /**
   * The farm ID of the job to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the job to update.
   * @public
   */
  jobId: string | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The job priority to update.
   * @public
   */
  priority?: number | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries per failed tasks.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The status of a job in its lifecycle. When you change the status of the job to <code>ARCHIVED</code>, the job can't be scheduled or archived.</p> <important> <p>An archived job and its steps and tasks are deleted after 120 days. The job can't be recovered.</p> </important>
   * @public
   */
  lifecycleStatus?: UpdateJobLifecycleStatus | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job.
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The name of the job to update.
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the job to update.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateJobRequest {
  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of jobs to update. You can specify up to 100 jobs per request.
   * @public
   */
  jobs: BatchUpdateJobItem[] | undefined;
}

/**
 * The error details for a job that could not be updated in a batch update operation.
 * @public
 */
export interface BatchUpdateJobError {
  /**
   * The farm ID of the job that could not be updated.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job that could not be updated.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the job that could not be updated.
   * @public
   */
  jobId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchUpdateJobErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateJobResponse {
  /**
   * A list of errors for jobs that could not be updated.
   * @public
   */
  errors: BatchUpdateJobError[] | undefined;
}

/**
 * The details of a task to update in a batch update operation.
 * @public
 */
export interface BatchUpdateTaskItem {
  /**
   * The farm ID of the task to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the task to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the task to update.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the task to update.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID of the task to update.
   * @public
   */
  taskId: string | undefined;

  /**
   * The run status with which to start the task.
   * @public
   */
  targetRunStatus: TaskTargetRunStatus | undefined;
}

/**
 * @public
 */
export interface BatchUpdateTaskRequest {
  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of tasks to update. You can specify up to 100 tasks per request.
   * @public
   */
  tasks: BatchUpdateTaskItem[] | undefined;
}

/**
 * The error details for a task that could not be updated in a batch update operation.
 * @public
 */
export interface BatchUpdateTaskError {
  /**
   * The farm ID of the task that could not be updated.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the task that could not be updated.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the task that could not be updated.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID of the task that could not be updated.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID of the task that could not be updated.
   * @public
   */
  taskId: string | undefined;

  /**
   * The error code.
   * @public
   */
  code: BatchUpdateTaskErrorCode | undefined;

  /**
   * The error message.
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateTaskResponse {
  /**
   * A list of errors for tasks that could not be updated.
   * @public
   */
  errors: BatchUpdateTaskError[] | undefined;
}

/**
 * The budget action to add.
 * @public
 */
export interface BudgetActionToAdd {
  /**
   * The type of budget action to add.
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * The percentage threshold for the budget action to add.
   * @public
   */
  thresholdPercentage: number | undefined;

  /**
   * <p>A description for the budget action to add.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;
}

/**
 * The budget action to remove.
 * @public
 */
export interface BudgetActionToRemove {
  /**
   * The type of budget action to remove.
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * The percentage threshold for the budget action to remove.
   * @public
   */
  thresholdPercentage: number | undefined;
}

/**
 * The details of a fixed budget schedule.
 * @public
 */
export interface FixedBudgetSchedule {
  /**
   * When the budget starts.
   * @public
   */
  startTime: Date | undefined;

  /**
   * When the budget ends.
   * @public
   */
  endTime: Date | undefined;
}

/**
 * The start and end time of the budget.
 * @public
 */
export type BudgetSchedule =
  | BudgetSchedule.FixedMember
  | BudgetSchedule.$UnknownMember;

/**
 * @public
 */
export namespace BudgetSchedule {
  /**
   * The fixed start and end time of the budget's schedule.
   * @public
   */
  export interface FixedMember {
    fixed: FixedBudgetSchedule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fixed?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fixed: (value: FixedBudgetSchedule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The usage details of the allotted budget.
 * @public
 */
export type UsageTrackingResource =
  | UsageTrackingResource.QueueIdMember
  | UsageTrackingResource.$UnknownMember;

/**
 * @public
 */
export namespace UsageTrackingResource {
  /**
   * The queue ID.
   * @public
   */
  export interface QueueIdMember {
    queueId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    queueId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    queueId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateBudgetRequest {
  /**
   * The farm ID to include in this budget.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the budget.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The description of the budget.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The queue ID provided to this budget to track usage.
   * @public
   */
  usageTrackingResource: UsageTrackingResource | undefined;

  /**
   * The dollar limit based on consumed usage.
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * The budget actions to specify what happens when the budget runs out.
   * @public
   */
  actions: BudgetActionToAdd[] | undefined;

  /**
   * The schedule to associate with this budget.
   * @public
   */
  schedule: BudgetSchedule | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBudgetResponse {
  /**
   * The budget ID.
   * @public
   */
  budgetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetRequest {
  /**
   * The farm ID of the farm to remove from the budget.
   * @public
   */
  farmId: string | undefined;

  /**
   * The budget ID of the budget to delete.
   * @public
   */
  budgetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetResponse {}

/**
 * @public
 */
export interface GetBudgetRequest {
  /**
   * The farm ID of the farm connected to the budget.
   * @public
   */
  farmId: string | undefined;

  /**
   * The budget ID.
   * @public
   */
  budgetId: string | undefined;
}

/**
 * The details of a budget action.
 * @public
 */
export interface ResponseBudgetAction {
  /**
   * The action taken on the budget once scheduling stops.
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * The percentage threshold for the budget.
   * @public
   */
  thresholdPercentage: number | undefined;

  /**
   * <p>The budget action description.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;
}

/**
 * The consumed usage for the resource.
 * @public
 */
export interface ConsumedUsages {
  /**
   * The amount of the budget consumed.
   * @public
   */
  approximateDollarUsage: number | undefined;
}

/**
 * @public
 */
export interface GetBudgetResponse {
  /**
   * The budget ID.
   * @public
   */
  budgetId: string | undefined;

  /**
   * The resource that the budget is tracking usage for.
   * @public
   */
  usageTrackingResource: UsageTrackingResource | undefined;

  /**
   * <p>The status of the budget.</p> <ul> <li> <p> <code>ACTIVE</code>–Get a budget being evaluated.</p> </li> <li> <p> <code>INACTIVE</code>–Get an inactive budget. This can include expired, canceled, or deleted statuses.</p> </li> </ul>
   * @public
   */
  status: BudgetStatus | undefined;

  /**
   * <p>The display name of the budget.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The consumed usage limit for the budget.
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * The usages of the budget.
   * @public
   */
  usages: ConsumedUsages | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The description of the budget.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The budget actions for the budget.
   * @public
   */
  actions: ResponseBudgetAction[] | undefined;

  /**
   * The budget schedule.
   * @public
   */
  schedule: BudgetSchedule | undefined;

  /**
   * The date and time the queue stopped.
   * @public
   */
  queueStoppedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBudgetsRequest {
  /**
   * The farm ID associated with the budgets.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status to list for the budgets.
   * @public
   */
  status?: BudgetStatus | undefined;
}

/**
 * The budget summary.
 * @public
 */
export interface BudgetSummary {
  /**
   * The budget ID.
   * @public
   */
  budgetId: string | undefined;

  /**
   * The resource used to track expenditure in the budget.
   * @public
   */
  usageTrackingResource: UsageTrackingResource | undefined;

  /**
   * <p>The status of the budget.</p> <ul> <li> <p> <code>ACTIVE</code>–The budget is being evaluated.</p> </li> <li> <p> <code>INACTIVE</code>–The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses.</p> </li> </ul>
   * @public
   */
  status: BudgetStatus | undefined;

  /**
   * <p>The display name of the budget summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The approximate dollar limit of the budget.
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * The consumed usage for the budget.
   * @public
   */
  usages: ConsumedUsages | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The description of the budget summary.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   *
   * @deprecated ListBudgets no longer supports description. Use GetBudget if description is needed.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListBudgetsResponse {
  /**
   * The budgets to include on the list.
   * @public
   */
  budgets: BudgetSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetRequest {
  /**
   * The farm ID of the budget to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The budget ID to update.
   * @public
   */
  budgetId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the budget to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the budget to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Updates the status of the budget.</p> <ul> <li> <p> <code>ACTIVE</code>–The budget is being evaluated.</p> </li> <li> <p> <code>INACTIVE</code>–The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses.</p> </li> </ul>
   * @public
   */
  status?: BudgetStatus | undefined;

  /**
   * The dollar limit to update on the budget. Based on consumed usage.
   * @public
   */
  approximateDollarLimit?: number | undefined;

  /**
   * The budget actions to add. Budget actions specify what happens when the budget runs out.
   * @public
   */
  actionsToAdd?: BudgetActionToAdd[] | undefined;

  /**
   * The budget actions to remove from the budget.
   * @public
   */
  actionsToRemove?: BudgetActionToRemove[] | undefined;

  /**
   * The schedule to update.
   * @public
   */
  schedule?: BudgetSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetResponse {}

/**
 * The Amazon S3 location information.
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket.
   * @public
   */
  bucketName: string | undefined;

  /**
   * The Amazon S3 object key that uniquely identifies the Amazon S3 bucket.
   * @public
   */
  key: string | undefined;
}

/**
 * @public
 */
export interface CopyJobTemplateRequest {
  /**
   * The farm ID to copy.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to copy.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to copy.
   * @public
   */
  jobId: string | undefined;

  /**
   * The Amazon S3 bucket name and key where you would like to add a copy of the job template.
   * @public
   */
  targetS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface CopyJobTemplateResponse {
  /**
   * The format of the job template, either <code>JSON</code> or <code>YAML</code>.
   * @public
   */
  templateType: JobTemplateType | undefined;
}

/**
 * @public
 */
export interface CreateFarmRequest {
  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The description of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the KMS key to use on the farm.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment. The default value is 1.
   * @public
   */
  costScaleFactor?: number | undefined;

  /**
   * The tags to add to your farm. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFarmResponse {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;
}

/**
 * The auto scaling configuration settings for a customer managed fleet.
 * @public
 */
export interface CustomerManagedAutoScalingConfiguration {
  /**
   * The number of idle workers maintained and ready to process incoming tasks. The default is 0.
   * @public
   */
  standbyWorkerCount?: number | undefined;

  /**
   * The number of seconds that a worker can remain idle before it is shut down. The default is 300 seconds (5 minutes).
   * @public
   */
  workerIdleDurationSeconds?: number | undefined;

  /**
   * The number of workers that can be added per minute to the fleet. The default is 10 workers per minute.
   * @public
   */
  scaleOutWorkersPerMinute?: number | undefined;
}

/**
 * The fleet amount and attribute capabilities.
 * @public
 */
export interface FleetAmountCapability {
  /**
   * The name of the fleet capability.
   * @public
   */
  name: string | undefined;

  /**
   * The minimum amount of fleet worker capability.
   * @public
   */
  min: number | undefined;

  /**
   * The maximum amount of the fleet worker capability.
   * @public
   */
  max?: number | undefined;
}

/**
 * Defines the fleet's capability name, minimum, and maximum.
 * @public
 */
export interface FleetAttributeCapability {
  /**
   * The name of the fleet attribute capability for the worker.
   * @public
   */
  name: string | undefined;

  /**
   * The number of fleet attribute capabilities.
   * @public
   */
  values: string[] | undefined;
}

/**
 * The range of memory in MiB.
 * @public
 */
export interface MemoryMiBRange {
  /**
   * The minimum amount of memory (in MiB).
   * @public
   */
  min: number | undefined;

  /**
   * The maximum amount of memory (in MiB).
   * @public
   */
  max?: number | undefined;
}

/**
 * The allowable range of vCPU processing power for the fleet.
 * @public
 */
export interface VCpuCountRange {
  /**
   * The minimum amount of vCPU.
   * @public
   */
  min: number | undefined;

  /**
   * The maximum amount of vCPU.
   * @public
   */
  max?: number | undefined;
}

/**
 * The worker capabilities for a customer managed workflow.
 * @public
 */
export interface CustomerManagedWorkerCapabilities {
  /**
   * The vCPU count for the customer manged worker capabilities.
   * @public
   */
  vCpuCount: VCpuCountRange | undefined;

  /**
   * The memory (MiB).
   * @public
   */
  memoryMiB: MemoryMiBRange | undefined;

  /**
   * The accelerator types for the customer managed worker capabilities.
   * @public
   */
  acceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * The range of the accelerator.
   * @public
   */
  acceleratorCount?: AcceleratorCountRange | undefined;

  /**
   * The total memory (MiB) for the customer managed worker capabilities.
   * @public
   */
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange | undefined;

  /**
   * The operating system (OS) family.
   * @public
   */
  osFamily: CustomerManagedFleetOperatingSystemFamily | undefined;

  /**
   * The CPU architecture type for the customer managed worker capabilities.
   * @public
   */
  cpuArchitectureType: CpuArchitectureType | undefined;

  /**
   * Custom requirement ranges for customer managed worker capabilities.
   * @public
   */
  customAmounts?: FleetAmountCapability[] | undefined;

  /**
   * Custom attributes for the customer manged worker capabilities.
   * @public
   */
  customAttributes?: FleetAttributeCapability[] | undefined;
}

/**
 * The configuration details for a customer managed fleet.
 * @public
 */
export interface CustomerManagedFleetConfiguration {
  /**
   * The Auto Scaling mode for the customer managed fleet.
   * @public
   */
  mode: AutoScalingMode | undefined;

  /**
   * The auto scaling configuration settings for the customer managed fleet.
   * @public
   */
  autoScalingConfiguration?: CustomerManagedAutoScalingConfiguration | undefined;

  /**
   * The worker capabilities for the customer managed fleet.
   * @public
   */
  workerCapabilities: CustomerManagedWorkerCapabilities | undefined;

  /**
   * The storage profile ID for the customer managed fleet.
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * The tag propagation mode for the customer managed fleet.
   * @public
   */
  tagPropagationMode?: TagPropagationMode | undefined;
}

/**
 * The auto scaling configuration settings for a service managed EC2 fleet.
 * @public
 */
export interface ServiceManagedEc2AutoScalingConfiguration {
  /**
   * The number of idle workers maintained and ready to process incoming tasks. The default is 0.
   * @public
   */
  standbyWorkerCount?: number | undefined;

  /**
   * The number of seconds that a worker can remain idle before it is shut down. The default is 300 seconds (5 minutes).
   * @public
   */
  workerIdleDurationSeconds?: number | undefined;

  /**
   * The number of workers that can be added per minute to the fleet. The default is 10 workers per minute.
   * @public
   */
  scaleOutWorkersPerMinute?: number | undefined;
}

/**
 * Specifies the EBS volume.
 * @public
 */
export interface Ec2EbsVolume {
  /**
   * The EBS volume size in GiB.
   * @public
   */
  sizeGiB?: number | undefined;

  /**
   * The IOPS per volume.
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput per volume in MiB.
   * @public
   */
  throughputMiB?: number | undefined;
}

/**
 * Software that the service installs on worker hosts in a service-managed fleet.
 * @public
 */
export interface FleetSoftwareAddOn {
  /**
   * The name of the software add-on. The supported value is <code>docker</code>.
   * @public
   */
  name: FleetSoftwareAddOnName | undefined;
}

/**
 * The Amazon EC2 instance capabilities.
 * @public
 */
export interface ServiceManagedEc2InstanceCapabilities {
  /**
   * The amount of vCPU to require for instances in this fleet.
   * @public
   */
  vCpuCount: VCpuCountRange | undefined;

  /**
   * The memory, as MiB, for the Amazon EC2 instance type.
   * @public
   */
  memoryMiB: MemoryMiBRange | undefined;

  /**
   * The operating system (OS) family.
   * @public
   */
  osFamily: ServiceManagedFleetOperatingSystemFamily | undefined;

  /**
   * The CPU architecture type.
   * @public
   */
  cpuArchitectureType: CpuArchitectureType | undefined;

  /**
   * The root EBS volume.
   * @public
   */
  rootEbsVolume?: Ec2EbsVolume | undefined;

  /**
   * Describes the GPU accelerator capabilities required for worker host instances in this fleet.
   * @public
   */
  acceleratorCapabilities?: AcceleratorCapabilities | undefined;

  /**
   * <p>The allowable Amazon EC2 instance types.</p> <note> <p>If you specify <code>allowedInstanceTypes</code>, you can't specify <code>excludedInstanceTypes</code>.</p> </note>
   * @public
   */
  allowedInstanceTypes?: string[] | undefined;

  /**
   * <p>The instance types to exclude from the fleet.</p> <note> <p>If you specify <code>excludedInstanceTypes</code>, you can't specify <code>allowedInstanceTypes</code>.</p> </note>
   * @public
   */
  excludedInstanceTypes?: string[] | undefined;

  /**
   * The custom capability amounts to require for instances in this fleet.
   * @public
   */
  customAmounts?: FleetAmountCapability[] | undefined;

  /**
   * The custom capability attributes to require for instances in this fleet.
   * @public
   */
  customAttributes?: FleetAttributeCapability[] | undefined;

  /**
   * The software add-ons that the service installs on worker hosts when they launch.
   * @public
   */
  softwareAddOns?: FleetSoftwareAddOn[] | undefined;
}

/**
 * The details of the Amazon EC2 instance market options for a service managed fleet.
 * @public
 */
export interface ServiceManagedEc2InstanceMarketOptions {
  /**
   * The Amazon EC2 instance type.
   * @public
   */
  type: Ec2MarketType | undefined;
}

/**
 * Specifies the persistent EBS volume configuration for workers in a service managed fleet.
 * @public
 */
export interface PersistentVolumeConfiguration {
  /**
   * The persistent volume size in GiB. The default is 250.
   * @public
   */
  sizeGiB?: number | undefined;

  /**
   * The IOPS per persistent volume. The default is 3000.
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput per persistent volume in MiB. The default is 125.
   * @public
   */
  throughputMiB?: number | undefined;

  /**
   * The file system path where the persistent volume is mounted on the worker instance.
   * @public
   */
  mountPath: string | undefined;

  /**
   * The number of hours a persistent volume can remain unused before it is deleted. The default is 12.
   * @public
   */
  lastUsedTtlHours?: number | undefined;
}

/**
 * The configuration options for a service managed fleet's VPC.
 * @public
 */
export interface VpcConfiguration {
  /**
   * The ARNs of the VPC Lattice resource configurations attached to the fleet.
   * @public
   */
  resourceConfigurationArns?: string[] | undefined;
}

/**
 * The configuration details for a service managed EC2 fleet.
 * @public
 */
export interface ServiceManagedEc2FleetConfiguration {
  /**
   * The instance capabilities for the service managed EC2 fleet.
   * @public
   */
  instanceCapabilities: ServiceManagedEc2InstanceCapabilities | undefined;

  /**
   * The instance market options for the service managed EC2 fleet.
   * @public
   */
  instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions | undefined;

  /**
   * The VPC configuration for the service managed EC2 fleet.
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The storage profile ID for the service managed EC2 fleet.
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * The persistent volume configuration for the service managed EC2 fleet.
   * @public
   */
  persistentVolumeConfiguration?: PersistentVolumeConfiguration | undefined;

  /**
   * The auto scaling configuration settings for the service managed EC2 fleet.
   * @public
   */
  autoScalingConfiguration?: ServiceManagedEc2AutoScalingConfiguration | undefined;
}

/**
 * Fleet configuration details.
 * @public
 */
export type FleetConfiguration =
  | FleetConfiguration.CustomerManagedMember
  | FleetConfiguration.ServiceManagedEc2Member
  | FleetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FleetConfiguration {
  /**
   * The customer managed fleets within a fleet configuration.
   * @public
   */
  export interface CustomerManagedMember {
    customerManaged: CustomerManagedFleetConfiguration;
    serviceManagedEc2?: never;
    $unknown?: never;
  }

  /**
   * The service managed Amazon EC2 instances for a fleet configuration.
   * @public
   */
  export interface ServiceManagedEc2Member {
    customerManaged?: never;
    serviceManagedEc2: ServiceManagedEc2FleetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customerManaged?: never;
    serviceManagedEc2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customerManaged: (value: CustomerManagedFleetConfiguration) => T;
    serviceManagedEc2: (value: ServiceManagedEc2FleetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet. </p> <p>To remove a script from a fleet, use the <a href="https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateFleet.html">UpdateFleet</a> operation with the <code>hostConfiguration</code> <code>scriptBody</code> parameter set to an empty string ("").</p>
 * @public
 */
export interface HostConfiguration {
  /**
   * <p>The text of the script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet. The script runs after a worker enters the <code>STARTING</code> state and before the worker processes tasks.</p> <p>For more information about using the script, see <a href="https://docs.aws.amazon.com/deadline-cloud/latest/developerguide/smf-admin.html">Run scripts as an administrator to configure workers</a> in the <i>Deadline Cloud Developer Guide</i>. </p> <important> <p>The script runs as an administrative user (<code>sudo root</code> on Linux, as an Administrator on Windows). </p> </important>
   * @public
   */
  scriptBody: string | undefined;

  /**
   * <p>The maximum time that the host configuration can run. If the timeout expires, the worker enters the <code>NOT RESPONDING</code> state and shuts down. You are charged for the time that the worker is running the host configuration script.</p> <note> <p>You should configure your fleet for a maximum of one worker while testing your host configuration script to avoid starting additional workers.</p> </note> <p>The default is 300 seconds (5 minutes).</p>
   * @public
   */
  scriptTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * The farm ID of the farm to connect to the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The description of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role ARN for the role that the fleet's workers will use.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The minimum number of workers for the fleet.
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * The maximum number of workers for the fleet.
   *
   * Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to <code>CreateWorker</code> before the field updates, you might exceed your fleet's maximum worker count. For example, if your <code>maxWorkerCount</code> is 10 and you currently have 9 workers, making two quick <code>CreateWorker</code> calls might successfully create 2 workers instead of 1, resulting in 11 total workers.
   *
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * The configuration settings for the fleet. Customer managed fleets are self-managed. Service managed Amazon EC2 fleets are managed by Deadline Cloud.
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The farm ID of the farm to connect to the job.
   * @public
   */
  farmId: string | undefined;

  /**
   * The ID of the queue that the job is submitted to.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job template to use for this job.
   * @public
   */
  template?: string | undefined;

  /**
   * The file type for the job template.
   * @public
   */
  templateType?: JobTemplateType | undefined;

  /**
   * The priority of the job. The highest priority (first scheduled) is 100. When two jobs have the same priority, the oldest job is scheduled first.
   * @public
   */
  priority: number | undefined;

  /**
   * The parameters for the job.
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * The attachments for the job. Attach files required for the job to run to a render job.
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * The storage profile ID for the storage profile to connect to the job.
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * The initial job status when it is created. Jobs that are created with a <code>SUSPENDED</code> status will not run until manually requeued.
   * @public
   */
  targetTaskRunStatus?: CreateJobTargetTaskRunStatus | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries for each task.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.
   *
   * You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.
   *
   * If you don't specify the <code>maxWorkerCount</code>, Deadline Cloud won't throttle the number of workers used to process the job.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The job ID for the source job.
   * @public
   */
  sourceJobId?: string | undefined;

  /**
   * A custom name to override the job name derived from the job template.
   * @public
   */
  nameOverride?: string | undefined;

  /**
   * A custom description to override the job description derived from the job template.
   * @public
   */
  descriptionOverride?: string | undefined;

  /**
   * The tags to add to your job. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseEndpointRequest {
  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The VPC (virtual private cloud) ID to use with the license endpoint.
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet IDs.
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The security group IDs.
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLicenseEndpointResponse {
  /**
   * The license endpoint ID.
   * @public
   */
  licenseEndpointId: string | undefined;
}

/**
 * @public
 */
export interface CreateLimitRequest {
  /**
   * The farm ID of the farm that contains the limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.
   * @public
   */
  amountRequirementName: string | undefined;

  /**
   * <p>The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.</p> <p>The <code>maxCount</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.</p>
   * @public
   */
  maxCount: number | undefined;

  /**
   * <p>A description of the limit. A description helps you identify the purpose of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateLimitResponse {
  /**
   * A unique identifier for the limit. Use this identifier in other operations, such as <code>CreateQueueLimitAssociation</code> and <code>DeleteLimit</code>.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorRequest {
  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name that you give the monitor that is displayed in the Deadline Cloud console.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The Amazon Resource Name of the IAM Identity Center instance that authenticates monitor users.
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * The Region where IAM Identity Center is enabled. Required when IAM Identity Center is in a different Region than the monitor.
   * @public
   */
  identityCenterRegion?: string | undefined;

  /**
   * The subdomain to use when creating the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
   * @public
   */
  subdomain: string | undefined;

  /**
   * The Amazon Resource Name of the IAM role that the monitor uses to connect to Deadline Cloud. Every user that signs in to the monitor using IAM Identity Center uses this role to access Deadline Cloud resources.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The tags to add to your monitor. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorResponse {
  /**
   * The unique identifier of the monitor.
   * @public
   */
  monitorId: string | undefined;

  /**
   * The Amazon Resource Name that IAM Identity Center assigns to the monitor.
   * @public
   */
  identityCenterApplicationArn: string | undefined;
}

/**
 * The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.
 * @public
 */
export interface JobAttachmentSettings {
  /**
   * The Amazon S3 bucket name.
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The root prefix.
   * @public
   */
  rootPrefix: string | undefined;
}

/**
 * Configuration for priority balanced scheduling. Workers are distributed evenly across all jobs at the highest priority level.
 * @public
 */
export interface PriorityBalancedSchedulingConfiguration {
  /**
   * The rendering task buffer controls worker stickiness. A worker only switches from its current job to another job at the same priority if the other job has fewer rendering tasks by more than this buffer value. Higher values make workers stickier to their current jobs. The default value is <code>1</code>.
   * @public
   */
  renderingTaskBuffer?: number | undefined;
}

/**
 * Configuration for priority first-in, first-out (FIFO) scheduling. Workers are assigned to the highest-priority job first. When multiple jobs share the same priority, the job submitted earliest receives workers first.
 * @public
 */
export interface PriorityFifoSchedulingConfiguration {}

/**
 * Specifies that jobs at the maximum priority (100) are always scheduled first.
 * @public
 */
export interface SchedulingMaxPriorityOverrideAlwaysScheduleFirst {}

/**
 * Defines the override behavior for jobs at the maximum priority (100) in weighted balanced scheduling.
 * @public
 */
export type SchedulingMaxPriorityOverride =
  | SchedulingMaxPriorityOverride.AlwaysScheduleFirstMember
  | SchedulingMaxPriorityOverride.$UnknownMember;

/**
 * @public
 */
export namespace SchedulingMaxPriorityOverride {
  /**
   * Jobs at the maximum priority (100) are always scheduled before other jobs, regardless of the weighted scheduling formula. If multiple jobs have priority 100, ties are broken using the standard weighted formula.
   * @public
   */
  export interface AlwaysScheduleFirstMember {
    alwaysScheduleFirst: SchedulingMaxPriorityOverrideAlwaysScheduleFirst;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    alwaysScheduleFirst?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    alwaysScheduleFirst: (value: SchedulingMaxPriorityOverrideAlwaysScheduleFirst) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies that jobs at the minimum priority (0) are always scheduled last.
 * @public
 */
export interface SchedulingMinPriorityOverrideAlwaysScheduleLast {}

/**
 * Defines the override behavior for jobs at the minimum priority (0) in weighted balanced scheduling.
 * @public
 */
export type SchedulingMinPriorityOverride =
  | SchedulingMinPriorityOverride.AlwaysScheduleLastMember
  | SchedulingMinPriorityOverride.$UnknownMember;

/**
 * @public
 */
export namespace SchedulingMinPriorityOverride {
  /**
   * Jobs at the minimum priority (0) are always scheduled after all other jobs, regardless of the weighted scheduling formula. If multiple jobs have priority 0, ties are broken using the standard weighted formula.
   * @public
   */
  export interface AlwaysScheduleLastMember {
    alwaysScheduleLast: SchedulingMinPriorityOverrideAlwaysScheduleLast;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    alwaysScheduleLast?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    alwaysScheduleLast: (value: SchedulingMinPriorityOverrideAlwaysScheduleLast) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for weighted balanced scheduling. Workers are assigned to jobs based on a weighted formula:</p> <p> <code>weight = (priority * priorityWeight) + (errors * errorWeight) + ((currentTime - submissionTime) * submissionTimeWeight) + ((renderingTasks - renderingTaskBuffer) * renderingTaskWeight)</code> </p> <p>The job with the highest calculated weight is scheduled first. Workers are distributed evenly amongst jobs with the same weight.</p>
 * @public
 */
export interface WeightedBalancedSchedulingConfiguration {
  /**
   * The weight applied to job priority in the scheduling formula. Higher values give more influence to job priority. A value of <code>0</code> means priority is ignored. The default value is <code>100.0</code>.
   * @public
   */
  priorityWeight?: number | undefined;

  /**
   * The weight applied to the number of errors on a job. A negative value means jobs without errors are scheduled first. A value of <code>0</code> means errors are ignored. The default value is <code>-10.0</code>.
   * @public
   */
  errorWeight?: number | undefined;

  /**
   * The weight applied to job submission time. A positive value means earlier jobs are scheduled first. A value of <code>0</code> means submission time is ignored. The default value is <code>3.0</code>.
   * @public
   */
  submissionTimeWeight?: number | undefined;

  /**
   * The weight applied to the number of tasks currently rendering on a job. A negative value means jobs that are not already rendering are scheduled next. A value of <code>0</code> means the rendering state is ignored. The default value is <code>-100.0</code>.
   * @public
   */
  renderingTaskWeight?: number | undefined;

  /**
   * The rendering task buffer is subtracted from the number of rendering tasks before applying the rendering task weight. This creates a stickiness effect where workers prefer to stay with their current job. Higher values make workers stickier. The default value is <code>1</code>. The buffer is only applied in the weight calculation for a job if the worker is currently assigned to that job.
   * @public
   */
  renderingTaskBuffer?: number | undefined;

  /**
   * Overrides the weighted scheduling formula for jobs at the maximum priority (100). When set, jobs with priority 100 are always scheduled first regardless of their calculated weight. When absent, maximum priority jobs use the standard weighted formula.
   * @public
   */
  maxPriorityOverride?: SchedulingMaxPriorityOverride | undefined;

  /**
   * Overrides the weighted scheduling formula for jobs at the minimum priority (0). When set, jobs with priority 0 are always scheduled last regardless of their calculated weight. When absent, minimum priority jobs use the standard weighted formula.
   * @public
   */
  minPriorityOverride?: SchedulingMinPriorityOverride | undefined;
}

/**
 * The scheduling configuration for a queue. Defines the strategy used to assign workers to jobs.
 * @public
 */
export type SchedulingConfiguration =
  | SchedulingConfiguration.PriorityBalancedMember
  | SchedulingConfiguration.PriorityFifoMember
  | SchedulingConfiguration.WeightedBalancedMember
  | SchedulingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SchedulingConfiguration {
  /**
   * Workers are assigned to the highest-priority job first. When multiple jobs share the same priority, the job submitted earliest receives workers first. This is the default scheduling configuration for new queues.
   * @public
   */
  export interface PriorityFifoMember {
    priorityFifo: PriorityFifoSchedulingConfiguration;
    priorityBalanced?: never;
    weightedBalanced?: never;
    $unknown?: never;
  }

  /**
   * Workers are distributed evenly across all jobs at the highest priority level. When workers cannot be evenly divided, the extra workers are assigned to the jobs submitted earliest. If a job has fewer remaining tasks than its share of workers, the surplus workers are redistributed to other jobs at the same priority level.
   * @public
   */
  export interface PriorityBalancedMember {
    priorityFifo?: never;
    priorityBalanced: PriorityBalancedSchedulingConfiguration;
    weightedBalanced?: never;
    $unknown?: never;
  }

  /**
   * Workers are assigned to jobs based on a weighted formula that considers job priority, error count, submission time, and the number of tasks currently rendering. Each factor has a configurable weight that determines its influence on scheduling decisions.
   * @public
   */
  export interface WeightedBalancedMember {
    priorityFifo?: never;
    priorityBalanced?: never;
    weightedBalanced: WeightedBalancedSchedulingConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    priorityFifo?: never;
    priorityBalanced?: never;
    weightedBalanced?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    priorityFifo: (value: PriorityFifoSchedulingConfiguration) => T;
    priorityBalanced: (value: PriorityBalancedSchedulingConfiguration) => T;
    weightedBalanced: (value: WeightedBalancedSchedulingConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * The farm ID of the farm to connect to the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The description of the queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The default action to take on a queue if a budget isn't configured.
   * @public
   */
  defaultBudgetAction?: DefaultQueueBudgetAction | undefined;

  /**
   * The job attachment settings for the queue. These are the Amazon S3 bucket name and the Amazon S3 prefix.
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * The IAM role ARN that workers will use while running jobs for this queue.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The jobs in the queue run as the specified POSIX user.
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * The file system location name to include in the queue.
   * @public
   */
  requiredFileSystemLocationNames?: string[] | undefined;

  /**
   * The storage profile IDs to include in the queue.
   * @public
   */
  allowedStorageProfileIds?: string[] | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The scheduling configuration for the queue. This configuration determines how workers are assigned to jobs in the queue.
   *
   * If not specified, the queue defaults to the <code>priorityFifo</code> scheduling configuration.
   *
   * @public
   */
  schedulingConfiguration?: SchedulingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueEnvironmentRequest {
  /**
   * The farm ID of the farm to connect to the environment.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to connect the queue and environment.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Sets the priority of the environments in the queue from 0 to 10,000, where 0 is the highest priority (activated first and deactivated last). If two environments share the same priority value, the environment created first takes higher priority.
   * @public
   */
  priority: number | undefined;

  /**
   * The template's file type, <code>JSON</code> or <code>YAML</code>.
   * @public
   */
  templateType: EnvironmentTemplateType | undefined;

  /**
   * The environment template to use in the queue.
   * @public
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueEnvironmentResponse {
  /**
   * The queue environment ID.
   * @public
   */
  queueEnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueFleetAssociationRequest {
  /**
   * The ID of the farm that the queue and fleet belong to.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueFleetAssociationResponse {}

/**
 * @public
 */
export interface CreateQueueLimitAssociationRequest {
  /**
   * The unique identifier of the farm that contains the queue and limit to associate.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the queue to associate with the limit.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit to associate with the queue.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueLimitAssociationResponse {}

/**
 * The details of the file system location for the resource.
 * @public
 */
export interface FileSystemLocation {
  /**
   * The location name.
   * @public
   */
  name: string | undefined;

  /**
   * The file path.
   * @public
   */
  path: string | undefined;

  /**
   * The type of file.
   * @public
   */
  type: FileSystemLocationType | undefined;
}

/**
 * @public
 */
export interface CreateStorageProfileRequest {
  /**
   * The farm ID of the farm to connect to the storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the storage profile.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The type of operating system (OS) for the storage profile.
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * File system paths to include in the storage profile.
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface CreateStorageProfileResponse {
  /**
   * The storage profile ID.
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * The host property details.
 * @public
 */
export interface HostPropertiesRequest {
  /**
   * The IP address of the host.
   * @public
   */
  ipAddresses?: IpAddresses | undefined;

  /**
   * The host name.
   * @public
   */
  hostName?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerRequest {
  /**
   * The farm ID of the farm to connect to the worker.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID to connect to the worker.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The IP address and host name of the worker.
   * @public
   */
  hostProperties?: HostPropertiesRequest | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkerResponse {
  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;
}

/**
 * The timestamp in date-time format.
 * @public
 */
export interface DateTimeFilterExpression {
  /**
   * The name of the date-time field to filter on.
   * @public
   */
  name: string | undefined;

  /**
   * The type of comparison to use to filter the results.
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * The date and time.
   * @public
   */
  dateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteQueueFleetAssociationRequest {
  /**
   * The farm ID of the farm that holds the queue-fleet association.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue-fleet association.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID of the queue-fleet association.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueFleetAssociationResponse {}

/**
 * @public
 */
export interface DeleteQueueLimitAssociationRequest {
  /**
   * The unique identifier of the farm that contains the queue and limit to disassociate.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the queue to disassociate.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit to disassociate.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueLimitAssociationResponse {}

/**
 * @public
 */
export interface DeleteFarmRequest {
  /**
   * The farm ID of the farm to delete.
   * @public
   */
  farmId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFarmResponse {}

/**
 * @public
 */
export interface DeleteLimitRequest {
  /**
   * The unique identifier of the farm that contains the limit to delete.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the limit to delete.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLimitResponse {}

/**
 * @public
 */
export interface DeleteStorageProfileRequest {
  /**
   * The farm ID of the farm from which to remove the storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The storage profile ID of the storage profile to delete.
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageProfileResponse {}

/**
 * @public
 */
export interface DisassociateMemberFromFarmRequest {
  /**
   * The farm ID of the farm to disassociate from the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * A member's principal ID to disassociate from a farm.
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromFarmResponse {}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * The farm ID of the farm to remove from the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet to delete.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {}

/**
 * @public
 */
export interface DisassociateMemberFromFleetRequest {
  /**
   * The farm ID of the fleet to disassociate a member from.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet to from which to disassociate a member.
   * @public
   */
  fleetId: string | undefined;

  /**
   * A member's principal ID to disassociate from a fleet.
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromFleetResponse {}

/**
 * @public
 */
export interface GetFleetRequest {
  /**
   * The farm ID of the farm in the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet to get.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * The amounts and attributes of fleets.
 * @public
 */
export interface FleetCapabilities {
  /**
   * Amount capabilities of the fleet.
   * @public
   */
  amounts?: FleetAmountCapability[] | undefined;

  /**
   * Attribute capabilities of the fleet.
   * @public
   */
  attributes?: FleetAttributeCapability[] | undefined;
}

/**
 * @public
 */
export interface GetFleetResponse {
  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The farm ID of the farm in the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The status of the fleet.
   * @public
   */
  status: FleetStatus | undefined;

  /**
   * A message that communicates a suspended status of the fleet.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The Auto Scaling status of the fleet. Either <code>GROWING</code>, <code>STEADY</code>, or <code>SHRINKING</code>.
   * @public
   */
  autoScalingStatus?: AutoScalingStatus | undefined;

  /**
   * The number of target workers in the fleet.
   * @public
   */
  targetWorkerCount?: number | undefined;

  /**
   * The number of workers in the fleet.
   * @public
   */
  workerCount: number | undefined;

  /**
   * The minimum number of workers specified in the fleet.
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * The maximum number of workers specified in the fleet.
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * The configuration setting for the fleet.
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;

  /**
   * Outlines what the fleet is capable of for minimums, maximums, and naming, in addition to attribute names and values.
   * @public
   */
  capabilities?: FleetCapabilities | undefined;

  /**
   * The IAM role ARN.
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface ListFleetMembersRequest {
  /**
   * The farm ID of the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID to include on the list.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The fleet member.
 * @public
 */
export interface FleetMember {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The principal ID of the fleet member.
   * @public
   */
  principalId: string | undefined;

  /**
   * The principal type of the fleet member.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The identity store ID.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The fleet member's membership level.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * @public
 */
export interface ListFleetMembersResponse {
  /**
   * The members on the list.
   * @public
   */
  members: FleetMember[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * The farm ID of the fleets.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal ID of the members to include in the fleet.
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The display names of a list of fleets.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * The status of the fleet.
   * @public
   */
  status?: FleetStatus | undefined;
}

/**
 * The details of a fleet.
 * @public
 */
export interface FleetSummary {
  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the fleet summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The status of the fleet.
   * @public
   */
  status: FleetStatus | undefined;

  /**
   * A message that communicates a suspended status of the fleet.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The Auto Scaling status of a fleet.
   * @public
   */
  autoScalingStatus?: AutoScalingStatus | undefined;

  /**
   * The target number of workers in a fleet.
   * @public
   */
  targetWorkerCount?: number | undefined;

  /**
   * The number of workers in the fleet summary.
   * @public
   */
  workerCount: number | undefined;

  /**
   * The minimum number of workers in the fleet.
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * The maximum number of workers specified in the fleet.
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * The configuration details for the fleet.
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * The fleets on the list.
   * @public
   */
  fleets: FleetSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID to update.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the fleet to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the fleet to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role ARN that the fleet's workers assume while running jobs.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The minimum number of workers in the fleet.
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * The maximum number of workers in the fleet.
   *
   * Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to <code>CreateWorker</code> before the field updates, you might exceed your fleet's maximum worker count. For example, if your <code>maxWorkerCount</code> is 10 and you currently have 9 workers, making two quick <code>CreateWorker</code> calls might successfully create 2 workers instead of 1, resulting in 11 total workers.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The fleet configuration to update.
   * @public
   */
  configuration?: FleetConfiguration | undefined;

  /**
   * Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFleetResponse {}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * The farm ID of the farm that contains the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet that contains the volume.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The volume ID of the volume to delete.
   * @public
   */
  volumeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeResponse {}

/**
 * @public
 */
export interface GetVolumeRequest {
  /**
   * The farm ID of the farm that contains the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet that contains the volume.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The volume ID of the volume to retrieve.
   * @public
   */
  volumeId: string | undefined;
}

/**
 * @public
 */
export interface GetVolumeResponse {
  /**
   * The volume ID.
   * @public
   */
  volumeId: string | undefined;

  /**
   * The farm ID of the farm that contains the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet that contains the volume.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The state of the volume.
   * @public
   */
  state: VolumeState | undefined;

  /**
   * The volume size in GiB.
   * @public
   */
  sizeGiB: number | undefined;

  /**
   * The Availability Zone ID of the volume.
   * @public
   */
  availabilityZoneId: string | undefined;

  /**
   * The worker ID of the worker the volume is attached to.
   * @public
   */
  attachedWorkerId?: string | undefined;

  /**
   * The EBS volume type.
   * @public
   */
  volumeType: EbsVolumeType | undefined;

  /**
   * The IOPS of the volume.
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput of the volume in MiB.
   * @public
   */
  throughputMiB?: number | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the volume was last assigned to a worker.
   * @public
   */
  lastAssignedAt?: Date | undefined;

  /**
   * The date and time the volume was last released from a worker.
   * @public
   */
  lastReleasedAt?: Date | undefined;

  /**
   * The date and time the volume expires and will be deleted.
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListVolumesRequest {
  /**
   * The farm ID of the farm that contains the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet that contains the volumes.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of a persistent volume.
 * @public
 */
export interface VolumeSummary {
  /**
   * The volume ID.
   * @public
   */
  volumeId: string | undefined;

  /**
   * The farm ID of the farm that contains the fleet.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the fleet that contains the volume.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The state of the volume.
   * @public
   */
  state: VolumeState | undefined;

  /**
   * The volume size in GiB.
   * @public
   */
  sizeGiB: number | undefined;

  /**
   * The Availability Zone ID of the volume.
   * @public
   */
  availabilityZoneId: string | undefined;

  /**
   * The worker ID of the worker the volume is attached to.
   * @public
   */
  attachedWorkerId?: string | undefined;
}

/**
 * @public
 */
export interface ListVolumesResponse {
  /**
   * The volumes on the list.
   * @public
   */
  volumes: VolumeSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerRequest {
  /**
   * The farm ID of the worker to delete.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker to delete.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID of the worker to delete.
   * @public
   */
  workerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerResponse {}

/**
 * @public
 */
export interface GetWorkerRequest {
  /**
   * The farm ID for the worker.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the worker.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkerResponse {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;

  /**
   * The host properties for the worker.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The status of the worker.
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * The logs for the associated worker.
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsForWorkerRequest {
  /**
   * The farm ID for the session.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID for the session.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID for the session.
   * @public
   */
  workerId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summarizes the session for a particular worker.
 * @public
 */
export interface WorkerSessionSummary {
  /**
   * The session ID for the session action.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The queue ID for the queue associated to the worker.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the job associated with the worker's session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The life cycle status for the worker's session.
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The life cycle status </p>
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;
}

/**
 * @public
 */
export interface ListSessionsForWorkerResponse {
  /**
   * The sessions in the response.
   * @public
   */
  sessions: WorkerSessionSummary[] | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkersRequest {
  /**
   * The farm ID connected to the workers.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID of the workers.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of details for a worker.
 * @public
 */
export interface WorkerSummary {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;

  /**
   * The host properties of the worker.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The status of the worker.
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * The log configuration for the worker.
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkersResponse {
  /**
   * The workers on the list.
   * @public
   */
  workers: WorkerSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the worker amount capability.
 * @public
 */
export interface WorkerAmountCapability {
  /**
   * The name of the worker amount capability.
   * @public
   */
  name: string | undefined;

  /**
   * The value of the worker amount capability.
   * @public
   */
  value: number | undefined;
}

/**
 * The details of the worker attribute capability.
 * @public
 */
export interface WorkerAttributeCapability {
  /**
   * The name of the worker attribute capability.
   * @public
   */
  name: string | undefined;

  /**
   * The values of the worker amount capability.
   * @public
   */
  values: string[] | undefined;
}

/**
 * The details for worker capabilities.
 * @public
 */
export interface WorkerCapabilities {
  /**
   * The worker capabilities amounts on a list of worker capabilities.
   * @public
   */
  amounts: WorkerAmountCapability[] | undefined;

  /**
   * The worker attribute capabilities in the list of attribute capabilities.
   * @public
   */
  attributes: WorkerAttributeCapability[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID to update.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID to update.
   * @public
   */
  workerId: string | undefined;

  /**
   * The worker status to update.
   * @public
   */
  status?: UpdatedWorkerStatus | undefined;

  /**
   * The worker capabilities to update.
   * @public
   */
  capabilities?: WorkerCapabilities | undefined;

  /**
   * The host properties to update.
   * @public
   */
  hostProperties?: HostPropertiesRequest | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerResponse {
  /**
   * The worker log to update.
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * The script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;
}

/**
 * The output manifest properties reported by the worker agent for a completed task run.
 * @public
 */
export interface TaskRunManifestPropertiesRequest {
  /**
   * The manifest file path.
   * @public
   */
  outputManifestPath?: string | undefined;

  /**
   * The hash value of the file.
   * @public
   */
  outputManifestHash?: string | undefined;
}

/**
 * The updated session action information as it relates to completion and progress of the session.
 * @public
 */
export interface UpdatedSessionActionInfo {
  /**
   * The status of the session upon completion.
   * @public
   */
  completedStatus?: CompletedStatus | undefined;

  /**
   * The process exit code. The default Deadline Cloud worker agent converts unsigned 32-bit exit codes to signed 32-bit exit codes.
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * A message to indicate the progress of the updated session action.
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The updated time.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The percentage completed.
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * A list of output manifest properties reported by the worker agent, with each entry corresponding to a manifest property in the job.
   * @public
   */
  manifests?: TaskRunManifestPropertiesRequest[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerScheduleRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The fleet ID to update.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID to update.
   * @public
   */
  workerId: string | undefined;

  /**
   * The session actions associated with the worker schedule to update.
   * @public
   */
  updatedSessionActions?: Record<string, UpdatedSessionActionInfo> | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerScheduleResponse {
  /**
   * The assigned sessions to update.
   * @public
   */
  assignedSessions: Record<string, AssignedSession> | undefined;

  /**
   * The session actions associated with the worker schedule to cancel.
   * @public
   */
  cancelSessionActions: Record<string, string[]> | undefined;

  /**
   * The status to update the worker to.
   * @public
   */
  desiredWorkerStatus?: DesiredWorkerStatus | undefined;

  /**
   * Updates the time interval (in seconds) for the schedule.
   * @public
   */
  updateIntervalSeconds: number | undefined;
}

/**
 * @public
 */
export interface GetFarmRequest {
  /**
   * The farm ID of the farm.
   * @public
   */
  farmId: string | undefined;
}

/**
 * @public
 */
export interface GetFarmResponse {
  /**
   * The farm ID of the farm to get.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The ARN of the KMS key used on the farm.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment.
   * @public
   */
  costScaleFactor: number | undefined;
}

/**
 * @public
 */
export interface GetLimitRequest {
  /**
   * The unique identifier of the farm that contains the limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the limit to return.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface GetLimitResponse {
  /**
   * The unique identifier of the farm that contains the limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the limit.
   * @public
   */
  limitId: string | undefined;

  /**
   * The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.
   * @public
   */
  currentCount: number | undefined;

  /**
   * The Unix timestamp of the date and time that the limit was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user identifier of the person that created the limit.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Unix timestamp of the date and time that the limit was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user identifier of the person that last updated the limit.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The display name of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.
   * @public
   */
  amountRequirementName: string | undefined;

  /**
   * The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.
   *
   * The <code>maxValue</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.
   *
   * @public
   */
  maxCount: number | undefined;

  /**
   * <p>The description of the limit that helps identify what the limit is used for.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileRequest {
  /**
   * The farm ID for the storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The storage profile ID.
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileResponse {
  /**
   * The storage profile ID.
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The operating system (OS) for the storage profile.
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The location of the files for the storage profile.
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface ListFarmMembersRequest {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The member of a farm.
 * @public
 */
export interface FarmMember {
  /**
   * The farm ID of the farm member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The principal ID of the farm member.
   * @public
   */
  principalId: string | undefined;

  /**
   * The principal type of the farm member.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The identity store ID of the farm member.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The farm member's membership level.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * @public
 */
export interface ListFarmMembersResponse {
  /**
   * The members on the list.
   * @public
   */
  members: FarmMember[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFarmsRequest {
  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal ID of the member to list on the farm.
   * @public
   */
  principalId?: string | undefined;
}

/**
 * The summary of details for a farm.
 * @public
 */
export interface FarmSummary {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The ARN for the KMS key.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListFarmsResponse {
  /**
   * Farms on the list.
   * @public
   */
  farms: FarmSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLimitsRequest {
  /**
   * The unique identifier of the farm that contains the limits.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of limits to return in each page of results.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides information about a specific limit.
 * @public
 */
export interface LimitSummary {
  /**
   * The unique identifier of the farm that contains the limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the limit.
   * @public
   */
  limitId: string | undefined;

  /**
   * The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.
   * @public
   */
  currentCount: number | undefined;

  /**
   * The Unix timestamp of the date and time that the limit was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user identifier of the person that created the limit.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Unix timestamp of the date and time that the limit was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user identifier of the person that last updated the limit.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The name of the limit used in lists to identify the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.
   * @public
   */
  amountRequirementName: string | undefined;

  /**
   * The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.
   *
   * The <code>maxValue</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.
   *
   * @public
   */
  maxCount: number | undefined;
}

/**
 * @public
 */
export interface ListLimitsResponse {
  /**
   * A list of limits that the farm contains.
   * @public
   */
  limits: LimitSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageProfilesRequest {
  /**
   * The farm ID of the storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a storage profile.
 * @public
 */
export interface StorageProfileSummary {
  /**
   * The storage profile ID.
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The operating system (OS) family.
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;
}

/**
 * @public
 */
export interface ListStorageProfilesResponse {
  /**
   * The storage profiles.
   * @public
   */
  storageProfiles: StorageProfileSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * The ID of the farm from which to remove the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue to delete.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 */
export interface DeleteQueueEnvironmentRequest {
  /**
   * The farm ID of the farm from which to remove the queue environment.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue environment to delete.
   * @public
   */
  queueId: string | undefined;

  /**
   * The queue environment ID of the queue environment to delete.
   * @public
   */
  queueEnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueEnvironmentResponse {}

/**
 * @public
 */
export interface DisassociateMemberFromQueueRequest {
  /**
   * The farm ID for the queue to disassociate from a member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue in which you're disassociating from a member.
   * @public
   */
  queueId: string | undefined;

  /**
   * A member's principal ID to disassociate from a queue.
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromQueueResponse {}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * The farm ID of the farm in the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the queue to retrieve.
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * The farm ID for the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The display name of the queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The status of the queue.</p> <ul> <li> <p> <code>ACTIVE</code>–The queue is active.</p> </li> <li> <p> <code>SCHEDULING</code>–The queue is scheduling.</p> </li> <li> <p> <code>SCHEDULING_BLOCKED</code>–The queue scheduling is blocked. See the provided reason.</p> </li> </ul>
   * @public
   */
  status: QueueStatus | undefined;

  /**
   * The default action taken on a queue if a budget wasn't configured.
   * @public
   */
  defaultBudgetAction: DefaultQueueBudgetAction | undefined;

  /**
   * The reason the queue was blocked.
   * @public
   */
  blockedReason?: QueueBlockedReason | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The job attachment settings for the queue.
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * The IAM role ARN.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A list of the required file system location names in the queue.
   * @public
   */
  requiredFileSystemLocationNames?: string[] | undefined;

  /**
   * The storage profile IDs for the queue.
   * @public
   */
  allowedStorageProfileIds?: string[] | undefined;

  /**
   * The jobs in the queue ran as this specified POSIX user.
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * The scheduling configuration for the queue. This configuration determines how workers are assigned to jobs in the queue.
   * @public
   */
  schedulingConfiguration?: SchedulingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetQueueEnvironmentRequest {
  /**
   * The farm ID for the queue environment.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the queue environment.
   * @public
   */
  queueId: string | undefined;

  /**
   * The queue environment ID.
   * @public
   */
  queueEnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface GetQueueEnvironmentResponse {
  /**
   * The queue environment ID.
   * @public
   */
  queueEnvironmentId: string | undefined;

  /**
   * The name of the queue environment.
   * @public
   */
  name: string | undefined;

  /**
   * The priority of the queue environment.
   * @public
   */
  priority: number | undefined;

  /**
   * The type of template for the queue environment.
   * @public
   */
  templateType: EnvironmentTemplateType | undefined;

  /**
   * The template for the queue environment.
   * @public
   */
  template: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.&gt;
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileForQueueRequest {
  /**
   * The farm ID for the queue in storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID the queue in the storage profile.
   * @public
   */
  queueId: string | undefined;

  /**
   * The storage profile ID for the storage profile in the queue.
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileForQueueResponse {
  /**
   * The storage profile ID.
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile connected to a queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The operating system of the storage profile in the queue.
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * The location of the files for the storage profile within the queue.
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromJobRequest {
  /**
   * The farm ID for the job to disassociate from the member.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID connected to a job for which you're disassociating a member.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to disassociate from a member in a job.
   * @public
   */
  jobId: string | undefined;

  /**
   * A member's principal ID to disassociate from a job.
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromJobResponse {}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * The farm ID of the farm in the job.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID associated with the job.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the job.
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status for the job. </p>
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * A message that communicates the status of the life cycle for the job.
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * The job priority.
   * @public
   */
  priority: number | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The task run status for the job.
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * The task status with which the job started.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the job failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The storage profile ID associated with the job.
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries per failed tasks.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * The parameters for the job.
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * The attachments for the job.
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * <p>The description of the job.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.
   *
   * If you don't set the <code>maxWorkerCount</code> when you create a job, this value is not returned in the response.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The job ID for the source job.
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The farm ID for the session.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the session.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session ID.
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The session ID.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The fleet ID for the session.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID for the session.
   * @public
   */
  workerId: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The life cycle status of the session.
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The life cycle status with which the session started.
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The session log.
   * @public
   */
  log: LogConfiguration | undefined;

  /**
   * Provides the Amazon EC2 properties of the host.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The worker log for the session.
   * @public
   */
  workerLog?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSessionActionRequest {
  /**
   * The farm ID for the session action.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the session action.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session action ID for the session.
   * @public
   */
  sessionActionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionActionResponse {
  /**
   * The session action ID.
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * The status of the session action.
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The Linux timestamp of the date and time the session action was last updated.
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * The percentage completed for a session action.
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * The list of manifest properties that describe file attachments for the task run.
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * The session ID for the session action.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The process exit code. The default Deadline Cloud worker agent converts unsigned 32-bit exit codes to signed 32-bit exit codes.
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * The message that communicates the progress of the session action.
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * The limits and their amounts acquired during a session action. If no limits were acquired during the session, this field isn't returned.
   * @public
   */
  acquiredLimits?: AcquiredLimit[] | undefined;

  /**
   * The session action definition.
   * @public
   */
  definition: SessionActionDefinition | undefined;
}

/**
 * @public
 */
export interface GetStepRequest {
  /**
   * The farm ID for the step.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the step.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the step.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface GetStepResponse {
  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The name of the step.
   * @public
   */
  name: string | undefined;

  /**
   * The life cycle status of the step.
   * @public
   */
  lifecycleStatus: StepLifecycleStatus | undefined;

  /**
   * A message that describes the lifecycle status of the step.
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * The task run status for the job.
   * @public
   */
  taskRunStatus: TaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the step failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The task status with which the job started.
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The number of dependencies in the step.
   * @public
   */
  dependencyCounts?: DependencyCounts | undefined;

  /**
   * The required capabilities of the step.
   * @public
   */
  requiredCapabilities?: StepRequiredCapabilities | undefined;

  /**
   * A list of step parameters and the combination expression for the step.
   * @public
   */
  parameterSpace?: ParameterSpace | undefined;

  /**
   * <p>The description of the step.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskRequest {
  /**
   * The farm ID of the farm connected to the task.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the queue connected to the task.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID of the job connected to the task.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID for the step connected to the task.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID.
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface GetTaskResponse {
  /**
   * The task ID.
   * @public
   */
  taskId: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The run status for the task.
   * @public
   */
  runStatus: TaskRunStatus | undefined;

  /**
   * The run status with which to start the task.
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * The number of times that the task failed and was retried.
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The latest session action ID for the task.
   * @public
   */
  latestSessionActionId?: string | undefined;

  /**
   * The parameters for the task.
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * @public
 */
export interface ListJobMembersRequest {
  /**
   * The farm ID of the job to list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to include on the list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to include on the list.
   * @public
   */
  jobId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details for a job member.
 * @public
 */
export interface JobMember {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The principal ID of the job member.
   * @public
   */
  principalId: string | undefined;

  /**
   * The principal type of the job member.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The identity store ID.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The job member's membership level.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * @public
 */
export interface ListJobMembersResponse {
  /**
   * The members on the list.
   * @public
   */
  members: JobMember[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobParameterDefinitionsRequest {
  /**
   * The farm ID of the job to list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to include on the list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to include on the list.
   * @public
   */
  jobId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListJobParameterDefinitionsResponse {
  /**
   * Lists parameter definitions of a job.
   * @public
   */
  jobParameterDefinitions: __DocumentType[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The farm ID for the jobs.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the job.
   * @public
   */
  queueId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal ID of the members on the jobs.
   * @public
   */
  principalId?: string | undefined;
}

/**
 * A summary of job details.
 * @public
 */
export interface JobSummary {
  /**
   * The job ID.
   * @public
   */
  jobId: string | undefined;

  /**
   * The job name.
   * @public
   */
  name: string | undefined;

  /**
   * The life cycle status.
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * The life cycle status message.
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * The job priority.
   * @public
   */
  priority: number | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The task run status for the job.</p> <ul> <li> <p> <code>PENDING</code>–pending and waiting for resources.</p> </li> <li> <p> <code>READY</code>–ready to be processed.</p> </li> <li> <p> <code>ASSIGNED</code>–assigned and will run next on a worker.</p> </li> <li> <p> <code>SCHEDULED</code>–scheduled to be run on a worker.</p> </li> <li> <p> <code>INTERRUPTING</code>–being interrupted.</p> </li> <li> <p> <code>RUNNING</code>–running on a worker.</p> </li> <li> <p> <code>SUSPENDED</code>–the task is suspended.</p> </li> <li> <p> <code>CANCELED</code>–the task has been canceled.</p> </li> <li> <p> <code>FAILED</code>–the task has failed.</p> </li> <li> <p> <code>SUCCEEDED</code>–the task has succeeded.</p> </li> </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the job failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries for a job.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.
   *
   * You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.
   *
   * If you don't specify the <code>maxWorkerCount</code>, the default is -1.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The job ID for the source job.
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * The jobs on the list.
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionActionsRequest {
  /**
   * The farm ID for the session actions list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the session actions list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the session actions list.
   * @public
   */
  jobId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The session ID to include on the sessions action list.
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The task ID for the session actions list.
   * @public
   */
  taskId?: string | undefined;
}

/**
 * Defines the environment a session action enters in.
 * @public
 */
export interface EnvironmentEnterSessionActionDefinitionSummary {
  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * A summary of the environment details for which a session action to exits.
 * @public
 */
export interface EnvironmentExitSessionActionDefinitionSummary {
  /**
   * The environment ID.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * The summary of the session action definition for syncing input job attachments.
 * @public
 */
export interface SyncInputJobAttachmentsSessionActionDefinitionSummary {
  /**
   * The step ID for the sync input job attachments session action summary.
   * @public
   */
  stepId?: string | undefined;
}

/**
 * The details of a task run in a session action.
 * @public
 */
export interface TaskRunSessionActionDefinitionSummary {
  /**
   * The task ID.
   * @public
   */
  taskId?: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The parameters of a task run in a session action.
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * The details of a session action definition.
 * @public
 */
export type SessionActionDefinitionSummary =
  | SessionActionDefinitionSummary.EnvEnterMember
  | SessionActionDefinitionSummary.EnvExitMember
  | SessionActionDefinitionSummary.SyncInputJobAttachmentsMember
  | SessionActionDefinitionSummary.TaskRunMember
  | SessionActionDefinitionSummary.$UnknownMember;

/**
 * @public
 */
export namespace SessionActionDefinitionSummary {
  /**
   * The environment to enter into.
   * @public
   */
  export interface EnvEnterMember {
    envEnter: EnvironmentEnterSessionActionDefinitionSummary;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The environment to exit from.
   * @public
   */
  export interface EnvExitMember {
    envEnter?: never;
    envExit: EnvironmentExitSessionActionDefinitionSummary;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The task run.
   * @public
   */
  export interface TaskRunMember {
    envEnter?: never;
    envExit?: never;
    taskRun: TaskRunSessionActionDefinitionSummary;
    syncInputJobAttachments?: never;
    $unknown?: never;
  }

  /**
   * The session action definition summary for syncing input job attachments.
   * @public
   */
  export interface SyncInputJobAttachmentsMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinitionSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    envEnter?: never;
    envExit?: never;
    taskRun?: never;
    syncInputJobAttachments?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    envEnter: (value: EnvironmentEnterSessionActionDefinitionSummary) => T;
    envExit: (value: EnvironmentExitSessionActionDefinitionSummary) => T;
    taskRun: (value: TaskRunSessionActionDefinitionSummary) => T;
    syncInputJobAttachments: (value: SyncInputJobAttachmentsSessionActionDefinitionSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of a session action.
 * @public
 */
export interface SessionActionSummary {
  /**
   * The session action ID.
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * The status of the session action.
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The Linux timestamp of the last date and time that the session action was updated.
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * The completion percentage for the session action.
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * The list of manifest properties that describe file attachments for the task run.
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * The session action definition.
   * @public
   */
  definition: SessionActionDefinitionSummary | undefined;
}

/**
 * @public
 */
export interface ListSessionActionsResponse {
  /**
   * The session actions.
   * @public
   */
  sessionActions: SessionActionSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * The farm ID for the list of sessions.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the list of sessions
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the list of sessions.
   * @public
   */
  jobId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of a session.
 * @public
 */
export interface SessionSummary {
  /**
   * The session ID.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The life cycle status for the session.
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The target life cycle status for the session.
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * The sessions on the list.
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

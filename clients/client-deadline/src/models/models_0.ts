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
  DependencyConsumerResolutionStatus,
  DesiredWorkerStatus,
  EbsVolumeType,
  Ec2MarketType,
  EnvironmentTemplateType,
  FileSystemLocationType,
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
 * <p>Defines the maximum and minimum number of GPU accelerators required for a worker instance..</p>
 * @public
 */
export interface AcceleratorCountRange {
  /**
   * <p>The minimum number of GPU accelerators in the worker host.</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum number of GPU accelerators in the worker host.</p>
   * @public
   */
  max?: number | undefined;
}

/**
 * <p>Describes a specific GPU accelerator required for an Amazon Elastic Compute Cloud worker host.</p>
 * @public
 */
export interface AcceleratorSelection {
  /**
   * <p>The name of the chip used by the GPU accelerator.</p> <p>The available GPU accelerators are:</p> <ul> <li> <p> <code>t4</code> - NVIDIA T4 Tensor Core GPU (16 GiB memory)</p> </li> <li> <p> <code>a10g</code> - NVIDIA A10G Tensor Core GPU (24 GiB memory)</p> </li> <li> <p> <code>l4</code> - NVIDIA L4 Tensor Core GPU (24 GiB memory)</p> </li> <li> <p> <code>l40s</code> - NVIDIA L40S Tensor Core GPU (48 GiB memory)</p> </li> <li> <p> <code>rtx-pro-server-6000</code> - NVIDIA RTX PRO Server 6000 GPU (96 GiB memory)</p> </li> </ul>
   * @public
   */
  name: AcceleratorName | undefined;

  /**
   * <p>Specifies the runtime driver to use for the GPU accelerator. You must use the same runtime for all GPUs in a fleet. </p> <p>You can choose from the following runtimes:</p> <ul> <li> <p> <code>latest</code> - Use the latest runtime available for the chip. If you specify <code>latest</code> and a new version of the runtime is released, the new version of the runtime is used.</p> </li> <li> <p> <code>grid:r580</code> - <a href="https://docs.nvidia.com/vgpu/19.0/index.html">NVIDIA vGPU software 19</a> </p> </li> <li> <p> <code>grid:r570</code> - <a href="https://docs.nvidia.com/vgpu/18.0/index.html">NVIDIA vGPU software 18</a> </p> </li> <li> <p> <code>grid:r535</code> - <a href="https://docs.nvidia.com/vgpu/16.0/index.html">NVIDIA vGPU software 16</a> </p> </li> </ul> <p>If you don't specify a runtime, Amazon Web Services Deadline Cloud uses <code>latest</code> as the default. However, if you have multiple accelerators and specify <code>latest</code> for some and leave others blank, Amazon Web Services Deadline Cloud raises an exception.</p> <important> <p>Not all runtimes are compatible with all accelerator types:</p> <ul> <li> <p> <code>t4</code> and <code>a10g</code>: Support all runtimes (<code>grid:r580</code>, <code>grid:r570</code>, <code>grid:r535</code>)</p> </li> <li> <p> <code>l4</code> and <code>l40s</code>: Only support <code>grid:r570</code> and newer</p> </li> <li> <p> <code>rtx-pro-server-6000</code>: Only supports <code>grid:r580</code> </p> </li> </ul> <p>All accelerators in a fleet must use the same runtime version. You cannot mix different runtime versions within a single fleet.</p> </important> <note> <p>When you specify <code>latest</code>, it resolves to <code>grid:r580</code> for all currently supported accelerators.</p> </note>
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
 * <p>Defines the maximum and minimum amount of memory, in MiB, to use for the accelerator.</p>
 * @public
 */
export interface AcceleratorTotalMemoryMiBRange {
  /**
   * <p>The minimum amount of memory to use for the accelerator, measured in MiB.</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum amount of memory to use for the accelerator, measured in MiB.</p>
   * @public
   */
  max?: number | undefined;
}

/**
 * <p>Provides information about the number of resources used.</p>
 * @public
 */
export interface AcquiredLimit {
  /**
   * <p>The unique identifier of the limit.</p>
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The number of limit resources used.</p>
   * @public
   */
  count: number | undefined;
}

/**
 * <p>The assigned starting environment for a worker during session.</p>
 * @public
 */
export interface AssignedEnvironmentEnterSessionActionDefinition {
  /**
   * <p>The environment ID of the assigned environment at the start of a session.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>The assigned environment when a worker exits a session.</p>
 * @public
 */
export interface AssignedEnvironmentExitSessionActionDefinition {
  /**
   * <p>The environment ID of the assigned environment when exiting a session.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>Log configuration details.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The log drivers for worker related logs.</p>
   * @public
   */
  logDriver: string | undefined;

  /**
   * <p>The options for a log driver.</p>
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * <p>The parameters for the log configuration.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The log configuration error details.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The assigned session action definition for syncing input job attachments.</p>
 * @public
 */
export interface AssignedSyncInputJobAttachmentsSessionActionDefinition {
  /**
   * <p>The step ID for the assigned sync input job attachments session action.</p>
   * @public
   */
  stepId?: string | undefined;
}

/**
 * <p>The data types for the task parameters.</p>
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
   * <p>A signed integer represented as a string.</p>
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
   * <p>A double precision IEEE-754 floating point number represented as a string.</p>
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
   * <p>A UTF-8 string.</p>
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
   * <p>A file system path represented as a string.</p>
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
   * <p>A range (for example 1-10) or selection of specific (for example 1,3,7,8,10) integers represented as a string.</p>
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
 * <p>The specific task, step, and parameters to include.</p>
 * @public
 */
export interface AssignedTaskRunSessionActionDefinition {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The parameters to include.</p>
   * @public
   */
  parameters: Record<string, TaskParameterValue> | undefined;
}

/**
 * <p>The definition of the assigned session action.</p>
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
   * <p>The environment a session starts on.</p>
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
   * <p>The environment a session exits from.</p>
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
   * <p>The task run.</p>
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
   * <p>The job attachments to sync for the assigned session action.</p>
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
 * <p>The action for a session defined by the session action ID.</p>
 * @public
 */
export interface AssignedSessionAction {
  /**
   * <p>The session action ID for the assigned session.</p>
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * <p>The definition of the assigned session action.</p>
   * @public
   */
  definition: AssignedSessionActionDefinition | undefined;
}

/**
 * <p>The assigned session for the worker.</p>
 * @public
 */
export interface AssignedSession {
  /**
   * <p>The queue ID of the assigned session.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the assigned session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session actions to apply to the assigned session.</p>
   * @public
   */
  sessionActions: AssignedSessionAction[] | undefined;

  /**
   * <p>The log configuration for the worker's assigned session.</p>
   * @public
   */
  logConfiguration: LogConfiguration | undefined;
}

/**
 * Shared member fields for Associate inputs and \{Resource\}Member response structures.
 * principalId is excluded because it has @httpLabel on inputs but not on responses.
 * @public
 */
export interface AssociateMemberToFarmRequest {
  /**
   * <p>The ID of the farm to associate with the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The principal type of the member to associate with the farm.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The identity store ID of the member to associate with the farm.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The principal's membership level for the associated farm.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * <p>The member's principal ID to associate with the farm.</p>
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFarmResponse {}

/**
 * <p>The details of a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The error message for the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * Shared member fields for Associate inputs and \{Resource\}Member response structures.
 * principalId is excluded because it has @httpLabel on inputs but not on responses.
 * @public
 */
export interface AssociateMemberToFleetRequest {
  /**
   * <p>The farm ID of the fleet to associate with the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The ID of the fleet to associate with a member.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The member's principal type to associate with the fleet.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The member's identity store ID to associate with the fleet.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The principal's membership level for the associated fleet.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * <p>The member's principal ID to associate with a fleet.</p>
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToFleetResponse {}

/**
 * Shared member fields for Associate inputs and \{Resource\}Member response structures.
 * principalId is excluded because it has @httpLabel on inputs but not on responses.
 * @public
 */
export interface AssociateMemberToJobRequest {
  /**
   * <p>The farm ID of the job to associate with the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to associate to the member.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID to associate with the member.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The member's principal type to associate with the job.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The member's identity store ID to associate with the job.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The principal's membership level for the associated job.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * <p>The member's principal ID to associate with the job.</p>
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToJobResponse {}

/**
 * Shared member fields for Associate inputs and \{Resource\}Member response structures.
 * principalId is excluded because it has @httpLabel on inputs but not on responses.
 * @public
 */
export interface AssociateMemberToQueueRequest {
  /**
   * <p>The farm ID of the queue to associate with the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The ID of the queue to associate to the member.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The member's principal type to associate with the queue.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The member's identity store ID to associate with the queue.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The principal's membership level for the associated queue.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;

  /**
   * <p>The member's principal ID to associate with the queue.</p>
   * @public
   */
  principalId: string | undefined;
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
   * <p>The farm ID for the fleet's farm.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * <p>The Identity and Access Management credentials.</p>
 * @public
 */
export interface AwsCredentials {
  /**
   * <p>The IAM access key ID.</p>
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * <p>The IAM secret access key.</p>
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * <p>The IAM session token</p>
   * @public
   */
  sessionToken: string | undefined;

  /**
   * <p>The expiration date and time of the IAM credentials.</p>
   * @public
   */
  expiration: Date | undefined;
}

/**
 * Shared response body for AssumeRole operations where credentials are required.
 * AssumeQueueRoleForWorkerResponse is excluded because credentials is optional there
 * because Queue.roleArn is optional, so the mixin's @required trait would be incorrect.
 * @public
 */
export interface AssumeFleetRoleForReadResponse {
  /**
   * <p>The credentials for the fleet role.</p>
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeFleetRoleForWorkerRequest {
  /**
   * <p>The farm ID for the fleet's farm.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID that contains the worker.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The ID of the worker assuming the fleet role.</p>
   * @public
   */
  workerId: string | undefined;
}

/**
 * Shared response body for AssumeRole operations where credentials are required.
 * AssumeQueueRoleForWorkerResponse is excluded because credentials is optional there
 * because Queue.roleArn is optional, so the mixin's @required trait would be incorrect.
 * @public
 */
export interface AssumeFleetRoleForWorkerResponse {
  /**
   * <p>The credentials for the worker.</p>
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForReadRequest {
  /**
   * <p>The farm ID of the farm containing the queue.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId: string | undefined;
}

/**
 * Shared response body for AssumeRole operations where credentials are required.
 * AssumeQueueRoleForWorkerResponse is excluded because credentials is optional there
 * because Queue.roleArn is optional, so the mixin's @required trait would be incorrect.
 * @public
 */
export interface AssumeQueueRoleForReadResponse {
  /**
   * <p>The credentials for the queue role.</p>
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForUserRequest {
  /**
   * <p>The farm ID of the queue that the user assumes the role for.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the queue that the user assumes the role for.</p>
   * @public
   */
  queueId: string | undefined;
}

/**
 * Shared response body for AssumeRole operations where credentials are required.
 * AssumeQueueRoleForWorkerResponse is excluded because credentials is optional there
 * because Queue.roleArn is optional, so the mixin's @required trait would be incorrect.
 * @public
 */
export interface AssumeQueueRoleForUserResponse {
  /**
   * <p>The credentials for the queue role that a user has access to.</p>
   * @public
   */
  credentials: AwsCredentials | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForWorkerRequest {
  /**
   * <p>The farm ID of the worker assuming the queue role.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker assuming the queue role.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID of the worker assuming the queue role.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The queue ID of the worker assuming the queue role.</p>
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface AssumeQueueRoleForWorkerResponse {
  /**
   * <p>The Amazon Web Services credentials for the role that the worker is assuming.</p>
   * @public
   */
  credentials?: AwsCredentials | undefined;
}

/**
 * <p>The details of the manifest that links a job's source information.</p>
 * @public
 */
export interface ManifestProperties {
  /**
   * <p>The file system location name.</p>
   * @public
   */
  fileSystemLocationName?: string | undefined;

  /**
   * <p>The file's root path.</p>
   * @public
   */
  rootPath: string | undefined;

  /**
   * <p>The format of the root path.</p>
   * @public
   */
  rootPathFormat: PathFormat | undefined;

  /**
   * <p>The file path relative to the directory.</p>
   * @public
   */
  outputRelativeDirectories?: string[] | undefined;

  /**
   * <p>The file path.</p>
   * @public
   */
  inputManifestPath?: string | undefined;

  /**
   * <p>The hash value of the file.</p>
   * @public
   */
  inputManifestHash?: string | undefined;
}

/**
 * <p>The job attachments.</p>
 * @public
 */
export interface Attachments {
  /**
   * <p>The manifest properties for the attachments.</p>
   * @public
   */
  manifests: ManifestProperties[] | undefined;

  /**
   * <p>The file system location for the attachments.</p>
   * @public
   */
  fileSystem?: JobAttachmentsFileSystem | undefined;
}

/**
 * <p>The identifiers for a job.</p>
 * @public
 */
export interface BatchGetJobIdentifier {
  /**
   * <p>The farm ID of the job.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the job.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetJobRequest {
  /**
   * <p>The list of job identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetJobIdentifier[] | undefined;
}

/**
 * <p>The error details for a job that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetJobError {
  /**
   * <p>The farm ID of the job that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the job that could not be retrieved.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the job that could not be retrieved.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetJobErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of job parameters.</p>
 * @public
 */
export type JobParameter =
  | JobParameter.FloatMember
  | JobParameter.IntMember
  | JobParameter.PathMember
  | JobParameter.StringMember
  | JobParameter.$UnknownMember;

/**
 * @public
 */
export namespace JobParameter {
  /**
   * <p>A signed integer represented as a string.</p>
   * @public
   */
  export interface IntMember {
    int: string;
    float?: never;
    string?: never;
    path?: never;
    $unknown?: never;
  }

  /**
   * <p>A double precision IEEE-754 floating point number represented as a string.</p>
   * @public
   */
  export interface FloatMember {
    int?: never;
    float: string;
    string?: never;
    path?: never;
    $unknown?: never;
  }

  /**
   * <p>A UTF-8 string.</p>
   * @public
   */
  export interface StringMember {
    int?: never;
    float?: never;
    string: string;
    path?: never;
    $unknown?: never;
  }

  /**
   * <p>A file system path represented as a string.</p>
   * @public
   */
  export interface PathMember {
    int?: never;
    float?: never;
    string?: never;
    path: string;
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The details of a job returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetJobItem {
  /**
   * <p>The farm ID of the job.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the job.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status of the job.</p>
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * <p>A message that communicates the status of the life cycle.</p>
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * <p>The job priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The task run status for the job.</p>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * <p>The task status to start with on the job.</p>
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * <p>The number of tasks for each run status for the job.</p>
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The number of times that tasks failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The storage profile ID associated with the job.</p>
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries per failed tasks.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The parameters for the job.</p>
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * <p>The attachments for the job.</p>
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * <p>The description of the job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The job ID for the source job.</p>
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetJobResponse {
  /**
   * <p>A list of jobs that were successfully retrieved.</p>
   * @public
   */
  jobs: BatchGetJobItem[] | undefined;

  /**
   * <p>A list of errors for jobs that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetJobError[] | undefined;
}

/**
 * <p>The IDs of the job and environment.</p>
 * @public
 */
export interface EnvironmentDetailsIdentifiers {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>Identifier details for job attachments.</p>
 * @public
 */
export interface JobAttachmentDetailsIdentifiers {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>The identifiers for a job.</p>
 * @public
 */
export interface JobDetailsIdentifiers {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>The details of identifiers for a step.</p>
 * @public
 */
export interface StepDetailsIdentifiers {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;
}

/**
 * <p>The details of a job entity identifier.</p>
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
   * <p>The job details.</p>
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
   * <p>The job attachment details.</p>
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
   * <p>The step details.</p>
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
   * <p>The environment details.</p>
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
   * <p>The farm ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID of the worker containing the job details to get.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The job identifiers to include within the job entity batch details.</p>
   * @public
   */
  identifiers: JobEntityIdentifiersUnion[] | undefined;
}

/**
 * <p>The details of a specified environment.</p>
 * @public
 */
export interface EnvironmentDetailsEntity {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The schema version in the environment.</p>
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * <p>The template used for the environment.</p>
   * @public
   */
  template: __DocumentType | undefined;
}

/**
 * <p>The job attachments.</p>
 * @public
 */
export interface JobAttachmentDetailsEntity {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The job attachments.</p>
   * @public
   */
  attachments: Attachments | undefined;
}

/**
 * <p>The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.</p>
 * @public
 */
export interface JobAttachmentSettings {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * <p>The root prefix.</p>
   * @public
   */
  rootPrefix: string | undefined;
}

/**
 * <p>The POSIX user.</p>
 * @public
 */
export interface PosixUser {
  /**
   * <p>The name of the POSIX user.</p>
   * @public
   */
  user: string | undefined;

  /**
   * <p>The name of the POSIX user's group.</p>
   * @public
   */
  group: string | undefined;
}

/**
 * <p>The Windows user details.</p>
 * @public
 */
export interface WindowsUser {
  /**
   * <p>The user.</p>
   * @public
   */
  user: string | undefined;

  /**
   * <p>The password ARN for the Windows user.</p>
   * @public
   */
  passwordArn: string | undefined;
}

/**
 * <p>Identifies the user for a job.</p>
 * @public
 */
export interface JobRunAsUser {
  /**
   * <p>The user and group that the jobs in the queue run as.</p>
   * @public
   */
  posix?: PosixUser | undefined;

  /**
   * <p>Identifies a Microsoft Windows user.</p>
   * @public
   */
  windows?: WindowsUser | undefined;

  /**
   * <p>Specifies whether the job should run using the queue's system user or if the job should run using the worker agent system user.</p>
   * @public
   */
  runAs: RunAs | undefined;
}

/**
 * <p>The details of a source and destination path.</p>
 * @public
 */
export interface PathMappingRule {
  /**
   * <p>The source path format.</p>
   * @public
   */
  sourcePathFormat: PathFormat | undefined;

  /**
   * <p>The source path.</p>
   * @public
   */
  sourcePath: string | undefined;

  /**
   * <p>The destination path.</p>
   * @public
   */
  destinationPath: string | undefined;
}

/**
 * <p>The job details for a specific job.</p>
 * @public
 */
export interface JobDetailsEntity {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The job attachment settings.</p>
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * <p>The user name and group that the job uses when run.</p>
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * <p>The log group name.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The queue role ARN.</p>
   * @public
   */
  queueRoleArn?: string | undefined;

  /**
   * <p>The parameters.</p>
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * <p>The path mapping rules.</p>
   * @public
   */
  pathMappingRules?: PathMappingRule[] | undefined;
}

/**
 * <p>The details of a step entity.</p>
 * @public
 */
export interface StepDetailsEntity {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The schema version for a step template.</p>
   * @public
   */
  schemaVersion: string | undefined;

  /**
   * <p>The template for a step.</p>
   * @public
   */
  template: __DocumentType | undefined;

  /**
   * <p>The dependencies for a step.</p>
   * @public
   */
  dependencies: string[] | undefined;
}

/**
 * <p>The details of a job entity.</p>
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
   * <p>The job details.</p>
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
   * <p>The job attachment details.</p>
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
   * <p>The step details.</p>
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
   * <p>The environment details for the job entity.</p>
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
 * <p>The error details for the environment.</p>
 * @public
 */
export interface EnvironmentDetailsError {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * <p>The error message detailing the error's cause.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The error details for job attachments.</p>
 * @public
 */
export interface JobAttachmentDetailsError {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * <p>The error message detailing the error's cause.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of a job error.</p>
 * @public
 */
export interface JobDetailsError {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * <p>The error message detailing the error's cause.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of the step error.</p>
 * @public
 */
export interface StepDetailsError {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: JobEntityErrorCode | undefined;

  /**
   * <p>The error message detailing the error's cause.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The error for the job entity.</p>
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
   * <p>The job details for the failed job entity.</p>
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
   * <p>The job attachment details for the failed job entity.</p>
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
   * <p>The step details for the failed job entity.</p>
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
   * <p>The environment details for the failed job entity.</p>
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
   * <p>A list of the job entities, or details, in the batch.</p>
   * @public
   */
  entities: JobEntity[] | undefined;

  /**
   * <p>A list of errors from the job error logs for the batch.</p>
   * @public
   */
  errors: GetJobEntityError[] | undefined;
}

/**
 * <p>The identifiers for a session.</p>
 * @public
 */
export interface BatchGetSessionIdentifier {
  /**
   * <p>The farm ID of the session.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionRequest {
  /**
   * <p>The list of session identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetSessionIdentifier[] | undefined;
}

/**
 * <p>The error details for a session that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetSessionError {
  /**
   * <p>The farm ID of the session that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session that could not be retrieved.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session that could not be retrieved.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session ID of the session that could not be retrieved.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetSessionErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The IP addresses for a host.</p>
 * @public
 */
export interface IpAddresses {
  /**
   * <p>The IpV4 address of the network.</p>
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * <p>The IpV6 address for the network and node component.</p>
   * @public
   */
  ipV6Addresses?: string[] | undefined;
}

/**
 * <p>The host property details.</p>
 * @public
 */
export interface HostPropertiesResponse {
  /**
   * <p>The IP address of the host.</p>
   * @public
   */
  ipAddresses?: IpAddresses | undefined;

  /**
   * <p>The host name.</p>
   * @public
   */
  hostName?: string | undefined;

  /**
   * <p>The ARN of the host EC2 instance.</p>
   * @public
   */
  ec2InstanceArn?: string | undefined;

  /**
   * <p>The instance type of the host EC2 instance.</p>
   * @public
   */
  ec2InstanceType?: string | undefined;
}

/**
 * <p>The details of a session returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetSessionItem {
  /**
   * <p>The farm ID of the session.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The fleet ID of the session.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID of the session.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The life cycle status of the session.</p>
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The target life cycle status for the session.</p>
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The session log.</p>
   * @public
   */
  log: LogConfiguration | undefined;

  /**
   * <p>The host properties for the session.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The worker log for the session.</p>
   * @public
   */
  workerLog?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionResponse {
  /**
   * <p>A list of sessions that were successfully retrieved.</p>
   * @public
   */
  sessions: BatchGetSessionItem[] | undefined;

  /**
   * <p>A list of errors for sessions that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetSessionError[] | undefined;
}

/**
 * <p>The identifiers for a session action.</p>
 * @public
 */
export interface BatchGetSessionActionIdentifier {
  /**
   * <p>The farm ID of the session action.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session action.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session action.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session action ID.</p>
   * @public
   */
  sessionActionId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionActionRequest {
  /**
   * <p>The list of session action identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetSessionActionIdentifier[] | undefined;
}

/**
 * <p>The error details for a session action that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetSessionActionError {
  /**
   * <p>The farm ID of the session action that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session action that could not be retrieved.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session action that could not be retrieved.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session action ID of the session action that could not be retrieved.</p>
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetSessionActionErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The environment ID to use to enter a session action.</p>
 * @public
 */
export interface EnvironmentEnterSessionActionDefinition {
  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>Defines the environment a session action exits from.</p>
 * @public
 */
export interface EnvironmentExitSessionActionDefinition {
  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>The session action definition for syncing input job attachments.</p>
 * @public
 */
export interface SyncInputJobAttachmentsSessionActionDefinition {
  /**
   * <p>The step ID for the sync input job attachments session action.</p>
   * @public
   */
  stepId?: string | undefined;
}

/**
 * <p>The task, step, and parameters for the task run in the session action.</p>
 * @public
 */
export interface TaskRunSessionActionDefinition {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task parameters.</p>
   * @public
   */
  parameters: Record<string, TaskParameterValue> | undefined;
}

/**
 * <p>The definition of the session action.</p>
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
   * <p>The environment to enter into.</p>
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
   * <p>The environment to exit from.</p>
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
   * <p>The task run in the session.</p>
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
   * <p>The session action definition for syncing input job attachments.</p>
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
 * <p>The manifest properties for a task run, corresponding to the manifest properties in the job.</p>
 * @public
 */
export interface TaskRunManifestPropertiesResponse {
  /**
   * <p>The manifest file path.</p>
   * @public
   */
  outputManifestPath?: string | undefined;

  /**
   * <p>The hash value of the file.</p>
   * @public
   */
  outputManifestHash?: string | undefined;
}

/**
 * <p>The details of a session action returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetSessionActionItem {
  /**
   * <p>The farm ID of the session action.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the session action.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the session action.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session action ID.</p>
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * <p>The status of the session action.</p>
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated by a worker.</p>
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * <p>The completion percentage for the session action.</p>
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * <p>The manifests for the session action.</p>
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * <p>The session ID for the session action.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The exit code to apply to the session action.</p>
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * <p>The message that communicates the progress of the session action.</p>
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * <p>The limits that were acquired for the session action.</p>
   * @public
   */
  acquiredLimits?: AcquiredLimit[] | undefined;

  /**
   * <p>The session action definition.</p>
   * @public
   */
  definition: SessionActionDefinition | undefined;
}

/**
 * @public
 */
export interface BatchGetSessionActionResponse {
  /**
   * <p>A list of session actions that were successfully retrieved.</p>
   * @public
   */
  sessionActions: BatchGetSessionActionItem[] | undefined;

  /**
   * <p>A list of errors for session actions that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetSessionActionError[] | undefined;
}

/**
 * <p>The identifiers for a step.</p>
 * @public
 */
export interface BatchGetStepIdentifier {
  /**
   * <p>The farm ID of the step.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the step.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the step.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStepRequest {
  /**
   * <p>The list of step identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetStepIdentifier[] | undefined;
}

/**
 * <p>The error details for a step that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetStepError {
  /**
   * <p>The farm ID of the step that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the step that could not be retrieved.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the step that could not be retrieved.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the step that could not be retrieved.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetStepErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The number of dependencies for the consumer.</p>
 * @public
 */
export interface DependencyCounts {
  /**
   * <p>The number of resolved dependencies.</p>
   * @public
   */
  dependenciesResolved: number | undefined;

  /**
   * <p>The number of unresolved dependencies.</p>
   * @public
   */
  dependenciesUnresolved: number | undefined;

  /**
   * <p>The number of consumers resolved.</p>
   * @public
   */
  consumersResolved: number | undefined;

  /**
   * <p>The number of unresolved consumers.</p>
   * @public
   */
  consumersUnresolved: number | undefined;
}

/**
 * <p>Defines how a step parameter range should be divided into chunks.</p>
 * @public
 */
export interface StepParameterChunks {
  /**
   * <p>The number of tasks to combine into a single chunk by default.</p>
   * @public
   */
  defaultTaskCount: number | undefined;

  /**
   * <p>The number of seconds to aim for when forming chunks.</p>
   * @public
   */
  targetRuntimeSeconds?: number | undefined;

  /**
   * <p>Specifies whether the chunked ranges must be contiguous or can have gaps between them.</p>
   * @public
   */
  rangeConstraint: RangeConstraint | undefined;
}

/**
 * <p>The details of a step parameter.</p>
 * @public
 */
export interface StepParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  type: StepParameterType | undefined;

  /**
   * <p>The configuration for task chunking.</p>
   * @public
   */
  chunks?: StepParameterChunks | undefined;
}

/**
 * <p>The details of a search for two or more step parameters.</p>
 * @public
 */
export interface ParameterSpace {
  /**
   * <p>The parameters to search for.</p>
   * @public
   */
  parameters: StepParameter[] | undefined;

  /**
   * <p>The combination expression to use in the search.</p>
   * @public
   */
  combination?: string | undefined;
}

/**
 * <p>The details outlining the minimum and maximum capability of a step.</p>
 * @public
 */
export interface StepAmountCapability {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The minimum amount.</p>
   * @public
   */
  min?: number | undefined;

  /**
   * <p>The maximum amount.</p>
   * @public
   */
  max?: number | undefined;

  /**
   * <p>The amount value.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>The list of step attributes.</p>
 * @public
 */
export interface StepAttributeCapability {
  /**
   * <p>The name of the step attribute.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Requires any of the step attributes in a given list.</p>
   * @public
   */
  anyOf?: string[] | undefined;

  /**
   * <p>Requires all of the step attribute values.</p>
   * @public
   */
  allOf?: string[] | undefined;
}

/**
 * <p>The details of required step capabilities.</p>
 * @public
 */
export interface StepRequiredCapabilities {
  /**
   * <p>The capability attributes that the step requires.</p>
   * @public
   */
  attributes: StepAttributeCapability[] | undefined;

  /**
   * <p>The capability amounts that the step requires.</p>
   * @public
   */
  amounts: StepAmountCapability[] | undefined;
}

/**
 * <p>The details of a step returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetStepItem {
  /**
   * <p>The farm ID of the step.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the step.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the step.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status of the step.</p>
   * @public
   */
  lifecycleStatus: StepLifecycleStatus | undefined;

  /**
   * <p>A message that communicates the status of the life cycle.</p>
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the step.</p>
   * @public
   */
  taskRunStatus: TaskRunStatus | undefined;

  /**
   * <p>The number of tasks for each run status for the step.</p>
   * @public
   */
  taskRunStatusCounts: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The number of times that tasks failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The task status to start with on the step.</p>
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The number of dependencies for the step.</p>
   * @public
   */
  dependencyCounts?: DependencyCounts | undefined;

  /**
   * <p>The required capabilities for the step.</p>
   * @public
   */
  requiredCapabilities?: StepRequiredCapabilities | undefined;

  /**
   * <p>The parameter space for the step.</p>
   * @public
   */
  parameterSpace?: ParameterSpace | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStepResponse {
  /**
   * <p>A list of steps that were successfully retrieved.</p>
   * @public
   */
  steps: BatchGetStepItem[] | undefined;

  /**
   * <p>A list of errors for steps that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetStepError[] | undefined;
}

/**
 * <p>The identifiers for a task.</p>
 * @public
 */
export interface BatchGetTaskIdentifier {
  /**
   * <p>The farm ID of the task.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the task.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the task.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the task.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTaskRequest {
  /**
   * <p>The list of task identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetTaskIdentifier[] | undefined;
}

/**
 * <p>The error details for a task that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetTaskError {
  /**
   * <p>The farm ID of the task that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the task that could not be retrieved.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the task that could not be retrieved.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the task that could not be retrieved.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID of the task that could not be retrieved.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetTaskErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of a task returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetTaskItem {
  /**
   * <p>The farm ID of the task.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the task.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the task.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the task.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The run status of the task.</p>
   * @public
   */
  runStatus: TaskRunStatus | undefined;

  /**
   * <p>The run status with which to start the task.</p>
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * <p>The number of times the task failed and was retried.</p>
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The latest session action for the task.</p>
   * @public
   */
  latestSessionActionId?: string | undefined;

  /**
   * <p>The parameters for the task.</p>
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * @public
 */
export interface BatchGetTaskResponse {
  /**
   * <p>A list of tasks that were successfully retrieved.</p>
   * @public
   */
  tasks: BatchGetTaskItem[] | undefined;

  /**
   * <p>A list of errors for tasks that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetTaskError[] | undefined;
}

/**
 * <p>The identifiers for a worker.</p>
 * @public
 */
export interface BatchGetWorkerIdentifier {
  /**
   * <p>The farm ID of the worker.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkerRequest {
  /**
   * <p>The list of worker identifiers to retrieve. You can specify up to 100 identifiers per request.</p>
   * @public
   */
  identifiers: BatchGetWorkerIdentifier[] | undefined;
}

/**
 * <p>The error details for a worker that could not be retrieved in a batch get operation.</p>
 * @public
 */
export interface BatchGetWorkerError {
  /**
   * <p>The farm ID of the worker that could not be retrieved.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker that could not be retrieved.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID of the worker that could not be retrieved.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchGetWorkerErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of a worker returned in a batch get operation.</p>
 * @public
 */
export interface BatchGetWorkerItem {
  /**
   * <p>The farm ID of the worker.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The host properties for the worker.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The status of the worker.</p>
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * <p>The log configuration for the worker.</p>
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkerResponse {
  /**
   * <p>A list of workers that were successfully retrieved.</p>
   * @public
   */
  workers: BatchGetWorkerItem[] | undefined;

  /**
   * <p>A list of errors for workers that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetWorkerError[] | undefined;
}

/**
 * <p>The details of a job to update in a batch update operation.</p>
 * @public
 */
export interface BatchUpdateJobItem {
  /**
   * <p>The farm ID of the job to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the job to update.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the job to update.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The task status to update the job's tasks to.</p>
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * <p>The job priority to update.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries per failed tasks.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The status of a job in its lifecycle. When you change the status of the job to <code>ARCHIVED</code>, the job can't be scheduled or archived.</p> <important> <p>An archived job and its steps and tasks are deleted after 120 days. The job can't be recovered.</p> </important>
   * @public
   */
  lifecycleStatus?: UpdateJobLifecycleStatus | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The name of the job to update.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the job to update.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateJobRequest {
  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of jobs to update. You can specify up to 100 jobs per request.</p>
   * @public
   */
  jobs: BatchUpdateJobItem[] | undefined;
}

/**
 * <p>The error details for a job that could not be updated in a batch update operation.</p>
 * @public
 */
export interface BatchUpdateJobError {
  /**
   * <p>The farm ID of the job that could not be updated.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the job that could not be updated.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the job that could not be updated.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchUpdateJobErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateJobResponse {
  /**
   * <p>A list of errors for jobs that could not be updated.</p>
   * @public
   */
  errors: BatchUpdateJobError[] | undefined;
}

/**
 * <p>The details of a task to update in a batch update operation.</p>
 * @public
 */
export interface BatchUpdateTaskItem {
  /**
   * <p>The farm ID of the task to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the task to update.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the task to update.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the task to update.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID of the task to update.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The run status with which to start the task.</p>
   * @public
   */
  targetRunStatus: TaskTargetRunStatus | undefined;
}

/**
 * @public
 */
export interface BatchUpdateTaskRequest {
  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of tasks to update. You can specify up to 100 tasks per request.</p>
   * @public
   */
  tasks: BatchUpdateTaskItem[] | undefined;
}

/**
 * <p>The error details for a task that could not be updated in a batch update operation.</p>
 * @public
 */
export interface BatchUpdateTaskError {
  /**
   * <p>The farm ID of the task that could not be updated.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the task that could not be updated.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the task that could not be updated.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID of the task that could not be updated.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID of the task that could not be updated.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: BatchUpdateTaskErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateTaskResponse {
  /**
   * <p>A list of errors for tasks that could not be updated.</p>
   * @public
   */
  errors: BatchUpdateTaskError[] | undefined;
}

/**
 * <p>The budget action to add.</p>
 * @public
 */
export interface BudgetActionToAdd {
  /**
   * <p>The type of budget action to add.</p>
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * <p>The percentage threshold for the budget action to add.</p>
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
 * <p>The budget action to remove.</p>
 * @public
 */
export interface BudgetActionToRemove {
  /**
   * <p>The type of budget action to remove.</p>
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * <p>The percentage threshold for the budget action to remove.</p>
   * @public
   */
  thresholdPercentage: number | undefined;
}

/**
 * <p>The details of a fixed budget schedule.</p>
 * @public
 */
export interface FixedBudgetSchedule {
  /**
   * <p>When the budget starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>When the budget ends.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>The start and end time of the budget.</p>
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
   * <p>The fixed start and end time of the budget's schedule.</p>
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
 * <p>The usage details of the allotted budget.</p>
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
   * <p>The queue ID.</p>
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
 * Shared displayName + description for Create operations where both are present.
 * displayName is @required here - this mixin is Create-only by design (Update has optional displayName).
 * @public
 */
export interface CreateBudgetRequest {
  /**
   * <p>The farm ID to include in this budget.</p>
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
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The queue ID provided to this budget to track usage.</p>
   * @public
   */
  usageTrackingResource: UsageTrackingResource | undefined;

  /**
   * <p>The dollar limit based on consumed usage.</p>
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * <p>The budget actions to specify what happens when the budget runs out.</p>
   * @public
   */
  actions: BudgetActionToAdd[] | undefined;

  /**
   * <p>The schedule to associate with this budget.</p>
   * @public
   */
  schedule: BudgetSchedule | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateBudgetResponse {
  /**
   * <p>The budget ID.</p>
   * @public
   */
  budgetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetRequest {
  /**
   * <p>The farm ID of the farm to remove from the budget.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The budget ID of the budget to delete.</p>
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
   * <p>The farm ID of the farm connected to the budget.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The budget ID.</p>
   * @public
   */
  budgetId: string | undefined;
}

/**
 * <p>The details of a budget action.</p>
 * @public
 */
export interface ResponseBudgetAction {
  /**
   * <p>The action taken on the budget once scheduling stops.</p>
   * @public
   */
  type: BudgetActionType | undefined;

  /**
   * <p>The percentage threshold for the budget.</p>
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
 * <p>The consumed usage for the resource.</p>
 * @public
 */
export interface ConsumedUsages {
  /**
   * <p>The amount of the budget consumed.</p>
   * @public
   */
  approximateDollarUsage: number | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetBudgetResponse {
  /**
   * <p>The budget ID.</p>
   * @public
   */
  budgetId: string | undefined;

  /**
   * <p>The resource that the budget is tracking usage for.</p>
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
   * <p>The consumed usage limit for the budget.</p>
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * <p>The usages of the budget.</p>
   * @public
   */
  usages: ConsumedUsages | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The description of the budget.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The budget actions for the budget.</p>
   * @public
   */
  actions: ResponseBudgetAction[] | undefined;

  /**
   * <p>The budget schedule.</p>
   * @public
   */
  schedule: BudgetSchedule | undefined;

  /**
   * <p>The date and time the queue stopped.</p>
   * @public
   */
  queueStoppedAt?: Date | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListBudgetsRequest {
  /**
   * <p>The farm ID associated with the budgets.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status to list for the budgets.</p>
   * @public
   */
  status?: BudgetStatus | undefined;
}

/**
 * <p>The budget summary.</p>
 * @public
 */
export interface BudgetSummary {
  /**
   * <p>The budget ID.</p>
   * @public
   */
  budgetId: string | undefined;

  /**
   * <p>The resource used to track expenditure in the budget.</p>
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
   * <p>The approximate dollar limit of the budget.</p>
   * @public
   */
  approximateDollarLimit: number | undefined;

  /**
   * <p>The consumed usage for the budget.</p>
   * @public
   */
  usages: ConsumedUsages | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
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
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListBudgetsResponse {
  /**
   * <p>The budgets to include on the list.</p>
   * @public
   */
  budgets: BudgetSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetRequest {
  /**
   * <p>The farm ID of the budget to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The budget ID to update.</p>
   * @public
   */
  budgetId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The dollar limit to update on the budget. Based on consumed usage.</p>
   * @public
   */
  approximateDollarLimit?: number | undefined;

  /**
   * <p>The budget actions to add. Budget actions specify what happens when the budget runs out.</p>
   * @public
   */
  actionsToAdd?: BudgetActionToAdd[] | undefined;

  /**
   * <p>The budget actions to remove from the budget.</p>
   * @public
   */
  actionsToRemove?: BudgetActionToRemove[] | undefined;

  /**
   * <p>The schedule to update.</p>
   * @public
   */
  schedule?: BudgetSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetResponse {}

/**
 * <p>The Amazon S3 location information.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The Amazon S3 object key that uniquely identifies the Amazon S3 bucket.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * @public
 */
export interface CopyJobTemplateRequest {
  /**
   * <p>The farm ID to copy.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to copy.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID to copy.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon S3 bucket name and key where you would like to add a copy of the job template.</p>
   * @public
   */
  targetS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface CopyJobTemplateResponse {
  /**
   * <p>The format of the job template, either <code>JSON</code> or <code>YAML</code>.</p>
   * @public
   */
  templateType: JobTemplateType | undefined;
}

/**
 * Shared displayName + description for Create operations where both are present.
 * displayName is @required here - this mixin is Create-only by design (Update has optional displayName).
 * @public
 */
export interface CreateFarmRequest {
  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The ARN of the KMS key to use on the farm.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment. The default value is 1.</p>
   * @public
   */
  costScaleFactor?: number | undefined;

  /**
   * <p>The tags to add to your farm. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateFarmResponse {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;
}

/**
 * <p>The auto scaling configuration settings for a customer managed fleet.</p>
 * @public
 */
export interface CustomerManagedAutoScalingConfiguration {
  /**
   * <p>The number of idle workers maintained and ready to process incoming tasks. The default is 0.</p>
   * @public
   */
  standbyWorkerCount?: number | undefined;

  /**
   * <p>The number of seconds that a worker can remain idle before it is shut down. The default is 300 seconds (5 minutes).</p>
   * @public
   */
  workerIdleDurationSeconds?: number | undefined;

  /**
   * <p>The number of workers that can be added per minute to the fleet. The default is 10 workers per minute.</p>
   * @public
   */
  scaleOutWorkersPerMinute?: number | undefined;
}

/**
 * <p>The fleet amount and attribute capabilities.</p>
 * @public
 */
export interface FleetAmountCapability {
  /**
   * <p>The name of the fleet capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The minimum amount of fleet worker capability.</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum amount of the fleet worker capability.</p>
   * @public
   */
  max?: number | undefined;
}

/**
 * <p>Defines the fleet's capability name, minimum, and maximum.</p>
 * @public
 */
export interface FleetAttributeCapability {
  /**
   * <p>The name of the fleet attribute capability for the worker.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The number of fleet attribute capabilities.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>The range of memory in MiB.</p>
 * @public
 */
export interface MemoryMiBRange {
  /**
   * <p>The minimum amount of memory (in MiB).</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum amount of memory (in MiB).</p>
   * @public
   */
  max?: number | undefined;
}

/**
 * <p>The allowable range of vCPU processing power for the fleet.</p>
 * @public
 */
export interface VCpuCountRange {
  /**
   * <p>The minimum amount of vCPU.</p>
   * @public
   */
  min: number | undefined;

  /**
   * <p>The maximum amount of vCPU.</p>
   * @public
   */
  max?: number | undefined;
}

/**
 * <p>The worker capabilities for a customer managed workflow.</p>
 * @public
 */
export interface CustomerManagedWorkerCapabilities {
  /**
   * <p>The vCPU count for the customer manged worker capabilities.</p>
   * @public
   */
  vCpuCount: VCpuCountRange | undefined;

  /**
   * <p>The memory (MiB).</p>
   * @public
   */
  memoryMiB: MemoryMiBRange | undefined;

  /**
   * <p>The accelerator types for the customer managed worker capabilities.</p>
   * @public
   */
  acceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * <p>The range of the accelerator.</p>
   * @public
   */
  acceleratorCount?: AcceleratorCountRange | undefined;

  /**
   * <p>The total memory (MiB) for the customer managed worker capabilities.</p>
   * @public
   */
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange | undefined;

  /**
   * <p>The operating system (OS) family.</p>
   * @public
   */
  osFamily: CustomerManagedFleetOperatingSystemFamily | undefined;

  /**
   * <p>The CPU architecture type for the customer managed worker capabilities.</p>
   * @public
   */
  cpuArchitectureType: CpuArchitectureType | undefined;

  /**
   * <p>Custom requirement ranges for customer managed worker capabilities.</p>
   * @public
   */
  customAmounts?: FleetAmountCapability[] | undefined;

  /**
   * <p>Custom attributes for the customer manged worker capabilities.</p>
   * @public
   */
  customAttributes?: FleetAttributeCapability[] | undefined;
}

/**
 * <p>The configuration details for a customer managed fleet.</p>
 * @public
 */
export interface CustomerManagedFleetConfiguration {
  /**
   * <p>The Auto Scaling mode for the customer managed fleet.</p>
   * @public
   */
  mode: AutoScalingMode | undefined;

  /**
   * <p>The auto scaling configuration settings for the customer managed fleet.</p>
   * @public
   */
  autoScalingConfiguration?: CustomerManagedAutoScalingConfiguration | undefined;

  /**
   * <p>The worker capabilities for the customer managed fleet.</p>
   * @public
   */
  workerCapabilities: CustomerManagedWorkerCapabilities | undefined;

  /**
   * <p>The storage profile ID for the customer managed fleet.</p>
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * <p>The tag propagation mode for the customer managed fleet.</p>
   * @public
   */
  tagPropagationMode?: TagPropagationMode | undefined;
}

/**
 * <p>The auto scaling configuration settings for a service managed EC2 fleet.</p>
 * @public
 */
export interface ServiceManagedEc2AutoScalingConfiguration {
  /**
   * <p>The number of idle workers maintained and ready to process incoming tasks. The default is 0.</p>
   * @public
   */
  standbyWorkerCount?: number | undefined;

  /**
   * <p>The number of seconds that a worker can remain idle before it is shut down. The default is 300 seconds (5 minutes).</p>
   * @public
   */
  workerIdleDurationSeconds?: number | undefined;

  /**
   * <p>The number of workers that can be added per minute to the fleet. The default is 10 workers per minute.</p>
   * @public
   */
  scaleOutWorkersPerMinute?: number | undefined;
}

/**
 * <p>Specifies the EBS volume.</p>
 * @public
 */
export interface Ec2EbsVolume {
  /**
   * <p>The EBS volume size in GiB.</p>
   * @public
   */
  sizeGiB?: number | undefined;

  /**
   * <p>The IOPS per volume.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput per volume in MiB.</p>
   * @public
   */
  throughputMiB?: number | undefined;
}

/**
 * <p>The Amazon EC2 instance capabilities.</p>
 * @public
 */
export interface ServiceManagedEc2InstanceCapabilities {
  /**
   * <p>The amount of vCPU to require for instances in this fleet.</p>
   * @public
   */
  vCpuCount: VCpuCountRange | undefined;

  /**
   * <p>The memory, as MiB, for the Amazon EC2 instance type.</p>
   * @public
   */
  memoryMiB: MemoryMiBRange | undefined;

  /**
   * <p>The operating system (OS) family.</p>
   * @public
   */
  osFamily: ServiceManagedFleetOperatingSystemFamily | undefined;

  /**
   * <p>The CPU architecture type.</p>
   * @public
   */
  cpuArchitectureType: CpuArchitectureType | undefined;

  /**
   * <p>The root EBS volume.</p>
   * @public
   */
  rootEbsVolume?: Ec2EbsVolume | undefined;

  /**
   * <p>Describes the GPU accelerator capabilities required for worker host instances in this fleet.</p>
   * @public
   */
  acceleratorCapabilities?: AcceleratorCapabilities | undefined;

  /**
   * <p>The allowable Amazon EC2 instance types.</p>
   * @public
   */
  allowedInstanceTypes?: string[] | undefined;

  /**
   * <p>The instance types to exclude from the fleet.</p>
   * @public
   */
  excludedInstanceTypes?: string[] | undefined;

  /**
   * <p>The custom capability amounts to require for instances in this fleet.</p>
   * @public
   */
  customAmounts?: FleetAmountCapability[] | undefined;

  /**
   * <p>The custom capability attributes to require for instances in this fleet.</p>
   * @public
   */
  customAttributes?: FleetAttributeCapability[] | undefined;
}

/**
 * <p>The details of the Amazon EC2 instance market options for a service managed fleet.</p>
 * @public
 */
export interface ServiceManagedEc2InstanceMarketOptions {
  /**
   * <p>The Amazon EC2 instance type.</p>
   * @public
   */
  type: Ec2MarketType | undefined;
}

/**
 * <p>Specifies the persistent EBS volume configuration for workers in a service managed fleet.</p>
 * @public
 */
export interface PersistentVolumeConfiguration {
  /**
   * <p>The persistent volume size in GiB. The default is 250.</p>
   * @public
   */
  sizeGiB?: number | undefined;

  /**
   * <p>The IOPS per persistent volume. The default is 3000.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput per persistent volume in MiB. The default is 125.</p>
   * @public
   */
  throughputMiB?: number | undefined;

  /**
   * <p>The file system path where the persistent volume is mounted on the worker instance.</p>
   * @public
   */
  mountPath: string | undefined;

  /**
   * <p>The number of hours a persistent volume can remain unused before it is deleted. The default is 168 (7 days).</p>
   * @public
   */
  lastUsedTtlHours?: number | undefined;
}

/**
 * <p>The configuration options for a service managed fleet's VPC.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The ARNs of the VPC Lattice resource configurations attached to the fleet.</p>
   * @public
   */
  resourceConfigurationArns?: string[] | undefined;
}

/**
 * <p>The configuration details for a service managed EC2 fleet.</p>
 * @public
 */
export interface ServiceManagedEc2FleetConfiguration {
  /**
   * <p>The instance capabilities for the service managed EC2 fleet.</p>
   * @public
   */
  instanceCapabilities: ServiceManagedEc2InstanceCapabilities | undefined;

  /**
   * <p>The instance market options for the service managed EC2 fleet.</p>
   * @public
   */
  instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions | undefined;

  /**
   * <p>The VPC configuration for the service managed EC2 fleet.</p>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The storage profile ID for the service managed EC2 fleet.</p>
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * <p>The persistent volume configuration for the service managed EC2 fleet.</p>
   * @public
   */
  persistentVolumeConfiguration?: PersistentVolumeConfiguration | undefined;

  /**
   * <p>The auto scaling configuration settings for the service managed EC2 fleet.</p>
   * @public
   */
  autoScalingConfiguration?: ServiceManagedEc2AutoScalingConfiguration | undefined;
}

/**
 * <p>Fleet configuration details.</p>
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
   * <p>The customer managed fleets within a fleet configuration.</p>
   * @public
   */
  export interface CustomerManagedMember {
    customerManaged: CustomerManagedFleetConfiguration;
    serviceManagedEc2?: never;
    $unknown?: never;
  }

  /**
   * <p>The service managed Amazon EC2 instances for a fleet configuration.</p>
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
 * Shared displayName + description for Create operations where both are present.
 * displayName is @required here - this mixin is Create-only by design (Update has optional displayName).
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p>The farm ID of the farm to connect to the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The IAM role ARN for the role that the fleet's workers will use.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The minimum number of workers for the fleet.</p>
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * <p>The maximum number of workers for the fleet.</p> <p>Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to <code>CreateWorker</code> before the field updates, you might exceed your fleet's maximum worker count. For example, if your <code>maxWorkerCount</code> is 10 and you currently have 9 workers, making two quick <code>CreateWorker</code> calls might successfully create 2 workers instead of 1, resulting in 11 total workers.</p>
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The configuration settings for the fleet. Customer managed fleets are self-managed. Service managed Amazon EC2 fleets are managed by Deadline Cloud.</p>
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.</p>
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateFleetResponse {
  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>The farm ID of the farm to connect to the job.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The ID of the queue that the job is submitted to.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The job template to use for this job.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>The file type for the job template.</p>
   * @public
   */
  templateType?: JobTemplateType | undefined;

  /**
   * <p>The priority of the job. The highest priority (first scheduled) is 100. When two jobs have the same priority, the oldest job is scheduled first.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The parameters for the job.</p>
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * <p>The attachments for the job. Attach files required for the job to run to a render job.</p>
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * <p>The storage profile ID for the storage profile to connect to the job.</p>
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * <p>The initial job status when it is created. Jobs that are created with a <code>SUSPENDED</code> status will not run until manually requeued.</p>
   * @public
   */
  targetTaskRunStatus?: CreateJobTargetTaskRunStatus | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries for each task.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.</p> <p>You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.</p> <p>If you don't specify the <code>maxWorkerCount</code>, Deadline Cloud won't throttle the number of workers used to process the job.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The job ID for the source job.</p>
   * @public
   */
  sourceJobId?: string | undefined;

  /**
   * <p>A custom name to override the job name derived from the job template.</p>
   * @public
   */
  nameOverride?: string | undefined;

  /**
   * <p>A custom description to override the job description derived from the job template.</p>
   * @public
   */
  descriptionOverride?: string | undefined;

  /**
   * <p>The tags to add to your job. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CreateLicenseEndpointRequest {
  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The VPC (virtual private cloud) ID to use with the license endpoint.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnet IDs.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The security group IDs.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateLicenseEndpointResponse {
  /**
   * <p>The license endpoint ID.</p>
   * @public
   */
  licenseEndpointId: string | undefined;
}

/**
 * @public
 */
export interface CreateLimitRequest {
  /**
   * <p>The farm ID of the farm that contains the limit.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.</p>
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
   * <p>A unique identifier for the limit. Use this identifier in other operations, such as <code>CreateQueueLimitAssociation</code> and <code>DeleteLimit</code>.</p>
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorRequest {
  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name that you give the monitor that is displayed in the Deadline Cloud console.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The Amazon Resource Name of the IAM Identity Center instance that authenticates monitor users.</p>
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * <p>The Region where IAM Identity Center is enabled. Required when IAM Identity Center is in a different Region than the monitor.</p>
   * @public
   */
  identityCenterRegion?: string | undefined;

  /**
   * <p>The subdomain to use when creating the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.</p>
   * @public
   */
  subdomain: string | undefined;

  /**
   * <p>The Amazon Resource Name of the IAM role that the monitor uses to connect to Deadline Cloud. Every user that signs in to the monitor using IAM Identity Center uses this role to access Deadline Cloud resources.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The tags to add to your monitor. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateMonitorResponse {
  /**
   * <p>The unique identifier of the monitor.</p>
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The Amazon Resource Name that IAM Identity Center assigns to the monitor.</p>
   * @public
   */
  identityCenterApplicationArn: string | undefined;
}

/**
 * <p>Configuration for priority balanced scheduling. Workers are distributed evenly across all jobs at the highest priority level.</p>
 * @public
 */
export interface PriorityBalancedSchedulingConfiguration {
  /**
   * <p>The rendering task buffer controls worker stickiness. A worker only switches from its current job to another job at the same priority if the other job has fewer rendering tasks by more than this buffer value. Higher values make workers stickier to their current jobs. The default value is <code>1</code>.</p>
   * @public
   */
  renderingTaskBuffer?: number | undefined;
}

/**
 * <p>Configuration for priority first-in, first-out (FIFO) scheduling. Workers are assigned to the highest-priority job first. When multiple jobs share the same priority, the job submitted earliest receives workers first.</p>
 * @public
 */
export interface PriorityFifoSchedulingConfiguration {}

/**
 * <p>Specifies that jobs at the maximum priority (100) are always scheduled first.</p>
 * @public
 */
export interface SchedulingMaxPriorityOverrideAlwaysScheduleFirst {}

/**
 * <p>Defines the override behavior for jobs at the maximum priority (100) in weighted balanced scheduling.</p>
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
   * <p>Jobs at the maximum priority (100) are always scheduled before other jobs, regardless of the weighted scheduling formula. If multiple jobs have priority 100, ties are broken using the standard weighted formula.</p>
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
 * <p>Specifies that jobs at the minimum priority (0) are always scheduled last.</p>
 * @public
 */
export interface SchedulingMinPriorityOverrideAlwaysScheduleLast {}

/**
 * <p>Defines the override behavior for jobs at the minimum priority (0) in weighted balanced scheduling.</p>
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
   * <p>Jobs at the minimum priority (0) are always scheduled after all other jobs, regardless of the weighted scheduling formula. If multiple jobs have priority 0, ties are broken using the standard weighted formula.</p>
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
   * <p>The weight applied to job priority in the scheduling formula. Higher values give more influence to job priority. A value of <code>0</code> means priority is ignored. The default value is <code>100.0</code>.</p>
   * @public
   */
  priorityWeight?: number | undefined;

  /**
   * <p>The weight applied to the number of errors on a job. A negative value means jobs without errors are scheduled first. A value of <code>0</code> means errors are ignored. The default value is <code>-10.0</code>.</p>
   * @public
   */
  errorWeight?: number | undefined;

  /**
   * <p>The weight applied to job submission time. A positive value means earlier jobs are scheduled first. A value of <code>0</code> means submission time is ignored. The default value is <code>3.0</code>.</p>
   * @public
   */
  submissionTimeWeight?: number | undefined;

  /**
   * <p>The weight applied to the number of tasks currently rendering on a job. A negative value means jobs that are not already rendering are scheduled next. A value of <code>0</code> means the rendering state is ignored. The default value is <code>-100.0</code>.</p>
   * @public
   */
  renderingTaskWeight?: number | undefined;

  /**
   * <p>The rendering task buffer is subtracted from the number of rendering tasks before applying the rendering task weight. This creates a stickiness effect where workers prefer to stay with their current job. Higher values make workers stickier. The default value is <code>1</code>. The buffer is only applied in the weight calculation for a job if the worker is currently assigned to that job.</p>
   * @public
   */
  renderingTaskBuffer?: number | undefined;

  /**
   * <p>Overrides the weighted scheduling formula for jobs at the maximum priority (100). When set, jobs with priority 100 are always scheduled first regardless of their calculated weight. When absent, maximum priority jobs use the standard weighted formula.</p>
   * @public
   */
  maxPriorityOverride?: SchedulingMaxPriorityOverride | undefined;

  /**
   * <p>Overrides the weighted scheduling formula for jobs at the minimum priority (0). When set, jobs with priority 0 are always scheduled last regardless of their calculated weight. When absent, minimum priority jobs use the standard weighted formula.</p>
   * @public
   */
  minPriorityOverride?: SchedulingMinPriorityOverride | undefined;
}

/**
 * <p>The scheduling configuration for a queue. Defines the strategy used to assign workers to jobs.</p>
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
   * <p>Workers are assigned to the highest-priority job first. When multiple jobs share the same priority, the job submitted earliest receives workers first. This is the default scheduling configuration for new queues.</p>
   * @public
   */
  export interface PriorityFifoMember {
    priorityFifo: PriorityFifoSchedulingConfiguration;
    priorityBalanced?: never;
    weightedBalanced?: never;
    $unknown?: never;
  }

  /**
   * <p>Workers are distributed evenly across all jobs at the highest priority level. When workers cannot be evenly divided, the extra workers are assigned to the jobs submitted earliest. If a job has fewer remaining tasks than its share of workers, the surplus workers are redistributed to other jobs at the same priority level.</p>
   * @public
   */
  export interface PriorityBalancedMember {
    priorityFifo?: never;
    priorityBalanced: PriorityBalancedSchedulingConfiguration;
    weightedBalanced?: never;
    $unknown?: never;
  }

  /**
   * <p>Workers are assigned to jobs based on a weighted formula that considers job priority, error count, submission time, and the number of tasks currently rendering. Each factor has a configurable weight that determines its influence on scheduling decisions.</p>
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
 * Shared displayName + description for Create operations where both are present.
 * displayName is @required here - this mixin is Create-only by design (Update has optional displayName).
 * @public
 */
export interface CreateQueueRequest {
  /**
   * <p>The farm ID of the farm to connect to the queue.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The default action to take on a queue if a budget isn't configured.</p>
   * @public
   */
  defaultBudgetAction?: DefaultQueueBudgetAction | undefined;

  /**
   * <p>The job attachment settings for the queue. These are the Amazon S3 bucket name and the Amazon S3 prefix.</p>
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * <p>The IAM role ARN that workers will use while running jobs for this queue.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The jobs in the queue run as the specified POSIX user.</p>
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * <p>The file system location name to include in the queue.</p>
   * @public
   */
  requiredFileSystemLocationNames?: string[] | undefined;

  /**
   * <p>The storage profile IDs to include in the queue.</p>
   * @public
   */
  allowedStorageProfileIds?: string[] | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The scheduling configuration for the queue. This configuration determines how workers are assigned to jobs in the queue.</p> <p>If not specified, the queue defaults to the <code>priorityFifo</code> scheduling configuration.</p>
   * @public
   */
  schedulingConfiguration?: SchedulingConfiguration | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateQueueResponse {
  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueEnvironmentRequest {
  /**
   * <p>The farm ID of the farm to connect to the environment.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to connect the queue and environment.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Sets the priority of the environments in the queue from 0 to 10,000, where 0 is the highest priority (activated first and deactivated last). If two environments share the same priority value, the environment created first takes higher priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The template's file type, <code>JSON</code> or <code>YAML</code>.</p>
   * @public
   */
  templateType: EnvironmentTemplateType | undefined;

  /**
   * <p>The environment template to use in the queue.</p>
   * @public
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueEnvironmentResponse {
  /**
   * <p>The queue environment ID.</p>
   * @public
   */
  queueEnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueFleetAssociationRequest {
  /**
   * <p>The ID of the farm that the queue and fleet belong to.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The fleet ID.</p>
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
   * <p>The unique identifier of the farm that contains the queue and limit to associate.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the queue to associate with the limit.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique identifier of the limit to associate with the queue.</p>
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueLimitAssociationResponse {}

/**
 * <p>The details of the file system location for the resource.</p>
 * @public
 */
export interface FileSystemLocation {
  /**
   * <p>The location name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The file path.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The type of file.</p>
   * @public
   */
  type: FileSystemLocationType | undefined;
}

/**
 * @public
 */
export interface CreateStorageProfileRequest {
  /**
   * <p>The farm ID of the farm to connect to the storage profile.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the storage profile.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The type of operating system (OS) for the storage profile.</p>
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * <p>File system paths to include in the storage profile.</p>
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface CreateStorageProfileResponse {
  /**
   * <p>The storage profile ID.</p>
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * <p>The host property details.</p>
 * @public
 */
export interface HostPropertiesRequest {
  /**
   * <p>The IP address of the host.</p>
   * @public
   */
  ipAddresses?: IpAddresses | undefined;

  /**
   * <p>The host name.</p>
   * @public
   */
  hostName?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerRequest {
  /**
   * <p>The farm ID of the farm to connect to the worker.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID to connect to the worker.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The IP address and host name of the worker.</p>
   * @public
   */
  hostProperties?: HostPropertiesRequest | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface CreateWorkerResponse {
  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;
}

/**
 * <p>The time stamp in date-time format.</p>
 * @public
 */
export interface DateTimeFilterExpression {
  /**
   * <p>The name of the date-time field to filter on.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of comparison to use to filter the results.</p>
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * <p>The date and time.</p>
   * @public
   */
  dateTime: Date | undefined;
}

/**
 * Identifier mixin for queue-fleet association operations.
 * Composes QueueIdentifierMixin (farmId + queueId) and adds fleetId.
 * @public
 */
export interface DeleteQueueFleetAssociationRequest {
  /**
   * <p>The farm ID of the farm that holds the queue-fleet association.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the queue-fleet association.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The fleet ID of the queue-fleet association.</p>
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
   * <p>The unique identifier of the farm that contains the queue and limit to disassociate.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the queue to disassociate.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique identifier of the limit to disassociate.</p>
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
   * <p>The farm ID of the farm to delete.</p>
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
   * <p>The unique identifier of the farm that contains the limit to delete.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the limit to delete.</p>
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
   * <p>The farm ID of the farm from which to remove the storage profile.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The storage profile ID of the storage profile to delete.</p>
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
   * <p>The farm ID of the farm to disassociate from the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>A member's principal ID to disassociate from a farm.</p>
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
   * <p>The farm ID of the farm to remove from the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet to delete.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The farm ID of the fleet to disassociate a member from.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet to from which to disassociate a member.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>A member's principal ID to disassociate from a fleet.</p>
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
   * <p>The farm ID of the farm in the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet to get.</p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * <p>The amounts and attributes of fleets.</p>
 * @public
 */
export interface FleetCapabilities {
  /**
   * <p>Amount capabilities of the fleet.</p>
   * @public
   */
  amounts?: FleetAmountCapability[] | undefined;

  /**
   * <p>Attribute capabilities of the fleet.</p>
   * @public
   */
  attributes?: FleetAttributeCapability[] | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetFleetResponse {
  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The farm ID of the farm in the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The status of the fleet.</p>
   * @public
   */
  status: FleetStatus | undefined;

  /**
   * <p>A message that communicates a suspended status of the fleet.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The Auto Scaling status of the fleet. Either <code>GROWING</code>, <code>STEADY</code>, or <code>SHRINKING</code>.</p>
   * @public
   */
  autoScalingStatus?: AutoScalingStatus | undefined;

  /**
   * <p>The number of target workers in the fleet.</p>
   * @public
   */
  targetWorkerCount?: number | undefined;

  /**
   * <p>The number of workers in the fleet.</p>
   * @public
   */
  workerCount: number | undefined;

  /**
   * <p>The minimum number of workers specified in the fleet.</p>
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The maximum number of workers specified in the fleet.</p>
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The configuration setting for the fleet.</p>
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the fleet.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.</p>
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;

  /**
   * <p>Outlines what the fleet is capable of for minimums, maximums, and naming, in addition to attribute names and values.</p>
   * @public
   */
  capabilities?: FleetCapabilities | undefined;

  /**
   * <p>The IAM role ARN.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListFleetMembersRequest {
  /**
   * <p>The farm ID of the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID to include on the list.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The fleet member.</p>
 * @public
 */
export interface FleetMember {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The principal ID of the fleet member.</p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The principal type of the fleet member.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The identity store ID.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The fleet member's membership level.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListFleetMembersResponse {
  /**
   * <p>The members on the list.</p>
   * @public
   */
  members: FleetMember[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListFleetsRequest {
  /**
   * <p>The farm ID of the fleets.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The principal ID of the members to include in the fleet.</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The display names of a list of fleets.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The status of the fleet.</p>
   * @public
   */
  status?: FleetStatus | undefined;
}

/**
 * <p>The details of a fleet.</p>
 * @public
 */
export interface FleetSummary {
  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the fleet summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The status of the fleet.</p>
   * @public
   */
  status: FleetStatus | undefined;

  /**
   * <p>A message that communicates a suspended status of the fleet.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The Auto Scaling status of a fleet.</p>
   * @public
   */
  autoScalingStatus?: AutoScalingStatus | undefined;

  /**
   * <p>The target number of workers in a fleet.</p>
   * @public
   */
  targetWorkerCount?: number | undefined;

  /**
   * <p>The number of workers in the fleet summary.</p>
   * @public
   */
  workerCount: number | undefined;

  /**
   * <p>The minimum number of workers in the fleet.</p>
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The maximum number of workers specified in the fleet.</p>
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The configuration details for the fleet.</p>
   * @public
   */
  configuration: FleetConfiguration | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListFleetsResponse {
  /**
   * <p>The fleets on the list.</p>
   * @public
   */
  fleets: FleetSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * <p>The farm ID to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID to update.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The unique token which the server uses to recognize retries of the same request.</p>
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
   * <p>The IAM role ARN that the fleet's workers assume while running jobs.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The minimum number of workers in the fleet.</p>
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * <p>The maximum number of workers in the fleet.</p> <p>Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to <code>CreateWorker</code> before the field updates, you might exceed your fleet's maximum worker count. For example, if your <code>maxWorkerCount</code> is 10 and you currently have 9 workers, making two quick <code>CreateWorker</code> calls might successfully create 2 workers instead of 1, resulting in 11 total workers.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The fleet configuration to update.</p>
   * @public
   */
  configuration?: FleetConfiguration | undefined;

  /**
   * <p>Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.</p>
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
   * <p>The farm ID of the farm that contains the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet that contains the volume.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The volume ID of the volume to delete.</p>
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
   * <p>The farm ID of the farm that contains the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet that contains the volume.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The volume ID of the volume to retrieve.</p>
   * @public
   */
  volumeId: string | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetVolumeResponse {
  /**
   * <p>The volume ID.</p>
   * @public
   */
  volumeId: string | undefined;

  /**
   * <p>The farm ID of the farm that contains the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet that contains the volume.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The state of the volume.</p>
   * @public
   */
  state: VolumeState | undefined;

  /**
   * <p>The volume size in GiB.</p>
   * @public
   */
  sizeGiB: number | undefined;

  /**
   * <p>The Availability Zone ID of the volume.</p>
   * @public
   */
  availabilityZoneId: string | undefined;

  /**
   * <p>The worker ID of the worker the volume is attached to.</p>
   * @public
   */
  attachedWorkerId?: string | undefined;

  /**
   * <p>The EBS volume type.</p>
   * @public
   */
  volumeType: EbsVolumeType | undefined;

  /**
   * <p>The IOPS of the volume.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput of the volume in MiB.</p>
   * @public
   */
  throughputMiB?: number | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the volume was last assigned to a worker.</p>
   * @public
   */
  lastAssignedAt?: Date | undefined;

  /**
   * <p>The date and time the volume was last released from a worker.</p>
   * @public
   */
  lastReleasedAt?: Date | undefined;

  /**
   * <p>The date and time the volume expires and will be deleted.</p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListVolumesRequest {
  /**
   * <p>The farm ID of the farm that contains the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet that contains the volumes.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of a persistent volume.</p>
 * @public
 */
export interface VolumeSummary {
  /**
   * <p>The volume ID.</p>
   * @public
   */
  volumeId: string | undefined;

  /**
   * <p>The farm ID of the farm that contains the fleet.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the fleet that contains the volume.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The state of the volume.</p>
   * @public
   */
  state: VolumeState | undefined;

  /**
   * <p>The volume size in GiB.</p>
   * @public
   */
  sizeGiB: number | undefined;

  /**
   * <p>The Availability Zone ID of the volume.</p>
   * @public
   */
  availabilityZoneId: string | undefined;

  /**
   * <p>The worker ID of the worker the volume is attached to.</p>
   * @public
   */
  attachedWorkerId?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListVolumesResponse {
  /**
   * <p>The volumes on the list.</p>
   * @public
   */
  volumes: VolumeSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerRequest {
  /**
   * <p>The farm ID of the worker to delete.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker to delete.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID of the worker to delete.</p>
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
   * <p>The farm ID for the worker.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the worker.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetWorkerResponse {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The host properties for the worker.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The status of the worker.</p>
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * <p>The logs for the associated worker.</p>
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListSessionsForWorkerRequest {
  /**
   * <p>The farm ID for the session.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID for the session.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID for the session.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summarizes the session for a particular worker.</p>
 * @public
 */
export interface WorkerSessionSummary {
  /**
   * <p>The session ID for the session action.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The queue ID for the queue associated to the worker.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the job associated with the worker's session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The life cycle status for the worker's session.</p>
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
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
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListSessionsForWorkerResponse {
  /**
   * <p>The sessions in the response.</p>
   * @public
   */
  sessions: WorkerSessionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListWorkersRequest {
  /**
   * <p>The farm ID connected to the workers.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the workers.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of details for a worker.</p>
 * @public
 */
export interface WorkerSummary {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The host properties of the worker.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The status of the worker.</p>
   * @public
   */
  status: WorkerStatus | undefined;

  /**
   * <p>The log configuration for the worker.</p>
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListWorkersResponse {
  /**
   * <p>The workers on the list.</p>
   * @public
   */
  workers: WorkerSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of the worker amount capability.</p>
 * @public
 */
export interface WorkerAmountCapability {
  /**
   * <p>The name of the worker amount capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the worker amount capability.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>The details of the worker attribute capability.</p>
 * @public
 */
export interface WorkerAttributeCapability {
  /**
   * <p>The name of the worker attribute capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of the worker amount capability.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>The details for worker capabilities.</p>
 * @public
 */
export interface WorkerCapabilities {
  /**
   * <p>The worker capabilities amounts on a list of worker capabilities.</p>
   * @public
   */
  amounts: WorkerAmountCapability[] | undefined;

  /**
   * <p>The worker attribute capabilities in the list of attribute capabilities.</p>
   * @public
   */
  attributes: WorkerAttributeCapability[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerRequest {
  /**
   * <p>The farm ID to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID to update.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID to update.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The worker status to update.</p>
   * @public
   */
  status?: UpdatedWorkerStatus | undefined;

  /**
   * <p>The worker capabilities to update.</p>
   * @public
   */
  capabilities?: WorkerCapabilities | undefined;

  /**
   * <p>The host properties to update.</p>
   * @public
   */
  hostProperties?: HostPropertiesRequest | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerResponse {
  /**
   * <p>The worker log to update.</p>
   * @public
   */
  log?: LogConfiguration | undefined;

  /**
   * <p>The script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet.</p>
   * @public
   */
  hostConfiguration?: HostConfiguration | undefined;
}

/**
 * <p>The output manifest properties reported by the worker agent for a completed task run.</p>
 * @public
 */
export interface TaskRunManifestPropertiesRequest {
  /**
   * <p>The manifest file path.</p>
   * @public
   */
  outputManifestPath?: string | undefined;

  /**
   * <p>The hash value of the file.</p>
   * @public
   */
  outputManifestHash?: string | undefined;
}

/**
 * <p>The updated session action information as it relates to completion and progress of the session.</p>
 * @public
 */
export interface UpdatedSessionActionInfo {
  /**
   * <p>The status of the session upon completion.</p>
   * @public
   */
  completedStatus?: CompletedStatus | undefined;

  /**
   * <p>The process exit code. The default Deadline Cloud worker agent converts unsigned 32-bit exit codes to signed 32-bit exit codes.</p>
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * <p>A message to indicate the progress of the updated session action.</p>
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The updated time.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The percentage completed.</p>
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * <p>A list of output manifest properties reported by the worker agent, with each entry corresponding to a manifest property in the job.</p>
   * @public
   */
  manifests?: TaskRunManifestPropertiesRequest[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerScheduleRequest {
  /**
   * <p>The farm ID to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID to update.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID to update.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The session actions associated with the worker schedule to update.</p>
   * @public
   */
  updatedSessionActions?: Record<string, UpdatedSessionActionInfo> | undefined;
}

/**
 * @public
 */
export interface UpdateWorkerScheduleResponse {
  /**
   * <p>The assigned sessions to update.</p>
   * @public
   */
  assignedSessions: Record<string, AssignedSession> | undefined;

  /**
   * <p>The session actions associated with the worker schedule to cancel.</p>
   * @public
   */
  cancelSessionActions: Record<string, string[]> | undefined;

  /**
   * <p>The status to update the worker to.</p>
   * @public
   */
  desiredWorkerStatus?: DesiredWorkerStatus | undefined;

  /**
   * <p>Updates the time interval (in seconds) for the schedule.</p>
   * @public
   */
  updateIntervalSeconds: number | undefined;
}

/**
 * @public
 */
export interface GetFarmRequest {
  /**
   * <p>The farm ID of the farm.</p>
   * @public
   */
  farmId: string | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetFarmResponse {
  /**
   * <p>The farm ID of the farm to get.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The ARN of the KMS key used on the farm.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment.</p>
   * @public
   */
  costScaleFactor: number | undefined;
}

/**
 * @public
 */
export interface GetLimitRequest {
  /**
   * <p>The unique identifier of the farm that contains the limit.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the limit to return.</p>
   * @public
   */
  limitId: string | undefined;
}

/**
 * Domain fields for Limit summary/response shapes, ordered before timestamps.
 * @public
 */
export interface GetLimitResponse {
  /**
   * <p>The unique identifier of the farm that contains the limit.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the limit.</p>
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.</p>
   * @public
   */
  currentCount: number | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the limit was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user identifier of the person that created the limit.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the limit was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user identifier of the person that last updated the limit.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The display name of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.</p>
   * @public
   */
  amountRequirementName: string | undefined;

  /**
   * <p>The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.</p> <p>The <code>maxValue</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.</p>
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
   * <p>The farm ID for the storage profile.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The storage profile ID.</p>
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileResponse {
  /**
   * <p>The storage profile ID.</p>
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The operating system (OS) for the storage profile.</p>
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The location of the files for the storage profile.</p>
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListFarmMembersRequest {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The member of a farm.</p>
 * @public
 */
export interface FarmMember {
  /**
   * <p>The farm ID of the farm member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The principal ID of the farm member.</p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The principal type of the farm member.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The identity store ID of the farm member.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The farm member's membership level.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListFarmMembersResponse {
  /**
   * <p>The members on the list.</p>
   * @public
   */
  members: FarmMember[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListFarmsRequest {
  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The principal ID of the member to list on the farm.</p>
   * @public
   */
  principalId?: string | undefined;
}

/**
 * <p>The summary of details for a farm.</p>
 * @public
 */
export interface FarmSummary {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the farm.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The ARN for the KMS key.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListFarmsResponse {
  /**
   * <p>Farms on the list.</p>
   * @public
   */
  farms: FarmSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListLimitsRequest {
  /**
   * <p>The unique identifier of the farm that contains the limits.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of limits to return in each page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides information about a specific limit.</p>
 * @public
 */
export interface LimitSummary {
  /**
   * <p>The unique identifier of the farm that contains the limit.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the limit.</p>
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.</p>
   * @public
   */
  currentCount: number | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the limit was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user identifier of the person that created the limit.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the limit was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user identifier of the person that last updated the limit.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The name of the limit used in lists to identify the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The value that you specify as the <code>name</code> in the <code>amounts</code> field of the <code>hostRequirements</code> in a step of a job template to declare the limit requirement.</p>
   * @public
   */
  amountRequirementName: string | undefined;

  /**
   * <p>The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.</p> <p>The <code>maxValue</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.</p>
   * @public
   */
  maxCount: number | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListLimitsResponse {
  /**
   * <p>A list of limits that the farm contains.</p>
   * @public
   */
  limits: LimitSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListStorageProfilesRequest {
  /**
   * <p>The farm ID of the storage profile.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a storage profile.</p>
 * @public
 */
export interface StorageProfileSummary {
  /**
   * <p>The storage profile ID.</p>
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The operating system (OS) family.</p>
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListStorageProfilesResponse {
  /**
   * <p>The storage profiles.</p>
   * @public
   */
  storageProfiles: StorageProfileSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * <p>The ID of the farm from which to remove the queue.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the queue to delete.</p>
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
   * <p>The farm ID of the farm from which to remove the queue environment.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the queue environment to delete.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The queue environment ID of the queue environment to delete.</p>
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
   * <p>The farm ID for the queue to disassociate from a member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID of the queue in which you're disassociating from a member.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>A member's principal ID to disassociate from a queue.</p>
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
   * <p>The farm ID of the farm in the queue.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the queue to retrieve.</p>
   * @public
   */
  queueId: string | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetQueueResponse {
  /**
   * <p>The farm ID for the queue.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID.</p>
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
   * <p>The default action taken on a queue if a budget wasn't configured.</p>
   * @public
   */
  defaultBudgetAction: DefaultQueueBudgetAction | undefined;

  /**
   * <p>The reason the queue was blocked.</p>
   * @public
   */
  blockedReason?: QueueBlockedReason | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The description of the queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The job attachment settings for the queue.</p>
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * <p>The IAM role ARN.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A list of the required file system location names in the queue.</p>
   * @public
   */
  requiredFileSystemLocationNames?: string[] | undefined;

  /**
   * <p>The storage profile IDs for the queue.</p>
   * @public
   */
  allowedStorageProfileIds?: string[] | undefined;

  /**
   * <p>The jobs in the queue ran as this specified POSIX user.</p>
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * <p>The scheduling configuration for the queue. This configuration determines how workers are assigned to jobs in the queue.</p>
   * @public
   */
  schedulingConfiguration?: SchedulingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetQueueEnvironmentRequest {
  /**
   * <p>The farm ID for the queue environment.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the queue environment.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The queue environment ID.</p>
   * @public
   */
  queueEnvironmentId: string | undefined;
}

/**
 * @public
 */
export interface GetQueueEnvironmentResponse {
  /**
   * <p>The queue environment ID.</p>
   * @public
   */
  queueEnvironmentId: string | undefined;

  /**
   * <p>The name of the queue environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of the queue environment.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The type of template for the queue environment.</p>
   * @public
   */
  templateType: EnvironmentTemplateType | undefined;

  /**
   * <p>The template for the queue environment.</p>
   * @public
   */
  template: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.&gt;</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileForQueueRequest {
  /**
   * <p>The farm ID for the queue in storage profile.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID the queue in the storage profile.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The storage profile ID for the storage profile in the queue.</p>
   * @public
   */
  storageProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetStorageProfileForQueueResponse {
  /**
   * <p>The storage profile ID.</p>
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * <p>The display name of the storage profile connected to a queue.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The operating system of the storage profile in the queue.</p>
   * @public
   */
  osFamily: StorageProfileOperatingSystemFamily | undefined;

  /**
   * <p>The location of the files for the storage profile within the queue.</p>
   * @public
   */
  fileSystemLocations?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromJobRequest {
  /**
   * <p>The farm ID for the job to disassociate from the member.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID connected to a job for which you're disassociating a member.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID to disassociate from a member in a job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A member's principal ID to disassociate from a job.</p>
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
   * <p>The farm ID of the farm in the job.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID associated with the job.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * Mixin that adds an optional ARN field to response structures.
 * Apply to SummaryMixins (flows into Get, Summary, and BatchGet) and Create outputs.
 * @public
 */
export interface GetJobResponse {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status for the job. </p>
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * <p>A message that communicates the status of the life cycle for the job.</p>
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * <p>The job priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The task run status for the job.</p>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * <p>The task status with which the job started.</p>
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * <p>The number of tasks running on the job.</p>
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The total number of times tasks from the job failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The storage profile ID associated with the job.</p>
   * @public
   */
  storageProfileId?: string | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries per failed tasks.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The parameters for the job.</p>
   * @public
   */
  parameters?: Record<string, JobParameter> | undefined;

  /**
   * <p>The attachments for the job.</p>
   * @public
   */
  attachments?: Attachments | undefined;

  /**
   * <p>The description of the job.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.</p> <p>If you don't set the <code>maxWorkerCount</code> when you create a job, this value is not returned in the response.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The job ID for the source job.</p>
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The farm ID for the session.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the session.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * Session lifecycle/status fields, ordered after IDs in session shapes.
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The fleet ID for the session.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID for the session.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The life cycle status of the session.</p>
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The life cycle status with which the session started.</p>
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The session log.</p>
   * @public
   */
  log: LogConfiguration | undefined;

  /**
   * <p>Provides the Amazon EC2 properties of the host.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The worker log for the session.</p>
   * @public
   */
  workerLog?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSessionActionRequest {
  /**
   * <p>The farm ID for the session action.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the session action.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the session.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The session action ID for the session.</p>
   * @public
   */
  sessionActionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionActionResponse {
  /**
   * <p>The session action ID.</p>
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * <p>The status of the session action.</p>
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The Linux timestamp of the date and time the session action was last updated.</p>
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * <p>The percentage completed for a session action.</p>
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * <p>The list of manifest properties that describe file attachments for the task run.</p>
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * <p>The session ID for the session action.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The process exit code. The default Deadline Cloud worker agent converts unsigned 32-bit exit codes to signed 32-bit exit codes.</p>
   * @public
   */
  processExitCode?: number | undefined;

  /**
   * <p>The message that communicates the progress of the session action.</p>
   * @public
   */
  progressMessage?: string | undefined;

  /**
   * <p>The limits and their amounts acquired during a session action. If no limits were acquired during the session, this field isn't returned.</p>
   * @public
   */
  acquiredLimits?: AcquiredLimit[] | undefined;

  /**
   * <p>The session action definition.</p>
   * @public
   */
  definition: SessionActionDefinition | undefined;
}

/**
 * @public
 */
export interface GetStepRequest {
  /**
   * <p>The farm ID for the step.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the step.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the step.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;
}

/**
 * @public
 */
export interface GetStepResponse {
  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status of the step.</p>
   * @public
   */
  lifecycleStatus: StepLifecycleStatus | undefined;

  /**
   * <p>A message that describes the lifecycle status of the step.</p>
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p>
   * @public
   */
  taskRunStatus: TaskRunStatus | undefined;

  /**
   * <p>The number of tasks running on the job.</p>
   * @public
   */
  taskRunStatusCounts: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The total number of times tasks from the step failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The task status with which the job started.</p>
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The number of dependencies in the step.</p>
   * @public
   */
  dependencyCounts?: DependencyCounts | undefined;

  /**
   * <p>The required capabilities of the step.</p>
   * @public
   */
  requiredCapabilities?: StepRequiredCapabilities | undefined;

  /**
   * <p>A list of step parameters and the combination expression for the step.</p>
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
   * <p>The farm ID of the farm connected to the task.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the queue connected to the task.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID of the job connected to the task.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID for the step connected to the task.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface GetTaskResponse {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The run status for the task.</p>
   * @public
   */
  runStatus: TaskRunStatus | undefined;

  /**
   * <p>The run status with which to start the task.</p>
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * <p>The number of times that the task failed and was retried.</p>
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The latest session action ID for the task.</p>
   * @public
   */
  latestSessionActionId?: string | undefined;

  /**
   * <p>The parameters for the task.</p>
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListJobMembersRequest {
  /**
   * <p>The farm ID of the job to list.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to include on the list.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID to include on the list.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details for a job member.</p>
 * @public
 */
export interface JobMember {
  /**
   * <p>The farm ID.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The principal ID of the job member.</p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The principal type of the job member.</p>
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * <p>The identity store ID.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The job member's membership level.</p>
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListJobMembersResponse {
  /**
   * <p>The members on the list.</p>
   * @public
   */
  members: JobMember[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListJobParameterDefinitionsRequest {
  /**
   * <p>The farm ID of the job to list.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to include on the list.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID to include on the list.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListJobParameterDefinitionsResponse {
  /**
   * <p>Lists parameter definitions of a job.</p>
   * @public
   */
  jobParameterDefinitions: __DocumentType[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The farm ID for the jobs.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the job.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The principal ID of the members on the jobs.</p>
   * @public
   */
  principalId?: string | undefined;
}

/**
 * <p>A summary of job details.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The job name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The life cycle status.</p>
   * @public
   */
  lifecycleStatus: JobLifecycleStatus | undefined;

  /**
   * <p>The life cycle status message.</p>
   * @public
   */
  lifecycleStatusMessage: string | undefined;

  /**
   * <p>The job priority.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The task run status for the job.</p> <ul> <li> <p> <code>PENDING</code>–pending and waiting for resources.</p> </li> <li> <p> <code>READY</code>–ready to be processed.</p> </li> <li> <p> <code>ASSIGNED</code>–assigned and will run next on a worker.</p> </li> <li> <p> <code>SCHEDULED</code>–scheduled to be run on a worker.</p> </li> <li> <p> <code>INTERRUPTING</code>–being interrupted.</p> </li> <li> <p> <code>RUNNING</code>–running on a worker.</p> </li> <li> <p> <code>SUSPENDED</code>–the task is suspended.</p> </li> <li> <p> <code>CANCELED</code>–the task has been canceled.</p> </li> <li> <p> <code>FAILED</code>–the task has failed.</p> </li> <li> <p> <code>SUCCEEDED</code>–the task has succeeded.</p> </li> </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * <p>The task status to update the job's tasks to.</p>
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * <p>The number of tasks running on the job.</p>
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The total number of times tasks from the job failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries for a job.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.</p> <p>You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.</p> <p>If you don't specify the <code>maxWorkerCount</code>, the default is -1.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The job ID for the source job.</p>
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>The jobs on the list.</p>
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListSessionActionsRequest {
  /**
   * <p>The farm ID for the session actions list.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the session actions list.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the session actions list.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The session ID to include on the sessions action list.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The task ID for the session actions list.</p>
   * @public
   */
  taskId?: string | undefined;
}

/**
 * <p>Defines the environment a session action enters in.</p>
 * @public
 */
export interface EnvironmentEnterSessionActionDefinitionSummary {
  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>A summary of the environment details for which a session action to exits.</p>
 * @public
 */
export interface EnvironmentExitSessionActionDefinitionSummary {
  /**
   * <p>The environment ID.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>The summary of the session action definition for syncing input job attachments.</p>
 * @public
 */
export interface SyncInputJobAttachmentsSessionActionDefinitionSummary {
  /**
   * <p>The step ID for the sync input job attachments session action summary.</p>
   * @public
   */
  stepId?: string | undefined;
}

/**
 * <p>The details of a task run in a session action.</p>
 * @public
 */
export interface TaskRunSessionActionDefinitionSummary {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The parameters of a task run in a session action.</p>
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * <p>The details of a session action definition.</p>
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
   * <p>The environment to enter into.</p>
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
   * <p>The environment to exit from.</p>
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
   * <p>The task run.</p>
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
   * <p>The session action definition summary for syncing input job attachments.</p>
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
 * <p>The details of a session action.</p>
 * @public
 */
export interface SessionActionSummary {
  /**
   * <p>The session action ID.</p>
   * @public
   */
  sessionActionId: string | undefined;

  /**
   * <p>The status of the session action.</p>
   * @public
   */
  status: SessionActionStatus | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The Linux timestamp of the last date and time that the session action was updated.</p>
   * @public
   */
  workerUpdatedAt?: Date | undefined;

  /**
   * <p>The completion percentage for the session action.</p>
   * @public
   */
  progressPercent?: number | undefined;

  /**
   * <p>The list of manifest properties that describe file attachments for the task run.</p>
   * @public
   */
  manifests?: TaskRunManifestPropertiesResponse[] | undefined;

  /**
   * <p>The session action definition.</p>
   * @public
   */
  definition: SessionActionDefinitionSummary | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListSessionActionsResponse {
  /**
   * <p>The session actions.</p>
   * @public
   */
  sessionActions: SessionActionSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Shared pagination fields for List operation inputs (nextToken + maxResults).
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The farm ID for the list of sessions.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the list of sessions</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the list of sessions.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of a session.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The life cycle status for the session.</p>
   * @public
   */
  lifecycleStatus: SessionLifecycleStatus | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The target life cycle status for the session.</p>
   * @public
   */
  targetLifecycleStatus?: SessionLifecycleTargetStatus | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * Shared pagination field for List operation outputs (nextToken).
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>The sessions on the list.</p>
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStepConsumersRequest {
  /**
   * <p>The farm ID for the list of step consumers.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the step consumer.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The job ID for the step consumer.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The step ID to include on the list.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a step consumer.</p>
 * @public
 */
export interface StepConsumer {
  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId: string | undefined;

  /**
   * <p>The step consumer status.</p>
   * @public
   */
  status: DependencyConsumerResolutionStatus | undefined;
}

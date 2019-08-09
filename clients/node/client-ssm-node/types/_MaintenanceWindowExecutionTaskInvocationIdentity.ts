/**
 * <p>Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.</p>
 */
export interface _MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The ID of the task invocation.</p>
   */
  InvocationId?: string;

  /**
   * <p>The ID of the action performed in the service that actually handled the task invocation. If the task type is RUN_COMMAND, this value is the command ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The task type.</p>
   */
  TaskType?:
    | "RUN_COMMAND"
    | "AUTOMATION"
    | "STEP_FUNCTIONS"
    | "LAMBDA"
    | string;

  /**
   * <p>The parameters that were provided for the invocation when it was run.</p>
   */
  Parameters?: string;

  /**
   * <p>The status of the task invocation.</p>
   */
  Status?:
    | "PENDING"
    | "IN_PROGRESS"
    | "SUCCESS"
    | "FAILED"
    | "TIMED_OUT"
    | "CANCELLING"
    | "CANCELLED"
    | "SKIPPED_OVERLAPPING"
    | string;

  /**
   * <p>The details explaining the status of the task invocation. Only available for certain Status values. </p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the invocation started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time the invocation finished.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>User-provided value that was specified when the target was registered with the maintenance window. This was also included in any CloudWatch events raised during the task invocation.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The ID of the target definition in this maintenance window the invocation was performed for.</p>
   */
  WindowTargetId?: string;
}

export interface _UnmarshalledMaintenanceWindowExecutionTaskInvocationIdentity
  extends _MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * <p>The time the invocation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the invocation finished.</p>
   */
  EndTime?: Date;
}

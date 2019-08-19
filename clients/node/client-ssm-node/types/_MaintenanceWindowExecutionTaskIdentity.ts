/**
 * <p>Information about a task execution performed as part of a maintenance window execution.</p>
 */
export interface _MaintenanceWindowExecutionTaskIdentity {
  /**
   * <p>The ID of the maintenance window execution that ran the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window execution.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The status of the task execution.</p>
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
   * <p>The details explaining the status of the task execution. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time the task execution finished.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The ARN of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task that ran.</p>
   */
  TaskType?:
    | "RUN_COMMAND"
    | "AUTOMATION"
    | "STEP_FUNCTIONS"
    | "LAMBDA"
    | string;
}

export interface _UnmarshalledMaintenanceWindowExecutionTaskIdentity
  extends _MaintenanceWindowExecutionTaskIdentity {
  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the task execution finished.</p>
   */
  EndTime?: Date;
}

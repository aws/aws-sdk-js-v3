/**
 * <p>Describes the information about an execution of a maintenance window. </p>
 */
export interface _MaintenanceWindowExecution {
  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The status of the execution.</p>
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
   * <p>The details explaining the Status. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the execution started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time the execution finished.</p>
   */
  EndTime?: Date | string | number;
}

export interface _UnmarshalledMaintenanceWindowExecution
  extends _MaintenanceWindowExecution {
  /**
   * <p>The time the execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the execution finished.</p>
   */
  EndTime?: Date;
}

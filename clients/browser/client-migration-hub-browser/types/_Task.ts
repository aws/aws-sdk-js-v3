/**
 * <p>Task object encapsulating task information.</p>
 */
export interface _Task {
  /**
   * <p>Status of the task - Not Started, In-Progress, Complete.</p>
   */
  Status: "NOT_STARTED" | "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>Details of task status as notified by a migration tool. A tool might use this field to provide clarifying information about the status that is unique to that tool or that explains an error state.</p>
   */
  StatusDetail?: string;

  /**
   * <p>Indication of the percentage completion of the task.</p>
   */
  ProgressPercent?: number;
}

export type _UnmarshalledTask = _Task;

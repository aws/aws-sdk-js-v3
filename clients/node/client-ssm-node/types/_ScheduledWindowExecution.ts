/**
 * <p>Information about a scheduled execution for a maintenance window.</p>
 */
export interface _ScheduledWindowExecution {
  /**
   * <p>The ID of the maintenance window to be run.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window to be run.</p>
   */
  Name?: string;

  /**
   * <p>The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be run.</p>
   */
  ExecutionTime?: string;
}

export type _UnmarshalledScheduledWindowExecution = _ScheduledWindowExecution;

/**
 * <p>Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when <a>ListTaskExecutions</a> operation is called.</p>
 */
export interface _TaskExecutionListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that was executed.</p>
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of a task execution.</p>
   */
  Status?:
    | "LAUNCHING"
    | "PREPARING"
    | "TRANSFERRING"
    | "VERIFYING"
    | "SUCCESS"
    | "ERROR"
    | string;
}

export type _UnmarshalledTaskExecutionListEntry = _TaskExecutionListEntry;

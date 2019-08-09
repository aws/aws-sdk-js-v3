/**
 * <p>Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a>ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.</p>
 */
export interface _TaskListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  TaskArn?: string;

  /**
   * <p>The status of the task.</p>
   */
  Status?: "AVAILABLE" | "CREATING" | "RUNNING" | "UNAVAILABLE" | string;

  /**
   * <p>The name of the task.</p>
   */
  Name?: string;
}

export type _UnmarshalledTaskListEntry = _TaskListEntry;

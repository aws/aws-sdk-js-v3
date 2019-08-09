/**
 * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface _JobProgressSummary {
  /**
   * <p/>
   */
  TotalNumberOfTasks?: number;

  /**
   * <p/>
   */
  NumberOfTasksSucceeded?: number;

  /**
   * <p/>
   */
  NumberOfTasksFailed?: number;
}

export type _UnmarshalledJobProgressSummary = _JobProgressSummary;

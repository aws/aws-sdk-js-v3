/**
 * <p>A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.</p>
 */
export interface _AutomationExecutionFilter {
  /**
   * <p>One or more keys to limit the results. Valid filter keys include the following: DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction, StartTimeBefore, StartTimeAfter.</p>
   */
  Key:
    | "DocumentNamePrefix"
    | "ExecutionStatus"
    | "ExecutionId"
    | "ParentExecutionId"
    | "CurrentAction"
    | "StartTimeBefore"
    | "StartTimeAfter"
    | "AutomationType"
    | string;

  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAutomationExecutionFilter
  extends _AutomationExecutionFilter {
  /**
   * <p>The values used to limit the execution information associated with the filter's key.</p>
   */
  Values: Array<string>;
}

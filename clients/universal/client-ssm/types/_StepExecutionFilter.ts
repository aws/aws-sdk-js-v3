/**
 * <p>A filter to limit the amount of step execution information returned by the call.</p>
 */
export interface _StepExecutionFilter {
  /**
   * <p>One or more keys to limit the results. Valid filter keys include the following: StepName, Action, StepExecutionId, StepExecutionStatus, StartTimeBefore, StartTimeAfter.</p>
   */
  Key:
    | "StartTimeBefore"
    | "StartTimeAfter"
    | "StepExecutionStatus"
    | "StepExecutionId"
    | "StepName"
    | "Action"
    | string;

  /**
   * <p>The values of the filter key.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledStepExecutionFilter extends _StepExecutionFilter {
  /**
   * <p>The values of the filter key.</p>
   */
  Values: Array<string>;
}

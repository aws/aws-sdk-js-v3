/**
 * <p>Contains the counts of open tasks, child workflow executions and timers for a workflow execution.</p>
 */
export interface _WorkflowExecutionOpenCounts {
  /**
   * <p>The count of activity tasks whose status is <code>OPEN</code>.</p>
   */
  openActivityTasks: number;

  /**
   * <p>The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.</p>
   */
  openDecisionTasks: number;

  /**
   * <p>The count of timers started by this workflow execution that have not fired yet.</p>
   */
  openTimers: number;

  /**
   * <p>The count of child workflow executions whose status is <code>OPEN</code>.</p>
   */
  openChildWorkflowExecutions: number;

  /**
   * <p>The count of Lambda tasks whose status is <code>OPEN</code>.</p>
   */
  openLambdaFunctions?: number;
}

export type _UnmarshalledWorkflowExecutionOpenCounts = _WorkflowExecutionOpenCounts;

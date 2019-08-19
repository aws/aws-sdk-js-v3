/**
 * <p>Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.</p>
 */
export interface _WorkflowExecutionFilter {
  /**
   * <p>The workflowId to pass of match the criteria of this filter.</p>
   */
  workflowId: string;
}

export type _UnmarshalledWorkflowExecutionFilter = _WorkflowExecutionFilter;

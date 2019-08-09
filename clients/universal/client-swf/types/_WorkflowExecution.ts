/**
 * <p>Represents a workflow execution.</p>
 */
export interface _WorkflowExecution {
  /**
   * <p>The user defined identifier associated with the workflow execution.</p>
   */
  workflowId: string;

  /**
   * <p>A system-generated unique identifier for the workflow execution.</p>
   */
  runId: string;
}

export type _UnmarshalledWorkflowExecution = _WorkflowExecution;

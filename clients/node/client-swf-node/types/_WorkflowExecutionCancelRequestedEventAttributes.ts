import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";

/**
 * <p>Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.</p>
 */
export interface _WorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution for which the cancellation was requested.</p>
   */
  externalWorkflowExecution?: _WorkflowExecution;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  externalInitiatedEventId?: number;

  /**
   * <p>If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.</p>
   */
  cause?: "CHILD_POLICY_APPLIED" | string;
}

export interface _UnmarshalledWorkflowExecutionCancelRequestedEventAttributes
  extends _WorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution for which the cancellation was requested.</p>
   */
  externalWorkflowExecution?: _UnmarshalledWorkflowExecution;
}

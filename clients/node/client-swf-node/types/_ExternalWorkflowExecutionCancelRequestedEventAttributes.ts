import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.</p>
 */
export interface _ExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution to which the cancellation request was delivered.</p>
   */
  workflowExecution: _WorkflowExecution;

  /**
   * <p>The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  initiatedEventId: number;
}

export interface _UnmarshalledExternalWorkflowExecutionCancelRequestedEventAttributes
  extends _ExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * <p>The external workflow execution to which the cancellation request was delivered.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;
}

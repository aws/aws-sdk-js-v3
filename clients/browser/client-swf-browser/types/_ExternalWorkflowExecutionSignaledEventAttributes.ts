import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";

/**
 * <p>Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.</p>
 */
export interface _ExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The external workflow execution that the signal was delivered to.</p>
   */
  workflowExecution: _WorkflowExecution;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  initiatedEventId: number;
}

export interface _UnmarshalledExternalWorkflowExecutionSignaledEventAttributes
  extends _ExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The external workflow execution that the signal was delivered to.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;
}

import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";

/**
 * <p>Provides the details of the <code>WorkflowExecutionSignaled</code> event.</p>
 */
export interface _WorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.</p>
   */
  signalName: string;

  /**
   * <p>The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.</p>
   */
  input?: string;

  /**
   * <p>The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.</p>
   */
  externalWorkflowExecution?: _WorkflowExecution;

  /**
   * <p>The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the <code>SignalExternalWorkflow</code> decision to signal this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event. This field is set only if the signal was initiated by another workflow execution.</p>
   */
  externalInitiatedEventId?: number;
}

export interface _UnmarshalledWorkflowExecutionSignaledEventAttributes
  extends _WorkflowExecutionSignaledEventAttributes {
  /**
   * <p>The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.</p>
   */
  externalWorkflowExecution?: _UnmarshalledWorkflowExecution;
}

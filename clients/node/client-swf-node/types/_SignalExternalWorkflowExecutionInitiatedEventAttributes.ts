/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.</p>
 */
export interface _SignalExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow execution.</p>
   */
  workflowId: string;

  /**
   * <p>The <code>runId</code> of the external workflow execution to send the signal to.</p>
   */
  runId?: string;

  /**
   * <p>The name of the signal.</p>
   */
  signalName: string;

  /**
   * <p>The input provided to the signal.</p>
   */
  input?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   */
  control?: string;
}

export type _UnmarshalledSignalExternalWorkflowExecutionInitiatedEventAttributes = _SignalExternalWorkflowExecutionInitiatedEventAttributes;

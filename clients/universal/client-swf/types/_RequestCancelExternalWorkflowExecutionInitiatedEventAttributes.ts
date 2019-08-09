/**
 * <p>Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.</p>
 */
export interface _RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the external workflow execution to be canceled.</p>
   */
  workflowId: string;

  /**
   * <p>The <code>runId</code> of the external workflow execution to be canceled.</p>
   */
  runId?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;
}

export type _UnmarshalledRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = _RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

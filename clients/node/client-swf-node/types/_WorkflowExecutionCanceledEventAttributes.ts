/**
 * <p>Provides the details of the <code>WorkflowExecutionCanceled</code> event.</p>
 */
export interface _WorkflowExecutionCanceledEventAttributes {
  /**
   * <p>The details of the cancellation.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledWorkflowExecutionCanceledEventAttributes = _WorkflowExecutionCanceledEventAttributes;

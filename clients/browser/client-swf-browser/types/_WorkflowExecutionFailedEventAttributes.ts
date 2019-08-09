/**
 * <p>Provides the details of the <code>WorkflowExecutionFailed</code> event.</p>
 */
export interface _WorkflowExecutionFailedEventAttributes {
  /**
   * <p>The descriptive reason provided for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledWorkflowExecutionFailedEventAttributes = _WorkflowExecutionFailedEventAttributes;

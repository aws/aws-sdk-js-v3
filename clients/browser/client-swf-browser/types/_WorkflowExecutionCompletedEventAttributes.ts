/**
 * <p>Provides the details of the <code>WorkflowExecutionCompleted</code> event.</p>
 */
export interface _WorkflowExecutionCompletedEventAttributes {
  /**
   * <p>The result produced by the workflow execution upon successful completion.</p>
   */
  result?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledWorkflowExecutionCompletedEventAttributes = _WorkflowExecutionCompletedEventAttributes;

/**
 * <p>Provides the details of the <code>DecisionTaskCompleted</code> event.</p>
 */
export interface _DecisionTaskCompletedEventAttributes {
  /**
   * <p>User defined context for the workflow execution.</p>
   */
  executionContext?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;
}

export type _UnmarshalledDecisionTaskCompletedEventAttributes = _DecisionTaskCompletedEventAttributes;

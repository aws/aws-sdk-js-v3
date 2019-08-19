/**
 * <p>Provides the details of the <code>DecisionTaskStarted</code> event.</p>
 */
export interface _DecisionTaskStartedEventAttributes {
  /**
   * <p>Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;
}

export type _UnmarshalledDecisionTaskStartedEventAttributes = _DecisionTaskStartedEventAttributes;

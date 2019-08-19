/**
 * <p>Provides the details of the <code>TimerStarted</code> event.</p>
 */
export interface _TimerStartedEventAttributes {
  /**
   * <p>The unique ID of the timer that was started.</p>
   */
  timerId: string;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks.</p>
   */
  control?: string;

  /**
   * <p>The duration of time after which the timer fires.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>
   */
  startToFireTimeout: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledTimerStartedEventAttributes = _TimerStartedEventAttributes;

/**
 * <p> Provides the details of the <code>TimerCanceled</code> event. </p>
 */
export interface _TimerCanceledEventAttributes {
  /**
   * <p>The unique ID of the timer that was canceled.</p>
   */
  timerId: string;

  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledTimerCanceledEventAttributes = _TimerCanceledEventAttributes;

/**
 * <p>Provides the details of the <code>TimerFired</code> event.</p>
 */
export interface _TimerFiredEventAttributes {
  /**
   * <p>The unique ID of the timer that fired.</p>
   */
  timerId: string;

  /**
   * <p>The ID of the <code>TimerStarted</code> event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;
}

export type _UnmarshalledTimerFiredEventAttributes = _TimerFiredEventAttributes;

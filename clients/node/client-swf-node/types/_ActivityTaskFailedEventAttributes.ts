/**
 * <p>Provides the details of the <code>ActivityTaskFailed</code> event.</p>
 */
export interface _ActivityTaskFailedEventAttributes {
  /**
   * <p>The reason provided for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;
}

export type _UnmarshalledActivityTaskFailedEventAttributes = _ActivityTaskFailedEventAttributes;

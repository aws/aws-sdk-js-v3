/**
 * <p>Provides the details of the <code>ActivityTaskTimedOut</code> event.</p>
 */
export interface _ActivityTaskTimedOutEventAttributes {
  /**
   * <p>The type of the timeout that caused this event.</p>
   */
  timeoutType:
    | "START_TO_CLOSE"
    | "SCHEDULE_TO_START"
    | "SCHEDULE_TO_CLOSE"
    | "HEARTBEAT"
    | string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>Contains the content of the <code>details</code> parameter for the last call made by the activity to <code>RecordActivityTaskHeartbeat</code>.</p>
   */
  details?: string;
}

export type _UnmarshalledActivityTaskTimedOutEventAttributes = _ActivityTaskTimedOutEventAttributes;

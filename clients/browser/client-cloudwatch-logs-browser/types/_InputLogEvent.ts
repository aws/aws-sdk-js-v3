/**
 * <p>Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.</p>
 */
export interface _InputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  timestamp: number;

  /**
   * <p>The raw event message.</p>
   */
  message: string;
}

export type _UnmarshalledInputLogEvent = _InputLogEvent;

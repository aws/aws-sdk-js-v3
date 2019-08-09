/**
 * <p>Represents a log event.</p>
 */
export interface _OutputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  timestamp?: number;

  /**
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  ingestionTime?: number;
}

export type _UnmarshalledOutputLogEvent = _OutputLogEvent;

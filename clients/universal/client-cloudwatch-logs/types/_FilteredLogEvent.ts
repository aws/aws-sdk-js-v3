/**
 * <p>Represents a matched event.</p>
 */
export interface _FilteredLogEvent {
  /**
   * <p>The name of the log stream to which this event belongs.</p>
   */
  logStreamName?: string;

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

  /**
   * <p>The ID of the event.</p>
   */
  eventId?: string;
}

export type _UnmarshalledFilteredLogEvent = _FilteredLogEvent;

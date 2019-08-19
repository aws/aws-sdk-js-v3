/**
 * <p>Represents an event that failed to be submitted.</p>
 */
export interface _PutEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledPutEventsResultEntry = _PutEventsResultEntry;

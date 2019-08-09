/**
 * <p>Represents an event that a partner tried to generate but failed.</p>
 */
export interface _PutPartnerEventsResultEntry {
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

export type _UnmarshalledPutPartnerEventsResultEntry = _PutPartnerEventsResultEntry;

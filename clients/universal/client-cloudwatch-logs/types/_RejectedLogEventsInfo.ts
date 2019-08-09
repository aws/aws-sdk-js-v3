/**
 * <p>Represents the rejected events.</p>
 */
export interface _RejectedLogEventsInfo {
  /**
   * <p>The log events that are too new.</p>
   */
  tooNewLogEventStartIndex?: number;

  /**
   * <p>The log events that are too old.</p>
   */
  tooOldLogEventEndIndex?: number;

  /**
   * <p>The expired log events.</p>
   */
  expiredLogEventEndIndex?: number;
}

export type _UnmarshalledRejectedLogEventsInfo = _RejectedLogEventsInfo;

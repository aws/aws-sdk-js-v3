/**
 * <p>Contains details about an activity timeout that occurred during an execution.</p>
 */
export interface _ActivityTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   */
  cause?: string;
}

export type _UnmarshalledActivityTimedOutEventDetails = _ActivityTimedOutEventDetails;

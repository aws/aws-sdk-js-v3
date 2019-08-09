/**
 * <p>Contains details about an activity that failed during an execution.</p>
 */
export interface _ActivityFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledActivityFailedEventDetails = _ActivityFailedEventDetails;

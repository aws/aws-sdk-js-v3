/**
 * <p>Contains details about an activity schedule failure that occurred during an execution.</p>
 */
export interface _ActivityScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledActivityScheduleFailedEventDetails = _ActivityScheduleFailedEventDetails;

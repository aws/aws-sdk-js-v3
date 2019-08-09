/**
 * <p>Contains details about an activity scheduled during an execution.</p>
 */
export interface _ActivityScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled activity.</p>
   */
  resource: string;

  /**
   * <p>The JSON data input to the activity task.</p>
   */
  input?: string;

  /**
   * <p>The maximum allowed duration of the activity task.</p>
   */
  timeoutInSeconds?: number;

  /**
   * <p>The maximum allowed duration between two heartbeats for the activity task.</p>
   */
  heartbeatInSeconds?: number;
}

export type _UnmarshalledActivityScheduledEventDetails = _ActivityScheduledEventDetails;

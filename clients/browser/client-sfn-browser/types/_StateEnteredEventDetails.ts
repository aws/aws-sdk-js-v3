/**
 * <p>Contains details about a state entered during an execution.</p>
 */
export interface _StateEnteredEventDetails {
  /**
   * <p>The name of the state.</p>
   */
  name: string;

  /**
   * <p>The string that contains the JSON input data for the state.</p>
   */
  input?: string;
}

export type _UnmarshalledStateEnteredEventDetails = _StateEnteredEventDetails;

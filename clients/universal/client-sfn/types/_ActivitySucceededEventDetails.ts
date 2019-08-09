/**
 * <p>Contains details about an activity that successfully terminated during an execution.</p>
 */
export interface _ActivitySucceededEventDetails {
  /**
   * <p>The JSON data output by the activity task.</p>
   */
  output?: string;
}

export type _UnmarshalledActivitySucceededEventDetails = _ActivitySucceededEventDetails;

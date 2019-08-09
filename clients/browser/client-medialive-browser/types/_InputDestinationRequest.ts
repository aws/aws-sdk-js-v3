/**
 * Endpoint settings for a PUSH type input.
 */
export interface _InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   *
   */
  StreamName?: string;
}

export type _UnmarshalledInputDestinationRequest = _InputDestinationRequest;

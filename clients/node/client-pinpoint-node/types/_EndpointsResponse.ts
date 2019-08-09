import {
  _EndpointResponse,
  _UnmarshalledEndpointResponse
} from "./_EndpointResponse";

/**
 * <p>Provides information about all the endpoints that are associated with a user ID.</p>
 */
export interface _EndpointsResponse {
  /**
   * <p>An array of responses, one for each endpoint that's associated with the user ID.</p>
   */
  Item: Array<_EndpointResponse> | Iterable<_EndpointResponse>;
}

export interface _UnmarshalledEndpointsResponse extends _EndpointsResponse {
  /**
   * <p>An array of responses, one for each endpoint that's associated with the user ID.</p>
   */
  Item: Array<_UnmarshalledEndpointResponse>;
}

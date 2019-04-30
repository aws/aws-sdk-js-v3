import {
  _EndpointResponse,
  _UnmarshalledEndpointResponse
} from "./_EndpointResponse";

/**
 * List of endpoints
 */
export interface _EndpointsResponse {
  /**
   * The list of endpoints.
   */
  Item?: Array<_EndpointResponse> | Iterable<_EndpointResponse>;
}

export interface _UnmarshalledEndpointsResponse extends _EndpointsResponse {
  /**
   * The list of endpoints.
   */
  Item?: Array<_UnmarshalledEndpointResponse>;
}

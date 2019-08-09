/**
 * <p>Provides the status code and message that result from processing data for an endpoint.</p>
 */
export interface _EndpointItemResponse {
  /**
   * <p>The custom message that's returned in the response as a result of processing the endpoint data.</p>
   */
  Message?: string;

  /**
   * <p>The status code that's returned in the response as a result of processing the endpoint data.</p>
   */
  StatusCode?: number;
}

export type _UnmarshalledEndpointItemResponse = _EndpointItemResponse;

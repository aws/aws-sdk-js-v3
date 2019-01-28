/**
 * A complex object that holds the status code and message as a result of processing an endpoint.
 */
export interface _EndpointItemResponse {
    /**
     * A custom message associated with the registration of an endpoint when issuing a response.
     */
    Message?: string;

    /**
     * The status code associated with the merging of an endpoint when issuing a response.
     */
    StatusCode?: number;
}

export type _UnmarshalledEndpointItemResponse = _EndpointItemResponse;
import {
  _EndpointItemResponse,
  _UnmarshalledEndpointItemResponse
} from "./_EndpointItemResponse";
import {
  _EventItemResponse,
  _UnmarshalledEventItemResponse
} from "./_EventItemResponse";

/**
 * The response that's provided after registering the endpoint.
 */
export interface _ItemResponse {
  /**
   * The response received after the endpoint was accepted.
   */
  EndpointItemResponse?: _EndpointItemResponse;

  /**
   * A multipart response object that contains a key and value for each event ID in the request. In each object, the event ID is the key, and an EventItemResponse object is the value.
   */
  EventsItemResponse?:
    | { [key: string]: _EventItemResponse }
    | Iterable<[string, _EventItemResponse]>;
}

export interface _UnmarshalledItemResponse extends _ItemResponse {
  /**
   * The response received after the endpoint was accepted.
   */
  EndpointItemResponse?: _UnmarshalledEndpointItemResponse;

  /**
   * A multipart response object that contains a key and value for each event ID in the request. In each object, the event ID is the key, and an EventItemResponse object is the value.
   */
  EventsItemResponse?: { [key: string]: _UnmarshalledEventItemResponse };
}

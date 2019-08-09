import {
  _EndpointItemResponse,
  _UnmarshalledEndpointItemResponse
} from "./_EndpointItemResponse";
import {
  _EventItemResponse,
  _UnmarshalledEventItemResponse
} from "./_EventItemResponse";

/**
 * <p>Provides information about the results of a request to create or update an endpoint that's associated with an event.</p>
 */
export interface _ItemResponse {
  /**
   * <p>The response that was received after the endpoint data was accepted.</p>
   */
  EndpointItemResponse?: _EndpointItemResponse;

  /**
   * <p>A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.</p>
   */
  EventsItemResponse?:
    | { [key: string]: _EventItemResponse }
    | Iterable<[string, _EventItemResponse]>;
}

export interface _UnmarshalledItemResponse extends _ItemResponse {
  /**
   * <p>The response that was received after the endpoint data was accepted.</p>
   */
  EndpointItemResponse?: _UnmarshalledEndpointItemResponse;

  /**
   * <p>A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.</p>
   */
  EventsItemResponse?: { [key: string]: _UnmarshalledEventItemResponse };
}

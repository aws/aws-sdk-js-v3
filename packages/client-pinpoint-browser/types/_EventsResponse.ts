import { _ItemResponse, _UnmarshalledItemResponse } from "./_ItemResponse";

/**
 * Custom messages associated with events.
 */
export interface _EventsResponse {
  /**
   * A map that contains a multipart response for each endpoint. Each item in this object uses the endpoint ID as the key, and the item response as the value.
   *
   * If no item response exists, the value can also be one of the following: 202 (if the request was processed successfully) or 400 (if the payload was invalid, or required fields were missing).
   */
  Results?:
    | { [key: string]: _ItemResponse }
    | Iterable<[string, _ItemResponse]>;
}

export interface _UnmarshalledEventsResponse extends _EventsResponse {
  /**
   * A map that contains a multipart response for each endpoint. Each item in this object uses the endpoint ID as the key, and the item response as the value.
   *
   * If no item response exists, the value can also be one of the following: 202 (if the request was processed successfully) or 400 (if the payload was invalid, or required fields were missing).
   */
  Results?: { [key: string]: _UnmarshalledItemResponse };
}

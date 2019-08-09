import { _ItemResponse, _UnmarshalledItemResponse } from "./_ItemResponse";

/**
 * <p>Provides information about endpoints and the events that they're associated with.</p>
 */
export interface _EventsResponse {
  /**
   * <p>A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.</p>
   */
  Results?:
    | { [key: string]: _ItemResponse }
    | Iterable<[string, _ItemResponse]>;
}

export interface _UnmarshalledEventsResponse extends _EventsResponse {
  /**
   * <p>A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.</p>
   */
  Results?: { [key: string]: _UnmarshalledItemResponse };
}

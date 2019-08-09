import {
  _EndpointMessageResult,
  _UnmarshalledEndpointMessageResult
} from "./_EndpointMessageResult";
import { _MessageResult, _UnmarshalledMessageResult } from "./_MessageResult";

/**
 * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
 */
export interface _MessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string;

  /**
   * <p>A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.</p>
   */
  EndpointResult?:
    | { [key: string]: _EndpointMessageResult }
    | Iterable<[string, _EndpointMessageResult]>;

  /**
   * <p>The identifier for the original request that the message was delivered for.</p>
   */
  RequestId?: string;

  /**
   * <p>A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.</p>
   */
  Result?:
    | { [key: string]: _MessageResult }
    | Iterable<[string, _MessageResult]>;
}

export interface _UnmarshalledMessageResponse extends _MessageResponse {
  /**
   * <p>A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.</p>
   */
  EndpointResult?: { [key: string]: _UnmarshalledEndpointMessageResult };

  /**
   * <p>A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.</p>
   */
  Result?: { [key: string]: _UnmarshalledMessageResult };
}

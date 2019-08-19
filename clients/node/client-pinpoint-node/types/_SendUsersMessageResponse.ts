import {
  _EndpointMessageResult,
  _UnmarshalledEndpointMessageResult
} from "./_EndpointMessageResult";

/**
 * <p>Provides information about which users and endpoints a message was sent to.</p>
 */
export interface _SendUsersMessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string;

  /**
   * <p>The unique identifier that was assigned to the message request.</p>
   */
  RequestId?: string;

  /**
   * <p>An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.</p>
   */
  Result?:
    | {
        [key: string]:
          | { [key: string]: _EndpointMessageResult }
          | Iterable<[string, _EndpointMessageResult]>;
      }
    | Iterable<
        [
          string,

            | { [key: string]: _EndpointMessageResult }
            | Iterable<[string, _EndpointMessageResult]>
        ]
      >;
}

export interface _UnmarshalledSendUsersMessageResponse
  extends _SendUsersMessageResponse {
  /**
   * <p>An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.</p>
   */
  Result?: {
    [key: string]: { [key: string]: _UnmarshalledEndpointMessageResult };
  };
}

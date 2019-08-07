import {
  _DirectMessageConfiguration,
  _UnmarshalledDirectMessageConfiguration
} from "./_DirectMessageConfiguration";
import {
  _EndpointSendConfiguration,
  _UnmarshalledEndpointSendConfiguration
} from "./_EndpointSendConfiguration";

/**
 * Send message request.
 */
export interface _SendUsersMessageRequest {
  /**
   * A map of custom attribute-value pairs. Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the push notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * Message definitions for the default message and any messages that are tailored for specific channels.
   */
  MessageConfiguration?: _DirectMessageConfiguration;

  /**
   * A unique ID that you can use to trace a message. This ID is visible to recipients.
   */
  TraceId?: string;

  /**
   * A map that associates user IDs with EndpointSendConfiguration objects. Within an EndpointSendConfiguration object, you can tailor the message for a user by specifying message overrides or substitutions.
   */
  Users?:
    | { [key: string]: _EndpointSendConfiguration }
    | Iterable<[string, _EndpointSendConfiguration]>;
}

export interface _UnmarshalledSendUsersMessageRequest
  extends _SendUsersMessageRequest {
  /**
   * A map of custom attribute-value pairs. Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the push notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.
   */
  Context?: { [key: string]: string };

  /**
   * Message definitions for the default message and any messages that are tailored for specific channels.
   */
  MessageConfiguration?: _UnmarshalledDirectMessageConfiguration;

  /**
   * A map that associates user IDs with EndpointSendConfiguration objects. Within an EndpointSendConfiguration object, you can tailor the message for a user by specifying message overrides or substitutions.
   */
  Users?: { [key: string]: _UnmarshalledEndpointSendConfiguration };
}

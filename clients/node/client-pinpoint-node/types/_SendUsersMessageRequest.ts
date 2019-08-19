import {
  _DirectMessageConfiguration,
  _UnmarshalledDirectMessageConfiguration
} from "./_DirectMessageConfiguration";
import {
  _EndpointSendConfiguration,
  _UnmarshalledEndpointSendConfiguration
} from "./_EndpointSendConfiguration";

/**
 * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
 */
export interface _SendUsersMessageRequest {
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The message definitions for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: _DirectMessageConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;

  /**
   * <p>A map that associates user IDs with EndpointSendConfiguration objects. You can use an EndpointSendConfiguration object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   */
  Users:
    | { [key: string]: _EndpointSendConfiguration }
    | Iterable<[string, _EndpointSendConfiguration]>;
}

export interface _UnmarshalledSendUsersMessageRequest
  extends _SendUsersMessageRequest {
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>The message definitions for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: _UnmarshalledDirectMessageConfiguration;

  /**
   * <p>A map that associates user IDs with EndpointSendConfiguration objects. You can use an EndpointSendConfiguration object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   */
  Users: { [key: string]: _UnmarshalledEndpointSendConfiguration };
}

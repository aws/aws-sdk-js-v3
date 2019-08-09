import {
  _AddressConfiguration,
  _UnmarshalledAddressConfiguration
} from "./_AddressConfiguration";
import {
  _EndpointSendConfiguration,
  _UnmarshalledEndpointSendConfiguration
} from "./_EndpointSendConfiguration";
import {
  _DirectMessageConfiguration,
  _UnmarshalledDirectMessageConfiguration
} from "./_DirectMessageConfiguration";

/**
 * <p>Specifies the objects that define configuration and other settings for a message.</p>
 */
export interface _MessageRequest {
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address. You can use an AddressConfiguration object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   */
  Addresses?:
    | { [key: string]: _AddressConfiguration }
    | Iterable<[string, _AddressConfiguration]>;

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. You can use an EndpointSendConfiguration object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   */
  Endpoints?:
    | { [key: string]: _EndpointSendConfiguration }
    | Iterable<[string, _EndpointSendConfiguration]>;

  /**
   * <p>The set of properties that defines the configuration settings for the message.</p>
   */
  MessageConfiguration: _DirectMessageConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;
}

export interface _UnmarshalledMessageRequest extends _MessageRequest {
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address. You can use an AddressConfiguration object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   */
  Addresses?: { [key: string]: _UnmarshalledAddressConfiguration };

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. You can use an EndpointSendConfiguration object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   */
  Endpoints?: { [key: string]: _UnmarshalledEndpointSendConfiguration };

  /**
   * <p>The set of properties that defines the configuration settings for the message.</p>
   */
  MessageConfiguration: _UnmarshalledDirectMessageConfiguration;
}

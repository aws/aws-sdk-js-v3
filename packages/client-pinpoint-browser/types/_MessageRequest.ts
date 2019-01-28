import {_AddressConfiguration, _UnmarshalledAddressConfiguration} from './_AddressConfiguration';
import {_EndpointSendConfiguration, _UnmarshalledEndpointSendConfiguration} from './_EndpointSendConfiguration';
import {_DirectMessageConfiguration, _UnmarshalledDirectMessageConfiguration} from './_DirectMessageConfiguration';

/**
 * Send message request.
 */
export interface _MessageRequest {
    /**
     * A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address.
     */
    Addresses?: {[key: string]: _AddressConfiguration}|Iterable<[string, _AddressConfiguration]>;

    /**
     * A map of custom attributes to attributes to be attached to the message. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
     */
    Context?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. Within an EndpointSendConfiguration object, you can tailor the message for an endpoint by specifying message overrides or substitutions.
     */
    Endpoints?: {[key: string]: _EndpointSendConfiguration}|Iterable<[string, _EndpointSendConfiguration]>;

    /**
     * Message configuration.
     */
    MessageConfiguration?: _DirectMessageConfiguration;

    /**
     * A unique ID that you can use to trace a message. This ID is visible to recipients.
     */
    TraceId?: string;
}

export interface _UnmarshalledMessageRequest extends _MessageRequest {
    /**
     * A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address.
     */
    Addresses?: {[key: string]: _UnmarshalledAddressConfiguration};

    /**
     * A map of custom attributes to attributes to be attached to the message. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
     */
    Context?: {[key: string]: string};

    /**
     * A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. Within an EndpointSendConfiguration object, you can tailor the message for an endpoint by specifying message overrides or substitutions.
     */
    Endpoints?: {[key: string]: _UnmarshalledEndpointSendConfiguration};

    /**
     * Message configuration.
     */
    MessageConfiguration?: _UnmarshalledDirectMessageConfiguration;
}
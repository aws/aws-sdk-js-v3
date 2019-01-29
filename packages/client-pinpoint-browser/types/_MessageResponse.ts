import {_EndpointMessageResult, _UnmarshalledEndpointMessageResult} from './_EndpointMessageResult';
import {_MessageResult, _UnmarshalledMessageResult} from './_MessageResult';

/**
 * Send message response.
 */
export interface _MessageResponse {
    /**
     * Application id of the message.
     */
    ApplicationId?: string;

    /**
     * A map containing a multi part response for each address, with the endpointId as the key and the result as the value.
     */
    EndpointResult?: {[key: string]: _EndpointMessageResult}|Iterable<[string, _EndpointMessageResult]>;

    /**
     * Original request Id for which this message was delivered.
     */
    RequestId?: string;

    /**
     * A map containing a multi part response for each address, with the address as the key(Email address, phone number or push token) and the result as the value.
     */
    Result?: {[key: string]: _MessageResult}|Iterable<[string, _MessageResult]>;
}

export interface _UnmarshalledMessageResponse extends _MessageResponse {
    /**
     * A map containing a multi part response for each address, with the endpointId as the key and the result as the value.
     */
    EndpointResult?: {[key: string]: _UnmarshalledEndpointMessageResult};

    /**
     * A map containing a multi part response for each address, with the address as the key(Email address, phone number or push token) and the result as the value.
     */
    Result?: {[key: string]: _UnmarshalledMessageResult};
}
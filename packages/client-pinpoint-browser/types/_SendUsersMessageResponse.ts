import {_EndpointMessageResult, _UnmarshalledEndpointMessageResult} from './_EndpointMessageResult';

/**
 * User send message response.
 */
export interface _SendUsersMessageResponse {
    /**
     * The unique ID of the Amazon Pinpoint project used to send the message.
     */
    ApplicationId?: string;

    /**
     * The unique ID assigned to the users-messages request.
     */
    RequestId?: string;

    /**
     * An object that shows the endpoints that were messaged for each user. The object provides a list of user IDs. For each user ID, it provides the endpoint IDs that were messaged. For each endpoint ID, it provides an EndpointMessageResult object.
     */
    Result?: {[key: string]: {[key: string]: _EndpointMessageResult}|Iterable<[string, _EndpointMessageResult]>}|Iterable<[string, {[key: string]: _EndpointMessageResult}|Iterable<[string, _EndpointMessageResult]>]>;
}

export interface _UnmarshalledSendUsersMessageResponse extends _SendUsersMessageResponse {
    /**
     * An object that shows the endpoints that were messaged for each user. The object provides a list of user IDs. For each user ID, it provides the endpoint IDs that were messaged. For each endpoint ID, it provides an EndpointMessageResult object.
     */
    Result?: {[key: string]: {[key: string]: _UnmarshalledEndpointMessageResult}};
}
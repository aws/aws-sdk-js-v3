/**
 * Simple message object.
 */
export interface _MessageBody {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}

export type _UnmarshalledMessageBody = _MessageBody;
import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * Simple message object.
 */
export interface TooManyRequestsException extends __ServiceException__<_TooManyRequestsExceptionDetails> {
    name: 'TooManyRequestsException';
}

export interface _TooManyRequestsExceptionDetails {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}
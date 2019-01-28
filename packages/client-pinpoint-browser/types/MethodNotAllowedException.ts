import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * Simple message object.
 */
export interface MethodNotAllowedException extends __ServiceException__<_MethodNotAllowedExceptionDetails> {
    name: 'MethodNotAllowedException';
}

export interface _MethodNotAllowedExceptionDetails {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}
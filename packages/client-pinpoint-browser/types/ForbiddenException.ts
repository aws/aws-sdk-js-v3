import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * Simple message object.
 */
export interface ForbiddenException extends __ServiceException__<_ForbiddenExceptionDetails> {
    name: 'ForbiddenException';
}

export interface _ForbiddenExceptionDetails {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}
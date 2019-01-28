import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * Simple message object.
 */
export interface NotFoundException extends __ServiceException__<_NotFoundExceptionDetails> {
    name: 'NotFoundException';
}

export interface _NotFoundExceptionDetails {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}
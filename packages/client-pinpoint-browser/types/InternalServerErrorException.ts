import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * Simple message object.
 */
export interface InternalServerErrorException extends __ServiceException__<_InternalServerErrorExceptionDetails> {
    name: 'InternalServerErrorException';
}

export interface _InternalServerErrorExceptionDetails {
    /**
     * The error message that's returned from the API.
     */
    Message?: string;

    /**
     * The unique message body ID.
     */
    RequestID?: string;
}
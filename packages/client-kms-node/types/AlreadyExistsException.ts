import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because it attempted to create a resource that already exists.</p>
 */
export interface AlreadyExistsException extends __ServiceException__<_AlreadyExistsExceptionDetails> {
    name: 'AlreadyExistsException';
}

export interface _AlreadyExistsExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}
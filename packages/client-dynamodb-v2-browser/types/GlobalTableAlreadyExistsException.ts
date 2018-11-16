import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified global table already exists.</p>
 */
export interface GlobalTableAlreadyExistsException extends __ServiceException__<_GlobalTableAlreadyExistsExceptionDetails> {
    name: 'GlobalTableAlreadyExistsException';
}

export interface _GlobalTableAlreadyExistsExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}
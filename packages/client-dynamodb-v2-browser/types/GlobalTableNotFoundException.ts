import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified global table does not exist.</p>
 */
export interface GlobalTableNotFoundException extends __ServiceException__<_GlobalTableNotFoundExceptionDetails> {
    name: 'GlobalTableNotFoundException';
}

export interface _GlobalTableNotFoundExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}
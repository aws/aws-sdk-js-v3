import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A target table with the specified name already exists. </p>
 */
export interface TableAlreadyExistsException extends __ServiceException__<_TableAlreadyExistsExceptionDetails> {
    name: 'TableAlreadyExistsException';
}

export interface _TableAlreadyExistsExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}
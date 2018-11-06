import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * InvalidTagException shape
 */
export interface InvalidTagException extends __ServiceException__<_InvalidTagExceptionDetails> {
    name: 'InvalidTagException';
}

export interface _InvalidTagExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}
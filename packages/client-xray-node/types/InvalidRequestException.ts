import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * InvalidRequestException shape
 */
export interface InvalidRequestException extends __ServiceException__<_InvalidRequestExceptionDetails> {
    name: 'InvalidRequestException';
}

export interface _InvalidRequestExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    Message?: string;
}
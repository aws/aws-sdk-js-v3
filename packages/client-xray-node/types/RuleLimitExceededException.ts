import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * RuleLimitExceededException shape
 */
export interface RuleLimitExceededException extends __ServiceException__<_RuleLimitExceededExceptionDetails> {
    name: 'RuleLimitExceededException';
}

export interface _RuleLimitExceededExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    Message?: string;
}
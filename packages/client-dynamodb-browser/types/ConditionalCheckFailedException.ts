import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A condition specified in the operation could not be evaluated.</p>
 */
export interface ConditionalCheckFailedException extends __ServiceException__<_ConditionalCheckFailedExceptionDetails> {
    name: 'ConditionalCheckFailedException';
}

export interface _ConditionalCheckFailedExceptionDetails {
    /**
     * <p>The conditional request failed.</p>
     */
    message?: string;
}
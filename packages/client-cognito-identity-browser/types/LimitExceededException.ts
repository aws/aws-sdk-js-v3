import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
 */
export interface LimitExceededException extends __ServiceException__<_LimitExceededExceptionDetails> {
    name: 'LimitExceededException';
}

export interface _LimitExceededExceptionDetails {
    /**
     * <p>The message returned by a LimitExceededException.</p>
     */
    message?: string;
}
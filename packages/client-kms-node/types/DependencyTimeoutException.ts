import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
 */
export interface DependencyTimeoutException extends __ServiceException__<_DependencyTimeoutExceptionDetails> {
    name: 'DependencyTimeoutException';
}

export interface _DependencyTimeoutExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}
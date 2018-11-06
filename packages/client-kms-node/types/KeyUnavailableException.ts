import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
 */
export interface KeyUnavailableException extends __ServiceException__<_KeyUnavailableExceptionDetails> {
    name: 'KeyUnavailableException';
}

export interface _KeyUnavailableExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}
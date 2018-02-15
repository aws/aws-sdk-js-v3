import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Returned if the service cannot complete the request.</p>
 */
export interface ServiceUnavailableException extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
    name: 'ServiceUnavailableException';
}

export interface _ServiceUnavailableExceptionDetails {
    /**
     * <p>Server</p>
     */
    type?: string;

    /**
     * <p>500 Internal Server Error</p>
     */
    code?: string;

    /**
     * <p>Returned if the service cannot complete the request.</p>
     */
    message?: string;
}
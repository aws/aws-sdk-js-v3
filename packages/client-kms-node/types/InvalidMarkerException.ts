import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
 */
export interface InvalidMarkerException extends __ServiceException__<_InvalidMarkerExceptionDetails> {
    name: 'InvalidMarkerException';
}

export interface _InvalidMarkerExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}
import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The runtime or runtime version specified is not supported.</p>
 */
export interface InvalidRuntimeException extends __ServiceException__<_InvalidRuntimeExceptionDetails> {
    name: 'InvalidRuntimeException';
}

export interface _InvalidRuntimeExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}
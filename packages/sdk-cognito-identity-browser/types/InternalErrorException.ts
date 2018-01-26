import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Thrown when the service encounters an error during processing the request.</p>
 */
export interface InternalErrorException extends __ServiceException__<_InternalErrorExceptionDetails> {
    name: 'InternalErrorException';
}

export interface _InternalErrorExceptionDetails {
    /**
     * <p>The message returned by an InternalErrorException.</p>
     */
    message?: string;
}
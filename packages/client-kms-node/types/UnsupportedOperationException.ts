import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
 */
export interface UnsupportedOperationException extends __ServiceException__<_UnsupportedOperationExceptionDetails> {
    name: 'UnsupportedOperationException';
}

export interface _UnsupportedOperationExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}
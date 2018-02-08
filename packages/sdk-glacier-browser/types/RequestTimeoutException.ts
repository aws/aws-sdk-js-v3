import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
 */
export interface RequestTimeoutException extends __ServiceException__<_RequestTimeoutExceptionDetails> {
    name: 'RequestTimeoutException';
}

export interface _RequestTimeoutExceptionDetails {
    /**
     * <p>Client</p>
     */
    type?: string;

    /**
     * <p>408 Request Timeout</p>
     */
    code?: string;

    /**
     * <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
     */
    message?: string;
}
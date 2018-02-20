import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
    name: 'ResourceNotFoundException';
}

export interface _ResourceNotFoundExceptionDetails {
    /**
     * <p>Client</p>
     */
    type?: string;

    /**
     * <p>404 Not Found</p>
     */
    code?: string;

    /**
     * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     */
    message?: string;
}
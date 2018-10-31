import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
 */
export interface ResourceNotFoundException extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
    name: 'ResourceNotFoundException';
}

export interface _ResourceNotFoundExceptionDetails {
    /**
     * <p>The message returned by a ResourceNotFoundException.</p>
     */
    message?: string;
}
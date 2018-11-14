import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
 */
export interface ResourceNotFoundException extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
    name: 'ResourceNotFoundException';
}

export interface _ResourceNotFoundExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}
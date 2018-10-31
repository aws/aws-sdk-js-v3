import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Associating the specified VPC with the specified hosted zone has not been authorized.</p>
 */
export interface NotAuthorizedException extends __ServiceException__<_NotAuthorizedExceptionDetails> {
    name: 'NotAuthorizedException';
}

export interface _NotAuthorizedExceptionDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}
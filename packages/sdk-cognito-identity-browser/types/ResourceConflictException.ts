import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Thrown when a user tries to use a login which is already linked to another account.</p>
 */
export interface ResourceConflictException extends __ServiceException__<_ResourceConflictExceptionDetails> {
    name: 'ResourceConflictException';
}

export interface _ResourceConflictExceptionDetails {
    /**
     * <p>The message returned by a ResourceConflictException.</p>
     */
    message?: string;
}
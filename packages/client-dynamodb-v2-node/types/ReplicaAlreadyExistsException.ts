import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified replica is already part of the global table.</p>
 */
export interface ReplicaAlreadyExistsException extends __ServiceException__<_ReplicaAlreadyExistsExceptionDetails> {
    name: 'ReplicaAlreadyExistsException';
}

export interface _ReplicaAlreadyExistsExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}
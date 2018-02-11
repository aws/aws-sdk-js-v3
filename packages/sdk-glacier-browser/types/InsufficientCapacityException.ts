import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Returned if there is insufficient capacity to process this expedited request. This error only applies to expedited retrievals and not to standard or bulk retrievals.</p>
 */
export interface InsufficientCapacityException extends __ServiceException__<_InsufficientCapacityExceptionDetails> {
    name: 'InsufficientCapacityException';
}

export interface _InsufficientCapacityExceptionDetails {
    /**
     * _string shape
     */
    type?: string;

    /**
     * _string shape
     */
    code?: string;

    /**
     * _string shape
     */
    message?: string;
}
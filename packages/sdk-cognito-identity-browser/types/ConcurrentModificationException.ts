import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export interface ConcurrentModificationException extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
    name: 'ConcurrentModificationException';
}

export interface _ConcurrentModificationExceptionDetails {
    /**
     * <p>The message returned by a ConcurrentModificationException.</p>
     */
    message?: string;
}
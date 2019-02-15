import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
 */
export interface ResourceInUseException extends __ServiceException__<_ResourceInUseExceptionDetails> {
    name: 'ResourceInUseException';
}

export interface _ResourceInUseExceptionDetails {
    /**
     * <p>The resource which is being attempted to be changed is in use.</p>
     */
    message?: string;
}
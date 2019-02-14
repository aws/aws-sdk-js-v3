import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
 */
export interface ItemCollectionSizeLimitExceededException extends __ServiceException__<_ItemCollectionSizeLimitExceededExceptionDetails> {
    name: 'ItemCollectionSizeLimitExceededException';
}

export interface _ItemCollectionSizeLimitExceededExceptionDetails {
    /**
     * <p>The total size of an item collection has exceeded the maximum limit of 10 gigabytes.</p>
     */
    message?: string;
}
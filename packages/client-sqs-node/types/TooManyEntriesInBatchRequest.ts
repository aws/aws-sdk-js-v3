import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The batch request contains more entries than permissible.</p>
 */
export interface TooManyEntriesInBatchRequest extends __ServiceException__<_TooManyEntriesInBatchRequestDetails> {
    name: 'TooManyEntriesInBatchRequest';
}

export interface _TooManyEntriesInBatchRequestDetails {

}
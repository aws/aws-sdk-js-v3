import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification.</p>
 */
export interface InvalidBatchEntryId extends __ServiceException__<_InvalidBatchEntryIdDetails> {
    name: 'InvalidBatchEntryId';
}

export interface _InvalidBatchEntryIdDetails {

}
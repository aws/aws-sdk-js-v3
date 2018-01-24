import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified merge option is not valid. The only valid value is FAST_FORWARD_MERGE.</p>
 */
export interface InvalidMergeOptionException extends __ServiceException__<_InvalidMergeOptionExceptionDetails> {
    name: 'InvalidMergeOptionException';
}

export interface _InvalidMergeOptionExceptionDetails {

}
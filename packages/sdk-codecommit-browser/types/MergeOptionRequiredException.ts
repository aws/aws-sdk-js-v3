import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A merge option or stategy is required, and none was provided.</p>
 */
export interface MergeOptionRequiredException extends __ServiceException__<_MergeOptionRequiredExceptionDetails> {
    name: 'MergeOptionRequiredException';
}

export interface _MergeOptionRequiredExceptionDetails {

}
import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A branch name is required but was not specified.</p>
 */
export interface BranchNameRequiredException extends __ServiceException__<_BranchNameRequiredExceptionDetails> {
    name: 'BranchNameRequiredException';
}

export interface _BranchNameRequiredExceptionDetails {

}
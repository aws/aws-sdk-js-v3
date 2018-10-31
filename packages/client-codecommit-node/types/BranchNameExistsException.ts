import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified branch name already exists.</p>
 */
export interface BranchNameExistsException extends __ServiceException__<_BranchNameExistsExceptionDetails> {
    name: 'BranchNameExistsException';
}

export interface _BranchNameExistsExceptionDetails {

}
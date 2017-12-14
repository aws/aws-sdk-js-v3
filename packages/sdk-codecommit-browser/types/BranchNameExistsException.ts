import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified branch name already exists.</p>
 */
export interface BranchNameExistsException extends __ServiceException__<_BranchNameExistsExceptionDetails> {
    name: 'BranchNameExistsException';
}

export interface _BranchNameExistsExceptionDetails {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified branch name already exists.</p>
 */
export interface BranchNameExistsException extends __ServiceException__ {
    name: 'BranchNameExistsException';
    details: BranchNameExistsExceptionDetails_;
}

export interface BranchNameExistsExceptionDetails_ {

}
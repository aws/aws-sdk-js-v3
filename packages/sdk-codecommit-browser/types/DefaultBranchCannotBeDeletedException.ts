import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 */
export interface DefaultBranchCannotBeDeletedException extends __ServiceException__ {
    name: 'DefaultBranchCannotBeDeletedException';
    details: DefaultBranchCannotBeDeletedExceptionDetails_;
}

export interface DefaultBranchCannotBeDeletedExceptionDetails_ {

}
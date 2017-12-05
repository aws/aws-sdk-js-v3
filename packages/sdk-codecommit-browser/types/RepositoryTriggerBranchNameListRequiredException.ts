import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>At least one branch name is required but was not specified in the trigger configuration.</p>
 */
export interface RepositoryTriggerBranchNameListRequiredException extends __ServiceException__ {
    name: 'RepositoryTriggerBranchNameListRequiredException';
    details: RepositoryTriggerBranchNameListRequiredExceptionDetails_;
}

export interface RepositoryTriggerBranchNameListRequiredExceptionDetails_ {

}
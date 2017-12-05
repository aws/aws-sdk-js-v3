import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerBranchNameException extends __ServiceException__ {
    name: 'InvalidRepositoryTriggerBranchNameException';
    details: InvalidRepositoryTriggerBranchNameExceptionDetails_;
}

export interface InvalidRepositoryTriggerBranchNameExceptionDetails_ {

}
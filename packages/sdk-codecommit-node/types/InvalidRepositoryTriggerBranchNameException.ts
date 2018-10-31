import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerBranchNameException extends __ServiceException__<_InvalidRepositoryTriggerBranchNameExceptionDetails> {
    name: 'InvalidRepositoryTriggerBranchNameException';
}

export interface _InvalidRepositoryTriggerBranchNameExceptionDetails {

}
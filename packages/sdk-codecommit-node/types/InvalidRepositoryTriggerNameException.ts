import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The name of the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerNameException extends __ServiceException__ {
    name: 'InvalidRepositoryTriggerNameException';
    details: InvalidRepositoryTriggerNameExceptionDetails_;
}

export interface InvalidRepositoryTriggerNameExceptionDetails_ {

}
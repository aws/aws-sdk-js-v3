import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A name for the trigger is required but was not specified.</p>
 */
export interface RepositoryTriggerNameRequiredException extends __ServiceException__ {
    name: 'RepositoryTriggerNameRequiredException';
    details: RepositoryTriggerNameRequiredExceptionDetails_;
}

export interface RepositoryTriggerNameRequiredExceptionDetails_ {

}
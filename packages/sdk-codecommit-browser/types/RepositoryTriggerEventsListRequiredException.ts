import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>At least one event for the trigger is required but was not specified.</p>
 */
export interface RepositoryTriggerEventsListRequiredException extends __ServiceException__ {
    name: 'RepositoryTriggerEventsListRequiredException';
    details: RepositoryTriggerEventsListRequiredExceptionDetails_;
}

export interface RepositoryTriggerEventsListRequiredExceptionDetails_ {

}
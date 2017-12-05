import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 */
export interface InvalidRepositoryTriggerEventsException extends __ServiceException__ {
    name: 'InvalidRepositoryTriggerEventsException';
    details: InvalidRepositoryTriggerEventsExceptionDetails_;
}

export interface InvalidRepositoryTriggerEventsExceptionDetails_ {

}
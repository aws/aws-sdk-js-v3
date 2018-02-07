import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A destination ARN for the target service for the trigger is required but was not specified.</p>
 */
export interface RepositoryTriggerDestinationArnRequiredException extends __ServiceException__<_RepositoryTriggerDestinationArnRequiredExceptionDetails> {
    name: 'RepositoryTriggerDestinationArnRequiredException';
}

export interface _RepositoryTriggerDestinationArnRequiredExceptionDetails {

}
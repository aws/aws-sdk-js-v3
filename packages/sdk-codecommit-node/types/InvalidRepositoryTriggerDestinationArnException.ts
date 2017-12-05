import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 */
export interface InvalidRepositoryTriggerDestinationArnException extends __ServiceException__ {
    name: 'InvalidRepositoryTriggerDestinationArnException';
    details: InvalidRepositoryTriggerDestinationArnExceptionDetails_;
}

export interface InvalidRepositoryTriggerDestinationArnExceptionDetails_ {

}
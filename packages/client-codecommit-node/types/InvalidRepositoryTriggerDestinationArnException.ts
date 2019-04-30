import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 */
export interface InvalidRepositoryTriggerDestinationArnException
  extends __ServiceException__<
    _InvalidRepositoryTriggerDestinationArnExceptionDetails
  > {
  name: "InvalidRepositoryTriggerDestinationArnException";
}

export interface _InvalidRepositoryTriggerDestinationArnExceptionDetails {}

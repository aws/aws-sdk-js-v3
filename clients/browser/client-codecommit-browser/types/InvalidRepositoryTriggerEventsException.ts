import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 */
export interface InvalidRepositoryTriggerEventsException
  extends __ServiceException__<
    _InvalidRepositoryTriggerEventsExceptionDetails
  > {
  name: "InvalidRepositoryTriggerEventsException";
}

export interface _InvalidRepositoryTriggerEventsExceptionDetails {}

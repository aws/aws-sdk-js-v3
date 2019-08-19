import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>At least one event for the trigger is required but was not specified.</p>
 */
export interface RepositoryTriggerEventsListRequiredException
  extends __ServiceException__<
    _RepositoryTriggerEventsListRequiredExceptionDetails
  > {
  name: "RepositoryTriggerEventsListRequiredException";
}

export interface _RepositoryTriggerEventsListRequiredExceptionDetails {}

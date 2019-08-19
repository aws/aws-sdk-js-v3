import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>
 */
export interface InvalidRepositoryTriggerRegionException
  extends __ServiceException__<
    _InvalidRepositoryTriggerRegionExceptionDetails
  > {
  name: "InvalidRepositoryTriggerRegionException";
}

export interface _InvalidRepositoryTriggerRegionExceptionDetails {}

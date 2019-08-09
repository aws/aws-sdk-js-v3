import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attempt to return the status of an already completed lifecycle event occurred.</p>
 */
export interface LifecycleEventAlreadyCompletedException
  extends __ServiceException__<
    _LifecycleEventAlreadyCompletedExceptionDetails
  > {
  name: "LifecycleEventAlreadyCompletedException";
}

export interface _LifecycleEventAlreadyCompletedExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit for lifecycle hooks was exceeded.</p>
 */
export interface LifecycleHookLimitExceededException
  extends __ServiceException__<_LifecycleHookLimitExceededExceptionDetails> {
  name: "LifecycleHookLimitExceededException";
}

export interface _LifecycleHookLimitExceededExceptionDetails {}

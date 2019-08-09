import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are valid.</p>
 */
export interface InvalidLifecycleEventHookExecutionIdException
  extends __ServiceException__<
    _InvalidLifecycleEventHookExecutionIdExceptionDetails
  > {
  name: "InvalidLifecycleEventHookExecutionIdException";
}

export interface _InvalidLifecycleEventHookExecutionIdExceptionDetails {}

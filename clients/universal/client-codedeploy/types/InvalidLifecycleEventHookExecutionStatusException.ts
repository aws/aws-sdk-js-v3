import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The result of a Lambda validation function that verifies a lifecycle event is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>
 */
export interface InvalidLifecycleEventHookExecutionStatusException
  extends __ServiceException__<
    _InvalidLifecycleEventHookExecutionStatusExceptionDetails
  > {
  name: "InvalidLifecycleEventHookExecutionStatusException";
}

export interface _InvalidLifecycleEventHookExecutionStatusExceptionDetails {}

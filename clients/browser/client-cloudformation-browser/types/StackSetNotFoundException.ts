import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified stack set doesn't exist.</p>
 */
export interface StackSetNotFoundException
  extends __ServiceException__<_StackSetNotFoundExceptionDetails> {
  name: "StackSetNotFoundException";
}

export interface _StackSetNotFoundExceptionDetails {}

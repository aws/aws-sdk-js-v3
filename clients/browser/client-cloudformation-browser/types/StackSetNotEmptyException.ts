import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack instances from the stack set before deleting the stack set.</p>
 */
export interface StackSetNotEmptyException
  extends __ServiceException__<_StackSetNotEmptyExceptionDetails> {
  name: "StackSetNotEmptyException";
}

export interface _StackSetNotEmptyExceptionDetails {}

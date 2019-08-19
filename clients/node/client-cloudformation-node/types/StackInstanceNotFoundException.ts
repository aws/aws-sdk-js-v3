import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified stack instance doesn't exist.</p>
 */
export interface StackInstanceNotFoundException
  extends __ServiceException__<_StackInstanceNotFoundExceptionDetails> {
  name: "StackInstanceNotFoundException";
}

export interface _StackInstanceNotFoundExceptionDetails {}

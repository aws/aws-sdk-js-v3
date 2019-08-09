import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the specified policies do not exist.</p>
 */
export interface PolicyNotFoundException
  extends __ServiceException__<_PolicyNotFoundExceptionDetails> {
  name: "PolicyNotFoundException";
}

export interface _PolicyNotFoundExceptionDetails {}

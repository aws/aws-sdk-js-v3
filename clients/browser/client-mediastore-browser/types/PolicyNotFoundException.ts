import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy that you specified in the request does not exist.</p>
 */
export interface PolicyNotFoundException
  extends __ServiceException__<_PolicyNotFoundExceptionDetails> {
  name: "PolicyNotFoundException";
}

export interface _PolicyNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

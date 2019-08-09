import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a policy with the <code>PolicyId</code> that you specified.</p>
 */
export interface PolicyNotFoundException
  extends __ServiceException__<_PolicyNotFoundExceptionDetails> {
  name: "PolicyNotFoundException";
}

export interface _PolicyNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

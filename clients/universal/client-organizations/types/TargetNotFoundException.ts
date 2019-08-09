import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a root, OU, or account with the <code>TargetId</code> that you specified.</p>
 */
export interface TargetNotFoundException
  extends __ServiceException__<_TargetNotFoundExceptionDetails> {
  name: "TargetNotFoundException";
}

export interface _TargetNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

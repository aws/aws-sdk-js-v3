import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find an organizational unit (OU) or AWS account with the <code>ChildId</code> that you specified.</p>
 */
export interface ChildNotFoundException
  extends __ServiceException__<_ChildNotFoundExceptionDetails> {
  name: "ChildNotFoundException";
}

export interface _ChildNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

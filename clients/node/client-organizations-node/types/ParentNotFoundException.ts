import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a root or OU with the <code>ParentId</code> that you specified.</p>
 */
export interface ParentNotFoundException
  extends __ServiceException__<_ParentNotFoundExceptionDetails> {
  name: "ParentNotFoundException";
}

export interface _ParentNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

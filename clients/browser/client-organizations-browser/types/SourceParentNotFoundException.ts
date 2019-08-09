import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a source root or OU with the <code>ParentId</code> that you specified.</p>
 */
export interface SourceParentNotFoundException
  extends __ServiceException__<_SourceParentNotFoundExceptionDetails> {
  name: "SourceParentNotFoundException";
}

export interface _SourceParentNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

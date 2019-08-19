import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find the destination container (a root or OU) with the <code>ParentId</code> that you specified.</p>
 */
export interface DestinationParentNotFoundException
  extends __ServiceException__<_DestinationParentNotFoundExceptionDetails> {
  name: "DestinationParentNotFoundException";
}

export interface _DestinationParentNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

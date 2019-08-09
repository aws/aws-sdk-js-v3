import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cannot list the parents of a <a>Directory</a> root.</p>
 */
export interface CannotListParentOfRootException
  extends __ServiceException__<_CannotListParentOfRootExceptionDetails> {
  name: "CannotListParentOfRootException";
}

export interface _CannotListParentOfRootExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

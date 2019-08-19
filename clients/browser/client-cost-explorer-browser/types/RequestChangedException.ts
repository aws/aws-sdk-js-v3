import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request parameters changed between pages. Try again with the old parameters or without a pagination token.</p>
 */
export interface RequestChangedException
  extends __ServiceException__<_RequestChangedExceptionDetails> {
  name: "RequestChangedException";
}

export interface _RequestChangedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

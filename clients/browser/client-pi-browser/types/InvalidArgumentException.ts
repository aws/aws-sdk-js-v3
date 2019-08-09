import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One of the arguments provided is invalid for this request.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}

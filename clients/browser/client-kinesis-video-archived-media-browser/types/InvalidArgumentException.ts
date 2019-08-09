import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

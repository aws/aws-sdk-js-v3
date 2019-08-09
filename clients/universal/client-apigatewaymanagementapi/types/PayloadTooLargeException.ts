import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The data has exceeded the maximum size allowed.</p>
 */
export interface PayloadTooLargeException
  extends __ServiceException__<_PayloadTooLargeExceptionDetails> {
  name: "PayloadTooLargeException";
}

export interface _PayloadTooLargeExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}

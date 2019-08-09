import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid argument was specified.</p>
 */
export interface ArgumentException
  extends __ServiceException__<_ArgumentExceptionDetails> {
  name: "ArgumentException";
}

export interface _ArgumentExceptionDetails {
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

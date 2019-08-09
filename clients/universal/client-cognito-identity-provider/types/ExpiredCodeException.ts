import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown if a code has expired.</p>
 */
export interface ExpiredCodeException
  extends __ServiceException__<_ExpiredCodeExceptionDetails> {
  name: "ExpiredCodeException";
}

export interface _ExpiredCodeExceptionDetails {
  /**
   * <p>The message returned when the expired code exception is thrown.</p>
   */
  message?: string;
}

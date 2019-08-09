import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the specified arguments was not valid.</p>
 */
export interface InvalidArgsException
  extends __ServiceException__<_InvalidArgsExceptionDetails> {
  name: "InvalidArgsException";
}

export interface _InvalidArgsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
 */
export interface CodeMismatchException
  extends __ServiceException__<_CodeMismatchExceptionDetails> {
  name: "CodeMismatchException";
}

export interface _CodeMismatchExceptionDetails {
  /**
   * <p>The message provided when the code mismatch exception is thrown.</p>
   */
  message?: string;
}

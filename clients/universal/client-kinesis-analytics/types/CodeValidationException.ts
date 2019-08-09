import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 */
export interface CodeValidationException
  extends __ServiceException__<_CodeValidationExceptionDetails> {
  name: "CodeValidationException";
}

export interface _CodeValidationExceptionDetails {
  /**
   * <p>Test</p>
   */
  message?: string;
}

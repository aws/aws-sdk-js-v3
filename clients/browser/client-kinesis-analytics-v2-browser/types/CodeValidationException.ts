import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user-provided application code (query) is not valid. This can be a simple syntax error.</p>
 */
export interface CodeValidationException
  extends __ServiceException__<_CodeValidationExceptionDetails> {
  name: "CodeValidationException";
}

export interface _CodeValidationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

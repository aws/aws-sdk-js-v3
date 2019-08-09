import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}

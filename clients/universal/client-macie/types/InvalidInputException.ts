import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * _ExceptionMessage shape
   */
  message?: string;

  /**
   * Field that has invalid input
   */
  fieldName?: string;
}

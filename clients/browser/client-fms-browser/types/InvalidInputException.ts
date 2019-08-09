import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameters of the request were invalid.</p>
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

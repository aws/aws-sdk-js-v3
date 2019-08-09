import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that your request is malformed in some manner. See the exception message.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}

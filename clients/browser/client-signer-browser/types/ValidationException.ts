import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You signing certificate could not be validated.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

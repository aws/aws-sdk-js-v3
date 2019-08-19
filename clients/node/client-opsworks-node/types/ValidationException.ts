import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a request was not valid.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

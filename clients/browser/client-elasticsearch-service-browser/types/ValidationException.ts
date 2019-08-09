import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {}

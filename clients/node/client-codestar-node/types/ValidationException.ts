import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified input is either not valid, or it could not be validated.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {}

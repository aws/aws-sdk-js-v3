import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The validation was specified in an invalid format.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested action is not valid.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {}

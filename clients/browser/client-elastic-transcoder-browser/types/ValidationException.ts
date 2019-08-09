import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more required parameter values were not provided in the request.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more input parameters is not valid. Please correct the input parameters and try the operation again.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {}

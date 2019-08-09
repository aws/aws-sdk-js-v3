import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The application name was specified in an invalid format.</p>
 */
export interface InvalidApplicationNameException
  extends __ServiceException__<_InvalidApplicationNameExceptionDetails> {
  name: "InvalidApplicationNameException";
}

export interface _InvalidApplicationNameExceptionDetails {}

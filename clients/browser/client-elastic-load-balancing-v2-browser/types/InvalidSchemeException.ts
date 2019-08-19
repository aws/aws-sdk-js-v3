import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested scheme is not valid.</p>
 */
export interface InvalidSchemeException
  extends __ServiceException__<_InvalidSchemeExceptionDetails> {
  name: "InvalidSchemeException";
}

export interface _InvalidSchemeExceptionDetails {}

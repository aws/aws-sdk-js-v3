import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {}

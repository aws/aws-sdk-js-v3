import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {}

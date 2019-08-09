import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The registration status was specified in an invalid format.</p>
 */
export interface InvalidRegistrationStatusException
  extends __ServiceException__<_InvalidRegistrationStatusExceptionDetails> {
  name: "InvalidRegistrationStatusException";
}

export interface _InvalidRegistrationStatusExceptionDetails {}

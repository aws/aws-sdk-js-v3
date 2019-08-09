import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The health of the specified targets could not be retrieved due to an internal error.</p>
 */
export interface HealthUnavailableException
  extends __ServiceException__<_HealthUnavailableExceptionDetails> {
  name: "HealthUnavailableException";
}

export interface _HealthUnavailableExceptionDetails {}

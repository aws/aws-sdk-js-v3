import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface TemporarilyUnavailableException
  extends __ServiceException__<_TemporarilyUnavailableExceptionDetails> {
  name: "TemporarilyUnavailableException";
}

export interface _TemporarilyUnavailableExceptionDetails {}

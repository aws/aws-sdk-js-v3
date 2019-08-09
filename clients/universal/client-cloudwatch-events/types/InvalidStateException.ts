import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified state isn't a valid state for an event source.</p>
 */
export interface InvalidStateException
  extends __ServiceException__<_InvalidStateExceptionDetails> {
  name: "InvalidStateException";
}

export interface _InvalidStateExceptionDetails {}

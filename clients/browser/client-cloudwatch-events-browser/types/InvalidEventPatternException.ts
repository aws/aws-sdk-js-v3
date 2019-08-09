import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The event pattern isn't valid.</p>
 */
export interface InvalidEventPatternException
  extends __ServiceException__<_InvalidEventPatternExceptionDetails> {
  name: "InvalidEventPatternException";
}

export interface _InvalidEventPatternExceptionDetails {}

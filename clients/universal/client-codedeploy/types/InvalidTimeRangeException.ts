import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified time range was specified in an invalid format.</p>
 */
export interface InvalidTimeRangeException
  extends __ServiceException__<_InvalidTimeRangeExceptionDetails> {
  name: "InvalidTimeRangeException";
}

export interface _InvalidTimeRangeExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified time range is not valid. The earlier time is not chronologically before the later time.</p>
 */
export interface InvalidTimeRangeException
  extends __ServiceException__<_InvalidTimeRangeExceptionDetails> {
  name: "InvalidTimeRangeException";
}

export interface _InvalidTimeRangeExceptionDetails {}

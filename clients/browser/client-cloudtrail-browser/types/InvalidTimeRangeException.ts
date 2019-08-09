import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.</p>
 */
export interface InvalidTimeRangeException
  extends __ServiceException__<_InvalidTimeRangeExceptionDetails> {
  name: "InvalidTimeRangeException";
}

export interface _InvalidTimeRangeExceptionDetails {}

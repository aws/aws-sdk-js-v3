import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The timestamp value passed in the meterUsage() is out of allowed range.</p>
 */
export interface TimestampOutOfBoundsException
  extends __ServiceException__<_TimestampOutOfBoundsExceptionDetails> {
  name: "TimestampOutOfBoundsException";
}

export interface _TimestampOutOfBoundsExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}

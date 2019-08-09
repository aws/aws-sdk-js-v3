import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified sample rate is not valid.</p>
 */
export interface InvalidSampleRateException
  extends __ServiceException__<_InvalidSampleRateExceptionDetails> {
  name: "InvalidSampleRateException";
}

export interface _InvalidSampleRateExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}

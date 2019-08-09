import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested data is unavailable.</p>
 */
export interface DataUnavailableException
  extends __ServiceException__<_DataUnavailableExceptionDetails> {
  name: "DataUnavailableException";
}

export interface _DataUnavailableExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

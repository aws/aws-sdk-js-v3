import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A streaming session was requested for a stream that does not retain data (that is, has a <code>DataRetentionInHours</code> of 0). </p>
 */
export interface NoDataRetentionException
  extends __ServiceException__<_NoDataRetentionExceptionDetails> {
  name: "NoDataRetentionException";
}

export interface _NoDataRetentionExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}

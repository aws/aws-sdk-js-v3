import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export interface ConcurrentRunsExceededException
  extends __ServiceException__<_ConcurrentRunsExceededExceptionDetails> {
  name: "ConcurrentRunsExceededException";
}

export interface _ConcurrentRunsExceededExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

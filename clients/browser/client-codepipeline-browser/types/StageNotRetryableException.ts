import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified stage can't be retried because the pipeline structure or stage state changed after the stage was not completed; the stage contains no failed actions; one or more actions are still in progress; or another retry attempt is already in progress. </p>
 */
export interface StageNotRetryableException
  extends __ServiceException__<_StageNotRetryableExceptionDetails> {
  name: "StageNotRetryableException";
}

export interface _StageNotRetryableExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Too many operations for a given AWS account. For example, the number of pipelines exceeds the maximum allowed.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}

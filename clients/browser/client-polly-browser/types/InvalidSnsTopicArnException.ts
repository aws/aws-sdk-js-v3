import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided SNS topic ARN is invalid. Please provide a valid SNS topic ARN and try again.</p>
 */
export interface InvalidSnsTopicArnException
  extends __ServiceException__<_InvalidSnsTopicArnExceptionDetails> {
  name: "InvalidSnsTopicArnException";
}

export interface _InvalidSnsTopicArnExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}

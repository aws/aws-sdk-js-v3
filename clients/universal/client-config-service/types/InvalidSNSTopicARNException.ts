import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon SNS topic does not exist.</p>
 */
export interface InvalidSNSTopicARNException
  extends __ServiceException__<_InvalidSNSTopicARNExceptionDetails> {
  name: "InvalidSNSTopicARNException";
}

export interface _InvalidSNSTopicARNExceptionDetails {}

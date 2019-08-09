import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not publish to the topic, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
 */
export interface InvalidSnsTopicException
  extends __ServiceException__<_InvalidSnsTopicExceptionDetails> {
  name: "InvalidSnsTopicException";
}

export interface _InvalidSnsTopicExceptionDetails {
  /**
   * <p>Indicates that the topic does not exist.</p>
   */
  Topic?: string;
}

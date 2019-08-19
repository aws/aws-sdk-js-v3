/**
 * <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _BounceAction {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;

  /**
   * <p>The SMTP reply code, as defined by <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   */
  SmtpReplyCode: string;

  /**
   * <p>The SMTP enhanced status code, as defined by <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a>.</p>
   */
  StatusCode?: string;

  /**
   * <p>Human-readable text to include in the bounce message.</p>
   */
  Message: string;

  /**
   * <p>The email address of the sender of the bounced email. This is the address from which the bounce message will be sent.</p>
   */
  Sender: string;
}

export type _UnmarshalledBounceAction = _BounceAction;

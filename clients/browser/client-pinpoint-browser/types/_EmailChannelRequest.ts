/**
 * <p>Specifies the status and settings of the email channel for an application.</p>
 */
export interface _EmailChannelRequest {
  /**
   * <p>The configuration set that you want to apply to email that you send through the channel by using the <a href="emailAPIreference.html">Amazon Pinpoint Email API</a>.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>Specifies whether to enable the email channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   *  <p>The verified email address that you want to send email from when you send email through the channel.</p>
   */
  FromAddress: string;

  /**
   *  <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>
   */
  Identity: string;

  /**
   *  <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>
   */
  RoleArn?: string;
}

export type _UnmarshalledEmailChannelRequest = _EmailChannelRequest;

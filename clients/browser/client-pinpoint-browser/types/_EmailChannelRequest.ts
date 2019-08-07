/**
 * Email Channel Request
 */
export interface _EmailChannelRequest {
  /**
   * The configuration set that you want to use when you send email using the Pinpoint Email API.
   */
  ConfigurationSet?: string;

  /**
   * If the channel is enabled for sending messages.
   */
  Enabled?: boolean;

  /**
   * The email address used to send emails from.
   */
  FromAddress?: string;

  /**
   * The ARN of an identity verified with SES.
   */
  Identity?: string;

  /**
   * The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service
   */
  RoleArn?: string;
}

export type _UnmarshalledEmailChannelRequest = _EmailChannelRequest;

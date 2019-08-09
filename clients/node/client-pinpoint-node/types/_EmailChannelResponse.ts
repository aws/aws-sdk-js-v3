/**
 * <p>Provides information about the status and settings of the email channel for an application.</p>
 */
export interface _EmailChannelResponse {
  /**
   * <p>The unique identifier for the application that the email channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration set that's applied to email that's sent through the channel by using the <a href="emailAPIreference.html">Amazon Pinpoint Email API</a>.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the email channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The verified email address that you send email from when you send email through the channel.</p>
   */
  FromAddress?: string;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   *  <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you use when you send email through the channel.</p>
   */
  Identity?: string;

  /**
   * <p>Specifies whether the email channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the email channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The maximum number of emails that you can send through the channel each second.</p>
   */
  MessagesPerSecond?: number;

  /**
   * <p>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</p>
   */
  Platform: string;

  /**
   *  <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current version of the email channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledEmailChannelResponse = _EmailChannelResponse;

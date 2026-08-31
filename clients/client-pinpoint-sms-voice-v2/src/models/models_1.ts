// smithy-typescript generated code
import type { MessageType, RcsAgentStatus, VerificationStatus } from "./enums";

/**
 * @public
 */
export interface UpdateRcsAgentRequest {
  /**
   * <p>The unique identifier of the RCS agent to update. You can use either the RcsAgentId or RcsAgentArn.</p>
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the RCS agent can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The OptOutList to associate with the RCS agent. Valid values are either OptOutListName or OptOutListArn.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where inbound RCS media files are stored. Two-way messaging must be enabled on the agent. To remove the media configuration, pass the sentinel value <code>UNSET_RCS_MEDIA_CONFIGURATION</code> for both this field and TwoWayMediaS3Role.</p>
   * @public
   */
  TwoWayMediaS3BucketName?: string | undefined;

  /**
   * <p>The key prefix used for inbound RCS media objects in the S3 bucket.</p>
   * @public
   */
  TwoWayMediaS3KeyPrefix?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to write inbound RCS media files to the S3 bucket. The role must have <code>s3:PutObject</code> permission on the bucket and a trust policy allowing <code>sms-voice.amazonaws.com</code> to assume it. To remove the media configuration, pass the sentinel value <code>UNSET_RCS_MEDIA_CONFIGURATION</code> for both this field and TwoWayMediaS3BucketName.</p>
   * @public
   */
  TwoWayMediaS3Role?: string | undefined;

  /**
   * <p>The list of RCS event types to enable for two-way messaging. Pass an empty list to disable all event types. The special value <code>ALL</code> enables all current and future event types and must be the sole element if used.</p>
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRcsAgentResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated RCS agent.</p>
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * <p>The unique identifier for the RCS agent.</p>
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * <p>The current status of the RCS agent.</p>
   * @public
   */
  Status: RcsAgentStatus | undefined;

  /**
   * <p>The time when the RCS agent was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the RCS agent.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where inbound RCS media files are stored.</p>
   * @public
   */
  TwoWayMediaS3BucketName?: string | undefined;

  /**
   * <p>The key prefix used for inbound RCS media objects in the S3 bucket.</p>
   * @public
   */
  TwoWayMediaS3KeyPrefix?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to write inbound RCS media files to the S3 bucket.</p>
   * @public
   */
  TwoWayMediaS3Role?: string | undefined;

  /**
   * <p>The list of RCS event types enabled for two-way messaging on the agent.</p>
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSenderIdRequest {
  /**
   * <p>The sender ID to update.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * <p>The sender ID that was updated.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * <p>The monthly price, in US dollars, to lease the sender ID.</p>
   * @public
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>True if the sender ID is registered..</p>
   * @public
   */
  Registered: boolean | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberRequest {
  /**
   * <p>The unique identifier for the verififed destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * <p>The verification code that was received by the verified destination phone number.</p>
   * @public
   */
  VerificationCode: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * <p>The unique identifier for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The status for being able to send messages to the phone number.</p>
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

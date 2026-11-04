// smithy-typescript generated code
import type { MessageType, NumberCapability, RcsAgentStatus, VerificationStatus } from "./enums";
import type { ProtectConfigurationCountryRuleSetInformation } from "./models_0";

/**
 * @public
 */
export interface UpdateProtectConfigurationRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) of the protect configuration.
   *
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The time when the protect configuration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * This is true if the protect configuration is set as your account default protect configuration.
   *
   * @public
   */
  AccountDefault: boolean | undefined;

  /**
   * The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationCountryRuleSetRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The number capability to apply the CountryRuleSetUpdates updates to.
   *
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * A map of ProtectConfigurationCountryRuleSetInformation objects that contain the details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see [Supported countries and regions (SMS channel)](https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html) in the End User Messaging SMS User Guide.
   *
   * For example, to set the United States as allowed and Canada as blocked, the `CountryRuleSetUpdates` would be formatted as: `"CountryRuleSetUpdates": \{ "US" : \{ "ProtectStatus": "ALLOW" \} "CA" : \{ "ProtectStatus": "BLOCK" \} \}`
   *
   * @public
   */
  CountryRuleSetUpdates: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationCountryRuleSetResult {
  /**
   * The Amazon Resource Name (ARN) of the protect configuration.
   *
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The number capability that was updated
   *
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * An array of ProtectConfigurationCountryRuleSetInformation containing the rules for the NumberCapability.
   *
   * @public
   */
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

/**
 * @public
 */
export interface UpdateRcsAgentRequest {
  /**
   * The unique identifier of the RCS agent to update. You can use either the RcsAgentId or RcsAgentArn.
   *
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * By default this is set to false. When set to true the RCS agent can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * The OptOutList to associate with the RCS agent. Valid values are either OptOutListName or OptOutListArn.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * By default this is set to false. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the two way channel.
   *
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
   *
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * The name of the S3 bucket where inbound RCS media files are stored. Two-way messaging must be enabled on the agent. To remove the media configuration, pass the sentinel value `UNSET_RCS_MEDIA_CONFIGURATION` for both this field and TwoWayMediaS3Role.
   *
   * @public
   */
  TwoWayMediaS3BucketName?: string | undefined;

  /**
   * The key prefix used for inbound RCS media objects in the S3 bucket.
   *
   * @public
   */
  TwoWayMediaS3KeyPrefix?: string | undefined;

  /**
   * The ARN of the IAM role used to write inbound RCS media files to the S3 bucket. The role must have `s3:PutObject` permission on the bucket and a trust policy allowing `sms-voice.amazonaws.com` to assume it. To remove the media configuration, pass the sentinel value `UNSET_RCS_MEDIA_CONFIGURATION` for both this field and TwoWayMediaS3BucketName.
   *
   * @public
   */
  TwoWayMediaS3Role?: string | undefined;

  /**
   * The list of RCS event types to enable for two-way messaging. Pass an empty list to disable all event types. The special value `ALL` enables all current and future event types and must be the sole element if used.
   *
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRcsAgentResult {
  /**
   * The Amazon Resource Name (ARN) of the updated RCS agent.
   *
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * The unique identifier for the RCS agent.
   *
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * The current status of the RCS agent.
   *
   * @public
   */
  Status: RcsAgentStatus | undefined;

  /**
   * The time when the RCS agent was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The name of the OptOutList associated with the RCS agent.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * By default this is set to false. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the two way channel.
   *
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
   *
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * The name of the S3 bucket where inbound RCS media files are stored.
   *
   * @public
   */
  TwoWayMediaS3BucketName?: string | undefined;

  /**
   * The key prefix used for inbound RCS media objects in the S3 bucket.
   *
   * @public
   */
  TwoWayMediaS3KeyPrefix?: string | undefined;

  /**
   * The ARN of the IAM role used to write inbound RCS media files to the S3 bucket.
   *
   * @public
   */
  TwoWayMediaS3Role?: string | undefined;

  /**
   * The list of RCS event types enabled for two-way messaging on the agent.
   *
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSenderIdRequest {
  /**
   * The sender ID to update.
   *
   * @public
   */
  SenderId: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * By default this is set to false. When set to true the sender ID can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSenderIdResult {
  /**
   * The Amazon Resource Name (ARN) associated with the SenderId.
   *
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * The sender ID that was updated.
   *
   * @public
   */
  SenderId: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * The monthly price, in US dollars, to lease the sender ID.
   *
   * @public
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * By default this is set to false. When set to true the sender ID can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * True if the sender ID is registered..
   *
   * @public
   */
  Registered: boolean | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberRequest {
  /**
   * The unique identifier for the verififed destination phone number.
   *
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * The verification code that was received by the verified destination phone number.
   *
   * @public
   */
  VerificationCode: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberResult {
  /**
   * The Amazon Resource Name (ARN) for the verified destination phone number.
   *
   * @public
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * The unique identifier for the verified destination phone number.
   *
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * The phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The status for being able to send messages to the phone number.
   *
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * The time when the destination phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

// smithy-typescript generated code
import type {
  AccountAttributeName,
  AccountLimitName,
  AttachmentStatus,
  AttachmentUploadErrorReason,
  CarrierStatus,
  ConfigurationSetFilterName,
  CountryLaunchStatus,
  CountryLaunchStatusFilterName,
  DestinationCountryParameterKey,
  EventType,
  FieldRequirement,
  FieldType,
  KeywordAction,
  KeywordFilterName,
  LanguageCode,
  MessageFeedbackStatus,
  MessageType,
  NotifyConfigurationFilterName,
  NotifyConfigurationStatus,
  NotifyConfigurationTier,
  NotifyConfigurationUseCase,
  NotifyTemplateFilterName,
  NotifyTemplateStatus,
  NotifyTemplateType,
  NumberCapability,
  NumberStatus,
  NumberType,
  OptedOutFilterName,
  Owner,
  PhoneNumberFilterName,
  PhoneNumberType,
  PoolFilterName,
  PoolOriginationIdentitiesFilterName,
  PoolStatus,
  ProtectConfigurationFilterName,
  ProtectConfigurationRuleOverrideAction,
  ProtectConfigurationRuleSetNumberOverrideFilterName,
  ProtectStatus,
  RcsAgentFilterName,
  RcsAgentStatus,
  RcsFallbackChannel,
  RegistrationAssociationBehavior,
  RegistrationAssociationFilterName,
  RegistrationAttachmentFilterName,
  RegistrationDisassociationBehavior,
  RegistrationFilterName,
  RegistrationStatus,
  RegistrationTypeFilterName,
  RegistrationVersionFilterName,
  RegistrationVersionStatus,
  RequestableNumberType,
  SenderIdFilterName,
  SpendLimitName,
  TemplateVariableSource,
  TemplateVariableType,
  TestingAgentStatus,
  TierUpgradeStatus,
  VerificationChannel,
  VerificationStatus,
  VerifiedDestinationNumberFilterName,
  VoiceId,
  VoiceMessageBodyTextType,
} from "./enums";

/**
 * <p>Displays the attributes associated with a single Amazon Web Services account.</p>
 * @public
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   * @public
   */
  Name: AccountAttributeName | undefined;

  /**
   * <p>The value associated with the account attribute name.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The current resource quotas associated with an Amazon Web Services account.</p>
 * @public
 */
export interface AccountLimit {
  /**
   * <p>The name of the attribute to apply the account limit to.</p>
   * @public
   */
  Name: AccountLimitName | undefined;

  /**
   * <p>The current amount that has been spent, in US dollars.</p>
   * @public
   */
  Used: number | undefined;

  /**
   * <p>The Amazon Web Services set limit for that resource type, in US dollars.</p>
   * @public
   */
  Max: number | undefined;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityRequest {
  /**
   * <p>The pool to update with the new Identity. This value can be either the PoolId or PoolArn, and you can find these values using <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html">DescribePools</a>.</p> <important> <p>If you are using a shared End User Messaging SMS; resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for PhoneNumberId and PhoneNumberArn, while <a>DescribeSenderIds</a> can be used to get the values for SenderId and SenderIdArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the origination identity. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool that is now associated with the origination identity.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The PoolId of the pool that is now associated with the origination identity.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode?: string | undefined;
}

/**
 * <p>The field associated with the validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The message associated with the validation exception with information to help determine its cause.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociateProtectConfigurationRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface AssociateProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface CarrierLookupRequest {
  /**
   * <p>The phone number that you want to retrieve information about. You can provide the phone number in various formats including special characters such as parentheses, brackets, spaces, hyphens, periods, and commas. The service automatically converts the input to E164 format for processing.</p>
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface CarrierLookupResult {
  /**
   * <p>The phone number in E164 format, sanitized from the original input by removing any formatting characters.</p>
   * @public
   */
  E164PhoneNumber: string | undefined;

  /**
   * <p>The country or region numeric dialing code for the phone number.</p>
   * @public
   */
  DialingCountryCode?: string | undefined;

  /**
   * <p>The two-character country or region code, in ISO 3166-1 alpha-2 format, for the phone number.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The name of the country or region for the phone number.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The phone number's mobile country code, for mobile phone number types</p>
   * @public
   */
  MCC?: string | undefined;

  /**
   * <p>The phone number's mobile network code, for mobile phone number types.</p>
   * @public
   */
  MNC?: string | undefined;

  /**
   * <p>The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.</p>
   * @public
   */
  Carrier?: string | undefined;

  /**
   * <p>Describes the type of phone number. Valid values are: MOBILE, LANDLINE, OTHER, and INVALID. Avoid sending SMS or voice messages to INVALID phone numbers, as these numbers are unlikely to belong to actual recipients.</p>
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;
}

/**
 * <p>Contains carrier-level launch status details for an RCS agent within a country.</p>
 * @public
 */
export interface CarrierStatusInformation {
  /**
   * <p>The name of the carrier.</p>
   * @public
   */
  CarrierName: string | undefined;

  /**
   * <p>The launch status for this carrier.</p>
   * @public
   */
  Status: CarrierStatus | undefined;
}

/**
 * <p>Contains the destination configuration to use when publishing message sending events. </p>
 * @public
 */
export interface CloudWatchLogsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The name of the Amazon CloudWatch log group that you want to record events in. </p>
   * @public
   */
  LogGroupArn: string | undefined;
}

/**
 * <p>The information for configuration sets that meet a specified criteria.</p>
 * @public
 */
export interface ConfigurationSetFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: ConfigurationSetFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with a Firehose event destination.</p> <p>Event destinations, such as Firehose, are associated with configuration sets, which enable you to publish message sending events.</p>
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * <p>The ARN of an Identity and Access Management role that is able to write event data to an Amazon Data Firehose destination.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * <p>An object that defines an Amazon SNS destination for events. You can use Amazon SNS to send notification when certain events occur.</p>
 * @public
 */
export interface SnsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.</p>
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * <p>Contains information about an event destination.</p> <p>Event destinations are associated with configuration sets, which enable you to publish message sending events to CloudWatch, Firehose, or Amazon SNS.</p>
 * @public
 */
export interface EventDestination {
  /**
   * <p>The name of the EventDestination.</p>
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * <p>When set to true events will be logged.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>An array of event types that determine which events to log.</p> <note> <p>The <code>TEXT_SENT</code> event type is not supported.</p> </note>
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * <p>An object that contains information about an event destination that sends logging events to Amazon CloudWatch logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon Data Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * <p>An object that contains information about an event destination that sends logging events to Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * <p>Information related to a given configuration set in your Amazon Web Services account.</p>
 * @public
 */
export interface ConfigurationSetInformation {
  /**
   * <p>The Resource Name (ARN) of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An array of EventDestination objects that describe any events to log and where to log them.</p>
   * @public
   */
  EventDestinations: EventDestination[] | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  DefaultMessageType?: MessageType | undefined;

  /**
   * <p>The default sender ID used by the ConfigurationSet.</p>
   * @public
   */
  DefaultSenderId?: string | undefined;

  /**
   * <p>True if message feedback is enabled.</p>
   * @public
   */
  DefaultMessageFeedbackEnabled?: boolean | undefined;

  /**
   * <p>The time when the ConfigurationSet was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string | undefined;
}

/**
 * <p>The information for a country launch status that meets a specified criteria.</p>
 * @public
 */
export interface CountryLaunchStatusFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: CountryLaunchStatusFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Contains per-country launch status details for an RCS agent.</p>
 * @public
 */
export interface CountryLaunchStatusInformation {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The launch status for this country.</p>
   * @public
   */
  Status: CountryLaunchStatus | undefined;

  /**
   * <p>The RCS platform identifier for this country.</p>
   * @public
   */
  RcsPlatformId?: string | undefined;

  /**
   * <p>The unique identifier of the registration associated with this country launch.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>An array of CarrierStatusInformation objects containing carrier-level launch status details.</p>
   * @public
   */
  CarrierStatus: CarrierStatusInformation[] | undefined;
}

/**
 * <p>The list of tags to be added to the specified topic.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The string value associated with the key of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * <p>The name to use for the new configuration set.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An array of key and value pair tags that's associated with the new configuration set. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the new configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>An array of key and value pair tags that's associated with the configuration set.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the configuration set was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventDestinationRequest {
  /**
   * <p>Either the name of the configuration set or the configuration set ARN to apply event logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name that identifies the event destination.</p>
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An array of event types that determine which events to log. If "ALL" is used, then End User Messaging SMS logs every event type.</p> <note> <p>The <code>TEXT_SENT</code> event type is not supported.</p> </note>
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon Data Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventDestinationResult {
  /**
   * <p>The ARN of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The details of the destination where events are logged.</p>
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface CreateNotifyConfigurationRequest {
  /**
   * <p>The display name to associate with the notify configuration.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The use case for the notify configuration.</p>
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * <p>The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The identifier of the pool to associate with the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels to enable for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * <p>By default this is set to false. When set to true the notify configuration can't be deleted. You can change this value using the <a>UpdateNotifyConfiguration</a> action.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the notify configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNotifyConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The display name associated with the notify configuration.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The use case for the notify configuration.</p>
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * <p>The default template identifier associated with the notify configuration.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The identifier of the pool associated with the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels enabled for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * <p>The tier of the notify configuration.</p>
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * <p>The tier upgrade status of the notify configuration.</p>
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * <p>The current status of the notify configuration.</p>
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * <p>The reason the notify configuration was rejected, if applicable.</p>
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the notify configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the notify configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateOptOutListRequest {
  /**
   * <p>The name of the new OptOutList.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the new OptOutList.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateOptOutListResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the OptOutList.</p>
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * <p>The name of the new OptOutList.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the new OptOutList.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePoolRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePhoneNumbers.html">DescribePhoneNumbers</a> to find the values for PhoneNumberId and PhoneNumberArn, and use <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html">DescribeSenderIds</a> can be used to get the values for SenderId and SenderIdArn.</p> <p>After the pool is created you can add more origination identities to the pool by using <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateOriginationIdentity.html">AssociateOriginationIdentity</a>.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the new pool. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. After the pool is created the MessageType can't be changed.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>By default this is set to false. When set to true the pool can't be deleted. You can change this value using the <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePool.html">UpdatePool</a> action.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePoolResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The unique identifier for the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The current status of the pool.</p> <ul> <li> <p>CREATING: The pool is currently being created and isn't yet available for use.</p> </li> <li> <p>ACTIVE: The pool is active and available for use.</p> </li> <li> <p>DELETING: The pool is being deleted.</p> </li> </ul>
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * <p>The type of message for the pool to use.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * <p>By default this is set to false. When set to false, and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>Indicates whether shared routes are enabled for the pool. Set to false and only origination identities in this pool are used to send messages. </p>
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateProtectConfigurationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The time when the protect configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>This is true if the protect configuration is set as your account default protect configuration.</p>
   * @public
   */
  AccountDefault: boolean | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRcsAgentRequest {
  /**
   * <p>By default this is set to false. When set to true the RCS agent can't be deleted. You can change this value using the <a>UpdateRcsAgent</a> action.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The OptOutList to associate with the RCS agent. Valid values are either OptOutListName or OptOutListArn.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the RCS agent.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRcsAgentResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created RCS agent.</p>
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
   * <p>The time when the RCS agent was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

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
   * <p>The ARN of the IAM role used to write inbound RCS media files to the S3 bucket. The role must have <code>s3:PutObject</code> permission on the bucket and a trust policy allowing <code>sms-voice.amazonaws.com</code> to assume it.</p>
   * @public
   */
  TwoWayMediaS3Role?: string | undefined;

  /**
   * <p>The list of RCS event types enabled for two-way messaging on the agent.</p>
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;

  /**
   * <p>An array of tags (key and value pairs) associated with the RCS agent.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationRequest {
  /**
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The status of the registration.</p> <ul> <li> <p> <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p> </li> <li> <p> <code>CREATED</code>: Your registration is created but not submitted.</p> </li> <li> <p> <code>COMPLETE</code>: Your registration has been approved and your origination identity has been created.</p> </li> <li> <p> <code>DELETED</code>: The registration has been deleted.</p> </li> <li> <p> <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p> </li> </ul>
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The current version number of the registration.</p>
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The registration type or origination identity type.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The phone number associated with the registration in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentRequest {
  /**
   * <p>The registration file to upload. The maximum file size is 500KB and valid file extensions are PDF, JPEG and PNG.</p>
   * @public
   */
  AttachmentBody?: Uint8Array | undefined;

  /**
   * <p>Registration files have to be stored in an Amazon S3 bucket. The URI to use when sending is in the format <code>s3://BucketName/FileName</code>.</p>
   * @public
   */
  AttachmentUrl?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * <p>The status of the registration attachment. </p> <ul> <li> <p> <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p> </li> <li> <p> <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p> </li> <li> <p> <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p> </li> <li> <p> <code>DELETED</code> The attachment has been deleted..</p> </li> </ul>
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationVersionRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
 * @public
 */
export interface RegistrationVersionStatusHistory {
  /**
   * <p>The time when the registration was in the draft state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  DraftTimestamp: Date | undefined;

  /**
   * <p>The time when the registration was in the submitted state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  SubmittedTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the AWS reviewing state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  AwsReviewingTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the reviewing state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ReviewingTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the requires authentication state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  RequiresAuthenticationTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the approved state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ApprovedTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the discarded state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  DiscardedTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the denied state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  DeniedTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the revoked state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  RevokedTimestamp?: Date | undefined;

  /**
   * <p>The time when the registration was in the archived state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ArchivedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationVersionResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The new version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The status of the registration.</p> <ul> <li> <p> <code>APPROVED</code>: Your registration has been approved.</p> </li> <li> <p> <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p> </li> <li> <p> <code>DENIED</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p> </li> <li> <p> <code>DRAFT</code>: The initial status of a registration version after it’s created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>REVOKED</code>: Your previously approved registration has been revoked.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted.</p> </li> </ul>
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * <p>A <b>RegistrationVersionStatusHistory</b> object that contains timestamps for the registration.</p>
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberRequest {
  /**
   * <p>The verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The unique identifier of the RCS agent to associate with the verified destination number. You can use either the RcsAgentId or RcsAgentArn.</p>
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberResult {
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
   * <p>The verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The status of the verified destination phone number.</p> <ul> <li> <p> <code>PENDING</code>: The phone number hasn't been verified yet.</p> </li> <li> <p> <code>VERIFIED</code>: The phone number is verified and can receive messages.</p> </li> </ul>
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * <p>The unique identifier of the RCS agent associated with the verified destination number.</p>
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the verified phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAccountDefaultProtectConfigurationRequest {}

/**
 * @public
 */
export interface DeleteAccountDefaultProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the account default protect configuration.</p>
   * @public
   */
  DefaultProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier of the account default protect configuration.</p>
   * @public
   */
  DefaultProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * <p>The name of the configuration set or the configuration set ARN that you want to delete. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the deleted configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>An array of any EventDestination objects that were associated with the deleted configuration set.</p>
   * @public
   */
  EventDestinations?: EventDestination[] | undefined;

  /**
   * <p>The default message type of the configuration set that was deleted.</p>
   * @public
   */
  DefaultMessageType?: MessageType | undefined;

  /**
   * <p>The default Sender ID of the configuration set that was deleted.</p>
   * @public
   */
  DefaultSenderId?: string | undefined;

  /**
   * <p>True if the configuration set has message feedback enabled. By default this is set to false. </p>
   * @public
   */
  DefaultMessageFeedbackEnabled?: boolean | undefined;

  /**
   * <p>The time that the deleted configuration set was created in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default message type from. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The current message type for the configuration set.</p>
   * @public
   */
  MessageType?: MessageType | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The current sender ID for the configuration set.</p>
   * @public
   */
  SenderId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDestinationRequest {
  /**
   * <p>The name of the configuration set or the configuration set's Amazon Resource Name (ARN) to remove the event destination from. The ConfigurateSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination to delete.</p>
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDestinationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set the event destination was deleted from.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The event destination object that was deleted.</p>
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface DeleteKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or PoolArn. You can use <a>DescribePhoneNumbers</a> to find the values for PhoneNumberId and PhoneNumberArn and <a>DescribePools</a> to find the values of PoolId and PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The keyword to delete.</p>
   * @public
   */
  Keyword: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeywordResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The keyword that was deleted.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>The message that was associated with the deleted keyword.</p>
   * @public
   */
  KeywordMessage?: string | undefined;

  /**
   * <p>The action that was associated with the deleted keyword.</p>
   * @public
   */
  KeywordAction?: KeywordAction | undefined;
}

/**
 * @public
 */
export interface DeleteMediaMessageSpendLimitOverrideRequest {}

/**
 * @public
 */
export interface DeleteMediaMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyConfigurationRequest {
  /**
   * <p>The identifier of the notify configuration to delete. The NotifyConfigurationId can be found using the <a>DescribeNotifyConfigurations</a> operation.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The display name associated with the notify configuration.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The use case for the notify configuration.</p>
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * <p>The default template identifier associated with the notify configuration.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The identifier of the pool associated with the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels enabled for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * <p>The tier of the notify configuration.</p>
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * <p>The tier upgrade status of the notify configuration.</p>
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * <p>The current status of the notify configuration.</p>
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * <p>The reason the notify configuration was rejected, if applicable.</p>
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the notify configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyMessageSpendLimitOverrideRequest {}

/**
 * @public
 */
export interface DeleteNotifyMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to remove the phone number from.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>The phone number, in E.164 format, to remove from the OptOutList.</p>
   * @public
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberResult {
  /**
   * <p>The OptOutListArn that the phone number was removed from.</p>
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>The phone number that was removed from the OptOutList.</p>
   * @public
   */
  OptedOutNumber?: string | undefined;

  /**
   * <p>The time that the number was removed at, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  OptedOutTimestamp?: Date | undefined;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed. </p>
   * @public
   */
  EndUserOptedOut?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteOptOutListRequest {
  /**
   * <p>The OptOutListName or OptOutListArn of the OptOutList to delete. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and OptOutListArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptOutListResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList that was removed.</p>
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * <p>The name of the OptOutList that was removed.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>The time when the OptOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeletePoolRequest {
  /**
   * <p>The PoolId or PoolArn of the pool to delete. You can use <a>DescribePools</a> to find the values for PoolId and PoolArn .</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface DeletePoolResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool that was deleted.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The PoolId of the pool that was deleted.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The current status of the pool.</p> <ul> <li> <p>CREATING: The pool is currently being created and isn't yet available for use.</p> </li> <li> <p>ACTIVE: The pool is active and available for use.</p> </li> <li> <p>DELETING: The pool is being deleted.</p> </li> </ul>
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * <p>The message type that was associated with the deleted pool.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * <p>By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList that was associated with the deleted pool.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The time when the protect configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>This is true if the protect configuration is set as your account default protect configuration.</p>
   * @public
   */
  AccountDefault: boolean | undefined;

  /**
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationRuleSetNumberOverrideRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationRuleSetNumberOverrideResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The time when the rule was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The action associated with the rule.</p>
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The time when the resource-based policy was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRcsAgentRequest {
  /**
   * <p>The unique identifier of the RCS agent to delete. You can use either the RcsAgentId or RcsAgentArn.</p>
   * @public
   */
  RcsAgentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRcsAgentResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted RCS agent.</p>
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * <p>The unique identifier for the deleted RCS agent.</p>
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
   * <p>The name of the OptOutList that was associated with the deleted RCS agent.</p>
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
   * <p>The list of RCS event types that were enabled for two-way messaging on the deleted agent.</p>
   * @public
   */
  TwoWayRcsEventsEnabled?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteRcsMessageSpendLimitOverrideRequest {}

/**
 * @public
 */
export interface DeleteRcsMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on RCS message spending.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The status of the registration.</p> <ul> <li> <p> <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p> </li> <li> <p> <code>CREATED</code>: Your registration is created but not submitted.</p> </li> <li> <p> <code>COMPLETE</code>: Your registration has been approved and your origination identity has been created.</p> </li> <li> <p> <code>DELETED</code>: The registration has been deleted.</p> </li> <li> <p> <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p> </li> </ul>
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The current version number of the registration.</p>
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * <p>The version number of the registration that was approved.</p>
   * @public
   */
  ApprovedVersionNumber?: number | undefined;

  /**
   * <p>The latest version number of the registration that was denied.</p>
   * @public
   */
  LatestDeniedVersionNumber?: number | undefined;

  /**
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentRequest {
  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * <p>The status of the registration attachment. </p> <ul> <li> <p> <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p> </li> <li> <p> <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p> </li> <li> <p> <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p> </li> <li> <p> <code>DELETED</code> The attachment has been deleted..</p> </li> </ul>
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>The error message if the upload failed.</p>
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason | undefined;

  /**
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   * @public
   */
  FieldPath: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The path to the registration form field.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>An array of values for the form field.</p>
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource you're deleting the resource-based policy from.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource that the resource-based policy was deleted from.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The JSON formatted resource-based policy that was deleted.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The time when the resource-based policy was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteTextMessageSpendLimitOverrideRequest {}

/**
 * @public
 */
export interface DeleteTextMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberRequest {
  /**
   * <p>The unique identifier for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberResult {
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
   * <p>The verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceMessageSpendLimitOverrideRequest {}

/**
 * @public
 */
export interface DeleteVoiceMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * <p>An array of AccountAttributes objects.</p>
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsResult {
  /**
   * <p>An array of AccountLimit objects that show the current spend limits.</p>
   * @public
   */
  AccountLimits?: AccountLimit[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsRequest {
  /**
   * <p>An array of strings. Each element can be either a ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetNames?: string[] | undefined;

  /**
   * <p>An array of filters to apply to the results that are returned.</p>
   * @public
   */
  Filters?: ConfigurationSetFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsResult {
  /**
   * <p>An array of ConfigurationSets objects.</p>
   * @public
   */
  ConfigurationSets?: ConfigurationSetInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for keywords that meet a specified criteria.</p>
 * @public
 */
export interface KeywordFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: KeywordFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used to get the values for SenderId and SenderIdArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>An array of keywords to search for.</p>
   * @public
   */
  Keywords?: string[] | undefined;

  /**
   * <p>An array of keyword filters to filter the results.</p>
   * @public
   */
  Filters?: KeywordFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The information for all keywords in a pool.</p>
 * @public
 */
export interface KeywordInformation {
  /**
   * <p>The keyword as a string.</p>
   * @public
   */
  Keyword: string | undefined;

  /**
   * <p>A custom message that can be used with the keyword.</p>
   * @public
   */
  KeywordMessage: string | undefined;

  /**
   * <p>The action to perform for the keyword.</p>
   * @public
   */
  KeywordAction: KeywordAction | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that is associated with the OriginationIdentity. </p>
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * <p>The PhoneNumberId or PoolId that is associated with the OriginationIdentity.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>An array of KeywordInformation objects that contain the results.</p>
   * @public
   */
  Keywords?: KeywordInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for notify configurations that meet a specified criteria.</p>
 * @public
 */
export interface NotifyConfigurationFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: NotifyConfigurationFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyConfigurationsRequest {
  /**
   * <p>An array of notify configuration IDs to describe.</p>
   * @public
   */
  NotifyConfigurationIds?: string[] | undefined;

  /**
   * <p>An array of NotifyConfigurationFilter objects to filter the results on.</p>
   * @public
   */
  Filters?: NotifyConfigurationFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The information for a notify configuration in an Amazon Web Services account.</p>
 * @public
 */
export interface NotifyConfigurationInformation {
  /**
   * <p>The Amazon Resource Name (ARN) for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The display name associated with the notify configuration.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The use case for the notify configuration.</p>
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * <p>The default template identifier associated with the notify configuration.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The identifier of the pool associated with the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels enabled for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * <p>The tier of the notify configuration.</p>
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * <p>The tier upgrade status of the notify configuration.</p>
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * <p>The current status of the notify configuration.</p>
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * <p>The reason the notify configuration was rejected, if applicable.</p>
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the notify configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyConfigurationsResult {
  /**
   * <p>An array of NotifyConfigurationInformation objects that contain the results.</p>
   * @public
   */
  NotifyConfigurations?: NotifyConfigurationInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for notify templates that meet a specified criteria.</p>
 * @public
 */
export interface NotifyTemplateFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: NotifyTemplateFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyTemplatesRequest {
  /**
   * <p>An array of template IDs to describe.</p>
   * @public
   */
  TemplateIds?: string[] | undefined;

  /**
   * <p>An array of NotifyTemplateFilter objects to filter the results on.</p>
   * @public
   */
  Filters?: NotifyTemplateFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains metadata about a template variable.</p>
 * @public
 */
export interface TemplateVariableMetadata {
  /**
   * <p>The type of the variable.</p>
   * @public
   */
  Type: TemplateVariableType | undefined;

  /**
   * <p>Whether the variable is required.</p>
   * @public
   */
  Required: boolean | undefined;

  /**
   * <p>A description of the variable.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The maximum length for string variables.</p>
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * <p>The minimum value for numeric variables.</p>
   * @public
   */
  MinValue?: number | undefined;

  /**
   * <p>The maximum value for numeric variables.</p>
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * <p>The default value for the variable.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The regex pattern the variable value must match.</p>
   * @public
   */
  Pattern?: string | undefined;

  /**
   * <p>A sample value for the variable.</p>
   * @public
   */
  Sample?: string | undefined;

  /**
   * <p>The source of the variable, either <code>CUSTOMER</code> or <code>SYSTEM</code>.</p>
   * @public
   */
  Source?: TemplateVariableSource | undefined;
}

/**
 * <p>The information for a system-managed notify template in an Amazon Web Services account.</p>
 * @public
 */
export interface NotifyTemplateInformation {
  /**
   * <p>The unique identifier for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The version of the template.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The type of the template.</p>
   * @public
   */
  TemplateType: NotifyTemplateType | undefined;

  /**
   * <p>The channels for the template. Supported values are <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  Channels: NumberCapability[] | undefined;

  /**
   * <p>The tier access level for the template.</p>
   * @public
   */
  TierAccess?: NotifyConfigurationTier[] | undefined;

  /**
   * <p>The current status of the template.</p>
   * @public
   */
  Status?: NotifyTemplateStatus | undefined;

  /**
   * <p>An array of supported country codes for the template.</p>
   * @public
   */
  SupportedCountries?: string[] | undefined;

  /**
   * <p>The language code for the template.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <p>The content of the template.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>An array of template variable metadata for the template.</p>
   * @public
   */
  Variables?: Record<string, TemplateVariableMetadata> | undefined;

  /**
   * <p>An array of supported voice IDs for voice templates.</p>
   * @public
   */
  SupportedVoiceIds?: VoiceId[] | undefined;

  /**
   * <p>The time when the notify template was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyTemplatesResult {
  /**
   * <p>An array of NotifyTemplateInformation objects that contain the results.</p>
   * @public
   */
  NotifyTemplates?: NotifyTemplateInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for opted out numbers that meet a specified criteria.</p>
 * @public
 */
export interface OptedOutFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: OptedOutFilterName | undefined;

  /**
   * <p>An array of values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersRequest {
  /**
   * <p>The OptOutListName or OptOutListArn of the OptOutList. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and OptOutListArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>An array of phone numbers to search for in the OptOutList.</p> <p>If you specify an opted out number that isn't valid, an exception is returned.</p>
   * @public
   */
  OptedOutNumbers?: string[] | undefined;

  /**
   * <p>An array of OptedOutFilter objects to filter the results on.</p>
   * @public
   */
  Filters?: OptedOutFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The information for an opted out number in an Amazon Web Services account.</p>
 * @public
 */
export interface OptedOutNumberInformation {
  /**
   * <p>The phone number that is opted out.</p>
   * @public
   */
  OptedOutNumber: string | undefined;

  /**
   * <p>The time that the op tout occurred, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  OptedOutTimestamp: Date | undefined;

  /**
   * <p>This is set to true if it was the end recipient that opted out.</p>
   * @public
   */
  EndUserOptedOut: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * <p>The name of the OptOutList.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>An array of OptedOutNumbersInformation objects that provide information about the requested OptedOutNumbers.</p>
   * @public
   */
  OptedOutNumbers?: OptedOutNumberInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOptOutListsRequest {
  /**
   * <p>The OptOutLists to show the details of. This is an array of strings that can be either the OptOutListName or OptOutListArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListNames?: string[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use <code>SELF</code> to filter the list of Opt-Out List to ones your account owns or use <code>SHARED</code> to filter on Opt-Out List shared with your account. The <code>Owner</code> and <code>OptOutListNames</code> parameters can't be used at the same time.</p>
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * <p>The information for all OptOutList in an Amazon Web Services account.</p>
 * @public
 */
export interface OptOutListInformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   * @public
   */
  OptOutListArn: string | undefined;

  /**
   * <p>The name of the OptOutList.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>The time when the OutOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptOutListsResult {
  /**
   * <p>An array of OptOutListInformation objects that contain the details for the requested OptOutLists.</p>
   * @public
   */
  OptOutLists?: OptOutListInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for a phone number that meets a specified criteria.</p>
 * @public
 */
export interface PhoneNumberFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: PhoneNumberFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersRequest {
  /**
   * <p>The unique identifier of phone numbers to find information about. This is an array of strings that can be either the PhoneNumberId or PhoneNumberArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PhoneNumberIds?: string[] | undefined;

  /**
   * <p>An array of PhoneNumberFilter objects to filter the results.</p>
   * @public
   */
  Filters?: PhoneNumberFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use <code>SELF</code> to filter the list of phone numbers to ones your account owns or use <code>SHARED</code> to filter on phone numbers shared with your account. The <code>Owner</code> and <code>PhoneNumberIds</code> parameters can't be used at the same time.</p>
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * <p>The information for a phone number, in E.164 format, in an Amazon Web Services account.</p>
 * @public
 */
export interface PhoneNumberInformation {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the phone number.</p>
   * @public
   */
  PhoneNumberArn: string | undefined;

  /**
   * <p>The unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The current status of the phone number.</p>
   * @public
   */
  Status: NumberStatus | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or both.</p>
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  NumberType: NumberType | undefined;

  /**
   * <p>The price, in US dollars, to lease the phone number.</p>
   * @public
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

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
   * <p>When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out request. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a> </p>
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>When set to true the international sending of phone number is Enabled.</p>
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The unique identifier of the pool associated with the phone number.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersResult {
  /**
   * <p>An array of PhoneNumberInformation objects that contain the details for the requested phone numbers.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumberInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for a pool that meets a specified criteria.</p>
 * @public
 */
export interface PoolFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: PoolFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePoolsRequest {
  /**
   * <p>The unique identifier of pools to find. This is an array of strings that can be either the PoolId or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * <p>An array of PoolFilter objects to filter the results.</p>
   * @public
   */
  Filters?: PoolFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use <code>SELF</code> to filter the list of Pools to ones your account owns or use <code>SHARED</code> to filter on Pools shared with your account. The <code>Owner</code> and <code>PoolIds</code> parameters can't be used at the same time.</p>
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * <p>The information for a pool in an Amazon Web Services account.</p>
 * @public
 */
export interface PoolInformation {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn: string | undefined;

  /**
   * <p>The unique identifier for the pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The current status of the pool.</p>
   * @public
   */
  Status: PoolStatus | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

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
   * <p>When set to false, an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a> </p>
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>Allows you to enable shared routes on your pool.</p> <p>By default, this is set to <code>False</code>. If you set this value to <code>True</code>, your messages are sent using phone numbers or sender IDs (depending on the country) that are shared with other users. In some countries, such as the United States, senders aren't allowed to use shared routes and must use a dedicated phone number or short code.</p>
   * @public
   */
  SharedRoutesEnabled: boolean | undefined;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePoolsResult {
  /**
   * <p>An array of PoolInformation objects that contain the details for the requested pools. </p>
   * @public
   */
  Pools?: PoolInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering protect configurations that meet a specified criteria.</p>
 * @public
 */
export interface ProtectConfigurationFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: ProtectConfigurationFilterName | undefined;

  /**
   * <p>An array of values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeProtectConfigurationsRequest {
  /**
   * <p>An array of protect configuration identifiers to search for.</p>
   * @public
   */
  ProtectConfigurationIds?: string[] | undefined;

  /**
   * <p>An array of ProtectConfigurationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: ProtectConfigurationFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides information on the specified protect configuration.</p>
 * @public
 */
export interface ProtectConfigurationInformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The time when the protect configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>This is true if the protect configuration is set as your account default protect configuration.</p>
   * @public
   */
  AccountDefault: boolean | undefined;

  /**
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeProtectConfigurationsResult {
  /**
   * <p>An array of ProtectConfigurationInformation objects that contain the details for the request. </p>
   * @public
   */
  ProtectConfigurations?: ProtectConfigurationInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentCountryLaunchStatusRequest {
  /**
   * <p>The unique identifier of the RCS agent. You can use either the RcsAgentId or RcsAgentArn.</p>
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, to filter the results.</p>
   * @public
   */
  IsoCountryCodes?: string[] | undefined;

  /**
   * <p>An array of CountryLaunchStatusFilter objects to filter the results.</p>
   * @public
   */
  Filters?: CountryLaunchStatusFilter[] | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentCountryLaunchStatusResult {
  /**
   * <p>The unique identifier for the RCS agent.</p>
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the RCS agent.</p>
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * <p>An array of CountryLaunchStatusInformation objects that contain the per-country launch status details.</p>
   * @public
   */
  CountryLaunchStatus?: CountryLaunchStatusInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for an RCS agent that meets a specified criteria.</p>
 * @public
 */
export interface RcsAgentFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RcsAgentFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentsRequest {
  /**
   * <p>An array of unique identifiers for the RCS agents. This is an array of strings that can be either the RcsAgentId or RcsAgentArn.</p>
   * @public
   */
  RcsAgentIds?: string[] | undefined;

  /**
   * <p>Use <code>SELF</code> to filter the list of RCS agents to ones your account owns or use <code>SHARED</code> to filter on RCS agents shared with your account. The <code>Owner</code> and <code>RcsAgentIds</code> parameters can't be used at the same time.</p>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>An array of RcsAgentFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RcsAgentFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains details about the testing agent associated with an RCS agent.</p>
 * @public
 */
export interface TestingAgentInformation {
  /**
   * <p>The current status of the testing agent.</p>
   * @public
   */
  Status: TestingAgentStatus | undefined;

  /**
   * <p>The unique identifier for the testing agent.</p>
   * @public
   */
  TestingAgentId?: string | undefined;

  /**
   * <p>The unique identifier of the registration associated with the testing agent.</p>
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * <p>The information for an RCS agent in an Amazon Web Services account.</p>
 * @public
 */
export interface RcsAgentInformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the RCS agent.</p>
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
   * <p>When set to true the RCS agent can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the RCS agent.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
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
   * <p>When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The unique identifier of the pool associated with the RCS agent.</p>
   * @public
   */
  PoolId?: string | undefined;

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

  /**
   * <p>The testing agent information associated with the RCS agent.</p>
   * @public
   */
  TestingAgent?: TestingAgentInformation | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentsResult {
  /**
   * <p>An array of RcsAgentInformation objects that contain the details for the requested RCS agents.</p>
   * @public
   */
  RcsAgents?: RcsAgentInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering registration attachments that meets a specified criteria.</p>
 * @public
 */
export interface RegistrationAttachmentFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RegistrationAttachmentFilterName | undefined;

  /**
   * <p>An array of values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsRequest {
  /**
   * <p>The unique identifier of registration attachments to find. This is an array of <b>RegistrationAttachmentId</b>.</p>
   * @public
   */
  RegistrationAttachmentIds?: string[] | undefined;

  /**
   * <p>An array of RegistrationAttachmentFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationAttachmentFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides information on the specified registration attachments.</p>
 * @public
 */
export interface RegistrationAttachmentsInformation {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * <p>The status of the registration attachment. </p> <ul> <li> <p> <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p> </li> <li> <p> <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p> </li> <li> <p> <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p> </li> <li> <p> <code>DELETED</code> The attachment has been deleted..</p> </li> </ul>
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>A description of why the upload didn't successfully complete.</p>
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason | undefined;

  /**
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The URL to the document that's associated with the registration attachment.</p>
   * @public
   */
  AttachmentUrl?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsResult {
  /**
   * <p>An array of <b>RegistrationAttachments</b> objects that contain the details for the requested registration attachments. </p>
   * @public
   */
  RegistrationAttachments: RegistrationAttachmentsInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsRequest {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  SectionPath?: string | undefined;

  /**
   * <p>An array of paths to the registration form field.</p>
   * @public
   */
  FieldPaths?: string[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A description of each select option.</p>
 * @public
 */
export interface SelectOptionDescription {
  /**
   * <p>The value of the option.</p>
   * @public
   */
  Option: string | undefined;

  /**
   * <p>The title of the select option.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A description of the option meaning.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Provides help information on the registration field.</p>
 * @public
 */
export interface RegistrationFieldDisplayHints {
  /**
   * <p>The title of the display hint.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A short description of the display hint.</p>
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * <p>A full description of the display hint.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
   */
  DocumentationLink?: string | undefined;

  /**
   * <p>An array of SelectOptionDescription objects.</p>
   * @public
   */
  SelectOptionDescriptions?: SelectOptionDescription[] | undefined;

  /**
   * <p>The validation rules for the text field.</p>
   * @public
   */
  TextValidationDescription?: string | undefined;

  /**
   * <p>Example text of what the value of a field should contain.</p>
   * @public
   */
  ExampleTextValue?: string | undefined;
}

/**
 * <p>Validation rules for a select field.</p>
 * @public
 */
export interface SelectValidation {
  /**
   * <p>The minimum number of choices for the select.</p>
   * @public
   */
  MinChoices: number | undefined;

  /**
   * <p>The maximum number of choices for the select.</p>
   * @public
   */
  MaxChoices: number | undefined;

  /**
   * <p>An array of strings for the possible selection options. </p>
   * @public
   */
  Options: string[] | undefined;
}

/**
 * <p>Validation rules for a text field.</p>
 * @public
 */
export interface TextValidation {
  /**
   * <p>The minimum number of characters for the text field.</p>
   * @public
   */
  MinLength: number | undefined;

  /**
   * <p>The maximum number of characters for the text field.</p>
   * @public
   */
  MaxLength: number | undefined;

  /**
   * <p>The regular expression used to validate the text field.</p>
   * @public
   */
  Pattern: string | undefined;
}

/**
 * <p>Provides a description of the specified field.</p>
 * @public
 */
export interface RegistrationFieldDefinition {
  /**
   * <p>The section path of the field.</p>
   * @public
   */
  SectionPath: string | undefined;

  /**
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>The type of field.</p>
   * @public
   */
  FieldType: FieldType | undefined;

  /**
   * <p>Specifies if the field for the registration form is required, conditional or optional.</p>
   * @public
   */
  FieldRequirement: FieldRequirement | undefined;

  /**
   * <p>The validation rules for a select field.</p>
   * @public
   */
  SelectValidation?: SelectValidation | undefined;

  /**
   * <p>The validation rules for a text field.</p>
   * @public
   */
  TextValidation?: TextValidation | undefined;

  /**
   * <p>An array of RegistrationFieldDisplayHints objects for the field.</p>
   * @public
   */
  DisplayHints: RegistrationFieldDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsResult {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of RegistrationFieldDefinitions objects that contain the details for the requested fields. </p>
   * @public
   */
  RegistrationFieldDefinitions: RegistrationFieldDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  SectionPath?: string | undefined;

  /**
   * <p>An array of paths to the registration form field.</p>
   * @public
   */
  FieldPaths?: string[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides the values of the specified field.</p>
 * @public
 */
export interface RegistrationFieldValueInformation {
  /**
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>An array of values for the form field.</p>
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string | undefined;

  /**
   * <p>A description of why the registration was denied.</p>
   * @public
   */
  DeniedReason?: string | undefined;

  /**
   * <p>Generative AI feedback information provided for this specific field during the registration review process. This may include validation errors, suggestions for improvement, or additional requirements.</p>
   * @public
   */
  Feedback?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The current version of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>An array of RegistrationFieldValues objects that contain the values for the requested registration. </p>
   * @public
   */
  RegistrationFieldValues: RegistrationFieldValueInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering registrations that meets a specified criteria.</p>
 * @public
 */
export interface RegistrationFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RegistrationFilterName | undefined;

  /**
   * <p>An array of values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsRequest {
  /**
   * <p>An array of unique identifiers for each registration.</p>
   * @public
   */
  RegistrationIds?: string[] | undefined;

  /**
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides information about the requested registration.</p>
 * @public
 */
export interface RegistrationInformation {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The status of the registration.</p> <ul> <li> <p> <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p> </li> <li> <p> <code>CREATED</code>: Your registration is created but not submitted.</p> </li> <li> <p> <code>COMPLETE</code>: Your registration has been approved and your origination identity has been created.</p> </li> <li> <p> <code>DELETED</code>: The registration has been deleted.</p> </li> <li> <p> <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p> </li> </ul>
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The current version number of the registration.</p>
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * <p>The version number of the registration that was approved.</p>
   * @public
   */
  ApprovedVersionNumber?: number | undefined;

  /**
   * <p>The latest version number of the registration that was denied.</p>
   * @public
   */
  LatestDeniedVersionNumber?: number | undefined;

  /**
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsResult {
  /**
   * <p>An array of RegistrationInformation objects.</p>
   * @public
   */
  Registrations: RegistrationInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsRequest {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of paths for the registration form section.</p>
   * @public
   */
  SectionPaths?: string[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides help information on the registration section.</p>
 * @public
 */
export interface RegistrationSectionDisplayHints {
  /**
   * <p>The title of the display hint.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A short description of the display hint.</p>
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * <p>A full description of the display hint.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * <p>Provides information on the specified section definition.</p>
 * @public
 */
export interface RegistrationSectionDefinition {
  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  SectionPath: string | undefined;

  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  DisplayHints: RegistrationSectionDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsResult {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of RegistrationSectionDefinition objects.</p>
   * @public
   */
  RegistrationSectionDefinitions: RegistrationSectionDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering registration types that meets a specified criteria.</p>
 * @public
 */
export interface RegistrationTypeFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RegistrationTypeFilterName | undefined;

  /**
   * <p>An array of values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsRequest {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationTypes?: string[] | undefined;

  /**
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationTypeFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides help information on the registration type.</p>
 * @public
 */
export interface RegistrationTypeDisplayHints {
  /**
   * <p>The title of the display hint.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A short description of the display hint.</p>
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * <p>A full description of the display hint.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * <p>The processing rules for when a registration can be associated with an origination identity and disassociated from an origination identity.</p>
 * @public
 */
export interface SupportedAssociation {
  /**
   * <p>Defines the behavior of when an origination identity and registration can be associated with each other.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The association behavior.</p> <ul> <li> <p> <code>ASSOCIATE_BEFORE_SUBMIT</code> The origination identity has to be supplied when creating a registration.</p> </li> <li> <p> <code>ASSOCIATE_ON_APPROVAL</code> This applies to all sender ID registrations. The sender ID will be automatically provisioned once the registration is approved.</p> </li> <li> <p> <code>ASSOCIATE_AFTER_COMPLETE</code> This applies to phone number registrations when you must complete a registration first, then associate one or more phone numbers later. For example 10DLC campaigns and long codes. </p> </li> </ul>
   * @public
   */
  AssociationBehavior: RegistrationAssociationBehavior | undefined;

  /**
   * <p>The disassociation behavior.</p> <ul> <li> <p> <code>DISASSOCIATE_ALL_CLOSES_REGISTRATION</code> All origination identities must be disassociated from the registration before the registration can be closed.</p> </li> <li> <p> <code>DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION</code> All origination identities must be disassociated from the registration before the registration can be deleted.</p> </li> <li> <p> <code>DELETE_REGISTRATION_DISASSOCIATES</code> The registration can be deleted and all origination identities will be disasscoiated.</p> </li> </ul>
   * @public
   */
  DisassociationBehavior: RegistrationDisassociationBehavior | undefined;
}

/**
 * <p>Provides information on the supported registration type.</p>
 * @public
 */
export interface RegistrationTypeDefinition {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The supported association behavior for the registration type.</p>
   * @public
   */
  SupportedAssociations?: SupportedAssociation[] | undefined;

  /**
   * <p>Provides help information on the registration.</p>
   * @public
   */
  DisplayHints: RegistrationTypeDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsResult {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationTypeDefinitions: RegistrationTypeDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering registration versions that meets a specified criteria.</p>
 * @public
 */
export interface RegistrationVersionFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RegistrationVersionFilterName | undefined;

  /**
   * <p>An array of values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>An array of registration version numbers.</p>
   * @public
   */
  VersionNumbers?: number[] | undefined;

  /**
   * <p>An array of RegistrationVersionFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationVersionFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides the reason a registration was rejected.</p>
 * @public
 */
export interface RegistrationDeniedReasonInformation {
  /**
   * <p>The reason a registration was rejected.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>A short description of the rejection reason.</p>
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * <p>A long description of the rejection reason.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>The title of the document.</p>
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * <p>The link to the document.</p>
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * <p>Provides information about the specified version of the registration.</p>
 * @public
 */
export interface RegistrationVersionInformation {
  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The status of the registration.</p> <ul> <li> <p> <code>APPROVED</code>: Your registration has been approved.</p> </li> <li> <p> <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p> </li> <li> <p> <code>DENIED</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p> </li> <li> <p> <code>DRAFT</code>: The initial status of a registration version after it’s created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>REVOKED</code>: Your previously approved registration has been revoked.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted.</p> </li> </ul>
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;

  /**
   * <p>An array of RegistrationDeniedReasonInformation objects. </p>
   * @public
   */
  DeniedReasons?: RegistrationDeniedReasonInformation[] | undefined;

  /**
   * <p>Generative AI feedback information provided during the registration review process. This includes comments, suggestions, or additional requirements.</p>
   * @public
   */
  Feedback?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>An array of RegistrationVersions objects.</p>
   * @public
   */
  RegistrationVersions: RegistrationVersionInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for a sender ID that meets a specified criteria.</p>
 * @public
 */
export interface SenderIdFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: SenderIdFilterName | undefined;

  /**
   * <p>An array of values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p> The alphanumeric sender ID in a specific country that you want to describe. For more information on sender IDs see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/sender-id-request.html">Requesting sender IDs </a> in the <i>End User Messaging SMS User Guide</i>.</p>
 * @public
 */
export interface SenderIdAndCountry {
  /**
   * <p>The unique identifier of the sender.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode: string | undefined;
}

/**
 * @public
 */
export interface DescribeSenderIdsRequest {
  /**
   * <p>An array of SenderIdAndCountry objects to search for.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  SenderIds?: SenderIdAndCountry[] | undefined;

  /**
   * <p>An array of SenderIdFilter objects to filter the results.</p>
   * @public
   */
  Filters?: SenderIdFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use <code>SELF</code> to filter the list of Sender Ids to ones your account owns or use <code>SHARED</code> to filter on Sender Ids shared with your account. The <code>Owner</code> and <code>SenderIds</code> parameters can't be used at the same time. </p>
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * <p>The information for all SenderIds in an Amazon Web Services account.</p>
 * @public
 */
export interface SenderIdInformation {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * <p>The alphanumeric sender ID in a specific country that you'd like to describe.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * <p>The monthly leasing price, in US dollars.</p>
   * @public
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>True if the sender ID is registered.</p>
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
export interface DescribeSenderIdsResult {
  /**
   * <p>An array of SernderIdInformation objects that contain the details for the requested SenderIds.</p>
   * @public
   */
  SenderIds?: SenderIdInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the current monthly spend limits for sending voice and text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/awssupport-spend-threshold.html"> Requesting a spending quota increase </a> in the <i>End User Messaging SMS User Guide</i>. </p>
 * @public
 */
export interface SpendLimit {
  /**
   * <p>The name for the SpendLimit.</p>
   * @public
   */
  Name: SpendLimitName | undefined;

  /**
   * <p>The maximum amount of money, in US dollars, that you want to be able to spend sending messages each month. This value has to be less than or equal to the amount in <code>MaxLimit</code>. To use this custom limit, <code>Overridden</code> must be set to true.</p>
   * @public
   */
  EnforcedLimit: number | undefined;

  /**
   * <p> The maximum amount of money that you are able to spend to send messages each month, in US dollars.</p>
   * @public
   */
  MaxLimit: number | undefined;

  /**
   * <p>When set to <code>True</code>, the value that has been specified in the <code>EnforcedLimit</code> is used to determine the maximum amount in US dollars that can be spent to send messages each month, in US dollars.</p>
   * @public
   */
  Overridden: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsResult {
  /**
   * <p>An array of SpendLimit objects that contain the details for the requested spend limits.</p>
   * @public
   */
  SpendLimits?: SpendLimit[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering verified destination phone numbers that meets a specified criteria.</p>
 * @public
 */
export interface VerifiedDestinationNumberFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: VerifiedDestinationNumberFilterName | undefined;

  /**
   * <p>An array of values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersRequest {
  /**
   * <p>An array of VerifiedDestinationNumberid to retrieve.</p>
   * @public
   */
  VerifiedDestinationNumberIds?: string[] | undefined;

  /**
   * <p>An array of verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumbers?: string[] | undefined;

  /**
   * <p>An array of VerifiedDestinationNumberFilter objects to filter the results.</p>
   * @public
   */
  Filters?: VerifiedDestinationNumberFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides information about the requested verified destintion phone number.</p>
 * @public
 */
export interface VerifiedDestinationNumberInformation {
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
   * <p>The verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The status of the verified destination phone number.</p> <ul> <li> <p> <code>PENDING</code>: The phone number hasn't been verified yet.</p> </li> <li> <p> <code>VERIFIED</code>: The phone number is verified and can receive messages.</p> </li> </ul>
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * <p>The unique identifier of the RCS agent associated with the verified destination number.</p>
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersResult {
  /**
   * <p>An array of VerifiedDestinationNumberInformation objects</p>
   * @public
   */
  VerifiedDestinationNumbers: VerifiedDestinationNumberInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityRequest {
  /**
   * <p>The unique identifier for the pool to disassociate with the origination identity. This value can be either the PoolId or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use <a>DescribePhoneNumbers</a> find the values for PhoneNumberId and PhoneNumberArn, or use <a>DescribeSenderIds</a> to get the values for SenderId and SenderIdArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The PoolId of the pool no longer associated with the origination identity.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProtectConfigurationRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DiscardRegistrationVersionRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DiscardRegistrationVersionResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The status of the registration version.</p> <ul> <li> <p> <code>APPROVED</code>: Your registration has been approved.</p> </li> <li> <p> <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p> </li> <li> <p> <code>DENIED</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p> </li> <li> <p> <code>DRAFT</code>: The initial status of a registration version after it’s created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>REVOKED</code>: Your previously approved registration has been revoked.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted.</p> </li> </ul>
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface GetProtectConfigurationCountryRuleSetRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The capability type to return the CountryRuleSet for. Valid values are <code>SMS</code>, <code>VOICE</code>, or <code>MMS</code>.</p>
   * @public
   */
  NumberCapability: NumberCapability | undefined;
}

/**
 * <p>The types of statuses that can be used.</p>
 * @public
 */
export interface ProtectConfigurationCountryRuleSetInformation {
  /**
   * <p>The types of protection that can be used.</p>
   * @public
   */
  ProtectStatus: ProtectStatus | undefined;
}

/**
 * @public
 */
export interface GetProtectConfigurationCountryRuleSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The capability type associated with the returned ProtectConfigurationCountryRuleSetInformation objects.</p>
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * <p>A map of ProtectConfigurationCountryRuleSetInformation objects that contain the details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html">Supported countries and regions (SMS channel)</a> in the End User Messaging SMS User Guide.</p>
   * @public
   */
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The JSON formatted string that contains the resource-based policy attached to the End User Messaging SMS resource. </p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The time when the resource-based policy was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotifyCountriesRequest {
  /**
   * <p>An array of channels to filter the results by.</p>
   * @public
   */
  Channels?: NumberCapability[] | undefined;

  /**
   * <p>An array of use cases to filter the results by.</p>
   * @public
   */
  UseCases?: NotifyConfigurationUseCase[] | undefined;

  /**
   * <p>The tier to filter the results by.</p>
   * @public
   */
  Tier?: NotifyConfigurationTier | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The information for a country that supports notify messaging.</p>
 * @public
 */
export interface NotifyCountryInformation {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The name of the country.</p>
   * @public
   */
  CountryName: string | undefined;

  /**
   * <p>An array of supported channels for the country. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  SupportedChannels: NumberCapability[] | undefined;

  /**
   * <p>An array of supported use cases for the country.</p>
   * @public
   */
  SupportedUseCases: NotifyConfigurationUseCase[] | undefined;

  /**
   * <p>An array of supported tiers for the country.</p>
   * @public
   */
  SupportedTiers: NotifyConfigurationTier[] | undefined;

  /**
   * <p>Whether a customer-owned identity is required to send notify messages to this country.</p>
   * @public
   */
  CustomerOwnedIdentityRequired: boolean | undefined;
}

/**
 * @public
 */
export interface ListNotifyCountriesResult {
  /**
   * <p>An array of NotifyCountryInformation objects that contain the results.</p>
   * @public
   */
  NotifyCountries?: NotifyCountryInformation[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about origination identities associated with a pool that meets a specified criteria.</p>
 * @public
 */
export interface PoolOriginationIdentitiesFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: PoolOriginationIdentitiesFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesRequest {
  /**
   * <p>The unique identifier for the pool. This value can be either the PoolId or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>An array of PoolOriginationIdentitiesFilter objects to filter the results..</p>
   * @public
   */
  Filters?: PoolOriginationIdentitiesFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The metadata for an origination identity associated with a pool.</p>
 * @public
 */
export interface OriginationIdentityMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the origination identity.</p>
   * @public
   */
  OriginationIdentityArn: string | undefined;

  /**
   * <p>The unique identifier of the origination identity.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. This field is optional and may not be present for origination identity types that are not country-specific, such as RCS agents.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or both.</p>
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The unique PoolId of the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of any OriginationIdentityMetadata objects.</p>
   * @public
   */
  OriginationIdentities?: OriginationIdentityMetadata[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty then there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The information for a protect configuration rule set number override that meets a specified criteria.</p>
 * @public
 */
export interface ProtectConfigurationRuleSetNumberOverrideFilterItem {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: ProtectConfigurationRuleSetNumberOverrideFilterName | undefined;

  /**
   * <p>An array values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListProtectConfigurationRuleSetNumberOverridesRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>An array of ProtectConfigurationRuleSetNumberOverrideFilterItem objects to filter the results.</p>
   * @public
   */
  Filters?: ProtectConfigurationRuleSetNumberOverrideFilterItem[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides details on phone number rule overrides for a protect configuration.</p>
 * @public
 */
export interface ProtectConfigurationRuleSetNumberOverride {
  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The time when the rule was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The action for the rule to perform of either blocking or allowing messages to the destination phone number.</p>
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The time the rule will expire at. If <code>ExpirationTimestamp</code> is not set then the rule will not expire.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListProtectConfigurationRuleSetNumberOverridesResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>An array of RuleSetNumberOverrides objects.</p>
   * @public
   */
  RuleSetNumberOverrides?: ProtectConfigurationRuleSetNumberOverride[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter definition for filtering registrations that meets a specified criteria.</p>
 * @public
 */
export interface RegistrationAssociationFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   * @public
   */
  Name: RegistrationAssociationFilterName | undefined;

  /**
   * <p>An array of values to filter for.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>An array of RegistrationAssociationFilter to apply to the results that are returned.</p>
   * @public
   */
  Filters?: RegistrationAssociationFilter[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Metadata for the origination identity that is associated with the registration.</p>
 * @public
 */
export interface RegistrationAssociationMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The origination identity type.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The phone number associated with the registration in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a> action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of RegistrationAssociationMetadata objects.</p>
   * @public
   */
  RegistrationAssociations: RegistrationAssociationMetadata[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to query for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use <a>DescribePhoneNumbers</a> get the values for PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used to get the values for SenderId and SenderIdArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new keyword to add.</p>
   * @public
   */
  Keyword: string | undefined;

  /**
   * <p>The message associated with the keyword.</p>
   * @public
   */
  KeywordMessage: string | undefined;

  /**
   * <p>The action to perform for the new keyword when it is received.</p> <ul> <li> <p>AUTOMATIC_RESPONSE: A message is sent to the recipient.</p> </li> <li> <p>OPT_OUT: Keeps the recipient from receiving future messages.</p> </li> <li> <p>OPT_IN: The recipient wants to receive future messages.</p> </li> </ul>
   * @public
   */
  KeywordAction?: KeywordAction | undefined;
}

/**
 * @public
 */
export interface PutKeywordResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The keyword that was added.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>The message associated with the keyword.</p>
   * @public
   */
  KeywordMessage?: string | undefined;

  /**
   * <p>The action to perform when the keyword is used.</p>
   * @public
   */
  KeywordAction?: KeywordAction | undefined;
}

/**
 * @public
 */
export interface PutMessageFeedbackRequest {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>Set the message feedback to be either <code>RECEIVED</code> or <code>FAILED</code>.</p>
   * @public
   */
  MessageFeedbackStatus: MessageFeedbackStatus | undefined;
}

/**
 * @public
 */
export interface PutMessageFeedbackResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The current status of the message.</p>
   * @public
   */
  MessageFeedbackStatus: MessageFeedbackStatus | undefined;
}

/**
 * @public
 */
export interface PutOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to add the phone number to.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>The phone number to add to the OptOutList in E.164 format.</p>
   * @public
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface PutOptedOutNumberResult {
  /**
   * <p>The OptOutListArn that the phone number was removed from.</p>
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>The phone number that was added to the OptOutList.</p>
   * @public
   */
  OptedOutNumber?: string | undefined;

  /**
   * <p>The time that the phone number was added to the OptOutList, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  OptedOutTimestamp?: Date | undefined;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed. </p>
   * @public
   */
  EndUserOptedOut?: boolean | undefined;
}

/**
 * @public
 */
export interface PutProtectConfigurationRuleSetNumberOverrideRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The action for the rule to either block or allow messages to the destination phone number.</p>
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * <p>The time the rule will expire at. If <code>ExpirationTimestamp</code> is not set then the rule does not expire.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutProtectConfigurationRuleSetNumberOverrideResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The time when the rule was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The action for the rule to take.</p>
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The time the rule will expire at.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>An array of values for the form field.</p>
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>An array of values for the form field.</p>
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string | undefined;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource to attach the resource-based policy to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON formatted resource-based policy to attach.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The JSON formatted Resource Policy.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The time when the resource-based policy was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * <p>The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use <a>DescribePhoneNumbers</a> to get the values for PhoneNumberId and PhoneNumberArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface ReleasePhoneNumberResult {
  /**
   * <p>The PhoneNumberArn of the phone number that was released.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * <p>The PhoneNumberId of the phone number that was released.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The phone number that was released.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The message type that was associated with the phone number.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>Specifies if the number could be used for text messages, voice, or both.</p>
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * <p>The type of number that was released.</p>
   * @public
   */
  NumberType?: NumberType | undefined;

  /**
   * <p>The monthly price of the phone number, in US dollars.</p>
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * <p>By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList that was associated with the phone number.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ReleaseSenderIdRequest {
  /**
   * <p>The sender ID to release.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;
}

/**
 * @public
 */
export interface ReleaseSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * <p>The sender ID that was released.</p>
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
   * <p>True if the sender ID is registered.</p>
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
export interface RequestPhoneNumberRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are <code>TRANSACTIONAL</code> for messages that are critical or time-sensitive and <code>PROMOTIONAL</code> for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages, or both. </p>
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * <p>The type of phone number to request.</p> <p>When you request a <code>SIMULATOR</code> phone number, you must set <b>MessageType</b> as <code>TRANSACTIONAL</code>. </p>
   * @public
   */
  NumberType: RequestableNumberType | undefined;

  /**
   * <p>The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>The pool to associated with the phone number. You can use the PoolId or PoolArn. </p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Use this field to attach your phone number for an external registration process.</p>
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the international sending of phone number is Enabled. </p>
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the requested phone number. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RequestPhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * <p>The unique identifier of the new phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The new phone number that was requested.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages or both. </p>
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * <p>The type of number that was released.</p>
   * @public
   */
  NumberType?: RequestableNumberType | undefined;

  /**
   * <p>The monthly price, in US dollars, to lease the phone number.</p>
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * <p>The ARN used to identify the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string | undefined;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string | undefined;

  /**
   * <p>By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList that is associated with the requested phone number.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the international sending of phone number is Enabled. </p>
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted. </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The unique identifier of the pool associated with the phone number </p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the phone number.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface RequestSenderIdRequest {
  /**
   * <p>The sender ID string to request. The sender ID can be 1-11 alphanumeric characters including letters (A-Z, a-z), numbers (0-9), or hyphens (-). The sender ID must contain at least one letter and cannot start or end with a hyphen.</p>
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
  MessageTypes?: MessageType[] | undefined;

  /**
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the sender ID.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RequestSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * <p>The sender ID that was requested.</p>
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
   * <p>True if the sender ID is registered.</p>
   * @public
   */
  Registered: boolean | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the sender ID.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeRequest {
  /**
   * <p>The unique identifier for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * <p>Choose to send the verification code as an SMS or voice message.</p>
   * @public
   */
  VerificationChannel: VerificationChannel | undefined;

  /**
   * <p>Choose the language to use for the message.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>. </p>
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>> | undefined;
}

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId: string | undefined;
}

/**
 * @public
 */
export interface SendMediaMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The text body of the message.</p>
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * <p>An array of URLs to each media file to send. </p> <p>The media files have to be stored in an S3 bucket. Supported media file formats are listed in <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/mms-limitations-character.html">MMS file types, size and character limits</a>. For more information on creating an S3 bucket and managing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">Creating a bucket</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html">Uploading objects</a> in the <i>Amazon S3 User Guide</i>, and <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/send-mms-message.html#send-mms-message-bucket">Setting up an Amazon S3 bucket for MMS files</a> in the <i>Amazon Web Services End User Messaging SMS User Guide</i>.</p>
   * @public
   */
  MediaUrls?: string[] | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each MMS message.</p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>How long the media message is valid for. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The unique identifier of the protect configuration to use.</p>
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendMediaMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyTextMessageRequest {
  /**
   * <p>The unique identifier of the notify configuration to use for sending the message. This can be either the NotifyConfigurationId or NotifyConfigurationArn.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The unique identifier of the template to use for the message.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>A map of template variable names and their values. All variable values are passed as strings regardless of the declared variable type. For example, pass <code>INTEGER</code> values as <code>"42"</code> and <code>BOOLEAN</code> values as <code>"true"</code> or <code>"false"</code>.</p>
   * @public
   */
  TemplateVariables: Record<string, string> | undefined;

  /**
   * <p>How long the text message is valid for, in seconds. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendNotifyTextMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The unique identifier of the template used for the message.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The message body after template variable substitution has been applied.</p>
   * @public
   */
  ResolvedMessageBody?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyVoiceMessageRequest {
  /**
   * <p>The unique identifier of the notify configuration to use for sending the message. This can be either the NotifyConfigurationId or NotifyConfigurationArn.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The unique identifier of the template to use for the message.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>A map of template variable names and their values. All variable values are passed as strings regardless of the declared variable type. For example, pass <code>INTEGER</code> values as <code>"42"</code> and <code>BOOLEAN</code> values as <code>"true"</code> or <code>"false"</code>.</p>
   * @public
   */
  TemplateVariables: Record<string, string> | undefined;

  /**
   * <p>The voice ID to use for the voice message.</p>
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * <p>How long the voice message is valid for, in seconds. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendNotifyVoiceMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The unique identifier of the template used for the message.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The message body after template variable substitution has been applied.</p>
   * @public
   */
  ResolvedMessageBody?: string | undefined;
}

/**
 * <p>Configuration for SMS or MMS fallback when RCS delivery fails or the TimeToLive expires without delivery confirmation.</p>
 * @public
 */
export interface RcsFallbackConfiguration {
  /**
   * <p>The fallback channel to use when RCS delivery fails. Valid values are SMS and MMS. SMS and MMS are mutually exclusive.</p>
   * @public
   */
  Channel: RcsFallbackChannel | undefined;

  /**
   * <p>The text body of the fallback message. Required for SMS fallback. For MMS fallback, at least one of MessageBody or MediaUrls must be provided.</p>
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * <p>An array of S3 URIs to media files for MMS fallback. Only valid when Channel is MMS.</p>
   * @public
   */
  MediaUrls?: string[] | undefined;

  /**
   * <p>The origination identity to use for the fallback message. This can be a PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, or SenderIdArn. Pool IDs and pool ARNs are not accepted. If not specified and the original message was sent via a pool, the service selects a suitable number from the pool.</p>
   * @public
   */
  OriginationIdentity?: string | undefined;
}

/**
 * <p>The media content of a carousel card. Display height is restricted to SHORT or MEDIUM (TALL is not supported in carousels).</p>
 * @public
 */
export interface RcsCarouselCardMedia {
  /**
   * <p>The S3 URI of the media file for the carousel card. Maximum 2000 characters.</p>
   * @public
   */
  FileUrl: string | undefined;

  /**
   * <p>The S3 URI of an optional thumbnail image for the carousel card media. Maximum 2000 characters.</p>
   * @public
   */
  ThumbnailUrl?: string | undefined;

  /**
   * <p>The display height of the media in the carousel card. Valid values are SHORT and MEDIUM.</p>
   * @public
   */
  Height?: string | undefined;
}

/**
 * <p>A suggested action that creates a calendar event on the recipient's device.</p>
 * @public
 */
export interface RcsCreateCalendarEventAction {
  /**
   * <p>The display text of the action. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;

  /**
   * <p>The title of the calendar event. Maximum 100 characters.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The start time of the calendar event in ISO 8601 format.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the calendar event in ISO 8601 format.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An optional description for the calendar event. Maximum 500 characters.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>A suggested action that initiates a phone call to a specified number when tapped by the recipient.</p>
 * @public
 */
export interface RcsDialPhoneAction {
  /**
   * <p>The display text of the action. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;

  /**
   * <p>The phone number to dial in E.164 format.</p>
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * <p>A suggested action that opens a URL in the recipient's browser or an in-app webview.</p>
 * @public
 */
export interface RcsOpenUrlAction {
  /**
   * <p>The display text of the action. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;

  /**
   * <p>The URL to open. Must start with https://. Maximum 2048 characters.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>How to open the URL. BROWSER opens in the device's default browser. WEBVIEW opens in an in-app webview.</p>
   * @public
   */
  Application?: string | undefined;

  /**
   * <p>The display mode of the webview. Valid values are FULL, HALF, and TALL. Only applicable when Application is WEBVIEW.</p>
   * @public
   */
  WebviewViewMode?: string | undefined;
}

/**
 * <p>A suggested reply action that sends predefined text and postback data when tapped by the recipient.</p>
 * @public
 */
export interface RcsReplyAction {
  /**
   * <p>The display text of the suggested reply. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this reply. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;
}

/**
 * <p>A suggested action that requests the recipient's current location.</p>
 * @public
 */
export interface RcsRequestLocationAction {
  /**
   * <p>The display text of the action. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;
}

/**
 * <p>A suggested action that shows a location on a map when tapped by the recipient.</p>
 * @public
 */
export interface RcsShowLocationAction {
  /**
   * <p>The display text of the action. Maximum 25 characters.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.</p>
   * @public
   */
  PostbackData: string | undefined;

  /**
   * <p>The latitude of the location. Valid values are -90 to 90.</p>
   * @public
   */
  Latitude: number | undefined;

  /**
   * <p>The longitude of the location. Valid values are -180 to 180.</p>
   * @public
   */
  Longitude: number | undefined;

  /**
   * <p>An optional label for the location pin. Maximum 100 characters.</p>
   * @public
   */
  Label?: string | undefined;
}

/**
 * <p>A suggested action displayed to the RCS message recipient. Can be a reply, open URL, dial phone, show location, request location, or create calendar event.</p>
 * @public
 */
export type RcsSuggestedAction =
  | RcsSuggestedAction.CreateCalendarEventMember
  | RcsSuggestedAction.DialPhoneMember
  | RcsSuggestedAction.OpenUrlMember
  | RcsSuggestedAction.ReplyMember
  | RcsSuggestedAction.RequestLocationMember
  | RcsSuggestedAction.ShowLocationMember
  | RcsSuggestedAction.$UnknownMember;

/**
 * @public
 */
export namespace RcsSuggestedAction {
  /**
   * <p>A suggested reply that sends predefined text and postback data when tapped.</p>
   * @public
   */
  export interface ReplyMember {
    Reply: RcsReplyAction;
    OpenUrl?: never;
    DialPhone?: never;
    ShowLocation?: never;
    RequestLocation?: never;
    CreateCalendarEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A suggested action that opens a URL in the user's browser or a webview.</p>
   * @public
   */
  export interface OpenUrlMember {
    Reply?: never;
    OpenUrl: RcsOpenUrlAction;
    DialPhone?: never;
    ShowLocation?: never;
    RequestLocation?: never;
    CreateCalendarEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A suggested action that initiates a phone call to the specified number.</p>
   * @public
   */
  export interface DialPhoneMember {
    Reply?: never;
    OpenUrl?: never;
    DialPhone: RcsDialPhoneAction;
    ShowLocation?: never;
    RequestLocation?: never;
    CreateCalendarEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A suggested action that shows a location on a map.</p>
   * @public
   */
  export interface ShowLocationMember {
    Reply?: never;
    OpenUrl?: never;
    DialPhone?: never;
    ShowLocation: RcsShowLocationAction;
    RequestLocation?: never;
    CreateCalendarEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A suggested action that requests the user's current location.</p>
   * @public
   */
  export interface RequestLocationMember {
    Reply?: never;
    OpenUrl?: never;
    DialPhone?: never;
    ShowLocation?: never;
    RequestLocation: RcsRequestLocationAction;
    CreateCalendarEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A suggested action that creates a calendar event on the user's device.</p>
   * @public
   */
  export interface CreateCalendarEventMember {
    Reply?: never;
    OpenUrl?: never;
    DialPhone?: never;
    ShowLocation?: never;
    RequestLocation?: never;
    CreateCalendarEvent: RcsCreateCalendarEventAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Reply?: never;
    OpenUrl?: never;
    DialPhone?: never;
    ShowLocation?: never;
    RequestLocation?: never;
    CreateCalendarEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Reply: (value: RcsReplyAction) => T;
    OpenUrl: (value: RcsOpenUrlAction) => T;
    DialPhone: (value: RcsDialPhoneAction) => T;
    ShowLocation: (value: RcsShowLocationAction) => T;
    RequestLocation: (value: RcsRequestLocationAction) => T;
    CreateCalendarEvent: (value: RcsCreateCalendarEventAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The content of a carousel card, including title, description, media, and card-level suggested actions. Media height is restricted to SHORT or MEDIUM.</p>
 * @public
 */
export interface RcsCarouselCardContent {
  /**
   * <p>The title of the carousel card. Maximum 200 characters.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description text of the carousel card. Maximum 2000 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The media content of the carousel card. Media height is restricted to SHORT or MEDIUM (TALL is not supported in carousels).</p>
   * @public
   */
  Media?: RcsCarouselCardMedia | undefined;

  /**
   * <p>Card-level suggested actions for this carousel card. Maximum 4 suggestions per card.</p>
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * <p>A carousel of 2 to 10 scrollable rich cards.</p>
 * @public
 */
export interface RcsCarousel {
  /**
   * <p>The width of cards in the carousel. Valid values are SMALL and MEDIUM.</p>
   * @public
   */
  CardWidth: string | undefined;

  /**
   * <p>The list of cards in the carousel. Minimum 2, maximum 10 cards.</p>
   * @public
   */
  CardContents: RcsCarouselCardContent[] | undefined;
}

/**
 * <p>A file message containing a media file (image, video, audio, or PDF) with an optional thumbnail.</p>
 * @public
 */
export interface RcsFileMessage {
  /**
   * <p>The S3 URI of the media file to send, in the format <code>s3://bucket-name/key</code>. The service downloads the file from your S3 bucket, rehosts it, and generates a presigned URL for the aggregator. Maximum 2000 characters.</p>
   * @public
   */
  FileUrl: string | undefined;

  /**
   * <p>The S3 URI of an optional thumbnail image for the media file, in the format <code>s3://bucket-name/key</code>. Maximum 2000 characters.</p>
   * @public
   */
  ThumbnailUrl?: string | undefined;
}

/**
 * <p>The media content of a rich card, including the file URL, optional thumbnail, and display height.</p>
 * @public
 */
export interface RcsCardMedia {
  /**
   * <p>The S3 URI of the media file for the card, in the format <code>s3://bucket-name/key</code>. Maximum 2000 characters.</p>
   * @public
   */
  FileUrl: string | undefined;

  /**
   * <p>The S3 URI of an optional thumbnail image for the card media. Maximum 2000 characters.</p>
   * @public
   */
  ThumbnailUrl?: string | undefined;

  /**
   * <p>The display height of the media in the card. Valid values are SHORT, MEDIUM, and TALL.</p>
   * @public
   */
  Height?: string | undefined;
}

/**
 * <p>The content of a rich card, including title, description, media, and card-level suggested actions.</p>
 * @public
 */
export interface RcsCardContent {
  /**
   * <p>The title of the card. Maximum 200 characters.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description text of the card. Maximum 2000 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The media content of the card, including the file URL, optional thumbnail, and display height.</p>
   * @public
   */
  Media?: RcsCardMedia | undefined;

  /**
   * <p>Card-level suggested actions. Maximum 4 suggestions per card.</p>
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * <p>A standalone rich card with media, title, description, and suggested actions.</p>
 * @public
 */
export interface RcsStandaloneCard {
  /**
   * <p>The orientation of the rich card. Valid values are HORIZONTAL and VERTICAL.</p>
   * @public
   */
  CardOrientation: string | undefined;

  /**
   * <p>The alignment of the thumbnail image in a horizontal card. Valid values are LEFT and RIGHT. Only applicable when CardOrientation is HORIZONTAL.</p>
   * @public
   */
  ThumbnailImageAlignment?: string | undefined;

  /**
   * <p>The content of the rich card, including title, description, media, and card-level suggested actions.</p>
   * @public
   */
  CardContent: RcsCardContent | undefined;
}

/**
 * <p>A plain text RCS message body.</p>
 * @public
 */
export interface RcsTextMessage {
  /**
   * <p>The text body of the RCS message. Maximum 3072 characters.</p>
   * @public
   */
  Body: string | undefined;
}

/**
 * <p>The message body of an RCS message. Exactly one content type must be specified.</p>
 * @public
 */
export type RcsContent =
  | RcsContent.CarouselMember
  | RcsContent.FileMessageMember
  | RcsContent.RichCardMember
  | RcsContent.TextMessageMember
  | RcsContent.$UnknownMember;

/**
 * @public
 */
export namespace RcsContent {
  /**
   * <p>A plain text RCS message.</p>
   * @public
   */
  export interface TextMessageMember {
    TextMessage: RcsTextMessage;
    FileMessage?: never;
    RichCard?: never;
    Carousel?: never;
    $unknown?: never;
  }

  /**
   * <p>A file message containing a media file (image, video, audio, or PDF) with an optional thumbnail.</p>
   * @public
   */
  export interface FileMessageMember {
    TextMessage?: never;
    FileMessage: RcsFileMessage;
    RichCard?: never;
    Carousel?: never;
    $unknown?: never;
  }

  /**
   * <p>A standalone rich card with media, title, description, and suggested actions.</p>
   * @public
   */
  export interface RichCardMember {
    TextMessage?: never;
    FileMessage?: never;
    RichCard: RcsStandaloneCard;
    Carousel?: never;
    $unknown?: never;
  }

  /**
   * <p>A carousel of 2 to 10 scrollable cards, each with media, title, description, and suggested actions.</p>
   * @public
   */
  export interface CarouselMember {
    TextMessage?: never;
    FileMessage?: never;
    RichCard?: never;
    Carousel: RcsCarousel;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TextMessage?: never;
    FileMessage?: never;
    RichCard?: never;
    Carousel?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TextMessage: (value: RcsTextMessage) => T;
    FileMessage: (value: RcsFileMessage) => T;
    RichCard: (value: RcsStandaloneCard) => T;
    Carousel: (value: RcsCarousel) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The content of an RCS message, containing the message body (text, file, rich card, or carousel) and optional message-level suggested actions.</p>
 * @public
 */
export interface RcsMessageContent {
  /**
   * <p>The content of the RCS message. Exactly one content type must be specified: TextMessage, FileMessage, RichCard, or Carousel.</p>
   * @public
   */
  Content: RcsContent | undefined;

  /**
   * <p>Message-level suggested actions displayed to the recipient. Maximum 11 suggestions per message.</p>
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * @public
 */
export interface SendRcsMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity of the message. This can be either the RcsAgentId, RcsAgentArn, PoolId, or PoolArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The content of the RCS message. Contains the message content (text, file, rich card, or carousel) and optional message-level suggested actions.</p>
   * @public
   */
  RcsMessageContent?: RcsMessageContent | undefined;

  /**
   * <p>The duration in seconds that the RCS message is valid for delivery. If the message cannot be delivered within this duration, it is considered expired. Valid values are 1 to 172800 (48 hours). If a FallbackConfiguration is provided, the fallback is triggered when the duration expires without delivery confirmation.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>The traffic type of the RCS message. Valid values are AUTHENTICATION, TRANSACTION, PROMOTION, SERVICE_REQUEST, and ACKNOWLEDGEMENT. This field is reserved for future use.</p>
   * @public
   */
  MessageTrafficType?: string | undefined;

  /**
   * <p>Configuration for SMS or MMS fallback when RCS delivery fails. If provided, the service sends a fallback message via the specified channel when the RCS message fails or the TimeToLive expires.</p>
   * @public
   */
  FallbackConfiguration?: RcsFallbackConfiguration | undefined;

  /**
   * <p>The unique identifier of the protect configuration to use.</p>
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each RCS message.</p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendRcsMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendTextMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, RcsAgentId, RcsAgentArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * <p>The body of the text message.</p>
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * <p>The type of message. Valid values are for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>When you register a short code in the US, you must specify a program name. If you don’t have a US short code, omit this attribute.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each text message. If the calculated amount to send the text message is greater than <code>MaxPrice</code>, the message is not sent and an error is returned.</p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>How long the text message is valid for, in seconds. By default this is 72 hours. If the messages isn't handed off before the TTL expires we stop attempting to hand off the message and return <code>TTL_EXPIRED</code> event.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>. </p> <ul> <li> <p> <code>IN_ENTITY_ID</code> The entity ID or Principal Entity (PE) ID that you received after completing the sender ID registration process.</p> </li> <li> <p> <code>IN_TEMPLATE_ID</code> The template ID that you received after completing the sender ID registration process.</p> <important> <p>Make sure that the Template ID that you specify matches your message template exactly. If your message doesn't match the template that you provided during the registration process, the mobile carriers might reject your message.</p> </important> </li> </ul>
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>> | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient. You are not charged for using <code>DryRun</code>.</p> <p>The Message Parts per Second (MPS) limit when using <code>DryRun</code> is five. If your origination identity has a lower MPS limit then the lower MPS limit is used. For more information about MPS limits, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>End User Messaging SMS User Guide</i>..</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendTextMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendVoiceMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity to use for the voice call. This can be the PhoneNumber, PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The text to convert to a voice message.</p>
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * <p>Specifies if the MessageBody field contains text or <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">speech synthesis markup language (SSML)</a>.</p> <ul> <li> <p>TEXT: This is the default value. When used the maximum character limit is 3000.</p> </li> <li> <p>SSML: When used the maximum character limit is 6000 including SSML tagging.</p> </li> </ul>
   * @public
   */
  MessageBodyTextType?: VoiceMessageBodyTextType | undefined;

  /**
   * <p>The voice for the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly</a> service to use. By default this is set to "MATTHEW".</p>
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The maximum amount to spend per voice message, in US dollars.</p>
   * @public
   */
  MaxPricePerMinute?: string | undefined;

  /**
   * <p>How long the voice message is valid for. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event destination.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end recipient.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * <p>Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using <a>PutMessageFeedback</a>.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendVoiceMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SetAccountDefaultProtectConfigurationRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface SetAccountDefaultProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the account default protect configuration.</p>
   * @public
   */
  DefaultProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier of the account default protect configuration.</p>
   * @public
   */
  DefaultProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageFeedbackEnabledRequest {
  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>Set to true to enable message feedback.</p>
   * @public
   */
  MessageFeedbackEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageFeedbackEnabledResult {
  /**
   * <p>The arn of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>True if message feedback is enabled.</p>
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeRequest {
  /**
   * <p>The configuration set to update with a new default message type. This field can be the ConsigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set that was updated.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The new default message type of the configuration set.</p>
   * @public
   */
  MessageType?: MessageType | undefined;
}

/**
 * @public
 */
export interface SetDefaultSenderIdRequest {
  /**
   * <p>The configuration set to updated with a new default SenderId. This field can be the ConsigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The current sender ID for the configuration set. When sending a text message to a destination country which supports SenderIds, the default sender ID on the configuration set specified on <a>SendTextMessage</a> will be used if no dedicated origination phone numbers or registered SenderIds are available in your account, instead of a generic sender ID, such as 'NOTICE'.</p>
   * @public
   */
  SenderId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set that was updated.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>The default sender ID to set for the ConfigurationSet.</p>
   * @public
   */
  SenderId?: string | undefined;
}

/**
 * @public
 */
export interface SetMediaMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on text messages.</p>
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetMediaMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on sending text messages.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetNotifyMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on notify messages.</p>
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetNotifyMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetRcsMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on RCS message spending.</p>
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetRcsMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on RCS message spending.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on text messages.</p>
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on sending text messages.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on voice messages.</p>
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on sending voice messages.</p>
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionRequest {
  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>Set to true to request AWS review of the registration. When enabled, AWS will perform additional validation and review of the registration submission before processing.</p>
   * @public
   */
  AwsReview?: boolean | undefined;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The version number of the registration.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The status of the registration version.</p> <ul> <li> <p> <code>APPROVED</code>: Your registration has been approved.</p> </li> <li> <p> <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p> </li> <li> <p> <code>DENIED</code>: You must fix your registration and resubmit it.</p> </li> <li> <p> <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p> </li> <li> <p> <code>DRAFT</code>: The initial status of a registration version after it’s created.</p> </li> <li> <p> <code>REQUIRES_AUTHENTICATION</code>: You need to complete email authentication.</p> </li> <li> <p> <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p> </li> <li> <p> <code>REVOKED</code>: Your previously approved registration has been revoked.</p> </li> <li> <p> <code>SUBMITTED</code>: Your registration has been submitted.</p> </li> </ul>
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;

  /**
   * <p>Indicates whether AWS review was requested for this registration submission.</p>
   * @public
   */
  AwsReview: boolean | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag key values to unassociate with the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateEventDestinationRequest {
  /**
   * <p>The configuration set to update with the new event destination. Valid values for this can be the ConfigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name to use for the event destination.</p>
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * <p>When set to true logging is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>An array of event types that determine which events to log.</p> <note> <p>The <code>TEXT_SENT</code> event type is not supported.</p> </note>
   * @public
   */
  MatchingEventTypes?: EventType[] | undefined;

  /**
   * <p>An object that contains information about an event destination that sends data to CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * <p>An object that contains information about an event destination that sends data to Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * @public
 */
export interface UpdateEventDestinationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.</p>
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * <p>An EventDestination object containing the details of where events will be logged. </p>
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyConfigurationRequest {
  /**
   * <p>The identifier of the notify configuration to update. The NotifyConfigurationId can be found using the <a>DescribeNotifyConfigurations</a> operation.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier. Pass the special value <code>UNSET_DEFAULT_TEMPLATE</code> to clear the current default template from the notify configuration.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The pool identifier or Amazon Resource Name (ARN) to associate with the notify configuration. Pass the special value <code>UNSET_DEFAULT_POOL_FOR_NOTIFY</code> to clear the current default pool from the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels to enable for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels?: NumberCapability[] | undefined;

  /**
   * <p>When set to true the notify configuration can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the notify configuration.</p>
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * <p>The display name associated with the notify configuration.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The use case for the notify configuration.</p>
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * <p>The default template identifier associated with the notify configuration.</p>
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * <p>The identifier of the pool associated with the notify configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</p>
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * <p>An array of channels enabled for the notify configuration. Supported values include <code>SMS</code> and <code>VOICE</code>.</p>
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * <p>The tier of the notify configuration.</p>
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * <p>The tier upgrade status of the notify configuration.</p>
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * <p>The current status of the notify configuration.</p>
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * <p>The reason the notify configuration was rejected, if applicable.</p>
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the notify configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>The unique identifier of the phone number. Valid values for this field can be either the PhoneNumberId or PhoneNumberArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * <p>By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The OptOutList to add the phone number to. You can use either the opt out list name or the opt out list ARN.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true the international sending of phone number is Enabled. </p>
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted. </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * <p>The unique identifier of the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The phone number that was updated.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. </p>
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>Specifies if the number could be used for text messages, voice or both.</p>
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * <p>The type of number that was requested.</p>
   * @public
   */
  NumberType?: NumberType | undefined;

  /**
   * <p>The monthly leasing price of the phone number, in US dollars.</p>
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * <p>This is true if self managed opt-out are enabled.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>When set to true the international sending of phone number is Enabled.</p>
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePoolRequest {
  /**
   * <p>The unique identifier of the pool to update. Valid values are either the PoolId or PoolArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * <p>By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The OptOutList to associate with the pool. Valid values are either OptOutListName or OptOutListArn.</p> <important> <p>If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).</p> </important>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePoolResult {
  /**
   * <p>The ARN of the pool.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The unique identifier of the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The current status of the pool update request.</p>
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * <p>The type of message for the pool to use.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * <p>When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The time when the protect configuration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>This is true if the protect configuration is set as your account default protect configuration.</p>
   * @public
   */
  AccountDefault: boolean | undefined;

  /**
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false. </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationCountryRuleSetRequest {
  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The number capability to apply the CountryRuleSetUpdates updates to.</p>
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * <p>A map of ProtectConfigurationCountryRuleSetInformation objects that contain the details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html">Supported countries and regions (SMS channel)</a> in the End User Messaging SMS User Guide.</p> <p>For example, to set the United States as allowed and Canada as blocked, the <code>CountryRuleSetUpdates</code> would be formatted as: <code>"CountryRuleSetUpdates": \{ "US" : \{ "ProtectStatus": "ALLOW" \} "CA" : \{ "ProtectStatus": "BLOCK" \} \}</code> </p>
   * @public
   */
  CountryRuleSetUpdates: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

/**
 * @public
 */
export interface UpdateProtectConfigurationCountryRuleSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the protect configuration.</p>
   * @public
   */
  ProtectConfigurationArn: string | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * <p>The number capability that was updated</p>
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * <p>An array of ProtectConfigurationCountryRuleSetInformation containing the rules for the NumberCapability.</p>
   * @public
   */
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

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

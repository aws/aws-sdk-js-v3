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
  PreferenceType,
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
  SearchableNumberType,
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
 * Displays the attributes associated with a single Amazon Web Services account.
 *
 * @public
 */
export interface AccountAttribute {
  /**
   * The name of the account attribute.
   *
   * @public
   */
  Name: AccountAttributeName | undefined;

  /**
   * The value associated with the account attribute name.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The current resource quotas associated with an Amazon Web Services account.
 *
 * @public
 */
export interface AccountLimit {
  /**
   * The name of the attribute to apply the account limit to.
   *
   * @public
   */
  Name: AccountLimitName | undefined;

  /**
   * The current amount that has been spent, in US dollars.
   *
   * @public
   */
  Used: number | undefined;

  /**
   * The Amazon Web Services set limit for that resource type, in US dollars.
   *
   * @public
   */
  Max: number | undefined;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityRequest {
  /**
   * The pool to update with the new Identity. This value can be either the PoolId or PoolArn, and you can find these values using [DescribePools](https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html).
   *
   * > **Important:** If you are using a shared End User Messaging SMS; resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn, while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the origination identity. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityResult {
  /**
   * The Amazon Resource Name (ARN) of the pool that is now associated with the origination identity.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The PoolId of the pool that is now associated with the origination identity.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The PhoneNumberArn or SenderIdArn of the origination identity.
   *
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * The PhoneNumberId or SenderId of the origination identity.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;
}

/**
 * The field associated with the validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The message associated with the validation exception with information to help determine its cause.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociateProtectConfigurationRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The name of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface AssociateProtectConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * The name of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

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
}

/**
 * @public
 */
export interface CarrierLookupRequest {
  /**
   * The phone number that you want to retrieve information about. You can provide the phone number in various formats including special characters such as parentheses, brackets, spaces, hyphens, periods, and commas. The service automatically converts the input to E164 format for processing.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * Specifies whether the service cleanses the phone number that you provide. When set to `true`, the service normalizes the phone number according to the destination country's national numbering plan and dialing rules. The service returns the cleansed number in E.164 format in the `E164PhoneNumber` field and returns the number that you provided in the `OriginalPhoneNumber` field.
   *
   * @public
   */
  EnableCleansing?: boolean | undefined;
}

/**
 * @public
 */
export interface CarrierLookupResult {
  /**
   * The phone number in E164 format, sanitized from the original input by removing any formatting characters.
   *
   * @public
   */
  E164PhoneNumber: string | undefined;

  /**
   * The country or region numeric dialing code for the phone number.
   *
   * @public
   */
  DialingCountryCode?: string | undefined;

  /**
   * The two-character country or region code, in ISO 3166-1 alpha-2 format, for the phone number.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The name of the country or region for the phone number.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The phone number's mobile country code, for mobile phone number types
   *
   * @public
   */
  MCC?: string | undefined;

  /**
   * The phone number's mobile network code, for mobile phone number types.
   *
   * @public
   */
  MNC?: string | undefined;

  /**
   * The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.
   *
   * @public
   */
  Carrier?: string | undefined;

  /**
   * Describes the type of phone number. Valid values are: MOBILE, LANDLINE, VOIP, PREPAID, OTHER, and INVALID. Avoid sending SMS or voice messages to INVALID phone numbers, as these numbers are unlikely to belong to actual recipients.
   *
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * The phone number exactly as you supplied it in the request. This field is returned only when you set `EnableCleansing` to `true`, the phone number was cleansed, and a normalized E.164 phone number was returned in the `E164PhoneNumber` field.
   *
   * @public
   */
  OriginalPhoneNumber?: string | undefined;
}

/**
 * Contains carrier-level launch status details for an RCS agent within a country.
 *
 * @public
 */
export interface CarrierStatusInformation {
  /**
   * The name of the carrier.
   *
   * @public
   */
  CarrierName: string | undefined;

  /**
   * The launch status for this carrier.
   *
   * @public
   */
  Status: CarrierStatus | undefined;
}

/**
 * Contains the destination configuration to use when publishing message sending events.
 *
 * @public
 */
export interface CloudWatchLogsDestination {
  /**
   * The Amazon Resource Name (ARN) of an Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the Amazon CloudWatch log group that you want to record events in.
   *
   * @public
   */
  LogGroupArn: string | undefined;
}

/**
 * Per-rule validation constraints that override the field's default validation when the containing rule matches. All fields are optional; only the constraints that need to differ from the field's default validation are provided.
 *
 * @public
 */
export interface ConditionalValidation {
  /**
   * The minimum length for the field value when this rule applies.
   *
   * @public
   */
  MinLength?: number | undefined;

  /**
   * The maximum length for the field value when this rule applies.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * A regular expression that the field value must match when this rule applies.
   *
   * @public
   */
  Pattern?: string | undefined;

  /**
   * The allowed values for a select field when this rule applies. A subset of the field's full option list.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * A single condition on a dependency field's value. Conditions are combined into a **ConditionalRule** and evaluated together with logical AND.
 *
 * @public
 */
export interface FieldCondition {
  /**
   * The path of the field whose value determines this condition, for example **companyInfo.businessType**.
   *
   * @public
   */
  DependsOnFieldPath: string | undefined;

  /**
   * The comparison operator to apply between the dependency field's value and **Values**. Valid values are **EQUALS**, **NOT_EQUALS**, **IN**, **NOT_IN**, **HAS_VALUE**, and **NO_VALUE**. Operators not in this list are treated as evaluating to false, which causes the containing rule to be skipped. This allows forward-compatible additions of new operators without breaking older SDK clients.
   *
   * @public
   */
  Operator: string | undefined;

  /**
   * The values to compare the dependency field's value against. Required for the **EQUALS**, **NOT_EQUALS**, **IN**, and **NOT_IN** operators. Omitted for **HAS_VALUE** and **NO_VALUE**, which test only presence.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * A single conditional rule that resolves to a field behavior when all of its conditions evaluate to true. Conditions within a rule are combined with logical AND: all conditions must match for the rule to fire.
 *
 * @public
 */
export interface ConditionalRule {
  /**
   * The conditions that must all evaluate to true for this rule to match. Conditions are combined with logical AND. Use multiple rules with the same **RuleBehavior** to express logical OR.
   *
   * @public
   */
  Conditions: FieldCondition[] | undefined;

  /**
   * The field behavior that applies when all conditions in this rule match. Valid values are **REQUIRED**, **OPTIONAL**, and **DISALLOWED**.
   *
   * @public
   */
  RuleBehavior: string | undefined;

  /**
   * Optional per-rule validation constraints (minimum length, maximum length, regex pattern, allowed select values) that override the field's default validation when this rule matches.
   *
   * @public
   */
  ConditionalValidation?: ConditionalValidation | undefined;
}

/**
 * The set of conditional rules that determine a field's resolved requirement based on the values of other fields in the same registration form. Attached to fields whose **FieldRequirement** is **CONDITIONAL**.
 *
 * Evaluation proceeds top-to-bottom through **Rules**. The first rule whose conditions all evaluate to true wins and its behavior is returned. If no rule matches, the **DefaultBehavior** is returned.
 *
 * @public
 */
export interface ConditionalBehavior {
  /**
   * An ordered list of conditional rules. Rules are evaluated top-to-bottom and the first rule whose conditions all evaluate to true determines the field's behavior. Rules whose conditions do not all match are skipped and evaluation continues to the next rule.
   *
   * @public
   */
  Rules: ConditionalRule[] | undefined;

  /**
   * The field behavior that applies when no conditional rule in **Rules** matches. Valid values are **REQUIRED**, **OPTIONAL**, and **DISALLOWED**.
   *
   * @public
   */
  DefaultBehavior: string | undefined;
}

/**
 * The information for configuration sets that meet a specified criteria.
 *
 * @public
 */
export interface ConfigurationSetFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: ConfigurationSetFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with a Firehose event destination.
 *
 * Event destinations, such as Firehose, are associated with configuration sets, which enable you to publish message sending events.
 *
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * The ARN of an Identity and Access Management role that is able to write event data to an Amazon Data Firehose destination.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * An object that defines an Amazon SNS destination for events. You can use Amazon SNS to send notification when certain events occur.
 *
 * @public
 */
export interface SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * Contains information about an event destination.
 *
 * Event destinations are associated with configuration sets, which enable you to publish message sending events to CloudWatch, Firehose, or Amazon SNS.
 *
 * @public
 */
export interface EventDestination {
  /**
   * The name of the EventDestination.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * When set to true events will be logged.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * An array of event types that determine which events to log.
   *
   * > **Note:** The `TEXT_SENT` event type is not supported.
   *
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * An object that contains information about an event destination that sends logging events to Amazon CloudWatch logs.
   *
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * An object that contains information about an event destination for logging to Amazon Data Firehose.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that contains information about an event destination that sends logging events to Amazon SNS.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * Information related to a given configuration set in your Amazon Web Services account.
 *
 * @public
 */
export interface ConfigurationSetInformation {
  /**
   * The Resource Name (ARN) of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * The name of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An array of EventDestination objects that describe any events to log and where to log them.
   *
   * @public
   */
  EventDestinations: EventDestination[] | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  DefaultMessageType?: MessageType | undefined;

  /**
   * The default sender ID used by the ConfigurationSet.
   *
   * @public
   */
  DefaultSenderId?: string | undefined;

  /**
   * True if message feedback is enabled.
   *
   * @public
   */
  DefaultMessageFeedbackEnabled?: boolean | undefined;

  /**
   * The time when the ConfigurationSet was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId?: string | undefined;
}

/**
 * The information for a country launch status that meets a specified criteria.
 *
 * @public
 */
export interface CountryLaunchStatusFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: CountryLaunchStatusFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Contains per-country launch status details for an RCS agent.
 *
 * @public
 */
export interface CountryLaunchStatusInformation {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * The launch status for this country.
   *
   * @public
   */
  Status: CountryLaunchStatus | undefined;

  /**
   * The RCS platform identifier for this country.
   *
   * @public
   */
  RcsPlatformId?: string | undefined;

  /**
   * The unique identifier of the registration associated with this country launch.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * An array of CarrierStatusInformation objects containing carrier-level launch status details.
   *
   * @public
   */
  CarrierStatus: CarrierStatusInformation[] | undefined;
}

/**
 * The list of tags to be added to the specified topic.
 *
 * @public
 */
export interface Tag {
  /**
   * The key identifier, or name, of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The string value associated with the key of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name to use for the new configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An array of key and value pair tags that's associated with the new configuration set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationSetResult {
  /**
   * The Amazon Resource Name (ARN) of the newly created configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the new configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * An array of key and value pair tags that's associated with the configuration set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the configuration set was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventDestinationRequest {
  /**
   * Either the name of the configuration set or the configuration set ARN to apply event logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name that identifies the event destination.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * An array of event types that determine which events to log. If "ALL" is used, then End User Messaging SMS logs every event type.
   *
   * > **Note:** The `TEXT_SENT` event type is not supported.
   *
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * An object that contains information about an event destination for logging to Amazon CloudWatch Logs.
   *
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * An object that contains information about an event destination for logging to Amazon Data Firehose.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that contains information about an event destination for logging to Amazon SNS.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventDestinationResult {
  /**
   * The ARN of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The details of the destination where events are logged.
   *
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface CreateNotifyConfigurationRequest {
  /**
   * The display name to associate with the notify configuration.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The use case for the notify configuration.
   *
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The identifier of the pool to associate with the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels to enable for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * By default this is set to false. When set to true the notify configuration can't be deleted. You can change this value using the UpdateNotifyConfiguration action.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * An array of tags (key and value pairs) associated with the notify configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNotifyConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * The unique identifier for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The display name associated with the notify configuration.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The use case for the notify configuration.
   *
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * The default template identifier associated with the notify configuration.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The identifier of the pool associated with the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels enabled for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * The tier of the notify configuration.
   *
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * The tier upgrade status of the notify configuration.
   *
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * The current status of the notify configuration.
   *
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * The reason the notify configuration was rejected, if applicable.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * An array of tags (key and value pairs) associated with the notify configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the notify configuration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateOptOutListRequest {
  /**
   * The name of the new OptOutList.
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the new OptOutList.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateOptOutListResult {
  /**
   * The Amazon Resource Name (ARN) for the OptOutList.
   *
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * The name of the new OptOutList.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * An array of tags (key and value pairs) associated with the new OptOutList.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the pool was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePoolRequest {
  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use [DescribePhoneNumbers](https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePhoneNumbers.html) to find the values for PhoneNumberId and PhoneNumberArn, and use [DescribeSenderIds](https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html) can be used to get the values for SenderId and SenderIdArn.
   *
   * After the pool is created you can add more origination identities to the pool by using [AssociateOriginationIdentity](https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateOriginationIdentity.html).
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the new pool. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. After the pool is created the MessageType can't be changed.
   *
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * By default this is set to false. When set to true the pool can't be deleted. You can change this value using the [UpdatePool](https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePool.html) action.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of tags (key and value pairs) associated with the pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePoolResult {
  /**
   * The Amazon Resource Name (ARN) for the pool.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The unique identifier for the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The current status of the pool.
   *
   * - CREATING: The pool is currently being created and isn't yet available for use.
   * - ACTIVE: The pool is active and available for use.
   * - DELETING: The pool is being deleted.
   *
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * The type of message for the pool to use.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * By default this is set to false. When set to false, and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList associated with the pool.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * Indicates whether shared routes are enabled for the pool. Set to false and only origination identities in this pool are used to send messages.
   *
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of tags (key and value pairs) associated with the pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the pool was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateProtectConfigurationRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProtectConfigurationResult {
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
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRcsAgentRequest {
  /**
   * By default this is set to false. When set to true the RCS agent can't be deleted. You can change this value using the UpdateRcsAgent action.
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
   * An array of tags (key and value pairs) associated with the RCS agent.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRcsAgentResult {
  /**
   * The Amazon Resource Name (ARN) of the newly created RCS agent.
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
   * The time when the RCS agent was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

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
   * The ARN of the IAM role used to write inbound RCS media files to the S3 bucket. The role must have `s3:PutObject` permission on the bucket and a trust policy allowing `sms-voice.amazonaws.com` to assume it.
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

  /**
   * An array of tags (key and value pairs) associated with the RCS agent.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationRequest {
  /**
   * The type of registration form to create. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the registration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The type of registration form to create. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The status of the registration.
   *
   * - `CLOSED`: The phone number or sender ID has been deleted and you must also delete the registration for the number.
   * - `CREATED`: Your registration is created but not submitted.
   * - `COMPLETE`: Your registration has been approved and your origination identity has been created.
   * - `DELETED`: The registration has been deleted.
   * - `PROVISIONING`: Your registration has been approved and your origination identity is being created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REQUIRES_UPDATES`: You must fix your registration and resubmit it.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `SUBMITTED`: Your registration has been submitted and is awaiting review.
   *
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * The current version number of the registration.
   *
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * Metadata about a given registration which is specific to that registration type.
   *
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the registration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the registration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The unique identifier for the origination identity. For example this could be a **PhoneNumberId** or **SenderId**.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the origination identity that is associated with the registration.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The unique identifier for the origination identity. For example this could be a **PhoneNumberId** or **SenderId**.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The registration type or origination identity type.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The phone number associated with the registration in E.164 format.
   *
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentRequest {
  /**
   * The registration file to upload. The maximum file size is 5MB and valid file extensions are PDF, JPEG and PNG.
   *
   * @public
   */
  AttachmentBody?: Uint8Array | undefined;

  /**
   * Registration files have to be stored in an Amazon S3 bucket. The URI to use when sending is in the format `s3://BucketName/FileName`.
   *
   * @public
   */
  AttachmentUrl?: string | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the registration attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentResult {
  /**
   * The Amazon Resource Name (ARN) for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * The status of the registration attachment.
   *
   * - `UPLOAD_IN_PROGRESS` The attachment is being uploaded.
   * - `UPLOAD_COMPLETE` The attachment has been uploaded.
   * - `UPLOAD_FAILED` The attachment failed to uploaded.
   * - `DELETED` The attachment has been deleted..
   *
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the registration attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the registration attachment was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationVersionRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * The **RegistrationVersionStatusHistory** object contains the time stamps for when the reservations status changes.
 *
 * @public
 */
export interface RegistrationVersionStatusHistory {
  /**
   * The time when the registration was in the draft state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  DraftTimestamp: Date | undefined;

  /**
   * The time when the registration was in the submitted state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  SubmittedTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the AWS reviewing state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  AwsReviewingTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the reviewing state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  ReviewingTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the requires authentication state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  RequiresAuthenticationTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the approved state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  ApprovedTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the discarded state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  DiscardedTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the denied state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  DeniedTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the revoked state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  RevokedTimestamp?: Date | undefined;

  /**
   * The time when the registration was in the archived state, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  ArchivedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationVersionResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The new version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The status of the registration.
   *
   * - `APPROVED`: Your registration has been approved.
   * - `ARCHIVED`: Your previously approved registration version moves into this status when a more recently submitted version is approved.
   * - `DENIED`: You must fix your registration and resubmit it.
   * - `DISCARDED`: You've abandon this version of their registration to start over with a new version.
   * - `DRAFT`: The initial status of a registration version after it’s created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `REVOKED`: Your previously approved registration has been revoked.
   * - `SUBMITTED`: Your registration has been submitted.
   *
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * A **RegistrationVersionStatusHistory** object that contains timestamps for the registration.
   *
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberRequest {
  /**
   * The verified destination phone number, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The unique identifier of the RCS agent to associate with the verified destination number. You can use either the RcsAgentId or RcsAgentArn.
   *
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the destination number.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberResult {
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
   * The verified destination phone number, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The status of the verified destination phone number.
   *
   * - `PENDING`: The phone number hasn't been verified yet.
   * - `VERIFIED`: The phone number is verified and can receive messages.
   *
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * The unique identifier of the RCS agent associated with the verified destination number.
   *
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the destination number.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the verified phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
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
   * The Amazon Resource Name (ARN) of the account default protect configuration.
   *
   * @public
   */
  DefaultProtectConfigurationArn: string | undefined;

  /**
   * The unique identifier of the account default protect configuration.
   *
   * @public
   */
  DefaultProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * The name of the configuration set or the configuration set ARN that you want to delete. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetResult {
  /**
   * The Amazon Resource Name (ARN) of the deleted configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the deleted configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * An array of any EventDestination objects that were associated with the deleted configuration set.
   *
   * @public
   */
  EventDestinations?: EventDestination[] | undefined;

  /**
   * The default message type of the configuration set that was deleted.
   *
   * @public
   */
  DefaultMessageType?: MessageType | undefined;

  /**
   * The default Sender ID of the configuration set that was deleted.
   *
   * @public
   */
  DefaultSenderId?: string | undefined;

  /**
   * True if the configuration set has message feedback enabled. By default this is set to false.
   *
   * @public
   */
  DefaultMessageFeedbackEnabled?: boolean | undefined;

  /**
   * The time that the deleted configuration set was created in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeRequest {
  /**
   * The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default message type from. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeResult {
  /**
   * The Amazon Resource Name (ARN) of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The current message type for the configuration set.
   *
   * @public
   */
  MessageType?: MessageType | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdRequest {
  /**
   * The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdResult {
  /**
   * The Amazon Resource Name (ARN) of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The current sender ID for the configuration set.
   *
   * @public
   */
  SenderId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDestinationRequest {
  /**
   * The name of the configuration set or the configuration set's Amazon Resource Name (ARN) to remove the event destination from. The ConfigurateSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name of the event destination to delete.
   *
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDestinationResult {
  /**
   * The Amazon Resource Name (ARN) of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set the event destination was deleted from.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The event destination object that was deleted.
   *
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface DeleteKeywordRequest {
  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or PoolArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn and DescribePools to find the values of PoolId and PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The keyword to delete.
   *
   * @public
   */
  Keyword: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeywordResult {
  /**
   * The PhoneNumberArn or PoolArn that the keyword was associated with.
   *
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * The PhoneNumberId or PoolId that the keyword was associated with.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The keyword that was deleted.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * The message that was associated with the deleted keyword.
   *
   * @public
   */
  KeywordMessage?: string | undefined;

  /**
   * The action that was associated with the deleted keyword.
   *
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
   * The current monthly limit, in US dollars.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyConfigurationRequest {
  /**
   * The identifier of the notify configuration to delete. The NotifyConfigurationId can be found using the DescribeNotifyConfigurations operation.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * The unique identifier for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The display name associated with the notify configuration.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The use case for the notify configuration.
   *
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * The default template identifier associated with the notify configuration.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The identifier of the pool associated with the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels enabled for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * The tier of the notify configuration.
   *
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * The tier upgrade status of the notify configuration.
   *
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * The current status of the notify configuration.
   *
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * The reason the notify configuration was rejected, if applicable.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the notify configuration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
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
   * The current monthly limit, in US dollars.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberRequest {
  /**
   * The OptOutListName or OptOutListArn to remove the phone number from.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * The phone number, in E.164 format, to remove from the OptOutList.
   *
   * @public
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberResult {
  /**
   * The OptOutListArn that the phone number was removed from.
   *
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * The OptOutListName that the phone number was removed from.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * The phone number that was removed from the OptOutList.
   *
   * @public
   */
  OptedOutNumber?: string | undefined;

  /**
   * The time that the number was removed at, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  OptedOutTimestamp?: Date | undefined;

  /**
   * This is true if it was the end user who requested their phone number be removed.
   *
   * @public
   */
  EndUserOptedOut?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteOptOutListRequest {
  /**
   * The OptOutListName or OptOutListArn of the OptOutList to delete. You can use DescribeOptOutLists to find the values for OptOutListName and OptOutListArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptOutListResult {
  /**
   * The Amazon Resource Name (ARN) of the OptOutList that was removed.
   *
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * The name of the OptOutList that was removed.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * The time when the OptOutList was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeletePoolRequest {
  /**
   * The PoolId or PoolArn of the pool to delete. You can use DescribePools to find the values for PoolId and PoolArn .
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface DeletePoolResult {
  /**
   * The Amazon Resource Name (ARN) of the pool that was deleted.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The PoolId of the pool that was deleted.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The current status of the pool.
   *
   * - CREATING: The pool is currently being created and isn't yet available for use.
   * - ACTIVE: The pool is active and available for use.
   * - DELETING: The pool is being deleted.
   *
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * The message type that was associated with the deleted pool.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the TwoWayChannel.
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
   * By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList that was associated with the deleted pool.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * Indicates whether shared routes are enabled for the pool.
   *
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * The time when the pool was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationResult {
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
export interface DeleteProtectConfigurationRuleSetNumberOverrideRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteProtectConfigurationRuleSetNumberOverrideResult {
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
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The time when the rule was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The action associated with the rule.
   *
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The time when the resource-based policy was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRcsAgentRequest {
  /**
   * The unique identifier of the RCS agent to delete. You can use either the RcsAgentId or RcsAgentArn.
   *
   * @public
   */
  RcsAgentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRcsAgentResult {
  /**
   * The Amazon Resource Name (ARN) of the deleted RCS agent.
   *
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * The unique identifier for the deleted RCS agent.
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
   * The name of the OptOutList that was associated with the deleted RCS agent.
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
   * The list of RCS event types that were enabled for two-way messaging on the deleted agent.
   *
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
   * The current monthly limit to enforce on RCS message spending.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The status of the registration.
   *
   * - `CLOSED`: The phone number or sender ID has been deleted and you must also delete the registration for the number.
   * - `CREATED`: Your registration is created but not submitted.
   * - `COMPLETE`: Your registration has been approved and your origination identity has been created.
   * - `DELETED`: The registration has been deleted.
   * - `PROVISIONING`: Your registration has been approved and your origination identity is being created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REQUIRES_UPDATES`: You must fix your registration and resubmit it.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `SUBMITTED`: Your registration has been submitted and is awaiting review.
   *
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * The current version number of the registration.
   *
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * The version number of the registration that was approved.
   *
   * @public
   */
  ApprovedVersionNumber?: number | undefined;

  /**
   * The latest version number of the registration that was denied.
   *
   * @public
   */
  LatestDeniedVersionNumber?: number | undefined;

  /**
   * Metadata about a given registration which is specific to that registration type.
   *
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * The time when the registration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentRequest {
  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentResult {
  /**
   * The Amazon Resource Name (ARN) for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * The status of the registration attachment.
   *
   * - `UPLOAD_IN_PROGRESS` The attachment is being uploaded.
   * - `UPLOAD_COMPLETE` The attachment has been uploaded.
   * - `UPLOAD_FAILED` The attachment failed to uploaded.
   * - `DELETED` The attachment has been deleted..
   *
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * The error message if the upload failed.
   *
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason | undefined;

  /**
   * The time when the registration attachment was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of **FieldPaths**.
   *
   * @public
   */
  FieldPath: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The path to the registration form field.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * An array of values for the form field.
   *
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * The text data for a free form field.
   *
   * @public
   */
  TextValue?: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource you're deleting the resource-based policy from.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResult {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource that the resource-based policy was deleted from.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The JSON formatted resource-based policy that was deleted.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The time when the resource-based policy was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
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
   * The current monthly limit, in US dollars.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberRequest {
  /**
   * The unique identifier for the verified destination phone number.
   *
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberResult {
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
   * The verified destination phone number, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The time when the destination phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
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
   * The current monthly limit, in US dollars.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * An array of AccountAttributes objects.
   *
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsRequest {
  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsResult {
  /**
   * An array of AccountLimit objects that show the current spend limits.
   *
   * @public
   */
  AccountLimits?: AccountLimit[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsRequest {
  /**
   * An array of strings. Each element can be either a ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetNames?: string[] | undefined;

  /**
   * An array of filters to apply to the results that are returned.
   *
   * @public
   */
  Filters?: ConfigurationSetFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsResult {
  /**
   * An array of ConfigurationSets objects.
   *
   * @public
   */
  ConfigurationSets?: ConfigurationSetInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for keywords that meet a specified criteria.
 *
 * @public
 */
export interface KeywordFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: KeywordFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsRequest {
  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * An array of keywords to search for.
   *
   * @public
   */
  Keywords?: string[] | undefined;

  /**
   * An array of keyword filters to filter the results.
   *
   * @public
   */
  Filters?: KeywordFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The information for all keywords in a pool.
 *
 * @public
 */
export interface KeywordInformation {
  /**
   * The keyword as a string.
   *
   * @public
   */
  Keyword: string | undefined;

  /**
   * A custom message that can be used with the keyword.
   *
   * @public
   */
  KeywordMessage: string | undefined;

  /**
   * The action to perform for the keyword.
   *
   * @public
   */
  KeywordAction: KeywordAction | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsResult {
  /**
   * The PhoneNumberArn or PoolArn that is associated with the OriginationIdentity.
   *
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * The PhoneNumberId or PoolId that is associated with the OriginationIdentity.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * An array of KeywordInformation objects that contain the results.
   *
   * @public
   */
  Keywords?: KeywordInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for notify configurations that meet a specified criteria.
 *
 * @public
 */
export interface NotifyConfigurationFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: NotifyConfigurationFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyConfigurationsRequest {
  /**
   * An array of notify configuration IDs to describe.
   *
   * @public
   */
  NotifyConfigurationIds?: string[] | undefined;

  /**
   * An array of NotifyConfigurationFilter objects to filter the results on.
   *
   * @public
   */
  Filters?: NotifyConfigurationFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The information for a notify configuration in an Amazon Web Services account.
 *
 * @public
 */
export interface NotifyConfigurationInformation {
  /**
   * The Amazon Resource Name (ARN) for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * The unique identifier for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The display name associated with the notify configuration.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The use case for the notify configuration.
   *
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * The default template identifier associated with the notify configuration.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The identifier of the pool associated with the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels enabled for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * The tier of the notify configuration.
   *
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * The tier upgrade status of the notify configuration.
   *
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * The current status of the notify configuration.
   *
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * The reason the notify configuration was rejected, if applicable.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the notify configuration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyConfigurationsResult {
  /**
   * An array of NotifyConfigurationInformation objects that contain the results.
   *
   * @public
   */
  NotifyConfigurations?: NotifyConfigurationInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for notify templates that meet a specified criteria.
 *
 * @public
 */
export interface NotifyTemplateFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: NotifyTemplateFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyTemplatesRequest {
  /**
   * An array of template IDs to describe.
   *
   * @public
   */
  TemplateIds?: string[] | undefined;

  /**
   * An array of NotifyTemplateFilter objects to filter the results on.
   *
   * @public
   */
  Filters?: NotifyTemplateFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains metadata about a template variable.
 *
 * @public
 */
export interface TemplateVariableMetadata {
  /**
   * The type of the variable.
   *
   * @public
   */
  Type: TemplateVariableType | undefined;

  /**
   * Whether the variable is required.
   *
   * @public
   */
  Required: boolean | undefined;

  /**
   * A description of the variable.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The maximum length for string variables.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * The minimum value for numeric variables.
   *
   * @public
   */
  MinValue?: number | undefined;

  /**
   * The maximum value for numeric variables.
   *
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * The default value for the variable.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The regex pattern the variable value must match.
   *
   * @public
   */
  Pattern?: string | undefined;

  /**
   * A sample value for the variable.
   *
   * @public
   */
  Sample?: string | undefined;

  /**
   * The source of the variable, either `CUSTOMER` or `SYSTEM`.
   *
   * @public
   */
  Source?: TemplateVariableSource | undefined;
}

/**
 * The information for a system-managed notify template in an Amazon Web Services account.
 *
 * @public
 */
export interface NotifyTemplateInformation {
  /**
   * The unique identifier for the template.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * The version of the template.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The type of the template.
   *
   * @public
   */
  TemplateType: NotifyTemplateType | undefined;

  /**
   * The channels for the template. Supported values are `SMS` and `VOICE`.
   *
   * @public
   */
  Channels: NumberCapability[] | undefined;

  /**
   * The tier access level for the template.
   *
   * @public
   */
  TierAccess?: NotifyConfigurationTier[] | undefined;

  /**
   * The current status of the template.
   *
   * @public
   */
  Status?: NotifyTemplateStatus | undefined;

  /**
   * An array of supported country codes for the template.
   *
   * @public
   */
  SupportedCountries?: string[] | undefined;

  /**
   * The language code for the template.
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The content of the template.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * An array of template variable metadata for the template.
   *
   * @public
   */
  Variables?: Record<string, TemplateVariableMetadata> | undefined;

  /**
   * An array of supported voice IDs for voice templates.
   *
   * @public
   */
  SupportedVoiceIds?: VoiceId[] | undefined;

  /**
   * The time when the notify template was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNotifyTemplatesResult {
  /**
   * An array of NotifyTemplateInformation objects that contain the results.
   *
   * @public
   */
  NotifyTemplates?: NotifyTemplateInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for opted out numbers that meet a specified criteria.
 *
 * @public
 */
export interface OptedOutFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: OptedOutFilterName | undefined;

  /**
   * An array of values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersRequest {
  /**
   * The OptOutListName or OptOutListArn of the OptOutList. You can use DescribeOptOutLists to find the values for OptOutListName and OptOutListArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * An array of phone numbers to search for in the OptOutList.
   *
   * If you specify an opted out number that isn't valid, an exception is returned.
   *
   * @public
   */
  OptedOutNumbers?: string[] | undefined;

  /**
   * An array of OptedOutFilter objects to filter the results on.
   *
   * @public
   */
  Filters?: OptedOutFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The information for an opted out number in an Amazon Web Services account.
 *
 * @public
 */
export interface OptedOutNumberInformation {
  /**
   * The phone number that is opted out.
   *
   * @public
   */
  OptedOutNumber: string | undefined;

  /**
   * The time that the op tout occurred, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  OptedOutTimestamp: Date | undefined;

  /**
   * This is set to true if it was the end recipient that opted out.
   *
   * @public
   */
  EndUserOptedOut: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersResult {
  /**
   * The Amazon Resource Name (ARN) of the OptOutList.
   *
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * The name of the OptOutList.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * An array of OptedOutNumbersInformation objects that provide information about the requested OptedOutNumbers.
   *
   * @public
   */
  OptedOutNumbers?: OptedOutNumberInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOptOutListsRequest {
  /**
   * The OptOutLists to show the details of. This is an array of strings that can be either the OptOutListName or OptOutListArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListNames?: string[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use `SELF` to filter the list of Opt-Out List to ones your account owns or use `SHARED` to filter on Opt-Out List shared with your account. The `Owner` and `OptOutListNames` parameters can't be used at the same time.
   *
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * The information for all OptOutList in an Amazon Web Services account.
 *
 * @public
 */
export interface OptOutListInformation {
  /**
   * The Amazon Resource Name (ARN) of the OptOutList.
   *
   * @public
   */
  OptOutListArn: string | undefined;

  /**
   * The name of the OptOutList.
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * The time when the OutOutList was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptOutListsResult {
  /**
   * An array of OptOutListInformation objects that contain the details for the requested OptOutLists.
   *
   * @public
   */
  OptOutLists?: OptOutListInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for a phone number that meets a specified criteria.
 *
 * @public
 */
export interface PhoneNumberFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: PhoneNumberFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersRequest {
  /**
   * The unique identifier of phone numbers to find information about. This is an array of strings that can be either the PhoneNumberId or PhoneNumberArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PhoneNumberIds?: string[] | undefined;

  /**
   * An array of PhoneNumberFilter objects to filter the results.
   *
   * @public
   */
  Filters?: PhoneNumberFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use `SELF` to filter the list of phone numbers to ones your account owns or use `SHARED` to filter on phone numbers shared with your account. The `Owner` and `PhoneNumberIds` parameters can't be used at the same time.
   *
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * The messaging limits that apply to an origination identity, such as a phone number, sender ID, or RCS agent. Includes the per-capability send rates and, for supported origination identities, advisory per-provider daily message caps.
 *
 * @public
 */
export interface MessagingLimits {
  /**
   * The maximum send rate for each supported capability, in messages per second. The map is keyed by capability, such as `SMS`, `MMS`, `VOICE`, or `RCS`.
   *
   * @public
   */
  RateLimits?: Record<string, number> | undefined;

  /**
   * The advisory maximum number of messages that can be sent per day, keyed by provider (for example, `T-MOBILE`). Applies to 10DLC phone numbers and is omitted when no daily cap applies.
   *
   * @public
   */
  DailyMessageCaps?: Record<string, number> | undefined;
}

/**
 * The information for a phone number, in E.164 format, in an Amazon Web Services account.
 *
 * @public
 */
export interface PhoneNumberInformation {
  /**
   * The Amazon Resource Name (ARN) associated with the phone number.
   *
   * @public
   */
  PhoneNumberArn: string | undefined;

  /**
   * The unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The phone number in E.164 format.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * The current status of the phone number.
   *
   * @public
   */
  Status: NumberStatus | undefined;

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
  MessageType: MessageType | undefined;

  /**
   * Describes if the origination identity can be used for text messages, voice calls or both.
   *
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  NumberType: NumberType | undefined;

  /**
   * The price, in US dollars, to lease the phone number.
   *
   * @public
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.
   *
   * @public
   */
  TwoWayEnabled: boolean | undefined;

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
   * When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out request. For more information see [Self-managed opt-outs](https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out)
   *
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * The name of the OptOutList associated with the phone number.
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * When set to true the international sending of phone number is Enabled.
   *
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * When set to true the phone number can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The unique identifier of the pool associated with the phone number.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * The messaging limits that apply to the phone number, including the per-capability send rates and any advisory per-provider daily message caps.
   *
   * @public
   */
  MessagingLimits?: MessagingLimits | undefined;

  /**
   * The pricing model.
   *
   * @public
   */
  PricingTier?: string | undefined;

  /**
   * The time when the phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersResult {
  /**
   * An array of PhoneNumberInformation objects that contain the details for the requested phone numbers.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumberInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for a pool that meets a specified criteria.
 *
 * @public
 */
export interface PoolFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: PoolFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePoolsRequest {
  /**
   * The unique identifier of pools to find. This is an array of strings that can be either the PoolId or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * An array of PoolFilter objects to filter the results.
   *
   * @public
   */
  Filters?: PoolFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use `SELF` to filter the list of Pools to ones your account owns or use `SHARED` to filter on Pools shared with your account. The `Owner` and `PoolIds` parameters can't be used at the same time.
   *
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * The information for a pool in an Amazon Web Services account.
 *
 * @public
 */
export interface PoolInformation {
  /**
   * The Amazon Resource Name (ARN) for the pool.
   *
   * @public
   */
  PoolArn: string | undefined;

  /**
   * The unique identifier for the pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The current status of the pool.
   *
   * @public
   */
  Status: PoolStatus | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.
   *
   * @public
   */
  TwoWayEnabled: boolean | undefined;

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
   * When set to false, an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests. For more information see [Self-managed opt-outs](https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out)
   *
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * The name of the OptOutList associated with the pool.
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * Allows you to enable shared routes on your pool.
   *
   * By default, this is set to `False`. If you set this value to `True`, your messages are sent using phone numbers or sender IDs (depending on the country) that are shared with other users. In some countries, such as the United States, senders aren't allowed to use shared routes and must use a dedicated phone number or short code.
   *
   * @public
   */
  SharedRoutesEnabled: boolean | undefined;

  /**
   * When set to true the pool can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the pool was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePoolsResult {
  /**
   * An array of PoolInformation objects that contain the details for the requested pools.
   *
   * @public
   */
  Pools?: PoolInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering protect configurations that meet a specified criteria.
 *
 * @public
 */
export interface ProtectConfigurationFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: ProtectConfigurationFilterName | undefined;

  /**
   * An array of values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeProtectConfigurationsRequest {
  /**
   * An array of protect configuration identifiers to search for.
   *
   * @public
   */
  ProtectConfigurationIds?: string[] | undefined;

  /**
   * An array of ProtectConfigurationFilter objects to filter the results.
   *
   * @public
   */
  Filters?: ProtectConfigurationFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information on the specified protect configuration.
 *
 * @public
 */
export interface ProtectConfigurationInformation {
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
export interface DescribeProtectConfigurationsResult {
  /**
   * An array of ProtectConfigurationInformation objects that contain the details for the request.
   *
   * @public
   */
  ProtectConfigurations?: ProtectConfigurationInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentCountryLaunchStatusRequest {
  /**
   * The unique identifier of the RCS agent. You can use either the RcsAgentId or RcsAgentArn.
   *
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, to filter the results.
   *
   * @public
   */
  IsoCountryCodes?: string[] | undefined;

  /**
   * An array of CountryLaunchStatusFilter objects to filter the results.
   *
   * @public
   */
  Filters?: CountryLaunchStatusFilter[] | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentCountryLaunchStatusResult {
  /**
   * The unique identifier for the RCS agent.
   *
   * @public
   */
  RcsAgentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the RCS agent.
   *
   * @public
   */
  RcsAgentArn: string | undefined;

  /**
   * An array of CountryLaunchStatusInformation objects that contain the per-country launch status details.
   *
   * @public
   */
  CountryLaunchStatus?: CountryLaunchStatusInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for an RCS agent that meets a specified criteria.
 *
 * @public
 */
export interface RcsAgentFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RcsAgentFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentsRequest {
  /**
   * An array of unique identifiers for the RCS agents. This is an array of strings that can be either the RcsAgentId or RcsAgentArn.
   *
   * @public
   */
  RcsAgentIds?: string[] | undefined;

  /**
   * Use `SELF` to filter the list of RCS agents to ones your account owns or use `SHARED` to filter on RCS agents shared with your account. The `Owner` and `RcsAgentIds` parameters can't be used at the same time.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * An array of RcsAgentFilter objects to filter the results.
   *
   * @public
   */
  Filters?: RcsAgentFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains details about the testing agent associated with an RCS agent.
 *
 * @public
 */
export interface TestingAgentInformation {
  /**
   * The current status of the testing agent.
   *
   * @public
   */
  Status: TestingAgentStatus | undefined;

  /**
   * The unique identifier for the testing agent.
   *
   * @public
   */
  TestingAgentId?: string | undefined;

  /**
   * The unique identifier of the registration associated with the testing agent.
   *
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * The information for an RCS agent in an Amazon Web Services account.
 *
 * @public
 */
export interface RcsAgentInformation {
  /**
   * The Amazon Resource Name (ARN) of the RCS agent.
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
   * When set to true the RCS agent can't be deleted.
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
   * When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
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
   * When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.
   *
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * The unique identifier of the pool associated with the RCS agent.
   *
   * @public
   */
  PoolId?: string | undefined;

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

  /**
   * The testing agent information associated with the RCS agent.
   *
   * @public
   */
  TestingAgent?: TestingAgentInformation | undefined;

  /**
   * The messaging limits that apply to the RCS agent, including the per-capability send rates.
   *
   * @public
   */
  MessagingLimits?: MessagingLimits | undefined;
}

/**
 * @public
 */
export interface DescribeRcsAgentsResult {
  /**
   * An array of RcsAgentInformation objects that contain the details for the requested RCS agents.
   *
   * @public
   */
  RcsAgents?: RcsAgentInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering registration attachments that meets a specified criteria.
 *
 * @public
 */
export interface RegistrationAttachmentFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RegistrationAttachmentFilterName | undefined;

  /**
   * An array of values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsRequest {
  /**
   * The unique identifier of registration attachments to find. This is an array of **RegistrationAttachmentId**.
   *
   * @public
   */
  RegistrationAttachmentIds?: string[] | undefined;

  /**
   * An array of RegistrationAttachmentFilter objects to filter the results.
   *
   * @public
   */
  Filters?: RegistrationAttachmentFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information on the specified registration attachments.
 *
 * @public
 */
export interface RegistrationAttachmentsInformation {
  /**
   * The Amazon Resource Name (ARN) for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * The status of the registration attachment.
   *
   * - `UPLOAD_IN_PROGRESS` The attachment is being uploaded.
   * - `UPLOAD_COMPLETE` The attachment has been uploaded.
   * - `UPLOAD_FAILED` The attachment failed to uploaded.
   * - `DELETED` The attachment has been deleted..
   *
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * A description of why the upload didn't successfully complete.
   *
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason | undefined;

  /**
   * The time when the registration attachment was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The URL to the document that's associated with the registration attachment.
   *
   * @public
   */
  AttachmentUrl?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsResult {
  /**
   * An array of **RegistrationAttachments** objects that contain the details for the requested registration attachments.
   *
   * @public
   */
  RegistrationAttachments: RegistrationAttachmentsInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsRequest {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The path to the section of the registration.
   *
   * @public
   */
  SectionPath?: string | undefined;

  /**
   * An array of paths to the registration form field.
   *
   * @public
   */
  FieldPaths?: string[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A description of each select option.
 *
 * @public
 */
export interface SelectOptionDescription {
  /**
   * The value of the option.
   *
   * @public
   */
  Option: string | undefined;

  /**
   * The title of the select option.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A description of the option meaning.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Provides help information on the registration field.
 *
 * @public
 */
export interface RegistrationFieldDisplayHints {
  /**
   * The title of the display hint.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * A short description of the display hint.
   *
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * A full description of the display hint.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * The title of the document the display hint is associated with.
   *
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * The link to the document the display hint is associated with.
   *
   * @public
   */
  DocumentationLink?: string | undefined;

  /**
   * An array of SelectOptionDescription objects.
   *
   * @public
   */
  SelectOptionDescriptions?: SelectOptionDescription[] | undefined;

  /**
   * The validation rules for the text field.
   *
   * @public
   */
  TextValidationDescription?: string | undefined;

  /**
   * Example text of what the value of a field should contain.
   *
   * @public
   */
  ExampleTextValue?: string | undefined;
}

/**
 * Validation rules for a select field.
 *
 * @public
 */
export interface SelectValidation {
  /**
   * The minimum number of choices for the select.
   *
   * @public
   */
  MinChoices: number | undefined;

  /**
   * The maximum number of choices for the select.
   *
   * @public
   */
  MaxChoices: number | undefined;

  /**
   * An array of strings for the possible selection options.
   *
   * @public
   */
  Options: string[] | undefined;
}

/**
 * Validation rules for a text field.
 *
 * @public
 */
export interface TextValidation {
  /**
   * The minimum number of characters for the text field.
   *
   * @public
   */
  MinLength: number | undefined;

  /**
   * The maximum number of characters for the text field.
   *
   * @public
   */
  MaxLength: number | undefined;

  /**
   * The regular expression used to validate the text field.
   *
   * @public
   */
  Pattern: string | undefined;
}

/**
 * Provides a description of the specified field.
 *
 * @public
 */
export interface RegistrationFieldDefinition {
  /**
   * The section path of the field.
   *
   * @public
   */
  SectionPath: string | undefined;

  /**
   * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of **FieldPaths**.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * The type of field.
   *
   * @public
   */
  FieldType: FieldType | undefined;

  /**
   * Specifies if the field for the registration form is required, conditional or optional.
   *
   * @public
   */
  FieldRequirement: FieldRequirement | undefined;

  /**
   * The validation rules for a select field.
   *
   * @public
   */
  SelectValidation?: SelectValidation | undefined;

  /**
   * The validation rules for a text field.
   *
   * @public
   */
  TextValidation?: TextValidation | undefined;

  /**
   * An array of RegistrationFieldDisplayHints objects for the field.
   *
   * @public
   */
  DisplayHints: RegistrationFieldDisplayHints | undefined;

  /**
   * The conditional behavior rules for this field. Only present when **FieldRequirement** is **CONDITIONAL**. Rules are evaluated in order and the first matching rule determines the field's resolved requirement. If no rule matches, the **DefaultBehavior** applies.
   *
   * @public
   */
  ConditionalBehavior?: ConditionalBehavior | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsResult {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * An array of RegistrationFieldDefinitions objects that contain the details for the requested fields.
   *
   * @public
   */
  RegistrationFieldDefinitions: RegistrationFieldDefinition[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The path to the section of the registration.
   *
   * @public
   */
  SectionPath?: string | undefined;

  /**
   * An array of paths to the registration form field.
   *
   * @public
   */
  FieldPaths?: string[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides the values of the specified field.
 *
 * @public
 */
export interface RegistrationFieldValueInformation {
  /**
   * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of **FieldPaths**.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * An array of values for the form field.
   *
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * The text data for a free form field.
   *
   * @public
   */
  TextValue?: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId?: string | undefined;

  /**
   * A description of why the registration was denied.
   *
   * @public
   */
  DeniedReason?: string | undefined;

  /**
   * Generative AI feedback information provided for this specific field during the registration review process. This may include validation errors, suggestions for improvement, or additional requirements.
   *
   * @public
   */
  Feedback?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The current version of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * An array of RegistrationFieldValues objects that contain the values for the requested registration.
   *
   * @public
   */
  RegistrationFieldValues: RegistrationFieldValueInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering registrations that meets a specified criteria.
 *
 * @public
 */
export interface RegistrationFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RegistrationFilterName | undefined;

  /**
   * An array of values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsRequest {
  /**
   * An array of unique identifiers for each registration.
   *
   * @public
   */
  RegistrationIds?: string[] | undefined;

  /**
   * An array of RegistrationFilter objects to filter the results.
   *
   * @public
   */
  Filters?: RegistrationFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information about the requested registration.
 *
 * @public
 */
export interface RegistrationInformation {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The status of the registration.
   *
   * - `CLOSED`: The phone number or sender ID has been deleted and you must also delete the registration for the number.
   * - `CREATED`: Your registration is created but not submitted.
   * - `COMPLETE`: Your registration has been approved and your origination identity has been created.
   * - `DELETED`: The registration has been deleted.
   * - `PROVISIONING`: Your registration has been approved and your origination identity is being created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REQUIRES_UPDATES`: You must fix your registration and resubmit it.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `SUBMITTED`: Your registration has been submitted and is awaiting review.
   *
   * @public
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * The current version number of the registration.
   *
   * @public
   */
  CurrentVersionNumber: number | undefined;

  /**
   * The version number of the registration that was approved.
   *
   * @public
   */
  ApprovedVersionNumber?: number | undefined;

  /**
   * The latest version number of the registration that was denied.
   *
   * @public
   */
  LatestDeniedVersionNumber?: number | undefined;

  /**
   * Metadata about a given registration which is specific to that registration type.
   *
   * @public
   */
  AdditionalAttributes?: Record<string, string> | undefined;

  /**
   * The time when the registration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsResult {
  /**
   * An array of RegistrationInformation objects.
   *
   * @public
   */
  Registrations: RegistrationInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsRequest {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * An array of paths for the registration form section.
   *
   * @public
   */
  SectionPaths?: string[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides help information on the registration section.
 *
 * @public
 */
export interface RegistrationSectionDisplayHints {
  /**
   * The title of the display hint.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * A short description of the display hint.
   *
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * A full description of the display hint.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * The title of the document the display hint is associated with.
   *
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * The link to the document the display hint is associated with.
   *
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * Provides information on the specified section definition.
 *
 * @public
 */
export interface RegistrationSectionDefinition {
  /**
   * The path to the section of the registration.
   *
   * @public
   */
  SectionPath: string | undefined;

  /**
   * The path to the section of the registration.
   *
   * @public
   */
  DisplayHints: RegistrationSectionDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsResult {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * An array of RegistrationSectionDefinition objects.
   *
   * @public
   */
  RegistrationSectionDefinitions: RegistrationSectionDefinition[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering registration types that meets a specified criteria.
 *
 * @public
 */
export interface RegistrationTypeFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RegistrationTypeFilterName | undefined;

  /**
   * An array of values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsRequest {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationTypes?: string[] | undefined;

  /**
   * An array of RegistrationFilter objects to filter the results.
   *
   * @public
   */
  Filters?: RegistrationTypeFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides help information on the registration type.
 *
 * @public
 */
export interface RegistrationTypeDisplayHints {
  /**
   * The title of the display hint.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * A short description of the display hint.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * A full description of the display hint.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * The title of the document the display hint is associated with.
   *
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * The link to the document the display hint is associated with.
   *
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * The processing rules for when a registration can be associated with an origination identity and disassociated from an origination identity.
 *
 * @public
 */
export interface SupportedAssociation {
  /**
   * Defines the behavior of when an origination identity and registration can be associated with each other.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The association behavior.
   *
   * - `ASSOCIATE_BEFORE_SUBMIT` The origination identity has to be supplied when creating a registration.
   * - `ASSOCIATE_ON_APPROVAL` This applies to all sender ID registrations. The sender ID will be automatically provisioned once the registration is approved.
   * - `ASSOCIATE_AFTER_COMPLETE` This applies to phone number registrations when you must complete a registration first, then associate one or more phone numbers later. For example 10DLC campaigns and long codes.
   *
   * @public
   */
  AssociationBehavior: RegistrationAssociationBehavior | undefined;

  /**
   * The disassociation behavior.
   *
   * - `DISASSOCIATE_ALL_CLOSES_REGISTRATION` All origination identities must be disassociated from the registration before the registration can be closed.
   * - `DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION` All origination identities must be disassociated from the registration before the registration can be deleted.
   * - `DELETE_REGISTRATION_DISASSOCIATES` The registration can be deleted and all origination identities will be disasscoiated.
   *
   * @public
   */
  DisassociationBehavior: RegistrationDisassociationBehavior | undefined;
}

/**
 * Provides information on the supported registration type.
 *
 * @public
 */
export interface RegistrationTypeDefinition {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * The supported association behavior for the registration type.
   *
   * @public
   */
  SupportedAssociations?: SupportedAssociation[] | undefined;

  /**
   * Provides help information on the registration.
   *
   * @public
   */
  DisplayHints: RegistrationTypeDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsResult {
  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationTypeDefinitions: RegistrationTypeDefinition[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering registration versions that meets a specified criteria.
 *
 * @public
 */
export interface RegistrationVersionFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RegistrationVersionFilterName | undefined;

  /**
   * An array of values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * An array of registration version numbers.
   *
   * @public
   */
  VersionNumbers?: number[] | undefined;

  /**
   * An array of RegistrationVersionFilter objects to filter the results.
   *
   * @public
   */
  Filters?: RegistrationVersionFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides the reason a registration was rejected.
 *
 * @public
 */
export interface RegistrationDeniedReasonInformation {
  /**
   * The reason a registration was rejected.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * A short description of the rejection reason.
   *
   * @public
   */
  ShortDescription: string | undefined;

  /**
   * A long description of the rejection reason.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * The title of the document.
   *
   * @public
   */
  DocumentationTitle?: string | undefined;

  /**
   * The link to the document.
   *
   * @public
   */
  DocumentationLink?: string | undefined;
}

/**
 * Provides information about the specified version of the registration.
 *
 * @public
 */
export interface RegistrationVersionInformation {
  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The status of the registration.
   *
   * - `APPROVED`: Your registration has been approved.
   * - `ARCHIVED`: Your previously approved registration version moves into this status when a more recently submitted version is approved.
   * - `DENIED`: You must fix your registration and resubmit it.
   * - `DISCARDED`: You've abandon this version of their registration to start over with a new version.
   * - `DRAFT`: The initial status of a registration version after it’s created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `REVOKED`: Your previously approved registration has been revoked.
   * - `SUBMITTED`: Your registration has been submitted.
   *
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * The **RegistrationVersionStatusHistory** object contains the time stamps for when the reservations status changes.
   *
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;

  /**
   * An array of RegistrationDeniedReasonInformation objects.
   *
   * @public
   */
  DeniedReasons?: RegistrationDeniedReasonInformation[] | undefined;

  /**
   * Generative AI feedback information provided during the registration review process. This includes comments, suggestions, or additional requirements.
   *
   * @public
   */
  Feedback?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * An array of RegistrationVersions objects.
   *
   * @public
   */
  RegistrationVersions: RegistrationVersionInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for a sender ID that meets a specified criteria.
 *
 * @public
 */
export interface SenderIdFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: SenderIdFilterName | undefined;

  /**
   * An array of values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The alphanumeric sender ID in a specific country that you want to describe. For more information on sender IDs see [Requesting sender IDs](https://docs.aws.amazon.com/sms-voice/latest/userguide/sender-id-request.html) in the *End User Messaging SMS User Guide*.
 *
 * @public
 */
export interface SenderIdAndCountry {
  /**
   * The unique identifier of the sender.
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
}

/**
 * @public
 */
export interface DescribeSenderIdsRequest {
  /**
   * An array of SenderIdAndCountry objects to search for.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  SenderIds?: SenderIdAndCountry[] | undefined;

  /**
   * An array of SenderIdFilter objects to filter the results.
   *
   * @public
   */
  Filters?: SenderIdFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use `SELF` to filter the list of Sender Ids to ones your account owns or use `SHARED` to filter on Sender Ids shared with your account. The `Owner` and `SenderIds` parameters can't be used at the same time.
   *
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * The information for all SenderIds in an Amazon Web Services account.
 *
 * @public
 */
export interface SenderIdInformation {
  /**
   * The Amazon Resource Name (ARN) associated with the SenderId.
   *
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * The alphanumeric sender ID in a specific country that you'd like to describe.
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
   * The monthly leasing price, in US dollars.
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
   * True if the sender ID is registered.
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

  /**
   * The messaging limits that apply to the sender ID, including the per-capability send rates.
   *
   * @public
   */
  MessagingLimits?: MessagingLimits | undefined;

  /**
   * The pricing model.
   *
   * @public
   */
  PricingTier?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSenderIdsResult {
  /**
   * An array of SernderIdInformation objects that contain the details for the requested SenderIds.
   *
   * @public
   */
  SenderIds?: SenderIdInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsRequest {
  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the current monthly spend limits for sending voice and text messages. For more information on increasing your monthly spend limit, see [Requesting a spending quota increase](https://docs.aws.amazon.com/sms-voice/latest/userguide/awssupport-spend-threshold.html) in the *End User Messaging SMS User Guide*.
 *
 * @public
 */
export interface SpendLimit {
  /**
   * The name for the SpendLimit.
   *
   * @public
   */
  Name: SpendLimitName | undefined;

  /**
   * The maximum amount of money, in US dollars, that you want to be able to spend sending messages each month. This value has to be less than or equal to the amount in `MaxLimit`. To use this custom limit, `Overridden` must be set to true.
   *
   * @public
   */
  EnforcedLimit: number | undefined;

  /**
   * The maximum amount of money that you are able to spend to send messages each month, in US dollars.
   *
   * @public
   */
  MaxLimit: number | undefined;

  /**
   * When set to `True`, the value that has been specified in the `EnforcedLimit` is used to determine the maximum amount in US dollars that can be spent to send messages each month, in US dollars.
   *
   * @public
   */
  Overridden: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsResult {
  /**
   * An array of SpendLimit objects that contain the details for the requested spend limits.
   *
   * @public
   */
  SpendLimits?: SpendLimit[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering verified destination phone numbers that meets a specified criteria.
 *
 * @public
 */
export interface VerifiedDestinationNumberFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: VerifiedDestinationNumberFilterName | undefined;

  /**
   * An array of values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersRequest {
  /**
   * An array of VerifiedDestinationNumberid to retrieve.
   *
   * @public
   */
  VerifiedDestinationNumberIds?: string[] | undefined;

  /**
   * An array of verified destination phone number, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumbers?: string[] | undefined;

  /**
   * An array of VerifiedDestinationNumberFilter objects to filter the results.
   *
   * @public
   */
  Filters?: VerifiedDestinationNumberFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information about the requested verified destintion phone number.
 *
 * @public
 */
export interface VerifiedDestinationNumberInformation {
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
   * The verified destination phone number, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The status of the verified destination phone number.
   *
   * - `PENDING`: The phone number hasn't been verified yet.
   * - `VERIFIED`: The phone number is verified and can receive messages.
   *
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * The unique identifier of the RCS agent associated with the verified destination number.
   *
   * @public
   */
  RcsAgentId?: string | undefined;

  /**
   * The time when the destination phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersResult {
  /**
   * An array of VerifiedDestinationNumberInformation objects
   *
   * @public
   */
  VerifiedDestinationNumbers: VerifiedDestinationNumberInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityRequest {
  /**
   * The unique identifier for the pool to disassociate with the origination identity. This value can be either the PoolId or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers find the values for PhoneNumberId and PhoneNumberArn, or use DescribeSenderIds to get the values for SenderId and SenderIdArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityResult {
  /**
   * The Amazon Resource Name (ARN) of the pool.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The PoolId of the pool no longer associated with the origination identity.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The PhoneNumberArn or SenderIdArn of the origination identity.
   *
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * The PhoneNumberId or SenderId of the origination identity.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProtectConfigurationRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The name of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProtectConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn: string | undefined;

  /**
   * The name of the ConfigurationSet.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

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
}

/**
 * @public
 */
export interface DiscardRegistrationVersionRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DiscardRegistrationVersionResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The status of the registration version.
   *
   * - `APPROVED`: Your registration has been approved.
   * - `ARCHIVED`: Your previously approved registration version moves into this status when a more recently submitted version is approved.
   * - `DENIED`: You must fix your registration and resubmit it.
   * - `DISCARDED`: You've abandon this version of their registration to start over with a new version.
   * - `DRAFT`: The initial status of a registration version after it’s created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `REVOKED`: Your previously approved registration has been revoked.
   * - `SUBMITTED`: Your registration has been submitted.
   *
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * The **RegistrationVersionStatusHistory** object contains the time stamps for when the reservations status changes.
   *
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface GetProtectConfigurationCountryRuleSetRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The capability type to return the CountryRuleSet for. Valid values are `SMS`, `VOICE`, or `MMS`.
   *
   * @public
   */
  NumberCapability: NumberCapability | undefined;
}

/**
 * The types of statuses that can be used.
 *
 * @public
 */
export interface ProtectConfigurationCountryRuleSetInformation {
  /**
   * The types of protection that can be used.
   *
   * @public
   */
  ProtectStatus: ProtectStatus | undefined;
}

/**
 * @public
 */
export interface GetProtectConfigurationCountryRuleSetResult {
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
   * The capability type associated with the returned ProtectConfigurationCountryRuleSetInformation objects.
   *
   * @public
   */
  NumberCapability: NumberCapability | undefined;

  /**
   * A map of ProtectConfigurationCountryRuleSetInformation objects that contain the details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see [Supported countries and regions (SMS channel)](https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html) in the End User Messaging SMS User Guide.
   *
   * @public
   */
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The JSON formatted string that contains the resource-based policy attached to the End User Messaging SMS resource.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The time when the resource-based policy was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * A single number preference that specifies how to match available phone numbers. Each preference pairs a match type with one or more filter values.
 *
 * @public
 */
export interface NumberPreferenceItem {
  /**
   * The type of match to apply to the filter values.
   *
   * - `StartsWith`: Returns numbers that begin with the filter value.
   * - `EndsWith`: Returns numbers that end with the filter value.
   * - `Contains`: Returns numbers that contain the filter value.
   * - `ExactMatch`: Returns the number that exactly matches the filter value.
   *
   * @public
   */
  PreferenceType: PreferenceType[] | undefined;

  /**
   * The digit pattern values to match against available phone numbers, using the specified preference type.
   *
   * @public
   */
  Filter: string[] | undefined;
}

/**
 * @public
 */
export interface ListAvailablePhoneNumbersRequest {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region in which to search for available phone numbers. This operation currently supports only `US`.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * The capabilities to filter by, such as SMS. Only phone numbers that support all of the specified capabilities are returned.
   *
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * The type of phone number to search for.
   *
   * @public
   */
  NumberType: SearchableNumberType | undefined;

  /**
   * The registration associated with the request. A registration is required for regulated number types. You can specify either:
   *
   * - The unique identifier of the registration.
   * - The Amazon Resource Name (ARN) of the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * An optional selection preference used to return only phone numbers that match a specific digit pattern, such as numbers that start with, end with, or contain a particular sequence. You can specify at most one preference. Number preferences apply only to `TEN_DLC` numbers in the `US`.
   *
   * @public
   */
  NumberPreference?: NumberPreferenceItem[] | undefined;

  /**
   * The token returned from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. If you don't specify a value, the default is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAvailablePhoneNumbersResult {
  /**
   * An array of phone numbers, in E.164 format, that are available to request based on the specified filters.
   *
   * @public
   */
  AvailablePhoneNumbers: string[] | undefined;

  /**
   * The token to include in the next request to retrieve the next page of results. This value is null when there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotifyCountriesRequest {
  /**
   * An array of channels to filter the results by.
   *
   * @public
   */
  Channels?: NumberCapability[] | undefined;

  /**
   * An array of use cases to filter the results by.
   *
   * @public
   */
  UseCases?: NotifyConfigurationUseCase[] | undefined;

  /**
   * The tier to filter the results by.
   *
   * @public
   */
  Tier?: NotifyConfigurationTier | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The information for a country that supports notify messaging.
 *
 * @public
 */
export interface NotifyCountryInformation {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * The name of the country.
   *
   * @public
   */
  CountryName: string | undefined;

  /**
   * An array of supported channels for the country. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  SupportedChannels: NumberCapability[] | undefined;

  /**
   * An array of supported use cases for the country.
   *
   * @public
   */
  SupportedUseCases: NotifyConfigurationUseCase[] | undefined;

  /**
   * An array of supported tiers for the country.
   *
   * @public
   */
  SupportedTiers: NotifyConfigurationTier[] | undefined;

  /**
   * Whether a customer-owned identity is required to send notify messages to this country.
   *
   * @public
   */
  CustomerOwnedIdentityRequired: boolean | undefined;
}

/**
 * @public
 */
export interface ListNotifyCountriesResult {
  /**
   * An array of NotifyCountryInformation objects that contain the results.
   *
   * @public
   */
  NotifyCountries?: NotifyCountryInformation[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about origination identities associated with a pool that meets a specified criteria.
 *
 * @public
 */
export interface PoolOriginationIdentitiesFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: PoolOriginationIdentitiesFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesRequest {
  /**
   * The unique identifier for the pool. This value can be either the PoolId or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * An array of PoolOriginationIdentitiesFilter objects to filter the results..
   *
   * @public
   */
  Filters?: PoolOriginationIdentitiesFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The metadata for an origination identity associated with a pool.
 *
 * @public
 */
export interface OriginationIdentityMetadata {
  /**
   * The Amazon Resource Name (ARN) associated with the origination identity.
   *
   * @public
   */
  OriginationIdentityArn: string | undefined;

  /**
   * The unique identifier of the origination identity.
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. This field is optional and may not be present for origination identity types that are not country-specific, such as RCS agents.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * Describes if the origination identity can be used for text messages, voice calls or both.
   *
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * The phone number in E.164 format.
   *
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesResult {
  /**
   * The Amazon Resource Name (ARN) for the pool.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The unique PoolId of the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of any OriginationIdentityMetadata objects.
   *
   * @public
   */
  OriginationIdentities?: OriginationIdentityMetadata[] | undefined;

  /**
   * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information for a protect configuration rule set number override that meets a specified criteria.
 *
 * @public
 */
export interface ProtectConfigurationRuleSetNumberOverrideFilterItem {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: ProtectConfigurationRuleSetNumberOverrideFilterName | undefined;

  /**
   * An array values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListProtectConfigurationRuleSetNumberOverridesRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * An array of ProtectConfigurationRuleSetNumberOverrideFilterItem objects to filter the results.
   *
   * @public
   */
  Filters?: ProtectConfigurationRuleSetNumberOverrideFilterItem[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides details on phone number rule overrides for a protect configuration.
 *
 * @public
 */
export interface ProtectConfigurationRuleSetNumberOverride {
  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The time when the rule was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The action for the rule to perform of either blocking or allowing messages to the destination phone number.
   *
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The time the rule will expire at. If `ExpirationTimestamp` is not set then the rule will not expire.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListProtectConfigurationRuleSetNumberOverridesResult {
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
   * An array of RuleSetNumberOverrides objects.
   *
   * @public
   */
  RuleSetNumberOverrides?: ProtectConfigurationRuleSetNumberOverride[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter definition for filtering registrations that meets a specified criteria.
 *
 * @public
 */
export interface RegistrationAssociationFilter {
  /**
   * The name of the attribute to filter on.
   *
   * @public
   */
  Name: RegistrationAssociationFilterName | undefined;

  /**
   * An array of values to filter for.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * An array of RegistrationAssociationFilter to apply to the results that are returned.
   *
   * @public
   */
  Filters?: RegistrationAssociationFilter[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per each request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Metadata for the origination identity that is associated with the registration.
 *
 * @public
 */
export interface RegistrationAssociationMetadata {
  /**
   * The Amazon Resource Name (ARN) of the origination identity that is associated with the registration.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The unique identifier for the origination identity. For example this could be a **PhoneNumberId** or **SenderId**.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The origination identity type.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The phone number associated with the registration in E.164 format.
   *
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The type of registration form. The list of **RegistrationTypes** can be found using the DescribeRegistrationTypeDefinitions action.
   *
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * An array of RegistrationAssociationMetadata objects.
   *
   * @public
   */
  RegistrationAssociations: RegistrationAssociationMetadata[] | undefined;

  /**
   * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to query for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutKeywordRequest {
  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers get the values for PhoneNumberId and PhoneNumberArn while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The new keyword to add.
   *
   * @public
   */
  Keyword: string | undefined;

  /**
   * The message associated with the keyword.
   *
   * @public
   */
  KeywordMessage: string | undefined;

  /**
   * The action to perform for the new keyword when it is received.
   *
   * - AUTOMATIC_RESPONSE: A message is sent to the recipient.
   * - OPT_OUT: Keeps the recipient from receiving future messages.
   * - OPT_IN: The recipient wants to receive future messages.
   *
   * @public
   */
  KeywordAction?: KeywordAction | undefined;
}

/**
 * @public
 */
export interface PutKeywordResult {
  /**
   * The PhoneNumberArn or PoolArn that the keyword was associated with.
   *
   * @public
   */
  OriginationIdentityArn?: string | undefined;

  /**
   * The PhoneNumberId or PoolId that the keyword was associated with.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The keyword that was added.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * The message associated with the keyword.
   *
   * @public
   */
  KeywordMessage?: string | undefined;

  /**
   * The action to perform when the keyword is used.
   *
   * @public
   */
  KeywordAction?: KeywordAction | undefined;
}

/**
 * @public
 */
export interface PutMessageFeedbackRequest {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * Set the message feedback to be either `RECEIVED` or `FAILED`.
   *
   * @public
   */
  MessageFeedbackStatus: MessageFeedbackStatus | undefined;
}

/**
 * @public
 */
export interface PutMessageFeedbackResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The current status of the message.
   *
   * @public
   */
  MessageFeedbackStatus: MessageFeedbackStatus | undefined;
}

/**
 * @public
 */
export interface PutOptedOutNumberRequest {
  /**
   * The OptOutListName or OptOutListArn to add the phone number to.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * The phone number to add to the OptOutList in E.164 format.
   *
   * @public
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface PutOptedOutNumberResult {
  /**
   * The OptOutListArn that the phone number was removed from.
   *
   * @public
   */
  OptOutListArn?: string | undefined;

  /**
   * The OptOutListName that the phone number was removed from.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * The phone number that was added to the OptOutList.
   *
   * @public
   */
  OptedOutNumber?: string | undefined;

  /**
   * The time that the phone number was added to the OptOutList, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  OptedOutTimestamp?: Date | undefined;

  /**
   * This is true if it was the end user who requested their phone number be removed.
   *
   * @public
   */
  EndUserOptedOut?: boolean | undefined;
}

/**
 * @public
 */
export interface PutProtectConfigurationRuleSetNumberOverrideRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;

  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The action for the rule to either block or allow messages to the destination phone number.
   *
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * The time the rule will expire at. If `ExpirationTimestamp` is not set then the rule does not expire.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutProtectConfigurationRuleSetNumberOverrideResult {
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
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The time when the rule was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The action for the rule to take.
   *
   * @public
   */
  Action: ProtectConfigurationRuleOverrideAction | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The time the rule will expire at.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of **FieldPaths**.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * An array of values for the form field.
   *
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * The text data for a free form field.
   *
   * @public
   */
  TextValue?: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of **FieldPaths**.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * An array of values for the form field.
   *
   * @public
   */
  SelectChoices?: string[] | undefined;

  /**
   * The text data for a free form field.
   *
   * @public
   */
  TextValue?: string | undefined;

  /**
   * The unique identifier for the registration attachment.
   *
   * @public
   */
  RegistrationAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource to attach the resource-based policy to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The JSON formatted resource-based policy to attach.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * The Amazon Resource Name (ARN) of the End User Messaging SMS resource attached to the resource-based policy.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The JSON formatted Resource Policy.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The time when the resource-based policy was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use DescribePhoneNumbers to get the values for PhoneNumberId and PhoneNumberArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface ReleasePhoneNumberResult {
  /**
   * The PhoneNumberArn of the phone number that was released.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * The PhoneNumberId of the phone number that was released.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The phone number that was released.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The message type that was associated with the phone number.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * Specifies if the number could be used for text messages, voice, or both.
   *
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * The type of number that was released.
   *
   * @public
   */
  NumberType?: NumberType | undefined;

  /**
   * The monthly price of the phone number, in US dollars.
   *
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the TwoWayChannel.
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
   * By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList that was associated with the phone number.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * The time when the phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ReleaseSenderIdRequest {
  /**
   * The sender ID to release.
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
}

/**
 * @public
 */
export interface ReleaseSenderIdResult {
  /**
   * The Amazon Resource Name (ARN) associated with the SenderId.
   *
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * The sender ID that was released.
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
   * True if the sender ID is registered.
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
export interface RequestPhoneNumberRequest {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * The type of message. Valid values are `TRANSACTIONAL` for messages that are critical or time-sensitive and `PROMOTIONAL` for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * Indicates if the phone number will be used for text messages, voice messages, or both.
   *
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * The type of phone number to request.
   *
   * When you request a `SIMULATOR` phone number, you must set **MessageType** as `TRANSACTIONAL`.
   *
   * @public
   */
  NumberType: RequestableNumberType | undefined;

  /**
   * The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * The pool to associated with the phone number. You can use the PoolId or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * Use this field to attach your phone number for an external registration process.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * An optional selection preference used to request a specific phone number, such as a number that starts with, ends with, or contains a particular digit pattern. You can specify at most one preference. Number preferences apply only to `TEN_DLC` requests in the `US`.
   *
   * @public
   */
  NumberPreference?: NumberPreferenceItem[] | undefined;

  /**
   * By default this is set to false. When set to true the international sending of phone number is Enabled.
   *
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * By default this is set to false. When set to true the phone number can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the requested phone number.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RequestPhoneNumberResult {
  /**
   * The Amazon Resource Name (ARN) of the requested phone number.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * The unique identifier of the new phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The new phone number that was requested.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * Indicates if the phone number will be used for text messages, voice messages or both.
   *
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * The type of number that was released.
   *
   * @public
   */
  NumberType?: RequestableNumberType | undefined;

  /**
   * The monthly price, in US dollars, to lease the phone number.
   *
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

  /**
   * The ARN used to identify the two way channel.
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
   * By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList that is associated with the requested phone number.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * By default this is set to false. When set to true the international sending of phone number is Enabled.
   *
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * By default this is set to false. When set to true the phone number can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * The unique identifier of the pool associated with the phone number
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * An array of key and value pair tags that are associated with the phone number.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The time when the phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface RequestSenderIdRequest {
  /**
   * The sender ID string to request. The sender ID can be 1-11 alphanumeric characters including letters (A-Z, a-z), numbers (0-9), or hyphens (-). The sender ID must contain at least one letter and cannot start or end with a hyphen.
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
  MessageTypes?: MessageType[] | undefined;

  /**
   * By default this is set to false. When set to true the sender ID can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the sender ID.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RequestSenderIdResult {
  /**
   * The Amazon Resource Name (ARN) associated with the SenderId.
   *
   * @public
   */
  SenderIdArn: string | undefined;

  /**
   * The sender ID that was requested.
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
   * True if the sender ID is registered.
   *
   * @public
   */
  Registered: boolean | undefined;

  /**
   * An array of tags (key and value pairs) to associate with the sender ID.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeRequest {
  /**
   * The unique identifier for the verified destination phone number.
   *
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * Choose to send the verification code as an SMS or voice message.
   *
   * @public
   */
  VerificationChannel: VerificationChannel | undefined;

  /**
   * Choose the language to use for the message.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see [Special requirements for sending SMS messages to recipients in India](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html).
   *
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>> | undefined;
}

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId: string | undefined;
}

/**
 * @public
 */
export interface SendMediaMessageRequest {
  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The text body of the message.
   *
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * An array of URLs to each media file to send.
   *
   * The media files have to be stored in an S3 bucket. Supported media file formats are listed in [MMS file types, size and character limits](https://docs.aws.amazon.com/sms-voice/latest/userguide/mms-limitations-character.html). For more information on creating an S3 bucket and managing objects, see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html), [Uploading objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) in the *Amazon S3 User Guide*, and [Setting up an Amazon S3 bucket for MMS files](https://docs.aws.amazon.com/sms-voice/latest/userguide/send-mms-message.html#send-mms-message-bucket) in the *Amazon Web Services End User Messaging SMS User Guide*.
   *
   * @public
   */
  MediaUrls?: string[] | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The maximum amount that you want to spend, in US dollars, per each MMS message.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * How long the media message is valid for. By default this is 72 hours.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The unique identifier of the protect configuration to use.
   *
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendMediaMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyTextMessageRequest {
  /**
   * The unique identifier of the notify configuration to use for sending the message. This can be either the NotifyConfigurationId or NotifyConfigurationArn.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The unique identifier of the template to use for the message.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * A map of template variable names and their values. All variable values are passed as strings regardless of the declared variable type. For example, pass `INTEGER` values as `"42"` and `BOOLEAN` values as `"true"` or `"false"`.
   *
   * @public
   */
  TemplateVariables: Record<string, string> | undefined;

  /**
   * How long the text message is valid for, in seconds. By default this is 72 hours.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendNotifyTextMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The unique identifier of the template used for the message.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The message body after template variable substitution has been applied.
   *
   * @public
   */
  ResolvedMessageBody?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyVoiceMessageRequest {
  /**
   * The unique identifier of the notify configuration to use for sending the message. This can be either the NotifyConfigurationId or NotifyConfigurationArn.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The unique identifier of the template to use for the message.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * A map of template variable names and their values. All variable values are passed as strings regardless of the declared variable type. For example, pass `INTEGER` values as `"42"` and `BOOLEAN` values as `"true"` or `"false"`.
   *
   * @public
   */
  TemplateVariables: Record<string, string> | undefined;

  /**
   * The voice ID to use for the voice message.
   *
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * How long the voice message is valid for, in seconds. By default this is 72 hours.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendNotifyVoiceMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The unique identifier of the template used for the message.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The message body after template variable substitution has been applied.
   *
   * @public
   */
  ResolvedMessageBody?: string | undefined;
}

/**
 * Configuration for SMS or MMS fallback when RCS delivery fails or the TimeToLive expires without delivery confirmation.
 *
 * @public
 */
export interface RcsFallbackConfiguration {
  /**
   * The fallback channel to use when RCS delivery fails. Valid values are SMS and MMS. SMS and MMS are mutually exclusive.
   *
   * @public
   */
  Channel: RcsFallbackChannel | undefined;

  /**
   * The text body of the fallback message. Required for SMS fallback. For MMS fallback, at least one of MessageBody or MediaUrls must be provided.
   *
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * An array of S3 URIs to media files for MMS fallback. Only valid when Channel is MMS.
   *
   * @public
   */
  MediaUrls?: string[] | undefined;

  /**
   * The origination identity to use for the fallback message. This can be a PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, or SenderIdArn. Pool IDs and pool ARNs are not accepted. If not specified and the original message was sent via a pool, the service selects a suitable number from the pool.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;
}

/**
 * The media content of a carousel card. Display height is restricted to SHORT or MEDIUM (TALL is not supported in carousels).
 *
 * @public
 */
export interface RcsCarouselCardMedia {
  /**
   * The S3 URI of the media file for the carousel card. Maximum 2000 characters.
   *
   * @public
   */
  FileUrl: string | undefined;

  /**
   * The S3 URI of an optional thumbnail image for the carousel card media. Maximum 2000 characters.
   *
   * @public
   */
  ThumbnailUrl?: string | undefined;

  /**
   * The display height of the media in the carousel card. Valid values are SHORT and MEDIUM.
   *
   * @public
   */
  Height?: string | undefined;
}

/**
 * A suggested action that creates a calendar event on the recipient's device.
 *
 * @public
 */
export interface RcsCreateCalendarEventAction {
  /**
   * The display text of the action. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;

  /**
   * The title of the calendar event. Maximum 100 characters.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The start time of the calendar event in ISO 8601 format.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the calendar event in ISO 8601 format.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An optional description for the calendar event. Maximum 500 characters.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * A suggested action that initiates a phone call to a specified number when tapped by the recipient.
 *
 * @public
 */
export interface RcsDialPhoneAction {
  /**
   * The display text of the action. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;

  /**
   * The phone number to dial in E.164 format.
   *
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * A suggested action that opens a URL in the recipient's browser or an in-app webview.
 *
 * @public
 */
export interface RcsOpenUrlAction {
  /**
   * The display text of the action. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;

  /**
   * The URL to open. Must start with https://. Maximum 2048 characters.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * How to open the URL. BROWSER opens in the device's default browser. WEBVIEW opens in an in-app webview.
   *
   * @public
   */
  Application?: string | undefined;

  /**
   * The display mode of the webview. Valid values are FULL, HALF, and TALL. Only applicable when Application is WEBVIEW.
   *
   * @public
   */
  WebviewViewMode?: string | undefined;
}

/**
 * A suggested reply action that sends predefined text and postback data when tapped by the recipient.
 *
 * @public
 */
export interface RcsReplyAction {
  /**
   * The display text of the suggested reply. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this reply. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;
}

/**
 * A suggested action that requests the recipient's current location.
 *
 * @public
 */
export interface RcsRequestLocationAction {
  /**
   * The display text of the action. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;
}

/**
 * A suggested action that shows a location on a map when tapped by the recipient.
 *
 * @public
 */
export interface RcsShowLocationAction {
  /**
   * The display text of the action. Maximum 25 characters.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The postback data sent to your webhook when the user taps this action. Maximum 2048 characters.
   *
   * @public
   */
  PostbackData: string | undefined;

  /**
   * The latitude of the location. Valid values are -90 to 90.
   *
   * @public
   */
  Latitude: number | undefined;

  /**
   * The longitude of the location. Valid values are -180 to 180.
   *
   * @public
   */
  Longitude: number | undefined;

  /**
   * An optional label for the location pin. Maximum 100 characters.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * A suggested action displayed to the RCS message recipient. Can be a reply, open URL, dial phone, show location, request location, or create calendar event.
 *
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
   * A suggested reply that sends predefined text and postback data when tapped.
   *
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
   * A suggested action that opens a URL in the user's browser or a webview.
   *
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
   * A suggested action that initiates a phone call to the specified number.
   *
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
   * A suggested action that shows a location on a map.
   *
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
   * A suggested action that requests the user's current location.
   *
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
   * A suggested action that creates a calendar event on the user's device.
   *
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
 * The content of a carousel card, including title, description, media, and card-level suggested actions. Media height is restricted to SHORT or MEDIUM.
 *
 * @public
 */
export interface RcsCarouselCardContent {
  /**
   * The title of the carousel card. Maximum 200 characters.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The description text of the carousel card. Maximum 2000 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The media content of the carousel card. Media height is restricted to SHORT or MEDIUM (TALL is not supported in carousels).
   *
   * @public
   */
  Media?: RcsCarouselCardMedia | undefined;

  /**
   * Card-level suggested actions for this carousel card. Maximum 4 suggestions per card.
   *
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * A carousel of 2 to 10 scrollable rich cards.
 *
 * @public
 */
export interface RcsCarousel {
  /**
   * The width of cards in the carousel. Valid values are SMALL and MEDIUM.
   *
   * @public
   */
  CardWidth: string | undefined;

  /**
   * The list of cards in the carousel. Minimum 2, maximum 10 cards.
   *
   * @public
   */
  CardContents: RcsCarouselCardContent[] | undefined;
}

/**
 * A file message containing a media file (image, video, audio, or PDF) with an optional thumbnail.
 *
 * @public
 */
export interface RcsFileMessage {
  /**
   * The S3 URI of the media file to send, in the format `s3://bucket-name/key`. The service downloads the file from your S3 bucket, rehosts it, and generates a presigned URL for the aggregator. Maximum 2000 characters.
   *
   * @public
   */
  FileUrl: string | undefined;

  /**
   * The S3 URI of an optional thumbnail image for the media file, in the format `s3://bucket-name/key`. Maximum 2000 characters.
   *
   * @public
   */
  ThumbnailUrl?: string | undefined;
}

/**
 * The media content of a rich card, including the file URL, optional thumbnail, and display height.
 *
 * @public
 */
export interface RcsCardMedia {
  /**
   * The S3 URI of the media file for the card, in the format `s3://bucket-name/key`. Maximum 2000 characters.
   *
   * @public
   */
  FileUrl: string | undefined;

  /**
   * The S3 URI of an optional thumbnail image for the card media. Maximum 2000 characters.
   *
   * @public
   */
  ThumbnailUrl?: string | undefined;

  /**
   * The display height of the media in the card. Valid values are SHORT, MEDIUM, and TALL.
   *
   * @public
   */
  Height?: string | undefined;
}

/**
 * The content of a rich card, including title, description, media, and card-level suggested actions.
 *
 * @public
 */
export interface RcsCardContent {
  /**
   * The title of the card. Maximum 200 characters.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The description text of the card. Maximum 2000 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The media content of the card, including the file URL, optional thumbnail, and display height.
   *
   * @public
   */
  Media?: RcsCardMedia | undefined;

  /**
   * Card-level suggested actions. Maximum 4 suggestions per card.
   *
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * A standalone rich card with media, title, description, and suggested actions.
 *
 * @public
 */
export interface RcsStandaloneCard {
  /**
   * The orientation of the rich card. Valid values are HORIZONTAL and VERTICAL.
   *
   * @public
   */
  CardOrientation: string | undefined;

  /**
   * The alignment of the thumbnail image in a horizontal card. Valid values are LEFT and RIGHT. Only applicable when CardOrientation is HORIZONTAL.
   *
   * @public
   */
  ThumbnailImageAlignment?: string | undefined;

  /**
   * The content of the rich card, including title, description, media, and card-level suggested actions.
   *
   * @public
   */
  CardContent: RcsCardContent | undefined;
}

/**
 * A plain text RCS message body.
 *
 * @public
 */
export interface RcsTextMessage {
  /**
   * The text body of the RCS message. Maximum 3072 characters.
   *
   * @public
   */
  Body: string | undefined;
}

/**
 * The message body of an RCS message. Exactly one content type must be specified.
 *
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
   * A plain text RCS message.
   *
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
   * A file message containing a media file (image, video, audio, or PDF) with an optional thumbnail.
   *
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
   * A standalone rich card with media, title, description, and suggested actions.
   *
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
   * A carousel of 2 to 10 scrollable cards, each with media, title, description, and suggested actions.
   *
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
 * The content of an RCS message, containing the message body (text, file, rich card, or carousel) and optional message-level suggested actions.
 *
 * @public
 */
export interface RcsMessageContent {
  /**
   * The content of the RCS message. Exactly one content type must be specified: TextMessage, FileMessage, RichCard, or Carousel.
   *
   * @public
   */
  Content: RcsContent | undefined;

  /**
   * Message-level suggested actions displayed to the recipient. Maximum 11 suggestions per message.
   *
   * @public
   */
  Suggestions?: RcsSuggestedAction[] | undefined;
}

/**
 * @public
 */
export interface SendRcsMessageRequest {
  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The origination identity of the message. This can be either the RcsAgentId, RcsAgentArn, PoolId, or PoolArn.
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The content of the RCS message. Contains the message content (text, file, rich card, or carousel) and optional message-level suggested actions.
   *
   * @public
   */
  RcsMessageContent?: RcsMessageContent | undefined;

  /**
   * The duration in seconds that the RCS message is valid for delivery. If the message cannot be delivered within this duration, it is considered expired. Valid values are 1 to 172800 (48 hours). If a FallbackConfiguration is provided, the fallback is triggered when the duration expires without delivery confirmation.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * The traffic type of the RCS message. Valid values are AUTHENTICATION, TRANSACTION, PROMOTION, SERVICE_REQUEST, and ACKNOWLEDGEMENT. This field is reserved for future use.
   *
   * @public
   */
  MessageTrafficType?: string | undefined;

  /**
   * Configuration for SMS or MMS fallback when RCS delivery fails. If provided, the service sends a fallback message via the specified channel when the RCS message fails or the TimeToLive expires.
   *
   * @public
   */
  FallbackConfiguration?: RcsFallbackConfiguration | undefined;

  /**
   * The unique identifier of the protect configuration to use.
   *
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The maximum amount that you want to spend, in US dollars, per each RCS message.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendRcsMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendTextMessageRequest {
  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, RcsAgentId, RcsAgentArn, SenderId, SenderIdArn, PoolId, or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The body of the text message.
   *
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * The type of message. Valid values are for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * When you register a short code in the US, you must specify a program name. If you don’t have a US short code, omit this attribute.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The maximum amount that you want to spend, in US dollars, per each text message. If the calculated amount to send the text message is greater than `MaxPrice`, the message is not sent and an error is returned.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * How long the text message is valid for, in seconds. By default this is 72 hours. If the messages isn't handed off before the TTL expires we stop attempting to hand off the message and return `TTL_EXPIRED` event.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see [Special requirements for sending SMS messages to recipients in India](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html).
   *
   * - `IN_ENTITY_ID` The entity ID or Principal Entity (PE) ID that you received after completing the sender ID registration process.
   * - `IN_TEMPLATE_ID` The template ID that you received after completing the sender ID registration process.
   *
   *   > **Important:** Make sure that the Template ID that you specify matches your message template exactly. If your message doesn't match the template that you provided during the registration process, the mobile carriers might reject your message.
   *
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>> | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient. You are not charged for using `DryRun`.
   *
   * The Message Parts per Second (MPS) limit when using `DryRun` is five. If your origination identity has a lower MPS limit then the lower MPS limit is used. For more information about MPS limits, see [Message Parts per Second (MPS) limits](https://docs.aws.amazon.com/sms-voice/latest/userguide/sms-limitations-mps.html) in the *End User Messaging SMS User Guide*..
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendTextMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SendVoiceMessageRequest {
  /**
   * The destination phone number in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The origination identity to use for the voice call. This can be the PhoneNumber, PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * The text to convert to a voice message.
   *
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * Specifies if the MessageBody field contains text or [speech synthesis markup language (SSML)](https://docs.aws.amazon.com/polly/latest/dg/what-is.html).
   *
   * - TEXT: This is the default value. When used the maximum character limit is 3000.
   * - SSML: When used the maximum character limit is 6000 including SSML tagging.
   *
   * @public
   */
  MessageBodyTextType?: VoiceMessageBodyTextType | undefined;

  /**
   * The voice for the [Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/what-is.html) service to use. By default this is set to "MATTHEW".
   *
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The maximum amount to spend per voice message, in US dollars.
   *
   * @public
   */
  MaxPricePerMinute?: string | undefined;

  /**
   * How long the voice message is valid for. By default this is 72 hours.
   *
   * @public
   */
  TimeToLive?: number | undefined;

  /**
   * You can specify custom data in this field. If you do, that data is logged to the event destination.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * When set to true, the message is checked and validated, but isn't sent to the end recipient.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId?: string | undefined;

  /**
   * Set to true to enable message feedback for the message. When a user receives the message you need to update the message status using PutMessageFeedback.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SendVoiceMessageResult {
  /**
   * The unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface SetAccountDefaultProtectConfigurationRequest {
  /**
   * The unique identifier for the protect configuration.
   *
   * @public
   */
  ProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface SetAccountDefaultProtectConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) of the account default protect configuration.
   *
   * @public
   */
  DefaultProtectConfigurationArn: string | undefined;

  /**
   * The unique identifier of the account default protect configuration.
   *
   * @public
   */
  DefaultProtectConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageFeedbackEnabledRequest {
  /**
   * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * Set to true to enable message feedback.
   *
   * @public
   */
  MessageFeedbackEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageFeedbackEnabledResult {
  /**
   * The arn of the configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * True if message feedback is enabled.
   *
   * @public
   */
  MessageFeedbackEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeRequest {
  /**
   * The configuration set to update with a new default message type. This field can be the ConsigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType: MessageType | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeResult {
  /**
   * The Amazon Resource Name (ARN) of the updated configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set that was updated.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The new default message type of the configuration set.
   *
   * @public
   */
  MessageType?: MessageType | undefined;
}

/**
 * @public
 */
export interface SetDefaultSenderIdRequest {
  /**
   * The configuration set to updated with a new default SenderId. This field can be the ConsigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The current sender ID for the configuration set. When sending a text message to a destination country which supports SenderIds, the default sender ID on the configuration set specified on SendTextMessage will be used if no dedicated origination phone numbers or registered SenderIds are available in your account, instead of a generic sender ID, such as 'NOTICE'.
   *
   * @public
   */
  SenderId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultSenderIdResult {
  /**
   * The Amazon Resource Name (ARN) of the updated configuration set.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set that was updated.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The default sender ID to set for the ConfigurationSet.
   *
   * @public
   */
  SenderId?: string | undefined;
}

/**
 * @public
 */
export interface SetMediaMessageSpendLimitOverrideRequest {
  /**
   * The new monthly limit to enforce on text messages.
   *
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetMediaMessageSpendLimitOverrideResult {
  /**
   * The current monthly limit to enforce on sending text messages.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetNotifyMessageSpendLimitOverrideRequest {
  /**
   * The new monthly limit to enforce on notify messages.
   *
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetNotifyMessageSpendLimitOverrideResult {
  /**
   * The current monthly limit, in US dollars.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetRcsMessageSpendLimitOverrideRequest {
  /**
   * The new monthly limit to enforce on RCS message spending.
   *
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetRcsMessageSpendLimitOverrideResult {
  /**
   * The current monthly limit to enforce on RCS message spending.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideRequest {
  /**
   * The new monthly limit to enforce on text messages.
   *
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideResult {
  /**
   * The current monthly limit to enforce on sending text messages.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideRequest {
  /**
   * The new monthly limit to enforce on voice messages.
   *
   * @public
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideResult {
  /**
   * The current monthly limit to enforce on sending voice messages.
   *
   * @public
   */
  MonthlyLimit?: number | undefined;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionRequest {
  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * Set to true to request AWS review of the registration. When enabled, AWS will perform additional validation and review of the registration submission before processing.
   *
   * @public
   */
  AwsReview?: boolean | undefined;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionResult {
  /**
   * The Amazon Resource Name (ARN) for the registration.
   *
   * @public
   */
  RegistrationArn: string | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The version number of the registration.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The status of the registration version.
   *
   * - `APPROVED`: Your registration has been approved.
   * - `ARCHIVED`: Your previously approved registration version moves into this status when a more recently submitted version is approved.
   * - `DENIED`: You must fix your registration and resubmit it.
   * - `DISCARDED`: You've abandon this version of their registration to start over with a new version.
   * - `DRAFT`: The initial status of a registration version after it’s created.
   * - `REQUIRES_AUTHENTICATION`: You need to complete email authentication.
   * - `REVIEWING`: Your registration has been accepted and is being reviewed.
   * - `REVOKED`: Your previously approved registration has been revoked.
   * - `SUBMITTED`: Your registration has been submitted.
   *
   * @public
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * The **RegistrationVersionStatusHistory** object contains the time stamps for when the reservations status changes.
   *
   * @public
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;

  /**
   * Indicates whether AWS review was requested for this registration submission.
   *
   * @public
   */
  AwsReview: boolean | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag key values to unassociate with the resource.
   *
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
   * The configuration set to update with the new event destination. Valid values for this can be the ConfigurationSetName or ConfigurationSetArn.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name to use for the event destination.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * When set to true logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * An array of event types that determine which events to log.
   *
   * > **Note:** The `TEXT_SENT` event type is not supported.
   *
   * @public
   */
  MatchingEventTypes?: EventType[] | undefined;

  /**
   * An object that contains information about an event destination that sends data to CloudWatch Logs.
   *
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * An object that contains information about an event destination for logging to Firehose.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * @public
 */
export interface UpdateEventDestinationResult {
  /**
   * The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.
   *
   * @public
   */
  ConfigurationSetArn?: string | undefined;

  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * An EventDestination object containing the details of where events will be logged.
   *
   * @public
   */
  EventDestination?: EventDestination | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyConfigurationRequest {
  /**
   * The identifier of the notify configuration to update. The NotifyConfigurationId can be found using the DescribeNotifyConfigurations operation.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier. Pass the special value `UNSET_DEFAULT_TEMPLATE` to clear the current default template from the notify configuration.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The pool identifier or Amazon Resource Name (ARN) to associate with the notify configuration. Pass the special value `UNSET_DEFAULT_POOL_FOR_NOTIFY` to clear the current default pool from the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels to enable for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels?: NumberCapability[] | undefined;

  /**
   * When set to true the notify configuration can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyConfigurationResult {
  /**
   * The Amazon Resource Name (ARN) for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationArn: string | undefined;

  /**
   * The unique identifier for the notify configuration.
   *
   * @public
   */
  NotifyConfigurationId: string | undefined;

  /**
   * The display name associated with the notify configuration.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The use case for the notify configuration.
   *
   * @public
   */
  UseCase: NotifyConfigurationUseCase | undefined;

  /**
   * The default template identifier associated with the notify configuration.
   *
   * @public
   */
  DefaultTemplateId?: string | undefined;

  /**
   * The identifier of the pool associated with the notify configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
   *
   * @public
   */
  EnabledCountries?: string[] | undefined;

  /**
   * An array of channels enabled for the notify configuration. Supported values include `SMS` and `VOICE`.
   *
   * @public
   */
  EnabledChannels: NumberCapability[] | undefined;

  /**
   * The tier of the notify configuration.
   *
   * @public
   */
  Tier: NotifyConfigurationTier | undefined;

  /**
   * The tier upgrade status of the notify configuration.
   *
   * @public
   */
  TierUpgradeStatus: TierUpgradeStatus | undefined;

  /**
   * The current status of the notify configuration.
   *
   * @public
   */
  Status: NotifyConfigurationStatus | undefined;

  /**
   * The reason the notify configuration was rejected, if applicable.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * When set to true deletion protection is enabled. By default this is set to false.
   *
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the notify configuration was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * The unique identifier of the phone number. Valid values for this field can be either the PhoneNumberId or PhoneNumberArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The OptOutList to add the phone number to. You can use either the opt out list name or the opt out list ARN.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * By default this is set to false. When set to true the international sending of phone number is Enabled.
   *
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * By default this is set to false. When set to true the phone number can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResult {
  /**
   * The Amazon Resource Name (ARN) of the updated phone number.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * The unique identifier of the phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The phone number that was updated.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: NumberStatus | undefined;

  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *
   * @public
   */
  IsoCountryCode?: string | undefined;

  /**
   * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * Specifies if the number could be used for text messages, voice or both.
   *
   * @public
   */
  NumberCapabilities?: NumberCapability[] | undefined;

  /**
   * The type of number that was requested.
   *
   * @public
   */
  NumberType?: NumberType | undefined;

  /**
   * The monthly leasing price of the phone number, in US dollars.
   *
   * @public
   */
  MonthlyLeasingPrice?: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * This is true if self managed opt-out are enabled.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList associated with the phone number.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * When set to true the international sending of phone number is Enabled.
   *
   * @public
   */
  InternationalSendingEnabled?: boolean | undefined;

  /**
   * When set to true the phone number can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * The unique identifier for the registration.
   *
   * @public
   */
  RegistrationId?: string | undefined;

  /**
   * The time when the phone number was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePoolRequest {
  /**
   * The unique identifier of the pool to update. Valid values are either the PoolId or PoolArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * By default this is set to false. When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The OptOutList to associate with the pool. Valid values are either OptOutListName or OptOutListArn.
   *
   * > **Important:** If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * Indicates whether shared routes are enabled for the pool.
   *
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * When set to true the pool can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePoolResult {
  /**
   * The ARN of the pool.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The unique identifier of the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The current status of the pool update request.
   *
   * @public
   */
  Status?: PoolStatus | undefined;

  /**
   * The type of message for the pool to use.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
   *
   * @public
   */
  TwoWayEnabled?: boolean | undefined;

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
   * When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   *
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean | undefined;

  /**
   * The name of the OptOutList associated with the pool.
   *
   * @public
   */
  OptOutListName?: string | undefined;

  /**
   * Indicates whether shared routes are enabled for the pool.
   *
   * @public
   */
  SharedRoutesEnabled?: boolean | undefined;

  /**
   * When set to true the pool can't be deleted.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * The time when the pool was created, in [UNIX epoch time](https://www.epochconverter.com/) format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

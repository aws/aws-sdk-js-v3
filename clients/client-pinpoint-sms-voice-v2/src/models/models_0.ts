// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { PinpointSMSVoiceV2ServiceException as __BaseException } from "./PinpointSMSVoiceV2ServiceException";

export enum AccessDeniedExceptionReason {
  ACCOUNT_DISABLED = "ACCOUNT_DISABLED",
  INSUFFICIENT_ACCOUNT_REPUTATION = "INSUFFICIENT_ACCOUNT_REPUTATION",
}

/**
 * <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: AccessDeniedExceptionReason | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

export enum AccountAttributeName {
  ACCOUNT_TIER = "ACCOUNT_TIER",
}

/**
 * <p>Displays the attributes associated with a single Amazon Web Services account.</p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   */
  Name: AccountAttributeName | string | undefined;

  /**
   * <p>The value associated with the account attribute name.</p>
   */
  Value: string | undefined;
}

export enum AccountLimitName {
  CONFIGURATION_SETS = "CONFIGURATION_SETS",
  OPT_OUT_LISTS = "OPT_OUT_LISTS",
  PHONE_NUMBERS = "PHONE_NUMBERS",
  POOLS = "POOLS",
}

/**
 * <p>The current resource quotas associated with an Amazon Web Services account.</p>
 */
export interface AccountLimit {
  /**
   * <p>The name of the attribute to apply the account limit to.</p>
   */
  Name: AccountLimitName | string | undefined;

  /**
   * <p>The current amount that has been spent, in US dollars.</p>
   */
  Used: number | undefined;

  /**
   * <p>The Amazon Web Services set limit for that resource type, in US dollars.</p>
   */
  Max: number | undefined;
}

export interface AssociateOriginationIdentityRequest {
  /**
   * <p>The pool to update with the new Identity. This value can be either the PoolId or
   *             PoolArn, and you can find these values using <a>DescribePools</a>.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn, while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the origination identity.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface AssociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool that is now associated with the origination
   *             identity.</p>
   */
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool that is now associated with the origination identity.</p>
   */
  PoolId?: string;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;
}

export enum ConflictExceptionReason {
  DELETION_PROTECTION_ENABLED = "DELETION_PROTECTION_ENABLED",
  DESTINATION_PHONE_NUMBER_NOT_VERIFIED = "DESTINATION_PHONE_NUMBER_NOT_VERIFIED",
  DESTINATION_PHONE_NUMBER_OPTED_OUT = "DESTINATION_PHONE_NUMBER_OPTED_OUT",
  EVENT_DESTINATION_MISMATCH = "EVENT_DESTINATION_MISMATCH",
  KEYWORD_MISMATCH = "KEYWORD_MISMATCH",
  LAST_PHONE_NUMBER = "LAST_PHONE_NUMBER",
  MESSAGE_TYPE_MISMATCH = "MESSAGE_TYPE_MISMATCH",
  NO_ORIGINATION_IDENTITIES_FOUND = "NO_ORIGINATION_IDENTITIES_FOUND",
  OPT_OUT_LIST_MISMATCH = "OPT_OUT_LIST_MISMATCH",
  PHONE_NUMBER_ASSOCIATED_TO_POOL = "PHONE_NUMBER_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL = "PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_NOT_IN_REGISTRATION_REGION = "PHONE_NUMBER_NOT_IN_REGISTRATION_REGION",
  RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DELETION_NOT_ALLOWED = "RESOURCE_DELETION_NOT_ALLOWED",
  RESOURCE_MODIFICATION_NOT_ALLOWED = "RESOURCE_MODIFICATION_NOT_ALLOWED",
  RESOURCE_NOT_ACTIVE = "RESOURCE_NOT_ACTIVE",
  RESOURCE_NOT_EMPTY = "RESOURCE_NOT_EMPTY",
  SELF_MANAGED_OPT_OUTS_MISMATCH = "SELF_MANAGED_OPT_OUTS_MISMATCH",
  TWO_WAY_CONFIG_MISMATCH = "TWO_WAY_CONFIG_MISMATCH",
}

export enum ResourceType {
  ACCOUNT = "account",
  CONFIGURATION_SET = "configuration-set",
  EVENT_DESTINATION = "event-destination",
  KEYWORD = "keyword",
  OPTED_OUT_NUMBER = "opted-out-number",
  OPT_OUT_LIST = "opt-out-list",
  PHONE_NUMBER = "phone-number",
  POOL = "pool",
  REGISTRATION = "registration",
  SENDER_ID = "sender-id",
}

/**
 * <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ConflictExceptionReason | string;

  /**
   * <p>The type of resource that caused the exception.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The unique identifier of the request.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string;
  /**
   * <p>The unique identifier of the request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>A requested resource couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of resource that caused the exception.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The unique identifier of the resource.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
  }
}

export enum ServiceQuotaExceededExceptionReason {
  CONFIGURATION_SETS_PER_ACCOUNT = "CONFIGURATION_SETS_PER_ACCOUNT",
  DAILY_DESTINATION_CALL_LIMIT = "DAILY_DESTINATION_CALL_LIMIT",
  EVENT_DESTINATIONS_PER_CONFIGURATION_SET = "EVENT_DESTINATIONS_PER_CONFIGURATION_SET",
  KEYWORDS_PER_PHONE_NUMBER = "KEYWORDS_PER_PHONE_NUMBER",
  KEYWORDS_PER_POOL = "KEYWORDS_PER_POOL",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT = "MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE = "MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE",
  OPT_OUT_LISTS_PER_ACCOUNT = "OPT_OUT_LISTS_PER_ACCOUNT",
  ORIGINATION_IDENTITIES_PER_POOL = "ORIGINATION_IDENTITIES_PER_POOL",
  PHONE_NUMBERS_PER_ACCOUNT = "PHONE_NUMBERS_PER_ACCOUNT",
  PHONE_NUMBERS_PER_REGISTRATION = "PHONE_NUMBERS_PER_REGISTRATION",
  POOLS_PER_ACCOUNT = "POOLS_PER_ACCOUNT",
  TAGS_PER_RESOURCE = "TAGS_PER_RESOURCE",
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ServiceQuotaExceededExceptionReason | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The field associated with the validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The message associated with the validation exception with information to help
   *             determine its cause.</p>
   */
  Message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_ADD_OPTED_OUT_NUMBER = "CANNOT_ADD_OPTED_OUT_NUMBER",
  CANNOT_PARSE = "CANNOT_PARSE",
  COUNTRY_CODE_MISMATCH = "COUNTRY_CODE_MISMATCH",
  DESTINATION_COUNTRY_BLOCKED = "DESTINATION_COUNTRY_BLOCKED",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  INVALID_ARN = "INVALID_ARN",
  INVALID_FILTER_VALUES = "INVALID_FILTER_VALUES",
  INVALID_IDENTITY_FOR_DESTINATION_COUNTRY = "INVALID_IDENTITY_FOR_DESTINATION_COUNTRY",
  INVALID_NEXT_TOKEN = "INVALID_NEXT_TOKEN",
  INVALID_PARAMETER = "INVALID_PARAMETER",
  MISSING_PARAMETER = "MISSING_PARAMETER",
  OTHER = "OTHER",
  PARAMETERS_CANNOT_BE_USED_TOGETHER = "PARAMETERS_CANNOT_BE_USED_TOGETHER",
  PHONE_NUMBER_CANNOT_BE_OPTED_IN = "PHONE_NUMBER_CANNOT_BE_OPTED_IN",
  PHONE_NUMBER_CANNOT_BE_RELEASED = "PHONE_NUMBER_CANNOT_BE_RELEASED",
  PRICE_OVER_THRESHOLD = "PRICE_OVER_THRESHOLD",
  REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT = "REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT",
  SENDER_ID_NOT_REGISTERED = "SENDER_ID_NOT_REGISTERED",
  SENDER_ID_NOT_SUPPORTED = "SENDER_ID_NOT_SUPPORTED",
  TWO_WAY_NOT_ENABLED = "TWO_WAY_NOT_ENABLED",
  TWO_WAY_NOT_SUPPORTED_IN_COUNTRY = "TWO_WAY_NOT_SUPPORTED_IN_COUNTRY",
  TWO_WAY_NOT_SUPPORTED_IN_REGION = "TWO_WAY_NOT_SUPPORTED_IN_REGION",
  TWO_WAY_TOPIC_NOT_PRESENT = "TWO_WAY_TOPIC_NOT_PRESENT",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>A validation exception for a field.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The field that failed validation.</p>
   */
  Fields?: ValidationExceptionField[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * <p>Contains the destination configuration to use when publishing message sending events.
 *         </p>
 */
export interface CloudWatchLogsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role
   *             that is able to write event data to an Amazon CloudWatch destination.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The name of the Amazon CloudWatch log group that you want to record events in. </p>
   */
  LogGroupArn: string | undefined;
}

export enum ConfigurationSetFilterName {
  DEFAULT_MESSAGE_TYPE = "default-message-type",
  DEFAULT_SENDER_ID = "default-sender-id",
  EVENT_DESTINATION_NAME = "event-destination-name",
  MATCHING_EVENT_TYPES = "matching-event-types",
}

/**
 * <p>The information for configuration sets that meet a specified criteria.</p>
 */
export interface ConfigurationSetFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: ConfigurationSetFilterName | string | undefined;

  /**
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

export enum MessageType {
  PROMOTIONAL = "PROMOTIONAL",
  TRANSACTIONAL = "TRANSACTIONAL",
}

/**
 * <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with an Kinesis Data Firehose event
 *             destination.</p>
 *         <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration
 *             sets, which enable you to publish message sending events.</p>
 */
export interface KinesisFirehoseDestination {
  /**
   * <p>The ARN of an Amazon Identity and Access Management (IAM) role that is able to write
   *             event data to an Amazon Firehose destination.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  DeliveryStreamArn: string | undefined;
}

export enum EventType {
  ALL = "ALL",
  TEXT_ALL = "TEXT_ALL",
  TEXT_BLOCKED = "TEXT_BLOCKED",
  TEXT_CARRIER_BLOCKED = "TEXT_CARRIER_BLOCKED",
  TEXT_CARRIER_UNREACHABLE = "TEXT_CARRIER_UNREACHABLE",
  TEXT_DELIVERED = "TEXT_DELIVERED",
  TEXT_INVALID = "TEXT_INVALID",
  TEXT_INVALID_MESSAGE = "TEXT_INVALID_MESSAGE",
  TEXT_PENDING = "TEXT_PENDING",
  TEXT_QUEUED = "TEXT_QUEUED",
  TEXT_SENT = "TEXT_SENT",
  TEXT_SPAM = "TEXT_SPAM",
  TEXT_SUCCESSFUL = "TEXT_SUCCESSFUL",
  TEXT_TTL_EXPIRED = "TEXT_TTL_EXPIRED",
  TEXT_UNKNOWN = "TEXT_UNKNOWN",
  TEXT_UNREACHABLE = "TEXT_UNREACHABLE",
  VOICE_ALL = "VOICE_ALL",
  VOICE_ANSWERED = "VOICE_ANSWERED",
  VOICE_BUSY = "VOICE_BUSY",
  VOICE_COMPLETED = "VOICE_COMPLETED",
  VOICE_FAILED = "VOICE_FAILED",
  VOICE_INITIATED = "VOICE_INITIATED",
  VOICE_NO_ANSWER = "VOICE_NO_ANSWER",
  VOICE_RINGING = "VOICE_RINGING",
  VOICE_TTL_EXPIRED = "VOICE_TTL_EXPIRED",
}

/**
 * <p>An object that defines an Amazon SNS destination for events. You can use
 *                 Amazon SNS to send notification when certain events occur.</p>
 */
export interface SnsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to
   *             publish events to.</p>
   */
  TopicArn: string | undefined;
}

/**
 * <p>Contains information about an event destination.</p>
 *         <p>Event destinations are associated with configuration sets, which enable you to publish
 *             message sending events to
 *             Amazon
 *                 CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS.</p>
 */
export interface EventDestination {
  /**
   * <p>The name of the EventDestination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * <p>When set to true events will be logged.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>An array of event types that determine which events to log.</p>
   */
  MatchingEventTypes: (EventType | string)[] | undefined;

  /**
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon CloudWatch logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon
   *             Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;
}

/**
 * <p>Information related to a given configuration set in your Amazon Web Services
 *             account.</p>
 */
export interface ConfigurationSetInformation {
  /**
   * <p>The Resource Name (ARN) of the ConfigurationSet.</p>
   */
  ConfigurationSetArn: string | undefined;

  /**
   * <p>The name of the ConfigurationSet.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An array of EventDestination objects that describe any events to log and where to log
   *             them.</p>
   */
  EventDestinations: EventDestination[] | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  DefaultMessageType?: MessageType | string;

  /**
   * <p>The default sender ID used by the ConfigurationSet.</p>
   */
  DefaultSenderId?: string;

  /**
   * <p>The time when the ConfigurationSet was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * <p>The list of tags to be added to the specified topic.</p>
 */
export interface Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The string value associated with the key of the tag.</p>
   */
  Value: string | undefined;
}

export interface CreateConfigurationSetRequest {
  /**
   * <p>The name to use for the new configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An array of key and value pair tags that's associated with the new configuration set. </p>
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface CreateConfigurationSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the new configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An array of key and value pair tags that's associated with the configuration
   *             set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The time when the configuration set was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface CreateEventDestinationRequest {
  /**
   * <p>Either the name of the configuration set or the configuration set ARN to apply event
   *             logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name that identifies the event destination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An array of event types that determine which events to log. If "ALL" is used, then
   *                 Amazon Pinpoint logs every event type.</p>
   */
  MatchingEventTypes: (EventType | string)[] | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon
   *             CloudWatch logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon
   *             Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface CreateEventDestinationResult {
  /**
   * <p>The ARN of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The details of the destination where events are logged.</p>
   */
  EventDestination?: EventDestination;
}

export interface CreateOptOutListRequest {
  /**
   * <p>The name of the new OptOutList.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the new OptOutList.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface CreateOptOutListResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the OptOutList.</p>
   */
  OptOutListArn?: string;

  /**
   * <p>The name of the new OptOutList.</p>
   */
  OptOutListName?: string;

  /**
   * <p>An array of tags (key and value pairs) associated with the new OptOutList.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface CreatePoolRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the new pool.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | string | undefined;

  /**
   * <p>By default this is set to false. When set to true the pool can't be deleted. You can
   *             change this value using the <a>UpdatePool</a> action.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export enum PoolStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

export interface CreatePoolResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn?: string;

  /**
   * <p>The unique identifier for the pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The current status of the pool.</p>
   *         <ul>
   *             <li>
   *                 <p>CREATING: The pool is currently being created and isn't yet available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                 <p>ACTIVE: The pool is active and available for use.</p>
   *             </li>
   *             <li>
   *                 <p>DELETING: The pool is being deleted.</p>
   *             </li>
   *          </ul>
   */
  Status?: PoolStatus | string;

  /**
   * <p>The type of message for the pool to use.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface DeleteConfigurationSetRequest {
  /**
   * <p>The name of the configuration set or the configuration set ARN that you want to
   *             delete. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;
}

export interface DeleteConfigurationSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the deleted configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An array of any EventDestination objects that were associated with the deleted
   *             configuration set.</p>
   */
  EventDestinations?: EventDestination[];

  /**
   * <p>The default message type of the configuration set that was deleted.</p>
   */
  DefaultMessageType?: MessageType | string;

  /**
   * <p>The default Sender ID of the configuration set that was deleted.</p>
   */
  DefaultSenderId?: string;

  /**
   * <p>The time that the deleted configuration set was created in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface DeleteDefaultMessageTypeRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default message type from. The ConfigurationSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
   */
  ConfigurationSetName: string | undefined;
}

export interface DeleteDefaultMessageTypeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The current message type for the configuration set.</p>
   */
  MessageType?: MessageType | string;
}

export interface DeleteDefaultSenderIdRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn
   *             can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;
}

export interface DeleteDefaultSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The current sender ID for the configuration set.</p>
   */
  SenderId?: string;
}

export interface DeleteEventDestinationRequest {
  /**
   * <p>The name of the configuration set or the configuration set's Amazon Resource Name
   *             (ARN) to remove the event destination from. The ConfigurateSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination to delete.</p>
   */
  EventDestinationName: string | undefined;
}

export interface DeleteEventDestinationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set the event destination was deleted from.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The event destination object that was deleted.</p>
   */
  EventDestination?: EventDestination;
}

export interface DeleteKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or
   *             PoolArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn and <a>DescribePools</a> to find the values
   *             of PoolId and PoolArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The keyword to delete.</p>
   */
  Keyword: string | undefined;
}

export enum KeywordAction {
  AUTOMATIC_RESPONSE = "AUTOMATIC_RESPONSE",
  OPT_IN = "OPT_IN",
  OPT_OUT = "OPT_OUT",
}

export interface DeleteKeywordResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>The keyword that was deleted.</p>
   */
  Keyword?: string;

  /**
   * <p>The message that was associated with the deleted keyword.</p>
   */
  KeywordMessage?: string;

  /**
   * <p>The action that was associated with the deleted keyword.</p>
   */
  KeywordAction?: KeywordAction | string;
}

export interface DeleteOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to remove the phone number from.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>The phone number, in E.164 format, to remove from the OptOutList.</p>
   */
  OptedOutNumber: string | undefined;
}

export interface DeleteOptedOutNumberResult {
  /**
   * <p>The OptOutListArn that the phone number was removed from.</p>
   */
  OptOutListArn?: string;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   */
  OptOutListName?: string;

  /**
   * <p>The phone number that was removed from the OptOutList.</p>
   */
  OptedOutNumber?: string;

  /**
   * <p>The time that the number was removed at, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp?: Date;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   */
  EndUserOptedOut?: boolean;
}

export interface DeleteOptOutListRequest {
  /**
   * <p>The OptOutListName or OptOutListArn of the OptOutList to delete. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
   */
  OptOutListName: string | undefined;
}

export interface DeleteOptOutListResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList that was removed.</p>
   */
  OptOutListArn?: string;

  /**
   * <p>The name of the OptOutList that was removed.</p>
   */
  OptOutListName?: string;

  /**
   * <p>The time when the OptOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface DeletePoolRequest {
  /**
   * <p>The PoolId or PoolArn of the pool to delete. You can use <a>DescribePools</a> to find the values for PoolId and PoolArn .</p>
   */
  PoolId: string | undefined;
}

export interface DeletePoolResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool that was deleted.</p>
   */
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool that was deleted.</p>
   */
  PoolId?: string;

  /**
   * <p>The current status of the pool.</p>
   *         <ul>
   *             <li>
   *                 <p>CREATING: The pool is currently being created and isn't yet available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                 <p>ACTIVE: The pool is active and available for use.</p>
   *             </li>
   *             <li>
   *                 <p>DELETING: The pool is being deleted.</p>
   *             </li>
   *          </ul>
   */
  Status?: PoolStatus | string;

  /**
   * <p>The message type that was associated with the deleted pool.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that was associated with the deleted pool.</p>
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface DeleteTextMessageSpendLimitOverrideRequest {}

export interface DeleteTextMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   */
  MonthlyLimit?: number;
}

export interface DeleteVoiceMessageSpendLimitOverrideRequest {}

export interface DeleteVoiceMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit, in US dollars.</p>
   */
  MonthlyLimit?: number;
}

export interface DescribeAccountAttributesRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>An array of AccountAttributes objects.</p>
   */
  AccountAttributes?: AccountAttribute[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export interface DescribeAccountLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

export interface DescribeAccountLimitsResult {
  /**
   * <p>An array of AccountLimit objects that show the current spend limits.</p>
   */
  AccountLimits?: AccountLimit[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export interface DescribeConfigurationSetsRequest {
  /**
   * <p>An array of strings. Each element can be either a ConfigurationSetName or
   *             ConfigurationSetArn.</p>
   */
  ConfigurationSetNames?: string[];

  /**
   * <p>An array of filters to apply to the results that are returned.</p>
   */
  Filters?: ConfigurationSetFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

export interface DescribeConfigurationSetsResult {
  /**
   * <p>An array of ConfigurationSets objects.</p>
   */
  ConfigurationSets?: ConfigurationSetInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum KeywordFilterName {
  KEYWORD_ACTION = "keyword-action",
}

/**
 * <p>The information for keywords that meet a specified criteria.</p>
 */
export interface KeywordFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: KeywordFilterName | string | undefined;

  /**
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

export interface DescribeKeywordsRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>An array of keywords to search for.</p>
   */
  Keywords?: string[];

  /**
   * <p>An array of keyword filters to filter the results.</p>
   */
  Filters?: KeywordFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information for all keywords in a pool.</p>
 */
export interface KeywordInformation {
  /**
   * <p>The keyword as a string.</p>
   */
  Keyword: string | undefined;

  /**
   * <p>A custom message that can be used with the keyword.</p>
   */
  KeywordMessage: string | undefined;

  /**
   * <p>The action to perform for the keyword.</p>
   */
  KeywordAction: KeywordAction | string | undefined;
}

export interface DescribeKeywordsResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that is associated with the OriginationIdentity. </p>
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that is associated with the OriginationIdentity.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>An array of KeywordInformation objects that contain the results.</p>
   */
  Keywords?: KeywordInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum OptedOutFilterName {
  END_USER_OPTED_OUT = "end-user-opted-out",
}

/**
 * <p>The information for opted out numbers that meet a specified criteria.</p>
 */
export interface OptedOutFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: OptedOutFilterName | string | undefined;

  /**
   * <p>An array of values to filter for.</p>
   */
  Values: string[] | undefined;
}

export interface DescribeOptedOutNumbersRequest {
  /**
   * <p>The OptOutListName or OptOutListArn of the OptOutList. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>An array of phone numbers to search for in the OptOutList.</p>
   */
  OptedOutNumbers?: string[];

  /**
   * <p>An array of OptedOutFilter objects to filter the results on.</p>
   */
  Filters?: OptedOutFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information for an opted out number in an Amazon Web Services account.</p>
 */
export interface OptedOutNumberInformation {
  /**
   * <p>The phone number that is opted out.</p>
   */
  OptedOutNumber: string | undefined;

  /**
   * <p>The time that the op tout occurred, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp: Date | undefined;

  /**
   * <p>This is set to true if it was the end recipient that opted out.</p>
   */
  EndUserOptedOut: boolean | undefined;
}

export interface DescribeOptedOutNumbersResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   */
  OptOutListArn?: string;

  /**
   * <p>The name of the OptOutList.</p>
   */
  OptOutListName?: string;

  /**
   * <p>An array of OptedOutNumbersInformation objects that provide information about the
   *             requested OptedOutNumbers.</p>
   */
  OptedOutNumbers?: OptedOutNumberInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export interface DescribeOptOutListsRequest {
  /**
   * <p>The OptOutLists to show the details of. This is an array of strings that can be either
   *             the OptOutListName or OptOutListArn.</p>
   */
  OptOutListNames?: string[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information for all OptOutList in an Amazon Web Services account.</p>
 */
export interface OptOutListInformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   */
  OptOutListArn: string | undefined;

  /**
   * <p>The name of the OptOutList.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>The time when the OutOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

export interface DescribeOptOutListsResult {
  /**
   * <p>An array of OptOutListInformation objects that contain the details for the requested
   *             OptOutLists.</p>
   */
  OptOutLists?: OptOutListInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum PhoneNumberFilterName {
  DELETION_PROTECTION_ENABLED = "deletion-protection-enabled",
  ISO_COUNTRY_CODE = "iso-country-code",
  MESSAGE_TYPE = "message-type",
  NUMBER_CAPABILITY = "number-capability",
  NUMBER_TYPE = "number-type",
  OPT_OUT_LIST_NAME = "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED = "self-managed-opt-outs-enabled",
  STATUS = "status",
  TWO_WAY_ENABLED = "two-way-enabled",
}

/**
 * <p>The information for a phone number that meets a specified criteria.</p>
 */
export interface PhoneNumberFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PhoneNumberFilterName | string | undefined;

  /**
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

export interface DescribePhoneNumbersRequest {
  /**
   * <p>The unique identifier of phone numbers to find information about. This is an array of
   *             strings that can be either the PhoneNumberId or PhoneNumberArn.</p>
   */
  PhoneNumberIds?: string[];

  /**
   * <p>An array of PhoneNumberFilter objects to filter the results.</p>
   */
  Filters?: PhoneNumberFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

export enum NumberCapability {
  SMS = "SMS",
  VOICE = "VOICE",
}

export enum NumberType {
  LONG_CODE = "LONG_CODE",
  SHORT_CODE = "SHORT_CODE",
  TEN_DLC = "TEN_DLC",
  TOLL_FREE = "TOLL_FREE",
}

export enum NumberStatus {
  ACTIVE = "ACTIVE",
  ASSOCIATING = "ASSOCIATING",
  DELETED = "DELETED",
  DISASSOCIATING = "DISASSOCIATING",
  PENDING = "PENDING",
}

/**
 * <p>The information for a phone number in an Amazon Web Services account.</p>
 */
export interface PhoneNumberInformation {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the phone number.</p>
   */
  PhoneNumberArn: string | undefined;

  /**
   * <p>The unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number in E.164 format.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The current status of the phone number.</p>
   */
  Status: NumberStatus | string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | string | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
   */
  NumberCapabilities: (NumberCapability | string)[] | undefined;

  /**
   * <p>The type of phone number.</p>
   */
  NumberType: NumberType | string | undefined;

  /**
   * <p>The price, in US dollars, to lease the phone number.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients using the TwoWayChannelArn.</p>
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>When set to false an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out request. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The unique identifier of the pool associated with the phone number.</p>
   */
  PoolId?: string;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

export interface DescribePhoneNumbersResult {
  /**
   * <p>An array of PhoneNumberInformation objects that contain the details for the requested
   *             phone numbers.</p>
   */
  PhoneNumbers?: PhoneNumberInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum PoolFilterName {
  DELETION_PROTECTION_ENABLED = "deletion-protection-enabled",
  MESSAGE_TYPE = "message-type",
  OPT_OUT_LIST_NAME = "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED = "self-managed-opt-outs-enabled",
  SHARED_ROUTES_ENABLED = "shared-routes-enabled",
  STATUS = "status",
  TWO_WAY_ENABLED = "two-way-enabled",
}

/**
 * <p>The information for a pool that meets a specified criteria.</p>
 */
export interface PoolFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PoolFilterName | string | undefined;

  /**
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

export interface DescribePoolsRequest {
  /**
   * <p>The unique identifier of pools to find. This is an array of strings that can be either
   *             the PoolId or PoolArn.</p>
   */
  PoolIds?: string[];

  /**
   * <p>An array of PoolFilter objects to filter the results.</p>
   */
  Filters?: PoolFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information for a pool in an Amazon Web Services account.</p>
 */
export interface PoolInformation {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn: string | undefined;

  /**
   * <p>The unique identifier for the pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The current status of the pool.</p>
   */
  Status: PoolStatus | string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | string | undefined;

  /**
   * <p>When set to true you can receive incoming text messages from your end recipients using
   *             the TwoWayChannelArn.</p>
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>When set to false, an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out requests. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>Allows you to enable shared routes on your pool.</p>
   *         <p>By default, this is set to <code>False</code>. If you set this value to
   *                 <code>True</code>, your messages are sent using phone numbers or sender IDs
   *             (depending on the country) that are shared with other Amazon Pinpoint users. In some
   *             countries, such as the United States, senders aren't allowed to use shared routes and
   *             must use a dedicated phone number or short code.</p>
   */
  SharedRoutesEnabled: boolean | undefined;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

export interface DescribePoolsResult {
  /**
   * <p>An array of PoolInformation objects that contain the details for the requested pools. </p>
   */
  Pools?: PoolInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum SenderIdFilterName {
  ISO_COUNTRY_CODE = "iso-country-code",
  MESSAGE_TYPE = "message-type",
  SENDER_ID = "sender-id",
}

/**
 * <p>The information for a sender ID that meets a specified criteria.</p>
 */
export interface SenderIdFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: SenderIdFilterName | string | undefined;

  /**
   * <p>An array of values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p> The alphanumeric sender ID in a specific country that you want to describe. For more
 *             information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting
 *                 sender IDs for SMS messaging with Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 */
export interface SenderIdAndCountry {
  /**
   * <p>The unique identifier of the sender.</p>
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;
}

export interface DescribeSenderIdsRequest {
  /**
   * <p>An array of SenderIdAndCountry objects to search for.</p>
   */
  SenderIds?: SenderIdAndCountry[];

  /**
   * <p>An array of SenderIdFilter objects to filter the results.</p>
   */
  Filters?: SenderIdFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information for all SenderIds in an Amazon Web Services account.</p>
 */
export interface SenderIdInformation {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   */
  SenderIdArn: string | undefined;

  /**
   * <p>The alphanumeric sender ID in a specific country that you'd like to describe.</p>
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes: (MessageType | string)[] | undefined;

  /**
   * <p>The monthly leasing price, in US dollars.</p>
   */
  MonthlyLeasingPrice: string | undefined;
}

export interface DescribeSenderIdsResult {
  /**
   * <p>An array of SernderIdInformation objects that contain the details for the requested
   *             SenderIds.</p>
   */
  SenderIds?: SenderIdInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export interface DescribeSpendLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

export enum SpendLimitName {
  TEXT_MESSAGE_MONTHLY_SPEND_LIMIT = "TEXT_MESSAGE_MONTHLY_SPEND_LIMIT",
  VOICE_MESSAGE_MONTHLY_SPEND_LIMIT = "VOICE_MESSAGE_MONTHLY_SPEND_LIMIT",
}

/**
 * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and
 *             text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html">
 *                 Requesting increases to your monthly SMS spending quota for Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>. </p>
 */
export interface SpendLimit {
  /**
   * <p>The name for the SpendLimit.</p>
   */
  Name: SpendLimitName | string | undefined;

  /**
   * <p>The maximum amount of money, in US dollars, that you want to be able to spend sending
   *             messages each month. This value has to be less than or equal to the amount in
   *                 <code>MaxLimit</code>. To use this custom limit, <code>Overridden</code> must be set
   *             to true.</p>
   */
  EnforcedLimit: number | undefined;

  /**
   * <p> The maximum amount of money that you are able to spend to send messages each month,
   *             in US dollars.</p>
   */
  MaxLimit: number | undefined;

  /**
   * <p>When set to <code>True</code>, the value that has been specified in the
   *                 <code>EnforcedLimit</code> is used to determine the maximum amount in US dollars
   *             that can be spent to send messages each month, in US dollars.</p>
   */
  Overridden: boolean | undefined;
}

export interface DescribeSpendLimitsResult {
  /**
   * <p>An array of SpendLimit objects that contain the details for the requested spend
   *             limits.</p>
   */
  SpendLimits?: SpendLimit[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export enum DestinationCountryParameterKey {
  IN_ENTITY_ID = "IN_ENTITY_ID",
  IN_TEMPLATE_ID = "IN_TEMPLATE_ID",
}

export interface DisassociateOriginationIdentityRequest {
  /**
   * <p>The unique identifier for the pool to disassociate with the origination identity. This
   *             value can be either the PoolId or PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> find the values for
   *             PhoneNumberId and PhoneNumberArn, or use <a>DescribeSenderIds</a> to get the
   *             values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface DisassociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool.</p>
   */
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool no longer associated with the origination identity.</p>
   */
  PoolId?: string;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   */
  IsoCountryCode?: string;
}

export enum PoolOriginationIdentitiesFilterName {
  ISO_COUNTRY_CODE = "iso-country-code",
  NUMBER_CAPABILITY = "number-capability",
}

/**
 * <p>Information about origination identities associated with a pool that meets a specified
 *             criteria.</p>
 */
export interface PoolOriginationIdentitiesFilter {
  /**
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PoolOriginationIdentitiesFilterName | string | undefined;

  /**
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

export interface ListPoolOriginationIdentitiesRequest {
  /**
   * <p>The unique identifier for the pool. This value can be either the PoolId or
   *             PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>An array of PoolOriginationIdentitiesFilter objects to filter the results..</p>
   */
  Filters?: PoolOriginationIdentitiesFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The metadata for an origination identity associated with a pool.</p>
 */
export interface OriginationIdentityMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the origination identity.</p>
   */
  OriginationIdentityArn: string | undefined;

  /**
   * <p>The unique identifier of the origination identity.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
   */
  NumberCapabilities: (NumberCapability | string)[] | undefined;
}

export interface ListPoolOriginationIdentitiesResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn?: string;

  /**
   * <p>The unique PoolId of the pool.</p>
   */
  PoolId?: string;

  /**
   * <p>An array of any OriginationIdentityMetadata objects.</p>
   */
  OriginationIdentities?: OriginationIdentityMetadata[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to query for.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   */
  Tags?: Tag[];
}

export interface PutKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> get the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new keyword to add.</p>
   */
  Keyword: string | undefined;

  /**
   * <p>The message associated with the keyword.</p>
   *         <ul>
   *             <li>
   *                 <p>AUTOMATIC_RESPONSE: A message is sent to the recipient.</p>
   *             </li>
   *             <li>
   *                 <p>OPT_OUT: Keeps the recipient from receiving future messages.</p>
   *             </li>
   *             <li>
   *                 <p>OPT_IN: The recipient wants to receive future messages.</p>
   *             </li>
   *          </ul>
   */
  KeywordMessage: string | undefined;

  /**
   * <p>The action to perform for the new keyword when it is received.</p>
   */
  KeywordAction?: KeywordAction | string;
}

export interface PutKeywordResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>The keyword that was added.</p>
   */
  Keyword?: string;

  /**
   * <p>The message associated with the keyword.</p>
   */
  KeywordMessage?: string;

  /**
   * <p>The action to perform when the keyword is used.</p>
   */
  KeywordAction?: KeywordAction | string;
}

export interface PutOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to add the phone number to.</p>
   */
  OptOutListName: string | undefined;

  /**
   * <p>The phone number to add to the OptOutList in E.164 format.</p>
   */
  OptedOutNumber: string | undefined;
}

export interface PutOptedOutNumberResult {
  /**
   * <p>The OptOutListArn that the phone number was removed from.</p>
   */
  OptOutListArn?: string;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   */
  OptOutListName?: string;

  /**
   * <p>The phone number that was added to the OptOutList.</p>
   */
  OptedOutNumber?: string;

  /**
   * <p>The time that the phone number was added to the OptOutList, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp?: Date;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   */
  EndUserOptedOut?: boolean;
}

export interface ReleasePhoneNumberRequest {
  /**
   * <p>The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use <a>DescribePhoneNumbers</a> to get the values for PhoneNumberId and
   *             PhoneNumberArn.</p>
   */
  PhoneNumberId: string | undefined;
}

export interface ReleasePhoneNumberResult {
  /**
   * <p>The PhoneNumberArn of the phone number that was released.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The PhoneNumberId of the phone number that was released.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number that was released.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus | string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The message type that was associated with the phone number.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>Specifies if the number could be used for text messages, voice, or both.</p>
   */
  NumberCapabilities?: (NumberCapability | string)[];

  /**
   * <p>The type of number that was released.</p>
   */
  NumberType?: NumberType | string;

  /**
   * <p>The monthly price of the phone number, in US dollars.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that was associated with the phone number.</p>
   */
  OptOutListName?: string;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export enum RequestableNumberType {
  LONG_CODE = "LONG_CODE",
  TEN_DLC = "TEN_DLC",
  TOLL_FREE = "TOLL_FREE",
}

export interface RequestPhoneNumberRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | string | undefined;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages, or both. </p>
   */
  NumberCapabilities: (NumberCapability | string)[] | undefined;

  /**
   * <p>The type of phone number to request.</p>
   */
  NumberType: RequestableNumberType | string | undefined;

  /**
   * <p>The name of the OptOutList to associate with the phone number. You can use the
   *             OutOutListName or OptPutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * <p>The pool to associated with the phone number. You can use the PoolId or PoolArn. </p>
   */
  PoolId?: string;

  /**
   * <p>Use this field to attach your phone number for an external registration
   *             process.</p>
   */
  RegistrationId?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be
   *             deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associate with the requested phone number.
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

export interface RequestPhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The unique identifier of the new phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The new phone number that was requested.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus | string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages or both.
   *         </p>
   */
  NumberCapabilities?: (NumberCapability | string)[];

  /**
   * <p>The type of number that was released.</p>
   */
  NumberType?: RequestableNumberType | string;

  /**
   * <p>The monthly price, in US dollars, to lease the phone number.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The ARN used to identify the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that is associated with the requested phone number.</p>
   */
  OptOutListName?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The unique identifier of the pool associated with the phone number </p>
   */
  PoolId?: string;

  /**
   * <p>An array of key and value pair tags that are associated with the phone number.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface SendTextMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   */
  OriginationIdentity?: string;

  /**
   * <p>The body of the text message.</p>
   */
  MessageBody?: string;

  /**
   * <p>The type of message. Valid values are
   *             TRANSACTIONAL
   *             for messages that are critical or time-sensitive and PROMOTIONAL for messages that
   *             aren't critical or time-sensitive.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>When you register a short code in the US, you must specify a program name. If you
   *             don’t have a US short code, omit this attribute.</p>
   */
  Keyword?: string;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each text message part.
   *             A text message can contain multiple parts.</p>
   */
  MaxPrice?: string;

  /**
   * <p>How long the text message is valid for. By default this is 72 hours.</p>
   */
  TimeToLive?: number;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>This field is used for any country-specific registration requirements. Currently, this
   *             setting is only used when you send messages to recipients in India using a sender ID.
   *             For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>.
   *         </p>
   */
  DestinationCountryParameters?: Record<string, string>;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   */
  DryRun?: boolean;
}

export interface SendTextMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   */
  MessageId?: string;
}

export enum VoiceMessageBodyTextType {
  SSML = "SSML",
  TEXT = "TEXT",
}

export enum VoiceId {
  AMY = "AMY",
  ASTRID = "ASTRID",
  BIANCA = "BIANCA",
  BRIAN = "BRIAN",
  CAMILA = "CAMILA",
  CARLA = "CARLA",
  CARMEN = "CARMEN",
  CELINE = "CELINE",
  CHANTAL = "CHANTAL",
  CONCHITA = "CONCHITA",
  CRISTIANO = "CRISTIANO",
  DORA = "DORA",
  EMMA = "EMMA",
  ENRIQUE = "ENRIQUE",
  EWA = "EWA",
  FILIZ = "FILIZ",
  GERAINT = "GERAINT",
  GIORGIO = "GIORGIO",
  GWYNETH = "GWYNETH",
  HANS = "HANS",
  INES = "INES",
  IVY = "IVY",
  JACEK = "JACEK",
  JAN = "JAN",
  JOANNA = "JOANNA",
  JOEY = "JOEY",
  JUSTIN = "JUSTIN",
  KARL = "KARL",
  KENDRA = "KENDRA",
  KIMBERLY = "KIMBERLY",
  LEA = "LEA",
  LIV = "LIV",
  LOTTE = "LOTTE",
  LUCIA = "LUCIA",
  LUPE = "LUPE",
  MADS = "MADS",
  MAJA = "MAJA",
  MARLENE = "MARLENE",
  MATHIEU = "MATHIEU",
  MATTHEW = "MATTHEW",
  MAXIM = "MAXIM",
  MIA = "MIA",
  MIGUEL = "MIGUEL",
  MIZUKI = "MIZUKI",
  NAJA = "NAJA",
  NICOLE = "NICOLE",
  PENELOPE = "PENELOPE",
  RAVEENA = "RAVEENA",
  RICARDO = "RICARDO",
  RUBEN = "RUBEN",
  RUSSELL = "RUSSELL",
  SALLI = "SALLI",
  SEOYEON = "SEOYEON",
  TAKUMI = "TAKUMI",
  TATYANA = "TATYANA",
  VICKI = "VICKI",
  VITORIA = "VITORIA",
  ZEINA = "ZEINA",
  ZHIYU = "ZHIYU",
}

export interface SendVoiceMessageRequest {
  /**
   * <p>The destination phone number in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity to use for the voice call. This can be the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The text to convert to a voice message.</p>
   */
  MessageBody?: string;

  /**
   * <p>Specifies if the MessageBody field contains text or <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">speech synthesis
   *                 markup language (SSML)</a>.</p>
   *         <ul>
   *             <li>
   *                 <p>TEXT: This is the default value. When used the maximum character limit is
   *                     3000.</p>
   *             </li>
   *             <li>
   *                 <p>SSML: When used the maximum character limit is 6000 including SSML
   *                     tagging.</p>
   *             </li>
   *          </ul>
   */
  MessageBodyTextType?: VoiceMessageBodyTextType | string;

  /**
   * <p>The voice for the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly</a>
   *             service to use. By default this is set to "MATTHEW".</p>
   */
  VoiceId?: VoiceId | string;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The maximum amount to spend per voice message, in US dollars.</p>
   */
  MaxPricePerMinute?: string;

  /**
   * <p>How long the voice message is valid for. By default this is 72 hours.</p>
   */
  TimeToLive?: number;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   */
  DryRun?: boolean;
}

export interface SendVoiceMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   */
  MessageId?: string;
}

export interface SetDefaultMessageTypeRequest {
  /**
   * <p>The configuration set to update with a new default message type. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | string | undefined;
}

export interface SetDefaultMessageTypeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set that was updated.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The new default message type of the configuration set.</p>
   */
  MessageType?: MessageType | string;
}

export interface SetDefaultSenderIdRequest {
  /**
   * <p>The configuration set to updated with a new default SenderId. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The current sender ID for the configuration set. When sending a text message to a
   *             destination country which supports SenderIds, the default sender ID on the configuration
   *             set specified on <a>SendTextMessage</a> will be used if no dedicated
   *             origination phone numbers or registered SenderIds are available in your account, instead
   *             of a generic sender ID, such as 'NOTICE'.</p>
   */
  SenderId: string | undefined;
}

export interface SetDefaultSenderIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set that was updated.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The default sender ID to set for the ConfigurationSet.</p>
   */
  SenderId?: string;
}

export interface SetTextMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on text messages.</p>
   */
  MonthlyLimit: number | undefined;
}

export interface SetTextMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on sending text messages.</p>
   */
  MonthlyLimit?: number;
}

export interface SetVoiceMessageSpendLimitOverrideRequest {
  /**
   * <p>The new monthly limit to enforce on voice messages.</p>
   */
  MonthlyLimit: number | undefined;
}

export interface SetVoiceMessageSpendLimitOverrideResult {
  /**
   * <p>The current monthly limit to enforce on sending voice messages.</p>
   */
  MonthlyLimit?: number;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResult {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag key values to unassociate with the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResult {}

export interface UpdateEventDestinationRequest {
  /**
   * <p>The configuration set to update with the new event destination. Valid values for this
   *             can be the ConfigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name to use for the event destination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * <p>When set to true logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An array of event types that determine which events to log.</p>
   */
  MatchingEventTypes?: (EventType | string)[];

  /**
   * <p>An object that contains information about an event destination that sends data to
   *                 CloudWatch Logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination that sends data to
   *                 Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;
}

export interface UpdateEventDestinationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An EventDestination object containing the details of where events will be logged.
   *         </p>
   */
  EventDestination?: EventDestination;
}

export interface UpdatePhoneNumberRequest {
  /**
   * <p>The unique identifier of the phone number. Valid values for this field can be either
   *             the PhoneNumberId or PhoneNumberArn.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The OptOutList to add the phone number to. Valid values for this field can be either
   *             the OutOutListName or OutOutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;
}

export interface UpdatePhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The unique identifier of the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number that was updated.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus | string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>Specifies if the number could be used for text messages, voice or both.</p>
   */
  NumberCapabilities?: (NumberCapability | string)[];

  /**
   * <p>The type of number that was requested.</p>
   */
  NumberType?: NumberType | string;

  /**
   * <p>The monthly leasing price of the phone number, in US dollars.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>This is true if self managed opt-out are enabled.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   */
  OptOutListName?: string;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

export interface UpdatePoolRequest {
  /**
   * <p>The unique identifier of the pool to update. Valid values are either the PoolId or
   *             PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The OptOutList to associate with the pool. Valid values are either OptOutListName or
   *             OptOutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;
}

export interface UpdatePoolResult {
  /**
   * <p>The ARN of the pool.</p>
   */
  PoolArn?: string;

  /**
   * <p>The unique identifier of the pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The current status of the pool update request.</p>
   */
  Status?: PoolStatus | string;

  /**
   * <p>The type of message for the pool to use.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * <p>When an end recipient sends a message that begins with HELP or STOP to one of your
   *             dedicated numbers, Amazon Pinpoint automatically replies with a customizable message
   *             and adds the end recipient to the OptOutList. When set to true you're responsible for
   *             responding to HELP and STOP requests. You're also responsible for tracking and honoring
   *             opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @internal
 */
export const AccountAttributeFilterSensitiveLog = (obj: AccountAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountLimitFilterSensitiveLog = (obj: AccountLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateOriginationIdentityRequestFilterSensitiveLog = (
  obj: AssociateOriginationIdentityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateOriginationIdentityResultFilterSensitiveLog = (obj: AssociateOriginationIdentityResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationFilterSensitiveLog = (obj: CloudWatchLogsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSetFilterFilterSensitiveLog = (obj: ConfigurationSetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseDestinationFilterSensitiveLog = (obj: KinesisFirehoseDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsDestinationFilterSensitiveLog = (obj: SnsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDestinationFilterSensitiveLog = (obj: EventDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSetInformationFilterSensitiveLog = (obj: ConfigurationSetInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetRequestFilterSensitiveLog = (obj: CreateConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetResultFilterSensitiveLog = (obj: CreateConfigurationSetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventDestinationRequestFilterSensitiveLog = (obj: CreateEventDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventDestinationResultFilterSensitiveLog = (obj: CreateEventDestinationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOptOutListRequestFilterSensitiveLog = (obj: CreateOptOutListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOptOutListResultFilterSensitiveLog = (obj: CreateOptOutListResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePoolRequestFilterSensitiveLog = (obj: CreatePoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePoolResultFilterSensitiveLog = (obj: CreatePoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetRequestFilterSensitiveLog = (obj: DeleteConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetResultFilterSensitiveLog = (obj: DeleteConfigurationSetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDefaultMessageTypeRequestFilterSensitiveLog = (obj: DeleteDefaultMessageTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDefaultMessageTypeResultFilterSensitiveLog = (obj: DeleteDefaultMessageTypeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDefaultSenderIdRequestFilterSensitiveLog = (obj: DeleteDefaultSenderIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDefaultSenderIdResultFilterSensitiveLog = (obj: DeleteDefaultSenderIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventDestinationRequestFilterSensitiveLog = (obj: DeleteEventDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventDestinationResultFilterSensitiveLog = (obj: DeleteEventDestinationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteKeywordRequestFilterSensitiveLog = (obj: DeleteKeywordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteKeywordResultFilterSensitiveLog = (obj: DeleteKeywordResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOptedOutNumberRequestFilterSensitiveLog = (obj: DeleteOptedOutNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOptedOutNumberResultFilterSensitiveLog = (obj: DeleteOptedOutNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOptOutListRequestFilterSensitiveLog = (obj: DeleteOptOutListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOptOutListResultFilterSensitiveLog = (obj: DeleteOptOutListResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePoolRequestFilterSensitiveLog = (obj: DeletePoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePoolResultFilterSensitiveLog = (obj: DeletePoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTextMessageSpendLimitOverrideRequestFilterSensitiveLog = (
  obj: DeleteTextMessageSpendLimitOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTextMessageSpendLimitOverrideResultFilterSensitiveLog = (
  obj: DeleteTextMessageSpendLimitOverrideResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceMessageSpendLimitOverrideRequestFilterSensitiveLog = (
  obj: DeleteVoiceMessageSpendLimitOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceMessageSpendLimitOverrideResultFilterSensitiveLog = (
  obj: DeleteVoiceMessageSpendLimitOverrideResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesRequestFilterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesResultFilterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountLimitsRequestFilterSensitiveLog = (obj: DescribeAccountLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountLimitsResultFilterSensitiveLog = (obj: DescribeAccountLimitsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationSetsRequestFilterSensitiveLog = (obj: DescribeConfigurationSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationSetsResultFilterSensitiveLog = (obj: DescribeConfigurationSetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeywordFilterFilterSensitiveLog = (obj: KeywordFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeKeywordsRequestFilterSensitiveLog = (obj: DescribeKeywordsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeywordInformationFilterSensitiveLog = (obj: KeywordInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeKeywordsResultFilterSensitiveLog = (obj: DescribeKeywordsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptedOutFilterFilterSensitiveLog = (obj: OptedOutFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOptedOutNumbersRequestFilterSensitiveLog = (obj: DescribeOptedOutNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptedOutNumberInformationFilterSensitiveLog = (obj: OptedOutNumberInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOptedOutNumbersResultFilterSensitiveLog = (obj: DescribeOptedOutNumbersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOptOutListsRequestFilterSensitiveLog = (obj: DescribeOptOutListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptOutListInformationFilterSensitiveLog = (obj: OptOutListInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOptOutListsResultFilterSensitiveLog = (obj: DescribeOptOutListsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberFilterFilterSensitiveLog = (obj: PhoneNumberFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePhoneNumbersRequestFilterSensitiveLog = (obj: DescribePhoneNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberInformationFilterSensitiveLog = (obj: PhoneNumberInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePhoneNumbersResultFilterSensitiveLog = (obj: DescribePhoneNumbersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoolFilterFilterSensitiveLog = (obj: PoolFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePoolsRequestFilterSensitiveLog = (obj: DescribePoolsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoolInformationFilterSensitiveLog = (obj: PoolInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePoolsResultFilterSensitiveLog = (obj: DescribePoolsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SenderIdFilterFilterSensitiveLog = (obj: SenderIdFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SenderIdAndCountryFilterSensitiveLog = (obj: SenderIdAndCountry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSenderIdsRequestFilterSensitiveLog = (obj: DescribeSenderIdsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SenderIdInformationFilterSensitiveLog = (obj: SenderIdInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSenderIdsResultFilterSensitiveLog = (obj: DescribeSenderIdsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpendLimitsRequestFilterSensitiveLog = (obj: DescribeSpendLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpendLimitFilterSensitiveLog = (obj: SpendLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpendLimitsResultFilterSensitiveLog = (obj: DescribeSpendLimitsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateOriginationIdentityRequestFilterSensitiveLog = (
  obj: DisassociateOriginationIdentityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateOriginationIdentityResultFilterSensitiveLog = (
  obj: DisassociateOriginationIdentityResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoolOriginationIdentitiesFilterFilterSensitiveLog = (obj: PoolOriginationIdentitiesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPoolOriginationIdentitiesRequestFilterSensitiveLog = (
  obj: ListPoolOriginationIdentitiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginationIdentityMetadataFilterSensitiveLog = (obj: OriginationIdentityMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPoolOriginationIdentitiesResultFilterSensitiveLog = (
  obj: ListPoolOriginationIdentitiesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutKeywordRequestFilterSensitiveLog = (obj: PutKeywordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutKeywordResultFilterSensitiveLog = (obj: PutKeywordResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOptedOutNumberRequestFilterSensitiveLog = (obj: PutOptedOutNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutOptedOutNumberResultFilterSensitiveLog = (obj: PutOptedOutNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleasePhoneNumberRequestFilterSensitiveLog = (obj: ReleasePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleasePhoneNumberResultFilterSensitiveLog = (obj: ReleasePhoneNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestPhoneNumberRequestFilterSensitiveLog = (obj: RequestPhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestPhoneNumberResultFilterSensitiveLog = (obj: RequestPhoneNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTextMessageRequestFilterSensitiveLog = (obj: SendTextMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTextMessageResultFilterSensitiveLog = (obj: SendTextMessageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendVoiceMessageRequestFilterSensitiveLog = (obj: SendVoiceMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendVoiceMessageResultFilterSensitiveLog = (obj: SendVoiceMessageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultMessageTypeRequestFilterSensitiveLog = (obj: SetDefaultMessageTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultMessageTypeResultFilterSensitiveLog = (obj: SetDefaultMessageTypeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultSenderIdRequestFilterSensitiveLog = (obj: SetDefaultSenderIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultSenderIdResultFilterSensitiveLog = (obj: SetDefaultSenderIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetTextMessageSpendLimitOverrideRequestFilterSensitiveLog = (
  obj: SetTextMessageSpendLimitOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetTextMessageSpendLimitOverrideResultFilterSensitiveLog = (
  obj: SetTextMessageSpendLimitOverrideResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetVoiceMessageSpendLimitOverrideRequestFilterSensitiveLog = (
  obj: SetVoiceMessageSpendLimitOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetVoiceMessageSpendLimitOverrideResultFilterSensitiveLog = (
  obj: SetVoiceMessageSpendLimitOverrideResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventDestinationRequestFilterSensitiveLog = (obj: UpdateEventDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventDestinationResultFilterSensitiveLog = (obj: UpdateEventDestinationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestFilterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberResultFilterSensitiveLog = (obj: UpdatePhoneNumberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePoolRequestFilterSensitiveLog = (obj: UpdatePoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePoolResultFilterSensitiveLog = (obj: UpdatePoolResult): any => ({
  ...obj,
});

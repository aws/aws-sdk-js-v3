// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PinpointSMSVoiceV2ServiceException as __BaseException } from "./PinpointSMSVoiceV2ServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  ACCOUNT_DISABLED: "ACCOUNT_DISABLED",
  INSUFFICIENT_ACCOUNT_REPUTATION: "INSUFFICIENT_ACCOUNT_REPUTATION",
} as const;

/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The reason for the exception.</p>
   */
  Reason?: AccessDeniedExceptionReason;
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

/**
 * @public
 * @enum
 */
export const AccountAttributeName = {
  ACCOUNT_TIER: "ACCOUNT_TIER",
} as const;

/**
 * @public
 */
export type AccountAttributeName = (typeof AccountAttributeName)[keyof typeof AccountAttributeName];

/**
 * @public
 * <p>Displays the attributes associated with a single Amazon Web Services account.</p>
 */
export interface AccountAttribute {
  /**
   * @public
   * <p>The name of the account attribute.</p>
   */
  Name: AccountAttributeName | undefined;

  /**
   * @public
   * <p>The value associated with the account attribute name.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AccountLimitName = {
  CONFIGURATION_SETS: "CONFIGURATION_SETS",
  OPT_OUT_LISTS: "OPT_OUT_LISTS",
  PHONE_NUMBERS: "PHONE_NUMBERS",
  POOLS: "POOLS",
  REGISTRATIONS: "REGISTRATIONS",
  REGISTRATION_ATTACHMENTS: "REGISTRATION_ATTACHMENTS",
  SENDER_IDS: "SENDER_IDS",
  VERIFIED_DESTINATION_NUMBERS: "VERIFIED_DESTINATION_NUMBERS",
} as const;

/**
 * @public
 */
export type AccountLimitName = (typeof AccountLimitName)[keyof typeof AccountLimitName];

/**
 * @public
 * <p>The current resource quotas associated with an Amazon Web Services account.</p>
 */
export interface AccountLimit {
  /**
   * @public
   * <p>The name of the attribute to apply the account limit to.</p>
   */
  Name: AccountLimitName | undefined;

  /**
   * @public
   * <p>The current amount that has been spent, in US dollars.</p>
   */
  Used: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services set limit for that resource type, in US dollars.</p>
   */
  Max: number | undefined;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityRequest {
  /**
   * @public
   * <p>The pool to update with the new Identity. This value can be either the PoolId or
   *             PoolArn, and you can find these values using <a>DescribePools</a>.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn, while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the origination identity.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pool that is now associated with the origination
   *             identity.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The PoolId of the pool that is now associated with the origination identity.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;
}

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CREATE_REGISTRATION_VERSION_NOT_ALLOWED: "CREATE_REGISTRATION_VERSION_NOT_ALLOWED",
  DELETION_PROTECTION_ENABLED: "DELETION_PROTECTION_ENABLED",
  DESTINATION_PHONE_NUMBER_NOT_VERIFIED: "DESTINATION_PHONE_NUMBER_NOT_VERIFIED",
  DESTINATION_PHONE_NUMBER_OPTED_OUT: "DESTINATION_PHONE_NUMBER_OPTED_OUT",
  DISASSOCIATE_REGISTRATION_NOT_ALLOWED: "DISASSOCIATE_REGISTRATION_NOT_ALLOWED",
  DISCARD_REGISTRATION_VERSION_NOT_ALLOWED: "DISCARD_REGISTRATION_VERSION_NOT_ALLOWED",
  EDIT_REGISTRATION_FIELD_VALUES_NOT_ALLOWED: "EDIT_REGISTRATION_FIELD_VALUES_NOT_ALLOWED",
  EVENT_DESTINATION_MISMATCH: "EVENT_DESTINATION_MISMATCH",
  KEYWORD_MISMATCH: "KEYWORD_MISMATCH",
  LAST_PHONE_NUMBER: "LAST_PHONE_NUMBER",
  MESSAGE_TYPE_MISMATCH: "MESSAGE_TYPE_MISMATCH",
  NO_ORIGINATION_IDENTITIES_FOUND: "NO_ORIGINATION_IDENTITIES_FOUND",
  NUMBER_CAPABILITIES_MISMATCH: "NUMBER_CAPABILITIES_MISMATCH",
  OPT_OUT_LIST_MISMATCH: "OPT_OUT_LIST_MISMATCH",
  PHONE_NUMBER_ASSOCIATED_TO_POOL: "PHONE_NUMBER_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_ASSOCIATED_TO_REGISTRATION: "PHONE_NUMBER_ASSOCIATED_TO_REGISTRATION",
  PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL: "PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_NOT_IN_REGISTRATION_REGION: "PHONE_NUMBER_NOT_IN_REGISTRATION_REGION",
  REGISTRATION_ALREADY_SUBMITTED: "REGISTRATION_ALREADY_SUBMITTED",
  REGISTRATION_NOT_COMPLETE: "REGISTRATION_NOT_COMPLETE",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DELETION_NOT_ALLOWED: "RESOURCE_DELETION_NOT_ALLOWED",
  RESOURCE_MODIFICATION_NOT_ALLOWED: "RESOURCE_MODIFICATION_NOT_ALLOWED",
  RESOURCE_NOT_ACTIVE: "RESOURCE_NOT_ACTIVE",
  RESOURCE_NOT_EMPTY: "RESOURCE_NOT_EMPTY",
  SELF_MANAGED_OPT_OUTS_MISMATCH: "SELF_MANAGED_OPT_OUTS_MISMATCH",
  SENDER_ID_ASSOCIATED_TO_POOL: "SENDER_ID_ASSOCIATED_TO_POOL",
  SUBMIT_REGISTRATION_VERSION_NOT_ALLOWED: "SUBMIT_REGISTRATION_VERSION_NOT_ALLOWED",
  TWO_WAY_CONFIG_MISMATCH: "TWO_WAY_CONFIG_MISMATCH",
  VERIFICATION_ALREADY_COMPLETE: "VERIFICATION_ALREADY_COMPLETE",
  VERIFICATION_CODE_EXPIRED: "VERIFICATION_CODE_EXPIRED",
} as const;

/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ACCOUNT: "account",
  CONFIGURATION_SET: "configuration-set",
  EVENT_DESTINATION: "event-destination",
  KEYWORD: "keyword",
  OPTED_OUT_NUMBER: "opted-out-number",
  OPT_OUT_LIST: "opt-out-list",
  PHONE_NUMBER: "phone-number",
  POOL: "pool",
  REGISTRATION: "registration",
  REGISTRATION_ATTACHMENT: "registration-attachment",
  SENDER_ID: "sender-id",
  VERIFIED_DESTINATION_NUMBER: "verified-destination-number",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
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
   * @public
   * <p>The reason for the exception.</p>
   */
  Reason?: ConflictExceptionReason;

  /**
   * @public
   * <p>The type of resource that caused the exception.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
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
 * @public
 * <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string;
  /**
   * @public
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
 * @public
 * <p>A requested resource couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The type of resource that caused the exception.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  ASSOCIATIONS_PER_REGISTRATION: "ASSOCIATIONS_PER_REGISTRATION",
  CONFIGURATION_SETS_PER_ACCOUNT: "CONFIGURATION_SETS_PER_ACCOUNT",
  DAILY_DESTINATION_CALL_LIMIT: "DAILY_DESTINATION_CALL_LIMIT",
  EVENT_DESTINATIONS_PER_CONFIGURATION_SET: "EVENT_DESTINATIONS_PER_CONFIGURATION_SET",
  KEYWORDS_PER_PHONE_NUMBER: "KEYWORDS_PER_PHONE_NUMBER",
  KEYWORDS_PER_POOL: "KEYWORDS_PER_POOL",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT: "MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE: "MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE",
  OPT_OUT_LISTS_PER_ACCOUNT: "OPT_OUT_LISTS_PER_ACCOUNT",
  ORIGINATION_IDENTITIES_PER_POOL: "ORIGINATION_IDENTITIES_PER_POOL",
  PHONE_NUMBERS_PER_ACCOUNT: "PHONE_NUMBERS_PER_ACCOUNT",
  PHONE_NUMBERS_PER_REGISTRATION: "PHONE_NUMBERS_PER_REGISTRATION",
  POOLS_PER_ACCOUNT: "POOLS_PER_ACCOUNT",
  REGISTRATIONS_PER_ACCOUNT: "REGISTRATIONS_PER_ACCOUNT",
  REGISTRATION_ATTACHMENTS_CREATED_PER_DAY: "REGISTRATION_ATTACHMENTS_CREATED_PER_DAY",
  REGISTRATION_ATTACHMENTS_PER_ACCOUNT: "REGISTRATION_ATTACHMENTS_PER_ACCOUNT",
  REGISTRATION_VERSIONS_CREATED_PER_DAY: "REGISTRATION_VERSIONS_CREATED_PER_DAY",
  SENDER_IDS_PER_ACCOUNT: "SENDER_IDS_PER_ACCOUNT",
  TAGS_PER_RESOURCE: "TAGS_PER_RESOURCE",
  VERIFICATION_ATTEMPTS_PER_DAY: "VERIFICATION_ATTEMPTS_PER_DAY",
  VERIFIED_DESTINATION_NUMBERS_PER_ACCOUNT: "VERIFIED_DESTINATION_NUMBERS_PER_ACCOUNT",
} as const;

/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The reason for the exception.</p>
   */
  Reason?: ServiceQuotaExceededExceptionReason;
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
 * @public
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
 * @public
 * <p>The field associated with the validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The message associated with the validation exception with information to help
   *             determine its cause.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ATTACHMENT_TYPE_NOT_SUPPORTED: "ATTACHMENT_TYPE_NOT_SUPPORTED",
  CANNOT_ADD_OPTED_OUT_NUMBER: "CANNOT_ADD_OPTED_OUT_NUMBER",
  CANNOT_PARSE: "CANNOT_PARSE",
  COUNTRY_CODE_MISMATCH: "COUNTRY_CODE_MISMATCH",
  DESTINATION_COUNTRY_BLOCKED: "DESTINATION_COUNTRY_BLOCKED",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INVALID_ARN: "INVALID_ARN",
  INVALID_FILTER_VALUES: "INVALID_FILTER_VALUES",
  INVALID_IDENTITY_FOR_DESTINATION_COUNTRY: "INVALID_IDENTITY_FOR_DESTINATION_COUNTRY",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_PARAMETER: "INVALID_PARAMETER",
  INVALID_REGISTRATION_ASSOCIATION: "INVALID_REGISTRATION_ASSOCIATION",
  INVALID_REQUEST: "INVALID_REQUEST",
  MAXIMUM_SIZE_EXCEEDED: "MAXIMUM_SIZE_EXCEEDED",
  MISSING_PARAMETER: "MISSING_PARAMETER",
  OTHER: "OTHER",
  PARAMETERS_CANNOT_BE_USED_TOGETHER: "PARAMETERS_CANNOT_BE_USED_TOGETHER",
  PHONE_NUMBER_CANNOT_BE_OPTED_IN: "PHONE_NUMBER_CANNOT_BE_OPTED_IN",
  PHONE_NUMBER_CANNOT_BE_RELEASED: "PHONE_NUMBER_CANNOT_BE_RELEASED",
  PRICE_OVER_THRESHOLD: "PRICE_OVER_THRESHOLD",
  REGISTRATION_FIELD_CANNOT_BE_DELETED: "REGISTRATION_FIELD_CANNOT_BE_DELETED",
  REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT: "REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT",
  RESOURCE_NOT_ACCESSIBLE: "RESOURCE_NOT_ACCESSIBLE",
  SENDER_ID_NOT_REGISTERED: "SENDER_ID_NOT_REGISTERED",
  SENDER_ID_NOT_SUPPORTED: "SENDER_ID_NOT_SUPPORTED",
  SENDER_ID_REQUIRES_REGISTRATION: "SENDER_ID_REQUIRES_REGISTRATION",
  TWO_WAY_CHANNEL_NOT_PRESENT: "TWO_WAY_CHANNEL_NOT_PRESENT",
  TWO_WAY_NOT_ENABLED: "TWO_WAY_NOT_ENABLED",
  TWO_WAY_NOT_SUPPORTED_IN_COUNTRY: "TWO_WAY_NOT_SUPPORTED_IN_COUNTRY",
  TWO_WAY_NOT_SUPPORTED_IN_REGION: "TWO_WAY_NOT_SUPPORTED_IN_REGION",
  TWO_WAY_TOPIC_NOT_PRESENT: "TWO_WAY_TOPIC_NOT_PRESENT",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
  UNKNOWN_REGISTRATION_FIELD: "UNKNOWN_REGISTRATION_FIELD",
  UNKNOWN_REGISTRATION_SECTION: "UNKNOWN_REGISTRATION_SECTION",
  UNKNOWN_REGISTRATION_TYPE: "UNKNOWN_REGISTRATION_TYPE",
  UNKNOWN_REGISTRATION_VERSION: "UNKNOWN_REGISTRATION_VERSION",
  VERIFICATION_CODE_MISMATCH: "VERIFICATION_CODE_MISMATCH",
  VOICE_CAPABILITY_NOT_AVAILABLE: "VOICE_CAPABILITY_NOT_AVAILABLE",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>A validation exception for a field.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The reason for the exception.</p>
   */
  Reason?: ValidationExceptionReason;

  /**
   * @public
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
 * @public
 * @enum
 */
export const AttachmentStatus = {
  DELETED: "DELETED",
  UPLOAD_COMPLETE: "UPLOAD_COMPLETE",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  UPLOAD_IN_PROGRESS: "UPLOAD_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * @enum
 */
export const AttachmentUploadErrorReason = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type AttachmentUploadErrorReason =
  (typeof AttachmentUploadErrorReason)[keyof typeof AttachmentUploadErrorReason];

/**
 * @public
 * <p>Contains the destination configuration to use when publishing message sending events.
 *         </p>
 */
export interface CloudWatchLogsDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role
   *             that is able to write event data to an Amazon CloudWatch destination.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon CloudWatch log group that you want to record events in. </p>
   */
  LogGroupArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationSetFilterName = {
  DEFAULT_MESSAGE_TYPE: "default-message-type",
  DEFAULT_SENDER_ID: "default-sender-id",
  EVENT_DESTINATION_NAME: "event-destination-name",
  MATCHING_EVENT_TYPES: "matching-event-types",
} as const;

/**
 * @public
 */
export type ConfigurationSetFilterName = (typeof ConfigurationSetFilterName)[keyof typeof ConfigurationSetFilterName];

/**
 * @public
 * <p>The information for configuration sets that meet a specified criteria.</p>
 */
export interface ConfigurationSetFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: ConfigurationSetFilterName | undefined;

  /**
   * @public
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  PROMOTIONAL: "PROMOTIONAL",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with an Kinesis Data Firehose event
 *             destination.</p>
 *          <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration
 *             sets, which enable you to publish message sending events.</p>
 */
export interface KinesisFirehoseDestination {
  /**
   * @public
   * <p>The ARN of an Amazon Identity and Access Management (IAM) role that is able to write
   *             event data to an Amazon Firehose destination.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  ALL: "ALL",
  TEXT_ALL: "TEXT_ALL",
  TEXT_BLOCKED: "TEXT_BLOCKED",
  TEXT_CARRIER_BLOCKED: "TEXT_CARRIER_BLOCKED",
  TEXT_CARRIER_UNREACHABLE: "TEXT_CARRIER_UNREACHABLE",
  TEXT_DELIVERED: "TEXT_DELIVERED",
  TEXT_INVALID: "TEXT_INVALID",
  TEXT_INVALID_MESSAGE: "TEXT_INVALID_MESSAGE",
  TEXT_PENDING: "TEXT_PENDING",
  TEXT_QUEUED: "TEXT_QUEUED",
  TEXT_SENT: "TEXT_SENT",
  TEXT_SPAM: "TEXT_SPAM",
  TEXT_SUCCESSFUL: "TEXT_SUCCESSFUL",
  TEXT_TTL_EXPIRED: "TEXT_TTL_EXPIRED",
  TEXT_UNKNOWN: "TEXT_UNKNOWN",
  TEXT_UNREACHABLE: "TEXT_UNREACHABLE",
  VOICE_ALL: "VOICE_ALL",
  VOICE_ANSWERED: "VOICE_ANSWERED",
  VOICE_BUSY: "VOICE_BUSY",
  VOICE_COMPLETED: "VOICE_COMPLETED",
  VOICE_FAILED: "VOICE_FAILED",
  VOICE_INITIATED: "VOICE_INITIATED",
  VOICE_NO_ANSWER: "VOICE_NO_ANSWER",
  VOICE_RINGING: "VOICE_RINGING",
  VOICE_TTL_EXPIRED: "VOICE_TTL_EXPIRED",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>An object that defines an Amazon SNS destination for events. You can use
 *                 Amazon SNS to send notification when certain events occur.</p>
 */
export interface SnsDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to
   *             publish events to.</p>
   */
  TopicArn: string | undefined;
}

/**
 * @public
 * <p>Contains information about an event destination.</p>
 *          <p>Event destinations are associated with configuration sets, which enable you to publish
 *             message sending events to CloudWatch, Kinesis Data Firehose,or Amazon SNS.</p>
 */
export interface EventDestination {
  /**
   * @public
   * <p>The name of the EventDestination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * @public
   * <p>When set to true events will be logged.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>An array of event types that determine which events to log.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * @public
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon CloudWatch logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination for logging to Amazon
   *             Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;
}

/**
 * @public
 * <p>Information related to a given configuration set in your Amazon Web Services
 *             account.</p>
 */
export interface ConfigurationSetInformation {
  /**
   * @public
   * <p>The Resource Name (ARN) of the ConfigurationSet.</p>
   */
  ConfigurationSetArn: string | undefined;

  /**
   * @public
   * <p>The name of the ConfigurationSet.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>An array of EventDestination objects that describe any events to log and where to log
   *             them.</p>
   */
  EventDestinations: EventDestination[] | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  DefaultMessageType?: MessageType;

  /**
   * @public
   * <p>The default sender ID used by the ConfigurationSet.</p>
   */
  DefaultSenderId?: string;

  /**
   * @public
   * <p>The time when the ConfigurationSet was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 * <p>The list of tags to be added to the specified topic.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The string value associated with the key of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * @public
   * <p>The name to use for the new configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>An array of key and value pair tags that's associated with the new configuration set. </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateConfigurationSetResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the new configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>An array of key and value pair tags that's associated with the configuration
   *             set.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the configuration set was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateEventDestinationRequest {
  /**
   * @public
   * <p>Either the name of the configuration set or the configuration set ARN to apply event
   *             logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The name that identifies the event destination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * @public
   * <p>An array of event types that determine which events to log. If "ALL" is used, then
   *                 Amazon Pinpoint logs every event type.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * @public
   * <p>An object that contains information about an event destination for logging to Amazon
   *             CloudWatch logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination for logging to Amazon
   *             Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination for logging to Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateEventDestinationResult {
  /**
   * @public
   * <p>The ARN of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The details of the destination where events are logged.</p>
   */
  EventDestination?: EventDestination;
}

/**
 * @public
 */
export interface CreateOptOutListRequest {
  /**
   * @public
   * <p>The name of the new OptOutList.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the new OptOutList.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateOptOutListResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the OptOutList.</p>
   */
  OptOutListArn?: string;

  /**
   * @public
   * <p>The name of the new OptOutList.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>An array of tags (key and value pairs) associated with the new OptOutList.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePoolRequest {
  /**
   * @public
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the new pool.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true the pool can't be deleted. You can
   *             change this value using the <a>UpdatePool</a> action.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const PoolStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus];

/**
 * @public
 */
export interface CreatePoolResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The unique identifier for the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The current status of the pool.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The pool is currently being created and isn't yet available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The pool is active and available for use.</p>
   *             </li>
   *             <li>
   *                <p>DELETING: The pool is being deleted.</p>
   *             </li>
   *          </ul>
   */
  Status?: PoolStatus;

  /**
   * @public
   * <p>The type of message for the pool to use.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * @public
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateRegistrationRequest {
  /**
   * @public
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  CLOSED: "CLOSED",
  COMPLETE: "COMPLETE",
  CREATED: "CREATED",
  DELETED: "DELETED",
  PROVISIONING: "PROVISIONING",
  REQUIRES_UPDATES: "REQUIRES_UPDATES",
  REVIEWING: "REVIEWING",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 */
export interface CreateRegistrationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The status of the registration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: Your registration is created but not submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code>: Your registration has been approved and and your origination identity has been created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The registration has been deleted.</p>
   *             </li>
   *          </ul>
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>The current version number of the registration.</p>
   */
  CurrentVersionNumber: number | undefined;

  /**
   * @public
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   */
  AdditionalAttributes?: Record<string, string>;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationAssociationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The registration type or origination identity type.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The phone number associated with the registration in E.164 format.</p>
   */
  PhoneNumber?: string;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentRequest {
  /**
   * @public
   * <p>The registration file to upload. The maximum file size is 1MiB and valid file extensions are PDF, JPEG and PNG.</p>
   */
  AttachmentBody?: Uint8Array;

  /**
   * @public
   * <p>A URL to the required registration file.  For example, you can provide the S3 object URL.</p>
   */
  AttachmentUrl?: string;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * @public
   * <p>The status of the registration attachment. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> The attachment has been deleted..</p>
   *             </li>
   *          </ul>
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationVersionRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RegistrationVersionStatus = {
  APPROVED: "APPROVED",
  ARCHIVED: "ARCHIVED",
  DENIED: "DENIED",
  DISCARDED: "DISCARDED",
  DRAFT: "DRAFT",
  REVIEWING: "REVIEWING",
  REVOKED: "REVOKED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type RegistrationVersionStatus = (typeof RegistrationVersionStatus)[keyof typeof RegistrationVersionStatus];

/**
 * @public
 * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
 */
export interface RegistrationVersionStatusHistory {
  /**
   * @public
   * <p>The time when the registration was in the draft state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  DraftTimestamp: Date | undefined;

  /**
   * @public
   * <p>The time when the registration was in the submitted state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  SubmittedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the reviewing state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ReviewingTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the approved state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ApprovedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the discarded state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  DiscardedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the denied state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  DeniedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the revoked state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  RevokedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the registration was in the archived state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ArchivedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateRegistrationVersionResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The new version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The status of the registration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code>: The initial status of a registration version after it’s created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code>: Your registration has been approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVOKED</code>: Your previously approved registration has been revoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p>
   *             </li>
   *          </ul>
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * @public
   * <p>A <b>RegistrationVersionStatusHistory</b> object that contains timestamps for the registration.</p>
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberRequest {
  /**
   * @public
   * <p>The verified destination phone number, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
} as const;

/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 */
export interface CreateVerifiedDestinationNumberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>The verified destination phone number, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The status of the verified destination phone number.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The phone number hasn't been verified yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED</code>: The phone number is verified and can receive messages.</p>
   *             </li>
   *          </ul>
   */
  Status: VerificationStatus | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the verified phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * @public
   * <p>The name of the configuration set or the configuration set ARN that you want to
   *             delete. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationSetResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the deleted configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>An array of any EventDestination objects that were associated with the deleted
   *             configuration set.</p>
   */
  EventDestinations?: EventDestination[];

  /**
   * @public
   * <p>The default message type of the configuration set that was deleted.</p>
   */
  DefaultMessageType?: MessageType;

  /**
   * @public
   * <p>The default Sender ID of the configuration set that was deleted.</p>
   */
  DefaultSenderId?: string;

  /**
   * @public
   * <p>The time that the deleted configuration set was created in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeRequest {
  /**
   * @public
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default message type from. The ConfigurationSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The current message type for the configuration set.</p>
   */
  MessageType?: MessageType;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdRequest {
  /**
   * @public
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn
   *             can be found using the <a>DescribeConfigurationSets</a> action.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The current sender ID for the configuration set.</p>
   */
  SenderId?: string;
}

/**
 * @public
 */
export interface DeleteEventDestinationRequest {
  /**
   * @public
   * <p>The name of the configuration set or the configuration set's Amazon Resource Name
   *             (ARN) to remove the event destination from. The ConfigurateSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The name of the event destination to delete.</p>
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDestinationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set the event destination was deleted from.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The event destination object that was deleted.</p>
   */
  EventDestination?: EventDestination;
}

/**
 * @public
 */
export interface DeleteKeywordRequest {
  /**
   * @public
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or
   *             PoolArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn and <a>DescribePools</a> to find the values
   *             of PoolId and PoolArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The keyword to delete.</p>
   */
  Keyword: string | undefined;
}

/**
 * @public
 * @enum
 */
export const KeywordAction = {
  AUTOMATIC_RESPONSE: "AUTOMATIC_RESPONSE",
  OPT_IN: "OPT_IN",
  OPT_OUT: "OPT_OUT",
} as const;

/**
 * @public
 */
export type KeywordAction = (typeof KeywordAction)[keyof typeof KeywordAction];

/**
 * @public
 */
export interface DeleteKeywordResult {
  /**
   * @public
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The keyword that was deleted.</p>
   */
  Keyword?: string;

  /**
   * @public
   * <p>The message that was associated with the deleted keyword.</p>
   */
  KeywordMessage?: string;

  /**
   * @public
   * <p>The action that was associated with the deleted keyword.</p>
   */
  KeywordAction?: KeywordAction;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberRequest {
  /**
   * @public
   * <p>The OptOutListName or OptOutListArn to remove the phone number from.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>The phone number, in E.164 format, to remove from the OptOutList.</p>
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberResult {
  /**
   * @public
   * <p>The OptOutListArn that the phone number was removed from.</p>
   */
  OptOutListArn?: string;

  /**
   * @public
   * <p>The OptOutListName that the phone number was removed from.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>The phone number that was removed from the OptOutList.</p>
   */
  OptedOutNumber?: string;

  /**
   * @public
   * <p>The time that the number was removed at, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp?: Date;

  /**
   * @public
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   */
  EndUserOptedOut?: boolean;
}

/**
 * @public
 */
export interface DeleteOptOutListRequest {
  /**
   * @public
   * <p>The OptOutListName or OptOutListArn of the OptOutList to delete. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
   */
  OptOutListName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptOutListResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the OptOutList that was removed.</p>
   */
  OptOutListArn?: string;

  /**
   * @public
   * <p>The name of the OptOutList that was removed.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>The time when the OptOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface DeletePoolRequest {
  /**
   * @public
   * <p>The PoolId or PoolArn of the pool to delete. You can use <a>DescribePools</a> to find the values for PoolId and PoolArn .</p>
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface DeletePoolResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pool that was deleted.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The PoolId of the pool that was deleted.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The current status of the pool.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The pool is currently being created and isn't yet available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The pool is active and available for use.</p>
   *             </li>
   *             <li>
   *                <p>DELETING: The pool is being deleted.</p>
   *             </li>
   *          </ul>
   */
  Status?: PoolStatus;

  /**
   * @public
   * <p>The message type that was associated with the deleted pool.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList that was associated with the deleted pool.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * @public
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface DeleteRegistrationRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The status of the registration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: Your registration is created but not submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code>: Your registration has been approved and and your origination identity has been created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The registration has been deleted.</p>
   *             </li>
   *          </ul>
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>The current version number of the registration.</p>
   */
  CurrentVersionNumber: number | undefined;

  /**
   * @public
   * <p>The version number of the registration that was approved.</p>
   */
  ApprovedVersionNumber?: number;

  /**
   * @public
   * <p>The latest version number of the registration that was denied.</p>
   */
  LatestDeniedVersionNumber?: number;

  /**
   * @public
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   */
  AdditionalAttributes?: Record<string, string>;

  /**
   * @public
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentRequest {
  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationAttachmentResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * @public
   * <p>The status of the registration attachment. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> The attachment has been deleted..</p>
   *             </li>
   *          </ul>
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * @public
   * <p>The error message if the upload failed.</p>
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason;

  /**
   * @public
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   */
  FieldPath: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistrationFieldValueResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The path to the registration form field.</p>
   */
  FieldPath: string | undefined;

  /**
   * @public
   * <p>An array of values for the form field.</p>
   */
  SelectChoices?: string[];

  /**
   * @public
   * <p>The text data for a free form field.</p>
   */
  TextValue?: string;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId?: string;
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
   * @public
   * <p>The current monthly limit, in US dollars.</p>
   */
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberRequest {
  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedDestinationNumberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>The verified destination phone number, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
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
   * @public
   * <p>The current monthly limit, in US dollars.</p>
   */
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * @public
   * <p>An array of AccountAttributes objects.</p>
   */
  AccountAttributes?: AccountAttribute[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAccountLimitsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeAccountLimitsResult {
  /**
   * @public
   * <p>An array of AccountLimit objects that show the current spend limits.</p>
   */
  AccountLimits?: AccountLimit[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsRequest {
  /**
   * @public
   * <p>An array of strings. Each element can be either a ConfigurationSetName or
   *             ConfigurationSetArn.</p>
   */
  ConfigurationSetNames?: string[];

  /**
   * @public
   * <p>An array of filters to apply to the results that are returned.</p>
   */
  Filters?: ConfigurationSetFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsResult {
  /**
   * @public
   * <p>An array of ConfigurationSets objects.</p>
   */
  ConfigurationSets?: ConfigurationSetInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const KeywordFilterName = {
  KEYWORD_ACTION: "keyword-action",
} as const;

/**
 * @public
 */
export type KeywordFilterName = (typeof KeywordFilterName)[keyof typeof KeywordFilterName];

/**
 * @public
 * <p>The information for keywords that meet a specified criteria.</p>
 */
export interface KeywordFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: KeywordFilterName | undefined;

  /**
   * @public
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsRequest {
  /**
   * @public
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>An array of keywords to search for.</p>
   */
  Keywords?: string[];

  /**
   * @public
   * <p>An array of keyword filters to filter the results.</p>
   */
  Filters?: KeywordFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information for all keywords in a pool.</p>
 */
export interface KeywordInformation {
  /**
   * @public
   * <p>The keyword as a string.</p>
   */
  Keyword: string | undefined;

  /**
   * @public
   * <p>A custom message that can be used with the keyword.</p>
   */
  KeywordMessage: string | undefined;

  /**
   * @public
   * <p>The action to perform for the keyword.</p>
   */
  KeywordAction: KeywordAction | undefined;
}

/**
 * @public
 */
export interface DescribeKeywordsResult {
  /**
   * @public
   * <p>The PhoneNumberArn or PoolArn that is associated with the OriginationIdentity. </p>
   */
  OriginationIdentityArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId or PoolId that is associated with the OriginationIdentity.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>An array of KeywordInformation objects that contain the results.</p>
   */
  Keywords?: KeywordInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OptedOutFilterName = {
  END_USER_OPTED_OUT: "end-user-opted-out",
} as const;

/**
 * @public
 */
export type OptedOutFilterName = (typeof OptedOutFilterName)[keyof typeof OptedOutFilterName];

/**
 * @public
 * <p>The information for opted out numbers that meet a specified criteria.</p>
 */
export interface OptedOutFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: OptedOutFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersRequest {
  /**
   * @public
   * <p>The OptOutListName or OptOutListArn of the OptOutList. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>An array of phone numbers to search for in the OptOutList.</p>
   */
  OptedOutNumbers?: string[];

  /**
   * @public
   * <p>An array of OptedOutFilter objects to filter the results on.</p>
   */
  Filters?: OptedOutFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information for an opted out number in an Amazon Web Services account.</p>
 */
export interface OptedOutNumberInformation {
  /**
   * @public
   * <p>The phone number that is opted out.</p>
   */
  OptedOutNumber: string | undefined;

  /**
   * @public
   * <p>The time that the op tout occurred, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp: Date | undefined;

  /**
   * @public
   * <p>This is set to true if it was the end recipient that opted out.</p>
   */
  EndUserOptedOut: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeOptedOutNumbersResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   */
  OptOutListArn?: string;

  /**
   * @public
   * <p>The name of the OptOutList.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>An array of OptedOutNumbersInformation objects that provide information about the
   *             requested OptedOutNumbers.</p>
   */
  OptedOutNumbers?: OptedOutNumberInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOptOutListsRequest {
  /**
   * @public
   * <p>The OptOutLists to show the details of. This is an array of strings that can be either
   *             the OptOutListName or OptOutListArn.</p>
   */
  OptOutListNames?: string[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information for all OptOutList in an Amazon Web Services account.</p>
 */
export interface OptOutListInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the OptOutList.</p>
   */
  OptOutListArn: string | undefined;

  /**
   * @public
   * <p>The name of the OptOutList.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>The time when the OutOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptOutListsResult {
  /**
   * @public
   * <p>An array of OptOutListInformation objects that contain the details for the requested
   *             OptOutLists.</p>
   */
  OptOutLists?: OptOutListInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  ISO_COUNTRY_CODE: "iso-country-code",
  MESSAGE_TYPE: "message-type",
  NUMBER_CAPABILITY: "number-capability",
  NUMBER_TYPE: "number-type",
  OPT_OUT_LIST_NAME: "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED: "self-managed-opt-outs-enabled",
  STATUS: "status",
  TWO_WAY_CHANNEL_ARN: "two-way-channel-arn",
  TWO_WAY_ENABLED: "two-way-enabled",
} as const;

/**
 * @public
 */
export type PhoneNumberFilterName = (typeof PhoneNumberFilterName)[keyof typeof PhoneNumberFilterName];

/**
 * @public
 * <p>The information for a phone number that meets a specified criteria.</p>
 */
export interface PhoneNumberFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PhoneNumberFilterName | undefined;

  /**
   * @public
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersRequest {
  /**
   * @public
   * <p>The unique identifier of phone numbers to find information about. This is an array of
   *             strings that can be either the PhoneNumberId or PhoneNumberArn.</p>
   */
  PhoneNumberIds?: string[];

  /**
   * @public
   * <p>An array of PhoneNumberFilter objects to filter the results.</p>
   */
  Filters?: PhoneNumberFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const NumberCapability = {
  SMS: "SMS",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type NumberCapability = (typeof NumberCapability)[keyof typeof NumberCapability];

/**
 * @public
 * @enum
 */
export const NumberType = {
  LONG_CODE: "LONG_CODE",
  SHORT_CODE: "SHORT_CODE",
  SIMULATOR: "SIMULATOR",
  TEN_DLC: "TEN_DLC",
  TOLL_FREE: "TOLL_FREE",
} as const;

/**
 * @public
 */
export type NumberType = (typeof NumberType)[keyof typeof NumberType];

/**
 * @public
 * @enum
 */
export const NumberStatus = {
  ACTIVE: "ACTIVE",
  ASSOCIATING: "ASSOCIATING",
  DELETED: "DELETED",
  DISASSOCIATING: "DISASSOCIATING",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type NumberStatus = (typeof NumberStatus)[keyof typeof NumberStatus];

/**
 * @public
 * <p>The information for a phone number, in E.164 format, in an Amazon Web Services account.</p>
 */
export interface PhoneNumberInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the phone number.</p>
   */
  PhoneNumberArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The phone number in E.164 format.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * @public
   * <p>The current status of the phone number.</p>
   */
  Status: NumberStatus | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | undefined;

  /**
   * @public
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  NumberType: NumberType | undefined;

  /**
   * @public
   * <p>The price, in US dollars, to lease the phone number.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients using the TwoWayChannelArn.</p>
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>When set to false an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out request. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * @public
   * <p>The name of the OptOutList associated with the phone number.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>When set to true the phone number can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * @public
   * <p>The unique identifier of the pool associated with the phone number.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;

  /**
   * @public
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumbersResult {
  /**
   * @public
   * <p>An array of PhoneNumberInformation objects that contain the details for the requested
   *             phone numbers.</p>
   */
  PhoneNumbers?: PhoneNumberInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const PoolFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  MESSAGE_TYPE: "message-type",
  OPT_OUT_LIST_NAME: "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED: "self-managed-opt-outs-enabled",
  SHARED_ROUTES_ENABLED: "shared-routes-enabled",
  STATUS: "status",
  TWO_WAY_CHANNEL_ARN: "two-way-channel-arn",
  TWO_WAY_ENABLED: "two-way-enabled",
} as const;

/**
 * @public
 */
export type PoolFilterName = (typeof PoolFilterName)[keyof typeof PoolFilterName];

/**
 * @public
 * <p>The information for a pool that meets a specified criteria.</p>
 */
export interface PoolFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PoolFilterName | undefined;

  /**
   * @public
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePoolsRequest {
  /**
   * @public
   * <p>The unique identifier of pools to find. This is an array of strings that can be either
   *             the PoolId or PoolArn.</p>
   */
  PoolIds?: string[];

  /**
   * @public
   * <p>An array of PoolFilter objects to filter the results.</p>
   */
  Filters?: PoolFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information for a pool in an Amazon Web Services account.</p>
 */
export interface PoolInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the pool.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The current status of the pool.</p>
   */
  Status: PoolStatus | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | undefined;

  /**
   * @public
   * <p>When set to true you can receive incoming text messages from your end recipients using
   *             the TwoWayChannelArn.</p>
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>When set to false, an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out requests. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * @public
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>Allows you to enable shared routes on your pool.</p>
   *          <p>By default, this is set to <code>False</code>. If you set this value to
   *                 <code>True</code>, your messages are sent using phone numbers or sender IDs
   *             (depending on the country) that are shared with other Amazon Pinpoint users. In some
   *             countries, such as the United States, senders aren't allowed to use shared routes and
   *             must use a dedicated phone number or short code.</p>
   */
  SharedRoutesEnabled: boolean | undefined;

  /**
   * @public
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * @public
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribePoolsResult {
  /**
   * @public
   * <p>An array of PoolInformation objects that contain the details for the requested pools. </p>
   */
  Pools?: PoolInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationAttachmentFilterName = {
  ATTACHMENT_STATUS: "attachment-status",
} as const;

/**
 * @public
 */
export type RegistrationAttachmentFilterName =
  (typeof RegistrationAttachmentFilterName)[keyof typeof RegistrationAttachmentFilterName];

/**
 * @public
 * <p>The filter definition for filtering registration attachments that meets a specified criteria.</p>
 */
export interface RegistrationAttachmentFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: RegistrationAttachmentFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter on.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsRequest {
  /**
   * @public
   * <p>The unique identifier of registration attachments to find. This is an array of <b>RegistrationAttachmentId</b>.</p>
   */
  RegistrationAttachmentIds?: string[];

  /**
   * @public
   * <p>An array of RegistrationAttachmentFilter objects to filter the results.</p>
   */
  Filters?: RegistrationAttachmentFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides information on the specified registration attachments.</p>
 */
export interface RegistrationAttachmentsInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration attachment.</p>
   */
  RegistrationAttachmentArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId: string | undefined;

  /**
   * @public
   * <p>The status of the registration attachment. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_IN_PROGRESS</code> The attachment is being uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_COMPLETE</code> The attachment has been uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPLOAD_FAILED</code> The attachment failed to uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> The attachment has been deleted..</p>
   *             </li>
   *          </ul>
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * @public
   * <p>A description of why the upload didn't successfully complete.</p>
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason;

  /**
   * @public
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationAttachmentsResult {
  /**
   * @public
   * <p>An array of <b>RegistrationAttachments</b> objects that contain the details for the requested registration attachments. </p>
   */
  RegistrationAttachments: RegistrationAttachmentsInformation[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsRequest {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The path to the section of the registration.</p>
   */
  SectionPath?: string;

  /**
   * @public
   * <p>An array of paths to the registration form field.</p>
   */
  FieldPaths?: string[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A description of each select option.</p>
 */
export interface SelectOptionDescription {
  /**
   * @public
   * <p>The value of the option.</p>
   */
  Option: string | undefined;

  /**
   * @public
   * <p>The title of the select option.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>A description of the option meaning.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Provides help information on the registration field.</p>
 */
export interface RegistrationFieldDisplayHints {
  /**
   * @public
   * <p>The title of the display hint.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>A short description of the display hint.</p>
   */
  ShortDescription: string | undefined;

  /**
   * @public
   * <p>A full description of the display hint.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>The title of the document the display hint is associated with.</p>
   */
  DocumentationTitle?: string;

  /**
   * @public
   * <p>The link to the document the display hint is associated with.</p>
   */
  DocumentationLink?: string;

  /**
   * @public
   * <p>An array of SelectOptionDescription objects.</p>
   */
  SelectOptionDescriptions?: SelectOptionDescription[];

  /**
   * @public
   * <p>The validation rules for the text field.</p>
   */
  TextValidationDescription?: string;

  /**
   * @public
   * <p>Example text of what the value of a field should contain.</p>
   */
  ExampleTextValue?: string;
}

/**
 * @public
 * @enum
 */
export const FieldRequirement = {
  CONDITIONAL: "CONDITIONAL",
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;

/**
 * @public
 */
export type FieldRequirement = (typeof FieldRequirement)[keyof typeof FieldRequirement];

/**
 * @public
 * @enum
 */
export const FieldType = {
  ATTACHMENT: "ATTACHMENT",
  SELECT: "SELECT",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * <p>Validation rules for a select field.</p>
 */
export interface SelectValidation {
  /**
   * @public
   * <p>The minimum number of choices for the select.</p>
   */
  MinChoices: number | undefined;

  /**
   * @public
   * <p>The maximum number of choices for the select.</p>
   */
  MaxChoices: number | undefined;

  /**
   * @public
   * <p>An array of strings for the possible selection options. </p>
   */
  Options: string[] | undefined;
}

/**
 * @public
 * <p>Validation rules for a text field.</p>
 */
export interface TextValidation {
  /**
   * @public
   * <p>The minimum number of characters for the text field.</p>
   */
  MinLength: number | undefined;

  /**
   * @public
   * <p>The maximum number of characters for the text field.</p>
   */
  MaxLength: number | undefined;

  /**
   * @public
   * <p>The regular expression used to validate the text field.</p>
   */
  Pattern: string | undefined;
}

/**
 * @public
 * <p>Provides a description of the specified field.</p>
 */
export interface RegistrationFieldDefinition {
  /**
   * @public
   * <p>The section path of the field.</p>
   */
  SectionPath: string | undefined;

  /**
   * @public
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   */
  FieldPath: string | undefined;

  /**
   * @public
   * <p>The type of field.</p>
   */
  FieldType: FieldType | undefined;

  /**
   * @public
   * <p>Specifies if the field for the registration form is required, conditional or optional.</p>
   */
  FieldRequirement: FieldRequirement | undefined;

  /**
   * @public
   * <p>The validation rules for a select field.</p>
   */
  SelectValidation?: SelectValidation;

  /**
   * @public
   * <p>The validation rules for a text field.</p>
   */
  TextValidation?: TextValidation;

  /**
   * @public
   * <p>An array of RegistrationFieldDisplayHints objects for the field.</p>
   */
  DisplayHints: RegistrationFieldDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsResult {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>An array of RegistrationFieldDefinitions objects that contain the details for the requested fields. </p>
   */
  RegistrationFieldDefinitions: RegistrationFieldDefinition[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The path to the section of the registration.</p>
   */
  SectionPath?: string;

  /**
   * @public
   * <p>An array of paths to the registration form field.</p>
   */
  FieldPaths?: string[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides the values of the specified field.</p>
 */
export interface RegistrationFieldValueInformation {
  /**
   * @public
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   */
  FieldPath: string | undefined;

  /**
   * @public
   * <p>An array of values for the form field.</p>
   */
  SelectChoices?: string[];

  /**
   * @public
   * <p>The text data for a free form field.</p>
   */
  TextValue?: string;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId?: string;

  /**
   * @public
   * <p>A description of why the registration was denied.</p>
   */
  DeniedReason?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldValuesResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The current version of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>An array of RegistrationFieldValues objects that contain the values for the requested registration. </p>
   */
  RegistrationFieldValues: RegistrationFieldValueInformation[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationFilterName = {
  REGISTRATION_STATUS: "registration-status",
  REGISTRATION_TYPE: "registration-type",
} as const;

/**
 * @public
 */
export type RegistrationFilterName = (typeof RegistrationFilterName)[keyof typeof RegistrationFilterName];

/**
 * @public
 * <p>The filter definition for filtering registrations that meets a specified criteria.</p>
 */
export interface RegistrationFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: RegistrationFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter on.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsRequest {
  /**
   * @public
   * <p>An array of unique identifiers for each registration.</p>
   */
  RegistrationIds?: string[];

  /**
   * @public
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   */
  Filters?: RegistrationFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides information about the requested registration.</p>
 */
export interface RegistrationInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The status of the registration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: Your registration is created but not submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted and is awaiting review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>: Your registration has been approved and your origination identity is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code>: Your registration has been approved and and your origination identity has been created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REQUIRES_UPDATES</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOSED</code>: The phone number or sender ID has been deleted and you must also delete the registration for the number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The registration has been deleted.</p>
   *             </li>
   *          </ul>
   */
  RegistrationStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>The current version number of the registration.</p>
   */
  CurrentVersionNumber: number | undefined;

  /**
   * @public
   * <p>The version number of the registration that was approved.</p>
   */
  ApprovedVersionNumber?: number;

  /**
   * @public
   * <p>The latest version number of the registration that was denied.</p>
   */
  LatestDeniedVersionNumber?: number;

  /**
   * @public
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   */
  AdditionalAttributes?: Record<string, string>;

  /**
   * @public
   * <p>The time when the registration was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationsResult {
  /**
   * @public
   * <p>An array of RegistrationInformation objects.</p>
   */
  Registrations: RegistrationInformation[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsRequest {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>An array of paths for the registration form section.</p>
   */
  SectionPaths?: string[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides help information on the registration section.</p>
 */
export interface RegistrationSectionDisplayHints {
  /**
   * @public
   * <p>The title of the display hint.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>A short description of the display hint.</p>
   */
  ShortDescription: string | undefined;

  /**
   * @public
   * <p>A full description of the display hint.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>The title of the document the display hint is associated with.</p>
   */
  DocumentationTitle?: string;

  /**
   * @public
   * <p>The link to the document the display hint is associated with.</p>
   */
  DocumentationLink?: string;
}

/**
 * @public
 * <p>Provides information on the specified section definition.</p>
 */
export interface RegistrationSectionDefinition {
  /**
   * @public
   * <p>The path to the section of the registration.</p>
   */
  SectionPath: string | undefined;

  /**
   * @public
   * <p>The path to the section of the registration.</p>
   */
  DisplayHints: RegistrationSectionDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsResult {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>An array of  RegistrationSectionDefinition objects.</p>
   */
  RegistrationSectionDefinitions: RegistrationSectionDefinition[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationTypeFilterName = {
  SUPPORTED_ASSOCIATION_ISO_COUNTRY_CODE: "supported-association-iso-country-code",
  SUPPORTED_ASSOCIATION_RESOURCE_TYPE: "supported-association-resource-type",
} as const;

/**
 * @public
 */
export type RegistrationTypeFilterName = (typeof RegistrationTypeFilterName)[keyof typeof RegistrationTypeFilterName];

/**
 * @public
 * <p>The filter definition for filtering registration types that meets a specified criteria.</p>
 */
export interface RegistrationTypeFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: RegistrationTypeFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter on.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsRequest {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationTypes?: string[];

  /**
   * @public
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   */
  Filters?: RegistrationTypeFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides help information on the registration type.</p>
 */
export interface RegistrationTypeDisplayHints {
  /**
   * @public
   * <p>The title of the display hint.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>A short description of the display hint.</p>
   */
  ShortDescription?: string;

  /**
   * @public
   * <p>A full description of the display hint.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>The title of the document the display hint is associated with.</p>
   */
  DocumentationTitle?: string;

  /**
   * @public
   * <p>The link to the document the display hint is associated with.</p>
   */
  DocumentationLink?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationAssociationBehavior = {
  ASSOCIATE_AFTER_COMPLETE: "ASSOCIATE_AFTER_COMPLETE",
  ASSOCIATE_BEFORE_SUBMIT: "ASSOCIATE_BEFORE_SUBMIT",
  ASSOCIATE_ON_APPROVAL: "ASSOCIATE_ON_APPROVAL",
} as const;

/**
 * @public
 */
export type RegistrationAssociationBehavior =
  (typeof RegistrationAssociationBehavior)[keyof typeof RegistrationAssociationBehavior];

/**
 * @public
 * @enum
 */
export const RegistrationDisassociationBehavior = {
  DELETE_REGISTRATION_DISASSOCIATES: "DELETE_REGISTRATION_DISASSOCIATES",
  DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION: "DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION",
  DISASSOCIATE_ALL_CLOSES_REGISTRATION: "DISASSOCIATE_ALL_CLOSES_REGISTRATION",
} as const;

/**
 * @public
 */
export type RegistrationDisassociationBehavior =
  (typeof RegistrationDisassociationBehavior)[keyof typeof RegistrationDisassociationBehavior];

/**
 * @public
 * <p>The processing rules for when a registration can be associated with an origination identity and disassociated from an origination identity.</p>
 */
export interface SupportedAssociation {
  /**
   * @public
   * <p>Defines the behavior of when an origination identity and registration can be associated with each other.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The association behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATE_BEFORE_SUBMIT</code> The origination identity has to be supplied when creating a registration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATE_ON_APPROVAL</code> This applies to all short code registrations. The short code will be automatically provisioned once the registration is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATE_AFTER_COMPLETE</code> This applies to phone number registrations when you must complete a registration first, then associate one or more phone numbers later. For example 10DLC campaigns and long codes. </p>
   *             </li>
   *          </ul>
   */
  AssociationBehavior: RegistrationAssociationBehavior | undefined;

  /**
   * @public
   * <p>The disassociation behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISASSOCIATE_ALL_CLOSES_REGISTRATION</code> All origination identities must be disassociated from the registration before the registration can be closed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION</code> All origination identities must be disassociated from the registration before the registration can be deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_REGISTRATION_DISASSOCIATES</code> The registration can be deleted and all origination identities will be disasscoiated.</p>
   *             </li>
   *          </ul>
   */
  DisassociationBehavior: RegistrationDisassociationBehavior | undefined;
}

/**
 * @public
 * <p>Provides information on the supported registration type.</p>
 */
export interface RegistrationTypeDefinition {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>The supported association behavior for the registration type.</p>
   */
  SupportedAssociations?: SupportedAssociation[];

  /**
   * @public
   * <p>Provides help information on the registration.</p>
   */
  DisplayHints: RegistrationTypeDisplayHints | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationTypeDefinitionsResult {
  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationTypeDefinitions: RegistrationTypeDefinition[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationVersionFilterName = {
  REGISTRATION_VERSION_STATUS: "registration-version-status",
} as const;

/**
 * @public
 */
export type RegistrationVersionFilterName =
  (typeof RegistrationVersionFilterName)[keyof typeof RegistrationVersionFilterName];

/**
 * @public
 * <p>The filter definition for filtering registration versions that meets a specified criteria.</p>
 */
export interface RegistrationVersionFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: RegistrationVersionFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter on.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>An array of registration version numbers.</p>
   */
  VersionNumbers?: number[];

  /**
   * @public
   * <p>An array of RegistrationVersionFilter objects to filter the results.</p>
   */
  Filters?: RegistrationVersionFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides the reason a registration was rejected.</p>
 */
export interface RegistrationDeniedReasonInformation {
  /**
   * @public
   * <p>The reason a registration was rejected.</p>
   */
  Reason: string | undefined;

  /**
   * @public
   * <p>A short description of the rejection reason.</p>
   */
  ShortDescription: string | undefined;

  /**
   * @public
   * <p>A long description of the rejection reason.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>The title of the document.</p>
   */
  DocumentationTitle?: string;

  /**
   * @public
   * <p>The link to the document.</p>
   */
  DocumentationLink?: string;
}

/**
 * @public
 * <p>Provides information about the specified version of the registration.</p>
 */
export interface RegistrationVersionInformation {
  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The status of the registration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code>: The initial status of a registration version after it’s created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code>: Your registration has been approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVOKED</code>: Your previously approved registration has been revoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p>
   *             </li>
   *          </ul>
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * @public
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;

  /**
   * @public
   * <p>An array of RegistrationDeniedReasonInformation objects. </p>
   */
  DeniedReasons?: RegistrationDeniedReasonInformation[];
}

/**
 * @public
 */
export interface DescribeRegistrationVersionsResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>An array of RegistrationVersions objects.</p>
   */
  RegistrationVersions: RegistrationVersionInformation[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SenderIdFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  ISO_COUNTRY_CODE: "iso-country-code",
  MESSAGE_TYPE: "message-type",
  REGISTERED: "registered",
  SENDER_ID: "sender-id",
} as const;

/**
 * @public
 */
export type SenderIdFilterName = (typeof SenderIdFilterName)[keyof typeof SenderIdFilterName];

/**
 * @public
 * <p>The information for a sender ID that meets a specified criteria.</p>
 */
export interface SenderIdFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: SenderIdFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p> The alphanumeric sender ID in a specific country that you want to describe. For more
 *             information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting
 *                 sender IDs for SMS messaging with Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 */
export interface SenderIdAndCountry {
  /**
   * @public
   * <p>The unique identifier of the sender.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;
}

/**
 * @public
 */
export interface DescribeSenderIdsRequest {
  /**
   * @public
   * <p>An array of SenderIdAndCountry objects to search for.</p>
   */
  SenderIds?: SenderIdAndCountry[];

  /**
   * @public
   * <p>An array of SenderIdFilter objects to filter the results.</p>
   */
  Filters?: SenderIdFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information for all SenderIds in an Amazon Web Services account.</p>
 */
export interface SenderIdInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   */
  SenderIdArn: string | undefined;

  /**
   * @public
   * <p>The alphanumeric sender ID in a specific country that you'd like to describe.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * @public
   * <p>The monthly leasing price, in US dollars.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * @public
   * <p>True if the sender ID is registered.</p>
   */
  Registered: boolean | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;
}

/**
 * @public
 */
export interface DescribeSenderIdsResult {
  /**
   * @public
   * <p>An array of SernderIdInformation objects that contain the details for the requested
   *             SenderIds.</p>
   */
  SenderIds?: SenderIdInformation[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSpendLimitsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const SpendLimitName = {
  TEXT_MESSAGE_MONTHLY_SPEND_LIMIT: "TEXT_MESSAGE_MONTHLY_SPEND_LIMIT",
  VOICE_MESSAGE_MONTHLY_SPEND_LIMIT: "VOICE_MESSAGE_MONTHLY_SPEND_LIMIT",
} as const;

/**
 * @public
 */
export type SpendLimitName = (typeof SpendLimitName)[keyof typeof SpendLimitName];

/**
 * @public
 * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and
 *             text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html">
 *                 Requesting increases to your monthly SMS spending quota for Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>. </p>
 */
export interface SpendLimit {
  /**
   * @public
   * <p>The name for the SpendLimit.</p>
   */
  Name: SpendLimitName | undefined;

  /**
   * @public
   * <p>The maximum amount of money, in US dollars, that you want to be able to spend sending
   *             messages each month. This value has to be less than or equal to the amount in
   *                 <code>MaxLimit</code>. To use this custom limit, <code>Overridden</code> must be set
   *             to true.</p>
   */
  EnforcedLimit: number | undefined;

  /**
   * @public
   * <p> The maximum amount of money that you are able to spend to send messages each month,
   *             in US dollars.</p>
   */
  MaxLimit: number | undefined;

  /**
   * @public
   * <p>When set to <code>True</code>, the value that has been specified in the
   *                 <code>EnforcedLimit</code> is used to determine the maximum amount in US dollars
   *             that can be spent to send messages each month, in US dollars.</p>
   */
  Overridden: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsResult {
  /**
   * @public
   * <p>An array of SpendLimit objects that contain the details for the requested spend
   *             limits.</p>
   */
  SpendLimits?: SpendLimit[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const VerifiedDestinationNumberFilterName = {
  STATUS: "status",
} as const;

/**
 * @public
 */
export type VerifiedDestinationNumberFilterName =
  (typeof VerifiedDestinationNumberFilterName)[keyof typeof VerifiedDestinationNumberFilterName];

/**
 * @public
 * <p>The filter definition for filtering verified destination phone numbers that meets a specified criteria.</p>
 */
export interface VerifiedDestinationNumberFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: VerifiedDestinationNumberFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter on.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersRequest {
  /**
   * @public
   * <p>An array of VerifiedDestinationNumberid to retreive.</p>
   */
  VerifiedDestinationNumberIds?: string[];

  /**
   * @public
   * <p>An array of verified destination phone number, in E.164 format.</p>
   */
  DestinationPhoneNumbers?: string[];

  /**
   * @public
   * <p>An array of VerifiedDestinationNumberFilter objects to filter the results.</p>
   */
  Filters?: VerifiedDestinationNumberFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides information about the requested verified destintion phone number.</p>
 */
export interface VerifiedDestinationNumberInformation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>The verified destination phone number, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The status of the verified destination phone number.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The phone number hasn't been verified yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED</code>: The phone number is verified and can receive messages.</p>
   *             </li>
   *          </ul>
   */
  Status: VerificationStatus | undefined;

  /**
   * @public
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedDestinationNumbersResult {
  /**
   * @public
   * <p>An array of VerifiedDestinationNumberInformation objects</p>
   */
  VerifiedDestinationNumbers: VerifiedDestinationNumberInformation[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DestinationCountryParameterKey = {
  IN_ENTITY_ID: "IN_ENTITY_ID",
  IN_TEMPLATE_ID: "IN_TEMPLATE_ID",
} as const;

/**
 * @public
 */
export type DestinationCountryParameterKey =
  (typeof DestinationCountryParameterKey)[keyof typeof DestinationCountryParameterKey];

/**
 * @public
 */
export interface DisassociateOriginationIdentityRequest {
  /**
   * @public
   * <p>The unique identifier for the pool to disassociate with the origination identity. This
   *             value can be either the PoolId or PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> find the values for
   *             PhoneNumberId and PhoneNumberArn, or use <a>DescribeSenderIds</a> to get the
   *             values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pool.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The PoolId of the pool no longer associated with the origination identity.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   */
  IsoCountryCode?: string;
}

/**
 * @public
 */
export interface DiscardRegistrationVersionRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface DiscardRegistrationVersionResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The status of the registration version.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code>: The initial status of a registration version after it’s created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code>: Your registration has been approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVOKED</code>: Your previously approved registration has been revoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p>
   *             </li>
   *          </ul>
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * @public
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  DE_DE: "DE_DE",
  EN_GB: "EN_GB",
  EN_US: "EN_US",
  ES_419: "ES_419",
  ES_ES: "ES_ES",
  FR_CA: "FR_CA",
  FR_FR: "FR_FR",
  IT_IT: "IT_IT",
  JA_JP: "JA_JP",
  KO_KR: "KO_KR",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const PoolOriginationIdentitiesFilterName = {
  ISO_COUNTRY_CODE: "iso-country-code",
  NUMBER_CAPABILITY: "number-capability",
} as const;

/**
 * @public
 */
export type PoolOriginationIdentitiesFilterName =
  (typeof PoolOriginationIdentitiesFilterName)[keyof typeof PoolOriginationIdentitiesFilterName];

/**
 * @public
 * <p>Information about origination identities associated with a pool that meets a specified
 *             criteria.</p>
 */
export interface PoolOriginationIdentitiesFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: PoolOriginationIdentitiesFilterName | undefined;

  /**
   * @public
   * <p>An array values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesRequest {
  /**
   * @public
   * <p>The unique identifier for the pool. This value can be either the PoolId or
   *             PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>An array of PoolOriginationIdentitiesFilter objects to filter the results..</p>
   */
  Filters?: PoolOriginationIdentitiesFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The metadata for an origination identity associated with a pool.</p>
 */
export interface OriginationIdentityMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the origination identity.</p>
   */
  OriginationIdentityArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the origination identity.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * @public
   * <p>The phone number in E.164 format.</p>
   */
  PhoneNumber?: string;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The unique PoolId of the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>An array of any OriginationIdentityMetadata objects.</p>
   */
  OriginationIdentities?: OriginationIdentityMetadata[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegistrationAssociationFilterName = {
  ISO_COUNTRY_CODE: "iso-country-code",
  RESOURCE_TYPE: "resource-type",
} as const;

/**
 * @public
 */
export type RegistrationAssociationFilterName =
  (typeof RegistrationAssociationFilterName)[keyof typeof RegistrationAssociationFilterName];

/**
 * @public
 * <p>The filter definition for filtering registrations that meets a specified criteria.</p>
 */
export interface RegistrationAssociationFilter {
  /**
   * @public
   * <p>The name of the attribute to filter on.</p>
   */
  Name: RegistrationAssociationFilterName | undefined;

  /**
   * @public
   * <p>An array of values to filter for.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>An array of RegistrationAssociationFilter to apply to the results that are returned.</p>
   */
  Filters?: RegistrationAssociationFilter[];

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per each request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Metadata for the origination identity that is associated with the registration.</p>
 */
export interface RegistrationAssociationMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the origination identity. For example this could be a <b>PhoneNumberId</b> or <b>SenderId</b>.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The origination identity type.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The phone number associated with the registration in E.164 format.</p>
   */
  PhoneNumber?: string;
}

/**
 * @public
 */
export interface ListRegistrationAssociationsResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   */
  RegistrationType: string | undefined;

  /**
   * @public
   * <p>An array of RegistrationAssociationMetadata objects.</p>
   */
  RegistrationAssociations: RegistrationAssociationMetadata[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to query for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutKeywordRequest {
  /**
   * @public
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> get the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The new keyword to add.</p>
   */
  Keyword: string | undefined;

  /**
   * @public
   * <p>The message associated with the keyword.</p>
   */
  KeywordMessage: string | undefined;

  /**
   * @public
   * <p>The action to perform for the new keyword when it is received.</p>
   *          <ul>
   *             <li>
   *                <p>AUTOMATIC_RESPONSE: A message is sent to the recipient.</p>
   *             </li>
   *             <li>
   *                <p>OPT_OUT: Keeps the recipient from receiving future messages.</p>
   *             </li>
   *             <li>
   *                <p>OPT_IN: The recipient wants to receive future messages.</p>
   *             </li>
   *          </ul>
   */
  KeywordAction?: KeywordAction;
}

/**
 * @public
 */
export interface PutKeywordResult {
  /**
   * @public
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   */
  OriginationIdentityArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The keyword that was added.</p>
   */
  Keyword?: string;

  /**
   * @public
   * <p>The message associated with the keyword.</p>
   */
  KeywordMessage?: string;

  /**
   * @public
   * <p>The action to perform when the keyword is used.</p>
   */
  KeywordAction?: KeywordAction;
}

/**
 * @public
 */
export interface PutOptedOutNumberRequest {
  /**
   * @public
   * <p>The OptOutListName or OptOutListArn to add the phone number to.</p>
   */
  OptOutListName: string | undefined;

  /**
   * @public
   * <p>The phone number to add to the OptOutList in E.164 format.</p>
   */
  OptedOutNumber: string | undefined;
}

/**
 * @public
 */
export interface PutOptedOutNumberResult {
  /**
   * @public
   * <p>The OptOutListArn that the phone number was removed from.</p>
   */
  OptOutListArn?: string;

  /**
   * @public
   * <p>The OptOutListName that the phone number was removed from.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>The phone number that was added to the OptOutList.</p>
   */
  OptedOutNumber?: string;

  /**
   * @public
   * <p>The time that the phone number was added to the OptOutList, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  OptedOutTimestamp?: Date;

  /**
   * @public
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   */
  EndUserOptedOut?: boolean;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   */
  FieldPath: string | undefined;

  /**
   * @public
   * <p>An array of values for the form field.</p>
   */
  SelectChoices?: string[];

  /**
   * @public
   * <p>The text data for a free form field.</p>
   */
  TextValue?: string;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId?: string;
}

/**
 * @public
 */
export interface PutRegistrationFieldValueResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The path to the registration form field. You can use <a>DescribeRegistrationFieldDefinitions</a> for a list of <b>FieldPaths</b>.</p>
   */
  FieldPath: string | undefined;

  /**
   * @public
   * <p>An array of values for the form field.</p>
   */
  SelectChoices?: string[];

  /**
   * @public
   * <p>The text data for a free form field.</p>
   */
  TextValue?: string;

  /**
   * @public
   * <p>The unique identifier for the registration attachment.</p>
   */
  RegistrationAttachmentId?: string;
}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * @public
   * <p>The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use <a>DescribePhoneNumbers</a> to get the values for PhoneNumberId and
   *             PhoneNumberArn.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface ReleasePhoneNumberResult {
  /**
   * @public
   * <p>The PhoneNumberArn of the phone number that was released.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The PhoneNumberId of the phone number that was released.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The phone number that was released.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The message type that was associated with the phone number.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>Specifies if the number could be used for text messages, voice, or both.</p>
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * @public
   * <p>The type of number that was released.</p>
   */
  NumberType?: NumberType;

  /**
   * @public
   * <p>The monthly price of the phone number, in US dollars.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList that was associated with the phone number.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;

  /**
   * @public
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ReleaseSenderIdRequest {
  /**
   * @public
   * <p>The sender ID to release.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;
}

/**
 * @public
 */
export interface ReleaseSenderIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   */
  SenderIdArn: string | undefined;

  /**
   * @public
   * <p>The sender ID that was released.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * @public
   * <p>The monthly price, in US dollars, to lease the sender ID.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * @public
   * <p>True if the sender ID is registered.</p>
   */
  Registered: boolean | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;
}

/**
 * @public
 * @enum
 */
export const RequestableNumberType = {
  LONG_CODE: "LONG_CODE",
  SIMULATOR: "SIMULATOR",
  TEN_DLC: "TEN_DLC",
  TOLL_FREE: "TOLL_FREE",
} as const;

/**
 * @public
 */
export type RequestableNumberType = (typeof RequestableNumberType)[keyof typeof RequestableNumberType];

/**
 * @public
 */
export interface RequestPhoneNumberRequest {
  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | undefined;

  /**
   * @public
   * <p>Indicates if the phone number will be used for text messages, voice messages, or both. </p>
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * @public
   * <p>The type of phone number to request.</p>
   */
  NumberType: RequestableNumberType | undefined;

  /**
   * @public
   * <p>The name of the OptOutList to associate with the phone number. You can use the
   *             OptOutListName or OptOutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>The pool to associated with the phone number. You can use the PoolId or PoolArn. </p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>Use this field to attach your phone number for an external registration
   *             process.</p>
   */
  RegistrationId?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true the phone number can't be
   *             deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>An array of tags (key and value pairs) associate with the requested phone number.
   *         </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface RequestPhoneNumberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the requested phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The unique identifier of the new phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The new phone number that was requested.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>Indicates if the phone number will be used for text messages, voice messages or both.
   *         </p>
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * @public
   * <p>The type of number that was released.</p>
   */
  NumberType?: RequestableNumberType;

  /**
   * @public
   * <p>The monthly price, in US dollars, to lease the phone number.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The ARN used to identify the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList that is associated with the requested phone number.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The unique identifier of the pool associated with the phone number </p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;

  /**
   * @public
   * <p>An array of key and value pair tags that are associated with the phone number.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface RequestSenderIdRequest {
  /**
   * @public
   * <p>The sender ID string to request.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes?: MessageType[];

  /**
   * @public
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the sender ID.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface RequestSenderIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   */
  SenderIdArn: string | undefined;

  /**
   * @public
   * <p>The sender ID that was requested.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * @public
   * <p>The monthly price, in US dollars, to lease the sender ID.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * @public
   * <p>True if the sender ID is registered.</p>
   */
  Registered: boolean | undefined;

  /**
   * @public
   * <p>An array of tags (key and value pairs) to associate with the sender ID.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const VerificationChannel = {
  TEXT: "TEXT",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type VerificationChannel = (typeof VerificationChannel)[keyof typeof VerificationChannel];

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeRequest {
  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>Choose to send the verification code as an SMS or voice message.</p>
   */
  VerificationChannel: VerificationChannel | undefined;

  /**
   * @public
   * <p>Choose the language to use for the message.</p>
   */
  LanguageCode?: LanguageCode;

  /**
   * @public
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   */
  Context?: Record<string, string>;

  /**
   * @public
   * <p>This field is used for any country-specific registration requirements. Currently, this
   *             setting is only used when you send messages to recipients in India using a sender ID.
   *             For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>.
   *         </p>
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>>;
}

/**
 * @public
 */
export interface SendDestinationNumberVerificationCodeResult {
  /**
   * @public
   * <p>The unique identifier for the message.</p>
   */
  MessageId: string | undefined;
}

/**
 * @public
 */
export interface SendTextMessageRequest {
  /**
   * @public
   * <p>The destination phone number in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   */
  OriginationIdentity?: string;

  /**
   * @public
   * <p>The body of the text message.</p>
   */
  MessageBody?: string;

  /**
   * @public
   * <p>The type of message. Valid values are
   *             for messages that are critical or time-sensitive and PROMOTIONAL for messages that
   *             aren't critical or time-sensitive.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>When you register a short code in the US, you must specify a program name. If you
   *             don’t have a US short code, omit this attribute.</p>
   */
  Keyword?: string;

  /**
   * @public
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The maximum amount that you want to spend, in US dollars, per each text message part.
   *             A text message can contain multiple parts.</p>
   */
  MaxPrice?: string;

  /**
   * @public
   * <p>How long the text message is valid for. By default this is 72 hours.</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   */
  Context?: Record<string, string>;

  /**
   * @public
   * <p>This field is used for any country-specific registration requirements. Currently, this
   *             setting is only used when you send messages to recipients in India using a sender ID.
   *             For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>.
   *         </p>
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>>;

  /**
   * @public
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface SendTextMessageResult {
  /**
   * @public
   * <p>The unique identifier for the message.</p>
   */
  MessageId?: string;
}

/**
 * @public
 * @enum
 */
export const VoiceMessageBodyTextType = {
  SSML: "SSML",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type VoiceMessageBodyTextType = (typeof VoiceMessageBodyTextType)[keyof typeof VoiceMessageBodyTextType];

/**
 * @public
 * @enum
 */
export const VoiceId = {
  AMY: "AMY",
  ASTRID: "ASTRID",
  BIANCA: "BIANCA",
  BRIAN: "BRIAN",
  CAMILA: "CAMILA",
  CARLA: "CARLA",
  CARMEN: "CARMEN",
  CELINE: "CELINE",
  CHANTAL: "CHANTAL",
  CONCHITA: "CONCHITA",
  CRISTIANO: "CRISTIANO",
  DORA: "DORA",
  EMMA: "EMMA",
  ENRIQUE: "ENRIQUE",
  EWA: "EWA",
  FILIZ: "FILIZ",
  GERAINT: "GERAINT",
  GIORGIO: "GIORGIO",
  GWYNETH: "GWYNETH",
  HANS: "HANS",
  INES: "INES",
  IVY: "IVY",
  JACEK: "JACEK",
  JAN: "JAN",
  JOANNA: "JOANNA",
  JOEY: "JOEY",
  JUSTIN: "JUSTIN",
  KARL: "KARL",
  KENDRA: "KENDRA",
  KIMBERLY: "KIMBERLY",
  LEA: "LEA",
  LIV: "LIV",
  LOTTE: "LOTTE",
  LUCIA: "LUCIA",
  LUPE: "LUPE",
  MADS: "MADS",
  MAJA: "MAJA",
  MARLENE: "MARLENE",
  MATHIEU: "MATHIEU",
  MATTHEW: "MATTHEW",
  MAXIM: "MAXIM",
  MIA: "MIA",
  MIGUEL: "MIGUEL",
  MIZUKI: "MIZUKI",
  NAJA: "NAJA",
  NICOLE: "NICOLE",
  PENELOPE: "PENELOPE",
  RAVEENA: "RAVEENA",
  RICARDO: "RICARDO",
  RUBEN: "RUBEN",
  RUSSELL: "RUSSELL",
  SALLI: "SALLI",
  SEOYEON: "SEOYEON",
  TAKUMI: "TAKUMI",
  TATYANA: "TATYANA",
  VICKI: "VICKI",
  VITORIA: "VITORIA",
  ZEINA: "ZEINA",
  ZHIYU: "ZHIYU",
} as const;

/**
 * @public
 */
export type VoiceId = (typeof VoiceId)[keyof typeof VoiceId];

/**
 * @public
 */
export interface SendVoiceMessageRequest {
  /**
   * @public
   * <p>The destination phone number in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The origination identity to use for the voice call. This can be the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * @public
   * <p>The text to convert to a voice message.</p>
   */
  MessageBody?: string;

  /**
   * @public
   * <p>Specifies if the MessageBody field contains text or <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">speech synthesis
   *                 markup language (SSML)</a>.</p>
   *          <ul>
   *             <li>
   *                <p>TEXT: This is the default value. When used the maximum character limit is
   *                     3000.</p>
   *             </li>
   *             <li>
   *                <p>SSML: When used the maximum character limit is 6000 including SSML
   *                     tagging.</p>
   *             </li>
   *          </ul>
   */
  MessageBodyTextType?: VoiceMessageBodyTextType;

  /**
   * @public
   * <p>The voice for the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly</a>
   *             service to use. By default this is set to "MATTHEW".</p>
   */
  VoiceId?: VoiceId;

  /**
   * @public
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The maximum amount to spend per voice message, in US dollars.</p>
   */
  MaxPricePerMinute?: string;

  /**
   * @public
   * <p>How long the voice message is valid for. By default this is 72 hours.</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   */
  Context?: Record<string, string>;

  /**
   * @public
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface SendVoiceMessageResult {
  /**
   * @public
   * <p>The unique identifier for the message.</p>
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeRequest {
  /**
   * @public
   * <p>The configuration set to update with a new default message type. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType: MessageType | undefined;
}

/**
 * @public
 */
export interface SetDefaultMessageTypeResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set that was updated.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The new default message type of the configuration set.</p>
   */
  MessageType?: MessageType;
}

/**
 * @public
 */
export interface SetDefaultSenderIdRequest {
  /**
   * @public
   * <p>The configuration set to updated with a new default SenderId. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The current sender ID for the configuration set. When sending a text message to a
   *             destination country which supports SenderIds, the default sender ID on the configuration
   *             set specified on <a>SendTextMessage</a> will be used if no dedicated
   *             origination phone numbers or registered SenderIds are available in your account, instead
   *             of a generic sender ID, such as 'NOTICE'.</p>
   */
  SenderId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultSenderIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated configuration set.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set that was updated.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The default sender ID to set for the ConfigurationSet.</p>
   */
  SenderId?: string;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideRequest {
  /**
   * @public
   * <p>The new monthly limit to enforce on text messages.</p>
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetTextMessageSpendLimitOverrideResult {
  /**
   * @public
   * <p>The current monthly limit to enforce on sending text messages.</p>
   */
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideRequest {
  /**
   * @public
   * <p>The new monthly limit to enforce on voice messages.</p>
   */
  MonthlyLimit: number | undefined;
}

/**
 * @public
 */
export interface SetVoiceMessageSpendLimitOverrideResult {
  /**
   * @public
   * <p>The current monthly limit to enforce on sending voice messages.</p>
   */
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionRequest {
  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistrationVersionResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registration.</p>
   */
  RegistrationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId: string | undefined;

  /**
   * @public
   * <p>The version number of the registration.</p>
   */
  VersionNumber: number | undefined;

  /**
   * @public
   * <p>The status of the registration version.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code>: The initial status of a registration version after it’s created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBMITTED</code>: Your registration has been submitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVIEWING</code>: Your registration has been accepted and is being reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code>: Your registration has been approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCARDED</code>: You've abandon this version of their registration to start over with a new version. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code>: You must fix your registration and resubmit it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REVOKED</code>: Your previously approved registration has been revoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: Your previously approved registration version moves into this status when a more recently submitted version is approved.</p>
   *             </li>
   *          </ul>
   */
  RegistrationVersionStatus: RegistrationVersionStatus | undefined;

  /**
   * @public
   * <p>The <b>RegistrationVersionStatusHistory</b> object contains the time stamps for when the reservations status changes.</p>
   */
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An array of key and value pair tags that are associated with the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An array of tag key values to unassociate with the resource.</p>
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
   * @public
   * <p>The configuration set to update with the new event destination. Valid values for this
   *             can be the ConfigurationSetName or ConfigurationSetArn.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The name to use for the event destination.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * @public
   * <p>When set to true logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>An array of event types that determine which events to log.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   */
  MatchingEventTypes?: EventType[];

  /**
   * @public
   * <p>An object that contains information about an event destination that sends data to
   *                 CloudWatch Logs.</p>
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination for logging to Kinesis Data Firehose.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * <p>An object that contains information about an event destination that sends data to
   *                 Amazon SNS.</p>
   */
  SnsDestination?: SnsDestination;
}

/**
 * @public
 */
export interface UpdateEventDestinationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.</p>
   */
  ConfigurationSetArn?: string;

  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>An EventDestination object containing the details of where events will be logged.
   *         </p>
   */
  EventDestination?: EventDestination;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * @public
   * <p>The unique identifier of the phone number. Valid values for this field can be either
   *             the PhoneNumberId or PhoneNumberArn.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The OptOutList to add the phone number to. Valid values for this field can be either
   *             the OutOutListName or OutOutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   */
  DeletionProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The unique identifier of the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The phone number that was updated.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: NumberStatus;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   */
  IsoCountryCode?: string;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>Specifies if the number could be used for text messages, voice or both.</p>
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * @public
   * <p>The type of number that was requested.</p>
   */
  NumberType?: NumberType;

  /**
   * @public
   * <p>The monthly leasing price of the phone number, in US dollars.</p>
   */
  MonthlyLeasingPrice?: string;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>This is true if self managed opt-out are enabled.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList associated with the phone number.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>When set to true the phone number can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;

  /**
   * @public
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface UpdatePoolRequest {
  /**
   * @public
   * <p>The unique identifier of the pool to update. Valid values are either the PoolId or
   *             PoolArn.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The OptOutList to associate with the pool. Valid values are either OptOutListName or
   *             OptOutListArn.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * @public
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePoolResult {
  /**
   * @public
   * <p>The ARN of the pool.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The unique identifier of the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The current status of the pool update request.</p>
   */
  Status?: PoolStatus;

  /**
   * @public
   * <p>The type of message for the pool to use.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   */
  TwoWayEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   */
  TwoWayChannelArn?: string;

  /**
   * @public
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   */
  TwoWayChannelRole?: string;

  /**
   * @public
   * <p>When an end recipient sends a message that begins with HELP or STOP to one of your
   *             dedicated numbers, Amazon Pinpoint automatically replies with a customizable message
   *             and adds the end recipient to the OptOutList. When set to true you're responsible for
   *             responding to HELP and STOP requests. You're also responsible for tracking and honoring
   *             opt-out requests.</p>
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * @public
   * <p>The name of the OptOutList associated with the pool.</p>
   */
  OptOutListName?: string;

  /**
   * @public
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   */
  SharedRoutesEnabled?: boolean;

  /**
   * @public
   * <p>When set to true the pool can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface UpdateSenderIdRequest {
  /**
   * @public
   * <p>The sender ID to update.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   */
  DeletionProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateSenderIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the SenderId.</p>
   */
  SenderIdArn: string | undefined;

  /**
   * @public
   * <p>The sender ID that was updated.</p>
   */
  SenderId: string | undefined;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   */
  IsoCountryCode: string | undefined;

  /**
   * @public
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   */
  MessageTypes: MessageType[] | undefined;

  /**
   * @public
   * <p>The monthly price, in US dollars, to lease the sender ID.</p>
   */
  MonthlyLeasingPrice: string | undefined;

  /**
   * @public
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * @public
   * <p>True if the sender ID is registered..</p>
   */
  Registered: boolean | undefined;

  /**
   * @public
   * <p>The unique identifier for the registration.</p>
   */
  RegistrationId?: string;
}

/**
 * @public
 */
export interface VerifyDestinationNumberRequest {
  /**
   * @public
   * <p>The unique identifier for the verififed destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>The verification code that was received by the verified destination phone number.</p>
   */
  VerificationCode: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the verified destination phone number.</p>
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * @public
   * <p>The phone number in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The status for being able to send messages to the phone number.</p>
   */
  Status: VerificationStatus | undefined;

  /**
   * @public
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreatedTimestamp: Date | undefined;
}

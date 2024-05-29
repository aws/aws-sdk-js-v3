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
 * <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   * @public
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
  DEFAULT_PROTECT_CONFIGURATION_ID: "DEFAULT_PROTECT_CONFIGURATION_ID",
} as const;

/**
 * @public
 */
export type AccountAttributeName = (typeof AccountAttributeName)[keyof typeof AccountAttributeName];

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
   * <p>The pool to update with the new Identity. This value can be either the PoolId or
   *             PoolArn, and you can find these values using <a>DescribePools</a>.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn, while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the origination identity.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface AssociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool that is now associated with the origination
   *             identity.</p>
   * @public
   */
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool that is now associated with the origination identity.</p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   * @public
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
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
  DESTINATION_COUNTRY_BLOCKED_BY_PROTECT_CONFIGURATION: "DESTINATION_COUNTRY_BLOCKED_BY_PROTECT_CONFIGURATION",
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
  PROTECT_CONFIGURATION_ASSOCIATED_WITH_CONFIGURATION_SET: "PROTECT_CONFIGURATION_ASSOCIATED_WITH_CONFIGURATION_SET",
  PROTECT_CONFIGURATION_IS_ACCOUNT_DEFAULT: "PROTECT_CONFIGURATION_IS_ACCOUNT_DEFAULT",
  PROTECT_CONFIGURATION_NOT_ASSOCIATED_WITH_CONFIGURATION_SET:
    "PROTECT_CONFIGURATION_NOT_ASSOCIATED_WITH_CONFIGURATION_SET",
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
  PROTECT_CONFIGURATION: "protect-configuration",
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
 * <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: ConflictExceptionReason;

  /**
   * <p>The type of resource that caused the exception.</p>
   * @public
   */
  ResourceType?: ResourceType;

  /**
   * <p>The unique identifier of the request.</p>
   * @public
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
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string;
  /**
   * <p>The unique identifier of the request.</p>
   * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of resource that caused the exception.</p>
   * @public
   */
  ResourceType?: ResourceType;

  /**
   * <p>The unique identifier of the resource.</p>
   * @public
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
  MONTHLY_SPEND_LIMIT_REACHED_FOR_MEDIA: "MONTHLY_SPEND_LIMIT_REACHED_FOR_MEDIA",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT: "MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE: "MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE",
  OPT_OUT_LISTS_PER_ACCOUNT: "OPT_OUT_LISTS_PER_ACCOUNT",
  ORIGINATION_IDENTITIES_PER_POOL: "ORIGINATION_IDENTITIES_PER_POOL",
  PHONE_NUMBERS_PER_ACCOUNT: "PHONE_NUMBERS_PER_ACCOUNT",
  PHONE_NUMBERS_PER_REGISTRATION: "PHONE_NUMBERS_PER_REGISTRATION",
  POOLS_PER_ACCOUNT: "POOLS_PER_ACCOUNT",
  PROTECT_CONFIGURATIONS_PER_ACCOUNT: "PROTECT_CONFIGURATIONS_PER_ACCOUNT",
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
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   * @public
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
 * <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The message associated with the validation exception with information to help
   *             determine its cause.</p>
   * @public
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
  MEDIA_TYPE_NOT_SUPPORTED: "MEDIA_TYPE_NOT_SUPPORTED",
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
 * <p>A validation exception for a field.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason;

  /**
   * <p>The field that failed validation.</p>
   * @public
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
 * <p>Contains the destination configuration to use when publishing message sending events.
 *         </p>
 * @public
 */
export interface CloudWatchLogsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management role
   *             that is able to write event data to an Amazon CloudWatch destination.</p>
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
 * @public
 * @enum
 */
export const ConfigurationSetFilterName = {
  DEFAULT_MESSAGE_TYPE: "default-message-type",
  DEFAULT_SENDER_ID: "default-sender-id",
  EVENT_DESTINATION_NAME: "event-destination-name",
  MATCHING_EVENT_TYPES: "matching-event-types",
  PROTECT_CONFIGURATION_ID: "protect-configuration-id",
} as const;

/**
 * @public
 */
export type ConfigurationSetFilterName = (typeof ConfigurationSetFilterName)[keyof typeof ConfigurationSetFilterName];

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
 * <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with a Kinesis Data Firehose event
 *             destination.</p>
 *          <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration
 *             sets, which enable you to publish message sending events.</p>
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * <p>The ARN of an Identity and Access Management role that is able to write
   *             event data to an Amazon Kinesis Data Firehose destination.</p>
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
 * @public
 * @enum
 */
export const EventType = {
  ALL: "ALL",
  MEDIA_ALL: "MEDIA_ALL",
  MEDIA_BLOCKED: "MEDIA_BLOCKED",
  MEDIA_CARRIER_BLOCKED: "MEDIA_CARRIER_BLOCKED",
  MEDIA_CARRIER_UNREACHABLE: "MEDIA_CARRIER_UNREACHABLE",
  MEDIA_DELIVERED: "MEDIA_DELIVERED",
  MEDIA_FILE_INACCESSIBLE: "MEDIA_FILE_INACCESSIBLE",
  MEDIA_FILE_SIZE_EXCEEDED: "MEDIA_FILE_SIZE_EXCEEDED",
  MEDIA_FILE_TYPE_UNSUPPORTED: "MEDIA_FILE_TYPE_UNSUPPORTED",
  MEDIA_INVALID: "MEDIA_INVALID",
  MEDIA_INVALID_MESSAGE: "MEDIA_INVALID_MESSAGE",
  MEDIA_PENDING: "MEDIA_PENDING",
  MEDIA_QUEUED: "MEDIA_QUEUED",
  MEDIA_SPAM: "MEDIA_SPAM",
  MEDIA_SUCCESSFUL: "MEDIA_SUCCESSFUL",
  MEDIA_TTL_EXPIRED: "MEDIA_TTL_EXPIRED",
  MEDIA_UNKNOWN: "MEDIA_UNKNOWN",
  MEDIA_UNREACHABLE: "MEDIA_UNREACHABLE",
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
 * <p>An object that defines an Amazon SNS destination for events. You can use
 *                 Amazon SNS to send notification when certain events occur.</p>
 * @public
 */
export interface SnsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to
   *             publish events to.</p>
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * <p>Contains information about an event destination.</p>
 *          <p>Event destinations are associated with configuration sets, which enable you to publish
 *             message sending events to CloudWatch, Kinesis Data Firehose, or Amazon SNS.</p>
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
   * <p>An array of event types that determine which events to log.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon CloudWatch logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination that sends logging
   *             events to Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination;
}

/**
 * <p>Information related to a given configuration set in your Amazon Web Services
 *             account.</p>
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
   * <p>An array of EventDestination objects that describe any events to log and where to log
   *             them.</p>
   * @public
   */
  EventDestinations: EventDestination[] | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  DefaultMessageType?: MessageType;

  /**
   * <p>The default sender ID used by the ConfigurationSet.</p>
   * @public
   */
  DefaultSenderId?: string;

  /**
   * <p>The time when the ConfigurationSet was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string;
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
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateConfigurationSetResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the new configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>An array of key and value pair tags that's associated with the configuration
   *             set.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The time when the configuration set was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateEventDestinationRequest {
  /**
   * <p>Either the name of the configuration set or the configuration set ARN to apply event
   *             logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name that identifies the event destination.</p>
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An array of event types that determine which events to log. If "ALL" is used, then
   *                 Amazon Pinpoint logs every event type.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateEventDestinationResult {
  /**
   * <p>The ARN of the configuration set.</p>
   * @public
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The details of the destination where events are logged.</p>
   * @public
   */
  EventDestination?: EventDestination;
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
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateOptOutListResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the OptOutList.</p>
   * @public
   */
  OptOutListArn?: string;

  /**
   * <p>The name of the new OptOutList.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>An array of tags (key and value pairs) associated with the new OptOutList.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePoolRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of
   *             the new pool.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>By default this is set to false. When set to true the pool can't be deleted. You can
   *             change this value using the <a>UpdatePool</a> action.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn?: string;

  /**
   * <p>The unique identifier for the pool.</p>
   * @public
   */
  PoolId?: string;

  /**
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
   * @public
   */
  Status?: PoolStatus;

  /**
   * <p>The type of message for the pool to use.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *         </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associated with the pool.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateProtectConfigurationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *            request. If you don't specify a client token, a randomly generated token is used for the
   *            request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[];
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
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRegistrationRequest {
  /**
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
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
   * <p>The type of registration form to create. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
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
  AdditionalAttributes?: Record<string, string>;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration.</p>
   * @public
   */
  Tags?: Tag[];

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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
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
  IsoCountryCode?: string;

  /**
   * <p>The phone number associated with the registration in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string;
}

/**
 * @public
 */
export interface CreateRegistrationAttachmentRequest {
  /**
   * <p>The registration file to upload. The maximum file size is 1MiB and valid file extensions are PDF, JPEG and PNG.</p>
   * @public
   */
  AttachmentBody?: Uint8Array;

  /**
   * <p>A URL to the required registration file.  For example, you can provide the S3 object URL.</p>
   * @public
   */
  AttachmentUrl?: string;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
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
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the registration attachment.</p>
   * @public
   */
  Tags?: Tag[];

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
  SubmittedTimestamp?: Date;

  /**
   * <p>The time when the registration was in the reviewing state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ReviewingTimestamp?: Date;

  /**
   * <p>The time when the registration was in the approved state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ApprovedTimestamp?: Date;

  /**
   * <p>The time when the registration was in the discarded state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  DiscardedTimestamp?: Date;

  /**
   * <p>The time when the registration was in the denied state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  DeniedTimestamp?: Date;

  /**
   * <p>The time when the registration was in the revoked state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  RevokedTimestamp?: Date;

  /**
   * <p>The time when the registration was in the archived state, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  ArchivedTimestamp?: Date;
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
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
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
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * <p>An array of tags (key and value pairs) to associate with the destination number.</p>
   * @public
   */
  Tags?: Tag[];

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
   * <p>The name of the configuration set or the configuration set ARN that you want to
   *             delete. The ConfigurationSetName and ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a> action.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the deleted configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>An array of any EventDestination objects that were associated with the deleted
   *             configuration set.</p>
   * @public
   */
  EventDestinations?: EventDestination[];

  /**
   * <p>The default message type of the configuration set that was deleted.</p>
   * @public
   */
  DefaultMessageType?: MessageType;

  /**
   * <p>The default Sender ID of the configuration set that was deleted.</p>
   * @public
   */
  DefaultSenderId?: string;

  /**
   * <p>The time that the deleted configuration set was created in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface DeleteDefaultMessageTypeRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default message type from. The ConfigurationSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The current message type for the configuration set.</p>
   * @public
   */
  MessageType?: MessageType;
}

/**
 * @public
 */
export interface DeleteDefaultSenderIdRequest {
  /**
   * <p>The name of the configuration set or the configuration set Amazon Resource Name (ARN)
   *             to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn
   *             can be found using the <a>DescribeConfigurationSets</a> action.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The current sender ID for the configuration set.</p>
   * @public
   */
  SenderId?: string;
}

/**
 * @public
 */
export interface DeleteEventDestinationRequest {
  /**
   * <p>The name of the configuration set or the configuration set's Amazon Resource Name
   *             (ARN) to remove the event destination from. The ConfigurateSetName and
   *             ConfigurationSetArn can be found using the <a>DescribeConfigurationSets</a>
   *             action.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set the event destination was deleted from.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The event destination object that was deleted.</p>
   * @public
   */
  EventDestination?: EventDestination;
}

/**
 * @public
 */
export interface DeleteKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or
   *             PoolArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn and <a>DescribePools</a> to find the values
   *             of PoolId and PoolArn.</p>
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
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The keyword that was deleted.</p>
   * @public
   */
  Keyword?: string;

  /**
   * <p>The message that was associated with the deleted keyword.</p>
   * @public
   */
  KeywordMessage?: string;

  /**
   * <p>The action that was associated with the deleted keyword.</p>
   * @public
   */
  KeywordAction?: KeywordAction;
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
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface DeleteOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to remove the phone number from.</p>
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
  OptOutListArn?: string;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>The phone number that was removed from the OptOutList.</p>
   * @public
   */
  OptedOutNumber?: string;

  /**
   * <p>The time that the number was removed at, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  OptedOutTimestamp?: Date;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   * @public
   */
  EndUserOptedOut?: boolean;
}

/**
 * @public
 */
export interface DeleteOptOutListRequest {
  /**
   * <p>The OptOutListName or OptOutListArn of the OptOutList to delete. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
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
  OptOutListArn?: string;

  /**
   * <p>The name of the OptOutList that was removed.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>The time when the OptOutList was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface DeletePoolRequest {
  /**
   * <p>The PoolId or PoolArn of the pool to delete. You can use <a>DescribePools</a> to find the values for PoolId and PoolArn .</p>
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
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool that was deleted.</p>
   * @public
   */
  PoolId?: string;

  /**
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
   * @public
   */
  Status?: PoolStatus;

  /**
   * <p>The message type that was associated with the deleted pool.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that was associated with the deleted pool.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
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
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
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
  ApprovedVersionNumber?: number;

  /**
   * <p>The latest version number of the registration that was denied.</p>
   * @public
   */
  LatestDeniedVersionNumber?: number;

  /**
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   * @public
   */
  AdditionalAttributes?: Record<string, string>;

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
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>The error message if the upload failed.</p>
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason;

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
  SelectChoices?: string[];

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
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
   * <p>The current monthly limit, in US dollars.</p>
   * @public
   */
  MonthlyLimit?: number;
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
  MonthlyLimit?: number;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * <p>An array of AccountAttributes objects.</p>
   * @public
   */
  AccountAttributes?: AccountAttribute[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAccountLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeAccountLimitsResult {
  /**
   * <p>An array of AccountLimit objects that show the current spend limits.</p>
   * @public
   */
  AccountLimits?: AccountLimit[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsRequest {
  /**
   * <p>An array of strings. Each element can be either a ConfigurationSetName or
   *             ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetNames?: string[];

  /**
   * <p>An array of filters to apply to the results that are returned.</p>
   * @public
   */
  Filters?: ConfigurationSetFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeConfigurationSetsResult {
  /**
   * <p>An array of ConfigurationSets objects.</p>
   * @public
   */
  ConfigurationSets?: ConfigurationSetInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> to find the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>An array of keywords to search for.</p>
   * @public
   */
  Keywords?: string[];

  /**
   * <p>An array of keyword filters to filter the results.</p>
   * @public
   */
  Filters?: KeywordFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that is associated with the OriginationIdentity.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>An array of KeywordInformation objects that contain the results.</p>
   * @public
   */
  Keywords?: KeywordInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
   * <p>The OptOutListName or OptOutListArn of the OptOutList. You can use <a>DescribeOptOutLists</a> to find the values for OptOutListName and
   *             OptOutListArn.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>An array of phone numbers to search for in the OptOutList.</p>
   * @public
   */
  OptedOutNumbers?: string[];

  /**
   * <p>An array of OptedOutFilter objects to filter the results on.</p>
   * @public
   */
  Filters?: OptedOutFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  OptOutListArn?: string;

  /**
   * <p>The name of the OptOutList.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>An array of OptedOutNumbersInformation objects that provide information about the
   *             requested OptedOutNumbers.</p>
   * @public
   */
  OptedOutNumbers?: OptedOutNumberInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOptOutListsRequest {
  /**
   * <p>The OptOutLists to show the details of. This is an array of strings that can be either
   *             the OptOutListName or OptOutListArn.</p>
   * @public
   */
  OptOutListNames?: string[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>An array of OptOutListInformation objects that contain the details for the requested
   *             OptOutLists.</p>
   * @public
   */
  OptOutLists?: OptOutListInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
   * <p>The unique identifier of phone numbers to find information about. This is an array of
   *             strings that can be either the PhoneNumberId or PhoneNumberArn.</p>
   * @public
   */
  PhoneNumberIds?: string[];

  /**
   * <p>An array of PhoneNumberFilter objects to filter the results.</p>
   * @public
   */
  Filters?: PhoneNumberFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const NumberCapability = {
  MMS: "MMS",
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
  PhoneNumberId?: string;

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
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
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
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients using the TwoWayChannelArn.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>When set to false an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out request. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The unique identifier of the pool associated with the phone number.</p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string;

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
   * <p>An array of PhoneNumberInformation objects that contain the details for the requested
   *             phone numbers.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumberInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
   * <p>The unique identifier of pools to find. This is an array of strings that can be either
   *             the PoolId or PoolArn.</p>
   * @public
   */
  PoolIds?: string[];

  /**
   * <p>An array of PoolFilter objects to filter the results.</p>
   * @public
   */
  Filters?: PoolFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>When set to true you can receive incoming text messages from your end recipients using
   *             the TwoWayChannelArn.</p>
   * @public
   */
  TwoWayEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>When set to false, an end recipient sends a message that begins with HELP or STOP to
   *             one of your dedicated numbers, Amazon Pinpoint automatically replies with a
   *             customizable message and adds the end recipient to the OptOutList. When set to true
   *             you're responsible for responding to HELP and STOP requests. You're also responsible for
   *             tracking and honoring opt-out requests. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-managing.html#settings-account-sms-self-managed-opt-out">Self-managed opt-outs</a>
   *          </p>
   * @public
   */
  SelfManagedOptOutsEnabled: boolean | undefined;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName: string | undefined;

  /**
   * <p>Allows you to enable shared routes on your pool.</p>
   *          <p>By default, this is set to <code>False</code>. If you set this value to
   *                 <code>True</code>, your messages are sent using phone numbers or sender IDs
   *             (depending on the country) that are shared with other Amazon Pinpoint users. In some
   *             countries, such as the United States, senders aren't allowed to use shared routes and
   *             must use a dedicated phone number or short code.</p>
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
  Pools?: PoolInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ProtectConfigurationFilterName = {
  ACCOUNT_DEFAULT: "account-default",
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
} as const;

/**
 * @public
 */
export type ProtectConfigurationFilterName =
  (typeof ProtectConfigurationFilterName)[keyof typeof ProtectConfigurationFilterName];

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
  ProtectConfigurationIds?: string[];

  /**
   * <p>An array of ProtectConfigurationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: ProtectConfigurationFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *            value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
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
  ProtectConfigurations?: ProtectConfigurationInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *            value for this field in the initial request.</p>
   * @public
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
  RegistrationAttachmentIds?: string[];

  /**
   * <p>An array of RegistrationAttachmentFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationAttachmentFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * @public
   */
  AttachmentStatus: AttachmentStatus | undefined;

  /**
   * <p>A description of why the upload didn't successfully complete.</p>
   * @public
   */
  AttachmentUploadErrorReason?: AttachmentUploadErrorReason;

  /**
   * <p>The time when the registration attachment was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
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
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationFieldDefinitionsRequest {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  SectionPath?: string;

  /**
   * <p>An array of paths to the registration form field.</p>
   * @public
   */
  FieldPaths?: string[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  Title?: string;

  /**
   * <p>A description of the option meaning.</p>
   * @public
   */
  Description?: string;
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
  LongDescription?: string;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
   */
  DocumentationLink?: string;

  /**
   * <p>An array of SelectOptionDescription objects.</p>
   * @public
   */
  SelectOptionDescriptions?: SelectOptionDescription[];

  /**
   * <p>The validation rules for the text field.</p>
   * @public
   */
  TextValidationDescription?: string;

  /**
   * <p>Example text of what the value of a field should contain.</p>
   * @public
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
  SelectValidation?: SelectValidation;

  /**
   * <p>The validation rules for a text field.</p>
   * @public
   */
  TextValidation?: TextValidation;

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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of RegistrationFieldDefinitions objects that contain the details for the requested fields. </p>
   * @public
   */
  RegistrationFieldDefinitions: RegistrationFieldDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;
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
  VersionNumber?: number;

  /**
   * <p>The path to the section of the registration.</p>
   * @public
   */
  SectionPath?: string;

  /**
   * <p>An array of paths to the registration form field.</p>
   * @public
   */
  FieldPaths?: string[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  SelectChoices?: string[];

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string;

  /**
   * <p>A description of why the registration was denied.</p>
   * @public
   */
  DeniedReason?: string;
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
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
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
  RegistrationIds?: string[];

  /**
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
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
  ApprovedVersionNumber?: number;

  /**
   * <p>The latest version number of the registration that was denied.</p>
   * @public
   */
  LatestDeniedVersionNumber?: number;

  /**
   * <p>Metadata about a given registration which is specific to that registration type.</p>
   * @public
   */
  AdditionalAttributes?: Record<string, string>;

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
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistrationSectionDefinitionsRequest {
  /**
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of paths for the registration form section.</p>
   * @public
   */
  SectionPaths?: string[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  LongDescription?: string;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
   */
  DocumentationLink?: string;
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of  RegistrationSectionDefinition objects.</p>
   * @public
   */
  RegistrationSectionDefinitions: RegistrationSectionDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationTypes?: string[];

  /**
   * <p>An array of RegistrationFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationTypeFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  ShortDescription?: string;

  /**
   * <p>A full description of the display hint.</p>
   * @public
   */
  LongDescription?: string;

  /**
   * <p>The title of the document the display hint is associated with.</p>
   * @public
   */
  DocumentationTitle?: string;

  /**
   * <p>The link to the document the display hint is associated with.</p>
   * @public
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
  IsoCountryCode?: string;

  /**
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
   * @public
   */
  AssociationBehavior: RegistrationAssociationBehavior | undefined;

  /**
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>The supported association behavior for the registration type.</p>
   * @public
   */
  SupportedAssociations?: SupportedAssociation[];

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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationTypeDefinitions: RegistrationTypeDefinition[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
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
  VersionNumbers?: number[];

  /**
   * <p>An array of RegistrationVersionFilter objects to filter the results.</p>
   * @public
   */
  Filters?: RegistrationVersionFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  LongDescription?: string;

  /**
   * <p>The title of the document.</p>
   * @public
   */
  DocumentationTitle?: string;

  /**
   * <p>The link to the document.</p>
   * @public
   */
  DocumentationLink?: string;
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
  DeniedReasons?: RegistrationDeniedReasonInformation[];
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
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
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
 * <p> The alphanumeric sender ID in a specific country that you want to describe. For more
 *             information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting
 *                 sender IDs for SMS messaging with Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 * @public
 */
export interface SenderIdAndCountry {
  /**
   * <p>The unique identifier of the sender.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;
}

/**
 * @public
 */
export interface DescribeSenderIdsRequest {
  /**
   * <p>An array of SenderIdAndCountry objects to search for.</p>
   * @public
   */
  SenderIds?: SenderIdAndCountry[];

  /**
   * <p>An array of SenderIdFilter objects to filter the results.</p>
   * @public
   */
  Filters?: SenderIdFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
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
  RegistrationId?: string;
}

/**
 * @public
 */
export interface DescribeSenderIdsResult {
  /**
   * <p>An array of SernderIdInformation objects that contain the details for the requested
   *             SenderIds.</p>
   * @public
   */
  SenderIds?: SenderIdInformation[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSpendLimitsRequest {
  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const SpendLimitName = {
  MEDIA_MESSAGE_MONTHLY_SPEND_LIMIT: "MEDIA_MESSAGE_MONTHLY_SPEND_LIMIT",
  TEXT_MESSAGE_MONTHLY_SPEND_LIMIT: "TEXT_MESSAGE_MONTHLY_SPEND_LIMIT",
  VOICE_MESSAGE_MONTHLY_SPEND_LIMIT: "VOICE_MESSAGE_MONTHLY_SPEND_LIMIT",
} as const;

/**
 * @public
 */
export type SpendLimitName = (typeof SpendLimitName)[keyof typeof SpendLimitName];

/**
 * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and
 *             text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html">
 *                 Requesting increases to your monthly SMS spending quota for Amazon Pinpoint
 *             </a> in the <i>Amazon Pinpoint User Guide</i>. </p>
 * @public
 */
export interface SpendLimit {
  /**
   * <p>The name for the SpendLimit.</p>
   * @public
   */
  Name: SpendLimitName | undefined;

  /**
   * <p>The maximum amount of money, in US dollars, that you want to be able to spend sending
   *             messages each month. This value has to be less than or equal to the amount in
   *                 <code>MaxLimit</code>. To use this custom limit, <code>Overridden</code> must be set
   *             to true.</p>
   * @public
   */
  EnforcedLimit: number | undefined;

  /**
   * <p> The maximum amount of money that you are able to spend to send messages each month,
   *             in US dollars.</p>
   * @public
   */
  MaxLimit: number | undefined;

  /**
   * <p>When set to <code>True</code>, the value that has been specified in the
   *                 <code>EnforcedLimit</code> is used to determine the maximum amount in US dollars
   *             that can be spent to send messages each month, in US dollars.</p>
   * @public
   */
  Overridden: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSpendLimitsResult {
  /**
   * <p>An array of SpendLimit objects that contain the details for the requested spend
   *             limits.</p>
   * @public
   */
  SpendLimits?: SpendLimit[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
   * <p>An array of VerifiedDestinationNumberid to retreive.</p>
   * @public
   */
  VerifiedDestinationNumberIds?: string[];

  /**
   * <p>An array of verified destination phone number, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumbers?: string[];

  /**
   * <p>An array of VerifiedDestinationNumberFilter objects to filter the results.</p>
   * @public
   */
  Filters?: VerifiedDestinationNumberFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * @public
   */
  Status: VerificationStatus | undefined;

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
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
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
   * <p>The unique identifier for the pool to disassociate with the origination identity. This
   *             value can be either the PoolId or PoolArn.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> find the values for
   *             PhoneNumberId and PhoneNumberArn, or use <a>DescribeSenderIds</a> to get the
   *             values for SenderId and SenderIdArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DisassociateOriginationIdentityResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the pool.</p>
   * @public
   */
  PoolArn?: string;

  /**
   * <p>The PoolId of the pool no longer associated with the origination identity.</p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>The PhoneNumberArn or SenderIdArn of the origination identity.</p>
   * @public
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or SenderId of the origination identity.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   * @public
   */
  IsoCountryCode?: string;
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
 * @public
 * @enum
 */
export const ProtectStatus = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;

/**
 * @public
 */
export type ProtectStatus = (typeof ProtectStatus)[keyof typeof ProtectStatus];

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
   * <p>A map of ProtectConfigurationCountryRuleSetInformation objects that contain the
   *             details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html">Supported countries and regions (SMS channel)</a> in the Amazon Pinpoint SMS user guide.</p>
   * @public
   */
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation> | undefined;
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
 * <p>Information about origination identities associated with a pool that meets a specified
 *             criteria.</p>
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
   * <p>The unique identifier for the pool. This value can be either the PoolId or
   *             PoolArn.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>An array of PoolOriginationIdentitiesFilter objects to filter the results..</p>
   * @public
   */
  Filters?: PoolOriginationIdentitiesFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>Describes if the origination identity can be used for text messages, voice calls or
   *             both.</p>
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string;
}

/**
 * @public
 */
export interface ListPoolOriginationIdentitiesResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the pool.</p>
   * @public
   */
  PoolArn?: string;

  /**
   * <p>The unique PoolId of the pool.</p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>An array of any OriginationIdentityMetadata objects.</p>
   * @public
   */
  OriginationIdentities?: OriginationIdentityMetadata[];

  /**
   * <p>The token to be used for the next set of paginated results. If this field is empty
   *             then there are no more results.</p>
   * @public
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
  Filters?: RegistrationAssociationFilter[];

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per each request.</p>
   * @public
   */
  MaxResults?: number;
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
  IsoCountryCode?: string;

  /**
   * <p>The phone number associated with the registration in E.164 format.</p>
   * @public
   */
  PhoneNumber?: string;
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
   * <p>The type of registration form. The list of <b>RegistrationTypes</b> can be found using the <a>DescribeRegistrationTypeDefinitions</a>
   *             action.</p>
   * @public
   */
  RegistrationType: string | undefined;

  /**
   * <p>An array of RegistrationAssociationMetadata objects.</p>
   * @public
   */
  RegistrationAssociations: RegistrationAssociationMetadata[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results. You don't need to supply a
   *             value for this field in the initial request.</p>
   * @public
   */
  NextToken?: string;
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
  ResourceArn?: string;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutKeywordRequest {
  /**
   * <p>The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or
   *             SenderIdArn. You can use <a>DescribePhoneNumbers</a> get the values for
   *             PhoneNumberId and PhoneNumberArn while <a>DescribeSenderIds</a> can be used
   *             to get the values for SenderId and SenderIdArn.</p>
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
   * @public
   */
  KeywordAction?: KeywordAction;
}

/**
 * @public
 */
export interface PutKeywordResult {
  /**
   * <p>The PhoneNumberArn or PoolArn that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentityArn?: string;

  /**
   * <p>The PhoneNumberId or PoolId that the keyword was associated with.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The keyword that was added.</p>
   * @public
   */
  Keyword?: string;

  /**
   * <p>The message associated with the keyword.</p>
   * @public
   */
  KeywordMessage?: string;

  /**
   * <p>The action to perform when the keyword is used.</p>
   * @public
   */
  KeywordAction?: KeywordAction;
}

/**
 * @public
 */
export interface PutOptedOutNumberRequest {
  /**
   * <p>The OptOutListName or OptOutListArn to add the phone number to.</p>
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
  OptOutListArn?: string;

  /**
   * <p>The OptOutListName that the phone number was removed from.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>The phone number that was added to the OptOutList.</p>
   * @public
   */
  OptedOutNumber?: string;

  /**
   * <p>The time that the phone number was added to the OptOutList, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  OptedOutTimestamp?: Date;

  /**
   * <p>This is true if it was the end user who requested their phone number be removed.
   *         </p>
   * @public
   */
  EndUserOptedOut?: boolean;
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
  SelectChoices?: string[];

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string;
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
  SelectChoices?: string[];

  /**
   * <p>The text data for a free form field.</p>
   * @public
   */
  TextValue?: string;

  /**
   * <p>The unique identifier for the registration attachment.</p>
   * @public
   */
  RegistrationAttachmentId?: string;
}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * <p>The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use <a>DescribePhoneNumbers</a> to get the values for PhoneNumberId and
   *             PhoneNumberArn.</p>
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
  PhoneNumberArn?: string;

  /**
   * <p>The PhoneNumberId of the phone number that was released.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number that was released.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or
   *             region.</p>
   * @public
   */
  IsoCountryCode?: string;

  /**
   * <p>The message type that was associated with the phone number.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>Specifies if the number could be used for text messages, voice, or both.</p>
   * @public
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * <p>The type of number that was released.</p>
   * @public
   */
  NumberType?: NumberType;

  /**
   * <p>The monthly price of the phone number, in US dollars.</p>
   * @public
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the TwoWayChannel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that was associated with the phone number.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
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
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
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
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType: MessageType | undefined;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages, or both. </p>
   * @public
   */
  NumberCapabilities: NumberCapability[] | undefined;

  /**
   * <p>The type of phone number to request.</p>
   * @public
   */
  NumberType: RequestableNumberType | undefined;

  /**
   * <p>The name of the OptOutList to associate with the phone number. You can use the
   *             OptOutListName or OptOutListArn.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>The pool to associated with the phone number. You can use the PoolId or PoolArn. </p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>Use this field to attach your phone number for an external registration
   *             process.</p>
   * @public
   */
  RegistrationId?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be
   *             deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) associate with the requested phone number.
   *         </p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface RequestPhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;

  /**
   * <p>The unique identifier of the new phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The new phone number that was requested.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode?: string;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>Indicates if the phone number will be used for text messages, voice messages or both.
   *         </p>
   * @public
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * <p>The type of number that was released.</p>
   * @public
   */
  NumberType?: RequestableNumberType;

  /**
   * <p>The monthly price, in US dollars, to lease the phone number.</p>
   * @public
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The ARN used to identify the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList that is associated with the requested phone number.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The unique identifier of the pool associated with the phone number </p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string;

  /**
   * <p>An array of key and value pair tags that are associated with the phone number.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface RequestSenderIdRequest {
  /**
   * <p>The sender ID string to request.</p>
   * @public
   */
  SenderId: string | undefined;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.</p>
   * @public
   */
  IsoCountryCode: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageTypes?: MessageType[];

  /**
   * <p>By default this is set to false. When set to true the sender ID can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>An array of tags (key and value pairs) to associate with the sender ID.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don't specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string;
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
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
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
  LanguageCode?: LanguageCode;

  /**
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   * @public
   */
  Context?: Record<string, string>;

  /**
   * <p>This field is used for any country-specific registration requirements. Currently, this
   *             setting is only used when you send messages to recipients in India using a sender ID.
   *             For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>.
   *         </p>
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>>;
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
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *            PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The text body of the message.</p>
   * @public
   */
  MessageBody?: string;

  /**
   * <p>An array of URLs to each media file to send. </p>
   *          <p>The media files have to be stored in a publicly available S3 bucket. Supported media file formats
   *            are listed in <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/mms-limitations-character.html">MMS file types, size and character limits</a>. For more information on creating an S3 bucket and managing
   *            objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">Creating a bucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html">Uploading objects</a> in the S3 user guide.</p>
   * @public
   */
  MediaUrls?: string[];

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *            or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each MMS message.</p>
   * @public
   */
  MaxPrice?: string;

  /**
   * <p>How long the text message is valid for. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *            destination.</p>
   * @public
   */
  Context?: Record<string, string>;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *            recipient.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The unique identifier of the protect configuration to use.</p>
   * @public
   */
  ProtectConfigurationId?: string;
}

/**
 * @public
 */
export interface SendMediaMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string;
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
   * <p>The origination identity of the message. This can be either the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.</p>
   * @public
   */
  OriginationIdentity?: string;

  /**
   * <p>The body of the text message.</p>
   * @public
   */
  MessageBody?: string;

  /**
   * <p>The type of message. Valid values are
   *             for messages that are critical or time-sensitive and PROMOTIONAL for messages that
   *             aren't critical or time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>When you register a short code in the US, you must specify a program name. If you
   *             don’t have a US short code, omit this attribute.</p>
   * @public
   */
  Keyword?: string;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The maximum amount that you want to spend, in US dollars, per each text message part.
   *             A text message can contain multiple parts.</p>
   * @public
   */
  MaxPrice?: string;

  /**
   * <p>How long the text message is valid for. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   * @public
   */
  Context?: Record<string, string>;

  /**
   * <p>This field is used for any country-specific registration requirements. Currently, this
   *             setting is only used when you send messages to recipients in India using a sender ID.
   *             For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-senderid-india.html">Special requirements for sending SMS messages to recipients in India</a>.
   *         </p>
   * @public
   */
  DestinationCountryParameters?: Partial<Record<DestinationCountryParameterKey, string>>;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string;
}

/**
 * @public
 */
export interface SendTextMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
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
   * <p>The destination phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The origination identity to use for the voice call. This can be the PhoneNumber,
   *             PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.</p>
   * @public
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>The text to convert to a voice message.</p>
   * @public
   */
  MessageBody?: string;

  /**
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
   * @public
   */
  MessageBodyTextType?: VoiceMessageBodyTextType;

  /**
   * <p>The voice for the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly</a>
   *             service to use. By default this is set to "MATTHEW".</p>
   * @public
   */
  VoiceId?: VoiceId;

  /**
   * <p>The name of the configuration set to use. This can be either the ConfigurationSetName
   *             or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The maximum amount to spend per voice message, in US dollars.</p>
   * @public
   */
  MaxPricePerMinute?: string;

  /**
   * <p>How long the voice message is valid for. By default this is 72 hours.</p>
   * @public
   */
  TimeToLive?: number;

  /**
   * <p>You can specify custom data in this field. If you do, that data is logged to the event
   *             destination.</p>
   * @public
   */
  Context?: Record<string, string>;

  /**
   * <p>When set to true, the message is checked and validated, but isn't sent to the end
   *             recipient.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The unique identifier for the protect configuration.</p>
   * @public
   */
  ProtectConfigurationId?: string;
}

/**
 * @public
 */
export interface SendVoiceMessageResult {
  /**
   * <p>The unique identifier for the message.</p>
   * @public
   */
  MessageId?: string;
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
export interface SetDefaultMessageTypeRequest {
  /**
   * <p>The configuration set to update with a new default message type. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set that was updated.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The new default message type of the configuration set.</p>
   * @public
   */
  MessageType?: MessageType;
}

/**
 * @public
 */
export interface SetDefaultSenderIdRequest {
  /**
   * <p>The configuration set to updated with a new default SenderId. This field can be the
   *             ConsigurationSetName or ConfigurationSetArn.</p>
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The current sender ID for the configuration set. When sending a text message to a
   *             destination country which supports SenderIds, the default sender ID on the configuration
   *             set specified on <a>SendTextMessage</a> will be used if no dedicated
   *             origination phone numbers or registered SenderIds are available in your account, instead
   *             of a generic sender ID, such as 'NOTICE'.</p>
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
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set that was updated.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>The default sender ID to set for the ConfigurationSet.</p>
   * @public
   */
  SenderId?: string;
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
  MonthlyLimit?: number;
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
  MonthlyLimit?: number;
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
  MonthlyLimit?: number;
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
   * <p>The configuration set to update with the new event destination. Valid values for this
   *             can be the ConfigurationSetName or ConfigurationSetArn.</p>
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
  Enabled?: boolean;

  /**
   * <p>An array of event types that determine which events to log.</p>
   *          <note>
   *             <p>The <code>TEXT_SENT</code> event type is not supported.</p>
   *          </note>
   * @public
   */
  MatchingEventTypes?: EventType[];

  /**
   * <p>An object that contains information about an event destination that sends data to
   *                 CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * <p>An object that contains information about an event destination for logging to Kinesis Data Firehose.</p>
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that contains information about an event destination that sends data to
   *                 Amazon SNS.</p>
   * @public
   */
  SnsDestination?: SnsDestination;
}

/**
 * @public
 */
export interface UpdateEventDestinationResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.</p>
   * @public
   */
  ConfigurationSetArn?: string;

  /**
   * <p>The name of the configuration set.</p>
   * @public
   */
  ConfigurationSetName?: string;

  /**
   * <p>An EventDestination object containing the details of where events will be logged.
   *         </p>
   * @public
   */
  EventDestination?: EventDestination;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>The unique identifier of the phone number. Valid values for this field can be either
   *             the PhoneNumberId or PhoneNumberArn.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The OptOutList to add the phone number to. Valid values for this field can be either
   *             the OutOutListName or OutOutListArn.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>By default this is set to false. When set to true the phone number can't be deleted.
   *         </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;

  /**
   * <p>The unique identifier of the phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number that was updated.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: NumberStatus;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   *         </p>
   * @public
   */
  IsoCountryCode?: string;

  /**
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>Specifies if the number could be used for text messages, voice or both.</p>
   * @public
   */
  NumberCapabilities?: NumberCapability[];

  /**
   * <p>The type of number that was requested.</p>
   * @public
   */
  NumberType?: NumberType;

  /**
   * <p>The monthly leasing price of the phone number, in US dollars.</p>
   * @public
   */
  MonthlyLeasingPrice?: string;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>This is true if self managed opt-out are enabled.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the phone number.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>When set to true the phone number can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The unique identifier for the registration.</p>
   * @public
   */
  RegistrationId?: string;

  /**
   * <p>The time when the phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 */
export interface UpdatePoolRequest {
  /**
   * <p>The unique identifier of the pool to update. Valid values are either the PoolId or
   *             PoolArn.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>By default this is set to false. When an end recipient sends a message that begins
   *             with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically
   *             replies with a customizable message and adds the end recipient to the OptOutList. When
   *             set to true you're responsible for responding to HELP and STOP requests. You're also
   *             responsible for tracking and honoring opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The OptOutList to associate with the pool. Valid values are either OptOutListName or
   *             OptOutListArn.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePoolResult {
  /**
   * <p>The ARN of the pool.</p>
   * @public
   */
  PoolArn?: string;

  /**
   * <p>The unique identifier of the pool.</p>
   * @public
   */
  PoolId?: string;

  /**
   * <p>The current status of the pool update request.</p>
   * @public
   */
  Status?: PoolStatus;

  /**
   * <p>The type of message for the pool to use.</p>
   * @public
   */
  MessageType?: MessageType;

  /**
   * <p>By default this is set to false. When set to true you can receive incoming text
   *             messages from your end recipients.</p>
   * @public
   */
  TwoWayEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the two way channel.</p>
   * @public
   */
  TwoWayChannelArn?: string;

  /**
   * <p>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.</p>
   * @public
   */
  TwoWayChannelRole?: string;

  /**
   * <p>When an end recipient sends a message that begins with HELP or STOP to one of your
   *             dedicated numbers, Amazon Pinpoint automatically replies with a customizable message
   *             and adds the end recipient to the OptOutList. When set to true you're responsible for
   *             responding to HELP and STOP requests. You're also responsible for tracking and honoring
   *             opt-out requests.</p>
   * @public
   */
  SelfManagedOptOutsEnabled?: boolean;

  /**
   * <p>The name of the OptOutList associated with the pool.</p>
   * @public
   */
  OptOutListName?: string;

  /**
   * <p>Indicates whether shared routes are enabled for the pool.</p>
   * @public
   */
  SharedRoutesEnabled?: boolean;

  /**
   * <p>When set to true the pool can't be deleted.</p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;

  /**
   * <p>The time when the pool was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp?: Date;
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
   * <p>When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean;
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
   * <p>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false.
   *        </p>
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
   * <p>A map of ProtectConfigurationCountryRuleSetInformation objects that contain the
   *            details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html">Supported countries and regions (SMS channel)</a> in the Amazon Pinpoint SMS user guide.</p>
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
  DeletionProtectionEnabled?: boolean;
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
   * <p>The type of message. Valid values are TRANSACTIONAL for messages that are critical or
   *             time-sensitive and PROMOTIONAL for messages that aren't critical or
   *             time-sensitive.</p>
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
  RegistrationId?: string;
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

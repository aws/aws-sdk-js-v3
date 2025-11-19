// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AllowNotifications = {
  ALL: "ALL",
  FILTERED: "FILTERED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AllowNotifications = (typeof AllowNotifications)[keyof typeof AllowNotifications];

/**
 * @public
 * @enum
 */
export const ChannelMembershipType = {
  DEFAULT: "DEFAULT",
  HIDDEN: "HIDDEN",
} as const;
/**
 * @public
 */
export type ChannelMembershipType = (typeof ChannelMembershipType)[keyof typeof ChannelMembershipType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AccessDenied: "AccessDenied",
  BadRequest: "BadRequest",
  Conflict: "Conflict",
  Forbidden: "Forbidden",
  NotFound: "NotFound",
  PhoneNumberAssociationsExist: "PhoneNumberAssociationsExist",
  PreconditionFailed: "PreconditionFailed",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttled: "Throttled",
  Throttling: "Throttling",
  Unauthorized: "Unauthorized",
  Unprocessable: "Unprocessable",
  VoiceConnectorGroupAssociationsExist: "VoiceConnectorGroupAssociationsExist",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ExpirationCriterion = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
  LAST_MESSAGE_TIMESTAMP: "LAST_MESSAGE_TIMESTAMP",
} as const;
/**
 * @public
 */
export type ExpirationCriterion = (typeof ExpirationCriterion)[keyof typeof ExpirationCriterion];

/**
 * @public
 * @enum
 */
export const ChannelMode = {
  RESTRICTED: "RESTRICTED",
  UNRESTRICTED: "UNRESTRICTED",
} as const;
/**
 * @public
 */
export type ChannelMode = (typeof ChannelMode)[keyof typeof ChannelMode];

/**
 * @public
 * @enum
 */
export const ChannelPrivacy = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type ChannelPrivacy = (typeof ChannelPrivacy)[keyof typeof ChannelPrivacy];

/**
 * @public
 * @enum
 */
export const InvocationType = {
  ASYNC: "ASYNC",
} as const;
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * @public
 * @enum
 */
export const FallbackAction = {
  ABORT: "ABORT",
  CONTINUE: "CONTINUE",
} as const;
/**
 * @public
 */
export type FallbackAction = (typeof FallbackAction)[keyof typeof FallbackAction];

/**
 * @public
 * @enum
 */
export const PushNotificationType = {
  DEFAULT: "DEFAULT",
  VOIP: "VOIP",
} as const;
/**
 * @public
 */
export type PushNotificationType = (typeof PushNotificationType)[keyof typeof PushNotificationType];

/**
 * @public
 * @enum
 */
export const ChannelMessagePersistenceType = {
  NON_PERSISTENT: "NON_PERSISTENT",
  PERSISTENT: "PERSISTENT",
} as const;
/**
 * @public
 */
export type ChannelMessagePersistenceType =
  (typeof ChannelMessagePersistenceType)[keyof typeof ChannelMessagePersistenceType];

/**
 * @public
 * @enum
 */
export const ChannelMessageStatus = {
  DENIED: "DENIED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SENT: "SENT",
} as const;
/**
 * @public
 */
export type ChannelMessageStatus = (typeof ChannelMessageStatus)[keyof typeof ChannelMessageStatus];

/**
 * @public
 * @enum
 */
export const ChannelMessageType = {
  CONTROL: "CONTROL",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ChannelMessageType = (typeof ChannelMessageType)[keyof typeof ChannelMessageType];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4_ONLY: "IPV4_ONLY",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const MessagingDataType = {
  Channel: "Channel",
  ChannelMessage: "ChannelMessage",
} as const;
/**
 * @public
 */
export type MessagingDataType = (typeof MessagingDataType)[keyof typeof MessagingDataType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const SearchFieldKey = {
  MEMBERS: "MEMBERS",
} as const;
/**
 * @public
 */
export type SearchFieldKey = (typeof SearchFieldKey)[keyof typeof SearchFieldKey];

/**
 * @public
 * @enum
 */
export const SearchFieldOperator = {
  EQUALS: "EQUALS",
  INCLUDES: "INCLUDES",
} as const;
/**
 * @public
 */
export type SearchFieldOperator = (typeof SearchFieldOperator)[keyof typeof SearchFieldOperator];

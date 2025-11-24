// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus];

/**
 * @public
 * @enum
 */
export const AccountContactType = {
  /**
   *     Alternate Billing Contact managed by AWS Account Management Service.
   *
   */
  ACCOUNT_ALTERNATE_BILLING: "ACCOUNT_ALTERNATE_BILLING",
  /**
   *     Alternate Operations Contact managed by AWS Account Management Service.
   *
   */
  ACCOUNT_ALTERNATE_OPERATIONS: "ACCOUNT_ALTERNATE_OPERATIONS",
  /**
   *     Alternate Security Contact managed by AWS Account Management Service.
   *
   */
  ACCOUNT_ALTERNATE_SECURITY: "ACCOUNT_ALTERNATE_SECURITY",
  /**
   *     Primary Contact managed by AWS Account Management Service.
   *
   */
  ACCOUNT_PRIMARY: "ACCOUNT_PRIMARY",
} as const;
/**
 * @public
 */
export type AccountContactType = (typeof AccountContactType)[keyof typeof AccountContactType];

/**
 * @public
 * @enum
 */
export const AggregationDuration = {
  /**
   * Aggregate notifications for long periods of time (12 hours)
   */
  LONG: "LONG",
  /**
   * Do not aggregate notifications sourced from a notification configuration
   */
  NONE: "NONE",
  /**
   * Aggregate notifications for short periods of time (5 mins)
   */
  SHORT: "SHORT",
} as const;
/**
 * @public
 */
export type AggregationDuration = (typeof AggregationDuration)[keyof typeof AggregationDuration];

/**
 * @public
 * @enum
 */
export const AggregationEventType = {
  AGGREGATE: "AGGREGATE",
  CHILD: "CHILD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AggregationEventType = (typeof AggregationEventType)[keyof typeof AggregationEventType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ChannelAssociationOverrideOption = {
  /**
   *     AWS User Notification service users can not associate or disassociate a Channel with a notification configuration.
   *
   */
  DISABLED: "DISABLED",
  /**
   *     AWS User Notification service users can associate or disassociate a Channel with a notification configuration.
   *
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ChannelAssociationOverrideOption =
  (typeof ChannelAssociationOverrideOption)[keyof typeof ChannelAssociationOverrideOption];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  /**
   *     User Notification Service sends notifications to Account Managed contacts.
   *
   */
  ACCOUNT_CONTACT: "ACCOUNT_CONTACT",
  /**
   *     Chatbot sends notifications to group platforms, like Slack or Chime. Link:https://aws.amazon.com/chatbot/
   *
   */
  CHATBOT: "CHATBOT",
  /**
   *     Email sends notifications to email addresses.
   *
   */
  EMAIL: "EMAIL",
  /**
   *     AWS Console Mobile App sends notifications to mobile devices. Link:https://aws.amazon.com/console/mobile/
   *
   */
  MOBILE: "MOBILE",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const EventRuleStatus = {
  /**
   * EventRule is processing events. Any call can be executed.
   */
  ACTIVE: "ACTIVE",
  /**
   * This EventRule is being created. Only GET/LIST calls can be executed.
   */
  CREATING: "CREATING",
  /**
   * This EventRule is being deleted. Only GET/LIST calls can be executed.
   */
  DELETING: "DELETING",
  /**
   * EventRule is in a bad state and may not be processing events. Any call can be executed.
   */
  INACTIVE: "INACTIVE",
  /**
   * This EventRule is being updated. Only GET/LIST calls can be executed.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EventRuleStatus = (typeof EventRuleStatus)[keyof typeof EventRuleStatus];

/**
 * @public
 * @enum
 */
export const NotificationConfigurationStatus = {
  /**
   * All of the EventRules are in ACTIVE Status. Any call can be executed.
   */
  ACTIVE: "ACTIVE",
  /**
   * This NotificationConfiguration is being deleted. Only GET/LIST calls can be executed.
   */
  DELETING: "DELETING",
  /**
   * All of the EventRules are in INACTIVE Status. Any call can be executed.
   */
  INACTIVE: "INACTIVE",
  /**
   * Some EventRules are in ACTIVE Status and some are INACTIVE. Any call can be executed.
   */
  PARTIALLY_ACTIVE: "PARTIALLY_ACTIVE",
} as const;
/**
 * @public
 */
export type NotificationConfigurationStatus =
  (typeof NotificationConfigurationStatus)[keyof typeof NotificationConfigurationStatus];

/**
 * @public
 * @enum
 */
export const NotificationHubStatus = {
  /**
   * Incoming Notification Events are being replicated to this Notification Hub. A Notification Hub with this status can be deregistered.
   */
  ACTIVE: "ACTIVE",
  /**
   * Notification Hub is being deleted. Cannot register a Notification Hub in the same region as one in this status.
   */
  DEREGISTERING: "DEREGISTERING",
  /**
   * Notification Hub is in a failure state. Incoming Notification Events are not being replicated to this Hub.
   */
  INACTIVE: "INACTIVE",
  /**
   * Notification Hub is initializing. Cannot deregister a Notification Hub in this status.
   */
  REGISTERING: "REGISTERING",
} as const;
/**
 * @public
 */
export type NotificationHubStatus = (typeof NotificationHubStatus)[keyof typeof NotificationHubStatus];

/**
 * @public
 * @enum
 */
export const EventStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/**
 * @public
 * @enum
 */
export const LocaleCode = {
  /**
   * German (Germany)
   */
  de_DE: "de_DE",
  /**
   * English (Canada)
   */
  en_CA: "en_CA",
  /**
   * English (United Kingdom)
   */
  en_UK: "en_UK",
  /**
   * English (United States). This is the default locale.
   */
  en_US: "en_US",
  /**
   * Spanish (Spain)
   */
  es_ES: "es_ES",
  /**
   * French (Canada)
   */
  fr_CA: "fr_CA",
  /**
   * French (France)
   */
  fr_FR: "fr_FR",
  /**
   * Bahasa Indonesian (Indonesia)
   */
  id_ID: "id_ID",
  /**
   * Italian (Italy)
   */
  it_IT: "it_IT",
  /**
   * Japanese (Japan)
   */
  ja_JP: "ja_JP",
  /**
   * Korean (Korea)
   */
  ko_KR: "ko_KR",
  /**
   * Portuguese (Brazil)
   */
  pt_BR: "pt_BR",
  /**
   * Turkish (Turkey)
   */
  tr_TR: "tr_TR",
  /**
   * Chinese (China)
   */
  zh_CN: "zh_CN",
  /**
   * Chinese (Taiwan)
   */
  zh_TW: "zh_TW",
} as const;
/**
 * @public
 */
export type LocaleCode = (typeof LocaleCode)[keyof typeof LocaleCode];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  ALERT: "ALERT",
  ANNOUNCEMENT: "ANNOUNCEMENT",
  INFORMATIONAL: "INFORMATIONAL",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 * @enum
 */
export const SchemaVersion = {
  SCHEMA_VERSION_1_0: "v1.0",
} as const;
/**
 * @public
 */
export type SchemaVersion = (typeof SchemaVersion)[keyof typeof SchemaVersion];

/**
 * @public
 * @enum
 */
export const TextPartType = {
  LOCALIZED_TEXT: "LOCALIZED_TEXT",
  PLAIN_TEXT: "PLAIN_TEXT",
  URL: "URL",
} as const;
/**
 * @public
 */
export type TextPartType = (typeof TextPartType)[keyof typeof TextPartType];

/**
 * @public
 * @enum
 */
export const NotificationConfigurationSubtype = {
  /**
   * Notification configuration created by the account
   */
  ACCOUNT: "ACCOUNT",
  /**
   * Notification configuration managed by an administrator account
   */
  ADMIN_MANAGED: "ADMIN_MANAGED",
} as const;
/**
 * @public
 */
export type NotificationConfigurationSubtype =
  (typeof NotificationConfigurationSubtype)[keyof typeof NotificationConfigurationSubtype];

/**
 * @public
 * @enum
 */
export const MediaElementType = {
  IMAGE: "IMAGE",
} as const;
/**
 * @public
 */
export type MediaElementType = (typeof MediaElementType)[keyof typeof MediaElementType];

/**
 * @public
 * @enum
 */
export const MemberAccountNotificationConfigurationStatus = {
  /**
   * The member account Notification Configuration status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * The member account Notification Configuration status is CREATING.
   */
  CREATING: "CREATING",
  /**
   * The member account Notification Configuration status is DELETING.
   */
  DELETING: "DELETING",
  /**
   * The member account Notification Configuration status is INACTIVE.
   */
  INACTIVE: "INACTIVE",
  /**
   * The member account Notification Configuration status is PENDING.
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MemberAccountNotificationConfigurationStatus =
  (typeof MemberAccountNotificationConfigurationStatus)[keyof typeof MemberAccountNotificationConfigurationStatus];

// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ContentType = {
  CUSTOM_PAYLOAD: "CustomPayload",
  PLAIN_TEXT: "PlainText",
  SSML: "SSML",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * @enum
 */
export const Locale = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IN: "en-IN",
  EN_US: "en-US",
  ES_419: "es-419",
  ES_ES: "es-ES",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
} as const;
/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const Status = {
  BUILDING: "BUILDING",
  FAILED: "FAILED",
  NOT_BUILT: "NOT_BUILT",
  READY: "READY",
  READY_BASIC_TESTING: "READY_BASIC_TESTING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const FulfillmentActivityType = {
  CODE_HOOK: "CodeHook",
  RETURN_INTENT: "ReturnIntent",
} as const;
/**
 * @public
 */
export type FulfillmentActivityType = (typeof FulfillmentActivityType)[keyof typeof FulfillmentActivityType];

/**
 * @public
 * @enum
 */
export const ObfuscationSetting = {
  DEFAULT_OBFUSCATION: "DEFAULT_OBFUSCATION",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ObfuscationSetting = (typeof ObfuscationSetting)[keyof typeof ObfuscationSetting];

/**
 * @public
 * @enum
 */
export const SlotConstraint = {
  OPTIONAL: "Optional",
  REQUIRED: "Required",
} as const;
/**
 * @public
 */
export type SlotConstraint = (typeof SlotConstraint)[keyof typeof SlotConstraint];

/**
 * @public
 * @enum
 */
export const SlotValueSelectionStrategy = {
  ORIGINAL_VALUE: "ORIGINAL_VALUE",
  TOP_RESOLUTION: "TOP_RESOLUTION",
} as const;
/**
 * @public
 */
export type SlotValueSelectionStrategy = (typeof SlotValueSelectionStrategy)[keyof typeof SlotValueSelectionStrategy];

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  BOT: "Bot",
  BOTALIAS: "BotAlias",
  BOTCHANNEL: "BotChannel",
  INTENT: "Intent",
} as const;
/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * @public
 * @enum
 */
export const Destination = {
  CLOUDWATCH_LOGS: "CLOUDWATCH_LOGS",
  S3: "S3",
} as const;
/**
 * @public
 */
export type Destination = (typeof Destination)[keyof typeof Destination];

/**
 * @public
 * @enum
 */
export const LogType = {
  AUDIO: "AUDIO",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  FACEBOOK: "Facebook",
  KIK: "Kik",
  SLACK: "Slack",
  TWILIO_SMS: "Twilio-Sms",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const ExportType = {
  ALEXA_SKILLS_KIT: "ALEXA_SKILLS_KIT",
  LEX: "LEX",
} as const;
/**
 * @public
 */
export type ExportType = (typeof ExportType)[keyof typeof ExportType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  BOT: "BOT",
  INTENT: "INTENT",
  SLOT_TYPE: "SLOT_TYPE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const MergeStrategy = {
  FAIL_ON_CONFLICT: "FAIL_ON_CONFLICT",
  OVERWRITE_LATEST: "OVERWRITE_LATEST",
} as const;
/**
 * @public
 */
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy];

/**
 * @public
 * @enum
 */
export const MigrationAlertType = {
  ERROR: "ERROR",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type MigrationAlertType = (typeof MigrationAlertType)[keyof typeof MigrationAlertType];

/**
 * @public
 * @enum
 */
export const MigrationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type MigrationStatus = (typeof MigrationStatus)[keyof typeof MigrationStatus];

/**
 * @public
 * @enum
 */
export const MigrationStrategy = {
  CREATE_NEW: "CREATE_NEW",
  UPDATE_EXISTING: "UPDATE_EXISTING",
} as const;
/**
 * @public
 */
export type MigrationStrategy = (typeof MigrationStrategy)[keyof typeof MigrationStrategy];

/**
 * @public
 * @enum
 */
export const MigrationSortAttribute = {
  MIGRATION_DATE_TIME: "MIGRATION_DATE_TIME",
  V1_BOT_NAME: "V1_BOT_NAME",
} as const;
/**
 * @public
 */
export type MigrationSortAttribute = (typeof MigrationSortAttribute)[keyof typeof MigrationSortAttribute];

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
export const StatusType = {
  DETECTED: "Detected",
  MISSED: "Missed",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const ProcessBehavior = {
  BUILD: "BUILD",
  SAVE: "SAVE",
} as const;
/**
 * @public
 */
export type ProcessBehavior = (typeof ProcessBehavior)[keyof typeof ProcessBehavior];

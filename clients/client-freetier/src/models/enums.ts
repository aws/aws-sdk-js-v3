// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountPlanStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type AccountPlanStatus = (typeof AccountPlanStatus)[keyof typeof AccountPlanStatus];

/**
 * @public
 * @enum
 */
export const AccountPlanType = {
  FREE: "FREE",
  PAID: "PAID",
} as const;
/**
 * @public
 */
export type AccountPlanType = (typeof AccountPlanType)[keyof typeof AccountPlanType];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const ActivityStatus = {
  COMPLETED: "COMPLETED",
  EXPIRING: "EXPIRING",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  DE_DE: "de-DE",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_ES: "es-ES",
  FR_FR: "fr-FR",
  ID_ID: "id-ID",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_PT: "pt-PT",
  TR_TR: "tr-TR",
  ZH_CN: "zh-CN",
  ZH_TW: "zh-TW",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const Dimension = {
  DESCRIPTION: "DESCRIPTION",
  FREE_TIER_TYPE: "FREE_TIER_TYPE",
  OPERATION: "OPERATION",
  REGION: "REGION",
  SERVICE: "SERVICE",
  USAGE_PERCENTAGE: "USAGE_PERCENTAGE",
  USAGE_TYPE: "USAGE_TYPE",
} as const;
/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

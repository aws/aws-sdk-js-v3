// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LanguageCodeString = {
  de_DE: "de-DE",
  en_GB: "en-GB",
  en_US: "en-US",
  es_419: "es-419",
  es_ES: "es-ES",
  fr_CA: "fr-CA",
  fr_FR: "fr-FR",
  it_IT: "it-IT",
  jp_JP: "ja-JP",
  kr_KR: "kr-KR",
  pt_BR: "pt-BR",
  zh_CN: "zh-CN",
  zh_TW: "zh-TW",
} as const;
/**
 * @public
 */
export type LanguageCodeString = (typeof LanguageCodeString)[keyof typeof LanguageCodeString];

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
export const RouteType = {
  Premium: "Premium",
  Promotional: "Promotional",
  Transactional: "Transactional",
} as const;
/**
 * @public
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

/**
 * @public
 * @enum
 */
export const SMSSandboxPhoneNumberVerificationStatus = {
  Pending: "Pending",
  Verified: "Verified",
} as const;
/**
 * @public
 */
export type SMSSandboxPhoneNumberVerificationStatus =
  (typeof SMSSandboxPhoneNumberVerificationStatus)[keyof typeof SMSSandboxPhoneNumberVerificationStatus];

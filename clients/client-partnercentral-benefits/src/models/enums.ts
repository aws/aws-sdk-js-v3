// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionErrorCode = {
  ACTION_NOT_PERMITTED: "ACTION_NOT_PERMITTED",
  DUPLICATE_KEY_VALUE: "DUPLICATE_KEY_VALUE",
  INVALID_ENUM_VALUE: "INVALID_ENUM_VALUE",
  INVALID_RESOURCE_STATE: "INVALID_RESOURCE_STATE",
  INVALID_STRING_FORMAT: "INVALID_STRING_FORMAT",
  INVALID_VALUE: "INVALID_VALUE",
  NOT_ENOUGH_VALUES: "NOT_ENOUGH_VALUES",
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  TOO_MANY_VALUES: "TOO_MANY_VALUES",
  VALUE_OUT_OF_RANGE: "VALUE_OUT_OF_RANGE",
} as const;
/**
 * @public
 */
export type ValidationExceptionErrorCode =
  (typeof ValidationExceptionErrorCode)[keyof typeof ValidationExceptionErrorCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BUSINESS_VALIDATION_FAILED: "BUSINESS_VALIDATION_FAILED",
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  BENEFIT_ALLOCATION: "BENEFIT_ALLOCATION",
  OPPORTUNITY: "OPPORTUNITY",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const BenefitAllocationStatus = {
  ACTIVE: "ACTIVE",
  FULFILLED: "FULFILLED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type BenefitAllocationStatus = (typeof BenefitAllocationStatus)[keyof typeof BenefitAllocationStatus];

/**
 * @public
 * @enum
 */
export const FulfillmentType = {
  ACCESS: "ACCESS",
  CASH: "CASH",
  CREDITS: "CREDITS",
} as const;
/**
 * @public
 */
export type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType];

/**
 * @public
 * @enum
 */
export const BenefitApplicationStatus = {
  ACTION_REQUIRED: "ACTION_REQUIRED",
  APPROVED: "APPROVED",
  CANCELED: "CANCELED",
  IN_REVIEW: "IN_REVIEW",
  PENDING_SUBMISSION: "PENDING_SUBMISSION",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type BenefitApplicationStatus = (typeof BenefitApplicationStatus)[keyof typeof BenefitApplicationStatus];

/**
 * @public
 * @enum
 */
export const BenefitStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type BenefitStatus = (typeof BenefitStatus)[keyof typeof BenefitStatus];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  AED: "AED",
  AMD: "AMD",
  ARS: "ARS",
  AUD: "AUD",
  AWG: "AWG",
  AZN: "AZN",
  BBD: "BBD",
  BDT: "BDT",
  BGN: "BGN",
  BMD: "BMD",
  BND: "BND",
  BOB: "BOB",
  BRL: "BRL",
  BSD: "BSD",
  BYR: "BYR",
  BZD: "BZD",
  CAD: "CAD",
  CHF: "CHF",
  CLP: "CLP",
  CNY: "CNY",
  COP: "COP",
  CRC: "CRC",
  CZK: "CZK",
  DKK: "DKK",
  DOP: "DOP",
  EEK: "EEK",
  EGP: "EGP",
  EUR: "EUR",
  GBP: "GBP",
  GEL: "GEL",
  GHS: "GHS",
  GTQ: "GTQ",
  GYD: "GYD",
  HKD: "HKD",
  HNL: "HNL",
  HRK: "HRK",
  HTG: "HTG",
  HUF: "HUF",
  IDR: "IDR",
  ILS: "ILS",
  INR: "INR",
  ISK: "ISK",
  JMD: "JMD",
  JPY: "JPY",
  KES: "KES",
  KHR: "KHR",
  KRW: "KRW",
  KYD: "KYD",
  KZT: "KZT",
  LBP: "LBP",
  LKR: "LKR",
  LTL: "LTL",
  LVL: "LVL",
  MAD: "MAD",
  MNT: "MNT",
  MOP: "MOP",
  MUR: "MUR",
  MVR: "MVR",
  MXN: "MXN",
  MYR: "MYR",
  NAD: "NAD",
  NGN: "NGN",
  NIO: "NIO",
  NOK: "NOK",
  NZD: "NZD",
  PAB: "PAB",
  PEN: "PEN",
  PHP: "PHP",
  PKR: "PKR",
  PLN: "PLN",
  PYG: "PYG",
  QAR: "QAR",
  RON: "RON",
  RUB: "RUB",
  SAR: "SAR",
  SEK: "SEK",
  SGD: "SGD",
  SIT: "SIT",
  SKK: "SKK",
  THB: "THB",
  TND: "TND",
  TRY: "TRY",
  TTD: "TTD",
  TWD: "TWD",
  TZS: "TZS",
  UAH: "UAH",
  USD: "USD",
  UYU: "UYU",
  UZS: "UZS",
  VND: "VND",
  XAF: "XAF",
  XCD: "XCD",
  XOF: "XOF",
  XPF: "XPF",
  ZAR: "ZAR",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const FileType = {
  CSV: "text/csv",
  DOC: "application/msword",
  DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  JPG: "image/jpeg",
  PDF: "application/pdf",
  PNG: "image/png",
  PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  SVG: "image/svg+xml",
  XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
} as const;
/**
 * @public
 */
export type FileType = (typeof FileType)[keyof typeof FileType];

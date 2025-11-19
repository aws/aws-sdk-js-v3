// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const WafActionType = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
  COUNT: "COUNT",
} as const;
/**
 * @public
 */
export type WafActionType = (typeof WafActionType)[keyof typeof WafActionType];

/**
 * @public
 * @enum
 */
export const WafOverrideActionType = {
  COUNT: "COUNT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type WafOverrideActionType = (typeof WafOverrideActionType)[keyof typeof WafOverrideActionType];

/**
 * @public
 * @enum
 */
export const WafRuleType = {
  GROUP: "GROUP",
  RATE_BASED: "RATE_BASED",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type WafRuleType = (typeof WafRuleType)[keyof typeof WafRuleType];

/**
 * @public
 * @enum
 */
export const ParameterExceptionField = {
  BYTE_MATCH_FIELD_TYPE: "BYTE_MATCH_FIELD_TYPE",
  BYTE_MATCH_POSITIONAL_CONSTRAINT: "BYTE_MATCH_POSITIONAL_CONSTRAINT",
  BYTE_MATCH_TEXT_TRANSFORMATION: "BYTE_MATCH_TEXT_TRANSFORMATION",
  CHANGE_ACTION: "CHANGE_ACTION",
  GEO_MATCH_LOCATION_TYPE: "GEO_MATCH_LOCATION_TYPE",
  GEO_MATCH_LOCATION_VALUE: "GEO_MATCH_LOCATION_VALUE",
  IPSET_TYPE: "IPSET_TYPE",
  NEXT_MARKER: "NEXT_MARKER",
  PREDICATE_TYPE: "PREDICATE_TYPE",
  RATE_KEY: "RATE_KEY",
  RESOURCE_ARN: "RESOURCE_ARN",
  RULE_TYPE: "RULE_TYPE",
  SIZE_CONSTRAINT_COMPARISON_OPERATOR: "SIZE_CONSTRAINT_COMPARISON_OPERATOR",
  SQL_INJECTION_MATCH_FIELD_TYPE: "SQL_INJECTION_MATCH_FIELD_TYPE",
  TAGS: "TAGS",
  TAG_KEYS: "TAG_KEYS",
  WAF_ACTION: "WAF_ACTION",
  WAF_OVERRIDE_ACTION: "WAF_OVERRIDE_ACTION",
} as const;
/**
 * @public
 */
export type ParameterExceptionField = (typeof ParameterExceptionField)[keyof typeof ParameterExceptionField];

/**
 * @public
 * @enum
 */
export const ParameterExceptionReason = {
  ILLEGAL_ARGUMENT: "ILLEGAL_ARGUMENT",
  ILLEGAL_COMBINATION: "ILLEGAL_COMBINATION",
  INVALID_OPTION: "INVALID_OPTION",
  INVALID_TAG_KEY: "INVALID_TAG_KEY",
} as const;
/**
 * @public
 */
export type ParameterExceptionReason = (typeof ParameterExceptionReason)[keyof typeof ParameterExceptionReason];

/**
 * @public
 * @enum
 */
export const MatchFieldType = {
  ALL_QUERY_ARGS: "ALL_QUERY_ARGS",
  BODY: "BODY",
  HEADER: "HEADER",
  METHOD: "METHOD",
  QUERY_STRING: "QUERY_STRING",
  SINGLE_QUERY_ARG: "SINGLE_QUERY_ARG",
  URI: "URI",
} as const;
/**
 * @public
 */
export type MatchFieldType = (typeof MatchFieldType)[keyof typeof MatchFieldType];

/**
 * @public
 * @enum
 */
export const PositionalConstraint = {
  CONTAINS: "CONTAINS",
  CONTAINS_WORD: "CONTAINS_WORD",
  ENDS_WITH: "ENDS_WITH",
  EXACTLY: "EXACTLY",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type PositionalConstraint = (typeof PositionalConstraint)[keyof typeof PositionalConstraint];

/**
 * @public
 * @enum
 */
export const TextTransformation = {
  CMD_LINE: "CMD_LINE",
  COMPRESS_WHITE_SPACE: "COMPRESS_WHITE_SPACE",
  HTML_ENTITY_DECODE: "HTML_ENTITY_DECODE",
  LOWERCASE: "LOWERCASE",
  NONE: "NONE",
  URL_DECODE: "URL_DECODE",
} as const;
/**
 * @public
 */
export type TextTransformation = (typeof TextTransformation)[keyof typeof TextTransformation];

/**
 * @public
 * @enum
 */
export const GeoMatchConstraintType = {
  Country: "Country",
} as const;
/**
 * @public
 */
export type GeoMatchConstraintType = (typeof GeoMatchConstraintType)[keyof typeof GeoMatchConstraintType];

/**
 * @public
 * @enum
 */
export const GeoMatchConstraintValue = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AX: "AX",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BQ: "BQ",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BV: "BV",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GF: "GF",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GP: "GP",
  GQ: "GQ",
  GR: "GR",
  GS: "GS",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HM: "HM",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KP: "KP",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MQ: "MQ",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NF: "NF",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PS: "PS",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  SS: "SS",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TF: "TF",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  UM: "UM",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;
/**
 * @public
 */
export type GeoMatchConstraintValue = (typeof GeoMatchConstraintValue)[keyof typeof GeoMatchConstraintValue];

/**
 * @public
 * @enum
 */
export const IPSetDescriptorType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IPSetDescriptorType = (typeof IPSetDescriptorType)[keyof typeof IPSetDescriptorType];

/**
 * @public
 * @enum
 */
export const RateKey = {
  IP: "IP",
} as const;
/**
 * @public
 */
export type RateKey = (typeof RateKey)[keyof typeof RateKey];

/**
 * @public
 * @enum
 */
export const PredicateType = {
  BYTE_MATCH: "ByteMatch",
  GEO_MATCH: "GeoMatch",
  IP_MATCH: "IPMatch",
  REGEX_MATCH: "RegexMatch",
  SIZE_CONSTRAINT: "SizeConstraint",
  SQL_INJECTION_MATCH: "SqlInjectionMatch",
  XSS_MATCH: "XssMatch",
} as const;
/**
 * @public
 */
export type PredicateType = (typeof PredicateType)[keyof typeof PredicateType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  LE: "LE",
  LT: "LT",
  NE: "NE",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const MigrationErrorType = {
  ENTITY_NOT_FOUND: "ENTITY_NOT_FOUND",
  ENTITY_NOT_SUPPORTED: "ENTITY_NOT_SUPPORTED",
  S3_BUCKET_INVALID_REGION: "S3_BUCKET_INVALID_REGION",
  S3_BUCKET_NOT_ACCESSIBLE: "S3_BUCKET_NOT_ACCESSIBLE",
  S3_BUCKET_NOT_FOUND: "S3_BUCKET_NOT_FOUND",
  S3_BUCKET_NO_PERMISSION: "S3_BUCKET_NO_PERMISSION",
  S3_INTERNAL_ERROR: "S3_INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type MigrationErrorType = (typeof MigrationErrorType)[keyof typeof MigrationErrorType];

/**
 * @public
 * @enum
 */
export const ChangeTokenStatus = {
  INSYNC: "INSYNC",
  PENDING: "PENDING",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type ChangeTokenStatus = (typeof ChangeTokenStatus)[keyof typeof ChangeTokenStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  API_GATEWAY: "API_GATEWAY",
  APPLICATION_LOAD_BALANCER: "APPLICATION_LOAD_BALANCER",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  DELETE: "DELETE",
  INSERT: "INSERT",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

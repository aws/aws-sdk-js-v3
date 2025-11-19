// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionValue = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
  CAPTCHA: "CAPTCHA",
  CHALLENGE: "CHALLENGE",
  COUNT: "COUNT",
  EXCLUDED_AS_COUNT: "EXCLUDED_AS_COUNT",
} as const;
/**
 * @public
 */
export type ActionValue = (typeof ActionValue)[keyof typeof ActionValue];

/**
 * @public
 * @enum
 */
export const FallbackBehavior = {
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;
/**
 * @public
 */
export type FallbackBehavior = (typeof FallbackBehavior)[keyof typeof FallbackBehavior];

/**
 * @public
 * @enum
 */
export const OversizeHandling = {
  CONTINUE: "CONTINUE",
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;
/**
 * @public
 */
export type OversizeHandling = (typeof OversizeHandling)[keyof typeof OversizeHandling];

/**
 * @public
 * @enum
 */
export const MapMatchScope = {
  ALL: "ALL",
  KEY: "KEY",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type MapMatchScope = (typeof MapMatchScope)[keyof typeof MapMatchScope];

/**
 * @public
 * @enum
 */
export const BodyParsingFallbackBehavior = {
  EVALUATE_AS_STRING: "EVALUATE_AS_STRING",
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;
/**
 * @public
 */
export type BodyParsingFallbackBehavior =
  (typeof BodyParsingFallbackBehavior)[keyof typeof BodyParsingFallbackBehavior];

/**
 * @public
 * @enum
 */
export const JsonMatchScope = {
  ALL: "ALL",
  KEY: "KEY",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type JsonMatchScope = (typeof JsonMatchScope)[keyof typeof JsonMatchScope];

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
export const TextTransformationType = {
  BASE64_DECODE: "BASE64_DECODE",
  BASE64_DECODE_EXT: "BASE64_DECODE_EXT",
  CMD_LINE: "CMD_LINE",
  COMPRESS_WHITE_SPACE: "COMPRESS_WHITE_SPACE",
  CSS_DECODE: "CSS_DECODE",
  ESCAPE_SEQ_DECODE: "ESCAPE_SEQ_DECODE",
  HEX_DECODE: "HEX_DECODE",
  HTML_ENTITY_DECODE: "HTML_ENTITY_DECODE",
  JS_DECODE: "JS_DECODE",
  LOWERCASE: "LOWERCASE",
  MD5: "MD5",
  NONE: "NONE",
  NORMALIZE_PATH: "NORMALIZE_PATH",
  NORMALIZE_PATH_WIN: "NORMALIZE_PATH_WIN",
  REMOVE_NULLS: "REMOVE_NULLS",
  REPLACE_COMMENTS: "REPLACE_COMMENTS",
  REPLACE_NULLS: "REPLACE_NULLS",
  SQL_HEX_DECODE: "SQL_HEX_DECODE",
  URL_DECODE: "URL_DECODE",
  URL_DECODE_UNI: "URL_DECODE_UNI",
  UTF8_TO_UNICODE: "UTF8_TO_UNICODE",
} as const;
/**
 * @public
 */
export type TextTransformationType = (typeof TextTransformationType)[keyof typeof TextTransformationType];

/**
 * @public
 * @enum
 */
export const CountryCode = {
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
  XK: "XK",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;
/**
 * @public
 */
export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode];

/**
 * @public
 * @enum
 */
export const ForwardedIPPosition = {
  ANY: "ANY",
  FIRST: "FIRST",
  LAST: "LAST",
} as const;
/**
 * @public
 */
export type ForwardedIPPosition = (typeof ForwardedIPPosition)[keyof typeof ForwardedIPPosition];

/**
 * @public
 * @enum
 */
export const LabelMatchScope = {
  LABEL: "LABEL",
  NAMESPACE: "NAMESPACE",
} as const;
/**
 * @public
 */
export type LabelMatchScope = (typeof LabelMatchScope)[keyof typeof LabelMatchScope];

/**
 * @public
 * @enum
 */
export const PayloadType = {
  FORM_ENCODED: "FORM_ENCODED",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * @public
 * @enum
 */
export const SensitivityToAct = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type SensitivityToAct = (typeof SensitivityToAct)[keyof typeof SensitivityToAct];

/**
 * @public
 * @enum
 */
export const UsageOfAction = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UsageOfAction = (typeof UsageOfAction)[keyof typeof UsageOfAction];

/**
 * @public
 * @enum
 */
export const InspectionLevel = {
  COMMON: "COMMON",
  TARGETED: "TARGETED",
} as const;
/**
 * @public
 */
export type InspectionLevel = (typeof InspectionLevel)[keyof typeof InspectionLevel];

/**
 * @public
 * @enum
 */
export const RateBasedStatementAggregateKeyType = {
  CONSTANT: "CONSTANT",
  CUSTOM_KEYS: "CUSTOM_KEYS",
  FORWARDED_IP: "FORWARDED_IP",
  IP: "IP",
} as const;
/**
 * @public
 */
export type RateBasedStatementAggregateKeyType =
  (typeof RateBasedStatementAggregateKeyType)[keyof typeof RateBasedStatementAggregateKeyType];

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
export const SensitivityLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
} as const;
/**
 * @public
 */
export type SensitivityLevel = (typeof SensitivityLevel)[keyof typeof SensitivityLevel];

/**
 * @public
 * @enum
 */
export const AssociatedResourceType = {
  API_GATEWAY: "API_GATEWAY",
  APP_RUNNER_SERVICE: "APP_RUNNER_SERVICE",
  CLOUDFRONT: "CLOUDFRONT",
  COGNITO_USER_POOL: "COGNITO_USER_POOL",
  VERIFIED_ACCESS_INSTANCE: "VERIFIED_ACCESS_INSTANCE",
} as const;
/**
 * @public
 */
export type AssociatedResourceType = (typeof AssociatedResourceType)[keyof typeof AssociatedResourceType];

/**
 * @public
 * @enum
 */
export const ParameterExceptionField = {
  ACP_RULE_SET_RESPONSE_INSPECTION: "ACP_RULE_SET_RESPONSE_INSPECTION",
  AND_STATEMENT: "AND_STATEMENT",
  ASSOCIABLE_RESOURCE: "ASSOCIABLE_RESOURCE",
  ASSOCIATED_RESOURCE_TYPE: "ASSOCIATED_RESOURCE_TYPE",
  ATP_RULE_SET_RESPONSE_INSPECTION: "ATP_RULE_SET_RESPONSE_INSPECTION",
  BODY_PARSING_FALLBACK_BEHAVIOR: "BODY_PARSING_FALLBACK_BEHAVIOR",
  BYTE_MATCH_STATEMENT: "BYTE_MATCH_STATEMENT",
  CHALLENGE_CONFIG: "CHALLENGE_CONFIG",
  CHANGE_PROPAGATION_STATUS: "CHANGE_PROPAGATION_STATUS",
  COOKIE_MATCH_PATTERN: "COOKIE_MATCH_PATTERN",
  CUSTOM_KEYS: "CUSTOM_KEYS",
  CUSTOM_REQUEST_HANDLING: "CUSTOM_REQUEST_HANDLING",
  CUSTOM_RESPONSE: "CUSTOM_RESPONSE",
  CUSTOM_RESPONSE_BODY: "CUSTOM_RESPONSE_BODY",
  DATA_PROTECTION_CONFIG: "DATA_PROTECTION_CONFIG",
  DEFAULT_ACTION: "DEFAULT_ACTION",
  ENTITY_LIMIT: "ENTITY_LIMIT",
  EXCLUDED_RULE: "EXCLUDED_RULE",
  EXPIRE_TIMESTAMP: "EXPIRE_TIMESTAMP",
  FALLBACK_BEHAVIOR: "FALLBACK_BEHAVIOR",
  FIELD_TO_MATCH: "FIELD_TO_MATCH",
  FILTER_CONDITION: "FILTER_CONDITION",
  FIREWALL_MANAGER_STATEMENT: "FIREWALL_MANAGER_STATEMENT",
  FORWARDED_IP_CONFIG: "FORWARDED_IP_CONFIG",
  GEO_MATCH_STATEMENT: "GEO_MATCH_STATEMENT",
  HEADER_MATCH_PATTERN: "HEADER_MATCH_PATTERN",
  HEADER_NAME: "HEADER_NAME",
  IP_ADDRESS: "IP_ADDRESS",
  IP_ADDRESS_VERSION: "IP_ADDRESS_VERSION",
  IP_SET: "IP_SET",
  IP_SET_FORWARDED_IP_CONFIG: "IP_SET_FORWARDED_IP_CONFIG",
  IP_SET_REFERENCE_STATEMENT: "IP_SET_REFERENCE_STATEMENT",
  JSON_MATCH_PATTERN: "JSON_MATCH_PATTERN",
  JSON_MATCH_SCOPE: "JSON_MATCH_SCOPE",
  LABEL_MATCH_STATEMENT: "LABEL_MATCH_STATEMENT",
  LOGGING_FILTER: "LOGGING_FILTER",
  LOG_DESTINATION: "LOG_DESTINATION",
  LOW_REPUTATION_MODE: "LOW_REPUTATION_MODE",
  MANAGED_RULE_GROUP_CONFIG: "MANAGED_RULE_GROUP_CONFIG",
  MANAGED_RULE_SET: "MANAGED_RULE_SET",
  MANAGED_RULE_SET_STATEMENT: "MANAGED_RULE_SET_STATEMENT",
  MAP_MATCH_SCOPE: "MAP_MATCH_SCOPE",
  METRIC_NAME: "METRIC_NAME",
  NOT_STATEMENT: "NOT_STATEMENT",
  OR_STATEMENT: "OR_STATEMENT",
  OVERRIDE_ACTION: "OVERRIDE_ACTION",
  OVERSIZE_HANDLING: "OVERSIZE_HANDLING",
  PAYLOAD_TYPE: "PAYLOAD_TYPE",
  POSITION: "POSITION",
  RATE_BASED_STATEMENT: "RATE_BASED_STATEMENT",
  REGEX_PATTERN_REFERENCE_STATEMENT: "REGEX_PATTERN_REFERENCE_STATEMENT",
  REGEX_PATTERN_SET: "REGEX_PATTERN_SET",
  RESOURCE_ARN: "RESOURCE_ARN",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  RESPONSE_CONTENT_TYPE: "RESPONSE_CONTENT_TYPE",
  RULE: "RULE",
  RULE_ACTION: "RULE_ACTION",
  RULE_GROUP: "RULE_GROUP",
  RULE_GROUP_REFERENCE_STATEMENT: "RULE_GROUP_REFERENCE_STATEMENT",
  SCOPE_DOWN: "SCOPE_DOWN",
  SCOPE_VALUE: "SCOPE_VALUE",
  SINGLE_HEADER: "SINGLE_HEADER",
  SINGLE_QUERY_ARGUMENT: "SINGLE_QUERY_ARGUMENT",
  SIZE_CONSTRAINT_STATEMENT: "SIZE_CONSTRAINT_STATEMENT",
  SQLI_MATCH_STATEMENT: "SQLI_MATCH_STATEMENT",
  STATEMENT: "STATEMENT",
  TAGS: "TAGS",
  TAG_KEYS: "TAG_KEYS",
  TEXT_TRANSFORMATION: "TEXT_TRANSFORMATION",
  TOKEN_DOMAIN: "TOKEN_DOMAIN",
  WEB_ACL: "WEB_ACL",
  XSS_MATCH_STATEMENT: "XSS_MATCH_STATEMENT",
} as const;
/**
 * @public
 */
export type ParameterExceptionField = (typeof ParameterExceptionField)[keyof typeof ParameterExceptionField];

/**
 * @public
 * @enum
 */
export const SizeInspectionLimit = {
  KB_16: "KB_16",
  KB_32: "KB_32",
  KB_48: "KB_48",
  KB_64: "KB_64",
} as const;
/**
 * @public
 */
export type SizeInspectionLimit = (typeof SizeInspectionLimit)[keyof typeof SizeInspectionLimit];

/**
 * @public
 * @enum
 */
export const Scope = {
  CLOUDFRONT: "CLOUDFRONT",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const IPAddressVersion = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IPAddressVersion = (typeof IPAddressVersion)[keyof typeof IPAddressVersion];

/**
 * @public
 * @enum
 */
export const ResponseContentType = {
  APPLICATION_JSON: "APPLICATION_JSON",
  TEXT_HTML: "TEXT_HTML",
  TEXT_PLAIN: "TEXT_PLAIN",
} as const;
/**
 * @public
 */
export type ResponseContentType = (typeof ResponseContentType)[keyof typeof ResponseContentType];

/**
 * @public
 * @enum
 */
export const DataProtectionAction = {
  HASH: "HASH",
  SUBSTITUTION: "SUBSTITUTION",
} as const;
/**
 * @public
 */
export type DataProtectionAction = (typeof DataProtectionAction)[keyof typeof DataProtectionAction];

/**
 * @public
 * @enum
 */
export const FieldToProtectType = {
  BODY: "BODY",
  QUERY_STRING: "QUERY_STRING",
  SINGLE_COOKIE: "SINGLE_COOKIE",
  SINGLE_HEADER: "SINGLE_HEADER",
  SINGLE_QUERY_ARGUMENT: "SINGLE_QUERY_ARGUMENT",
} as const;
/**
 * @public
 */
export type FieldToProtectType = (typeof FieldToProtectType)[keyof typeof FieldToProtectType];

/**
 * @public
 * @enum
 */
export const LowReputationMode = {
  ACTIVE_UNDER_DDOS: "ACTIVE_UNDER_DDOS",
  ALWAYS_ON: "ALWAYS_ON",
} as const;
/**
 * @public
 */
export type LowReputationMode = (typeof LowReputationMode)[keyof typeof LowReputationMode];

/**
 * @public
 * @enum
 */
export const LogScope = {
  CLOUDWATCH_TELEMETRY_RULE_MANAGED: "CLOUDWATCH_TELEMETRY_RULE_MANAGED",
  CUSTOMER: "CUSTOMER",
  SECURITY_LAKE: "SECURITY_LAKE",
} as const;
/**
 * @public
 */
export type LogScope = (typeof LogScope)[keyof typeof LogScope];

/**
 * @public
 * @enum
 */
export const LogType = {
  WAF_LOGS: "WAF_LOGS",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const Platform = {
  ANDROID: "ANDROID",
  IOS: "IOS",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const FilterBehavior = {
  DROP: "DROP",
  KEEP: "KEEP",
} as const;
/**
 * @public
 */
export type FilterBehavior = (typeof FilterBehavior)[keyof typeof FilterBehavior];

/**
 * @public
 * @enum
 */
export const FilterRequirement = {
  MEETS_ALL: "MEETS_ALL",
  MEETS_ANY: "MEETS_ANY",
} as const;
/**
 * @public
 */
export type FilterRequirement = (typeof FilterRequirement)[keyof typeof FilterRequirement];

/**
 * @public
 * @enum
 */
export const FailureReason = {
  TOKEN_DOMAIN_MISMATCH: "TOKEN_DOMAIN_MISMATCH",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_MISSING: "TOKEN_MISSING",
} as const;
/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AMPLIFY: "AMPLIFY",
  API_GATEWAY: "API_GATEWAY",
  APPLICATION_LOAD_BALANCER: "APPLICATION_LOAD_BALANCER",
  APPSYNC: "APPSYNC",
  APP_RUNNER_SERVICE: "APP_RUNNER_SERVICE",
  COGNITIO_USER_POOL: "COGNITO_USER_POOL",
  VERIFIED_ACCESS_INSTANCE: "VERIFIED_ACCESS_INSTANCE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

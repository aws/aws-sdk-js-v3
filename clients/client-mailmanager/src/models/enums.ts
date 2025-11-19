// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptAction = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type AcceptAction = (typeof AcceptAction)[keyof typeof AcceptAction];

/**
 * @public
 * @enum
 */
export const ActionFailurePolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
} as const;
/**
 * @public
 */
export type ActionFailurePolicy = (typeof ActionFailurePolicy)[keyof typeof ActionFailurePolicy];

/**
 * @public
 * @enum
 */
export const ArchiveState = {
  ACTIVE: "ACTIVE",
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type ArchiveState = (typeof ArchiveState)[keyof typeof ArchiveState];

/**
 * @public
 * @enum
 */
export const ArchiveBooleanEmailAttribute = {
  HAS_ATTACHMENTS: "HAS_ATTACHMENTS",
} as const;
/**
 * @public
 */
export type ArchiveBooleanEmailAttribute =
  (typeof ArchiveBooleanEmailAttribute)[keyof typeof ArchiveBooleanEmailAttribute];

/**
 * @public
 * @enum
 */
export const ArchiveBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;
/**
 * @public
 */
export type ArchiveBooleanOperator = (typeof ArchiveBooleanOperator)[keyof typeof ArchiveBooleanOperator];

/**
 * @public
 * @enum
 */
export const ArchiveStringEmailAttribute = {
  CC: "CC",
  ENVELOPE_FROM: "ENVELOPE_FROM",
  ENVELOPE_TO: "ENVELOPE_TO",
  FROM: "FROM",
  SUBJECT: "SUBJECT",
  TO: "TO",
} as const;
/**
 * @public
 */
export type ArchiveStringEmailAttribute =
  (typeof ArchiveStringEmailAttribute)[keyof typeof ArchiveStringEmailAttribute];

/**
 * @public
 * @enum
 */
export const ArchiveStringOperator = {
  CONTAINS: "CONTAINS",
} as const;
/**
 * @public
 */
export type ArchiveStringOperator = (typeof ArchiveStringOperator)[keyof typeof ArchiveStringOperator];

/**
 * @public
 * @enum
 */
export const RetentionPeriod = {
  EIGHTEEN_MONTHS: "EIGHTEEN_MONTHS",
  EIGHT_YEARS: "EIGHT_YEARS",
  FIVE_YEARS: "FIVE_YEARS",
  FOUR_YEARS: "FOUR_YEARS",
  NINE_MONTHS: "NINE_MONTHS",
  NINE_YEARS: "NINE_YEARS",
  ONE_YEAR: "ONE_YEAR",
  PERMANENT: "PERMANENT",
  SEVEN_YEARS: "SEVEN_YEARS",
  SIX_MONTHS: "SIX_MONTHS",
  SIX_YEARS: "SIX_YEARS",
  TEN_YEARS: "TEN_YEARS",
  THIRTY_MONTHS: "THIRTY_MONTHS",
  THREE_MONTHS: "THREE_MONTHS",
  THREE_YEARS: "THREE_YEARS",
  TWO_YEARS: "TWO_YEARS",
} as const;
/**
 * @public
 */
export type RetentionPeriod = (typeof RetentionPeriod)[keyof typeof RetentionPeriod];

/**
 * @public
 * @enum
 */
export const ImportDataType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type ImportDataType = (typeof ImportDataType)[keyof typeof ImportDataType];

/**
 * @public
 * @enum
 */
export const IpType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type IpType = (typeof IpType)[keyof typeof IpType];

/**
 * @public
 * @enum
 */
export const IngressPointType = {
  AUTH: "AUTH",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type IngressPointType = (typeof IngressPointType)[keyof typeof IngressPointType];

/**
 * @public
 * @enum
 */
export const SnsNotificationEncoding = {
  BASE64: "BASE64",
  UTF_8: "UTF-8",
} as const;
/**
 * @public
 */
export type SnsNotificationEncoding = (typeof SnsNotificationEncoding)[keyof typeof SnsNotificationEncoding];

/**
 * @public
 * @enum
 */
export const SnsNotificationPayloadType = {
  CONTENT: "CONTENT",
  HEADERS: "HEADERS",
} as const;
/**
 * @public
 */
export type SnsNotificationPayloadType = (typeof SnsNotificationPayloadType)[keyof typeof SnsNotificationPayloadType];

/**
 * @public
 * @enum
 */
export const MailFrom = {
  PRESERVE: "PRESERVE",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type MailFrom = (typeof MailFrom)[keyof typeof MailFrom];

/**
 * @public
 * @enum
 */
export const RuleBooleanEmailAttribute = {
  READ_RECEIPT_REQUESTED: "READ_RECEIPT_REQUESTED",
  TLS: "TLS",
  TLS_WRAPPED: "TLS_WRAPPED",
} as const;
/**
 * @public
 */
export type RuleBooleanEmailAttribute = (typeof RuleBooleanEmailAttribute)[keyof typeof RuleBooleanEmailAttribute];

/**
 * @public
 * @enum
 */
export const RuleAddressListEmailAttribute = {
  CC: "CC",
  FROM: "FROM",
  MAIL_FROM: "MAIL_FROM",
  RECIPIENT: "RECIPIENT",
  SENDER: "SENDER",
  TO: "TO",
} as const;
/**
 * @public
 */
export type RuleAddressListEmailAttribute =
  (typeof RuleAddressListEmailAttribute)[keyof typeof RuleAddressListEmailAttribute];

/**
 * @public
 * @enum
 */
export const RuleBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;
/**
 * @public
 */
export type RuleBooleanOperator = (typeof RuleBooleanOperator)[keyof typeof RuleBooleanOperator];

/**
 * @public
 * @enum
 */
export const RuleDmarcOperator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type RuleDmarcOperator = (typeof RuleDmarcOperator)[keyof typeof RuleDmarcOperator];

/**
 * @public
 * @enum
 */
export const RuleDmarcPolicy = {
  NONE: "NONE",
  QUARANTINE: "QUARANTINE",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type RuleDmarcPolicy = (typeof RuleDmarcPolicy)[keyof typeof RuleDmarcPolicy];

/**
 * @public
 * @enum
 */
export const RuleIpEmailAttribute = {
  SOURCE_IP: "SOURCE_IP",
} as const;
/**
 * @public
 */
export type RuleIpEmailAttribute = (typeof RuleIpEmailAttribute)[keyof typeof RuleIpEmailAttribute];

/**
 * @public
 * @enum
 */
export const RuleIpOperator = {
  CIDR_MATCHES: "CIDR_MATCHES",
  NOT_CIDR_MATCHES: "NOT_CIDR_MATCHES",
} as const;
/**
 * @public
 */
export type RuleIpOperator = (typeof RuleIpOperator)[keyof typeof RuleIpOperator];

/**
 * @public
 * @enum
 */
export const RuleNumberEmailAttribute = {
  MESSAGE_SIZE: "MESSAGE_SIZE",
} as const;
/**
 * @public
 */
export type RuleNumberEmailAttribute = (typeof RuleNumberEmailAttribute)[keyof typeof RuleNumberEmailAttribute];

/**
 * @public
 * @enum
 */
export const RuleNumberOperator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type RuleNumberOperator = (typeof RuleNumberOperator)[keyof typeof RuleNumberOperator];

/**
 * @public
 * @enum
 */
export const RuleStringEmailAttribute = {
  CC: "CC",
  FROM: "FROM",
  HELO: "HELO",
  MAIL_FROM: "MAIL_FROM",
  RECIPIENT: "RECIPIENT",
  SENDER: "SENDER",
  SUBJECT: "SUBJECT",
  TO: "TO",
} as const;
/**
 * @public
 */
export type RuleStringEmailAttribute = (typeof RuleStringEmailAttribute)[keyof typeof RuleStringEmailAttribute];

/**
 * @public
 * @enum
 */
export const RuleStringOperator = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type RuleStringOperator = (typeof RuleStringOperator)[keyof typeof RuleStringOperator];

/**
 * @public
 * @enum
 */
export const RuleVerdictAttribute = {
  DKIM: "DKIM",
  SPF: "SPF",
} as const;
/**
 * @public
 */
export type RuleVerdictAttribute = (typeof RuleVerdictAttribute)[keyof typeof RuleVerdictAttribute];

/**
 * @public
 * @enum
 */
export const RuleVerdictOperator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type RuleVerdictOperator = (typeof RuleVerdictOperator)[keyof typeof RuleVerdictOperator];

/**
 * @public
 * @enum
 */
export const RuleVerdict = {
  FAIL: "FAIL",
  GRAY: "GRAY",
  PASS: "PASS",
  PROCESSING_FAILED: "PROCESSING_FAILED",
} as const;
/**
 * @public
 */
export type RuleVerdict = (typeof RuleVerdict)[keyof typeof RuleVerdict];

/**
 * @public
 * @enum
 */
export const IngressAddressListEmailAttribute = {
  RECIPIENT: "RECIPIENT",
} as const;
/**
 * @public
 */
export type IngressAddressListEmailAttribute =
  (typeof IngressAddressListEmailAttribute)[keyof typeof IngressAddressListEmailAttribute];

/**
 * @public
 * @enum
 */
export const IngressBooleanOperator = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;
/**
 * @public
 */
export type IngressBooleanOperator = (typeof IngressBooleanOperator)[keyof typeof IngressBooleanOperator];

/**
 * @public
 * @enum
 */
export const IngressIpv4Attribute = {
  SENDER_IP: "SENDER_IP",
} as const;
/**
 * @public
 */
export type IngressIpv4Attribute = (typeof IngressIpv4Attribute)[keyof typeof IngressIpv4Attribute];

/**
 * @public
 * @enum
 */
export const IngressIpOperator = {
  CIDR_MATCHES: "CIDR_MATCHES",
  NOT_CIDR_MATCHES: "NOT_CIDR_MATCHES",
} as const;
/**
 * @public
 */
export type IngressIpOperator = (typeof IngressIpOperator)[keyof typeof IngressIpOperator];

/**
 * @public
 * @enum
 */
export const IngressIpv6Attribute = {
  SENDER_IPV6: "SENDER_IPV6",
} as const;
/**
 * @public
 */
export type IngressIpv6Attribute = (typeof IngressIpv6Attribute)[keyof typeof IngressIpv6Attribute];

/**
 * @public
 * @enum
 */
export const IngressStringEmailAttribute = {
  RECIPIENT: "RECIPIENT",
} as const;
/**
 * @public
 */
export type IngressStringEmailAttribute =
  (typeof IngressStringEmailAttribute)[keyof typeof IngressStringEmailAttribute];

/**
 * @public
 * @enum
 */
export const IngressStringOperator = {
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type IngressStringOperator = (typeof IngressStringOperator)[keyof typeof IngressStringOperator];

/**
 * @public
 * @enum
 */
export const IngressTlsAttribute = {
  TLS_PROTOCOL: "TLS_PROTOCOL",
} as const;
/**
 * @public
 */
export type IngressTlsAttribute = (typeof IngressTlsAttribute)[keyof typeof IngressTlsAttribute];

/**
 * @public
 * @enum
 */
export const IngressTlsProtocolOperator = {
  IS: "IS",
  MINIMUM_TLS_VERSION: "MINIMUM_TLS_VERSION",
} as const;
/**
 * @public
 */
export type IngressTlsProtocolOperator = (typeof IngressTlsProtocolOperator)[keyof typeof IngressTlsProtocolOperator];

/**
 * @public
 * @enum
 */
export const IngressTlsProtocolAttribute = {
  TLS1_2: "TLS1_2",
  TLS1_3: "TLS1_3",
} as const;
/**
 * @public
 */
export type IngressTlsProtocolAttribute =
  (typeof IngressTlsProtocolAttribute)[keyof typeof IngressTlsProtocolAttribute];

/**
 * @public
 * @enum
 */
export const ExportState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PREPROCESSING: "PREPROCESSING",
  PROCESSING: "PROCESSING",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type ExportState = (typeof ExportState)[keyof typeof ExportState];

/**
 * @public
 * @enum
 */
export const ImportJobStatus = {
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ImportJobStatus = (typeof ImportJobStatus)[keyof typeof ImportJobStatus];

/**
 * @public
 * @enum
 */
export const SearchState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type SearchState = (typeof SearchState)[keyof typeof SearchState];

/**
 * @public
 * @enum
 */
export const IngressPointStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  DEPROVISIONING: "DEPROVISIONING",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IngressPointStatus = (typeof IngressPointStatus)[keyof typeof IngressPointStatus];

/**
 * @public
 * @enum
 */
export const IngressPointStatusToUpdate = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
} as const;
/**
 * @public
 */
export type IngressPointStatusToUpdate = (typeof IngressPointStatusToUpdate)[keyof typeof IngressPointStatusToUpdate];

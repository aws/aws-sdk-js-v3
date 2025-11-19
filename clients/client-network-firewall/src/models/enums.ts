// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TransitGatewayAttachmentStatus = {
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  READY: "READY",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;
/**
 * @public
 */
export type TransitGatewayAttachmentStatus =
  (typeof TransitGatewayAttachmentStatus)[keyof typeof TransitGatewayAttachmentStatus];

/**
 * @public
 * @enum
 */
export const EnabledAnalysisType = {
  HTTP_HOST: "HTTP_HOST",
  TLS_SNI: "TLS_SNI",
} as const;
/**
 * @public
 */
export type EnabledAnalysisType = (typeof EnabledAnalysisType)[keyof typeof EnabledAnalysisType];

/**
 * @public
 * @enum
 */
export const IdentifiedType = {
  STATELESS_RULE_CONTAINS_TCP_FLAGS: "STATELESS_RULE_CONTAINS_TCP_FLAGS",
  STATELESS_RULE_FORWARDING_ASYMMETRICALLY: "STATELESS_RULE_FORWARDING_ASYMMETRICALLY",
} as const;
/**
 * @public
 */
export type IdentifiedType = (typeof IdentifiedType)[keyof typeof IdentifiedType];

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  READY: "READY",
  SCALING: "SCALING",
} as const;
/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * @enum
 */
export const RevocationCheckAction = {
  DROP: "DROP",
  PASS: "PASS",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type RevocationCheckAction = (typeof RevocationCheckAction)[keyof typeof RevocationCheckAction];

/**
 * @public
 * @enum
 */
export const ConfigurationSyncState = {
  CAPACITY_CONSTRAINED: "CAPACITY_CONSTRAINED",
  IN_SYNC: "IN_SYNC",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ConfigurationSyncState = (typeof ConfigurationSyncState)[keyof typeof ConfigurationSyncState];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_KMS: "CUSTOMER_KMS",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const FirewallStatusValue = {
  DELETING: "DELETING",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type FirewallStatusValue = (typeof FirewallStatusValue)[keyof typeof FirewallStatusValue];

/**
 * @public
 * @enum
 */
export const PerObjectSyncStatus = {
  CAPACITY_CONSTRAINED: "CAPACITY_CONSTRAINED",
  IN_SYNC: "IN_SYNC",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type PerObjectSyncStatus = (typeof PerObjectSyncStatus)[keyof typeof PerObjectSyncStatus];

/**
 * @public
 * @enum
 */
export const RuleOrder = {
  DEFAULT_ACTION_ORDER: "DEFAULT_ACTION_ORDER",
  STRICT_ORDER: "STRICT_ORDER",
} as const;
/**
 * @public
 */
export type RuleOrder = (typeof RuleOrder)[keyof typeof RuleOrder];

/**
 * @public
 * @enum
 */
export const StreamExceptionPolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type StreamExceptionPolicy = (typeof StreamExceptionPolicy)[keyof typeof StreamExceptionPolicy];

/**
 * @public
 * @enum
 */
export const OverrideAction = {
  DROP_TO_ALERT: "DROP_TO_ALERT",
} as const;
/**
 * @public
 */
export type OverrideAction = (typeof OverrideAction)[keyof typeof OverrideAction];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const GeneratedRulesType = {
  ALERTLIST: "ALERTLIST",
  ALLOWLIST: "ALLOWLIST",
  DENYLIST: "DENYLIST",
  REJECTLIST: "REJECTLIST",
} as const;
/**
 * @public
 */
export type GeneratedRulesType = (typeof GeneratedRulesType)[keyof typeof GeneratedRulesType];

/**
 * @public
 * @enum
 */
export const TargetType = {
  HTTP_HOST: "HTTP_HOST",
  TLS_SNI: "TLS_SNI",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const StatefulAction = {
  ALERT: "ALERT",
  DROP: "DROP",
  PASS: "PASS",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type StatefulAction = (typeof StatefulAction)[keyof typeof StatefulAction];

/**
 * @public
 * @enum
 */
export const StatefulRuleDirection = {
  ANY: "ANY",
  FORWARD: "FORWARD",
} as const;
/**
 * @public
 */
export type StatefulRuleDirection = (typeof StatefulRuleDirection)[keyof typeof StatefulRuleDirection];

/**
 * @public
 * @enum
 */
export const StatefulRuleProtocol = {
  ANY: "IP",
  DCERPC: "DCERPC",
  DHCP: "DHCP",
  DNS: "DNS",
  FTP: "FTP",
  HTTP: "HTTP",
  HTTP2: "HTTP2",
  ICMP: "ICMP",
  IKEV2: "IKEV2",
  IMAP: "IMAP",
  KRB5: "KRB5",
  MSN: "MSN",
  NTP: "NTP",
  QUIC: "QUIC",
  SMB: "SMB",
  SMTP: "SMTP",
  SSH: "SSH",
  TCP: "TCP",
  TFTP: "TFTP",
  TLS: "TLS",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type StatefulRuleProtocol = (typeof StatefulRuleProtocol)[keyof typeof StatefulRuleProtocol];

/**
 * @public
 * @enum
 */
export const TCPFlag = {
  ACK: "ACK",
  CWR: "CWR",
  ECE: "ECE",
  FIN: "FIN",
  PSH: "PSH",
  RST: "RST",
  SYN: "SYN",
  URG: "URG",
} as const;
/**
 * @public
 */
export type TCPFlag = (typeof TCPFlag)[keyof typeof TCPFlag];

/**
 * @public
 * @enum
 */
export const SummaryRuleOption = {
  METADATA: "METADATA",
  MSG: "MSG",
  SID: "SID",
} as const;
/**
 * @public
 */
export type SummaryRuleOption = (typeof SummaryRuleOption)[keyof typeof SummaryRuleOption];

/**
 * @public
 * @enum
 */
export const RuleGroupType = {
  STATEFUL: "STATEFUL",
  STATELESS: "STATELESS",
} as const;
/**
 * @public
 */
export type RuleGroupType = (typeof RuleGroupType)[keyof typeof RuleGroupType];

/**
 * @public
 * @enum
 */
export const FlowOperationStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type FlowOperationStatus = (typeof FlowOperationStatus)[keyof typeof FlowOperationStatus];

/**
 * @public
 * @enum
 */
export const FlowOperationType = {
  FLOW_CAPTURE: "FLOW_CAPTURE",
  FLOW_FLUSH: "FLOW_FLUSH",
} as const;
/**
 * @public
 */
export type FlowOperationType = (typeof FlowOperationType)[keyof typeof FlowOperationType];

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  CLOUDWATCH_LOGS: "CloudWatchLogs",
  KINESIS_DATA_FIREHOSE: "KinesisDataFirehose",
  S3: "S3",
} as const;
/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * @public
 * @enum
 */
export const LogType = {
  ALERT: "ALERT",
  FLOW: "FLOW",
  TLS: "TLS",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const ResourceManagedType = {
  ACTIVE_THREAT_DEFENSE: "ACTIVE_THREAT_DEFENSE",
  AWS_MANAGED_DOMAIN_LISTS: "AWS_MANAGED_DOMAIN_LISTS",
  AWS_MANAGED_THREAT_SIGNATURES: "AWS_MANAGED_THREAT_SIGNATURES",
} as const;
/**
 * @public
 */
export type ResourceManagedType = (typeof ResourceManagedType)[keyof typeof ResourceManagedType];

/**
 * @public
 * @enum
 */
export const ResourceManagedStatus = {
  ACCOUNT: "ACCOUNT",
  MANAGED: "MANAGED",
} as const;
/**
 * @public
 */
export type ResourceManagedStatus = (typeof ResourceManagedStatus)[keyof typeof ResourceManagedStatus];

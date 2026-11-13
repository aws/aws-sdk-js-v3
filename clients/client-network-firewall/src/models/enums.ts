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
export const ActionScope = {
  FLOW: "FLOW",
  HOOK: "HOOK",
  PACKET: "PACKET",
  TX: "TX",
} as const;
/**
 * @public
 */
export type ActionScope = (typeof ActionScope)[keyof typeof ActionScope];

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
export const ContainerAssociationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ContainerAssociationStatus = (typeof ContainerAssociationStatus)[keyof typeof ContainerAssociationStatus];

/**
 * @public
 * @enum
 */
export const ContainerMonitoringType = {
  ECS: "ECS",
  EKS: "EKS",
} as const;
/**
 * @public
 */
export type ContainerMonitoringType = (typeof ContainerMonitoringType)[keyof typeof ContainerMonitoringType];

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
export const ListenerPropertyType = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;
/**
 * @public
 */
export type ListenerPropertyType = (typeof ListenerPropertyType)[keyof typeof ListenerPropertyType];

/**
 * @public
 * @enum
 */
export const TransparentFilteringNatScope = {
  NAT_ALL: "NAT_ALL",
  NAT_NONE: "NAT_NONE",
} as const;
/**
 * @public
 */
export type TransparentFilteringNatScope =
  (typeof TransparentFilteringNatScope)[keyof typeof TransparentFilteringNatScope];

/**
 * @public
 * @enum
 */
export const FirewallStatusValue = {
  DELETING: "DELETING",
  FAILED: "FAILED",
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
  DEPRECATED: "DEPRECATED",
  IN_SYNC: "IN_SYNC",
  NOT_SUBSCRIBED: "NOT_SUBSCRIBED",
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
export const NatGatewayAttachmentStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type NatGatewayAttachmentStatus = (typeof NatGatewayAttachmentStatus)[keyof typeof NatGatewayAttachmentStatus];

/**
 * @public
 * @enum
 */
export const Route53ResolvedIPValidationAction = {
  ALERT: "ALERT",
  DROP: "DROP",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type Route53ResolvedIPValidationAction =
  (typeof Route53ResolvedIPValidationAction)[keyof typeof Route53ResolvedIPValidationAction];

/**
 * @public
 * @enum
 */
export const DNSExpiryExceptionPolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type DNSExpiryExceptionPolicy = (typeof DNSExpiryExceptionPolicy)[keyof typeof DNSExpiryExceptionPolicy];

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
export const FirewallPolicyErrorCode = {
  DNS_FIREWALL_RULE_GROUP_UNAVAILABLE: "DNS_FIREWALL_RULE_GROUP_UNAVAILABLE",
  ROUTE53_RESOLVED_IP_VALIDATION_MISSING: "ROUTE53_RESOLVED_IP_VALIDATION_MISSING",
} as const;
/**
 * @public
 */
export type FirewallPolicyErrorCode = (typeof FirewallPolicyErrorCode)[keyof typeof FirewallPolicyErrorCode];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const PolicyDefaultAction = {
  ACCEPT: "ACCEPT",
  ALERT: "ALERT",
  DROP: "DROP",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type PolicyDefaultAction = (typeof PolicyDefaultAction)[keyof typeof PolicyDefaultAction];

/**
 * @public
 * @enum
 */
export const FirewallRuleAction = {
  ACCEPT: "ACCEPT",
  DROP: "DROP",
  REJECT: "REJECT",
  REJECT_BOTH: "REJECT_BOTH",
  REJECT_DST: "REJECT_DST",
} as const;
/**
 * @public
 */
export type FirewallRuleAction = (typeof FirewallRuleAction)[keyof typeof FirewallRuleAction];

/**
 * @public
 * @enum
 */
export const HookKey = {
  BITTORRENT_DHT_REQUEST_COMPLETE: "BITTORRENT_DHT_REQUEST_COMPLETE",
  BITTORRENT_DHT_REQUEST_STARTED: "BITTORRENT_DHT_REQUEST_STARTED",
  BITTORRENT_DHT_RESPONSE_COMPLETE: "BITTORRENT_DHT_RESPONSE_COMPLETE",
  BITTORRENT_DHT_RESPONSE_STARTED: "BITTORRENT_DHT_RESPONSE_STARTED",
  DCERPC_REQUEST_COMPLETE: "DCERPC_REQUEST_COMPLETE",
  DCERPC_REQUEST_STARTED: "DCERPC_REQUEST_STARTED",
  DCERPC_RESPONSE_COMPLETE: "DCERPC_RESPONSE_COMPLETE",
  DCERPC_RESPONSE_STARTED: "DCERPC_RESPONSE_STARTED",
  DHCP_REQUEST_COMPLETE: "DHCP_REQUEST_COMPLETE",
  DHCP_REQUEST_STARTED: "DHCP_REQUEST_STARTED",
  DHCP_RESPONSE_COMPLETE: "DHCP_RESPONSE_COMPLETE",
  DHCP_RESPONSE_STARTED: "DHCP_RESPONSE_STARTED",
  DNP3_REQUEST_COMPLETE: "DNP3_REQUEST_COMPLETE",
  DNP3_REQUEST_STARTED: "DNP3_REQUEST_STARTED",
  DNP3_RESPONSE_COMPLETE: "DNP3_RESPONSE_COMPLETE",
  DNP3_RESPONSE_STARTED: "DNP3_RESPONSE_STARTED",
  DNS_REQUEST_COMPLETE: "DNS_REQUEST_COMPLETE",
  DNS_REQUEST_STARTED: "DNS_REQUEST_STARTED",
  DNS_RESPONSE_COMPLETE: "DNS_RESPONSE_COMPLETE",
  DNS_RESPONSE_STARTED: "DNS_RESPONSE_STARTED",
  DOH2_GLOBAL_REQUEST_COMPLETE: "DOH2_GLOBAL_REQUEST_COMPLETE",
  DOH2_GLOBAL_REQUEST_STARTED: "DOH2_GLOBAL_REQUEST_STARTED",
  DOH2_GLOBAL_RESPONSE_COMPLETE: "DOH2_GLOBAL_RESPONSE_COMPLETE",
  DOH2_GLOBAL_RESPONSE_STARTED: "DOH2_GLOBAL_RESPONSE_STARTED",
  DOH2_STREAM_REQUEST_CLOSED: "DOH2_STREAM_REQUEST_CLOSED",
  DOH2_STREAM_REQUEST_COMPLETE: "DOH2_STREAM_REQUEST_COMPLETE",
  DOH2_STREAM_REQUEST_DATA: "DOH2_STREAM_REQUEST_DATA",
  DOH2_STREAM_REQUEST_HEADERS: "DOH2_STREAM_REQUEST_HEADERS",
  DOH2_STREAM_REQUEST_STARTED: "DOH2_STREAM_REQUEST_STARTED",
  DOH2_STREAM_RESPONSE_CLOSED: "DOH2_STREAM_RESPONSE_CLOSED",
  DOH2_STREAM_RESPONSE_COMPLETE: "DOH2_STREAM_RESPONSE_COMPLETE",
  DOH2_STREAM_RESPONSE_DATA: "DOH2_STREAM_RESPONSE_DATA",
  DOH2_STREAM_RESPONSE_HEADERS: "DOH2_STREAM_RESPONSE_HEADERS",
  DOH2_STREAM_RESPONSE_STARTED: "DOH2_STREAM_RESPONSE_STARTED",
  FTP_DATA_REQUEST_COMPLETE: "FTP_DATA_REQUEST_COMPLETE",
  FTP_DATA_REQUEST_STARTED: "FTP_DATA_REQUEST_STARTED",
  FTP_DATA_RESPONSE_COMPLETE: "FTP_DATA_RESPONSE_COMPLETE",
  FTP_DATA_RESPONSE_STARTED: "FTP_DATA_RESPONSE_STARTED",
  FTP_REQUEST_COMPLETE: "FTP_REQUEST_COMPLETE",
  FTP_REQUEST_STARTED: "FTP_REQUEST_STARTED",
  FTP_RESPONSE_COMPLETE: "FTP_RESPONSE_COMPLETE",
  FTP_RESPONSE_STARTED: "FTP_RESPONSE_STARTED",
  HTTP1_REQUEST_BODY: "HTTP1_REQUEST_BODY",
  HTTP1_REQUEST_COMPLETE: "HTTP1_REQUEST_COMPLETE",
  HTTP1_REQUEST_HEADERS: "HTTP1_REQUEST_HEADERS",
  HTTP1_REQUEST_LINE: "HTTP1_REQUEST_LINE",
  HTTP1_REQUEST_STARTED: "HTTP1_REQUEST_STARTED",
  HTTP1_REQUEST_TRAILER: "HTTP1_REQUEST_TRAILER",
  HTTP1_RESPONSE_BODY: "HTTP1_RESPONSE_BODY",
  HTTP1_RESPONSE_COMPLETE: "HTTP1_RESPONSE_COMPLETE",
  HTTP1_RESPONSE_HEADERS: "HTTP1_RESPONSE_HEADERS",
  HTTP1_RESPONSE_LINE: "HTTP1_RESPONSE_LINE",
  HTTP1_RESPONSE_STARTED: "HTTP1_RESPONSE_STARTED",
  HTTP1_RESPONSE_TRAILER: "HTTP1_RESPONSE_TRAILER",
  HTTP2_GLOBAL_REQUEST_COMPLETE: "HTTP2_GLOBAL_REQUEST_COMPLETE",
  HTTP2_GLOBAL_REQUEST_STARTED: "HTTP2_GLOBAL_REQUEST_STARTED",
  HTTP2_GLOBAL_RESPONSE_COMPLETE: "HTTP2_GLOBAL_RESPONSE_COMPLETE",
  HTTP2_GLOBAL_RESPONSE_STARTED: "HTTP2_GLOBAL_RESPONSE_STARTED",
  HTTP2_STREAM_REQUEST_CLOSED: "HTTP2_STREAM_REQUEST_CLOSED",
  HTTP2_STREAM_REQUEST_COMPLETE: "HTTP2_STREAM_REQUEST_COMPLETE",
  HTTP2_STREAM_REQUEST_DATA: "HTTP2_STREAM_REQUEST_DATA",
  HTTP2_STREAM_REQUEST_HEADERS: "HTTP2_STREAM_REQUEST_HEADERS",
  HTTP2_STREAM_REQUEST_STARTED: "HTTP2_STREAM_REQUEST_STARTED",
  HTTP2_STREAM_RESPONSE_CLOSED: "HTTP2_STREAM_RESPONSE_CLOSED",
  HTTP2_STREAM_RESPONSE_COMPLETE: "HTTP2_STREAM_RESPONSE_COMPLETE",
  HTTP2_STREAM_RESPONSE_DATA: "HTTP2_STREAM_RESPONSE_DATA",
  HTTP2_STREAM_RESPONSE_HEADERS: "HTTP2_STREAM_RESPONSE_HEADERS",
  HTTP2_STREAM_RESPONSE_STARTED: "HTTP2_STREAM_RESPONSE_STARTED",
  ICMPV4_ALL: "ICMPV4_ALL",
  ICMPV4_FLOW_START: "ICMPV4_FLOW_START",
  ICMPV4_PRE_FLOW: "ICMPV4_PRE_FLOW",
  ICMPV4_PRE_STREAM: "ICMPV4_PRE_STREAM",
  ICMPV6_ALL: "ICMPV6_ALL",
  ICMPV6_FLOW_START: "ICMPV6_FLOW_START",
  ICMPV6_PRE_FLOW: "ICMPV6_PRE_FLOW",
  ICMPV6_PRE_STREAM: "ICMPV6_PRE_STREAM",
  ICMP_ALL: "ICMP_ALL",
  ICMP_FLOW_START: "ICMP_FLOW_START",
  ICMP_PRE_FLOW: "ICMP_PRE_FLOW",
  ICMP_PRE_STREAM: "ICMP_PRE_STREAM",
  IKE_REQUEST_COMPLETE: "IKE_REQUEST_COMPLETE",
  IKE_REQUEST_STARTED: "IKE_REQUEST_STARTED",
  IKE_RESPONSE_COMPLETE: "IKE_RESPONSE_COMPLETE",
  IKE_RESPONSE_STARTED: "IKE_RESPONSE_STARTED",
  IPV4_ALL: "IPV4_ALL",
  IPV4_FLOW_START: "IPV4_FLOW_START",
  IPV4_PRE_FLOW: "IPV4_PRE_FLOW",
  IPV4_PRE_STREAM: "IPV4_PRE_STREAM",
  IPV6_ALL: "IPV6_ALL",
  IPV6_FLOW_START: "IPV6_FLOW_START",
  IPV6_PRE_FLOW: "IPV6_PRE_FLOW",
  IPV6_PRE_STREAM: "IPV6_PRE_STREAM",
  IP_ALL: "IP_ALL",
  IP_FLOW_START: "IP_FLOW_START",
  IP_PRE_FLOW: "IP_PRE_FLOW",
  IP_PRE_STREAM: "IP_PRE_STREAM",
  KRB5_REQUEST_COMPLETE: "KRB5_REQUEST_COMPLETE",
  KRB5_REQUEST_STARTED: "KRB5_REQUEST_STARTED",
  KRB5_RESPONSE_COMPLETE: "KRB5_RESPONSE_COMPLETE",
  KRB5_RESPONSE_STARTED: "KRB5_RESPONSE_STARTED",
  LDAP_REQUEST_COMPLETE: "LDAP_REQUEST_COMPLETE",
  LDAP_REQUEST_STARTED: "LDAP_REQUEST_STARTED",
  LDAP_RESPONSE_COMPLETE: "LDAP_RESPONSE_COMPLETE",
  LDAP_RESPONSE_STARTED: "LDAP_RESPONSE_STARTED",
  MDNS_REQUEST_COMPLETE: "MDNS_REQUEST_COMPLETE",
  MDNS_REQUEST_STARTED: "MDNS_REQUEST_STARTED",
  MDNS_RESPONSE_COMPLETE: "MDNS_RESPONSE_COMPLETE",
  MDNS_RESPONSE_STARTED: "MDNS_RESPONSE_STARTED",
  MQTT_REQUEST_COMPLETE: "MQTT_REQUEST_COMPLETE",
  MQTT_REQUEST_STARTED: "MQTT_REQUEST_STARTED",
  MQTT_RESPONSE_COMPLETE: "MQTT_RESPONSE_COMPLETE",
  MQTT_RESPONSE_STARTED: "MQTT_RESPONSE_STARTED",
  NFS_REQUEST_COMPLETE: "NFS_REQUEST_COMPLETE",
  NFS_REQUEST_STARTED: "NFS_REQUEST_STARTED",
  NFS_RESPONSE_COMPLETE: "NFS_RESPONSE_COMPLETE",
  NFS_RESPONSE_STARTED: "NFS_RESPONSE_STARTED",
  NTP_REQUEST_COMPLETE: "NTP_REQUEST_COMPLETE",
  NTP_REQUEST_STARTED: "NTP_REQUEST_STARTED",
  NTP_RESPONSE_COMPLETE: "NTP_RESPONSE_COMPLETE",
  NTP_RESPONSE_STARTED: "NTP_RESPONSE_STARTED",
  PGSQL_REQUEST_COMPLETE: "PGSQL_REQUEST_COMPLETE",
  PGSQL_REQUEST_STARTED: "PGSQL_REQUEST_STARTED",
  PGSQL_RESPONSE_COMPLETE: "PGSQL_RESPONSE_COMPLETE",
  PGSQL_RESPONSE_STARTED: "PGSQL_RESPONSE_STARTED",
  POP3_REQUEST_COMPLETE: "POP3_REQUEST_COMPLETE",
  POP3_REQUEST_STARTED: "POP3_REQUEST_STARTED",
  POP3_RESPONSE_COMPLETE: "POP3_RESPONSE_COMPLETE",
  POP3_RESPONSE_STARTED: "POP3_RESPONSE_STARTED",
  QUIC_REQUEST_COMPLETE: "QUIC_REQUEST_COMPLETE",
  QUIC_REQUEST_STARTED: "QUIC_REQUEST_STARTED",
  QUIC_RESPONSE_COMPLETE: "QUIC_RESPONSE_COMPLETE",
  QUIC_RESPONSE_STARTED: "QUIC_RESPONSE_STARTED",
  RDP_REQUEST_COMPLETE: "RDP_REQUEST_COMPLETE",
  RDP_REQUEST_STARTED: "RDP_REQUEST_STARTED",
  RDP_RESPONSE_COMPLETE: "RDP_RESPONSE_COMPLETE",
  RDP_RESPONSE_STARTED: "RDP_RESPONSE_STARTED",
  RFB_REQUEST_COMPLETE: "RFB_REQUEST_COMPLETE",
  RFB_REQUEST_STARTED: "RFB_REQUEST_STARTED",
  RFB_RESPONSE_COMPLETE: "RFB_RESPONSE_COMPLETE",
  RFB_RESPONSE_STARTED: "RFB_RESPONSE_STARTED",
  SCTP_ALL: "SCTP_ALL",
  SCTP_FLOW_START: "SCTP_FLOW_START",
  SCTP_PRE_FLOW: "SCTP_PRE_FLOW",
  SCTP_PRE_STREAM: "SCTP_PRE_STREAM",
  SMB_REQUEST_COMPLETE: "SMB_REQUEST_COMPLETE",
  SMB_REQUEST_STARTED: "SMB_REQUEST_STARTED",
  SMB_RESPONSE_COMPLETE: "SMB_RESPONSE_COMPLETE",
  SMB_RESPONSE_STARTED: "SMB_RESPONSE_STARTED",
  SMTP_REQUEST_COMPLETE: "SMTP_REQUEST_COMPLETE",
  SMTP_REQUEST_DATA: "SMTP_REQUEST_DATA",
  SMTP_REQUEST_STARTED: "SMTP_REQUEST_STARTED",
  SMTP_RESPONSE_COMPLETE: "SMTP_RESPONSE_COMPLETE",
  SMTP_RESPONSE_DATA: "SMTP_RESPONSE_DATA",
  SMTP_RESPONSE_STARTED: "SMTP_RESPONSE_STARTED",
  SNMP_REQUEST_COMPLETE: "SNMP_REQUEST_COMPLETE",
  SNMP_REQUEST_STARTED: "SNMP_REQUEST_STARTED",
  SNMP_RESPONSE_COMPLETE: "SNMP_RESPONSE_COMPLETE",
  SNMP_RESPONSE_STARTED: "SNMP_RESPONSE_STARTED",
  SSH_REQUEST_BANNER_DONE: "SSH_REQUEST_BANNER_DONE",
  SSH_REQUEST_BANNER_WAIT_EOL: "SSH_REQUEST_BANNER_WAIT_EOL",
  SSH_REQUEST_FINISHED: "SSH_REQUEST_FINISHED",
  SSH_REQUEST_IN_PROGRESS: "SSH_REQUEST_IN_PROGRESS",
  SSH_RESPONSE_BANNER_DONE: "SSH_RESPONSE_BANNER_DONE",
  SSH_RESPONSE_BANNER_WAIT_EOL: "SSH_RESPONSE_BANNER_WAIT_EOL",
  SSH_RESPONSE_FINISHED: "SSH_RESPONSE_FINISHED",
  SSH_RESPONSE_IN_PROGRESS: "SSH_RESPONSE_IN_PROGRESS",
  TCP_ALL: "TCP_ALL",
  TCP_FLOW_START: "TCP_FLOW_START",
  TCP_PRE_FLOW: "TCP_PRE_FLOW",
  TCP_PRE_STREAM: "TCP_PRE_STREAM",
  TELNET_REQUEST_COMPLETE: "TELNET_REQUEST_COMPLETE",
  TELNET_REQUEST_STARTED: "TELNET_REQUEST_STARTED",
  TELNET_RESPONSE_COMPLETE: "TELNET_RESPONSE_COMPLETE",
  TELNET_RESPONSE_STARTED: "TELNET_RESPONSE_STARTED",
  TFTP_REQUEST_COMPLETE: "TFTP_REQUEST_COMPLETE",
  TFTP_REQUEST_STARTED: "TFTP_REQUEST_STARTED",
  TFTP_RESPONSE_COMPLETE: "TFTP_RESPONSE_COMPLETE",
  TFTP_RESPONSE_STARTED: "TFTP_RESPONSE_STARTED",
  TLS_CLIENT_CERT: "TLS_CLIENT_CERT",
  TLS_CLIENT_DATA: "TLS_CLIENT_DATA",
  TLS_CLIENT_FINISHED: "TLS_CLIENT_FINISHED",
  TLS_CLIENT_HELLO: "TLS_CLIENT_HELLO",
  TLS_CLIENT_STARTED: "TLS_CLIENT_STARTED",
  TLS_SERVER_CERT: "TLS_SERVER_CERT",
  TLS_SERVER_DATA: "TLS_SERVER_DATA",
  TLS_SERVER_FINISHED: "TLS_SERVER_FINISHED",
  TLS_SERVER_HELLO: "TLS_SERVER_HELLO",
  TLS_SERVER_STARTED: "TLS_SERVER_STARTED",
  UDP_ALL: "UDP_ALL",
  UDP_FLOW_START: "UDP_FLOW_START",
  UDP_PRE_FLOW: "UDP_PRE_FLOW",
  UDP_PRE_STREAM: "UDP_PRE_STREAM",
  WEBSOCKET_REQUEST_COMPLETE: "WEBSOCKET_REQUEST_COMPLETE",
  WEBSOCKET_REQUEST_STARTED: "WEBSOCKET_REQUEST_STARTED",
  WEBSOCKET_RESPONSE_COMPLETE: "WEBSOCKET_RESPONSE_COMPLETE",
  WEBSOCKET_RESPONSE_STARTED: "WEBSOCKET_RESPONSE_STARTED",
} as const;
/**
 * @public
 */
export type HookKey = (typeof HookKey)[keyof typeof HookKey];

/**
 * @public
 * @enum
 */
export const FirewallRuleProtocol = {
  ANY: "IP",
  BITTORRENT_DHT: "BITTORRENT_DHT",
  DCERPC: "DCERPC",
  DHCP: "DHCP",
  DNP3: "DNP3",
  DNS: "DNS",
  DOH2: "DOH2",
  FTP: "FTP",
  FTP_DATA: "FTP_DATA",
  HTTP: "HTTP",
  HTTP2: "HTTP2",
  ICMP: "ICMP",
  ICMPV4: "ICMPV4",
  ICMPV6: "ICMPV6",
  IKEV2: "IKEV2",
  IPV4: "IPV4",
  IPV6: "IPV6",
  KRB5: "KRB5",
  LDAP: "LDAP",
  MDNS: "MDNS",
  MQTT: "MQTT",
  MSN: "MSN",
  NFS: "NFS",
  NTP: "NTP",
  PGSQL: "PGSQL",
  POP3: "POP3",
  QUIC: "QUIC",
  RDP: "RDP",
  RFB: "RFB",
  SCTP: "SCTP",
  SMB: "SMB",
  SMTP: "SMTP",
  SNMP: "SNMP",
  SSH: "SSH",
  TCP: "TCP",
  TELNET: "TELNET",
  TFTP: "TFTP",
  TLS: "TLS",
  UDP: "UDP",
  WEBSOCKET: "WEBSOCKET",
} as const;
/**
 * @public
 */
export type FirewallRuleProtocol = (typeof FirewallRuleProtocol)[keyof typeof FirewallRuleProtocol];

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
  AWS_ROUTE_53_RESOLVED_DOMAIN: "AWS_ROUTE_53_RESOLVED_DOMAIN",
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
export const PolicyMode = {
  ENFORCE: "ENFORCE",
  MONITOR: "MONITOR",
} as const;
/**
 * @public
 */
export type PolicyMode = (typeof PolicyMode)[keyof typeof PolicyMode];

/**
 * @public
 * @enum
 */
export const StreamExceptionPolicyV2 = {
  DROP: "DROP",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type StreamExceptionPolicyV2 = (typeof StreamExceptionPolicyV2)[keyof typeof StreamExceptionPolicyV2];

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
  FIREWALL: "FIREWALL",
  IPS: "IPS",
  STATEFUL: "STATEFUL",
  STATEFUL_DOMAIN: "STATEFUL_DOMAIN",
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
export const DecryptionAction = {
  BYPASS: "BYPASS",
  DECRYPT: "DECRYPT",
} as const;
/**
 * @public
 */
export type DecryptionAction = (typeof DecryptionAction)[keyof typeof DecryptionAction];

/**
 * @public
 * @enum
 */
export const TLSInspectionScopeDeploymentMode = {
  ALL: "ALL",
  EXPLICIT_PROXY_ONLY: "EXPLICIT_PROXY_ONLY",
  TRANSPARENT_FIREWALL_ONLY: "TRANSPARENT_FIREWALL_ONLY",
} as const;
/**
 * @public
 */
export type TLSInspectionScopeDeploymentMode =
  (typeof TLSInspectionScopeDeploymentMode)[keyof typeof TLSInspectionScopeDeploymentMode];

/**
 * @public
 * @enum
 */
export const RuleOutputFormat = {
  FIREWALL_RULES: "FIREWALL_RULES",
  RULES_STRING: "RULES_STRING",
} as const;
/**
 * @public
 */
export type RuleOutputFormat = (typeof RuleOutputFormat)[keyof typeof RuleOutputFormat];

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
export const ProxyModifyState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
} as const;
/**
 * @public
 */
export type ProxyModifyState = (typeof ProxyModifyState)[keyof typeof ProxyModifyState];

/**
 * @public
 * @enum
 */
export const ProxyState = {
  ATTACHED: "ATTACHED",
  ATTACHING: "ATTACHING",
  ATTACH_FAILED: "ATTACH_FAILED",
  DETACHED: "DETACHED",
  DETACHING: "DETACHING",
  DETACH_FAILED: "DETACH_FAILED",
} as const;
/**
 * @public
 */
export type ProxyState = (typeof ProxyState)[keyof typeof ProxyState];

/**
 * @public
 * @enum
 */
export const TlsInterceptMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TlsInterceptMode = (typeof TlsInterceptMode)[keyof typeof TlsInterceptMode];

/**
 * @public
 * @enum
 */
export const ResourceManagedType = {
  ACTIVE_THREAT_DEFENSE: "ACTIVE_THREAT_DEFENSE",
  AWS_MANAGED_DOMAIN_LISTS: "AWS_MANAGED_DOMAIN_LISTS",
  AWS_MANAGED_THREAT_SIGNATURES: "AWS_MANAGED_THREAT_SIGNATURES",
  PARTNER_MANAGED: "PARTNER_MANAGED",
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

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  NOT_SUBSCRIBED: "NOT_SUBSCRIBED",
  SUBSCRIBED: "SUBSCRIBED",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AttachmentType = {
  CONNECT: "CONNECT",
  DIRECT_CONNECT_GATEWAY: "DIRECT_CONNECT_GATEWAY",
  SITE_TO_SITE_VPN: "SITE_TO_SITE_VPN",
  TRANSIT_GATEWAY_ROUTE_TABLE: "TRANSIT_GATEWAY_ROUTE_TABLE",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType];

/**
 * @public
 * @enum
 */
export const AttachmentErrorCode = {
  DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS: "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS",
  DIRECT_CONNECT_GATEWAY_NOT_FOUND: "DIRECT_CONNECT_GATEWAY_NOT_FOUND",
  DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF: "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF",
  MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED: "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED",
  SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE: "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  SUBNET_NO_FREE_ADDRESSES: "SUBNET_NO_FREE_ADDRESSES",
  SUBNET_NO_IPV6_CIDRS: "SUBNET_NO_IPV6_CIDRS",
  SUBNET_UNSUPPORTED_AVAILABILITY_ZONE: "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE",
  VPC_NOT_FOUND: "VPC_NOT_FOUND",
  VPN_CONNECTION_NOT_FOUND: "VPN_CONNECTION_NOT_FOUND",
} as const;
/**
 * @public
 */
export type AttachmentErrorCode = (typeof AttachmentErrorCode)[keyof typeof AttachmentErrorCode];

/**
 * @public
 * @enum
 */
export const AttachmentState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_ATTACHMENT_ACCEPTANCE: "PENDING_ATTACHMENT_ACCEPTANCE",
  PENDING_NETWORK_UPDATE: "PENDING_NETWORK_UPDATE",
  PENDING_TAG_ACCEPTANCE: "PENDING_TAG_ACCEPTANCE",
  REJECTED: "REJECTED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AttachmentState = (typeof AttachmentState)[keyof typeof AttachmentState];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  OTHER: "Other",
  UNKNOWN_OPERATION: "UnknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ConnectPeerAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;
/**
 * @public
 */
export type ConnectPeerAssociationState =
  (typeof ConnectPeerAssociationState)[keyof typeof ConnectPeerAssociationState];

/**
 * @public
 * @enum
 */
export const CustomerGatewayAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;
/**
 * @public
 */
export type CustomerGatewayAssociationState =
  (typeof CustomerGatewayAssociationState)[keyof typeof CustomerGatewayAssociationState];

/**
 * @public
 * @enum
 */
export const LinkAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;
/**
 * @public
 */
export type LinkAssociationState = (typeof LinkAssociationState)[keyof typeof LinkAssociationState];

/**
 * @public
 * @enum
 */
export const TransitGatewayConnectPeerAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;
/**
 * @public
 */
export type TransitGatewayConnectPeerAssociationState =
  (typeof TransitGatewayConnectPeerAssociationState)[keyof typeof TransitGatewayConnectPeerAssociationState];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ChangeSetState = {
  EXECUTING: "EXECUTING",
  EXECUTION_SUCCEEDED: "EXECUTION_SUCCEEDED",
  FAILED_GENERATION: "FAILED_GENERATION",
  OUT_OF_DATE: "OUT_OF_DATE",
  PENDING_GENERATION: "PENDING_GENERATION",
  READY_TO_EXECUTE: "READY_TO_EXECUTE",
} as const;
/**
 * @public
 */
export type ChangeSetState = (typeof ChangeSetState)[keyof typeof ChangeSetState];

/**
 * @public
 * @enum
 */
export const ChangeStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ChangeStatus = (typeof ChangeStatus)[keyof typeof ChangeStatus];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  ATTACHMENT_MAPPING: "ATTACHMENT_MAPPING",
  ATTACHMENT_POLICIES_CONFIGURATION: "ATTACHMENT_POLICIES_CONFIGURATION",
  ATTACHMENT_ROUTE_PROPAGATION: "ATTACHMENT_ROUTE_PROPAGATION",
  ATTACHMENT_ROUTE_STATIC: "ATTACHMENT_ROUTE_STATIC",
  CORE_NETWORK_CONFIGURATION: "CORE_NETWORK_CONFIGURATION",
  CORE_NETWORK_EDGE: "CORE_NETWORK_EDGE",
  CORE_NETWORK_SEGMENT: "CORE_NETWORK_SEGMENT",
  NETWORK_FUNCTION_GROUP: "NETWORK_FUNCTION_GROUP",
  SEGMENTS_CONFIGURATION: "SEGMENTS_CONFIGURATION",
  SEGMENT_ACTIONS_CONFIGURATION: "SEGMENT_ACTIONS_CONFIGURATION",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const TunnelProtocol = {
  GRE: "GRE",
  NO_ENCAP: "NO_ENCAP",
} as const;
/**
 * @public
 */
export type TunnelProtocol = (typeof TunnelProtocol)[keyof typeof TunnelProtocol];

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;
/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  DOWN: "DOWN",
  UP: "UP",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  BGP: "BGP",
  IPSEC: "IPSEC",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ConnectPeerErrorCode = {
  EDGE_LOCATION_NO_FREE_IPS: "EDGE_LOCATION_NO_FREE_IPS",
  EDGE_LOCATION_PEER_DUPLICATE: "EDGE_LOCATION_PEER_DUPLICATE",
  INVALID_INSIDE_CIDR_BLOCK: "INVALID_INSIDE_CIDR_BLOCK",
  IP_OUTSIDE_SUBNET_CIDR_RANGE: "IP_OUTSIDE_SUBNET_CIDR_RANGE",
  NO_ASSOCIATED_CIDR_BLOCK: "NO_ASSOCIATED_CIDR_BLOCK",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ConnectPeerErrorCode = (typeof ConnectPeerErrorCode)[keyof typeof ConnectPeerErrorCode];

/**
 * @public
 * @enum
 */
export const ConnectPeerState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ConnectPeerState = (typeof ConnectPeerState)[keyof typeof ConnectPeerState];

/**
 * @public
 * @enum
 */
export const CoreNetworkState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CoreNetworkState = (typeof CoreNetworkState)[keyof typeof CoreNetworkState];

/**
 * @public
 * @enum
 */
export const SegmentActionServiceInsertion = {
  SEND_TO: "send-to",
  SEND_VIA: "send-via",
} as const;
/**
 * @public
 */
export type SegmentActionServiceInsertion =
  (typeof SegmentActionServiceInsertion)[keyof typeof SegmentActionServiceInsertion];

/**
 * @public
 * @enum
 */
export const SendViaMode = {
  DUAL_HOP: "dual-hop",
  SINGLE_HOP: "single-hop",
} as const;
/**
 * @public
 */
export type SendViaMode = (typeof SendViaMode)[keyof typeof SendViaMode];

/**
 * @public
 * @enum
 */
export const CoreNetworkPolicyAlias = {
  LATEST: "LATEST",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type CoreNetworkPolicyAlias = (typeof CoreNetworkPolicyAlias)[keyof typeof CoreNetworkPolicyAlias];

/**
 * @public
 * @enum
 */
export const DeviceState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;
/**
 * @public
 */
export type DeviceState = (typeof DeviceState)[keyof typeof DeviceState];

/**
 * @public
 * @enum
 */
export const GlobalNetworkState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;
/**
 * @public
 */
export type GlobalNetworkState = (typeof GlobalNetworkState)[keyof typeof GlobalNetworkState];

/**
 * @public
 * @enum
 */
export const LinkState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;
/**
 * @public
 */
export type LinkState = (typeof LinkState)[keyof typeof LinkState];

/**
 * @public
 * @enum
 */
export const SiteState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;
/**
 * @public
 */
export type SiteState = (typeof SiteState)[keyof typeof SiteState];

/**
 * @public
 * @enum
 */
export const PeeringErrorCode = {
  EDGE_LOCATION_PEER_DUPLICATE: "EDGE_LOCATION_PEER_DUPLICATE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_TRANSIT_GATEWAY_STATE: "INVALID_TRANSIT_GATEWAY_STATE",
  MISSING_REQUIRED_PERMISSIONS: "MISSING_PERMISSIONS",
  TRANSIT_GATEWAY_NOT_FOUND: "TRANSIT_GATEWAY_NOT_FOUND",
  TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED: "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type PeeringErrorCode = (typeof PeeringErrorCode)[keyof typeof PeeringErrorCode];

/**
 * @public
 * @enum
 */
export const PeeringType = {
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
} as const;
/**
 * @public
 */
export type PeeringType = (typeof PeeringType)[keyof typeof PeeringType];

/**
 * @public
 * @enum
 */
export const PeeringState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type PeeringState = (typeof PeeringState)[keyof typeof PeeringState];

/**
 * @public
 * @enum
 */
export const TransitGatewayRegistrationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  failed: "FAILED",
  pending: "PENDING",
} as const;
/**
 * @public
 */
export type TransitGatewayRegistrationState =
  (typeof TransitGatewayRegistrationState)[keyof typeof TransitGatewayRegistrationState];

/**
 * @public
 * @enum
 */
export const RouteState = {
  ACTIVE: "ACTIVE",
  BLACKHOLE: "BLACKHOLE",
} as const;
/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * @public
 * @enum
 */
export const RouteType = {
  PROPAGATED: "PROPAGATED",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

/**
 * @public
 * @enum
 */
export const RouteTableType = {
  CORE_NETWORK_SEGMENT: "CORE_NETWORK_SEGMENT",
  NETWORK_FUNCTION_GROUP: "NETWORK_FUNCTION_GROUP",
  TRANSIT_GATEWAY_ROUTE_TABLE: "TRANSIT_GATEWAY_ROUTE_TABLE",
} as const;
/**
 * @public
 */
export type RouteTableType = (typeof RouteTableType)[keyof typeof RouteTableType];

/**
 * @public
 * @enum
 */
export const RouteAnalysisCompletionReasonCode = {
  BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND: "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND",
  CYCLIC_PATH_DETECTED: "CYCLIC_PATH_DETECTED",
  INACTIVE_ROUTE_FOR_DESTINATION_FOUND: "INACTIVE_ROUTE_FOR_DESTINATION_FOUND",
  MAX_HOPS_EXCEEDED: "MAX_HOPS_EXCEEDED",
  NO_DESTINATION_ARN_PROVIDED: "NO_DESTINATION_ARN_PROVIDED",
  POSSIBLE_MIDDLEBOX: "POSSIBLE_MIDDLEBOX",
  ROUTE_NOT_FOUND: "ROUTE_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT: "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND: "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY: "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND: "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type RouteAnalysisCompletionReasonCode =
  (typeof RouteAnalysisCompletionReasonCode)[keyof typeof RouteAnalysisCompletionReasonCode];

/**
 * @public
 * @enum
 */
export const RouteAnalysisCompletionResultCode = {
  CONNECTED: "CONNECTED",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;
/**
 * @public
 */
export type RouteAnalysisCompletionResultCode =
  (typeof RouteAnalysisCompletionResultCode)[keyof typeof RouteAnalysisCompletionResultCode];

/**
 * @public
 * @enum
 */
export const RouteAnalysisStatus = {
  completed: "COMPLETED",
  failed: "FAILED",
  running: "RUNNING",
} as const;
/**
 * @public
 */
export type RouteAnalysisStatus = (typeof RouteAnalysisStatus)[keyof typeof RouteAnalysisStatus];

// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GatewayType = {
  TransitGateway: "transitGateway",
  VirtualPrivateGateway: "virtualPrivateGateway",
} as const;
/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAssociationState = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  updating: "updating",
} as const;
/**
 * @public
 */
export type DirectConnectGatewayAssociationState =
  (typeof DirectConnectGatewayAssociationState)[keyof typeof DirectConnectGatewayAssociationState];

/**
 * @public
 * @enum
 */
export const AddressFamily = {
  IPv4: "ipv4",
  IPv6: "ipv6",
} as const;
/**
 * @public
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  ordering: "ordering",
  pending: "pending",
  rejected: "rejected",
  requested: "requested",
  unknown: "unknown",
} as const;
/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const HasLogicalRedundancy = {
  No: "no",
  Unknown: "unknown",
  Yes: "yes",
} as const;
/**
 * @public
 */
export type HasLogicalRedundancy = (typeof HasLogicalRedundancy)[keyof typeof HasLogicalRedundancy];

/**
 * @public
 * @enum
 */
export const BGPPeerState = {
  Available: "available",
  Deleted: "deleted",
  Deleting: "deleting",
  Pending: "pending",
  Verifying: "verifying",
} as const;
/**
 * @public
 */
export type BGPPeerState = (typeof BGPPeerState)[keyof typeof BGPPeerState];

/**
 * @public
 * @enum
 */
export const BGPStatus = {
  Down: "down",
  Unknown: "unknown",
  Up: "up",
} as const;
/**
 * @public
 */
export type BGPStatus = (typeof BGPStatus)[keyof typeof BGPStatus];

/**
 * @public
 * @enum
 */
export const VirtualInterfaceState = {
  available: "available",
  confirming: "confirming",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  rejected: "rejected",
  testing: "testing",
  unknown: "unknown",
  verifying: "verifying",
} as const;
/**
 * @public
 */
export type VirtualInterfaceState = (typeof VirtualInterfaceState)[keyof typeof VirtualInterfaceState];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;
/**
 * @public
 */
export type DirectConnectGatewayState = (typeof DirectConnectGatewayState)[keyof typeof DirectConnectGatewayState];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAssociationProposalState = {
  accepted: "accepted",
  deleted: "deleted",
  requested: "requested",
} as const;
/**
 * @public
 */
export type DirectConnectGatewayAssociationProposalState =
  (typeof DirectConnectGatewayAssociationProposalState)[keyof typeof DirectConnectGatewayAssociationProposalState];

/**
 * @public
 * @enum
 */
export const InterconnectState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  requested: "requested",
  unknown: "unknown",
} as const;
/**
 * @public
 */
export type InterconnectState = (typeof InterconnectState)[keyof typeof InterconnectState];

/**
 * @public
 * @enum
 */
export const LagState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  requested: "requested",
  unknown: "unknown",
} as const;
/**
 * @public
 */
export type LagState = (typeof LagState)[keyof typeof LagState];

/**
 * @public
 * @enum
 */
export const LoaContentType = {
  PDF: "application/pdf",
} as const;
/**
 * @public
 */
export type LoaContentType = (typeof LoaContentType)[keyof typeof LoaContentType];

/**
 * @public
 * @enum
 */
export const NniPartnerType = {
  NonPartner: "nonPartner",
  V1: "v1",
  V2: "v2",
} as const;
/**
 * @public
 */
export type NniPartnerType = (typeof NniPartnerType)[keyof typeof NniPartnerType];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAttachmentState = {
  attached: "attached",
  attaching: "attaching",
  detached: "detached",
  detaching: "detaching",
} as const;
/**
 * @public
 */
export type DirectConnectGatewayAttachmentState =
  (typeof DirectConnectGatewayAttachmentState)[keyof typeof DirectConnectGatewayAttachmentState];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAttachmentType = {
  PrivateVirtualInterface: "PrivateVirtualInterface",
  TransitVirtualInterface: "TransitVirtualInterface",
} as const;
/**
 * @public
 */
export type DirectConnectGatewayAttachmentType =
  (typeof DirectConnectGatewayAttachmentType)[keyof typeof DirectConnectGatewayAttachmentType];

import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  __type?: "AcceptDirectConnectGatewayAssociationProposalRequest";
  /**
   * <p>The ID of the AWS account that owns the virtual private gateway or transit gateway.</p>
   */
  associatedGatewayOwnerAccount: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   */
  overrideAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>The ID of the request proposal.</p>
   */
  proposalId: string | undefined;
}

export namespace AcceptDirectConnectGatewayAssociationProposalRequest {
  export function isa(
    o: any
  ): o is AcceptDirectConnectGatewayAssociationProposalRequest {
    return __isa(o, "AcceptDirectConnectGatewayAssociationProposalRequest");
  }
}

export interface AcceptDirectConnectGatewayAssociationProposalResult {
  __type?: "AcceptDirectConnectGatewayAssociationProposalResult";
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace AcceptDirectConnectGatewayAssociationProposalResult {
  export function isa(
    o: any
  ): o is AcceptDirectConnectGatewayAssociationProposalResult {
    return __isa(o, "AcceptDirectConnectGatewayAssociationProposalResult");
  }
}

export enum AddressFamily {
  IPv4 = "ipv4",
  IPv6 = "ipv6"
}

export interface AllocateConnectionOnInterconnectRequest {
  __type?: "AllocateConnectionOnInterconnectRequest";
  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps,
   *       300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those AWS Direct Connect Partners
   *       who have met specific requirements
   *     are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the provisioned connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the interconnect on which the connection will be provisioned.</p>
   */
  interconnectId: string | undefined;

  /**
   * <p>The ID of the AWS account of the customer for whom the connection will be provisioned.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>The dedicated VLAN provisioned to the connection.</p>
   */
  vlan: number | undefined;
}

export namespace AllocateConnectionOnInterconnectRequest {
  export function isa(o: any): o is AllocateConnectionOnInterconnectRequest {
    return __isa(o, "AllocateConnectionOnInterconnectRequest");
  }
}

export interface AllocateHostedConnectionRequest {
  __type?: "AllocateHostedConnectionRequest";
  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those AWS Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection. </p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the hosted connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the AWS account ID of the customer for the connection.</p>
   */
  ownerAccount: string | undefined;

  /**
   * <p>The tags associated with the connection.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The dedicated VLAN provisioned to the hosted connection.</p>
   */
  vlan: number | undefined;
}

export namespace AllocateHostedConnectionRequest {
  export function isa(o: any): o is AllocateHostedConnectionRequest {
    return __isa(o, "AllocateHostedConnectionRequest");
  }
}

export interface AllocatePrivateVirtualInterfaceRequest {
  __type?: "AllocatePrivateVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection on which the private virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterfaceAllocation:
    | NewPrivateVirtualInterfaceAllocation
    | undefined;

  /**
   * <p>The ID of the AWS account that owns the virtual private interface.</p>
   */
  ownerAccount: string | undefined;
}

export namespace AllocatePrivateVirtualInterfaceRequest {
  export function isa(o: any): o is AllocatePrivateVirtualInterfaceRequest {
    return __isa(o, "AllocatePrivateVirtualInterfaceRequest");
  }
}

export interface AllocatePublicVirtualInterfaceRequest {
  __type?: "AllocatePublicVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection on which the public virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterfaceAllocation:
    | NewPublicVirtualInterfaceAllocation
    | undefined;

  /**
   * <p>The ID of the AWS account that owns the public virtual interface.</p>
   */
  ownerAccount: string | undefined;
}

export namespace AllocatePublicVirtualInterfaceRequest {
  export function isa(o: any): o is AllocatePublicVirtualInterfaceRequest {
    return __isa(o, "AllocatePublicVirtualInterfaceRequest");
  }
}

export interface AllocateTransitVirtualInterfaceRequest {
  __type?: "AllocateTransitVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection on which the transit virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterfaceAllocation:
    | NewTransitVirtualInterfaceAllocation
    | undefined;

  /**
   * <p>The ID of the AWS account that owns the transit virtual interface.</p>
   */
  ownerAccount: string | undefined;
}

export namespace AllocateTransitVirtualInterfaceRequest {
  export function isa(o: any): o is AllocateTransitVirtualInterfaceRequest {
    return __isa(o, "AllocateTransitVirtualInterfaceRequest");
  }
}

export interface AllocateTransitVirtualInterfaceResult {
  __type?: "AllocateTransitVirtualInterfaceResult";
  /**
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace AllocateTransitVirtualInterfaceResult {
  export function isa(o: any): o is AllocateTransitVirtualInterfaceResult {
    return __isa(o, "AllocateTransitVirtualInterfaceResult");
  }
}

export interface AssociateConnectionWithLagRequest {
  __type?: "AssociateConnectionWithLagRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG with which to associate the connection.</p>
   */
  lagId: string | undefined;
}

export namespace AssociateConnectionWithLagRequest {
  export function isa(o: any): o is AssociateConnectionWithLagRequest {
    return __isa(o, "AssociateConnectionWithLagRequest");
  }
}

export interface AssociateHostedConnectionRequest {
  __type?: "AssociateHostedConnectionRequest";
  /**
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the interconnect or the LAG.</p>
   */
  parentConnectionId: string | undefined;
}

export namespace AssociateHostedConnectionRequest {
  export function isa(o: any): o is AssociateHostedConnectionRequest {
    return __isa(o, "AssociateHostedConnectionRequest");
  }
}

export interface AssociateVirtualInterfaceRequest {
  __type?: "AssociateVirtualInterfaceRequest";
  /**
   * <p>The ID of the LAG or connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace AssociateVirtualInterfaceRequest {
  export function isa(o: any): o is AssociateVirtualInterfaceRequest {
    return __isa(o, "AssociateVirtualInterfaceRequest");
  }
}

/**
 * <p>Information about the associated gateway.</p>
 */
export interface AssociatedGateway {
  __type?: "AssociatedGateway";
  /**
   * <p>The ID of the associated gateway.</p>
   */
  id?: string;

  /**
   * <p>The ID of the AWS account that owns the associated virtual private gateway or transit gateway.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The Region where the associated gateway is located.</p>
   */
  region?: string;

  /**
   * <p>The type of associated gateway.</p>
   */
  type?: GatewayType | string;
}

export namespace AssociatedGateway {
  export function isa(o: any): o is AssociatedGateway {
    return __isa(o, "AssociatedGateway");
  }
}

/**
 * <p>Information about a BGP peer.</p>
 */
export interface BGPPeer {
  __type?: "BGPPeer";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The Direct Connect endpoint on which the BGP peer terminates.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;

  /**
   * <p>The state of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The BGP peer is created, and remains in this state until it is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The BGP peer is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>:  The BGP peer is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>:  The BGP peer is deleted and cannot be established.</p>
   *             </li>
   *          </ul>
   */
  bgpPeerState?: BGPPeerState | string;

  /**
   * <p>The status of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>up</code>: The BGP peer is established. This state does not indicate the
   *         state of the routing function. Ensure that you are receiving routes over the BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The BGP peer is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The BGP peer status is not available.</p>
   *             </li>
   *          </ul>
   */
  bgpStatus?: BGPStatus | string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;
}

export namespace BGPPeer {
  export function isa(o: any): o is BGPPeer {
    return __isa(o, "BGPPeer");
  }
}

export enum BGPPeerState {
  Available = "available",
  Deleted = "deleted",
  Deleting = "deleting",
  Pending = "pending",
  Verifying = "verifying"
}

export enum BGPStatus {
  Down = "down",
  Unknown = "unknown",
  Up = "up"
}

export interface ConfirmConnectionRequest {
  __type?: "ConfirmConnectionRequest";
  /**
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;
}

export namespace ConfirmConnectionRequest {
  export function isa(o: any): o is ConfirmConnectionRequest {
    return __isa(o, "ConfirmConnectionRequest");
  }
}

export interface ConfirmConnectionResponse {
  __type?: "ConfirmConnectionResponse";
  /**
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState | string;
}

export namespace ConfirmConnectionResponse {
  export function isa(o: any): o is ConfirmConnectionResponse {
    return __isa(o, "ConfirmConnectionResponse");
  }
}

export interface ConfirmPrivateVirtualInterfaceRequest {
  __type?: "ConfirmPrivateVirtualInterfaceRequest";
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace ConfirmPrivateVirtualInterfaceRequest {
  export function isa(o: any): o is ConfirmPrivateVirtualInterfaceRequest {
    return __isa(o, "ConfirmPrivateVirtualInterfaceRequest");
  }
}

export interface ConfirmPrivateVirtualInterfaceResponse {
  __type?: "ConfirmPrivateVirtualInterfaceResponse";
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmPrivateVirtualInterfaceResponse {
  export function isa(o: any): o is ConfirmPrivateVirtualInterfaceResponse {
    return __isa(o, "ConfirmPrivateVirtualInterfaceResponse");
  }
}

export interface ConfirmPublicVirtualInterfaceRequest {
  __type?: "ConfirmPublicVirtualInterfaceRequest";
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace ConfirmPublicVirtualInterfaceRequest {
  export function isa(o: any): o is ConfirmPublicVirtualInterfaceRequest {
    return __isa(o, "ConfirmPublicVirtualInterfaceRequest");
  }
}

export interface ConfirmPublicVirtualInterfaceResponse {
  __type?: "ConfirmPublicVirtualInterfaceResponse";
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmPublicVirtualInterfaceResponse {
  export function isa(o: any): o is ConfirmPublicVirtualInterfaceResponse {
    return __isa(o, "ConfirmPublicVirtualInterfaceResponse");
  }
}

export interface ConfirmTransitVirtualInterfaceRequest {
  __type?: "ConfirmTransitVirtualInterfaceRequest";
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace ConfirmTransitVirtualInterfaceRequest {
  export function isa(o: any): o is ConfirmTransitVirtualInterfaceRequest {
    return __isa(o, "ConfirmTransitVirtualInterfaceRequest");
  }
}

export interface ConfirmTransitVirtualInterfaceResponse {
  __type?: "ConfirmTransitVirtualInterfaceResponse";
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace ConfirmTransitVirtualInterfaceResponse {
  export function isa(o: any): o is ConfirmTransitVirtualInterfaceResponse {
    return __isa(o, "ConfirmTransitVirtualInterfaceResponse");
  }
}

/**
 * <p>Information about an AWS Direct Connect connection.</p>
 */
export interface Connection {
  __type?: "Connection";
  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The name of the connection.</p>
   */
  connectionName?: string;

  /**
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState | string;

  /**
   * <p>Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The ID of the AWS account that owns the connection.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The name of the AWS Direct Connect service provider associated with the connection.</p>
   */
  partnerName?: string;

  /**
   * <p>The name of the service provider associated with the connection.</p>
   */
  providerName?: string;

  /**
   * <p>The AWS Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The tags associated with the connection.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;
}

export namespace Connection {
  export function isa(o: any): o is Connection {
    return __isa(o, "Connection");
  }
}

export type ConnectionState =
  | "available"
  | "deleted"
  | "deleting"
  | "down"
  | "ordering"
  | "pending"
  | "rejected"
  | "requested"
  | "unknown";

export interface Connections {
  __type?: "Connections";
  /**
   * <p>The connections.</p>
   */
  connections?: Array<Connection>;
}

export namespace Connections {
  export function isa(o: any): o is Connections {
    return __isa(o, "Connections");
  }
}

export interface CreateBGPPeerRequest {
  __type?: "CreateBGPPeerRequest";
  /**
   * <p>Information about the BGP peer.</p>
   */
  newBGPPeer?: NewBGPPeer;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

export namespace CreateBGPPeerRequest {
  export function isa(o: any): o is CreateBGPPeerRequest {
    return __isa(o, "CreateBGPPeerRequest");
  }
}

export interface CreateBGPPeerResponse {
  __type?: "CreateBGPPeerResponse";
  /**
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace CreateBGPPeerResponse {
  export function isa(o: any): o is CreateBGPPeerResponse {
    return __isa(o, "CreateBGPPeerResponse");
  }
}

export interface CreateConnectionRequest {
  __type?: "CreateConnectionRequest";
  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the connection.</p>
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The location of the connection.</p>
   */
  location: string | undefined;

  /**
   * <p>The name of the service provider associated with the requested connection.</p>
   */
  providerName?: string;

  /**
   * <p>The tags to associate with the lag.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateConnectionRequest {
  export function isa(o: any): o is CreateConnectionRequest {
    return __isa(o, "CreateConnectionRequest");
  }
}

export interface CreateDirectConnectGatewayAssociationProposalRequest {
  __type?: "CreateDirectConnectGatewayAssociationProposalRequest";
  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the AWS account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}

export namespace CreateDirectConnectGatewayAssociationProposalRequest {
  export function isa(
    o: any
  ): o is CreateDirectConnectGatewayAssociationProposalRequest {
    return __isa(o, "CreateDirectConnectGatewayAssociationProposalRequest");
  }
}

export interface CreateDirectConnectGatewayAssociationProposalResult {
  __type?: "CreateDirectConnectGatewayAssociationProposalResult";
  /**
   * <p>Information about the Direct Connect gateway proposal.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

export namespace CreateDirectConnectGatewayAssociationProposalResult {
  export function isa(
    o: any
  ): o is CreateDirectConnectGatewayAssociationProposalResult {
    return __isa(o, "CreateDirectConnectGatewayAssociationProposalResult");
  }
}

export interface CreateDirectConnectGatewayAssociationRequest {
  __type?: "CreateDirectConnectGatewayAssociationRequest";
  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway</p>
   *          <p>This parameter is required when you create an association to a transit gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace CreateDirectConnectGatewayAssociationRequest {
  export function isa(
    o: any
  ): o is CreateDirectConnectGatewayAssociationRequest {
    return __isa(o, "CreateDirectConnectGatewayAssociationRequest");
  }
}

export interface CreateDirectConnectGatewayAssociationResult {
  __type?: "CreateDirectConnectGatewayAssociationResult";
  /**
   * <p>The association to be created.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace CreateDirectConnectGatewayAssociationResult {
  export function isa(
    o: any
  ): o is CreateDirectConnectGatewayAssociationResult {
    return __isa(o, "CreateDirectConnectGatewayAssociationResult");
  }
}

export interface CreateDirectConnectGatewayRequest {
  __type?: "CreateDirectConnectGatewayRequest";
  /**
   * <p>The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured
   *       on the Amazon side of the connection. The ASN must be in the private range of 64,512 to
   *       65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.</p>
   */
  amazonSideAsn?: number;

  /**
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName: string | undefined;
}

export namespace CreateDirectConnectGatewayRequest {
  export function isa(o: any): o is CreateDirectConnectGatewayRequest {
    return __isa(o, "CreateDirectConnectGatewayRequest");
  }
}

export interface CreateDirectConnectGatewayResult {
  __type?: "CreateDirectConnectGatewayResult";
  /**
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

export namespace CreateDirectConnectGatewayResult {
  export function isa(o: any): o is CreateDirectConnectGatewayResult {
    return __isa(o, "CreateDirectConnectGatewayResult");
  }
}

export interface CreateInterconnectRequest {
  __type?: "CreateInterconnectRequest";
  /**
   * <p>The port bandwidth, in Gbps. The possible values are 1 and 10.</p>
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the interconnect.</p>
   */
  interconnectName: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The location of the interconnect.</p>
   */
  location: string | undefined;

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;

  /**
   * <p>The tags to associate with the interconnect.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateInterconnectRequest {
  export function isa(o: any): o is CreateInterconnectRequest {
    return __isa(o, "CreateInterconnectRequest");
  }
}

export interface CreateLagRequest {
  __type?: "CreateLagRequest";
  /**
   * <p>The tags to associate with the automtically created LAGs.</p>
   */
  childConnectionTags?: Array<Tag>;

  /**
   * <p>The ID of an existing connection to migrate to the LAG.</p>
   */
  connectionId?: string;

  /**
   * <p>The bandwidth of the individual physical connections bundled by the LAG. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. </p>
   */
  connectionsBandwidth: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName: string | undefined;

  /**
   * <p>The location for the LAG.</p>
   */
  location: string | undefined;

  /**
   * <p>The number of physical connections initially provisioned and bundled by the LAG.</p>
   */
  numberOfConnections: number | undefined;

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * <p>The tags to associate with the LAG.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateLagRequest {
  export function isa(o: any): o is CreateLagRequest {
    return __isa(o, "CreateLagRequest");
  }
}

export interface CreatePrivateVirtualInterfaceRequest {
  __type?: "CreatePrivateVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterface: NewPrivateVirtualInterface | undefined;
}

export namespace CreatePrivateVirtualInterfaceRequest {
  export function isa(o: any): o is CreatePrivateVirtualInterfaceRequest {
    return __isa(o, "CreatePrivateVirtualInterfaceRequest");
  }
}

export interface CreatePublicVirtualInterfaceRequest {
  __type?: "CreatePublicVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterface: NewPublicVirtualInterface | undefined;
}

export namespace CreatePublicVirtualInterfaceRequest {
  export function isa(o: any): o is CreatePublicVirtualInterfaceRequest {
    return __isa(o, "CreatePublicVirtualInterfaceRequest");
  }
}

export interface CreateTransitVirtualInterfaceRequest {
  __type?: "CreateTransitVirtualInterfaceRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterface: NewTransitVirtualInterface | undefined;
}

export namespace CreateTransitVirtualInterfaceRequest {
  export function isa(o: any): o is CreateTransitVirtualInterfaceRequest {
    return __isa(o, "CreateTransitVirtualInterfaceRequest");
  }
}

export interface CreateTransitVirtualInterfaceResult {
  __type?: "CreateTransitVirtualInterfaceResult";
  /**
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace CreateTransitVirtualInterfaceResult {
  export function isa(o: any): o is CreateTransitVirtualInterfaceResult {
    return __isa(o, "CreateTransitVirtualInterfaceResult");
  }
}

export interface DeleteBGPPeerRequest {
  __type?: "DeleteBGPPeerRequest";
  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

export namespace DeleteBGPPeerRequest {
  export function isa(o: any): o is DeleteBGPPeerRequest {
    return __isa(o, "DeleteBGPPeerRequest");
  }
}

export interface DeleteBGPPeerResponse {
  __type?: "DeleteBGPPeerResponse";
  /**
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

export namespace DeleteBGPPeerResponse {
  export function isa(o: any): o is DeleteBGPPeerResponse {
    return __isa(o, "DeleteBGPPeerResponse");
  }
}

export interface DeleteConnectionRequest {
  __type?: "DeleteConnectionRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  export function isa(o: any): o is DeleteConnectionRequest {
    return __isa(o, "DeleteConnectionRequest");
  }
}

export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  __type?: "DeleteDirectConnectGatewayAssociationProposalRequest";
  /**
   * <p>The ID of the proposal.</p>
   */
  proposalId: string | undefined;
}

export namespace DeleteDirectConnectGatewayAssociationProposalRequest {
  export function isa(
    o: any
  ): o is DeleteDirectConnectGatewayAssociationProposalRequest {
    return __isa(o, "DeleteDirectConnectGatewayAssociationProposalRequest");
  }
}

export interface DeleteDirectConnectGatewayAssociationProposalResult {
  __type?: "DeleteDirectConnectGatewayAssociationProposalResult";
  /**
   * <p>The ID of the associated gateway.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

export namespace DeleteDirectConnectGatewayAssociationProposalResult {
  export function isa(
    o: any
  ): o is DeleteDirectConnectGatewayAssociationProposalResult {
    return __isa(o, "DeleteDirectConnectGatewayAssociationProposalResult");
  }
}

export interface DeleteDirectConnectGatewayAssociationRequest {
  __type?: "DeleteDirectConnectGatewayAssociationRequest";
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace DeleteDirectConnectGatewayAssociationRequest {
  export function isa(
    o: any
  ): o is DeleteDirectConnectGatewayAssociationRequest {
    return __isa(o, "DeleteDirectConnectGatewayAssociationRequest");
  }
}

export interface DeleteDirectConnectGatewayAssociationResult {
  __type?: "DeleteDirectConnectGatewayAssociationResult";
  /**
   * <p>Information about the deleted association.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace DeleteDirectConnectGatewayAssociationResult {
  export function isa(
    o: any
  ): o is DeleteDirectConnectGatewayAssociationResult {
    return __isa(o, "DeleteDirectConnectGatewayAssociationResult");
  }
}

export interface DeleteDirectConnectGatewayRequest {
  __type?: "DeleteDirectConnectGatewayRequest";
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;
}

export namespace DeleteDirectConnectGatewayRequest {
  export function isa(o: any): o is DeleteDirectConnectGatewayRequest {
    return __isa(o, "DeleteDirectConnectGatewayRequest");
  }
}

export interface DeleteDirectConnectGatewayResult {
  __type?: "DeleteDirectConnectGatewayResult";
  /**
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

export namespace DeleteDirectConnectGatewayResult {
  export function isa(o: any): o is DeleteDirectConnectGatewayResult {
    return __isa(o, "DeleteDirectConnectGatewayResult");
  }
}

export interface DeleteInterconnectRequest {
  __type?: "DeleteInterconnectRequest";
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

export namespace DeleteInterconnectRequest {
  export function isa(o: any): o is DeleteInterconnectRequest {
    return __isa(o, "DeleteInterconnectRequest");
  }
}

export interface DeleteInterconnectResponse {
  __type?: "DeleteInterconnectResponse";
  /**
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState | string;
}

export namespace DeleteInterconnectResponse {
  export function isa(o: any): o is DeleteInterconnectResponse {
    return __isa(o, "DeleteInterconnectResponse");
  }
}

export interface DeleteLagRequest {
  __type?: "DeleteLagRequest";
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

export namespace DeleteLagRequest {
  export function isa(o: any): o is DeleteLagRequest {
    return __isa(o, "DeleteLagRequest");
  }
}

export interface DeleteVirtualInterfaceRequest {
  __type?: "DeleteVirtualInterfaceRequest";
  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace DeleteVirtualInterfaceRequest {
  export function isa(o: any): o is DeleteVirtualInterfaceRequest {
    return __isa(o, "DeleteVirtualInterfaceRequest");
  }
}

export interface DeleteVirtualInterfaceResponse {
  __type?: "DeleteVirtualInterfaceResponse";
  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;
}

export namespace DeleteVirtualInterfaceResponse {
  export function isa(o: any): o is DeleteVirtualInterfaceResponse {
    return __isa(o, "DeleteVirtualInterfaceResponse");
  }
}

export interface DescribeConnectionLoaRequest {
  __type?: "DescribeConnectionLoaRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;

  /**
   * <p>The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter,
   *       the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;
}

export namespace DescribeConnectionLoaRequest {
  export function isa(o: any): o is DescribeConnectionLoaRequest {
    return __isa(o, "DescribeConnectionLoaRequest");
  }
}

export interface DescribeConnectionLoaResponse {
  __type?: "DescribeConnectionLoaResponse";
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

export namespace DescribeConnectionLoaResponse {
  export function isa(o: any): o is DescribeConnectionLoaResponse {
    return __isa(o, "DescribeConnectionLoaResponse");
  }
}

export interface DescribeConnectionsOnInterconnectRequest {
  __type?: "DescribeConnectionsOnInterconnectRequest";
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

export namespace DescribeConnectionsOnInterconnectRequest {
  export function isa(o: any): o is DescribeConnectionsOnInterconnectRequest {
    return __isa(o, "DescribeConnectionsOnInterconnectRequest");
  }
}

export interface DescribeConnectionsRequest {
  __type?: "DescribeConnectionsRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;
}

export namespace DescribeConnectionsRequest {
  export function isa(o: any): o is DescribeConnectionsRequest {
    return __isa(o, "DescribeConnectionsRequest");
  }
}

export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  __type?: "DescribeDirectConnectGatewayAssociationProposalsRequest";
  /**
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the proposal.</p>
   */
  proposalId?: string;
}

export namespace DescribeDirectConnectGatewayAssociationProposalsRequest {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAssociationProposalsRequest {
    return __isa(o, "DescribeDirectConnectGatewayAssociationProposalsRequest");
  }
}

export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  __type?: "DescribeDirectConnectGatewayAssociationProposalsResult";
  /**
   * <p>Describes the Direct Connect gateway association proposals.</p>
   */
  directConnectGatewayAssociationProposals?: Array<
    DirectConnectGatewayAssociationProposal
  >;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAssociationProposalsResult {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAssociationProposalsResult {
    return __isa(o, "DescribeDirectConnectGatewayAssociationProposalsResult");
  }
}

export interface DescribeDirectConnectGatewayAssociationsRequest {
  __type?: "DescribeDirectConnectGatewayAssociationsRequest";
  /**
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

export namespace DescribeDirectConnectGatewayAssociationsRequest {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAssociationsRequest {
    return __isa(o, "DescribeDirectConnectGatewayAssociationsRequest");
  }
}

export interface DescribeDirectConnectGatewayAssociationsResult {
  __type?: "DescribeDirectConnectGatewayAssociationsResult";
  /**
   * <p>Information about the associations.</p>
   */
  directConnectGatewayAssociations?: Array<DirectConnectGatewayAssociation>;

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAssociationsResult {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAssociationsResult {
    return __isa(o, "DescribeDirectConnectGatewayAssociationsResult");
  }
}

export interface DescribeDirectConnectGatewayAttachmentsRequest {
  __type?: "DescribeDirectConnectGatewayAttachmentsRequest";
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

export namespace DescribeDirectConnectGatewayAttachmentsRequest {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAttachmentsRequest {
    return __isa(o, "DescribeDirectConnectGatewayAttachmentsRequest");
  }
}

export interface DescribeDirectConnectGatewayAttachmentsResult {
  __type?: "DescribeDirectConnectGatewayAttachmentsResult";
  /**
   * <p>The attachments.</p>
   */
  directConnectGatewayAttachments?: Array<DirectConnectGatewayAttachment>;

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewayAttachmentsResult {
  export function isa(
    o: any
  ): o is DescribeDirectConnectGatewayAttachmentsResult {
    return __isa(o, "DescribeDirectConnectGatewayAttachmentsResult");
  }
}

export interface DescribeDirectConnectGatewaysRequest {
  __type?: "DescribeDirectConnectGatewaysRequest";
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 	        <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewaysRequest {
  export function isa(o: any): o is DescribeDirectConnectGatewaysRequest {
    return __isa(o, "DescribeDirectConnectGatewaysRequest");
  }
}

export interface DescribeDirectConnectGatewaysResult {
  __type?: "DescribeDirectConnectGatewaysResult";
  /**
   * <p>The Direct Connect gateways.</p>
   */
  directConnectGateways?: Array<DirectConnectGateway>;

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export namespace DescribeDirectConnectGatewaysResult {
  export function isa(o: any): o is DescribeDirectConnectGatewaysResult {
    return __isa(o, "DescribeDirectConnectGatewaysResult");
  }
}

export interface DescribeHostedConnectionsRequest {
  __type?: "DescribeHostedConnectionsRequest";
  /**
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;
}

export namespace DescribeHostedConnectionsRequest {
  export function isa(o: any): o is DescribeHostedConnectionsRequest {
    return __isa(o, "DescribeHostedConnectionsRequest");
  }
}

export interface DescribeInterconnectLoaRequest {
  __type?: "DescribeInterconnectLoaRequest";
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;
}

export namespace DescribeInterconnectLoaRequest {
  export function isa(o: any): o is DescribeInterconnectLoaRequest {
    return __isa(o, "DescribeInterconnectLoaRequest");
  }
}

export interface DescribeInterconnectLoaResponse {
  __type?: "DescribeInterconnectLoaResponse";
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

export namespace DescribeInterconnectLoaResponse {
  export function isa(o: any): o is DescribeInterconnectLoaResponse {
    return __isa(o, "DescribeInterconnectLoaResponse");
  }
}

export interface DescribeInterconnectsRequest {
  __type?: "DescribeInterconnectsRequest";
  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;
}

export namespace DescribeInterconnectsRequest {
  export function isa(o: any): o is DescribeInterconnectsRequest {
    return __isa(o, "DescribeInterconnectsRequest");
  }
}

export interface DescribeLagsRequest {
  __type?: "DescribeLagsRequest";
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;
}

export namespace DescribeLagsRequest {
  export function isa(o: any): o is DescribeLagsRequest {
    return __isa(o, "DescribeLagsRequest");
  }
}

export interface DescribeLoaRequest {
  __type?: "DescribeLoaRequest";
  /**
   * <p>The ID of a connection, LAG, or interconnect.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the
   *       LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;
}

export namespace DescribeLoaRequest {
  export function isa(o: any): o is DescribeLoaRequest {
    return __isa(o, "DescribeLoaRequest");
  }
}

export interface DescribeTagsRequest {
  __type?: "DescribeTagsRequest";
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns: Array<string> | undefined;
}

export namespace DescribeTagsRequest {
  export function isa(o: any): o is DescribeTagsRequest {
    return __isa(o, "DescribeTagsRequest");
  }
}

export interface DescribeTagsResponse {
  __type?: "DescribeTagsResponse";
  /**
   * <p>Information about the tags.</p>
   */
  resourceTags?: Array<ResourceTag>;
}

export namespace DescribeTagsResponse {
  export function isa(o: any): o is DescribeTagsResponse {
    return __isa(o, "DescribeTagsResponse");
  }
}

export interface DescribeVirtualInterfacesRequest {
  __type?: "DescribeVirtualInterfacesRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

export namespace DescribeVirtualInterfacesRequest {
  export function isa(o: any): o is DescribeVirtualInterfacesRequest {
    return __isa(o, "DescribeVirtualInterfacesRequest");
  }
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface DirectConnectClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectConnectClientException";
  $fault: "client";
  message?: string;
}

export namespace DirectConnectClientException {
  export function isa(o: any): o is DirectConnectClientException {
    return __isa(o, "DirectConnectClientException");
  }
}

/**
 * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
 */
export interface DirectConnectGateway {
  __type?: "DirectConnectGateway";
  /**
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName?: string;

  /**
   * <p>The state of the Direct Connect gateway. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The Direct Connect gateway is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The Direct Connect gateway is deleted and cannot pass traffic.</p>
   *             </li>
   *          </ul>
   */
  directConnectGatewayState?: DirectConnectGatewayState | string;

  /**
   * <p>The ID of the AWS account that owns the Direct Connect gateway.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

export namespace DirectConnectGateway {
  export function isa(o: any): o is DirectConnectGateway {
    return __isa(o, "DirectConnectGateway");
  }
}

/**
 * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
 */
export interface DirectConnectGatewayAssociation {
  __type?: "DirectConnectGatewayAssociation";
  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  allowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The state of the association. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.</p>
   *             </li>
   *          </ul>
   */
  associationState?: DirectConnectGatewayAssociationState | string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the associated gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the virtual private gateway.</p>
   */
  virtualGatewayOwnerAccount?: string;

  /**
   * <p>The AWS Region where the virtual private gateway is located.</p>
   */
  virtualGatewayRegion?: string;
}

export namespace DirectConnectGatewayAssociation {
  export function isa(o: any): o is DirectConnectGatewayAssociation {
    return __isa(o, "DirectConnectGatewayAssociation");
  }
}

/**
 * <p>Information about the  proposal request to attach a virtual private gateway to a Direct Connect gateway. </p>
 */
export interface DirectConnectGatewayAssociationProposal {
  __type?: "DirectConnectGatewayAssociationProposal";
  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   */
  existingAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>The ID of the association proposal.</p>
   */
  proposalId?: string;

  /**
   * <p>The state of the proposal. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>accepted</code>: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The proposal has been deleted by the owner that made the proposal.  The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *          </ul>
   */
  proposalState?: DirectConnectGatewayAssociationProposalState | string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  requestedAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}

export namespace DirectConnectGatewayAssociationProposal {
  export function isa(o: any): o is DirectConnectGatewayAssociationProposal {
    return __isa(o, "DirectConnectGatewayAssociationProposal");
  }
}

export type DirectConnectGatewayAssociationProposalState =
  | "accepted"
  | "deleted"
  | "requested";

export type DirectConnectGatewayAssociationState =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "updating";

/**
 * <p>Information about an attachment between a Direct Connect gateway and a virtual interface.</p>
 */
export interface DirectConnectGatewayAttachment {
  __type?: "DirectConnectGatewayAttachment";
  /**
   * <p>The state of the attachment. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attaching</code>: The initial state after a virtual interface is created using the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attached</code>: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detaching</code>: The initial state after calling <a>DeleteVirtualInterface</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detached</code>: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.</p>
   *             </li>
   *          </ul>
   */
  attachmentState?: DirectConnectGatewayAttachmentState | string;

  /**
   * <p>The type of attachment.</p>
   */
  attachmentType?: DirectConnectGatewayAttachmentType | string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The ID of the AWS account that owns the virtual interface.</p>
   */
  virtualInterfaceOwnerAccount?: string;

  /**
   * <p>The AWS Region where the virtual interface is located.</p>
   */
  virtualInterfaceRegion?: string;
}

export namespace DirectConnectGatewayAttachment {
  export function isa(o: any): o is DirectConnectGatewayAttachment {
    return __isa(o, "DirectConnectGatewayAttachment");
  }
}

export type DirectConnectGatewayAttachmentState =
  | "attached"
  | "attaching"
  | "detached"
  | "detaching";

export type DirectConnectGatewayAttachmentType =
  | "PrivateVirtualInterface"
  | "TransitVirtualInterface";

export type DirectConnectGatewayState =
  | "available"
  | "deleted"
  | "deleting"
  | "pending";

/**
 * <p>A server-side error occurred.</p>
 */
export interface DirectConnectServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectConnectServerException";
  $fault: "client";
  message?: string;
}

export namespace DirectConnectServerException {
  export function isa(o: any): o is DirectConnectServerException {
    return __isa(o, "DirectConnectServerException");
  }
}

export interface DisassociateConnectionFromLagRequest {
  __type?: "DisassociateConnectionFromLagRequest";
  /**
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

export namespace DisassociateConnectionFromLagRequest {
  export function isa(o: any): o is DisassociateConnectionFromLagRequest {
    return __isa(o, "DisassociateConnectionFromLagRequest");
  }
}

/**
 * <p>A tag key was specified more than once.</p>
 */
export interface DuplicateTagKeysException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateTagKeysException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateTagKeysException {
  export function isa(o: any): o is DuplicateTagKeysException {
    return __isa(o, "DuplicateTagKeysException");
  }
}

export enum GatewayType {
  TransitGateway = "transitGateway",
  VirtualPrivateGateway = "virtualPrivateGateway"
}

export enum HasLogicalRedundancy {
  No = "no",
  Unknown = "unknown",
  Yes = "yes"
}

/**
 * <p>Information about an interconnect.</p>
 */
export interface Interconnect {
  __type?: "Interconnect";
  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * <p>Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;

  /**
   * <p>The name of the interconnect.</p>
   */
  interconnectName?: string;

  /**
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState | string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;

  /**
   * <p>The AWS Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The tags associated with the interconnect.</p>
   */
  tags?: Array<Tag>;
}

export namespace Interconnect {
  export function isa(o: any): o is Interconnect {
    return __isa(o, "Interconnect");
  }
}

export type InterconnectState =
  | "available"
  | "deleted"
  | "deleting"
  | "down"
  | "pending"
  | "requested"
  | "unknown";

export interface Interconnects {
  __type?: "Interconnects";
  /**
   * <p>The interconnects.</p>
   */
  interconnects?: Array<Interconnect>;
}

export namespace Interconnects {
  export function isa(o: any): o is Interconnects {
    return __isa(o, "Interconnects");
  }
}

/**
 * <p>Information about a link aggregation group (LAG).</p>
 */
export interface Lag {
  __type?: "Lag";
  /**
   * <p>Indicates whether the LAG can host other connections.</p>
   */
  allowsHostedConnections?: boolean;

  /**
   * <p>The AWS Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDevice?: string;

  /**
   * <p>The AWS Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The connections bundled by the LAG.</p>
   */
  connections?: Array<Connection>;

  /**
   * <p>The individual bandwidth of the physical connections bundled by the LAG. The possible
   *       values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth?: string;

  /**
   * <p>Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * <p>The state of the LAG. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a LAG. The LAG stays in the
   *                 requested state until the Letter of Authorization (LOA) is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The LAG has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is established and the LAG is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The LAG is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The LAG is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the LAG is not available.</p>
   *             </li>
   *          </ul>
   */
  lagState?: LagState | string;

  /**
   * <p>The location of the LAG.</p>
   */
  location?: string;

  /**
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * <p>The number of physical connections bundled by the LAG, up to a maximum of 10.</p>
   */
  numberOfConnections?: number;

  /**
   * <p>The ID of the AWS account that owns the LAG.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * <p>The AWS Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The tags associated with the LAG.</p>
   */
  tags?: Array<Tag>;
}

export namespace Lag {
  export function isa(o: any): o is Lag {
    return __isa(o, "Lag");
  }
}

export type LagState =
  | "available"
  | "deleted"
  | "deleting"
  | "down"
  | "pending"
  | "requested"
  | "unknown";

export interface Lags {
  __type?: "Lags";
  /**
   * <p>The LAGs.</p>
   */
  lags?: Array<Lag>;
}

export namespace Lags {
  export function isa(o: any): o is Lags {
    return __isa(o, "Lags");
  }
}

/**
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 */
export interface Loa {
  __type?: "Loa";
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: Uint8Array;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType | string;
}

export namespace Loa {
  export function isa(o: any): o is Loa {
    return __isa(o, "Loa");
  }
}

export enum LoaContentType {
  PDF = "application/pdf"
}

/**
 * <p>Information about an AWS Direct Connect location.</p>
 */
export interface Location {
  __type?: "Location";
  /**
   * <p>The available port speeds for the location.</p>
   */
  availablePortSpeeds?: Array<string>;

  /**
   * <p>The name of the service provider for the location.</p>
   */
  availableProviders?: Array<string>;

  /**
   * <p>The code for the location.</p>
   */
  locationCode?: string;

  /**
   * <p>The name of the location. This includes the name of the colocation partner and the physical site of the building.</p>
   */
  locationName?: string;

  /**
   * <p>The AWS Region for the location.</p>
   */
  region?: string;
}

export namespace Location {
  export function isa(o: any): o is Location {
    return __isa(o, "Location");
  }
}

export interface Locations {
  __type?: "Locations";
  /**
   * <p>The locations.</p>
   */
  locations?: Array<Location>;
}

export namespace Locations {
  export function isa(o: any): o is Locations {
    return __isa(o, "Locations");
  }
}

/**
 * <p>Information about a new BGP peer.</p>
 */
export interface NewBGPPeer {
  __type?: "NewBGPPeer";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;
}

export namespace NewBGPPeer {
  export function isa(o: any): o is NewBGPPeer {
    return __isa(o, "NewBGPPeer");
  }
}

/**
 * <p>Information about a private virtual interface.</p>
 */
export interface NewPrivateVirtualInterface {
  __type?: "NewPrivateVirtualInterface";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;
}

export namespace NewPrivateVirtualInterface {
  export function isa(o: any): o is NewPrivateVirtualInterface {
    return __isa(o, "NewPrivateVirtualInterface");
  }
}

/**
 * <p>Information about a private virtual interface to be provisioned on a connection.</p>
 */
export interface NewPrivateVirtualInterfaceAllocation {
  __type?: "NewPrivateVirtualInterfaceAllocation";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;
}

export namespace NewPrivateVirtualInterfaceAllocation {
  export function isa(o: any): o is NewPrivateVirtualInterfaceAllocation {
    return __isa(o, "NewPrivateVirtualInterfaceAllocation");
  }
}

/**
 * <p>Information about a public virtual interface.</p>
 */
export interface NewPublicVirtualInterface {
  __type?: "NewPublicVirtualInterface";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: Array<RouteFilterPrefix>;

  /**
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;
}

export namespace NewPublicVirtualInterface {
  export function isa(o: any): o is NewPublicVirtualInterface {
    return __isa(o, "NewPublicVirtualInterface");
  }
}

/**
 * <p>Information about a public virtual interface to be provisioned on a connection.</p>
 */
export interface NewPublicVirtualInterfaceAllocation {
  __type?: "NewPublicVirtualInterfaceAllocation";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: Array<RouteFilterPrefix>;

  /**
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;
}

export namespace NewPublicVirtualInterfaceAllocation {
  export function isa(o: any): o is NewPublicVirtualInterfaceAllocation {
    return __isa(o, "NewPublicVirtualInterfaceAllocation");
  }
}

/**
 * <p>Information about a transit virtual interface.</p>
 */
export interface NewTransitVirtualInterface {
  __type?: "NewTransitVirtualInterface";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;
}

export namespace NewTransitVirtualInterface {
  export function isa(o: any): o is NewTransitVirtualInterface {
    return __isa(o, "NewTransitVirtualInterface");
  }
}

/**
 * <p>Information about a transit virtual interface to be provisioned on a connection.</p>
 */
export interface NewTransitVirtualInterfaceAllocation {
  __type?: "NewTransitVirtualInterfaceAllocation";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. </p>
   */
  mtu?: number;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;
}

export namespace NewTransitVirtualInterfaceAllocation {
  export function isa(o: any): o is NewTransitVirtualInterfaceAllocation {
    return __isa(o, "NewTransitVirtualInterfaceAllocation");
  }
}

/**
 * <p>Information about a tag associated with an AWS Direct Connect resource.</p>
 */
export interface ResourceTag {
  __type?: "ResourceTag";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tags.</p>
   */
  tags?: Array<Tag>;
}

export namespace ResourceTag {
  export function isa(o: any): o is ResourceTag {
    return __isa(o, "ResourceTag");
  }
}

/**
 * <p>Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP)
 *         over a public virtual interface.</p>
 */
export interface RouteFilterPrefix {
  __type?: "RouteFilterPrefix";
  /**
   * <p>The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.</p>
   */
  cidr?: string;
}

export namespace RouteFilterPrefix {
  export function isa(o: any): o is RouteFilterPrefix {
    return __isa(o, "RouteFilterPrefix");
  }
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value.</p>
   */
  value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add.</p>
   */
  tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateDirectConnectGatewayAssociationRequest {
  __type?: "UpdateDirectConnectGatewayAssociationRequest";
  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}

export namespace UpdateDirectConnectGatewayAssociationRequest {
  export function isa(
    o: any
  ): o is UpdateDirectConnectGatewayAssociationRequest {
    return __isa(o, "UpdateDirectConnectGatewayAssociationRequest");
  }
}

export interface UpdateDirectConnectGatewayAssociationResult {
  __type?: "UpdateDirectConnectGatewayAssociationResult";
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

export namespace UpdateDirectConnectGatewayAssociationResult {
  export function isa(
    o: any
  ): o is UpdateDirectConnectGatewayAssociationResult {
    return __isa(o, "UpdateDirectConnectGatewayAssociationResult");
  }
}

export interface UpdateLagRequest {
  __type?: "UpdateLagRequest";
  /**
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;
}

export namespace UpdateLagRequest {
  export function isa(o: any): o is UpdateLagRequest {
    return __isa(o, "UpdateLagRequest");
  }
}

export interface UpdateVirtualInterfaceAttributesRequest {
  __type?: "UpdateVirtualInterfaceAttributesRequest";
  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The ID of the virtual private interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

export namespace UpdateVirtualInterfaceAttributesRequest {
  export function isa(o: any): o is UpdateVirtualInterfaceAttributesRequest {
    return __isa(o, "UpdateVirtualInterfaceAttributesRequest");
  }
}

/**
 * <p>Information about a virtual private gateway for a private virtual interface.</p>
 */
export interface VirtualGateway {
  __type?: "VirtualGateway";
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The state of the virtual private gateway. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: Initial state after creating the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: Ready for use by a private virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: Initial state after deleting the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.</p>
   *             </li>
   *          </ul>
   */
  virtualGatewayState?: string;
}

export namespace VirtualGateway {
  export function isa(o: any): o is VirtualGateway {
    return __isa(o, "VirtualGateway");
  }
}

export interface VirtualGateways {
  __type?: "VirtualGateways";
  /**
   * <p>The virtual private gateways.</p>
   */
  virtualGateways?: Array<VirtualGateway>;
}

export namespace VirtualGateways {
  export function isa(o: any): o is VirtualGateways {
    return __isa(o, "VirtualGateways");
  }
}

/**
 * <p>Information about a virtual interface.</p>
 */
export interface VirtualInterface {
  __type?: "VirtualInterface";
  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The
   *       Direct Connect endpoint on which the virtual interface terminates.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The BGP peers configured on this virtual interface.</p>
   */
  bgpPeers?: Array<BGPPeer>;

  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>The ID of the AWS account that owns the virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The AWS Region where the virtual interface is located.</p>
   */
  region?: string;

  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: Array<RouteFilterPrefix>;

  /**
   * <p>The tags associated with the virtual interface.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState | string;

  /**
   * <p>The type of virtual interface. The possible values are <code>private</code> and <code>public</code>.</p>
   */
  virtualInterfaceType?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;
}

export namespace VirtualInterface {
  export function isa(o: any): o is VirtualInterface {
    return __isa(o, "VirtualInterface");
  }
}

export type VirtualInterfaceState =
  | "available"
  | "confirming"
  | "deleted"
  | "deleting"
  | "down"
  | "pending"
  | "rejected"
  | "unknown"
  | "verifying";

export interface VirtualInterfaces {
  __type?: "VirtualInterfaces";
  /**
   * <p>The virtual interfaces</p>
   */
  virtualInterfaces?: Array<VirtualInterface>;
}

export namespace VirtualInterfaces {
  export function isa(o: any): o is VirtualInterfaces {
    return __isa(o, "VirtualInterfaces");
  }
}

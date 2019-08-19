import {
  _AssociatedGateway,
  _UnmarshalledAssociatedGateway
} from "./_AssociatedGateway";
import {
  _RouteFilterPrefix,
  _UnmarshalledRouteFilterPrefix
} from "./_RouteFilterPrefix";

/**
 * <p>Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. </p>
 */
export interface _DirectConnectGatewayAssociationProposal {
  /**
   * <p>The ID of the association proposal.</p>
   */
  proposalId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The state of the proposal. The following are possible values:</p> <ul> <li> <p> <code>accepted</code>: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.</p> </li> <li> <p> <code>deleted</code>: The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway association cannot be used in this state.</p> </li> <li> <p> <code>requested</code>: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.</p> </li> </ul>
   */
  proposalState?: "requested" | "accepted" | "deleted" | string;

  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: _AssociatedGateway;

  /**
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   */
  existingAllowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  requestedAllowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;
}

export interface _UnmarshalledDirectConnectGatewayAssociationProposal
  extends _DirectConnectGatewayAssociationProposal {
  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: _UnmarshalledAssociatedGateway;

  /**
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   */
  existingAllowedPrefixesToDirectConnectGateway?: Array<
    _UnmarshalledRouteFilterPrefix
  >;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  requestedAllowedPrefixesToDirectConnectGateway?: Array<
    _UnmarshalledRouteFilterPrefix
  >;
}

import {
  _AssociatedGateway,
  _UnmarshalledAssociatedGateway
} from "./_AssociatedGateway";
import {
  _RouteFilterPrefix,
  _UnmarshalledRouteFilterPrefix
} from "./_RouteFilterPrefix";

/**
 * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
 */
export interface _DirectConnectGatewayAssociation {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the associated gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * <p>The state of the association. The following are the possible values:</p> <ul> <li> <p> <code>associating</code>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <code>associated</code>: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.</p> </li> <li> <p> <code>disassociating</code>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <code>disassociated</code>: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.</p> </li> </ul>
   */
  associationState?:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | "updating"
    | string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;

  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: _AssociatedGateway;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  allowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The AWS Region where the virtual private gateway is located.</p>
   */
  virtualGatewayRegion?: string;

  /**
   * <p>The ID of the AWS account that owns the virtual private gateway.</p>
   */
  virtualGatewayOwnerAccount?: string;
}

export interface _UnmarshalledDirectConnectGatewayAssociation
  extends _DirectConnectGatewayAssociation {
  /**
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: _UnmarshalledAssociatedGateway;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  allowedPrefixesToDirectConnectGateway?: Array<_UnmarshalledRouteFilterPrefix>;
}

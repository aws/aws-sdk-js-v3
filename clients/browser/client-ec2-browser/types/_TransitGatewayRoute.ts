import {
  _TransitGatewayRouteAttachment,
  _UnmarshalledTransitGatewayRouteAttachment
} from "./_TransitGatewayRouteAttachment";

/**
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface _TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?:
    | Array<_TransitGatewayRouteAttachment>
    | Iterable<_TransitGatewayRouteAttachment>;

  /**
   * <p>The route type.</p>
   */
  Type?: "static" | "propagated" | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: "pending" | "active" | "blackhole" | "deleting" | "deleted" | string;
}

export interface _UnmarshalledTransitGatewayRoute extends _TransitGatewayRoute {
  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: Array<_UnmarshalledTransitGatewayRouteAttachment>;
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface _TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: "vpc" | "vpn" | "direct-connect-gateway" | string;

  /**
   * <p>The state of the association.</p>
   */
  State?:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | string;
}

export type _UnmarshalledTransitGatewayRouteTableAssociation = _TransitGatewayRouteTableAssociation;

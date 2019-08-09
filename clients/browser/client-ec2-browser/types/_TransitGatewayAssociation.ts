/**
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 */
export interface _TransitGatewayAssociation {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

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

export type _UnmarshalledTransitGatewayAssociation = _TransitGatewayAssociation;

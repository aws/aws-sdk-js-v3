/**
 * <p>Describes an association.</p>
 */
export interface _TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;

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

export type _UnmarshalledTransitGatewayAttachmentAssociation = _TransitGatewayAttachmentAssociation;

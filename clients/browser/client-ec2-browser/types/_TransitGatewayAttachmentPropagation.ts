/**
 * <p>Describes a propagation route table.</p>
 */
export interface _TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the propagation route table.</p>
   */
  State?: "enabling" | "enabled" | "disabling" | "disabled" | string;
}

export type _UnmarshalledTransitGatewayAttachmentPropagation = _TransitGatewayAttachmentPropagation;

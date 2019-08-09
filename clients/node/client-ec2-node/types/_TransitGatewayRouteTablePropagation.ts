/**
 * <p>Describes a route table propagation.</p>
 */
export interface _TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: "vpc" | "vpn" | "direct-connect-gateway" | string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: "enabling" | "enabled" | "disabling" | "disabled" | string;
}

export type _UnmarshalledTransitGatewayRouteTablePropagation = _TransitGatewayRouteTablePropagation;

/**
 * <p>Describes route propagation.</p>
 */
export interface _TransitGatewayPropagation {
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
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: "enabling" | "enabled" | "disabling" | "disabled" | string;
}

export type _UnmarshalledTransitGatewayPropagation = _TransitGatewayPropagation;

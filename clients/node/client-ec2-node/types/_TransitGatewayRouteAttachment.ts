/**
 * <p>Describes a route attachment.</p>
 */
export interface _TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: "vpc" | "vpn" | "direct-connect-gateway" | string;
}

export type _UnmarshalledTransitGatewayRouteAttachment = _TransitGatewayRouteAttachment;

/**
 * <p>Describes the VPC attachment options.</p>
 */
export interface _TransitGatewayVpcAttachmentOptions {
  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: "enable" | "disable" | string;

  /**
   * <p>Indicates whether IPv6 support is enabled.</p>
   */
  Ipv6Support?: "enable" | "disable" | string;
}

export type _UnmarshalledTransitGatewayVpcAttachmentOptions = _TransitGatewayVpcAttachmentOptions;

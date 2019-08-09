/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface _ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: "enable" | "disable" | string;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   */
  Ipv6Support?: "enable" | "disable" | string;
}

export type _UnmarshalledModifyTransitGatewayVpcAttachmentRequestOptions = _ModifyTransitGatewayVpcAttachmentRequestOptions;

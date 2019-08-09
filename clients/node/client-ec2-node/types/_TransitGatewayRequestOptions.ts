/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface _TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. The default is <code>disable</code>.</p>
   */
  AutoAcceptSharedAttachments?: "enable" | "disable" | string;

  /**
   * <p>Enable or disable automatic association with the default association route table. The default is <code>enable</code>.</p>
   */
  DefaultRouteTableAssociation?: "enable" | "disable" | string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. The default is <code>enable</code>.</p>
   */
  DefaultRouteTablePropagation?: "enable" | "disable" | string;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   */
  VpnEcmpSupport?: "enable" | "disable" | string;

  /**
   * <p>Enable or disable DNS support.</p>
   */
  DnsSupport?: "enable" | "disable" | string;
}

export type _UnmarshalledTransitGatewayRequestOptions = _TransitGatewayRequestOptions;

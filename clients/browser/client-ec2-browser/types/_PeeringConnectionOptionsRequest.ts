/**
 * <p>The VPC peering connection options.</p>
 */
export interface _PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export type _UnmarshalledPeeringConnectionOptionsRequest = _PeeringConnectionOptionsRequest;

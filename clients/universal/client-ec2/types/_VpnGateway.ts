import { _VpcAttachment, _UnmarshalledVpcAttachment } from "./_VpcAttachment";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a virtual private gateway.</p>
 */
export interface _VpnGateway {
  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable. This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: "pending" | "available" | "deleting" | "deleted" | string;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: "ipsec.1" | string;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: Array<_VpcAttachment> | Iterable<_VpcAttachment>;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledVpnGateway extends _VpnGateway {
  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: Array<_UnmarshalledVpcAttachment>;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}

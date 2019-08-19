/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.</p>
 */
export interface _InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is <code>available</code> when attached to a VPC; otherwise, this value is not returned.</p>
   */
  State?: "attaching" | "attached" | "detaching" | "detached" | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export type _UnmarshalledInternetGatewayAttachment = _InternetGatewayAttachment;

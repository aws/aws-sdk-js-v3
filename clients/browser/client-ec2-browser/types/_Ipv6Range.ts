/**
 * <p>[EC2-VPC only] Describes an IPv6 range.</p>
 */
export interface _Ipv6Range {
  /**
   * <p>The IPv6 CIDR range. You can either specify a CIDR range or a source security group, not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>A description for the security group rule that references this IPv6 address range.</p> <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;
}

export type _UnmarshalledIpv6Range = _Ipv6Range;

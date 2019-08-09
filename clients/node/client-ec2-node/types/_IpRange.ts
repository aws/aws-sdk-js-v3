/**
 * <p>Describes an IPv4 range.</p>
 */
export interface _IpRange {
  /**
   * <p>The IPv4 CIDR range. You can either specify a CIDR range or a source security group, not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;

  /**
   * <p>A description for the security group rule that references this IPv4 address range.</p> <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;
}

export type _UnmarshalledIpRange = _IpRange;

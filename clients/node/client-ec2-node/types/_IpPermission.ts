import { _IpRange, _UnmarshalledIpRange } from "./_IpRange";
import { _Ipv6Range, _UnmarshalledIpv6Range } from "./_Ipv6Range";
import { _PrefixListId, _UnmarshalledPrefixListId } from "./_PrefixListId";
import {
  _UserIdGroupPair,
  _UnmarshalledUserIdGroupPair
} from "./_UserIdGroupPair";

/**
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface _IpPermission {
  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of <code>-1</code> indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).</p> <p>[VPC only] Use <code>-1</code> to specify all protocols. When authorizing security group rules, specifying <code>-1</code> or a protocol number other than <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows traffic on all ports, regardless of any port range you specify. For <code>tcp</code>, <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: Array<_IpRange> | Iterable<_IpRange>;

  /**
   * <p>[VPC only] The IPv6 ranges.</p>
   */
  Ipv6Ranges?: Array<_Ipv6Range> | Iterable<_Ipv6Range>;

  /**
   * <p>[VPC only] The prefix list IDs for an AWS service. With outbound rules, this is the AWS service to access through a VPC endpoint from instances associated with the security group.</p>
   */
  PrefixListIds?: Array<_PrefixListId> | Iterable<_PrefixListId>;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The security group and AWS account ID pairs.</p>
   */
  UserIdGroupPairs?: Array<_UserIdGroupPair> | Iterable<_UserIdGroupPair>;
}

export interface _UnmarshalledIpPermission extends _IpPermission {
  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: Array<_UnmarshalledIpRange>;

  /**
   * <p>[VPC only] The IPv6 ranges.</p>
   */
  Ipv6Ranges?: Array<_UnmarshalledIpv6Range>;

  /**
   * <p>[VPC only] The prefix list IDs for an AWS service. With outbound rules, this is the AWS service to access through a VPC endpoint from instances associated with the security group.</p>
   */
  PrefixListIds?: Array<_UnmarshalledPrefixListId>;

  /**
   * <p>The security group and AWS account ID pairs.</p>
   */
  UserIdGroupPairs?: Array<_UnmarshalledUserIdGroupPair>;
}

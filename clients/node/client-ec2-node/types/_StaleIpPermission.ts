import {
  _UserIdGroupPair,
  _UnmarshalledUserIdGroupPair
} from "./_UserIdGroupPair";

/**
 * <p>Describes a stale rule in a security group.</p>
 */
export interface _StaleIpPermission {
  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of <code>-1</code> indicates all ICMP types. </p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: Array<string> | Iterable<string>;

  /**
   * <p>The prefix list IDs for an AWS service. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: Array<string> | Iterable<string>;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: Array<_UserIdGroupPair> | Iterable<_UserIdGroupPair>;
}

export interface _UnmarshalledStaleIpPermission extends _StaleIpPermission {
  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: Array<string>;

  /**
   * <p>The prefix list IDs for an AWS service. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: Array<string>;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: Array<_UnmarshalledUserIdGroupPair>;
}

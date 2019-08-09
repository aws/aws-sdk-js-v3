import { _IcmpTypeCode, _UnmarshalledIcmpTypeCode } from "./_IcmpTypeCode";
import { _PortRange, _UnmarshalledPortRange } from "./_PortRange";

/**
 * <p>Describes an entry in a network ACL.</p>
 */
export interface _NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: _IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: _PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: "allow" | "deny" | string;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

export interface _UnmarshalledNetworkAclEntry extends _NetworkAclEntry {
  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: _UnmarshalledIcmpTypeCode;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: _UnmarshalledPortRange;
}

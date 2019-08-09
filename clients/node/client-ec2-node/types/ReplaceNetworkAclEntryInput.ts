import { _IcmpTypeCode } from "./_IcmpTypeCode";
import { _PortRange } from "./_PortRange";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReplaceNetworkAclEntryInput shape
 */
export interface ReplaceNetworkAclEntryInput {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example <code>172.16.0.0/24</code>).</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to replace the egress rule.</p> <p>Default: If no value is specified, we replace the ingress rule.</p>
   */
  Egress: boolean;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: _IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example <code>2001:bd8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the ACL.</p>
   */
  NetworkAclId: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: _PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: "allow" | "deny" | string;

  /**
   * <p>The rule number of the entry to replace.</p>
   */
  RuleNumber: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

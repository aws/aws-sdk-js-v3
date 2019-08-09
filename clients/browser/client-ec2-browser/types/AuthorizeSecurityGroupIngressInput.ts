import { _IpPermission } from "./_IpPermission";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AuthorizeSecurityGroupIngressInput shape
 */
export interface AuthorizeSecurityGroupIngressInput {
  /**
   * <p>The IPv4 address range, in CIDR format. You can't specify this parameter when specifying a source security group. To specify an IPv6 address range, use a set of IP permissions.</p> <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number, use <code>-1</code> to specify all types. If you specify all ICMP types, you must specify all codes.</p> <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions.</p>
   */
  IpPermissions?: Array<_IpPermission> | Iterable<_IpPermission>;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify <code>icmpv6</code>, use a set of IP permissions.</p> <p>[VPC only] Use <code>-1</code> to specify all protocols. If you specify <code>-1</code> or a protocol other than <code>tcp</code>, <code>udp</code>, or <code>icmp</code>, traffic on all ports is allowed, regardless of any ports you specify.</p> <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol and port range, use a set of IP permissions instead. For EC2-VPC, the source security group must be in the same VPC.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[nondefault VPC] The AWS account ID for the source security group, if the source security group is in a different account. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number, use <code>-1</code> to specify all codes. If you specify all ICMP types, you must specify all codes.</p> <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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

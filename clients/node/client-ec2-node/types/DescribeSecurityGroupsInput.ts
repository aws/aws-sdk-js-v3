import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecurityGroupsInput shape
 */
export interface DescribeSecurityGroupsInput {
  /**
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p> <ul> <li> <p> <code>description</code> - The description of the security group.</p> </li> <li> <p> <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound security group rule.</p> </li> <li> <p> <code>egress.ip-permission.from-port</code> - For an outbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number.</p> </li> <li> <p> <code>egress.ip-permission.group-id</code> - The ID of a security group that has been referenced in an outbound security group rule.</p> </li> <li> <p> <code>egress.ip-permission.group-name</code> - The name of a security group that has been referenced in an outbound security group rule.</p> </li> <li> <p> <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an outbound security group rule.</p> </li> <li> <p> <code>egress.ip-permission.prefix-list-id</code> - The ID (prefix) of the AWS service to which a security group rule allows outbound access.</p> </li> <li> <p> <code>egress.ip-permission.protocol</code> - The IP protocol for an outbound security group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p> </li> <li> <p> <code>egress.ip-permission.to-port</code> - For an outbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code.</p> </li> <li> <p> <code>egress.ip-permission.user-id</code> - The ID of an AWS account that has been referenced in an outbound security group rule.</p> </li> <li> <p> <code>group-id</code> - The ID of the security group. </p> </li> <li> <p> <code>group-name</code> - The name of the security group.</p> </li> <li> <p> <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security group rule.</p> </li> <li> <p> <code>ip-permission.from-port</code> - For an inbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number.</p> </li> <li> <p> <code>ip-permission.group-id</code> - The ID of a security group that has been referenced in an inbound security group rule.</p> </li> <li> <p> <code>ip-permission.group-name</code> - The name of a security group that has been referenced in an inbound security group rule.</p> </li> <li> <p> <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security group rule.</p> </li> <li> <p> <code>ip-permission.prefix-list-id</code> - The ID (prefix) of the AWS service from which a security group rule allows inbound access.</p> </li> <li> <p> <code>ip-permission.protocol</code> - The IP protocol for an inbound security group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p> </li> <li> <p> <code>ip-permission.to-port</code> - For an inbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code.</p> </li> <li> <p> <code>ip-permission.user-id</code> - The ID of an AWS account that has been referenced in an inbound security group rule.</p> </li> <li> <p> <code>owner-id</code> - The AWS account ID of the owner of the security group.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>vpc-id</code> - The ID of the VPC specified when the security group was created.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p> <p>Default: Describes all your security groups.</p>
   */
  GroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>[EC2-Classic and default VPC only] The names of the security groups. You can specify either the security group name or the security group ID. For security groups in a nondefault VPC, use the <code>group-name</code> filter to describe security groups by name.</p> <p>Default: Describes all your security groups.</p>
   */
  GroupNames?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another request with the returned <code>NextToken</code> value. This value can be between 5 and 1000. If this parameter is not specified, then all results are returned.</p>
   */
  MaxResults?: number;

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

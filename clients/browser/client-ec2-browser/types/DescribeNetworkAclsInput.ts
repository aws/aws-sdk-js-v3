import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNetworkAclsInput shape
 */
export interface DescribeNetworkAclsInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>association.association-id</code> - The ID of an association ID for the ACL.</p> </li> <li> <p> <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p> </li> <li> <p> <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p> </li> <li> <p> <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p> </li> <li> <p> <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p> </li> <li> <p> <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p> </li> <li> <p> <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p> </li> <li> <p> <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p> </li> <li> <p> <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p> </li> <li> <p> <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p> </li> <li> <p> <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p> </li> <li> <p> <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p> </li> <li> <p> <code>entry.rule-number</code> - The number of an entry (in other words, rule) in the set of ACL entries.</p> </li> <li> <p> <code>network-acl-id</code> - The ID of the network ACL.</p> </li> <li> <p> <code>owner-id</code> - The ID of the AWS account that owns the network ACL.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>vpc-id</code> - The ID of the VPC for the network ACL.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network ACL IDs.</p> <p>Default: Describes all your network ACLs.</p>
   */
  NetworkAclIds?: Array<string> | Iterable<string>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

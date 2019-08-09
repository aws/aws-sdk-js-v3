import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSubnetsInput shape
 */
export interface DescribeSubnetsInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>availability-zone</code> - The Availability Zone for the subnet. You can also use <code>availabilityZone</code> as the filter name.</p> </li> <li> <p> <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet. You can also use <code>availabilityZoneId</code> as the filter name.</p> </li> <li> <p> <code>available-ip-address-count</code> - The number of IPv4 addresses in the subnet that are available.</p> </li> <li> <p> <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block you specify must exactly match the subnet's CIDR block for information to be returned for the subnet. You can also use <code>cidr</code> or <code>cidrBlock</code> as the filter names.</p> </li> <li> <p> <code>default-for-az</code> - Indicates whether this is the default subnet for the Availability Zone. You can also use <code>defaultForAz</code> as the filter name.</p> </li> <li> <p> <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR block associated with the subnet.</p> </li> <li> <p> <code>ipv6-cidr-block-association.association-id</code> - An association ID for an IPv6 CIDR block associated with the subnet.</p> </li> <li> <p> <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR block associated with the subnet.</p> </li> <li> <p> <code>owner-id</code> - The ID of the AWS account that owns the subnet.</p> </li> <li> <p> <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p> </li> <li> <p> <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p> </li> <li> <p> <code>subnet-id</code> - The ID of the subnet.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>vpc-id</code> - The ID of the VPC for the subnet.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>One or more subnet IDs.</p> <p>Default: Describes all your subnets.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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

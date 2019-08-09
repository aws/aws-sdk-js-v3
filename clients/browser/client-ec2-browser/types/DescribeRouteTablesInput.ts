import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRouteTablesInput shape
 */
export interface DescribeRouteTablesInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>association.route-table-association-id</code> - The ID of an association ID for the route table.</p> </li> <li> <p> <code>association.route-table-id</code> - The ID of the route table involved in the association.</p> </li> <li> <p> <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p> </li> <li> <p> <code>association.main</code> - Indicates whether the route table is the main route table for the VPC (<code>true</code> | <code>false</code>). Route tables that do not have an association ID are not returned in the response.</p> </li> <li> <p> <code>owner-id</code> - The ID of the AWS account that owns the route table.</p> </li> <li> <p> <code>route-table-id</code> - The ID of the route table.</p> </li> <li> <p> <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a route in the table.</p> </li> <li> <p> <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p> </li> <li> <p> <code>route.destination-prefix-list-id</code> - The ID (prefix) of the AWS service specified in a route in the table.</p> </li> <li> <p> <code>route.egress-only-internet-gateway-id</code> - The ID of an egress-only Internet gateway specified in a route in the route table.</p> </li> <li> <p> <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p> </li> <li> <p> <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p> </li> <li> <p> <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p> </li> <li> <p> <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p> </li> <li> <p> <code>route.origin</code> - Describes how the route was created. <code>CreateRouteTable</code> indicates that the route was automatically created when the route table was created; <code>CreateRoute</code> indicates that the route was manually added to the route table; <code>EnableVgwRoutePropagation</code> indicates that the route was propagated by route propagation.</p> </li> <li> <p> <code>route.state</code> - The state of a route in the route table (<code>active</code> | <code>blackhole</code>). The blackhole state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, the specified NAT instance has been terminated, and so on).</p> </li> <li> <p> <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering connection specified in a route in the table.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>transit-gateway-id</code> - The ID of a transit gateway.</p> </li> <li> <p> <code>vpc-id</code> - The ID of the VPC for the route table.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more route table IDs.</p> <p>Default: Describes all your route tables.</p>
   */
  RouteTableIds?: Array<string> | Iterable<string>;

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

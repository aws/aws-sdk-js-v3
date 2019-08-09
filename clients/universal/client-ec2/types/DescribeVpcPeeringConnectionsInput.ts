import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcPeeringConnectionsInput shape
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter VPC.</p> </li> <li> <p> <code>accepter-vpc-info.owner-id</code> - The AWS account ID of the owner of the accepter VPC.</p> </li> <li> <p> <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p> </li> <li> <p> <code>expiration-time</code> - The expiration date and time for the VPC peering connection.</p> </li> <li> <p> <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the requester's VPC.</p> </li> <li> <p> <code>requester-vpc-info.owner-id</code> - The AWS account ID of the owner of the requester VPC.</p> </li> <li> <p> <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p> </li> <li> <p> <code>status-code</code> - The status of the VPC peering connection (<code>pending-acceptance</code> | <code>failed</code> | <code>expired</code> | <code>provisioning</code> | <code>active</code> | <code>deleting</code> | <code>deleted</code> | <code>rejected</code>).</p> </li> <li> <p> <code>status-message</code> - A message that provides more information about the status of the VPC peering connection, if applicable.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>vpc-peering-connection-id</code> - The ID of the VPC peering connection.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC peering connection IDs.</p> <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: Array<string> | Iterable<string>;

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

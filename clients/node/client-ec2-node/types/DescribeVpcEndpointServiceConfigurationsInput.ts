import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcEndpointServiceConfigurationsInput shape
 */
export interface DescribeVpcEndpointServiceConfigurationsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds?: Array<string> | Iterable<string>;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>service-name</code> - The name of the service.</p> </li> <li> <p> <code>service-id</code> - The ID of the service.</p> </li> <li> <p> <code>service-state</code> - The state of the service (<code>Pending</code> | <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> | <code>Failed</code>). </p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned <code>NextToken</code> value. This value can be between 5 and 1000; if <code>MaxResults</code> is given a value larger than 1000, only 1000 results are returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

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

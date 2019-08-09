import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTransitGatewaysInput shape
 */
export interface DescribeTransitGatewaysInput {
  /**
   * <p>The IDs of the transit gateways.</p>
   */
  TransitGatewayIds?: Array<string> | Iterable<string>;

  /**
   * <p>One or more filters. The possible values are:</p> <ul> <li> <p> <code>options.propagation-default-route-table-id</code> - The ID of the default propagation route table.</p> </li> <li> <p> <code>options.amazon-side-asn</code> - The private ASN for the Amazon side of a BGP session.</p> </li> <li> <p> <code>options.association-default-route-table-id</code> - The ID of the default association route table.</p> </li> <li> <p> <code>options.auto-accept-shared-attachments</code> - Indicates whether there is automatic acceptance of attachment requests (<code>enable</code> | <code>disable</code>).</p> </li> <li> <p> <code>options.default-route-table-association</code> - Indicates whether resource attachments are automatically associated with the default association route table (<code>enable</code> | <code>disable</code>).</p> </li> <li> <p> <code>options.default-route-table-propagation</code> - Indicates whether resource attachments automatically propagate routes to the default propagation route table (<code>enable</code> | <code>disable</code>).</p> </li> <li> <p> <code>options.dns-support</code> - Indicates whether DNS support is enabled (<code>enable</code> | <code>disable</code>).</p> </li> <li> <p> <code>options.vpn-ecmp-support</code> - Indicates whether Equal Cost Multipath Protocol support is enabled (<code>enable</code> | <code>disable</code>).</p> </li> <li> <p> <code>owner-id</code> - The ID of the AWS account that owns the transit gateway.</p> </li> <li> <p> <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p> </li> <li> <p> <code>transit-gateway-id</code> - The ID of the transit gateway.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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

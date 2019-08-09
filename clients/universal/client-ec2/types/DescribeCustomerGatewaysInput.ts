import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysInput {
  /**
   * <p>One or more customer gateway IDs.</p> <p>Default: Describes all your customer gateways.</p>
   */
  CustomerGatewayIds?: Array<string> | Iterable<string>;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p> </li> <li> <p> <code>customer-gateway-id</code> - The ID of the customer gateway.</p> </li> <li> <p> <code>ip-address</code> - The IP address of the customer gateway's Internet-routable external interface.</p> </li> <li> <p> <code>state</code> - The state of the customer gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p> </li> <li> <p> <code>type</code> - The type of customer gateway. Currently, the only supported type is <code>ipsec.1</code>.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

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

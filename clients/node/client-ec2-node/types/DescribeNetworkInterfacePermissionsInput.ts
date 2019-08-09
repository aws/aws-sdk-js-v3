import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsInput {
  /**
   * <p>One or more network interface permission IDs.</p>
   */
  NetworkInterfacePermissionIds?: Array<string> | Iterable<string>;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>network-interface-permission.network-interface-permission-id</code> - The ID of the permission.</p> </li> <li> <p> <code>network-interface-permission.network-interface-id</code> - The ID of the network interface.</p> </li> <li> <p> <code>network-interface-permission.aws-account-id</code> - The AWS account ID.</p> </li> <li> <p> <code>network-interface-permission.aws-service</code> - The AWS service.</p> </li> <li> <p> <code>network-interface-permission.permission</code> - The type of permission (<code>INSTANCE-ATTACH</code> | <code>EIP-ASSOCIATE</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. If this parameter is not specified, up to 50 results are returned by default.</p>
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

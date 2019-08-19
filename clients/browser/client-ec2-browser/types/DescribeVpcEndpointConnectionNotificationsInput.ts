import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcEndpointConnectionNotificationsInput shape
 */
export interface DescribeVpcEndpointConnectionNotificationsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>connection-notification-arn</code> - The ARN of SNS topic for the notification.</p> </li> <li> <p> <code>connection-notification-id</code> - The ID of the notification.</p> </li> <li> <p> <code>connection-notification-state</code> - The state of the notification (<code>Enabled</code> | <code>Disabled</code>).</p> </li> <li> <p> <code>connection-notification-type</code> - The type of notification (<code>Topic</code>).</p> </li> <li> <p> <code>service-id</code> - The ID of the endpoint service.</p> </li> <li> <p> <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
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

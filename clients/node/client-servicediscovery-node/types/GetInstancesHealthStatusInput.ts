import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstancesHealthStatusInput shape
 */
export interface GetInstancesHealthStatusInput {
  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string;

  /**
   * <p>An array that contains the IDs of all the instances that you want to get the health status for.</p> <p>If you omit <code>Instances</code>, AWS Cloud Map returns the health status for all the instances that are associated with the specified service.</p> <note> <p>To get the IDs for the instances that you've registered by using a specified service, submit a <a>ListInstances</a> request.</p> </note>
   */
  Instances?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a <code>GetInstancesHealthStatus</code> request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>GetInstancesHealthStatus</code> request, omit this value.</p> <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
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

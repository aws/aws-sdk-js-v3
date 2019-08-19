import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStackInstancesInput shape
 */
export interface ListStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to list stack instances for.</p>
   */
  StackSetName: string;

  /**
   * <p>If the previous request didn't return all of the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the AWS account that you want to list stack instances for.</p>
   */
  StackInstanceAccount?: string;

  /**
   * <p>The name of the region where you want to list stack instances. </p>
   */
  StackInstanceRegion?: string;

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

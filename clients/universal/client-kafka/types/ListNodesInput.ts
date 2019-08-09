import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNodesInput shape
 */
export interface ListNodesInput {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   *
   */
  ClusterArn: string;

  /**
   *
   *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   *
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

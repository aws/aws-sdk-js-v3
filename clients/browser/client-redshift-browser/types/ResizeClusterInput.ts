import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResizeClusterInput shape
 */
export interface ResizeClusterInput {
  /**
   * <p>The unique identifier for the cluster to resize.</p>
   */
  ClusterIdentifier: string;

  /**
   * <p>The new cluster type for the specified cluster.</p>
   */
  ClusterType?: string;

  /**
   * <p>The new node type for the nodes you are adding.</p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes for the cluster.</p>
   */
  NumberOfNodes: number;

  /**
   * <p>A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to <code>false</code>, the resize type is elastic. </p>
   */
  Classic?: boolean;

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

import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyClusterDbRevisionInput shape
 */
export interface ModifyClusterDbRevisionInput {
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p> <p>Example: <code>examplecluster</code> </p>
   */
  ClusterIdentifier: string;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the response to the <a>DescribeClusterDbRevisions</a> request.</p>
   */
  RevisionTarget: string;

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

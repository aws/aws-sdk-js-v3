import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestFailoverInput shape
 */
export interface TestFailoverInput {
  /**
   * <p>The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.</p>
   */
  ReplicationGroupId: string;

  /**
   * <p>The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.</p>
   */
  NodeGroupId: string;

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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DecreaseReplicationFactorInput shape
 */
export interface DecreaseReplicationFactorInput {
  /**
   * <p>The name of the DAX cluster from which you want to remove nodes.</p>
   */
  ClusterName: string;

  /**
   * <p>The new number of nodes for the DAX cluster.</p>
   */
  NewReplicationFactor: number;

  /**
   * <p>The Availability Zone(s) from which to remove nodes.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The unique identifiers of the nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: Array<string> | Iterable<string>;

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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This input determines how the ListClusters action filters the list of clusters that it returns.</p>
 */
export interface ListClustersInput {
  /**
   * <p>The creation date and time beginning value filter for listing clusters.</p>
   */
  CreatedAfter?: Date | string | number;

  /**
   * <p>The creation date and time end value filter for listing clusters.</p>
   */
  CreatedBefore?: Date | string | number;

  /**
   * <p>The cluster state filters to apply when listing clusters.</p>
   */
  ClusterStates?:
    | Array<
        | "STARTING"
        | "BOOTSTRAPPING"
        | "RUNNING"
        | "WAITING"
        | "TERMINATING"
        | "TERMINATED"
        | "TERMINATED_WITH_ERRORS"
        | string
      >
    | Iterable<
        | "STARTING"
        | "BOOTSTRAPPING"
        | "RUNNING"
        | "WAITING"
        | "TERMINATING"
        | "TERMINATED"
        | "TERMINATED_WITH_ERRORS"
        | string
      >;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

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

import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This input determines which steps to list.</p>
 */
export interface ListStepsInput {
  /**
   * <p>The identifier of the cluster for which to list the steps.</p>
   */
  ClusterId: string;

  /**
   * <p>The filter to limit the step list based on certain states.</p>
   */
  StepStates?:
    | Array<
        | "PENDING"
        | "CANCEL_PENDING"
        | "RUNNING"
        | "COMPLETED"
        | "CANCELLED"
        | "FAILED"
        | "INTERRUPTED"
        | string
      >
    | Iterable<
        | "PENDING"
        | "CANCEL_PENDING"
        | "RUNNING"
        | "COMPLETED"
        | "CANCELLED"
        | "FAILED"
        | "INTERRUPTED"
        | string
      >;

  /**
   * <p>The filter to limit the step list based on the identifier of the steps.</p>
   */
  StepIds?: Array<string> | Iterable<string>;

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

import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for <a>ListStacks</a> action.</p>
 */
export interface ListStacksInput {
  /**
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.</p>
   */
  StackStatusFilter?:
    | Array<
        | "CREATE_IN_PROGRESS"
        | "CREATE_FAILED"
        | "CREATE_COMPLETE"
        | "ROLLBACK_IN_PROGRESS"
        | "ROLLBACK_FAILED"
        | "ROLLBACK_COMPLETE"
        | "DELETE_IN_PROGRESS"
        | "DELETE_FAILED"
        | "DELETE_COMPLETE"
        | "UPDATE_IN_PROGRESS"
        | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
        | "UPDATE_COMPLETE"
        | "UPDATE_ROLLBACK_IN_PROGRESS"
        | "UPDATE_ROLLBACK_FAILED"
        | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
        | "UPDATE_ROLLBACK_COMPLETE"
        | "REVIEW_IN_PROGRESS"
        | string
      >
    | Iterable<
        | "CREATE_IN_PROGRESS"
        | "CREATE_FAILED"
        | "CREATE_COMPLETE"
        | "ROLLBACK_IN_PROGRESS"
        | "ROLLBACK_FAILED"
        | "ROLLBACK_COMPLETE"
        | "DELETE_IN_PROGRESS"
        | "DELETE_FAILED"
        | "DELETE_COMPLETE"
        | "UPDATE_IN_PROGRESS"
        | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
        | "UPDATE_COMPLETE"
        | "UPDATE_ROLLBACK_IN_PROGRESS"
        | "UPDATE_ROLLBACK_FAILED"
        | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
        | "UPDATE_ROLLBACK_COMPLETE"
        | "REVIEW_IN_PROGRESS"
        | string
      >;

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

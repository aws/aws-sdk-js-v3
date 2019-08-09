import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNodesInput shape
 */
export interface ListNodesInput {
  /**
   * <p>The unique identifier of the network for which to list nodes.</p>
   */
  NetworkId: string;

  /**
   * <p>The unique identifier of the member who owns the nodes to list.</p>
   */
  MemberId: string;

  /**
   * <p>An optional status specifier. If provided, only nodes currently in this status are listed.</p>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | string;

  /**
   * <p>The maximum number of nodes to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
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

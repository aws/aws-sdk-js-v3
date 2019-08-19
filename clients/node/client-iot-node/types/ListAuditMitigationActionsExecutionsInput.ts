import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditMitigationActionsExecutionsInput shape
 */
export interface ListAuditMitigationActionsExecutionsInput {
  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string;

  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   */
  actionStatus?:
    | "IN_PROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "CANCELED"
    | "SKIPPED"
    | "PENDING"
    | string;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   */
  findingId: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

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

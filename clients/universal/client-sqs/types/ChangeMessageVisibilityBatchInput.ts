import { _ChangeMessageVisibilityBatchRequestEntry } from "./_ChangeMessageVisibilityBatchRequestEntry";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ChangeMessageVisibilityBatchInput {
  /**
   * <p>The URL of the Amazon SQS queue whose messages' visibility is changed.</p> <p>Queue URLs and names are case-sensitive.</p>
   */
  QueueUrl: string;

  /**
   * <p>A list of receipt handles of the messages for which the visibility timeout must be changed.</p>
   */
  Entries:
    | Array<_ChangeMessageVisibilityBatchRequestEntry>
    | Iterable<_ChangeMessageVisibilityBatchRequestEntry>;

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

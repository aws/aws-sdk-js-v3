import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSpeechSynthesisTasksInput shape
 */
export interface ListSpeechSynthesisTasksInput {
  /**
   * <p>Maximum number of speech synthesis tasks returned in a List operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use in the next request to continue the listing of speech synthesis tasks. </p>
   */
  NextToken?: string;

  /**
   * <p>Status of the speech synthesis tasks returned in a List operation</p>
   */
  Status?: "scheduled" | "inProgress" | "completed" | "failed" | string;

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

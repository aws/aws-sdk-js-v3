import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContentModerationInput shape
 */
export interface GetContentModerationInput {
  /**
   * <p>The identifier for the content moderation job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetContentModeration</code>.</p>
   */
  JobId: string;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of content moderation labels.</p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for elements in the <code>ModerationLabelDetections</code> array. Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected. Use <code>NAME</code> to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by <code>TIMESTAMP</code>.</p>
   */
  SortBy?: "NAME" | "TIMESTAMP" | string;

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

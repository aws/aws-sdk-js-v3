import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPersonTrackingInput shape
 */
export interface GetPersonTrackingInput {
  /**
   * <p>The identifier for a job that tracks persons in a video. You get the <code>JobId</code> from a call to <code>StartPersonTracking</code>. </p>
   */
  JobId: string;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of persons. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for elements in the <code>Persons</code> array. Use <code>TIMESTAMP</code> to sort array elements by the time persons are detected. Use <code>INDEX</code> to sort by the tracked persons. If you sort by <code>INDEX</code>, the array elements for each person are sorted by detection confidence. The default sort is by <code>TIMESTAMP</code>.</p>
   */
  SortBy?: "INDEX" | "TIMESTAMP" | string;

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

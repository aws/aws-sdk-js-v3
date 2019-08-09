import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCelebrityRecognitionInput shape
 */
export interface GetCelebrityRecognitionInput {
  /**
   * <p>Job identifier for the required celebrity recognition analysis. You can get the job identifer from a call to <code>StartCelebrityRecognition</code>.</p>
   */
  JobId: string;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of celebrities. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for celebrities returned in <code>Celebrities</code> field. Specify <code>ID</code> to sort by the celebrity identifier, specify <code>TIMESTAMP</code> to sort by the time the celebrity was recognized.</p>
   */
  SortBy?: "ID" | "TIMESTAMP" | string;

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

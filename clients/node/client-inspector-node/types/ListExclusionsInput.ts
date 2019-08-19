import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListExclusionsInput shape
 */
export interface ListExclusionsInput {
  /**
   * <p>The ARN of the assessment run that generated the exclusions that you want to list.</p>
   */
  assessmentRunArn: string;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListExclusionsRequest action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 100. The maximum value is 500.</p>
   */
  maxResults?: number;

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

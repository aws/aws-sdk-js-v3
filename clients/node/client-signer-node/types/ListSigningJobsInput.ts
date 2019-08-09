import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSigningJobsInput shape
 */
export interface ListSigningJobsInput {
  /**
   * <p>A status value with which to filter your results.</p>
   */
  status?: "InProgress" | "Failed" | "Succeeded" | string;

  /**
   * <p>The ID of microcontroller platform that you specified for the distribution of your code image.</p>
   */
  platformId?: string;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the <code>nextToken</code> element is set in the response. Use the <code>nextToken</code> value in a subsequent request to retrieve additional items. </p>
   */
  maxResults?: number;

  /**
   * <p>String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.</p>
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

import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeCommunicationsInput {
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> </p>
   */
  caseId: string;

  /**
   * <p>The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * <p>The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return before paginating.</p>
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

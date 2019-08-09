import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobExecutionInput shape
 */
export interface DescribeJobExecutionInput {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string;

  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.</p>
   */
  executionNumber?: number;

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

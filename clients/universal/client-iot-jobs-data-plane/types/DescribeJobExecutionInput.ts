import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobExecutionInput shape
 */
export interface DescribeJobExecutionInput {
  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string;

  /**
   * <p>The thing name associated with the device the job execution is running on.</p>
   */
  thingName: string;

  /**
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * <p>Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.</p>
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

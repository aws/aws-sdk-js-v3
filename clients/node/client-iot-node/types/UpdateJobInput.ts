import { _PresignedUrlConfig } from "./_PresignedUrlConfig";
import { _JobExecutionsRolloutConfig } from "./_JobExecutionsRolloutConfig";
import { _AbortConfig } from "./_AbortConfig";
import { _TimeoutConfig } from "./_TimeoutConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobInput shape
 */
export interface UpdateJobInput {
  /**
   * <p>The ID of the job to be updated.</p>
   */
  jobId: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: _PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: _JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: _AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: _TimeoutConfig;

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

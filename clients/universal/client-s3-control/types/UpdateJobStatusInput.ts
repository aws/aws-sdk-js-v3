import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobStatusInput shape
 */
export interface UpdateJobStatusInput {
  /**
   * <p/>
   */
  AccountId: string;

  /**
   * <p>The ID of the job whose status you want to update.</p>
   */
  JobId: string;

  /**
   * <p>The status that you want to move the specified job to.</p>
   */
  RequestedJobStatus: "Cancelled" | "Ready" | string;

  /**
   * <p>A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.</p>
   */
  StatusUpdateReason?: string;

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

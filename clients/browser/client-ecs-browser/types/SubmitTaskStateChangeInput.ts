import { _ContainerStateChange } from "./_ContainerStateChange";
import { _AttachmentStateChange } from "./_AttachmentStateChange";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SubmitTaskStateChangeInput shape
 */
export interface SubmitTaskStateChangeInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.</p>
   */
  cluster?: string;

  /**
   * <p>The task ID or full ARN of the task in the state change request.</p>
   */
  task?: string;

  /**
   * <p>The status of the state change request.</p>
   */
  status?: string;

  /**
   * <p>The reason for the state change request.</p>
   */
  reason?: string;

  /**
   * <p>Any containers associated with the state change request.</p>
   */
  containers?: Array<_ContainerStateChange> | Iterable<_ContainerStateChange>;

  /**
   * <p>Any attachments associated with the state change request.</p>
   */
  attachments?:
    | Array<_AttachmentStateChange>
    | Iterable<_AttachmentStateChange>;

  /**
   * <p>The Unix timestamp for when the container image pull began.</p>
   */
  pullStartedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the container image pull completed.</p>
   */
  pullStoppedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task execution stopped.</p>
   */
  executionStoppedAt?: Date | string | number;

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

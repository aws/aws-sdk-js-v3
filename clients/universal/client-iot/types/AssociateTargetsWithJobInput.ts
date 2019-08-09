import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateTargetsWithJobInput shape
 */
export interface AssociateTargetsWithJobInput {
  /**
   * <p>A list of thing group ARNs that define the targets of the job.</p>
   */
  targets: Array<string> | Iterable<string>;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string;

  /**
   * <p>An optional comment string describing why the job was associated with the targets.</p>
   */
  comment?: string;

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

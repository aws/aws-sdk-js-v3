import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MergeBranchesByFastForwardInput shape
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
   */
  sourceCommitSpecifier: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
   */
  destinationCommitSpecifier: string;

  /**
   * <p>The branch where the merge will be applied.</p>
   */
  targetBranch?: string;

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

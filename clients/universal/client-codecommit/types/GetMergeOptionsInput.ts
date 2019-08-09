import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMergeOptionsInput shape
 */
export interface GetMergeOptionsInput {
  /**
   * <p>The name of the repository that contains the commits about which you want to get merge options.</p>
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
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which will return a not mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict will be considered not mergeable if the same file in both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: "FILE_LEVEL" | "LINE_LEVEL" | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation will be successful.</p>
   */
  conflictResolutionStrategy?:
    | "NONE"
    | "ACCEPT_SOURCE"
    | "ACCEPT_DESTINATION"
    | "AUTOMERGE"
    | string;

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

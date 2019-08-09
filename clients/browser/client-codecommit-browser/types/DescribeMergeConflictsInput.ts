import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMergeConflictsInput shape
 */
export interface DescribeMergeConflictsInput {
  /**
   * <p>The name of the repository where you want to get information about a merge conflict.</p>
   */
  repositoryName: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
   */
  destinationCommitSpecifier: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
   */
  sourceCommitSpecifier: string;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption:
    | "FAST_FORWARD_MERGE"
    | "SQUASH_MERGE"
    | "THREE_WAY_MERGE"
    | string;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The path of the target files used to describe the conflicts. </p>
   */
  filePath: string;

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
   * <p>An enumeration token that when provided in a request, returns the next batch of the results.</p>
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

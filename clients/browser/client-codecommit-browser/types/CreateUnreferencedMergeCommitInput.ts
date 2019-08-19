import { _ConflictResolution } from "./_ConflictResolution";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUnreferencedMergeCommitInput shape
 */
export interface CreateUnreferencedMergeCommitInput {
  /**
   * <p>The name of the repository where you want to create the unreferenced merge commit.</p>
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
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption:
    | "FAST_FORWARD_MERGE"
    | "SQUASH_MERGE"
    | "THREE_WAY_MERGE"
    | string;

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
   * <p>The name of the author who created the unreferenced commit. This information will be used as both the author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address for the person who created the unreferenced commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message for the unreferenced commit.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file will be created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>A list of inputs to use when resolving conflicts during a merge if AUTOMERGE is chosen as the conflict resolution strategy.</p>
   */
  conflictResolution?: _ConflictResolution;

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

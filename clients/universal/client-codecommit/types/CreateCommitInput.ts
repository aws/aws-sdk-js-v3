import { _PutFileEntry } from "./_PutFileEntry";
import { _DeleteFileEntry } from "./_DeleteFileEntry";
import { _SetFileModeEntry } from "./_SetFileModeEntry";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCommitInput shape
 */
export interface CreateCommitInput {
  /**
   * <p>The name of the repository where you will create the commit.</p>
   */
  repositoryName: string;

  /**
   * <p>The name of the branch where you will create the commit.</p>
   */
  branchName: string;

  /**
   * <p>The ID of the commit that is the parent of the commit you will create. If this is an empty repository, this is not required.</p>
   */
  parentCommitId?: string;

  /**
   * <p>The name of the author who created the commit. This information will be used as both the author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person who created the commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message you want to include as part of creating the commit. Commit messages are limited to 256 KB. If no message is specified, a default message will be used.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file will be created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The files to add or update in this commit.</p>
   */
  putFiles?: Array<_PutFileEntry> | Iterable<_PutFileEntry>;

  /**
   * <p>The files to delete in this commit. These files will still exist in prior commits.</p>
   */
  deleteFiles?: Array<_DeleteFileEntry> | Iterable<_DeleteFileEntry>;

  /**
   * <p>The file modes to update for files in this commit.</p>
   */
  setFileModes?: Array<_SetFileModeEntry> | Iterable<_SetFileModeEntry>;

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

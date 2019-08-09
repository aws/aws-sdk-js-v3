import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFileInput shape
 */
export interface DeleteFileInput {
  /**
   * <p>The name of the repository that contains the file to delete.</p>
   */
  repositoryName: string;

  /**
   * <p>The name of the branch where the commit will be made deleting the file.</p>
   */
  branchName: string;

  /**
   * <p>The fully-qualified path to the file that will be deleted, including the full name and extension of that file. For example, /examples/file.md is a fully qualified path to a file named file.md in a folder named examples.</p>
   */
  filePath: string;

  /**
   * <p>The ID of the commit that is the tip of the branch where you want to create the commit that will delete the file. This must be the HEAD commit for the branch. The commit that deletes the file will be created from this commit ID.</p>
   */
  parentCommitId: string;

  /**
   * <p>Specifies whether to delete the folder or directory that contains the file you want to delete if that file is the only object in the folder or directory. By default, empty folders will be deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 will also delete the empty folders dir4, dir3, and dir2.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The commit message you want to include as part of deleting the file. Commit messages are limited to 256 KB. If no message is specified, a default message will be used.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the author of the commit that deletes the file. If no name is specified, the user's ARN will be used as the author name and committer name.</p>
   */
  name?: string;

  /**
   * <p>The email address for the commit that deletes the file. If no email address is specified, the email address will be left blank.</p>
   */
  email?: string;

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

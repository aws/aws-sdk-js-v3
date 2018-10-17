import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * PutFileInput shape
 */
export interface PutFileInput {
    /**
     * <p>The name of the repository where you want to add or update the file.</p>
     */
    repositoryName: string;

    /**
     * <p>The name of the branch where you want to add or update the file. If this is an empty repository, this branch will be created.</p>
     */
    branchName: string;

    /**
     * <p>The content of the file, in binary object format. </p>
     */
    fileContent: ArrayBuffer|ArrayBufferView|string;

    /**
     * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p> <note> <p>If the path does not currently exist in the repository, the path will be created as part of adding the file.</p> </note>
     */
    filePath: string;

    /**
     * <p>The file mode permissions of the blob. Valid file mode permissions are listed below.</p>
     */
    fileMode?: 'EXECUTABLE'|'NORMAL'|'SYMLINK'|string;

    /**
     * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required. </p> <p>The commit ID must match the ID of the head commit at the time of the operation, or an error will occur, and the file will not be added or updated.</p>
     */
    parentCommitId?: string;

    /**
     * <p>A message about why this file was added or updated. While optional, adding a message is strongly encouraged in order to provide a more useful commit history for your repository.</p>
     */
    commitMessage?: string;

    /**
     * <p>The name of the person adding or updating the file. While optional, adding a name is strongly encouraged in order to provide a more useful commit history for your repository.</p>
     */
    name?: string;

    /**
     * <p>An email address for the person adding or updating the file.</p>
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
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}
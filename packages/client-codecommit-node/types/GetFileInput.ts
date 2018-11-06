import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetFileInput shape
 */
export interface GetFileInput {
    /**
     * <p>The name of the repository that contains the file.</p>
     */
    repositoryName: string;

    /**
     * <p>The fully-quaified reference that identifies the commit that contains the file. For example, you could specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/master. If none is provided, then the head commit will be used.</p>
     */
    commitSpecifier?: string;

    /**
     * <p>The fully-qualified path to the file, including the full name and extension of the file. For example, /examples/file.md is the fully-qualified path to a file named file.md in a folder named examples.</p>
     */
    filePath: string;

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
import {BrowserHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * <p>Provides options to add an archive to a vault.</p>
 */
export interface UploadArchiveInput<StreamType = ReadableStream> {
    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. </p>
     */
    accountId: string;

    /**
     * <p>The optional description of the archive you are uploading.</p>
     */
    archiveDescription?: string;

    /**
     * <p>The SHA256 tree hash of the data being uploaded.</p>
     */
    checksum?: string;

    /**
     * <p>The data to upload.</p>
     */
    body?: ArrayBuffer|ArrayBufferView|string|StreamType;

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
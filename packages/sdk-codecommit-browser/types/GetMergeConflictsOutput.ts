import * as __aws_types from '@aws/types';

/**
 * GetMergeConflictsOutput shape
 */
export interface GetMergeConflictsOutput {
    /**
     * <p>A Boolean value that indicates whether the code is mergable by the specified merge option.</p>
     */
    mergeable: boolean;

    /**
     * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
     */
    destinationCommitId: string;

    /**
     * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
     */
    sourceCommitId: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}

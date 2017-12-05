/**
 * <p>Represents the input of a get blob operation.</p>
 */
export interface GetBlobInput {
    /**
     * <p>The name of the repository that contains the blob.</p>
     */
    repositoryName: string;

    /**
     * <p>The ID of the blob, which is its SHA-1 pointer.</p>
     */
    blobId: string;
}
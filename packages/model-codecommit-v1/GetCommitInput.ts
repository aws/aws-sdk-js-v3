/**
 * <p>Represents the input of a get commit operation.</p>
 */
export interface GetCommitInput {
    /**
     * <p>The name of the repository to which the commit was made.</p>
     */
    repositoryName: string;
    
    /**
     * <p>The commit ID. Commit IDs are the full SHA of the commit.</p>
     */
    commitId: string;
}
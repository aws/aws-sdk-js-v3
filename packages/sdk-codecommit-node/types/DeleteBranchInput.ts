/**
 * <p>Represents the input of a delete branch operation.</p>
 */
export interface DeleteBranchInput {
    /**
     * <p>The name of the repository that contains the branch to be deleted.</p>
     */
    repositoryName: string;

    /**
     * <p>The name of the branch to delete.</p>
     */
    branchName: string;
}
/**
 * <p>Represents the input of a get branch operation.</p>
 */
export interface GetBranchInput {
    /**
     * <p>The name of the repository that contains the branch for which you want to retrieve information.</p>
     */
    repositoryName?: string;

    /**
     * <p>The name of the branch for which you want to retrieve information.</p>
     */
    branchName?: string;
}
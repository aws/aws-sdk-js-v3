/**
 * <p>Represents the input of a create branch operation.</p>
 */
export interface CreateBranchInput {
    /**
     * <p>The name of the repository in which you want to create the new branch.</p>
     */
    repositoryName: string;
    
    /**
     * <p>The name of the new branch to create.</p>
     */
    branchName: string;
    
    /**
     * <p>The ID of the commit to point the new branch to.</p>
     */
    commitId: string;
}
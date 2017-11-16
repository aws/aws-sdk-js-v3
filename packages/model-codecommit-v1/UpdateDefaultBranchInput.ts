/**
 * <p>Represents the input of an update default branch operation.</p>
 */
export interface UpdateDefaultBranchInput {
    /**
     * <p>The name of the repository to set or change the default branch for.</p>
     */
    repositoryName: string;
    
    /**
     * <p>The name of the branch to set as the default.</p>
     */
    defaultBranchName: string;
}
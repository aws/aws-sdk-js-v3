/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryDescriptionInput {
    /**
     * <p>The name of the repository to set or change the comment or description for.</p>
     */
    repositoryName: string;
    
    /**
     * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
     */
    repositoryDescription?: string;
}
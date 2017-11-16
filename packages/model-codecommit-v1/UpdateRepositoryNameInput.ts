/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryNameInput {
    /**
     * <p>The existing name of the repository.</p>
     */
    oldName: string;
    
    /**
     * <p>The new name for the repository.</p>
     */
    newName: string;
}
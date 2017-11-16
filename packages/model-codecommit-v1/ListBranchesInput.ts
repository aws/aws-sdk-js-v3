/**
 * <p>Represents the input of a list branches operation.</p>
 */
export interface ListBranchesInput {
    /**
     * <p>The name of the repository that contains the branches.</p>
     */
    repositoryName: string;
    
    /**
     * <p>An enumeration token that allows the operation to batch the results.</p>
     */
    nextToken?: string;
}
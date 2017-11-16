/**
 * <p>Represents the input of a list repositories operation.</p>
 */
export interface ListRepositoriesInput {
    /**
     * <p>An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.</p>
     */
    nextToken?: string;
    
    /**
     * <p>The criteria used to sort the results of a list repositories operation.</p>
     */
    sortBy?: 'repositoryName'|'lastModifiedDate'|string;
    
    /**
     * <p>The order in which to sort the results of a list repositories operation.</p>
     */
    order?: 'ascending'|'descending'|string;
}
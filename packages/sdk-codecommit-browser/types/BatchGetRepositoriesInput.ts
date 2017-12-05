/**
 * <p>Represents the input of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesInput {
    /**
     * <p>The names of the repositories to get information about.</p>
     */
    repositoryNames: Array<string>|Iterable<string>;
}
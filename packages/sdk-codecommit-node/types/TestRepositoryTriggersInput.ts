import {_RepositoryTrigger} from './_RepositoryTrigger';

/**
 * <p>Represents the input of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersInput {
    /**
     * <p>The name of the repository in which to test the triggers.</p>
     */
    repositoryName: string;

    /**
     * <p>The list of triggers to test.</p>
     */
    triggers: Array<_RepositoryTrigger>|Iterable<_RepositoryTrigger>;
}
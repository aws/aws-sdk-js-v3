import {_RepositoryTrigger} from './_RepositoryTrigger';

/**
 * <p>Represents the input ofa put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersInput {
    /**
     * <p>The name of the repository where you want to create or update the trigger.</p>
     */
    repositoryName: string;
    
    /**
     * <p>The JSON block of configuration information for each trigger.</p>
     */
    triggers: Array<_RepositoryTrigger>|Iterable<_RepositoryTrigger>;
}
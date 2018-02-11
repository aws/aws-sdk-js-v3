import {_RepositoryTrigger} from './_RepositoryTrigger';
import {BrowserHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

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

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}
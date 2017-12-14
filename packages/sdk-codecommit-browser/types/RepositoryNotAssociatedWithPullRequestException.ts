import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The repository does not contain any pull requests with that pull request ID. Check to make sure you have provided the correct repository name for the pull request.</p>
 */
export interface RepositoryNotAssociatedWithPullRequestException extends __ServiceException__<_RepositoryNotAssociatedWithPullRequestExceptionDetails> {
    name: 'RepositoryNotAssociatedWithPullRequestException';
}

export interface _RepositoryNotAssociatedWithPullRequestExceptionDetails {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 */
export interface InvalidPullRequestIdException extends __ServiceException__<_InvalidPullRequestIdExceptionDetails> {
    name: 'InvalidPullRequestIdException';
}

export interface _InvalidPullRequestIdExceptionDetails {

}
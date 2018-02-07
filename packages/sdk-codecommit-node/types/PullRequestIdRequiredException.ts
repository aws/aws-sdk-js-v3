import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A pull request ID is required, but none was provided.</p>
 */
export interface PullRequestIdRequiredException extends __ServiceException__<_PullRequestIdRequiredExceptionDetails> {
    name: 'PullRequestIdRequiredException';
}

export interface _PullRequestIdRequiredExceptionDetails {

}
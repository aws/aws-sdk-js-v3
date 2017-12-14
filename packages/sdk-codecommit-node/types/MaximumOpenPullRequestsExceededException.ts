import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You cannot create the pull request because the repository has too many open pull requests. The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
 */
export interface MaximumOpenPullRequestsExceededException extends __ServiceException__<_MaximumOpenPullRequestsExceededExceptionDetails> {
    name: 'MaximumOpenPullRequestsExceededException';
}

export interface _MaximumOpenPullRequestsExceededExceptionDetails {

}
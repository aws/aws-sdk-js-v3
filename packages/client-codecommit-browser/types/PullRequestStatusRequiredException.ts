import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A pull request status is required, but none was provided.</p>
 */
export interface PullRequestStatusRequiredException extends __ServiceException__<_PullRequestStatusRequiredExceptionDetails> {
    name: 'PullRequestStatusRequiredException';
}

export interface _PullRequestStatusRequiredExceptionDetails {

}
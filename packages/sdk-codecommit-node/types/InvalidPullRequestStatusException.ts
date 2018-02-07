import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusException extends __ServiceException__<_InvalidPullRequestStatusExceptionDetails> {
    name: 'InvalidPullRequestStatusException';
}

export interface _InvalidPullRequestStatusExceptionDetails {

}
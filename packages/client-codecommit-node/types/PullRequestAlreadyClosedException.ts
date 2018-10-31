import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The pull request status cannot be updated because it is already closed.</p>
 */
export interface PullRequestAlreadyClosedException extends __ServiceException__<_PullRequestAlreadyClosedExceptionDetails> {
    name: 'PullRequestAlreadyClosedException';
}

export interface _PullRequestAlreadyClosedExceptionDetails {

}
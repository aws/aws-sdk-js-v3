import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 */
export interface CommitDoesNotExistException extends __ServiceException__<_CommitDoesNotExistExceptionDetails> {
    name: 'CommitDoesNotExistException';
}

export interface _CommitDoesNotExistExceptionDetails {

}
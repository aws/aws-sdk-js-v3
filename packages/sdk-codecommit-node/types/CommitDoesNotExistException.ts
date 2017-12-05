import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 */
export interface CommitDoesNotExistException extends __ServiceException__ {
    name: 'CommitDoesNotExistException';
    details: CommitDoesNotExistExceptionDetails_;
}

export interface CommitDoesNotExistExceptionDetails_ {

}
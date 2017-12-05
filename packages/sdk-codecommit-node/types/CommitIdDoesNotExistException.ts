import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified commit ID does not exist.</p>
 */
export interface CommitIdDoesNotExistException extends __ServiceException__ {
    name: 'CommitIdDoesNotExistException';
    details: CommitIdDoesNotExistExceptionDetails_;
}

export interface CommitIdDoesNotExistExceptionDetails_ {

}
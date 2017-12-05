import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified commit ID is not valid.</p>
 */
export interface InvalidCommitIdException extends __ServiceException__ {
    name: 'InvalidCommitIdException';
    details: InvalidCommitIdExceptionDetails_;
}

export interface InvalidCommitIdExceptionDetails_ {

}
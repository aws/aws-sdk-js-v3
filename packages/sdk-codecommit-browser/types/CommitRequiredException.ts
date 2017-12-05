import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A commit was not specified.</p>
 */
export interface CommitRequiredException extends __ServiceException__ {
    name: 'CommitRequiredException';
    details: CommitRequiredExceptionDetails_;
}

export interface CommitRequiredExceptionDetails_ {

}
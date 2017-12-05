import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A commit ID was not specified.</p>
 */
export interface CommitIdRequiredException extends __ServiceException__ {
    name: 'CommitIdRequiredException';
    details: CommitIdRequiredExceptionDetails_;
}

export interface CommitIdRequiredExceptionDetails_ {

}
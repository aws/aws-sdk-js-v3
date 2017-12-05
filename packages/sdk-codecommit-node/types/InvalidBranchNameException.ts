import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified branch name is not valid.</p>
 */
export interface InvalidBranchNameException extends __ServiceException__ {
    name: 'InvalidBranchNameException';
    details: InvalidBranchNameExceptionDetails_;
}

export interface InvalidBranchNameExceptionDetails_ {

}
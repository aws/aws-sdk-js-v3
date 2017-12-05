import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The number of branches for the trigger was exceeded.</p>
 */
export interface MaximumBranchesExceededException extends __ServiceException__ {
    name: 'MaximumBranchesExceededException';
    details: MaximumBranchesExceededExceptionDetails_;
}

export interface MaximumBranchesExceededExceptionDetails_ {

}
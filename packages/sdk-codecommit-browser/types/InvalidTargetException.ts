import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface InvalidTargetException extends __ServiceException__<_InvalidTargetExceptionDetails> {
    name: 'InvalidTargetException';
}

export interface _InvalidTargetExceptionDetails {

}
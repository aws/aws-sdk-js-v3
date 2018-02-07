import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface TargetRequiredException extends __ServiceException__<_TargetRequiredExceptionDetails> {
    name: 'TargetRequiredException';
}

export interface _TargetRequiredExceptionDetails {

}
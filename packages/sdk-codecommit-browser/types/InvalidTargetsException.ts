import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for the repository name, source branch, and destination branch for a pull request.</p>
 */
export interface InvalidTargetsException extends __ServiceException__<_InvalidTargetsExceptionDetails> {
    name: 'InvalidTargetsException';
}

export interface _InvalidTargetsExceptionDetails {

}
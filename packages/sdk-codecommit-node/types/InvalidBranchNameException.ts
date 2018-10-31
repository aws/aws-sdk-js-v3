import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified reference name is not valid.</p>
 */
export interface InvalidBranchNameException extends __ServiceException__<_InvalidBranchNameExceptionDetails> {
    name: 'InvalidBranchNameException';
}

export interface _InvalidBranchNameExceptionDetails {

}
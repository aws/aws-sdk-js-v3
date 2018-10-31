import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified branch does not exist.</p>
 */
export interface BranchDoesNotExistException extends __ServiceException__<_BranchDoesNotExistExceptionDetails> {
    name: 'BranchDoesNotExistException';
}

export interface _BranchDoesNotExistExceptionDetails {

}
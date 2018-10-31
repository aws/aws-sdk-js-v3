import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
 */
export interface ParentCommitDoesNotExistException extends __ServiceException__<_ParentCommitDoesNotExistExceptionDetails> {
    name: 'ParentCommitDoesNotExistException';
}

export interface _ParentCommitDoesNotExistExceptionDetails {

}
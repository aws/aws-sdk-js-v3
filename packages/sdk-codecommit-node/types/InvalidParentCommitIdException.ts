import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.</p>
 */
export interface InvalidParentCommitIdException extends __ServiceException__<_InvalidParentCommitIdExceptionDetails> {
    name: 'InvalidParentCommitIdException';
}

export interface _InvalidParentCommitIdExceptionDetails {

}
import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified repository name already exists.</p>
 */
export interface RepositoryNameExistsException extends __ServiceException__<_RepositoryNameExistsExceptionDetails> {
    name: 'RepositoryNameExistsException';
}

export interface _RepositoryNameExistsExceptionDetails {

}
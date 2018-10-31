import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified repository does not exist.</p>
 */
export interface RepositoryDoesNotExistException extends __ServiceException__<_RepositoryDoesNotExistExceptionDetails> {
    name: 'RepositoryDoesNotExistException';
}

export interface _RepositoryDoesNotExistExceptionDetails {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified repository does not exist.</p>
 */
export interface RepositoryDoesNotExistException extends __ServiceException__ {
    name: 'RepositoryDoesNotExistException';
    details: RepositoryDoesNotExistExceptionDetails_;
}

export interface RepositoryDoesNotExistExceptionDetails_ {

}
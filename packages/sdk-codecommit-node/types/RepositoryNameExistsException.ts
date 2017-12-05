import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified repository name already exists.</p>
 */
export interface RepositoryNameExistsException extends __ServiceException__ {
    name: 'RepositoryNameExistsException';
    details: RepositoryNameExistsExceptionDetails_;
}

export interface RepositoryNameExistsExceptionDetails_ {

}
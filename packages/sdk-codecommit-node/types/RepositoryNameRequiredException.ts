import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A repository name is required but was not specified.</p>
 */
export interface RepositoryNameRequiredException extends __ServiceException__ {
    name: 'RepositoryNameRequiredException';
    details: RepositoryNameRequiredExceptionDetails_;
}

export interface RepositoryNameRequiredExceptionDetails_ {

}
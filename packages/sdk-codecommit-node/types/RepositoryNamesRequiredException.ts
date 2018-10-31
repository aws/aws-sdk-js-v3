import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A repository names object is required but was not specified.</p>
 */
export interface RepositoryNamesRequiredException extends __ServiceException__<_RepositoryNamesRequiredExceptionDetails> {
    name: 'RepositoryNamesRequiredException';
}

export interface _RepositoryNamesRequiredExceptionDetails {

}
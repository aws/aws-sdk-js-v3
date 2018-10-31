import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The list of triggers for the repository is required but was not specified.</p>
 */
export interface RepositoryTriggersListRequiredException extends __ServiceException__<_RepositoryTriggersListRequiredExceptionDetails> {
    name: 'RepositoryTriggersListRequiredException';
}

export interface _RepositoryTriggersListRequiredExceptionDetails {

}
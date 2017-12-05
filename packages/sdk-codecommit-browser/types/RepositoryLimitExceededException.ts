import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A repository resource limit was exceeded.</p>
 */
export interface RepositoryLimitExceededException extends __ServiceException__ {
    name: 'RepositoryLimitExceededException';
    details: RepositoryLimitExceededExceptionDetails_;
}

export interface RepositoryLimitExceededExceptionDetails_ {

}
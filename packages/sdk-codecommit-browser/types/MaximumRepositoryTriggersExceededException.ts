import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 */
export interface MaximumRepositoryTriggersExceededException extends __ServiceException__ {
    name: 'MaximumRepositoryTriggersExceededException';
    details: MaximumRepositoryTriggersExceededExceptionDetails_;
}

export interface MaximumRepositoryTriggersExceededExceptionDetails_ {

}
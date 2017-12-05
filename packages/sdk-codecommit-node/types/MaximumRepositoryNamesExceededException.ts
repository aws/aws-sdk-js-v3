import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 25.</p>
 */
export interface MaximumRepositoryNamesExceededException extends __ServiceException__ {
    name: 'MaximumRepositoryNamesExceededException';
    details: MaximumRepositoryNamesExceededExceptionDetails_;
}

export interface MaximumRepositoryNamesExceededExceptionDetails_ {

}
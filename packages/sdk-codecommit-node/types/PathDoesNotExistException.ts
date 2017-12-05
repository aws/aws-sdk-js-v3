import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified path does not exist.</p>
 */
export interface PathDoesNotExistException extends __ServiceException__ {
    name: 'PathDoesNotExistException';
    details: PathDoesNotExistExceptionDetails_;
}

export interface PathDoesNotExistExceptionDetails_ {

}
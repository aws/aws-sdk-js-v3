import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The filePath for a location cannot be empty or null.</p>
 */
export interface PathRequiredException extends __ServiceException__<_PathRequiredExceptionDetails> {
    name: 'PathRequiredException';
}

export interface _PathRequiredExceptionDetails {

}
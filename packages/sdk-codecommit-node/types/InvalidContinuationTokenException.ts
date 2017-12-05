import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified continuation token is not valid.</p>
 */
export interface InvalidContinuationTokenException extends __ServiceException__ {
    name: 'InvalidContinuationTokenException';
    details: InvalidContinuationTokenExceptionDetails_;
}

export interface InvalidContinuationTokenExceptionDetails_ {

}
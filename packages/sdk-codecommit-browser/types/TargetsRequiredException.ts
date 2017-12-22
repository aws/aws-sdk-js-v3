import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>An array of target objects is required. It cannot be empty or null.</p>
 */
export interface TargetsRequiredException extends __ServiceException__<_TargetsRequiredExceptionDetails> {
    name: 'TargetsRequiredException';
}

export interface _TargetsRequiredExceptionDetails {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A blob ID is required but was not specified.</p>
 */
export interface BlobIdRequiredException extends __ServiceException__<_BlobIdRequiredExceptionDetails> {
    name: 'BlobIdRequiredException';
}

export interface _BlobIdRequiredExceptionDetails {

}
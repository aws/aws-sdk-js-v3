import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A blob ID is required but was not specified.</p>
 */
export interface BlobIdRequiredException extends __ServiceException__ {
    name: 'BlobIdRequiredException';
    details: BlobIdRequiredExceptionDetails_;
}

export interface BlobIdRequiredExceptionDetails_ {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified blob does not exist.</p>
 */
export interface BlobIdDoesNotExistException extends __ServiceException__ {
    name: 'BlobIdDoesNotExistException';
    details: BlobIdDoesNotExistExceptionDetails_;
}

export interface BlobIdDoesNotExistExceptionDetails_ {

}
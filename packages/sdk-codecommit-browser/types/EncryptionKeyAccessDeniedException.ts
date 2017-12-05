import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>An encryption key could not be accessed.</p>
 */
export interface EncryptionKeyAccessDeniedException extends __ServiceException__ {
    name: 'EncryptionKeyAccessDeniedException';
    details: EncryptionKeyAccessDeniedExceptionDetails_;
}

export interface EncryptionKeyAccessDeniedExceptionDetails_ {

}
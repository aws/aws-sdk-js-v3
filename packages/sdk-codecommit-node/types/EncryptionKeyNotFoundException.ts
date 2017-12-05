import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>No encryption key was found.</p>
 */
export interface EncryptionKeyNotFoundException extends __ServiceException__ {
    name: 'EncryptionKeyNotFoundException';
    details: EncryptionKeyNotFoundExceptionDetails_;
}

export interface EncryptionKeyNotFoundExceptionDetails_ {

}
import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>No encryption key was found.</p>
 */
export interface EncryptionKeyNotFoundException extends __ServiceException__<_EncryptionKeyNotFoundExceptionDetails> {
    name: 'EncryptionKeyNotFoundException';
}

export interface _EncryptionKeyNotFoundExceptionDetails {

}
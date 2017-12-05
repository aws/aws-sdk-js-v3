import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The encryption key is disabled.</p>
 */
export interface EncryptionKeyDisabledException extends __ServiceException__ {
    name: 'EncryptionKeyDisabledException';
    details: EncryptionKeyDisabledExceptionDetails_;
}

export interface EncryptionKeyDisabledExceptionDetails_ {

}
import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>An encryption integrity check failed.</p>
 */
export interface EncryptionIntegrityChecksFailedException extends __ServiceException__ {
    name: 'EncryptionIntegrityChecksFailedException';
    details: EncryptionIntegrityChecksFailedExceptionDetails_;
}

export interface EncryptionIntegrityChecksFailedExceptionDetails_ {

}
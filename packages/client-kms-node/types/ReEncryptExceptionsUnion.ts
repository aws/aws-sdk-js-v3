import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type ReEncryptExceptionsUnion = NotFoundException |
    DisabledException |
    InvalidCiphertextException |
    KeyUnavailableException |
    DependencyTimeoutException |
    InvalidKeyUsageException |
    InvalidGrantTokenException |
    KMSInternalException |
    KMSInvalidStateException;

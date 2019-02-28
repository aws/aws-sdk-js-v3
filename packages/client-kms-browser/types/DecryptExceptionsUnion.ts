import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type DecryptExceptionsUnion = NotFoundException |
    DisabledException |
    InvalidCiphertextException |
    KeyUnavailableException |
    DependencyTimeoutException |
    InvalidGrantTokenException |
    KMSInternalException |
    KMSInvalidStateException;

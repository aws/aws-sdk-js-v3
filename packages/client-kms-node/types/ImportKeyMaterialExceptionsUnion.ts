import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {IncorrectKeyMaterialException} from './IncorrectKeyMaterialException';
import {ExpiredImportTokenException} from './ExpiredImportTokenException';
import {InvalidImportTokenException} from './InvalidImportTokenException';
export type ImportKeyMaterialExceptionsUnion = InvalidArnException |
    UnsupportedOperationException |
    DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException |
    InvalidCiphertextException |
    IncorrectKeyMaterialException |
    ExpiredImportTokenException |
    InvalidImportTokenException;

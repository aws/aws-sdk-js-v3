import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type DeleteImportedKeyMaterialExceptionsUnion = InvalidArnException |
    UnsupportedOperationException |
    DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException;

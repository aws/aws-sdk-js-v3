import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type DeleteAliasExceptionsUnion = DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException;

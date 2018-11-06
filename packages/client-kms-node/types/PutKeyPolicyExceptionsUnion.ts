import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {MalformedPolicyDocumentException} from './MalformedPolicyDocumentException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type PutKeyPolicyExceptionsUnion = NotFoundException |
    InvalidArnException |
    MalformedPolicyDocumentException |
    DependencyTimeoutException |
    UnsupportedOperationException |
    KMSInternalException |
    LimitExceededException |
    KMSInvalidStateException;

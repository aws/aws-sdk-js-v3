import {ConcurrentModification} from './ConcurrentModification';
import {TooManyVPCAssociationAuthorizations} from './TooManyVPCAssociationAuthorizations';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
export type CreateVPCAssociationAuthorizationExceptionsUnion = ConcurrentModification |
    TooManyVPCAssociationAuthorizations |
    NoSuchHostedZone |
    InvalidVPCId |
    InvalidInput;

import {InvalidDomainName} from './InvalidDomainName';
import {HostedZoneAlreadyExists} from './HostedZoneAlreadyExists';
import {TooManyHostedZones} from './TooManyHostedZones';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
import {DelegationSetNotAvailable} from './DelegationSetNotAvailable';
import {ConflictingDomainExists} from './ConflictingDomainExists';
import {NoSuchDelegationSet} from './NoSuchDelegationSet';
import {DelegationSetNotReusable} from './DelegationSetNotReusable';
export type CreateHostedZoneExceptionsUnion = InvalidDomainName |
    HostedZoneAlreadyExists |
    TooManyHostedZones |
    InvalidVPCId |
    InvalidInput |
    DelegationSetNotAvailable |
    ConflictingDomainExists |
    NoSuchDelegationSet |
    DelegationSetNotReusable;

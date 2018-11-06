import {AssociateVPCWithHostedZoneInput} from './AssociateVPCWithHostedZoneInput';
import {AssociateVPCWithHostedZoneOutput} from './AssociateVPCWithHostedZoneOutput';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {NotAuthorizedException} from './NotAuthorizedException';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
import {PublicZoneVPCAssociation} from './PublicZoneVPCAssociation';
import {ConflictingDomainExists} from './ConflictingDomainExists';
import {LimitsExceeded} from './LimitsExceeded';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AssociateVPCWithHostedZone: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AssociateVPCWithHostedZone',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/hostedzone/{Id}/associatevpc',
    },
    input: {
        shape: AssociateVPCWithHostedZoneInput,
        locationName: 'AssociateVPCWithHostedZoneRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: AssociateVPCWithHostedZoneOutput,
    },
    errors: [
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: NotAuthorizedException,
        },
        {
            shape: InvalidVPCId,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: PublicZoneVPCAssociation,
        },
        {
            shape: ConflictingDomainExists,
        },
        {
            shape: LimitsExceeded,
        },
    ],
};
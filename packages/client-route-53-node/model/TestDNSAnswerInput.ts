import {Structure as _Structure_} from '@aws-sdk/types';

export const TestDNSAnswerInput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZoneId',
        'RecordName',
        'RecordType',
    ],
    members: {
        HostedZoneId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'hostedzoneid',
        },
        RecordName: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'recordname',
        },
        RecordType: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'recordtype',
        },
        ResolverIP: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'resolverip',
        },
        EDNS0ClientSubnetIP: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'edns0clientsubnetip',
        },
        EDNS0ClientSubnetMask: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'edns0clientsubnetmask',
        },
    },
};
import {_TrafficPolicyInstances} from './_TrafficPolicyInstances';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTrafficPolicyInstancesByPolicyOutput: _Structure_ = {
    type: 'structure',
    required: [
        'TrafficPolicyInstances',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        TrafficPolicyInstances: {
            shape: _TrafficPolicyInstances,
        },
        HostedZoneIdMarker: {
            shape: {
                type: 'string',
            },
        },
        TrafficPolicyInstanceNameMarker: {
            shape: {
                type: 'string',
            },
        },
        TrafficPolicyInstanceTypeMarker: {
            shape: {
                type: 'string',
            },
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
        },
    },
};
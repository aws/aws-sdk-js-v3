import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeJobInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
        'jobId',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        vaultName: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'vaultName',
        },
        jobId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'jobId',
        },
    },
};
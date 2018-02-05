import {Structure as _Structure_} from '@aws/types';

export const GetJobOutputInput: _Structure_ = {
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
        range: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Range',
        },
    },
};
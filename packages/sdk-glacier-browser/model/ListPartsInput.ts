import {Structure as _Structure_} from '@aws-sdk/types';

export const ListPartsInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
        'uploadId',
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
        uploadId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'uploadId',
        },
        marker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'marker',
        },
        limit: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'limit',
        },
    },
};
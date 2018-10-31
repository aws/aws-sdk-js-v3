import {Structure as _Structure_} from '@aws-sdk/types';

export const AbortMultipartUploadInput: _Structure_ = {
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
    },
};
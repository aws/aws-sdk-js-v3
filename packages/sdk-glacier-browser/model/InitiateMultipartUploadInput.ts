import {Structure as _Structure_} from '@aws/types';

export const InitiateMultipartUploadInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
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
        archiveDescription: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-archive-description',
        },
        partSize: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-part-size',
        },
    },
};
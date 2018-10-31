import {Structure as _Structure_} from '@aws-sdk/types';

export const UploadMultipartPartInput: _Structure_ = {
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
        checksum: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-sha256-tree-hash',
        },
        range: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-Range',
        },
        body: {
            shape: {
                type: 'blob',
                streaming: true,
            },
        },
    },
    payload: 'body',
};
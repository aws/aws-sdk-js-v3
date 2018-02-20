import {Structure as _Structure_} from '@aws/types';

export const UploadArchiveInput: _Structure_ = {
    type: 'structure',
    required: [
        'vaultName',
        'accountId',
    ],
    members: {
        vaultName: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'vaultName',
        },
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        archiveDescription: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-archive-description',
        },
        checksum: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-sha256-tree-hash',
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
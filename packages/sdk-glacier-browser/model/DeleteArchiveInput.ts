import {Structure as _Structure_} from '@aws/types';

export const DeleteArchiveInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
        'archiveId',
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
        archiveId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'archiveId',
        },
    },
};
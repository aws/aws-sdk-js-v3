import {Structure as _Structure_} from '@aws-sdk/types';

export const _BackupDetails: _Structure_ = {
    type: 'structure',
    required: [
        'BackupArn',
        'BackupName',
        'BackupStatus',
        'BackupType',
        'BackupCreationDateTime',
    ],
    members: {
        BackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
        BackupName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        BackupSizeBytes: {
            shape: {
                type: 'integer',
            },
        },
        BackupStatus: {
            shape: {
                type: 'string',
            },
        },
        BackupType: {
            shape: {
                type: 'string',
            },
        },
        BackupCreationDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
        BackupExpiryDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};
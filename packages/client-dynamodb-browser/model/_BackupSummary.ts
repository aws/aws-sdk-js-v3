import {Structure as _Structure_} from '@aws-sdk/types';

export const _BackupSummary: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        TableId: {
            shape: {
                type: 'string',
            },
        },
        TableArn: {
            shape: {
                type: 'string',
            },
        },
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
        BackupSizeBytes: {
            shape: {
                type: 'integer',
            },
        },
    },
};
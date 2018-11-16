import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateBackupInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
        'BackupName',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        BackupName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const RestoreTableFromBackupInput: _Structure_ = {
    type: 'structure',
    required: [
        'TargetTableName',
        'BackupArn',
    ],
    members: {
        TargetTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        BackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
    },
};
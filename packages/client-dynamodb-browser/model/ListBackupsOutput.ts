import {_BackupSummaries} from './_BackupSummaries';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListBackupsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BackupSummaries: {
            shape: _BackupSummaries,
        },
        LastEvaluatedBackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
    },
};
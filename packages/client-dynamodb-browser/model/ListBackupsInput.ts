import {Structure as _Structure_} from '@aws-sdk/types';

export const ListBackupsInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        TimeRangeLowerBound: {
            shape: {
                type: 'timestamp',
            },
        },
        TimeRangeUpperBound: {
            shape: {
                type: 'timestamp',
            },
        },
        ExclusiveStartBackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
        BackupType: {
            shape: {
                type: 'string',
            },
        },
    },
};
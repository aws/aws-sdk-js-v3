import {_ReplicaUpdateList} from './_ReplicaUpdateList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateGlobalTableInput: _Structure_ = {
    type: 'structure',
    required: [
        'GlobalTableName',
        'ReplicaUpdates',
    ],
    members: {
        GlobalTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        ReplicaUpdates: {
            shape: _ReplicaUpdateList,
        },
    },
};
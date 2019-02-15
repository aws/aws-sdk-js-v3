import {_ReplicaList} from './_ReplicaList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateGlobalTableInput: _Structure_ = {
    type: 'structure',
    required: [
        'GlobalTableName',
        'ReplicationGroup',
    ],
    members: {
        GlobalTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        ReplicationGroup: {
            shape: _ReplicaList,
        },
    },
};
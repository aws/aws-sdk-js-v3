import {_ReplicaDescriptionList} from './_ReplicaDescriptionList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _GlobalTableDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ReplicationGroup: {
            shape: _ReplicaDescriptionList,
        },
        GlobalTableArn: {
            shape: {
                type: 'string',
            },
        },
        CreationDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
        GlobalTableStatus: {
            shape: {
                type: 'string',
            },
        },
        GlobalTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};
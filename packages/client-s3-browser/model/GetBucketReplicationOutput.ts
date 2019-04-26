import {_ReplicationConfiguration} from './_ReplicationConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetBucketReplicationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ReplicationConfiguration: {
            shape: _ReplicationConfiguration,
        },
    },
    payload: 'ReplicationConfiguration',
};
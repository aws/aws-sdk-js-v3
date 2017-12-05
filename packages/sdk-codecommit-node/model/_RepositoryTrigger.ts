import {_BranchNameList} from './_BranchNameList';
import {_RepositoryTriggerEventList} from './_RepositoryTriggerEventList';
import {Structure as _Structure_} from '@aws/types';

export const _RepositoryTrigger: _Structure_ = {
    type: 'structure',
    required: [
        'name',
        'destinationArn',
        'events',
    ],
    members: {
        name: {
            shape: {
                type: 'string',
            },
        },
        destinationArn: {
            shape: {
                type: 'string',
            },
        },
        customData: {
            shape: {
                type: 'string',
            },
        },
        branches: {
            shape: _BranchNameList,
        },
        events: {
            shape: _RepositoryTriggerEventList,
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Concurrency: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ReservedConcurrentExecutions: {
            shape: {
                type: 'integer',
            },
        },
    },
};
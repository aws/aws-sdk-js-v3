import {Structure as _Structure_} from '@aws/types';

export const _RepositoryTriggerExecutionFailure: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        trigger: {
            shape: {
                type: 'string',
            },
        },
        failureMessage: {
            shape: {
                type: 'string',
            },
        },
    },
};
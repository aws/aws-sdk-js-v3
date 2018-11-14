import {Structure as _Structure_} from '@aws-sdk/types';

export const _FunctionCodeLocation: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RepositoryType: {
            shape: {
                type: 'string',
            },
        },
        Location: {
            shape: {
                type: 'string',
            },
        },
    },
};
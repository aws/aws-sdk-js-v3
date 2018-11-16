import {Structure as _Structure_} from '@aws-sdk/types';

export const _AccountUsage: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TotalCodeSize: {
            shape: {
                type: 'integer',
            },
        },
        FunctionCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};
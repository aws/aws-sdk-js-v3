import {Structure as _Structure_} from '@aws-sdk/types';

export const _HistogramEntry: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Value: {
            shape: {
                type: 'float',
            },
        },
        Count: {
            shape: {
                type: 'integer',
            },
        },
    },
};
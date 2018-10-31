import {Map as _Map_} from '@aws-sdk/types';

export const _ScoreValuePerLabelMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: {
            type: 'float',
        },
    },
};
import {Map as _Map_} from '@aws/types';

export const _LoginsMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};
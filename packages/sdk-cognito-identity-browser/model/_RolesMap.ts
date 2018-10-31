import {Map as _Map_} from '@aws-sdk/types';

export const _RolesMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: {
            type: 'string',
            min: 20,
        },
    },
};
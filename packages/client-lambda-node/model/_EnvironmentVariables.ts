import {Map as _Map_} from '@aws-sdk/types';

export const _EnvironmentVariables: _Map_ = {
    type: 'map',
    sensitive: true,
    key: {
        shape: {
            type: 'string',
            sensitive: true,
        },
    },
    value: {
        shape: {
            type: 'string',
            sensitive: true,
        },
    },
};
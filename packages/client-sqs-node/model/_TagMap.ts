import {Map as _Map_} from '@aws-sdk/types';

export const _TagMap: _Map_ = {
    type: 'map',
    flattened: true,
    key: {
        shape: {
            type: 'string',
        },
        locationName: 'Key',
    },
    value: {
        shape: {
            type: 'string',
        },
        locationName: 'Value',
    },
};
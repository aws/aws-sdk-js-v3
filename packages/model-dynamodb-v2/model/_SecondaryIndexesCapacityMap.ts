import {Map as _Map_} from '@aws/types';
import {_Capacity} from './_Capacity';

export const _SecondaryIndexesCapacityMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 3,
        },
    },
    value: {
        shape: _Capacity,
    },
};
import {Map as _Map_} from '@aws-sdk/types';
import {_ItemCollectionMetricsMultiple} from './_ItemCollectionMetricsMultiple';

export const _ItemCollectionMetricsPerTable: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 3,
        },
    },
    value: {
        shape: _ItemCollectionMetricsMultiple,
    },
};
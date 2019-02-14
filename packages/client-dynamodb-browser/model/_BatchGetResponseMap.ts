import {Map as _Map_} from '@aws-sdk/types';
import {_ItemList} from './_ItemList';

export const _BatchGetResponseMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 3,
        },
    },
    value: {
        shape: _ItemList,
    },
};
import {Map as _Map_} from '@aws-sdk/types';
import {_ItemResponse} from './_ItemResponse';

export const _MapOfItemResponse: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _ItemResponse,
    },
};
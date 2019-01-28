import {Map as _Map_} from '@aws-sdk/types';
import {_EventItemResponse} from './_EventItemResponse';

export const _MapOfEventItemResponse: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _EventItemResponse,
    },
};
import {Map as _Map_} from '@aws-sdk/types';
import {_MapOfEndpointMessageResult} from './_MapOfEndpointMessageResult';

export const _MapOfMapOfEndpointMessageResult: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _MapOfEndpointMessageResult,
    },
};
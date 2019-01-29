import {Map as _Map_} from '@aws-sdk/types';
import {_ChannelResponse} from './_ChannelResponse';

export const _MapOfChannelResponse: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _ChannelResponse,
    },
};
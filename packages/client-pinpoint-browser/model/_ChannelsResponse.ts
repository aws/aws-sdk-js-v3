import {_MapOfChannelResponse} from './_MapOfChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ChannelsResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Channels: {
            shape: _MapOfChannelResponse,
        },
    },
};
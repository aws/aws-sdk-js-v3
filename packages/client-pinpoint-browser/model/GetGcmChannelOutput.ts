import {_GCMChannelResponse} from './_GCMChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetGcmChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'GCMChannelResponse',
    ],
    members: {
        GCMChannelResponse: {
            shape: _GCMChannelResponse,
        },
    },
    payload: 'GCMChannelResponse',
};
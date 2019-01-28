import {_ADMChannelResponse} from './_ADMChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetAdmChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ADMChannelResponse',
    ],
    members: {
        ADMChannelResponse: {
            shape: _ADMChannelResponse,
        },
    },
    payload: 'ADMChannelResponse',
};
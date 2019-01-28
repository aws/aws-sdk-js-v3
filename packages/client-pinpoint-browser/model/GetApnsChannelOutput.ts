import {_APNSChannelResponse} from './_APNSChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetApnsChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'APNSChannelResponse',
    ],
    members: {
        APNSChannelResponse: {
            shape: _APNSChannelResponse,
        },
    },
    payload: 'APNSChannelResponse',
};
import {_APNSVoipChannelResponse} from './_APNSVoipChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetApnsVoipChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'APNSVoipChannelResponse',
    ],
    members: {
        APNSVoipChannelResponse: {
            shape: _APNSVoipChannelResponse,
        },
    },
    payload: 'APNSVoipChannelResponse',
};
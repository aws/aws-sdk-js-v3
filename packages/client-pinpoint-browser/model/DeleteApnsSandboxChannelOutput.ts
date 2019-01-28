import {_APNSSandboxChannelResponse} from './_APNSSandboxChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteApnsSandboxChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'APNSSandboxChannelResponse',
    ],
    members: {
        APNSSandboxChannelResponse: {
            shape: _APNSSandboxChannelResponse,
        },
    },
    payload: 'APNSSandboxChannelResponse',
};
import {_APNSSandboxChannelRequest} from './_APNSSandboxChannelRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateApnsSandboxChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'APNSSandboxChannelRequest',
    ],
    members: {
        APNSSandboxChannelRequest: {
            shape: _APNSSandboxChannelRequest,
        },
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
    },
    payload: 'APNSSandboxChannelRequest',
};
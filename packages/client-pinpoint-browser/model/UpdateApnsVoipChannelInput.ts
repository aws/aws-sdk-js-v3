import {_APNSVoipChannelRequest} from './_APNSVoipChannelRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateApnsVoipChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'APNSVoipChannelRequest',
    ],
    members: {
        APNSVoipChannelRequest: {
            shape: _APNSVoipChannelRequest,
        },
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
    },
    payload: 'APNSVoipChannelRequest',
};
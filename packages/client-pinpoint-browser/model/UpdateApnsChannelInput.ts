import {_APNSChannelRequest} from './_APNSChannelRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateApnsChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'APNSChannelRequest',
    ],
    members: {
        APNSChannelRequest: {
            shape: _APNSChannelRequest,
        },
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
    },
    payload: 'APNSChannelRequest',
};
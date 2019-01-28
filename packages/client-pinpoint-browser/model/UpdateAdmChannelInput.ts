import {_ADMChannelRequest} from './_ADMChannelRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateAdmChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'ADMChannelRequest',
    ],
    members: {
        ADMChannelRequest: {
            shape: _ADMChannelRequest,
        },
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
    },
    payload: 'ADMChannelRequest',
};
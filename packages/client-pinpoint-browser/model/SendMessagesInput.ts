import {_MessageRequest} from './_MessageRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const SendMessagesInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'MessageRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        MessageRequest: {
            shape: _MessageRequest,
        },
    },
    payload: 'MessageRequest',
};
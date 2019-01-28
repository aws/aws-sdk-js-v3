import {_EventsRequest} from './_EventsRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutEventsInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'EventsRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        EventsRequest: {
            shape: _EventsRequest,
        },
    },
    payload: 'EventsRequest',
};
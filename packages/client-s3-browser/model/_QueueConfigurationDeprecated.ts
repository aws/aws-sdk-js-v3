import {_EventList} from './_EventList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _QueueConfigurationDeprecated: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Event: {
            shape: {
                type: 'string',
            },
        },
        Events: {
            shape: _EventList,
            locationName: 'Event',
        },
        Queue: {
            shape: {
                type: 'string',
            },
        },
    },
};
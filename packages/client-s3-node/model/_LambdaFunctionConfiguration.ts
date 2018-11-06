import {_EventList} from './_EventList';
import {_NotificationConfigurationFilter} from './_NotificationConfigurationFilter';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _LambdaFunctionConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'LambdaFunctionArn',
        'Events',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        LambdaFunctionArn: {
            shape: {
                type: 'string',
            },
            locationName: 'CloudFunction',
        },
        Events: {
            shape: _EventList,
            locationName: 'Event',
        },
        Filter: {
            shape: _NotificationConfigurationFilter,
        },
    },
};
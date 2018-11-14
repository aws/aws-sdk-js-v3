import {Structure as _Structure_} from '@aws-sdk/types';

export const ListEventSourceMappingsInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EventSourceArn: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'EventSourceArn',
        },
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'querystring',
            locationName: 'FunctionName',
        },
        Marker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'Marker',
        },
        MaxItems: {
            shape: {
                type: 'integer',
                min: 1,
            },
            location: 'querystring',
            locationName: 'MaxItems',
        },
    },
};
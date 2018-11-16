import {Structure as _Structure_} from '@aws-sdk/types';

export const GetEventSourceMappingInput: _Structure_ = {
    type: 'structure',
    required: [
        'UUID',
    ],
    members: {
        UUID: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'UUID',
        },
    },
};
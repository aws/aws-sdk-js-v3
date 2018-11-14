import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteEventSourceMappingInput: _Structure_ = {
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
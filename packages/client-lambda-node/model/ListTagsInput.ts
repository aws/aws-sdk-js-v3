import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTagsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Resource',
    ],
    members: {
        Resource: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'ARN',
        },
    },
};
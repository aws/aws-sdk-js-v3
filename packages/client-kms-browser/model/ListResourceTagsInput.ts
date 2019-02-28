import {Structure as _Structure_} from '@aws-sdk/types';

export const ListResourceTagsInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Marker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
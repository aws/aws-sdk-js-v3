import {Structure as _Structure_} from '@aws-sdk/types';

export const ListRetirableGrantsInput: _Structure_ = {
    type: 'structure',
    required: [
        'RetiringPrincipal',
    ],
    members: {
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
        RetiringPrincipal: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
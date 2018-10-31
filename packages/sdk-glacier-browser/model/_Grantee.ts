import {Structure as _Structure_} from '@aws-sdk/types';

export const _Grantee: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        DisplayName: {
            shape: {
                type: 'string',
            },
        },
        URI: {
            shape: {
                type: 'string',
            },
        },
        ID: {
            shape: {
                type: 'string',
            },
        },
        EmailAddress: {
            shape: {
                type: 'string',
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const _Http: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        HttpURL: {
            shape: {
                type: 'string',
            },
        },
        HttpStatus: {
            shape: {
                type: 'integer',
            },
        },
        HttpMethod: {
            shape: {
                type: 'string',
            },
        },
        UserAgent: {
            shape: {
                type: 'string',
            },
        },
        ClientIp: {
            shape: {
                type: 'string',
            },
        },
    },
};
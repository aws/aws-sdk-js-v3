import {Structure as _Structure_} from '@aws/types';

export const ServiceUnavailableException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        type: {
            shape: {
                type: 'string',
            },
        },
        code: {
            shape: {
                type: 'string',
            },
        },
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'ServiceUnavailableException',
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const TooManyRequestsException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        retryAfterSeconds: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Retry-After',
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
        message: {
            shape: {
                type: 'string',
            },
        },
        Reason: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'TooManyRequestsException',
};
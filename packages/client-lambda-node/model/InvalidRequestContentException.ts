import {Structure as _Structure_} from '@aws-sdk/types';

export const InvalidRequestContentException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
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
    },
    exceptionType: 'InvalidRequestContentException',
};
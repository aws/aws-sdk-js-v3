import {Structure as _Structure_} from '@aws-sdk/types';

export const EC2UnexpectedException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
        EC2ErrorCode: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'EC2UnexpectedException',
};
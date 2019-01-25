import {Structure as _Structure_} from '@aws-sdk/types';

export const _BatchResultErrorEntry: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'SenderFault',
        'Code',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        SenderFault: {
            shape: {
                type: 'boolean',
            },
        },
        Code: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
    },
};
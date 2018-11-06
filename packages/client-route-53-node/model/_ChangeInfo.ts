import {Structure as _Structure_} from '@aws-sdk/types';

export const _ChangeInfo: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'Status',
        'SubmittedAt',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Status: {
            shape: {
                type: 'string',
            },
        },
        SubmittedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        Comment: {
            shape: {
                type: 'string',
            },
        },
    },
};
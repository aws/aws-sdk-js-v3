import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateTrafficPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'Name',
        'Document',
    ],
    members: {
        Name: {
            shape: {
                type: 'string',
            },
        },
        Document: {
            shape: {
                type: 'string',
            },
        },
        Comment: {
            shape: {
                type: 'string',
            },
        },
    },
};
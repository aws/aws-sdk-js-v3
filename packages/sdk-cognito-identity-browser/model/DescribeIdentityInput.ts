import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeIdentityInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityId',
    ],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeIdentityPoolInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
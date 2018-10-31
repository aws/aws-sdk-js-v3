import {Structure as _Structure_} from '@aws-sdk/types';

export const _IdentityPoolShortDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityPoolName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
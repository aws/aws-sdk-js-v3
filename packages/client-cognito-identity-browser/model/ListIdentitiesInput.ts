import {Structure as _Structure_} from '@aws-sdk/types';

export const ListIdentitiesInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'MaxResults',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MaxResults: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        HideDisabled: {
            shape: {
                type: 'boolean',
            },
        },
    },
};
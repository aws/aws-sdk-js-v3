import {Structure as _Structure_} from '@aws/types';

export const _CognitoIdentityProvider: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ProviderName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ClientId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ServerSideTokenCheck: {
            shape: {
                type: 'boolean',
            },
        },
    },
};
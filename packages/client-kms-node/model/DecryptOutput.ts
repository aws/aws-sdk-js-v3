import {Structure as _Structure_} from '@aws-sdk/types';

export const DecryptOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Plaintext: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const GenerateDataKeyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CiphertextBlob: {
            shape: {
                type: 'blob',
            },
        },
        Plaintext: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
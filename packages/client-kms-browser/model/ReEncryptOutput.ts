import {Structure as _Structure_} from '@aws-sdk/types';

export const ReEncryptOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CiphertextBlob: {
            shape: {
                type: 'blob',
            },
        },
        SourceKeyId: {
            shape: {
                type: 'string',
                min: 1,
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
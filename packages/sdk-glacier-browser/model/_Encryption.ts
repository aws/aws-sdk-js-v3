import {Structure as _Structure_} from '@aws-sdk/types';

export const _Encryption: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EncryptionType: {
            shape: {
                type: 'string',
            },
        },
        KMSKeyId: {
            shape: {
                type: 'string',
            },
        },
        KMSContext: {
            shape: {
                type: 'string',
            },
        },
    },
};
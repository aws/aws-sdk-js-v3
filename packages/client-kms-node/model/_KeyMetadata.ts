import {Structure as _Structure_} from '@aws-sdk/types';

export const _KeyMetadata: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        AWSAccountId: {
            shape: {
                type: 'string',
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Arn: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
        CreationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
        KeyUsage: {
            shape: {
                type: 'string',
            },
        },
        KeyState: {
            shape: {
                type: 'string',
            },
        },
        DeletionDate: {
            shape: {
                type: 'timestamp',
            },
        },
        ValidTo: {
            shape: {
                type: 'timestamp',
            },
        },
        Origin: {
            shape: {
                type: 'string',
            },
        },
        ExpirationModel: {
            shape: {
                type: 'string',
            },
        },
        KeyManager: {
            shape: {
                type: 'string',
            },
        },
    },
};
import {Structure as _Structure_} from '@aws/types';

export const GetVaultLockOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Policy: {
            shape: {
                type: 'string',
            },
        },
        State: {
            shape: {
                type: 'string',
            },
        },
        ExpirationDate: {
            shape: {
                type: 'string',
            },
        },
        CreationDate: {
            shape: {
                type: 'string',
            },
        },
    },
};
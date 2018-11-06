import {Structure as _Structure_} from '@aws-sdk/types';

export const InitiateVaultLockOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        lockId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-lock-id',
        },
    },
};
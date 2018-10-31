import {Structure as _Structure_} from '@aws-sdk/types';

export const _Condition: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        HttpErrorCodeReturnedEquals: {
            shape: {
                type: 'string',
            },
        },
        KeyPrefixEquals: {
            shape: {
                type: 'string',
            },
        },
    },
};
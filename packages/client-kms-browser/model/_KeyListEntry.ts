import {Structure as _Structure_} from '@aws-sdk/types';

export const _KeyListEntry: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        KeyArn: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
    },
};
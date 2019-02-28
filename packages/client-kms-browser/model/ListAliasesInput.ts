import {Structure as _Structure_} from '@aws-sdk/types';

export const ListAliasesInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Marker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
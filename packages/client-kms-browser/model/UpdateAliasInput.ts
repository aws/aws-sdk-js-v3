import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateAliasInput: _Structure_ = {
    type: 'structure',
    required: [
        'AliasName',
        'TargetKeyId',
    ],
    members: {
        AliasName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TargetKeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
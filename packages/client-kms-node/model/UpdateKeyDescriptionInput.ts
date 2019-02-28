import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateKeyDescriptionInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'Description',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
    },
};
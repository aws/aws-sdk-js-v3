import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateMLModelInput: _Structure_ = {
    type: 'structure',
    required: [
        'MLModelId',
    ],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MLModelName: {
            shape: {
                type: 'string',
            },
        },
        ScoreThreshold: {
            shape: {
                type: 'float',
            },
        },
    },
};
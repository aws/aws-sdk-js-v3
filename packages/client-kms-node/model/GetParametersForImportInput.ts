import {Structure as _Structure_} from '@aws-sdk/types';

export const GetParametersForImportInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'WrappingAlgorithm',
        'WrappingKeySpec',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        WrappingAlgorithm: {
            shape: {
                type: 'string',
            },
        },
        WrappingKeySpec: {
            shape: {
                type: 'string',
            },
        },
    },
};
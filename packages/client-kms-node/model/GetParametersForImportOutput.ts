import {Structure as _Structure_} from '@aws-sdk/types';

export const GetParametersForImportOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ImportToken: {
            shape: {
                type: 'blob',
            },
        },
        PublicKey: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
        ParametersValidTo: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};
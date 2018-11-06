import {Structure as _Structure_} from '@aws-sdk/types';

export const GetFileInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'filePath',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        commitSpecifier: {
            shape: {
                type: 'string',
            },
        },
        filePath: {
            shape: {
                type: 'string',
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutFileInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'branchName',
        'fileContent',
        'filePath',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        fileContent: {
            shape: {
                type: 'blob',
            },
        },
        filePath: {
            shape: {
                type: 'string',
            },
        },
        fileMode: {
            shape: {
                type: 'string',
            },
        },
        parentCommitId: {
            shape: {
                type: 'string',
            },
        },
        commitMessage: {
            shape: {
                type: 'string',
            },
        },
        name: {
            shape: {
                type: 'string',
            },
        },
        email: {
            shape: {
                type: 'string',
            },
        },
    },
};
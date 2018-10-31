import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateBranchInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'branchName',
        'commitId',
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
        commitId: {
            shape: {
                type: 'string',
            },
        },
    },
};
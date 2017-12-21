import {Structure as _Structure_} from '@aws/types';

export const GetCommitInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'commitId',
    ],
    members: {
        repositoryName: {
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
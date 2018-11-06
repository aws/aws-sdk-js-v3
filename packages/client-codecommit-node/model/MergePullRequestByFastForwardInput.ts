import {Structure as _Structure_} from '@aws-sdk/types';

export const MergePullRequestByFastForwardInput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestId',
        'repositoryName',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        sourceCommitId: {
            shape: {
                type: 'string',
            },
        },
    },
};
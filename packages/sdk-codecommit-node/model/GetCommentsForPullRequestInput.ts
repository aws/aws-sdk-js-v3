import {Structure as _Structure_} from '@aws/types';

export const GetCommentsForPullRequestInput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestId',
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
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};
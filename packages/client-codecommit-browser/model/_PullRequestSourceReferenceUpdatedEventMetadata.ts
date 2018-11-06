import {Structure as _Structure_} from '@aws-sdk/types';

export const _PullRequestSourceReferenceUpdatedEventMetadata: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
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
        mergeBase: {
            shape: {
                type: 'string',
            },
        },
    },
};
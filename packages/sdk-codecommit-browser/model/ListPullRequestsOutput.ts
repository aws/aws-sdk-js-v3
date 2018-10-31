import {_PullRequestIdList} from './_PullRequestIdList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListPullRequestsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestIds',
    ],
    members: {
        pullRequestIds: {
            shape: _PullRequestIdList,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};
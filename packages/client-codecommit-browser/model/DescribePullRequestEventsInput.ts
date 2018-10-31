import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribePullRequestEventsInput: _Structure_ = {
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
        pullRequestEventType: {
            shape: {
                type: 'string',
            },
        },
        actorArn: {
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
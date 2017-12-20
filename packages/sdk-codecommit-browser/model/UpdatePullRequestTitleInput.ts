import {Structure as _Structure_} from '@aws/types';

export const UpdatePullRequestTitleInput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestId',
        'title',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        title: {
            shape: {
                type: 'string',
            },
        },
    },
};
import {_PullRequest} from './_PullRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdatePullRequestTitleOutput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequest',
    ],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};
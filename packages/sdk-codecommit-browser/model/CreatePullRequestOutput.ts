import {_PullRequest} from './_PullRequest';
import {Structure as _Structure_} from '@aws/types';

export const CreatePullRequestOutput: _Structure_ = {
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
import {_PullRequest} from './_PullRequest';
import {Structure as _Structure_} from '@aws/types';

export const MergePullRequestByFastForwardOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};
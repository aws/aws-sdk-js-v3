import {List as _List_} from '@aws-sdk/types';
import {_CommentsForPullRequest} from './_CommentsForPullRequest';

export const _CommentsForPullRequestData: _List_ = {
    type: 'list',
    member: {
        shape: _CommentsForPullRequest,
    },
};
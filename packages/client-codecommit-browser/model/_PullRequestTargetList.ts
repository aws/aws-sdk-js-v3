import {List as _List_} from '@aws-sdk/types';
import {_PullRequestTarget} from './_PullRequestTarget';

export const _PullRequestTargetList: _List_ = {
    type: 'list',
    member: {
        shape: _PullRequestTarget,
    },
};
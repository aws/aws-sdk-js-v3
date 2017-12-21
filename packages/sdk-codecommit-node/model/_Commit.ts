import {_ParentList} from './_ParentList';
import {_UserInfo} from './_UserInfo';
import {Structure as _Structure_} from '@aws/types';

export const _Commit: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        commitId: {
            shape: {
                type: 'string',
            },
        },
        treeId: {
            shape: {
                type: 'string',
            },
        },
        parents: {
            shape: _ParentList,
        },
        message: {
            shape: {
                type: 'string',
            },
        },
        author: {
            shape: _UserInfo,
        },
        committer: {
            shape: _UserInfo,
        },
        additionalData: {
            shape: {
                type: 'string',
            },
        },
    },
};
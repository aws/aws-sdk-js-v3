import {_Location} from './_Location';
import {_Comments} from './_Comments';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _CommentsForComparedCommit: _Structure_ = {
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
        beforeBlobId: {
            shape: {
                type: 'string',
            },
        },
        afterBlobId: {
            shape: {
                type: 'string',
            },
        },
        location: {
            shape: _Location,
        },
        comments: {
            shape: _Comments,
        },
    },
};
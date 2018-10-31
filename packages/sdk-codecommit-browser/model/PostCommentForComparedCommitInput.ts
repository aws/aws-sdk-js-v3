import {_Location} from './_Location';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PostCommentForComparedCommitInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'afterCommitId',
        'content',
    ],
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
        location: {
            shape: _Location,
        },
        content: {
            shape: {
                type: 'string',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};
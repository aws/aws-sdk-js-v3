import {Structure as _Structure_} from '@aws-sdk/types';

export const PostCommentReplyInput: _Structure_ = {
    type: 'structure',
    required: [
        'inReplyTo',
        'content',
    ],
    members: {
        inReplyTo: {
            shape: {
                type: 'string',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
    },
};
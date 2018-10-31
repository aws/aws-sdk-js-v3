import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteCommentContentInput: _Structure_ = {
    type: 'structure',
    required: [
        'commentId',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
    },
};
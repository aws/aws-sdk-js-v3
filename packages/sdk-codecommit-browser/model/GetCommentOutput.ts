import {_Comment} from './_Comment';
import {Structure as _Structure_} from '@aws/types';

export const GetCommentOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        comment: {
            shape: _Comment,
        },
    },
};
import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const TagResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'Tags',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Tags: {
            shape: _TagList,
        },
    },
};
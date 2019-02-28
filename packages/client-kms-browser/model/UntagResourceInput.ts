import {_TagKeyList} from './_TagKeyList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UntagResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'TagKeys',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TagKeys: {
            shape: _TagKeyList,
        },
    },
};
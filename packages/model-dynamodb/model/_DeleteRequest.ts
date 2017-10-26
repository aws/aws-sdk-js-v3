import {_Key} from './_Key';
import {Structure as _Structure_} from '@aws/types';

export const _DeleteRequest: _Structure_ = {
    type: 'structure',
    required: [
        'Key',
    ],
    members: {
        Key: {
            shape: _Key,
        },
    },
};
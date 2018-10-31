import {_TagMap} from './_TagMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTagsForVaultOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Tags: {
            shape: _TagMap,
        },
    },
};
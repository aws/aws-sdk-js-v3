import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListResourceTagsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Tags: {
            shape: _TagList,
        },
        NextMarker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Truncated: {
            shape: {
                type: 'boolean',
            },
        },
    },
};
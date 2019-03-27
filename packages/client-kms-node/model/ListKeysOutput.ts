import {_KeyList} from './_KeyList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListKeysOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Keys: {
            shape: _KeyList,
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
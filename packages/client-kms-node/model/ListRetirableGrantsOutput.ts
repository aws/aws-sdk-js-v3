import {_GrantList} from './_GrantList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListRetirableGrantsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Grants: {
            shape: _GrantList,
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
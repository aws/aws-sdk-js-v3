import {Structure as _Structure_} from '@aws/types';

export const _PartListElement: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RangeInBytes: {
            shape: {
                type: 'string',
            },
        },
        SHA256TreeHash: {
            shape: {
                type: 'string',
            },
        },
    },
};
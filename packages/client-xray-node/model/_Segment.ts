import {Structure as _Structure_} from '@aws-sdk/types';

export const _Segment: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Document: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
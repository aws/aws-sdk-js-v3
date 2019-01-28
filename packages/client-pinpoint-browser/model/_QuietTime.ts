import {Structure as _Structure_} from '@aws-sdk/types';

export const _QuietTime: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        End: {
            shape: {
                type: 'string',
            },
        },
        Start: {
            shape: {
                type: 'string',
            },
        },
    },
};
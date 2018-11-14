import {Structure as _Structure_} from '@aws-sdk/types';

export const _ErrorStatistics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ThrottleCount: {
            shape: {
                type: 'integer',
            },
        },
        OtherCount: {
            shape: {
                type: 'integer',
            },
        },
        TotalCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};
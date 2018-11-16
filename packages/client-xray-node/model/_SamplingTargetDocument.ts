import {Structure as _Structure_} from '@aws-sdk/types';

export const _SamplingTargetDocument: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RuleName: {
            shape: {
                type: 'string',
            },
        },
        FixedRate: {
            shape: {
                type: 'float',
            },
        },
        ReservoirQuota: {
            shape: {
                type: 'integer',
            },
        },
        ReservoirQuotaTTL: {
            shape: {
                type: 'timestamp',
            },
        },
        Interval: {
            shape: {
                type: 'integer',
            },
        },
    },
};
import {Structure as _Structure_} from '@aws-sdk/types';

export const _MetricDimension: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ComparisonOperator: {
            shape: {
                type: 'string',
            },
        },
        Value: {
            shape: {
                type: 'float',
            },
        },
    },
};
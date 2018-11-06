import {_DimensionList} from './_DimensionList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _CloudWatchAlarmConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'EvaluationPeriods',
        'Threshold',
        'ComparisonOperator',
        'Period',
        'MetricName',
        'Namespace',
        'Statistic',
    ],
    members: {
        EvaluationPeriods: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Threshold: {
            shape: {
                type: 'float',
            },
        },
        ComparisonOperator: {
            shape: {
                type: 'string',
            },
        },
        Period: {
            shape: {
                type: 'integer',
                min: 60,
            },
        },
        MetricName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Namespace: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Statistic: {
            shape: {
                type: 'string',
            },
        },
        Dimensions: {
            shape: _DimensionList,
        },
    },
};
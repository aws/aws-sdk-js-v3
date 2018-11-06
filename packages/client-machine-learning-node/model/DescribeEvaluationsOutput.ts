import {_Evaluations} from './_Evaluations';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeEvaluationsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Results: {
            shape: _Evaluations,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};
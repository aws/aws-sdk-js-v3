import {_BatchPredictions} from './_BatchPredictions';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeBatchPredictionsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Results: {
            shape: _BatchPredictions,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};
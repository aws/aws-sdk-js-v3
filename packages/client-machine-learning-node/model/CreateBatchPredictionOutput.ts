import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateBatchPredictionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BatchPredictionId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
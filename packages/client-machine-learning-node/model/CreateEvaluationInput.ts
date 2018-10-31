import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateEvaluationInput: _Structure_ = {
    type: 'structure',
    required: [
        'EvaluationId',
        'MLModelId',
        'EvaluationDataSourceId',
    ],
    members: {
        EvaluationId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        EvaluationName: {
            shape: {
                type: 'string',
            },
        },
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        EvaluationDataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
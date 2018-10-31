import {_TrainingParameters} from './_TrainingParameters';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateMLModelInput: _Structure_ = {
    type: 'structure',
    required: [
        'MLModelId',
        'MLModelType',
        'TrainingDataSourceId',
    ],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MLModelName: {
            shape: {
                type: 'string',
            },
        },
        MLModelType: {
            shape: {
                type: 'string',
            },
        },
        Parameters: {
            shape: _TrainingParameters,
        },
        TrainingDataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Recipe: {
            shape: {
                type: 'string',
            },
        },
        RecipeUri: {
            shape: {
                type: 'string',
            },
        },
    },
};
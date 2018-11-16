import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteFunctionConcurrencyInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
    ],
    members: {
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'FunctionName',
        },
    },
};
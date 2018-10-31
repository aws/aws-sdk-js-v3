import {Structure as _Structure_} from '@aws-sdk/types';

export const GetHealthCheckCountOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HealthCheckCount',
    ],
    members: {
        HealthCheckCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};
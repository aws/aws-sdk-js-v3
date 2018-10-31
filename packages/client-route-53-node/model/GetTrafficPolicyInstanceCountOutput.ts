import {Structure as _Structure_} from '@aws-sdk/types';

export const GetTrafficPolicyInstanceCountOutput: _Structure_ = {
    type: 'structure',
    required: [
        'TrafficPolicyInstanceCount',
    ],
    members: {
        TrafficPolicyInstanceCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};
import {_AutoScalingPolicyUpdate} from './_AutoScalingPolicyUpdate';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AutoScalingSettingsUpdate: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MinimumUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        MaximumUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        AutoScalingDisabled: {
            shape: {
                type: 'boolean',
            },
        },
        AutoScalingRoleArn: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ScalingPolicyUpdate: {
            shape: _AutoScalingPolicyUpdate,
        },
    },
};